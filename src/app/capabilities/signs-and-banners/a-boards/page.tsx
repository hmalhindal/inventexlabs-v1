
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ABoardIcon } from '@/components/icons/SignIcons';

export const metadata: Metadata = {
  title: 'A-Boards & Pavement Signs - Inventex Labs',
  description: 'Durable and customizable A-board signs for storefronts and events at Inventex Labs.',
};

export default function ABoardsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <Card className="w-full max-w-4xl mx-auto shadow-lg">
          <CardHeader className="text-center">
            <ABoardIcon className="h-16 w-16 text-primary mx-auto mb-3" />
            <CardTitle className="font-headline text-4xl text-primary mb-2">A-Boards & Pavement Signs</CardTitle>
            <CardDescription className="text-xl text-muted-foreground">
              Attract foot traffic with versatile and sturdy pavement signs.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-lg">
            <Image 
              src="https://placehold.co/800x400.png" 
              alt="A wooden A-board sign outside a shop" 
              width={800} 
              height={400} 
              className="rounded-lg mb-6"
              data-ai-hint="storefront a-board"
            />
            <p>
              Capture the attention of passersby with our custom A-boards and pavement signs. Ideal for cafes, retail stores, and event promotions, these signs are a cost-effective way to advertise daily specials, sales, or directional information. We fabricate A-boards from a variety of materials including wood, metal, and durable plastics.
            </p>
            <p>
              Our A-boards can feature permanent printed graphics, chalkboard or whiteboard surfaces for changing messages, or snap frames for easily swappable posters. Let us create a design that matches your brand and withstands the elements.
            </p>
            <div className="text-center pt-6">
              <Button asChild size="lg">
                <Link href="/contact-us?subject=A-Boards%20Inquiry">Request a Quote for A-Boards</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
