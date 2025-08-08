
'use server';

import { generateMockup } from '@/ai/flows/generate-mockup';
import type { GenerateMockupInput, GenerateMockupOutput } from '@/ai/flows/generate-mockup-schema';


export async function generateMockupAction(input: GenerateMockupInput): Promise<{ data?: GenerateMockupOutput; error?: string }> {
  try {
    if (!input.designDataUri || !input.prompt) {
      return { error: 'Invalid input provided. Design and prompt are required.' };
    }
    
    const result = await generateMockup(input);
    return { data: result };

  } catch (e) {
    console.error('Error generating mockup:', e);
    return { error: 'Failed to generate mockup. Please try again later.' };
  }
}
