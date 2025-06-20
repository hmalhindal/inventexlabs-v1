
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import type { Metadata } from 'next';
import { Truck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Delivery Information - Inventex Labs',
  description: 'Learn about our delivery policies, charges, and timelines for orders within Kuwait and internationally.',
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
              How we get your Inventex Labs orders to you, locally and globally.
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6 space-y-8 text-base prose prose-slate dark:prose-invert max-w-none">
            
            <section>
              <h2 className="font-headline text-2xl text-primary mb-3">Delivery within Kuwait</h2>
              <p>
                We provide delivery for all orders made through our website to all areas in Kuwait.
              </p>
              <h3 className="font-semibold text-xl mt-4 mb-2">Timeline:</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Delivery will generally be completed within 2 business days of order confirmation.</li>
                <li>Orders placed after 5 PM Kuwait time will be processed on the next business day.</li>
                <li>Business days exclude Fridays and Public Holidays.</li>
              </ul>
              <h3 className="font-semibold text-xl mt-4 mb-2">Charges:</h3>
              <p>
                Delivery charges for orders within Kuwait will be displayed on the checkout page. Inventex Labs reserves the right to modify these charges at their discretion.
              </p>
            </section>

            <Separator />

            <section>
              <h2 className="font-headline text-2xl text-primary mb-3">International Shipping</h2>
              <p>
                Inventex Labs is pleased to offer international shipping to bring our products to customers around the globe. 
              </p>
              <p>
                We partner with <span className="font-semibold">DHL Express</span> for reliable and efficient global delivery.
              </p>
              <h3 className="font-semibold text-xl mt-4 mb-2">Timeline & Costs:</h3>
              <p>
                International shipping times and costs vary depending on the destination country and the size/weight of your order. All applicable shipping fees and estimated delivery times will be calculated and displayed at checkout.
              </p>
            </section>

            <Separator />
            
            <section>
              <h2 className="font-headline text-2xl text-primary mb-3">General Information</h2>
               <ul className="list-disc list-inside space-y-1">
                <li>Please ensure your delivery address is accurate and complete during checkout to avoid delays.</li>
                <li>You will receive tracking information once your order has been dispatched.</li>
              </ul>
            </section>

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
