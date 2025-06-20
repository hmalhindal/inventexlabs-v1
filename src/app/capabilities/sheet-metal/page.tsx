
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sheet Metal Fabrication - Inventex Labs',
  description: 'Discover custom sheet metal fabrication services at Inventex Labs, including laser cutting, bending, and welding.',
};

export default function SheetMetalPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <Card className="w-full max-w-4xl mx-auto shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="font-headline text-4xl text-primary mb-2">Sheet Metal Fabrication</CardTitle>
            <CardDescription className="text-xl text-muted-foreground">
              Versatile Solutions for Metal Components and Enclosures
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-lg">
            <Image 
              src="https://placehold.co/800x400.png" 
              alt="Sheet metal fabrication process" 
              width={800} 
              height={400} 
              className="rounded-lg mb-6"
              data-ai-hint="metal fabrication"
            />
            <p>
              Inventex Labs offers comprehensive sheet metal fabrication services, transforming flat metal sheets into precise, durable parts and assemblies. Our capabilities include laser cutting, punching, bending, welding, and finishing, allowing for a wide range of custom components.
            </p>
            <p>
              We work with various metals such as steel, stainless steel, and aluminum, catering to projects from prototypes to production runs. Our platform makes it easy to get quotes for your sheet metal designs.
            </p>
            <h2 className="font-headline text-2xl text-primary pt-4">Our Sheet Metal Services Include:</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Precision laser cutting and CNC punching</li>
              <li>Accurate bending and forming</li>
              <li>Welding (TIG, MIG, Spot) and assembly</li>
              <li>Powder coating, anodizing, and other finishing options</li>
              <li>Support for various thicknesses and metal types</li>
              <li>Fast turnaround for prototypes and production</li>
            </ul>
            <p className="pt-4">
              For robust and accurately fabricated sheet metal parts, turn to Inventex Labs. Upload your design specifications to get a competitive quote.
            </p>
            <div className="text-center pt-6">
              <Button asChild size="lg">
                <Link href="/">Get a Sheet Metal Quote</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
