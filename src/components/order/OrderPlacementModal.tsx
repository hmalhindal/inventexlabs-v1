'use client';

import type { EstimateQuotationOutput } from '@/ai/flows/estimate-quotation';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { DollarSign, Truck, ShoppingCart, User, MapPin, Loader2, Globe, Hash } from 'lucide-react';
import { useState, type Dispatch, type SetStateAction, useMemo } from 'react';
import { placeOrderAction } from '@/app/actions';

interface OrderPlacementModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  quotation: EstimateQuotationOutput | null;
}

const SHIPPING_COST = 5.00; // Example fixed shipping cost

/**
 * A component that displays a summary of the order, including costs and lead time.
 * @param {object} props - The component props.
 * @param {EstimateQuotationOutput} props.quotation - The quotation data.
 * @returns {JSX.Element} The rendered OrderSummaryCard component.
 */
const OrderSummaryCard: React.FC<{ quotation: EstimateQuotationOutput }> = ({ quotation }) => {
  const totalCost = useMemo(() => quotation.estimatedCost + SHIPPING_COST, [quotation.estimatedCost]);

  return (
    <div className="space-y-2 rounded-md border p-4 bg-secondary/50">
      <h4 className="font-semibold text-lg text-primary flex items-center gap-2">
        <ShoppingCart className="h-5 w-5" /> Order Summary
      </h4>
      <div className="flex justify-between text-sm text-muted-foreground">
        <span>Manufacturing Cost:</span>
        <span>{quotation.estimatedCost.toFixed(2)} KWD</span>
      </div>
      <div className="flex justify-between text-sm text-muted-foreground">
        <span>DHL Shipping:</span>
        <span>{SHIPPING_COST.toFixed(2)} KWD</span>
      </div>
       <div className="flex justify-between text-sm text-muted-foreground">
        <span>Lead Time:</span>
        <span>{quotation.leadTime}</span>
      </div>
      <Separator />
      <div className="flex justify-between text-base font-bold">
        <span>Total Cost:</span>
        <span>{totalCost.toFixed(2)} KWD</span>
      </div>
    </div>
  );
};


/**
 * A modal dialog for placing an order.
 * It includes a form for shipping details and an order summary.
 * On submission, it calls the `placeOrderAction` server action to initiate payment.
 *
 * @param {OrderPlacementModalProps} props - The component props.
 * @returns {JSX.Element | null} The rendered OrderPlacementModal component, or null if there is no quotation.
 */
export function OrderPlacementModal({ isOpen, setIsOpen, quotation }: OrderPlacementModalProps) {
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePlaceOrder = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!quotation) return;

    setIsProcessing(true);
    
    const formData = new FormData(event.currentTarget);
    const shippingDetails = {
      customerName: formData.get('customerName') as string,
      address: formData.get('address') as string,
      city: formData.get('city') as string,
      postalCode: formData.get('postalCode') as string,
      country: formData.get('country') as string,
    };
    
    const result = await placeOrderAction({ quotation, shippingDetails });

    if (result.error) {
        toast({
            variant: 'destructive',
            title: 'Payment Error',
            description: result.error,
        });
        setIsProcessing(false);
    } else if (result.paymentUrl) {
        // Redirect to MyFatoorah payment page
        window.location.href = result.paymentUrl;
    }
  };

  if (!quotation) return null;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-headline text-2xl text-primary">Complete Your Order</DialogTitle>
          <DialogDescription>Enter your shipping details to proceed to payment.</DialogDescription>
        </DialogHeader>
        
        <OrderSummaryCard quotation={quotation} />
        
        <form onSubmit={handlePlaceOrder} className="space-y-4">
           <div>
            <Label htmlFor="customerName" className="flex items-center gap-1 mb-1">
              <User className="h-4 w-4 text-muted-foreground" /> Full Name
            </Label>
            <Input id="customerName" name="customerName" type="text" placeholder="John Doe" required />
          </div>
           <div>
            <Label htmlFor="address" className="flex items-center gap-1 mb-1">
              <MapPin className="h-4 w-4 text-muted-foreground" /> Street Address
            </Label>
            <Input id="address" name="address" type="text" placeholder="123 Innovation Drive" required />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="city" className="flex items-center gap-1 mb-1">
                <MapPin className="h-4 w-4 text-muted-foreground" /> City
              </Label>
              <Input id="city" name="city" type="text" placeholder="Kuwait City" required />
            </div>
            <div>
              <Label htmlFor="postalCode" className="flex items-center gap-1 mb-1">
                <Hash className="h-4 w-4 text-muted-foreground" /> Postal Code
              </Label>
              <Input id="postalCode" name="postalCode" type="text" placeholder="13001" required />
            </div>
          </div>
           <div>
              <Label htmlFor="country" className="flex items-center gap-1 mb-1">
                <Globe className="h-4 w-4 text-muted-foreground" /> Country
              </Label>
              <Input id="country" name="country" type="text" defaultValue="Kuwait" required />
            </div>
        
          <DialogFooter className="mt-6">
            <Button type="button" variant="outline" onClick={() => setIsOpen(false)} disabled={isProcessing}>
              Cancel
            </Button>
            <Button type="submit" className="gap-2" disabled={isProcessing}>
              {isProcessing ? (
                <><Loader2 className="h-4 w-4 animate-spin" /> Redirecting...</>
              ) : (
                <><Truck className="h-4 w-4" /> Proceed to Payment</>
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
