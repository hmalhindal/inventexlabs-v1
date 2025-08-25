
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { LightBoxesIcon } from '@/components/icons/SignIcons';

export const metadata: Metadata = {
  title: 'Light Boxes - Inventex Labs',
  description: 'Custom-fabricated illuminated light box signs for businesses and retail at Inventex Labs.',
};

export default function LightBoxesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <Card className="w-full max-w-4xl mx-auto shadow-lg">
          <CardHeader className="text-center">
            <LightBoxesIcon className="h-16 w-16 text-primary mx-auto mb-3" />
            <CardTitle className="font-headline text-4xl text-primary mb-2">Light Boxes</CardTitle>
            <CardDescription className="text-xl text-muted-foreground">
              Illuminate your brand, day and night.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-lg">
            <Image 
              src="https://placehold.co/800x400.png" 
              alt="A bright, illuminated light box sign on a storefront" 
              width={800} 
              height={400} 
              className="rounded-lg mb-6"
              data-ai-hint="storefront light box"
            />
            <p>
              Light box signs are a classic and highly effective way to increase your business's visibility. At Inventex Labs, we build high-quality, custom light boxes in any shape or size. Using energy-efficient LED technology and durable materials, our light boxes ensure your brand is seen in the best possible light.
            </p>
            <p>
              We can produce single-sided boxes for wall mounting or double-sided projecting signs. The faces can be made from printed acrylic or feature vinyl graphics, allowing for full-color, vibrant displays.
            </p>
            <div className="text-center pt-6">
              <Button asChild size="lg">
                <Link href="/contact-us?subject=Light%20Box%20Inquiry">Get a Light Box Quote</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
