import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Package, Truck } from 'lucide-react';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function OrderConfirmationPage({ searchParams: { orderId: orderIdFromSearch } }: { searchParams: { orderId?: string } }) {
  const orderId = orderIdFromSearch || 'N/A';

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12 flex items-center justify-center">
        <Card className="w-full max-w-lg text-center shadow-xl">
          <CardHeader className="pb-4">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <CardTitle className="font-headline text-3xl text-primary">Order Confirmed!</CardTitle>
            <CardDescription className="text-lg">
              Thank you for your purchase with Inventex Labs. Your order <span className="font-semibold text-primary">{orderId}</span> is being processed.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-muted-foreground">
              You will receive an email confirmation shortly with your order details and tracking information once it ships.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
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
                  <p className="text-sm text-muted-foreground">Once manufacturing is complete, your order will be shipped. You can track its progress via the link in your email.</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg">
                <Link href="/">Get Another Quote</Link>
              </Button>
              {/* <Button asChild variant="outline" size="lg">
                <Link href={`/track-order/${orderId}`}>Track Your Order</Link>
              </Button> */}
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
