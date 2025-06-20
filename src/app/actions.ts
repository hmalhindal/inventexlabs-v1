'use server';
import { estimateQuotation as estimateQuotationFlow, EstimateQuotationInput, EstimateQuotationOutput } from '@/ai/flows/estimate-quotation';
import type { ServiceTypeName, MaterialName } from '@/lib/constants';

interface GetQuoteActionInput {
  cadDataUri: string;
  material: MaterialName;
  quantity: number;
  serviceType: ServiceTypeName;
}

export async function getQuoteAction(input: GetQuoteActionInput): Promise<{ data?: EstimateQuotationOutput; error?: string }> {
  try {
    // Validate input if necessary, though Zod in the flow does some validation.
    if (!input.cadDataUri || !input.material || input.quantity <= 0 || !input.serviceType) {
      return { error: 'Invalid input provided. All fields are required and quantity must be positive.' };
    }

    const aiInput: EstimateQuotationInput = {
      cadDataUri: input.cadDataUri,
      material: input.material,
      quantity: input.quantity,
      serviceType: input.serviceType,
    };
    
    const result = await estimateQuotationFlow(aiInput);
    return { data: result };
  } catch (e) {
    console.error('Error getting quote:', e);
    // It's good practice to not expose raw error messages to the client.
    // Log the actual error server-side and return a generic message.
    return { error: 'Failed to generate quotation. Please try again later.' };
  }
}
