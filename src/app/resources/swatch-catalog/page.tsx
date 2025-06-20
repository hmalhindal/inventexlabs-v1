
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Palette } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Swatch Catalog - Inventex Labs',
  description: 'Explore our range of material swatches and finishes available for your manufacturing projects at Inventex Labs.',
};

export default function SwatchCatalogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <Card className="w-full max-w-4xl mx-auto shadow-lg">
          <CardHeader className="text-center">
            <Palette className="h-12 w-12 text-primary mx-auto mb-3" />
            <CardTitle className="font-headline text-4xl text-primary mb-2">Material Swatch Catalog</CardTitle>
            <CardDescription className="text-xl text-muted-foreground">
              Visualize Your Material Choices
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-lg">
            <Image 
              src="https://placehold.co/800x400.png" 
              alt="Various material swatches like acrylic, wood, metal" 
              width={800} 
              height={400} 
              className="rounded-lg mb-6"
              data-ai-hint="material swatches samples"
            />
            <p>
              Welcome to the Inventex Labs Swatch Catalog. Here you can explore the variety of materials, colors, and finishes we offer for your custom manufacturing projects. Understanding the look and feel of a material is crucial for design success.
            </p>
            <p>
              Our catalog includes swatches for:
            </p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li><span className="font-semibold text-foreground">Acrylics:</span> Various colors, transparencies, and thicknesses.</li>
              <li><span className="font-semibold text-foreground">Woods:</span> Plywood, MDF, and select natural woods, showcasing grain and finish options.</li>
              <li><span className="font-semibold text-foreground">Metals:</span> Samples of aluminum, steel, and other metals with different surface finishes.</li>
              <li><span className="font-semibold text-foreground">Printing Substrates:</span> Examples of materials used for digital printing and signage.</li>
            </ul>
            <p className="pt-4">
             This online catalog provides a visual reference. For physical swatches or specific material inquiries, please contact our team. We are continuously updating our offerings.
            </p>
            <div className="my-6 grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="text-center">
                    <Image src="https://placehold.co/200x150.png" alt="Acrylic Swatches" width={200} height={150} className="rounded-md shadow-md mx-auto" data-ai-hint="acrylic color" />
                    <p className="text-sm mt-1 font-medium">Acrylic Colors</p>
                </div>
                <div className="text-center">
                    <Image src="https://placehold.co/200x150.png" alt="Wood Swatches" width={200} height={150} className="rounded-md shadow-md mx-auto" data-ai-hint="wood grain" />
                    <p className="text-sm mt-1 font-medium">Wood Finishes</p>
                </div>
                <div className="text-center">
                    <Image src="https://placehold.co/200x150.png" alt="Metal Swatches" width={200} height={150} className="rounded-md shadow-md mx-auto" data-ai-hint="metal texture" />
                    <p className="text-sm mt-1 font-medium">Metal Samples</p>
                </div>
            </div>
            <p className="pt-4">
              For detailed information on material properties and applications, please visit our <Link href="/materials" className="text-primary hover:underline">Materials section</Link>.
            </p>
            <div className="text-center pt-6">
              <Button asChild size="lg">
                <Link href="/contact-us?subject=Swatch%20Inquiry">Request Physical Swatches</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
