
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { SaleIcon } from '@/components/icons/SignIcons';

export const metadata: Metadata = {
  title: 'Sale & Promotional Signs - Inventex Labs',
  description: 'Eye-catching sale banners, posters, and promotional signage from Inventex Labs.',
};

export default function SaleSignsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <Card className="w-full max-w-4xl mx-auto shadow-lg">
          <CardHeader className="text-center">
            <SaleIcon className="h-16 w-16 text-primary mx-auto mb-3" />
            <CardTitle className="font-headline text-4xl text-primary mb-2">Sale & Promotional Signs</CardTitle>
            <CardDescription className="text-xl text-muted-foreground">
              Drive sales and announce promotions with effective signage.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-lg">
            <Image 
              src="https://placehold.co/800x400.png" 
              alt="Brightly colored sale signs in a retail window" 
              width={800} 
              height={400} 
              className="rounded-lg mb-6"
              data-ai-hint="retail sale signs"
            />
            <p>
              Generate excitement and attract customers with our range of sale and promotional signage. Whether you need large window banners, point-of-sale displays, hanging posters, or freestanding signs, we can create bold, eye-catching graphics to announce your special offers.
            </p>
            <p>
              We offer fast turnarounds on a variety of materials suitable for short-term or seasonal promotions. Our design team can help you create a compelling message that converts foot traffic into sales.
            </p>
            <div className="text-center pt-6">
              <Button asChild size="lg">
                <Link href="/contact-us?subject=Sale%20Signage%20Inquiry">Get a Quote for Sale Signs</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
