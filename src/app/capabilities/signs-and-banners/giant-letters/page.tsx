
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { GiantLettersIcon } from '@/components/icons/SignIcons';

export const metadata: Metadata = {
  title: 'Giant Letters - Inventex Labs',
  description: 'Large-scale, custom-fabricated giant letters for events and branding at Inventex Labs.',
};

export default function GiantLettersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <Card className="w-full max-w-4xl mx-auto shadow-lg">
          <CardHeader className="text-center">
            <GiantLettersIcon className="h-16 w-16 text-primary mx-auto mb-3" />
            <CardTitle className="font-headline text-4xl text-primary mb-2">Giant Letters</CardTitle>
            <CardDescription className="text-xl text-muted-foreground">
              Make a big statement with oversized custom letters.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-lg">
            <Image 
              src="https://placehold.co/800x400.png" 
              alt="Giant letters at an outdoor event" 
              width={800} 
              height={400} 
              className="rounded-lg mb-6"
              data-ai-hint="large event letters"
            />
            <p>
              Capture attention and create unforgettable photo opportunities with giant letters from Inventex Labs. Perfect for weddings, corporate events, retail displays, and brand activations, our large-scale letters are custom fabricated to your specifications. We offer a range of materials, from lightweight foam for easy transport to durable wood and metal for long-term installations.
            </p>
            <p>
              Letters can be finished in any color, and we can incorporate lighting options, including marquee bulbs or LED illumination, for added impact.
            </p>
            <div className="text-center pt-6">
              <Button asChild size="lg">
                <Link href="/contact-us?subject=Giant%20Letters%20Inquiry">Get a Quote for Giant Letters</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
