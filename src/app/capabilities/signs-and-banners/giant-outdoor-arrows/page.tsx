
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { GiantOutdoorArrowsIcon } from '@/components/icons/SignIcons';

export const metadata: Metadata = {
  title: 'Giant Outdoor Arrows - Inventex Labs',
  description: 'Large, eye-catching arrow signs for wayfinding and promotion at Inventex Labs.',
};

export default function GiantOutdoorArrowsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <Card className="w-full max-w-4xl mx-auto shadow-lg">
          <CardHeader className="text-center">
            <GiantOutdoorArrowsIcon className="h-16 w-16 text-primary mx-auto mb-3" />
            <CardTitle className="font-headline text-4xl text-primary mb-2">Giant Outdoor Arrows</CardTitle>
            <CardDescription className="text-xl text-muted-foreground">
              Point the way with unmissable, oversized arrow signs.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-lg">
            <Image 
              src="https://placehold.co/800x400.png" 
              alt="A giant arrow sign pointing towards an event entrance" 
              width={800} 
              height={400} 
              className="rounded-lg mb-6"
              data-ai-hint="giant arrow sign"
            />
            <p>
              Ensure your guests or customers never lose their way with our giant outdoor arrow signs. Perfect for festivals, large venues, real estate developments, and promotional events, these oversized arrows provide clear, unmissable direction.
            </p>
            <p>
              We fabricate our giant arrows from durable, weather-resistant materials to withstand outdoor conditions. They can be branded with your colors and logo, and we offer options for illumination to ensure they are visible day and night.
            </p>
            <div className="text-center pt-6">
              <Button asChild size="lg">
                <Link href="/contact-us?subject=Giant%20Arrow%20Inquiry">Get a Quote for Giant Arrows</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
