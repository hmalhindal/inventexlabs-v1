
'use server';
/**
 * @fileOverview An AI flow for generating 3D mockups of designs.
 *
 * - generateMockup - Generates a mockup image based on a user's design and a text prompt.
 * - GenerateMockupInput - Input type for the generateMockup flow.
 * - GenerateMockupOutput - Output type for the generateMockup flow.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

export const GenerateMockupInputSchema = z.object({
  designDataUri: z
    .string()
    .describe(
      "The user's design (e.g., logo, sign) as a data URI. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
  prompt: z
    .string()
    .describe(
      'A text prompt describing the desired scene for the mockup (e.g., "a sign on a modern storefront").'
    ),
});
export type GenerateMockupInput = z.infer<typeof GenerateMockupInputSchema>;

export const GenerateMockupOutputSchema = z.object({
  imageDataUri: z.string().describe('The generated mockup image as a data URI.'),
});
export type GenerateMockupOutput = z.infer<typeof GenerateMockupOutputSchema>;


const mockupGeneratorFlow = ai.defineFlow(
  {
    name: 'mockupGeneratorFlow',
    inputSchema: GenerateMockupInputSchema,
    outputSchema: GenerateMockupOutputSchema,
  },
  async (input) => {
    const { media } = await ai.generate({
      model: 'googleai/gemini-2.0-flash-preview-image-generation',
      prompt: [
        { media: { url: input.designDataUri } },
        { text: `Create a realistic 3D mockup of the following scene: ${input.prompt}. Place the provided design naturally into the scene.` },
      ],
      config: {
        responseModalities: ['TEXT', 'IMAGE'],
      },
    });

    if (!media.url) {
      throw new Error('Image generation failed to return a data URI.');
    }

    return { imageDataUri: media.url };
  }
);


export async function generateMockup(input: GenerateMockupInput): Promise<GenerateMockupOutput> {
  return mockupGeneratorFlow(input);
}
