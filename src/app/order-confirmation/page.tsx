
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { CheckCircle, AlertTriangle, Package, Truck, FileText } from 'lucide-react';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

type SearchParams = {
  orderId?: string;
  paymentId?: string;
  error?: string;
};

export default async function OrderConfirmationPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedSearchParams = await searchParams;
  const orderId = Array.isArray(resolvedSearchParams.orderId) ? resolvedSearchParams.orderId[0] : resolvedSearchParams.orderId;
  const paymentId = Array.isArray(resolvedSearchParams.paymentId) ? resolvedSearchParams.paymentId[0] : resolvedSearchParams.paymentId;
  const error = Array.isArray(resolvedSearchParams.error) ? resolvedSearchParams.error[0] : resolvedSearchParams.error;


  const isSuccess = paymentId && !error;
  const isFailure = !!error;

  let title = "Order Status";
  let description = `Details for order #${orderId || 'N/A'}`;
  let icon = <FileText className="h-16 w-16 text-muted-foreground mx-auto mb-4" />;
  let cardContent;

  if (isSuccess) {
    title = "Payment Successful!";
    description = `Your order #${orderId} has been confirmed.`;
    icon = <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />;
    cardContent = (
      <>
        <p className="text-muted-foreground">
          Thank you for your purchase. You will receive an email confirmation shortly with your order details.
          Your Payment ID is <span className="font-semibold text-foreground">{paymentId}</span>.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left mt-6">
          <div className="flex items-start p-4 bg-secondary/30 rounded-md">
            <Package className="h-8 w-8 text-primary mr-3 shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold">What's Next?</h3>
              <p className="text-sm text-muted-foreground">We're preparing your parts for manufacturing. Our team will review the design for any final checks.</p>
            </div>
          </div>
          <div className="flex items-start p-4 bg-secondary/30 rounded-md">
            <Truck className="h-8 w-8 text-primary mr-3 shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold">Estimated Delivery</h3>
              <p className="text-sm text-muted-foreground">Once manufacturing is complete, your order will be shipped via DHL. You can track its progress via the link in your email.</p>
            </div>
          </div>
        </div>
      </>
    );
  } else if (isFailure) {
    title = "Payment Failed";
    description = `There was an issue processing the payment for order #${orderId}.`;
    icon = <AlertTriangle className="h-16 w-16 text-destructive mx-auto mb-4" />;
    cardContent = (
      <p className="text-muted-foreground">
        Unfortunately, we could not process your payment. Please try placing the order again or contact your bank.
        If the problem persists, please contact our support team.
      </p>
    );
  } else {
    // Default view if accessed without payment params
    title = "Order Confirmation Pending";
    description = `Waiting for payment confirmation for order #${orderId || 'N/A'}.`;
    cardContent = (
       <p className="text-muted-foreground">
        If you have completed your payment, the status will update shortly. If you have any issues, please contact support.
      </p>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12 flex items-center justify-center">
        <Card className="w-full max-w-lg text-center shadow-xl">
          <CardHeader className="pb-4">
            {icon}
            <CardTitle className="font-headline text-3xl text-primary">{title}</CardTitle>
            <CardDescription className="text-lg">
              {description}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {cardContent}
          </CardContent>
           <CardFooter className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg">
                <Link href="/">Get Another Quote</Link>
              </Button>
              {isFailure && (
                 <Button asChild variant="outline" size="lg">
                    <Link href="/contact-us">Contact Support</Link>
                </Button>
              )}
            </CardFooter>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
