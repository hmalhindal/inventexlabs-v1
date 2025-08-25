
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { AllSignsIcon } from '@/components/icons/SignIcons';

export const metadata: Metadata = {
  title: 'All Signs - Inventex Labs',
  description: 'Explore our complete range of custom signs and banners at Inventex Labs.',
};

export default function AllSignsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <Card className="w-full max-w-4xl mx-auto shadow-lg">
          <CardHeader className="text-center">
            <AllSignsIcon className="h-16 w-16 text-primary mx-auto mb-3" />
            <CardTitle className="font-headline text-4xl text-primary mb-2">All Signs</CardTitle>
            <CardDescription className="text-xl text-muted-foreground">
              Your one-stop solution for every type of custom signage.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-lg">
            <Image 
              src="https://placehold.co/800x400.png" 
              alt="A collection of various signs" 
              width={800} 
              height={400} 
              className="rounded-lg mb-6"
              data-ai-hint="signage collection"
            />
            <p>
              At Inventex Labs, we offer a comprehensive selection of custom sign solutions to meet any need. From illuminated lightboxes to durable outdoor signs and elegant indoor displays, our state-of-the-art fabrication technology ensures a high-quality finish for every project. Browse our categories to find the perfect sign for your business or event.
            </p>
            <p>
              We work with a variety of materials including acrylic, metal, wood, and more to bring your vision to life. Our team is ready to help you with design, material selection, and installation.
            </p>
            <div className="text-center pt-6">
              <Button asChild size="lg">
                <Link href="/contact-us?subject=All%20Signs%20Inquiry">Get a Quote</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
