
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Laser Cutting Materials - Inventex Labs',
  description: 'Explore materials suitable for laser cutting, including various metals, plastics, woods, and more at Inventex Labs.',
};

export default function LaserCuttingMaterialsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <Card className="w-full max-w-4xl mx-auto shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="font-headline text-4xl text-primary mb-2">Materials for Laser Cutting</CardTitle>
            <CardDescription className="text-xl text-muted-foreground">
              Choosing the Right Material for Your Laser Cut Parts
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-lg">
            <Image 
              src="https://placehold.co/800x300.png" 
              alt="Samples of laser cuttable materials like metal, acrylic, wood" 
              width={800} 
              height={300} 
              className="rounded-lg mb-6"
              data-ai-hint="metal sheets acrylic"
            />
            <p>
              Inventex Labs supports a wide range of materials for laser cutting. The choice of material depends on the application, desired properties, thickness, and aesthetic requirements.
            </p>
            
            <h2 className="font-headline text-2xl text-primary pt-2">Common Laser Cuttable Materials:</h2>
            <h3 className="font-semibold text-foreground text-xl mt-2">Metals:</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li><span className="font-semibold text-foreground">Mild Steel:</span> Cost-effective, good for general applications.</li>
              <li><span className="font-semibold text-foreground">Stainless Steel:</span> Excellent corrosion resistance, durable, aesthetic appeal.</li>
              <li><span className="font-semibold text-foreground">Aluminum:</span> Lightweight, good corrosion resistance.</li>
              <li><span className="font-semibold text-foreground">Brass & Copper:</span> Good for decorative or conductive applications (thinner gauges typically).</li>
            </ul>

            <h3 className="font-semibold text-foreground text-xl mt-4">Plastics:</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li><span className="font-semibold text-foreground">Acrylic (PMMA):</span> Wide range of colors, excellent clarity, smooth cut edges.</li>
              <li><span className="font-semibold text-foreground">Delrin® (POM):</span> Good mechanical strength, low friction, excellent for engineering parts.</li>
              <li><span className="font-semibold text-foreground">PETG:</span> Impact resistant, good clarity, often used for displays.</li>
              <li><span className="font-semibold text-foreground">Polycarbonate (PC):</span> Very high impact strength (note: edge quality can vary).</li>
            </ul>

            <h3 className="font-semibold text-foreground text-xl mt-4">Woods & Organics:</h3>
             <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li><span className="font-semibold text-foreground">Plywood & MDF:</span> Commonly used for models, crafts, and decorative items.</li>
              <li><span className="font-semibold text-foreground">Hardwoods & Softwoods:</span> For specific aesthetic or structural uses.</li>
              <li><span className="font-semibold text-foreground">Leather & Textiles:</span> For fashion, upholstery, and custom accessories.</li>
              <li><span className="font-semibold text-foreground">Paper & Cardboard:</span> For stencils, packaging prototypes, and crafts.</li>
            </ul>
            <p>
              The suitability of a material for laser cutting also depends on its thickness and the specific laser technology used. Our platform will guide you through available options during the quoting process.
            </p>
            <div className="text-center pt-6">
              <Button asChild size="lg">
                <Link href="/">Get a Quote with Your Chosen Material</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

