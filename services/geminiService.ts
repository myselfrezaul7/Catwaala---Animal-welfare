
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
  const SYSTEM_INSTRUCTION = `${disclaimer} You are an expert AI Vet for CATWAALA, a cat welfare organization. Your primary purpose is to provide immediate, preliminary first aid guidance and general advice on cat care. Your advice should empower users to take immediate, safe steps while strongly encouraging them to seek professional help. Do not provide any diagnosis or prescribe medication. Keep your answers concise, empathetic, and easy to understand for a general audience.`;

  try {
    const ai = getAiClient();
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
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
        text: 'You are a vet assistant. Briefly describe this animal (breed, color) and its apparent condition. Note any visible signs of injury or distress. Keep the description to 2-3 sentences.'
    };

    try {
        const ai = getAiClient();
        const response = await ai.models.generateContent({
            model: 'gemini-3-pro-preview',
            contents: { parts: [imagePart, textPart] },
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
    const animalList = animals.map(a => `ID: ${a.id}, Name: ${a.name}, Breed: ${a.breed}, Age: ${a.age}, Gender: ${a.gender}, Description: ${a.description}`).join('\n');
    const prompt = `
        User Preferences: "${preferences}"
        
        Available Cats:
        ${animalList}
        
        Analyze the user's preferences and the available cats. Recommend the top 3 most suitable cats based on personality, age, and breed compatibility. For each recommendation, provide the cat's ID and a brief, one-sentence explanation for why it's a good match.
    `;
    const SYSTEM_INSTRUCTION = `You are an expert cat adoption counselor for CATWAALA. Your goal is to create successful, lasting adoptions by matching cats with the right owners.`;

    try {
        const ai = getAiClient();
        const response = await ai.models.generateContent({
            model: 'gemini-3-pro-preview',
            contents: prompt,
            config: {
                systemInstruction: SYSTEM_INSTRUCTION,
                thinkingConfig: { thinkingBudget: 2048 },
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
