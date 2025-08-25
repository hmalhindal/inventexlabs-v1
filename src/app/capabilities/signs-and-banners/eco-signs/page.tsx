
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { EcoSignsIcon } from '@/components/icons/SignIcons';

export const metadata: Metadata = {
  title: 'Eco-Friendly Signs - Inventex Labs',
  description: 'Sustainable and eco-friendly signage solutions from Inventex Labs.',
};

export default function EcoSignsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <Card className="w-full max-w-4xl mx-auto shadow-lg">
          <CardHeader className="text-center">
            <EcoSignsIcon className="h-16 w-16 text-primary mx-auto mb-3" />
            <CardTitle className="font-headline text-4xl text-primary mb-2">Eco-Friendly Signs</CardTitle>
            <CardDescription className="text-xl text-muted-foreground">
              Sustainable signage that's good for your brand and the planet.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-lg">
            <Image 
              src="https://placehold.co/800x400.png" 
              alt="An eco-friendly sign made from reclaimed wood" 
              width={800} 
              height={400} 
              className="rounded-lg mb-6"
              data-ai-hint="reclaimed wood sign"
            />
            <p>
              Showcase your commitment to sustainability with our range of eco-friendly signage. At Inventex Labs, we offer signage solutions crafted from recycled, reclaimed, and sustainable materials like bamboo, reclaimed wood, recycled acrylic, and aluminum composite which is highly recyclable.
            </p>
            <p>
              We also utilize environmentally-friendlier printing processes where possible. Choosing an eco-sign doesn't mean compromising on quality or style. We'll help you create a beautiful, durable sign that aligns with your green values.
            </p>
            <div className="text-center pt-6">
              <Button asChild size="lg">
                <Link href="/contact-us?subject=Eco%20Sign%20Inquiry">Learn About Eco-Friendly Options</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
