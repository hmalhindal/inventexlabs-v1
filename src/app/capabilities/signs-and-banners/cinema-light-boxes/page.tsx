
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CinemaLightBoxesIcon } from '@/components/icons/SignIcons';

export const metadata: Metadata = {
  title: 'Cinema Light Boxes - Inventex Labs',
  description: 'Classic cinema-style light boxes with changeable letters from Inventex Labs.',
};

export default function CinemaLightBoxesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <Card className="w-full max-w-4xl mx-auto shadow-lg">
          <CardHeader className="text-center">
            <CinemaLightBoxesIcon className="h-16 w-16 text-primary mx-auto mb-3" />
            <CardTitle className="font-headline text-4xl text-primary mb-2">Cinema Light Boxes</CardTitle>
            <CardDescription className="text-xl text-muted-foreground">
              Spell out your message with a touch of retro charm.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-lg">
            <Image 
              src="https://placehold.co/800x400.png" 
              alt="A cinema light box with custom text" 
              width={800} 
              height={400} 
              className="rounded-lg mb-6"
              data-ai-hint="cinema light box"
            />
            <p>
              Bring a bit of Hollywood nostalgia to your business or home with our custom-built cinema light boxes. These classic signs feature rows for changeable letters, allowing you to easily update your message, quote, or announcement. They are perfect for home theaters, cafes, event planners, and retail displays.
            </p>
            <p>
              We fabricate our cinema light boxes with durable frames and bright, even LED backlighting. Each light box comes with a full set of letters, numbers, and symbols so you can get creative right away.
            </p>
            <div className="text-center pt-6">
              <Button asChild size="lg">
                <Link href="/contact-us?subject=Cinema%20Light%20Box%20Inquiry">Order a Cinema Light Box</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
