/**
 * @fileOverview Schemas and types for the mockup generation AI flow.
 */
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
