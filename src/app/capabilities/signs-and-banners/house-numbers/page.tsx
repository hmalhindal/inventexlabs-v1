
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { HouseNumbersIcon } from '@/components/icons/SignIcons';

export const metadata: Metadata = {
  title: 'House Numbers - Inventex Labs',
  description: 'Custom and designer house numbers in various materials and styles from Inventex Labs.',
};

export default function HouseNumbersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <Card className="w-full max-w-4xl mx-auto shadow-lg">
          <CardHeader className="text-center">
            <HouseNumbersIcon className="h-16 w-16 text-primary mx-auto mb-3" />
            <CardTitle className="font-headline text-4xl text-primary mb-2">House Numbers</CardTitle>
            <CardDescription className="text-xl text-muted-foreground">
              Stylish and modern address numbers for your home or business.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-lg">
            <Image 
              src="https://placehold.co/800x400.png" 
              alt="Modern house numbers on a wall" 
              width={800} 
              height={400} 
              className="rounded-lg mb-6"
              data-ai-hint="modern house numbers"
            />
            <p>
              Enhance your property's curb appeal with our custom-fabricated house numbers. We move beyond generic hardware store options to offer designer address plaques and individual numbers in a wide range of fonts, sizes, and materials.
            </p>
            <p>
              Choose from sleek brushed aluminum, rustic wood, modern acrylic, or bold powder-coated steel. We can create floating numbers with stand-offs for a 3D effect or elegant address plaques. We also offer options with backlighting for nighttime visibility.
            </p>
            <div className="text-center pt-6">
              <Button asChild size="lg">
                <Link href="/contact-us?subject=House%20Numbers%20Inquiry">Design Your House Numbers</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
