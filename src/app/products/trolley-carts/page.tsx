
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Custom Trolley Carts - Inventex Labs',
  description: 'Branded and custom-fabricated trolley carts for retail, events, and promotional use.',
};

export default function TrolleyCartsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <ShoppingCart className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="font-headline text-4xl md:text-5xl text-primary mb-3">Custom Trolley Carts</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Functional and branded trolley carts for product displays, transportation, and events.
          </p>
        </div>

        <Card className="w-full max-w-2xl mx-auto shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline text-2xl text-primary flex items-center gap-2">
              Branded Cart Solutions
            </CardTitle>
            <CardDescription>
              Mobile displays and utility carts tailored to your brand.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-lg">
             <Image
              src="https://placehold.co/700x350.png"
              alt="Custom branded trolley cart"
              width={700}
              height={350}
              className="rounded-lg mb-6"
              data-ai-hint="shopping cart display"
            />
            <p>
              We design and fabricate custom trolley carts for a variety of uses, including in-store displays, event transportation, and promotional activities. Our carts can be fully branded and configured to meet your specific functional requirements.
            </p>
            <p>
              For custom manufacturing, please visit our <Link href="/" className="text-primary hover:underline">instant quote page</Link>.
            </p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
