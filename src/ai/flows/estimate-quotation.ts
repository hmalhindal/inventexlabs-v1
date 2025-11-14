// estimate-quotation.ts
'use server';

/**
 * @fileOverview Provides an AI-powered quotation estimation service for CAD designs.
 *
 * - estimateQuotation - Estimates the cost of manufacturing a CAD design.
 * - EstimateQuotationInput - Input type for estimateQuotation.
 * - EstimateQuotationOutput - Output type for estimateQuotation.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const EstimateQuotationInputSchema = z.object({
  cadDataUri: z
    .string()
    .describe(
      'The CAD file, as a data URI that must include a MIME type and use Base64 encoding. Expected format: \'data:<mimetype>;base64,<encoded_data>\'.' // Corrected typo here
    ),
  material: z.string().describe('The material to use for manufacturing.'),
  quantity: z.number().describe('The quantity of parts to manufacture.'),
  serviceType: z.enum(['laser cutting', 'CNC machining']).describe('The type of manufacturing service.'),
});

export type EstimateQuotationInput = z.infer<typeof EstimateQuotationInputSchema>;

const EstimateQuotationOutputSchema = z.object({
  estimatedCost: z.number().describe('The estimated cost of manufacturing the design.'),
  materialCost: z.number().describe('The cost of the material used.'),
  laborCost: z.number().describe('The estimated labor cost.'),
  machineTime: z.number().describe('The estimated machine time in minutes.'),
  leadTime: z.string().describe('The estimated lead time for the order.'),
});

export type EstimateQuotationOutput = z.infer<typeof EstimateQuotationOutputSchema>;

/**
 * Estimates the quotation for a given manufacturing job.
 * This function serves as a wrapper around the Genkit flow.
 *
 * @param {EstimateQuotationInput} input - The input for the quotation estimation.
 * @returns {Promise<EstimateQuotationOutput>} A promise that resolves to the estimated quotation.
 */
export async function estimateQuotation(input: EstimateQuotationInput): Promise<EstimateQuotationOutput> {
  return estimateQuotationFlow(input);
}

/**
 * A Genkit tool that analyzes a CAD file to determine its manufacturability and complexity.
 * In a real implementation, this would call a CAD processing service. This is a mock implementation.
 * @param {object} input - The input object.
 * @param {string} input.cadDataUri - The CAD file as a data URI.
 * @param {('laser cutting' | 'CNC machining')} input.serviceType - The manufacturing service type.
 * @returns {Promise<object>} A promise that resolves to an object containing manufacturability status, complexity score, and estimated machine time.
 */
const cadInterpretationTool = ai.defineTool({
  name: 'cadInterpretation',
  description: 'Analyzes a CAD file to determine its manufacturability and complexity.',
  inputSchema: z.object({
    cadDataUri: z
      .string()
      .describe(
        'The CAD file, as a data URI that must include a MIME type and use Base64 encoding. Expected format: \'data:<mimetype>;base64,<encoded_data>\'.'
      ),
    serviceType: z.enum(['laser cutting', 'CNC machining']).describe('The type of manufacturing service.'),
  }),
  outputSchema: z.object({
    isManufacturable: z.boolean().describe('Whether the CAD design is manufacturable.'),
    complexityScore: z.number().describe('A score indicating the complexity of the design (higher is more complex).'),
    estimatedMachineTime: z.number().describe('Estimated machine time in minutes.'),
  }),
}, async (input) => {
  // In a real implementation, this would call a CAD processing service.
  // This is a mock implementation.
  console.log("received cad data uri", input.cadDataUri);
  return {
    isManufacturable: true,
    complexityScore: Math.random() * 10,
    estimatedMachineTime: Math.random() * 60,
  };
});

/**
 * A Genkit tool that retrieves the cost per unit of a specified material.
 * In a real implementation, this would query a material database. This is a mock implementation.
 * @param {object} input - The input object.
 * @param {string} input.material - The name of the material.
 * @returns {Promise<number>} A promise that resolves to the cost per unit of the material.
 */
const materialCostTool = ai.defineTool({
  name: 'getMaterialCost',
  description: 'Retrieves the cost per unit of a specified material.',
  inputSchema: z.object({
    material: z.string().describe('The material name.'),
  }),
  outputSchema: z.number().describe('The cost per unit of the material.'),
}, async (input) => {
  // In a real implementation, this would query a material database.
  // This is a mock implementation.
  const materialCosts: { [key: string]: number } = {
    Aluminum: 2.0,
    Steel: 1.5,
    Plastic: 1.0,
  };

  const cost = materialCosts[input.material] || 1.0;
  return cost;
});

const prompt = ai.definePrompt({
  name: 'estimateQuotationPrompt',
  input: { schema: EstimateQuotationInputSchema },
  output: { schema: EstimateQuotationOutputSchema },
  tools: [cadInterpretationTool, materialCostTool],
  prompt: `You are an expert in manufacturing cost estimation.

  Based on the CAD design, material, quantity, and service type provided, you will provide an accurate cost estimate.
  You have access to tools that can help you analyze the CAD design and retrieve material costs.

  First, use the cadInterpretation tool to analyze the CAD design.
  Then, use the getMaterialCost tool to determine the cost of the material.

  Finally, based on the information from the tools, calculate the estimated cost, labor cost, machine time, and lead time.

  Here are the details:
  Material: {{{material}}}
  Quantity: {{{quantity}}}
  Service Type: {{{serviceType}}}

  Ensure that the estimatedCost is the total cost, including material and labor.
  The machineTime should be in minutes.
  The leadTime should be a reasonable estimate in days (e.g., \'3-5 days\').

  Remember to consider the complexity of the CAD design when estimating costs and lead times.
`,
});

const estimateQuotationFlow = ai.defineFlow(
  {
    name: 'estimateQuotationFlow',
    inputSchema: EstimateQuotationInputSchema,
    outputSchema: EstimateQuotationOutputSchema,
  },
  async input => {
    const { output } = await prompt(input);
    return output!;
  }
);
