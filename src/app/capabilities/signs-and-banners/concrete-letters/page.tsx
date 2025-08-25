
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ConcreteLettersIcon } from '@/components/icons/SignIcons';

export const metadata: Metadata = {
  title: 'Concrete Letters & Signs - Inventex Labs',
  description: 'Custom concrete and concrete-effect letters and signs for a modern, industrial look at Inventex Labs.',
};

export default function ConcreteLettersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <Card className="w-full max-w-4xl mx-auto shadow-lg">
          <CardHeader className="text-center">
            <ConcreteLettersIcon className="h-16 w-16 text-primary mx-auto mb-3" />
            <CardTitle className="font-headline text-4xl text-primary mb-2">Concrete Letters & Signs</CardTitle>
            <CardDescription className="text-xl text-muted-foreground">
              Achieve a bold, industrial aesthetic with custom concrete signage.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-lg">
            <Image 
              src="https://placehold.co/800x400.png" 
              alt="Large concrete letters forming a company logo" 
              width={800} 
              height={400} 
              className="rounded-lg mb-6"
              data-ai-hint="concrete letters logo"
            />
            <p>
              For a uniquely modern and robust look, consider concrete letters and signs from Inventex Labs. We create custom signage using real concrete or lightweight materials with a realistic concrete finish, perfect for achieving an industrial, minimalist, or brutalist design aesthetic.
            </p>
            <p>
              These signs are incredibly durable and suitable for both interior and exterior applications. They are ideal for architectural signage, business logos, and landscape features. We can cast custom shapes and letters or create concrete-effect finishes on other substrates for easier installation.
            </p>
            <div className="text-center pt-6">
              <Button asChild size="lg">
                <Link href="/contact-us?subject=Concrete%20Sign%20Inquiry">Inquire About Concrete Signage</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
