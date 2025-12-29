
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getMarketingStrategy = async (brandDescription: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are a world-class marketing strategist at Vantage, a high-end agency. 
      Analyze this brand: "${brandDescription}". 
      Provide a concise, punchy, and professional marketing direction (max 150 words). 
      Format with clear sections like: CORE CONCEPT, TARGET AUDIENCE, and VANTAGE ACTION PLAN. 
      Use bold headers and professional tone.`,
      config: {
        temperature: 0.8,
        topP: 0.95,
      }
    });

    return response.text || "I'm having trouble analyzing that brand right now. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The Strategy Engine is currently under maintenance. Please contact our human consultants.";
  }
};
