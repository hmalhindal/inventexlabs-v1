
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Laser Cutting Services - Inventex Labs',
  description: 'Precision laser cutting services for metals, plastics, and other materials at Inventex Labs. Fast, accurate, and versatile.',
};

export default function LaserCuttingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <Card className="w-full max-w-4xl mx-auto shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="font-headline text-4xl text-primary mb-2">Laser Cutting Services</CardTitle>
            <CardDescription className="text-xl text-muted-foreground">
              Precision Cutting for Intricate Designs & Rapid Prototyping
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-lg">
            <Image 
              src="https://placehold.co/800x400.png" 
              alt="Laser cutter in action" 
              width={800} 
              height={400} 
              className="rounded-lg mb-6"
              data-ai-hint="laser cutter"
            />
            <p>
              Inventex Labs offers advanced laser cutting services, providing a fast, flexible, and precise method for cutting a wide variety of materials. Our state-of-the-art laser systems can handle complex geometries and intricate patterns with exceptional accuracy.
            </p>
            <p>
              We specialize in cutting metals like steel, stainless steel, and aluminum, as well as plastics such as acrylic and Delrin, and even wood or textiles for specific applications. Laser cutting is ideal for producing prototypes, custom parts, signage, enclosures, and decorative items.
            </p>
            <div className="my-6 flex justify-center">
              <Image 
                src="https://placehold.co/300x200.png"
                alt="Inventex Labs Laser Cutting Service Showcase"
                width={300} 
                height={200} 
                className="rounded-md shadow-md"
                data-ai-hint="laser cut part"
              />
            </div>
            <h2 className="font-headline text-2xl text-primary pt-4">Advantages of Laser Cutting with Us:</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>High precision and tight tolerances</li>
              <li>Clean, smooth edge finishes with minimal burring</li>
              <li>Ability to cut complex shapes and intricate details</li>
              <li>Fast turnaround times, suitable for rapid prototyping</li>
              <li>Minimal material distortion due to localized heat</li>
              <li>Versatile material compatibility</li>
            </ul>
            <p className="pt-4">
              Bring your designs to life with the precision of laser cutting. Upload your vector file (DXF, DWG, AI, SVG) to our platform to get an instant quote.
            </p>
            <div className="text-center pt-6">
              <Button asChild size="lg">
                <Link href="/">Get a Laser Cutting Quote</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

