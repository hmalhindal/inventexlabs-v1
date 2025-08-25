
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { LightLettersIcon } from '@/components/icons/SignIcons';

export const metadata: Metadata = {
  title: 'Light Up Letters - Inventex Labs',
  description: 'Custom illuminated and marquee letters for events, weddings, and businesses at Inventex Labs.',
};

export default function LightLettersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <Card className="w-full max-w-4xl mx-auto shadow-lg">
          <CardHeader className="text-center">
            <LightLettersIcon className="h-16 w-16 text-primary mx-auto mb-3" />
            <CardTitle className="font-headline text-4xl text-primary mb-2">Light Up Letters</CardTitle>
            <CardDescription className="text-xl text-muted-foreground">
              Brighten up your space with custom illuminated letters.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-lg">
            <Image 
              src="https://placehold.co/800x400.png" 
              alt="Large marquee letters spelling LOVE" 
              width={800} 
              height={400} 
              className="rounded-lg mb-6"
              data-ai-hint="marquee letters event"
            />
            <p>
              Make a dazzling impression with light up letters from Inventex Labs. We specialize in creating high-quality marquee letters and illuminated signage perfect for any occasion. Whether it's for a wedding, a corporate event, or a permanent storefront display, our light up letters add a touch of glamour and sophistication.
            </p>
            <p>
              We offer various styles, from vintage marquee bulbs to modern LED-backlit options. Each letter is crafted with precision from durable materials and wired for safe, reliable operation. Choose any word, phrase, or logo to light up.
            </p>
            <div className="text-center pt-6">
              <Button asChild size="lg">
                <Link href="/contact-us?subject=Light%20Letters%20Inquiry">Inquire About Light Up Letters</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
