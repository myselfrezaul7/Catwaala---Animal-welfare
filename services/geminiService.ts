import { GoogleGenAI, Type } from "@google/genai";
import type { Animal } from '../types';

if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable is not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const handleError = (error: unknown) => {
    console.error("Error generating content from Gemini:", error);
    return "I'm sorry, but I'm having trouble connecting to my knowledge base right now. Please try again later.";
}

export const getVetAssistantResponse = async (prompt: string): Promise<string> => {
  const SYSTEM_INSTRUCTION = `You are an AI Vet for CATWAALA, a cat welfare organization. Your primary purpose is to provide immediate, preliminary first aid guidance and general advice on cat care. Always start your response with a disclaimer: 'Disclaimer: I am an AI assistant and not a substitute for professional veterinary advice. Please consult a licensed veterinarian for any health concerns.' Your advice should empower users to take immediate, safe steps while strongly encouraging them to seek professional help. Do not provide any diagnosis or prescribe medication. Keep your answers concise and easy to understand for a general audience.`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
    return response.text;
  } catch (error) {
    return handleError(error);
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
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: { parts: [imagePart, textPart] },
        });
        return response.text;
    } catch (error) {
        return handleError(error);
    }
};

export const getPerfectMatch = async (preferences: string, animals: Animal[]): Promise<string> => {
    const animalList = animals.map(a => `ID: ${a.id}, Name: ${a.name}, Breed: ${a.breed}, Description: ${a.description}`).join('\n');
    const prompt = `
        User Preferences: "${preferences}"
        
        Available Cats:
        ${animalList}
        
        Analyze the user's preferences and the available cats. Recommend the top 3 most suitable cats. For each recommendation, provide the cat's ID and a brief, one-sentence explanation for why it's a good match.
    `;
    const SYSTEM_INSTRUCTION = `You are an expert cat adoption counselor for CATWAALA. Your goal is to create successful, lasting adoptions by matching cats with the right owners.`;

    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
            config: {
                systemInstruction: SYSTEM_INSTRUCTION,
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
        return response.text;
    } catch (error) {
        return handleError(error);
    }
};