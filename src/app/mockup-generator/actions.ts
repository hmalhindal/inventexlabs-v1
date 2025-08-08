
'use server';

import { generateMockup, GenerateMockupInput, GenerateMockupOutput } from '@/ai/flows/generate-mockup';

interface GenerateMockupActionInput {
  designDataUri: string;
  prompt: string;
}

export async function generateMockupAction(input: GenerateMockupActionInput): Promise<{ data?: GenerateMockupOutput; error?: string }> {
  try {
    if (!input.designDataUri || !input.prompt) {
      return { error: 'Invalid input provided. Design and prompt are required.' };
    }
    
    const result = await generateMockup(input as GenerateMockupInput);
    return { data: result };

  } catch (e) {
    console.error('Error generating mockup:', e);
    return { error: 'Failed to generate mockup. Please try again later.' };
  }
}
