
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { Metadata } from 'next';
import { Truck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Delivery Information - Inventex Labs',
  description: 'Learn about our delivery policies, charges, and timelines for orders within Kuwait.',
};

export default function DeliveryInformationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <Card className="w-full max-w-3xl mx-auto shadow-lg">
          <CardHeader className="text-center border-b pb-6">
            <Truck className="h-16 w-16 text-primary mx-auto mb-4" />
            <CardTitle className="font-headline text-4xl text-primary mb-2">Delivery Information</CardTitle>
            <CardDescription className="text-lg text-muted-foreground">
              Details about our order delivery process.
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6 space-y-6 text-base prose prose-slate dark:prose-invert max-w-none">
            <p>
              We provide delivery for all orders made through our website to all areas in Kuwait.
            </p>
            
            <h2>Delivery Timeline</h2>
            <ul className="list-disc list-inside">
              <li>Delivery will be done within 2 business days of confirmation.</li>
              <li>Any orders made after 5 PM Kuwait time will be processed only on the next working day.</li>
              <li>Fridays and Public holidays are not included in business days.</li>
            </ul>

            <h2>Delivery Charges</h2>
            <p>
              The delivery charges will be displayed on the checkout page. Inventex Labs reserves the right to modify this at their discretion.
            </p>

            <h2>Delivery Address & Payment</h2>
            <ul className="list-disc list-inside">
              <li>We will deliver the goods that are placed for order at the delivery address provided during the order registration process by you.</li>
              <li>If you have opted for Cash on Delivery, the payment has to be done in cash only.</li>
            </ul>

            <p className="pt-4 text-muted-foreground">
              For any further questions regarding delivery, please feel free to <a href="/contact-us" className="text-primary hover:underline">contact us</a>.
            </p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
