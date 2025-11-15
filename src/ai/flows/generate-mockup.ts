'use server';
/**
 * @fileOverview An AI flow for generating 3D mockups of designs.
 *
 * - generateMockup - Generates a mockup image based on a user's design and a text prompt.
 */

import { ai } from '@/ai/genkit';
import { GenerateMockupInputSchema, GenerateMockupOutputSchema, type GenerateMockupInput, type GenerateMockupOutput } from './generate-mockup-schema';

function sanitizePrompt(prompt: string): string {
  // Remove characters that could be used for prompt injection.
  // This is a basic example; a more robust solution would be needed for production.
  return prompt.replace(/[<>{}]/g, '');
}

const mockupGeneratorFlow = ai.defineFlow(
  {
    name: 'mockupGeneratorFlow',
    inputSchema: GenerateMockupInputSchema,
    outputSchema: GenerateMockupOutputSchema,
  },
  async (input) => {
    const sanitizedPrompt = sanitizePrompt(input.prompt);

    const { media } = await ai.generate({
      model: 'googleai/gemini-2.0-flash-preview-image-generation',
      prompt: [
        { media: { url: input.designDataUri } },
        { text: `Create a realistic 3D mockup of the following scene: ${sanitizedPrompt}. Place the provided design naturally into the scene.` },
      ],
      config: {
        responseModalities: ['TEXT', 'IMAGE'],
      },
    });

    if (!media || !media.url) {
      throw new Error('Image generation failed to return a data URI.');
    }

    return { imageDataUri: media.url };
  }
);


/**
 * Generates a mockup image based on a user's design and a text prompt.
 * This function serves as a wrapper around the Genkit flow.
 *
 * @param {GenerateMockupInput} input - The input for the mockup generation.
 * @returns {Promise<GenerateMockupOutput>} A promise that resolves to the generated mockup image data.
 */
export async function generateMockup(input: GenerateMockupInput): Promise<GenerateMockupOutput> {
  return mockupGeneratorFlow(input);
}
