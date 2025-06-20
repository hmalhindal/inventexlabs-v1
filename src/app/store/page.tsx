
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ShoppingCart, Clock } from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Online Store - Inventex Labs',
  description: 'Browse and purchase products from the Inventex Labs online store. Shopify integration coming soon!',
};

export default function StorePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <ShoppingCart className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="font-headline text-4xl md:text-5xl text-primary mb-3">Inventex Labs Store</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our online store is currently under development. Products will be available soon!
          </p>
        </div>

        <Card className="w-full max-w-2xl mx-auto shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline text-2xl text-primary flex items-center gap-2">
              <Clock className="h-6 w-6" /> Coming Soon!
            </CardTitle>
            <CardDescription>
              We are working hard to bring you a seamless shopping experience.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-lg">
            <Image
              src="https://placehold.co/700x350.png"
              alt="Store placeholder"
              width={700}
              height={350}
              className="rounded-lg mb-6"
              data-ai-hint="store construction"
            />
            <p>
              Our online store will feature a range of products and manufacturing aids. We are planning to integrate with Shopify for a secure and convenient checkout process.
            </p>
            <p>
              In the meantime, you can explore our <Link href="/services" className="text-primary hover:underline">manufacturing services</Link> or <Link href="/contact-us" className="text-primary hover:underline">contact us</Link> if you have specific inquiries.
            </p>
            <p className="text-sm text-muted-foreground">
              Thank you for your patience. Check back soon for updates!
            </p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
