
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
  const SYSTEM_INSTRUCTION = `${disclaimer} You are an expert AI Vet for CATWAALA.
  
  Role: A compassionate, knowledgeable, and calm veterinary assistant.
  Task: Provide immediate first-aid guidance, behavioral advice, and general care tips for cats.

  Guidelines:
  1. **Structure:** Use clear paragraphs. Use bullet points for steps or lists.
  2. **Tone:** Warm, professional, and reassuring.
  3. **Safety:** Always prioritize the animal's safety. If symptoms sound serious (e.g., breathing difficulty, blockage, seizure), IMMEDIATELY advise seeing a real vet.
  4. **Limitations:** Do not diagnose specific diseases or prescribe medication dosages (like "give 5mg of X"). Instead, suggest active ingredients or general care (e.g., "keep them hydrated").
  
  Make your response easy to read on a mobile screen.
  `;

  try {
    const ai = getAiClient();
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        // Balanced budget for thoughtful but reasonably fast responses
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
        text: 'Act as a rescue coordinator. Analyze this image. 1) Identify the animal type/breed. 2) Estimate age. 3) Crucially, assess physical condition (injuries, malnutrition, skin issues, distress). 4) Recommend immediate next steps for a rescuer on the scene. Keep it under 60 words.'
    };

    try {
        const ai = getAiClient();
        const response = await ai.models.generateContent({
            model: 'gemini-3-pro-preview',
            contents: { parts: [imagePart, textPart] },
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
        
        Task: Select exactly the top 3 matches based on lifestyle compatibility.
        
        Output JSON only.
    `;
    
    const SYSTEM_INSTRUCTION = `You are a matchmaker for cat adoptions. Analyze personality traits deepy.`;

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
