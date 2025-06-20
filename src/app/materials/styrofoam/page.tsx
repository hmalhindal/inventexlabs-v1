
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Box } from 'lucide-react'; // Using Box as a generic icon for foam/blocks

export const metadata: Metadata = {
  title: 'Styrofoam (EPS) Material - Inventex Labs',
  description: 'Information about Styrofoam (Expanded Polystyrene - EPS) for model making, props, and lightweight structures at Inventex Labs.',
};

export default function StyrofoamMaterialPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <Card className="w-full max-w-4xl mx-auto shadow-lg">
          <CardHeader className="text-center">
            <Box className="h-12 w-12 text-primary mx-auto mb-3" />
            <CardTitle className="font-headline text-4xl text-primary mb-2">Styrofoam (EPS)</CardTitle>
            <CardDescription className="text-xl text-muted-foreground">
              Lightweight Expanded Polystyrene Foam
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-lg">
            <Image 
              src="https://placehold.co/800x300.png" 
              alt="Blocks and shapes made of Styrofoam" 
              width={800} 
              height={300} 
              className="rounded-lg mb-6"
              data-ai-hint="styrofoam blocks shapes"
            />
            <p>
              Styrofoam, technically known as Expanded Polystyrene (EPS), is a rigid, closed-cell foam material. It is valued for its extremely light weight, good insulation properties, and ease of shaping, making it suitable for a variety of applications, especially where weight is a critical factor.
            </p>
            
            <h2 className="font-headline text-2xl text-primary pt-2">Key Properties of Styrofoam (EPS):</h2>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li><span className="font-semibold text-foreground">Extremely Lightweight:</span> Primarily composed of air, making it very easy to handle and transport.</li>
              <li><span className="font-semibold text-foreground">Good Insulation:</span> Offers thermal insulation properties.</li>
              <li><span className="font-semibold text-foreground">Buoyancy:</span> Floats on water due to its low density and closed-cell structure.</li>
              <li><span className="font-semibold text-foreground">Ease of Shaping:</span> Can be easily cut with hot wires, saws, or CNC routers.</li>
              <li><span className="font-semibold text-foreground">Impact Absorption:</span> Provides cushioning and shock absorption, used in packaging.</li>
              <li><span className="font-semibold text-foreground">Cost-Effective:</span> Generally an inexpensive material.</li>
            </ul>

            <h2 className="font-headline text-2xl text-primary pt-2">Common Applications:</h2>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Model making and architectural models</li>
              <li>Props and scenery for events and theater</li>
              <li>Signage letters and dimensional shapes</li>
              <li>Protective packaging and inserts</li>
              <li>Insulation panels for construction</li>
              <li>Buoys and flotation devices</li>
            </ul>
            <p>
              Note: Styrofoam is sensitive to certain solvents and high temperatures. When laser cutting, it can melt and produce fumes, so hot wire cutting or CNC routing are often preferred for precision shaping.
            </p>
            <p className="pt-4">
              Inventex Labs can assist with projects involving Styrofoam (EPS), particularly for creating custom shapes, letters, and lightweight structures.
            </p>
            <div className="text-center pt-6">
              <Button asChild size="lg">
                <Link href="/contact-us?subject=Styrofoam%20Project%20Inquiry">Discuss Your Styrofoam Project</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
