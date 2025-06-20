'use client';

import type { EstimateQuotationOutput } from '@/ai/flows/estimate-quotation';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { CreditCard, DollarSign, CalendarDays, Lock, ShoppingCart } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState, type Dispatch, type SetStateAction } from 'react';

interface OrderPlacementModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  quotation: EstimateQuotationOutput | null;
}

// A simplified component to show summary, can be expanded
const OrderSummaryCard: React.FC<{ quotation: EstimateQuotationOutput }> = ({ quotation }) => (
  <div className="space-y-2 rounded-md border p-4 bg-secondary/50">
    <h4 className="font-semibold text-lg text-primary flex items-center gap-2">
      <ShoppingCart className="h-5 w-5" /> Order Summary
    </h4>
    <div className="flex justify-between text-sm">
      <span>Total Estimated Cost:</span>
      <span className="font-medium">${quotation.estimatedCost.toFixed(2)}</span>
    </div>
    <div className="flex justify-between text-sm text-muted-foreground">
      <span>Material Cost:</span>
      <span>${quotation.materialCost.toFixed(2)}</span>
    </div>
    <div className="flex justify-between text-sm text-muted-foreground">
      <span>Labor Cost:</span>
      <span>${quotation.laborCost.toFixed(2)}</span>
    </div>
     <div className="flex justify-between text-sm text-muted-foreground">
      <span>Lead Time:</span>
      <span>{quotation.leadTime}</span>
    </div>
  </div>
);


export function OrderPlacementModal({ isOpen, setIsOpen, quotation }: OrderPlacementModalProps) {
  const { toast } = useToast();
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleConfirmOrder = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsProcessing(false);
    setIsOpen(false);
    
    const orderId = `IXL-${Date.now().toString().slice(-6)}`; // Updated Mock order ID for Inventex Labs
    router.push(`/order-confirmation?orderId=${orderId}`);
    toast({
      title: 'Order Confirmed!',
      description: `Your order ${orderId} has been placed successfully with Inventex Labs.`,
    });
  };

  if (!quotation) return null;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-headline text-2xl text-primary">Complete Your Order</DialogTitle>
          <DialogDescription>Review your order and enter payment details to proceed.</DialogDescription>
        </DialogHeader>
        
        <OrderSummaryCard quotation={quotation} />

        <Separator className="my-4" />
        
        <form onSubmit={handleConfirmOrder} className="space-y-4">
          <div>
            <Label htmlFor="cardNumber" className="flex items-center gap-1 mb-1">
              <CreditCard className="h-4 w-4 text-muted-foreground" /> Card Number
            </Label>
            <Input id="cardNumber" type="text" placeholder="0000 0000 0000 0000" required aria-label="Card Number" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="expiryDate" className="flex items-center gap-1 mb-1">
                <CalendarDays className="h-4 w-4 text-muted-foreground" /> Expiry Date
              </Label>
              <Input id="expiryDate" type="text" placeholder="MM/YY" required aria-label="Expiry Date" />
            </div>
            <div>
              <Label htmlFor="cvv" className="flex items-center gap-1 mb-1">
                <Lock className="h-4 w-4 text-muted-foreground" /> CVV
              </Label>
              <Input id="cvv" type="text" placeholder="123" required aria-label="CVV" />
            </div>
          </div>
        
          <DialogFooter className="mt-6">
            <Button type="button" variant="outline" onClick={() => setIsOpen(false)} disabled={isProcessing}>
              Cancel
            </Button>
            <Button type="submit" className="gap-2" disabled={isProcessing}>
              {isProcessing ? (
                <><svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg> Processing...</>
              ) : (
                <><DollarSign className="h-4 w-4" /> Confirm & Pay ${quotation.estimatedCost.toFixed(2)}</>
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
