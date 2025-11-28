import { GoogleGenAI, Type } from "@google/genai";
import type { Animal } from '../types';

// Lazily initialize the AI client to avoid crashing the app on load
// if the API key is not yet available. This makes the app more resilient.
const getAiClient = (): GoogleGenAI => {
    // Safety check for the process object to prevent runtime errors in environments where it's not polyfilled
    let apiKey: string | undefined;
    try {
        apiKey = typeof process !== 'undefined' ? process.env.API_KEY : undefined;
    } catch (e) {
        console.warn("Unable to access process.env.API_KEY", e);
    }

    if (!apiKey) {
        // This error will now only be thrown when an AI feature is used,
        // not on initial app load.
        throw new Error("API_KEY environment variable is not set");
    }
    return new GoogleGenAI({ apiKey });
};

export const getVetAssistantResponse = async (prompt: string, disclaimer: string): Promise<string> => {
  const SYSTEM_INSTRUCTION = `${disclaimer} You are an expert AI Vet for CATWAALA, a premier cat welfare organization. 
  Your primary purpose is to provide immediate, calming, and accurate preliminary first aid guidance and general advice on cat care.
  
  Guidelines:
  1. **Empower the user:** Give clear, actionable steps they can take immediately.
  2. **Safety First:** Strongly encourage seeking professional help if symptoms suggest an emergency.
  3. **Tone:** Be empathetic, concise, professional, yet warm. Avoid jargon.
  4. **Limitations:** Do not diagnose specific diseases or prescribe medication dosages.
  `;

  try {
    const ai = getAiClient();
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        // Increased budget slightly for more complex reasoning on symptoms
        thinkingConfig: { thinkingBudget: 2048 }, 
      },
    });
    return response.text || "";
  } catch (error) {
    console.error("Error in getVetAssistantResponse:", error);
    if (error instanceof Error && error.message.includes("API_KEY")) {
        throw new Error("API_KEY environment variable is not set");
    }
    throw new Error("ai_assistant_unavailable");
  }
};

export const analyzeAnimalImage = async (base64ImageData: string): Promise<string> => {
    const imagePart = {
        inlineData: {
            mimeType: 'image/jpeg',
            data: base64ImageData,
        },
    };
    const textPart = {
        text: 'Analyze this image for a rescue report. Briefly identify the animal (breed estimation if possible), its color, and crucially, assess its apparent physical condition. Look for signs of injury, distress, malnutrition, or skin conditions. Keep the description professional, objective, and under 4 sentences.'
    };

    try {
        const ai = getAiClient();
        const response = await ai.models.generateContent({
            model: 'gemini-3-pro-preview',
            contents: { parts: [imagePart, textPart] },
            // Gemini 3 Pro is excellent at vision, usually doesn't need high thinking budget for basic description
            // but we allow some for medical assessment reasoning.
            config: {
                 thinkingConfig: { thinkingBudget: 1024 }, 
            }
        });
        return response.text || "";
    } catch (error) {
        console.error("Error in analyzeAnimalImage:", error);
        if (error instanceof Error && error.message.includes("API_KEY")) {
            throw new Error("API_KEY environment variable is not set");
        }
        throw new Error("ai_image_analysis_failed");
    }
};

export const getPerfectMatch = async (preferences: string, animals: Animal[]): Promise<string> => {
    // Enrich context with all available data points
    const animalList = animals.map(a => 
        `ID: ${a.id}, Name: ${a.name}, Breed: ${a.breed}, Age: ${a.age}, Gender: ${a.gender}, Description: ${a.description}`
    ).join('\n');

    const prompt = `
        User Preferences: "${preferences}"
        
        Available Cats:
        ${animalList}
        
        Task: Analyze the user's specific lifestyle, energy levels, and household composition against the available cats. 
        Select exactly the top 3 most suitable matches.
        
        For each match, explain *specifically* why their personality traits (from description/breed) fit the user's needs.
    `;
    
    const SYSTEM_INSTRUCTION = `You are an expert cat adoption counselor for CATWAALA. Your goal is to create successful, lasting adoptions. You are insightful and consider nuances in personality compatibility.`;

    try {
        const ai = getAiClient();
        const response = await ai.models.generateContent({
            model: 'gemini-3-pro-preview',
            contents: prompt,
            config: {
                systemInstruction: SYSTEM_INSTRUCTION,
                thinkingConfig: { thinkingBudget: 4096 }, // Higher budget for complex matching logic
                responseMimeType: 'application/json',
                responseSchema: {
                    type: Type.OBJECT,
                    properties: {
                        matches: {
                            type: Type.ARRAY,
                            items: {
                                type: Type.OBJECT,
                                properties: {
                                    animalId: { type: Type.NUMBER },
                                    reasoning: { type: Type.STRING }
                                },
                                required: ['animalId', 'reasoning']
                            }
                        }
                    },
                    required: ['matches']
                }
            },
        });
        return response.text || "{}";
    } catch (error) {
        console.error("Error in getPerfectMatch:", error);
        if (error instanceof Error && error.message.includes("API_KEY")) {
            throw new Error("API_KEY environment variable is not set");
        }
        throw new Error("ai_match_failed");
    }
};