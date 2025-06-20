'use client';

import type { EstimateQuotationOutput } from '@/ai/flows/estimate-quotation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { DollarSign, TrendingUp, Wrench, Shapes, Clock, Truck, ThumbsUp } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

interface QuotationDisplayProps {
  quotation: EstimateQuotationOutput | null;
  isLoading: boolean;
  onPlaceOrder: () => void;
}

const StatItem: React.FC<{ icon: React.ElementType; label: string; value: string | number; unit?: string }> = ({ icon: Icon, label, value, unit }) => (
  <div className="flex items-center justify-between py-3">
    <div className="flex items-center gap-3">
      <Icon className="h-5 w-5 text-primary" />
      <span className="text-sm text-muted-foreground">{label}</span>
    </div>
    <span className="text-sm font-medium">
      {value} {unit}
    </span>
  </div>
);


export function QuotationDisplay({ quotation, isLoading, onPlaceOrder }: QuotationDisplayProps) {
  if (isLoading) {
    return (
      <Card className="w-full shadow-lg">
        <CardHeader>
          <Skeleton className="h-8 w-3/4" />
          <Skeleton className="h-4 w-1/2 mt-1" />
        </CardHeader>
        <CardContent className="space-y-3">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex items-center justify-between py-3">
              <div className="flex items-center gap-3">
                <Skeleton className="h-5 w-5 rounded-full" />
                <Skeleton className="h-4 w-24" />
              </div>
              <Skeleton className="h-4 w-16" />
            </div>
          ))}
        </CardContent>
        <CardFooter>
          <Skeleton className="h-10 w-full" />
        </CardFooter>
      </Card>
    );
  }

  if (!quotation) {
    return (
      <Card className="w-full shadow-lg flex flex-col items-center justify-center min-h-[300px] text-center">
        <CardHeader>
          <CardTitle className="font-headline text-xl">Your Quotation Awaits</CardTitle>
        </CardHeader>
        <CardContent>
          <TrendingUp className="h-16 w-16 text-primary mx-auto mb-4" />
          <p className="text-muted-foreground">
            Fill out the form to get an instant price estimate for your design.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full shadow-lg">
      <CardHeader>
        <CardTitle className="font-headline text-2xl text-primary flex items-center gap-2">
           <ThumbsUp className="h-7 w-7" /> Your FabQuote Estimate
        </CardTitle>
        <CardDescription>Here's the breakdown of your manufacturing cost.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-1">
          <StatItem icon={DollarSign} label="Estimated Total Cost" value={`$${quotation.estimatedCost.toFixed(2)}`} />
          <Separator />
          <StatItem icon={Shapes} label="Material Cost" value={`$${quotation.materialCost.toFixed(2)}`} />
          <Separator />
          <StatItem icon={Wrench} label="Labor Cost" value={`$${quotation.laborCost.toFixed(2)}`} />
          <Separator />
          <StatItem icon={Clock} label="Machine Time" value={quotation.machineTime} unit="minutes" />
          <Separator />
          <StatItem icon={Truck} label="Estimated Lead Time" value={quotation.leadTime} />
        </div>
      </CardContent>
      <CardFooter className="flex-col gap-4">
        <Button size="lg" className="w-full font-semibold" onClick={onPlaceOrder} aria-label="Place your order">
          Place Order & Proceed to Checkout
        </Button>
        <p className="text-xs text-muted-foreground text-center">
          Note: This is an estimate. Final price may vary based on detailed design review.
        </p>
      </CardFooter>
    </Card>
  );
}
