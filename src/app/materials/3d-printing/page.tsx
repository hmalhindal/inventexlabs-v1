
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '3D Printing Materials - Inventex Labs',
  description: 'Explore polymers, resins, and composites available for 3D printing services at Inventex Labs.',
};

export default function ThreeDPrintingMaterialsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <Card className="w-full max-w-4xl mx-auto shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="font-headline text-4xl text-primary mb-2">Materials for 3D Printing</CardTitle>
            <CardDescription className="text-xl text-muted-foreground">
              A Wide Range of Polymers, Resins, and Composites
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-lg">
            <Image 
              src="https://placehold.co/800x300.png" 
              alt="Samples of 3D printing materials" 
              width={800} 
              height={300} 
              className="rounded-lg mb-6"
              data-ai-hint="plastic filaments"
            />
            <p>
              Inventex Labs offers an extensive selection of materials for 3D printing, catering to different technologies like FDM, SLA, SLS, and MJF. The choice of material is critical for achieving desired mechanical properties, surface finish, and functionality.
            </p>
            
            <h2 className="font-headline text-2xl text-primary pt-2">Popular 3D Printing Materials:</h2>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li><span className="font-semibold text-foreground">PLA (Polylactic Acid):</span> Easy to print, biodegradable, good for prototypes and visual models. (FDM)</li>
              <li><span className="font-semibold text-foreground">ABS (Acrylonitrile Butadiene Styrene):</span> Strong, durable, good impact resistance, suitable for functional parts. (FDM)</li>
              <li><span className="font-semibold text-foreground">PETG (Polyethylene Terephthalate Glycol):</span> Combines strength of ABS with ease of PLA, food-safe grades available. (FDM)</li>
              <li><span className="font-semibold text-foreground">Nylon (PA11, PA12):</span> Strong, flexible, durable, excellent for functional parts and living hinges. (SLS, MJF)</li>
              <li><span className="font-semibold text-foreground">Resins (Standard, Tough, Flexible, Castable):</span> High detail and smooth surface finish, various properties for specific applications. (SLA, DLP)</li>
              <li><span className="font-semibold text-foreground">TPU (Thermoplastic Polyurethane):</span> Flexible, rubber-like material, good for seals, gaskets, and shock absorption. (FDM, SLS)</li>
              <li><span className="font-semibold text-foreground">Composites (e.g., Carbon Fiber Filled Nylon):</span> Enhanced strength, stiffness, and durability. (FDM, SLS)</li>
            </ul>
            <p>
              Our experts can help you navigate the material options to find the perfect match for your 3D printing project, balancing performance requirements with cost considerations.
            </p>
            <div className="text-center pt-6">
              <Button asChild size="lg">
                <Link href="/">Get an Instant 3D Printing Quote</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
