
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { LedNeonSignsIcon } from '@/components/icons/SignIcons';

export const metadata: Metadata = {
  title: 'LED Neon Signs - Inventex Labs',
  description: 'Custom, energy-efficient LED neon signs that capture the classic neon look at Inventex Labs.',
};

export default function LedNeonSignsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <Card className="w-full max-w-4xl mx-auto shadow-lg">
          <CardHeader className="text-center">
            <LedNeonSignsIcon className="h-16 w-16 text-primary mx-auto mb-3" />
            <CardTitle className="font-headline text-4xl text-primary mb-2">LED Neon Signs</CardTitle>
            <CardDescription className="text-xl text-muted-foreground">
              The classic neon vibe, reimagined with modern technology.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-lg">
            <Image 
              src="https://placehold.co/800x400.png" 
              alt="A vibrant custom LED neon sign on a wall" 
              width={800} 
              height={400} 
              className="rounded-lg mb-6"
              data-ai-hint="custom neon sign"
            />
            <p>
              Get the timeless, eye-catching look of traditional neon signs with the advantages of modern LED technology. Our custom LED neon signs are safer, more durable, more energy-efficient, and more affordable than glass neon. They are perfect for business logos, artistic installations, event decor, and personalized gifts.
            </p>
            <p>
              We can turn any design or text into a brilliant LED neon sign. Available in a wide range of colors, our signs are mounted on clear acrylic backing for easy installation and a clean, professional finish.
            </p>
            <div className="text-center pt-6">
              <Button asChild size="lg">
                <Link href="/contact-us?subject=LED%20Neon%20Inquiry">Create Your Own LED Neon Sign</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
