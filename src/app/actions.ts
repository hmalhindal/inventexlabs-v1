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


interface PlaceOrderActionInput {
  quotation: EstimateQuotationOutput;
  shippingDetails: {
    customerName: string;
    address: string;
    city: string;
    postalCode: string;
    country: string;
  };
}

export async function placeOrderAction(input: PlaceOrderActionInput): Promise<{ paymentUrl?: string; error?: string }> {
  const { quotation, shippingDetails } = input;
  const myFatoorahToken = process.env.MYFATOORAH_API_TOKEN;

  if (!myFatoorahToken || myFatoorahToken === 'YOUR_MYFATOORAH_API_TOKEN') {
    console.error('MyFatoorah API token is not configured in .env file.');
    return { error: 'Payment processing is not configured correctly.' };
  }

  // In a real application, integrate with DHL here to calculate shipping cost
  // based on shippingDetails and CAD file properties (e.g., weight, dimensions).
  // For this example, we'll use a fixed shipping cost.
  const shippingCost = 5.00; // Example: 5 KWD fixed shipping cost
  const totalAmount = quotation.estimatedCost + shippingCost;
  const orderId = `IXL-${Date.now().toString().slice(-6)}`;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

  const payload = {
    CustomerName: shippingDetails.customerName,
    NotificationOption: 'LNK', // Send payment link via API response
    InvoiceValue: totalAmount,
    CurrencyIso: 'KWD', // Kuwaiti Dinar
    CallBackUrl: `${baseUrl}/order-confirmation?orderId=${orderId}`,
    ErrorUrl: `${baseUrl}/order-confirmation?orderId=${orderId}&error=true`,
    CustomerAddress: {
      Block: '',
      Street: shippingDetails.address,
      HouseBuildingNo: '',
      Address: `${shippingDetails.address}, ${shippingDetails.city}, ${shippingDetails.postalCode}, ${shippingDetails.country}`,
      AddressInstructions: '',
    },
    InvoiceItems: [
        {
            ItemName: 'Manufacturing Service',
            Quantity: 1,
            UnitPrice: quotation.estimatedCost,
        },
        {
            ItemName: 'DHL Shipping',
            Quantity: 1,
            UnitPrice: shippingCost,
        },
    ],
  };

  try {
    // Use MyFatoorah's test environment endpoint
    const response = await fetch('https://apitest.myfatoorah.com/v2/SendPayment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${myFatoorahToken}`,
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (!response.ok || !result.IsSuccess) {
      console.error('MyFatoorah API Error:', result.ValidationErrors || result.Message);
      const errorMessage = result.ValidationErrors?.[0]?.Error || result.Message || 'Failed to initiate payment. Please try again.';
      return { error: errorMessage };
    }

    return { paymentUrl: result.Data.InvoiceURL };

  } catch (e) {
    console.error('Error contacting MyFatoorah:', e);
    return { error: 'Failed to connect to payment provider. Please try again later.' };
  }
}
