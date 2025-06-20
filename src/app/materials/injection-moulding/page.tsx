
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Injection Moulding Materials - Inventex Labs',
  description: 'Overview of thermoplastic materials available for injection moulding at Inventex Labs for various applications.',
};

export default function InjectionMouldingMaterialsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <Card className="w-full max-w-4xl mx-auto shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="font-headline text-4xl text-primary mb-2">Materials for Injection Moulding</CardTitle>
            <CardDescription className="text-xl text-muted-foreground">
              Selecting Thermoplastics for Your Moulded Parts
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-lg">
            <Image 
              src="https://placehold.co/800x300.png" 
              alt="Plastic resin pellets for injection moulding" 
              width={800} 
              height={300} 
              className="rounded-lg mb-6"
              data-ai-hint="plastic pellets"
            />
            <p>
              Inventex Labs offers a wide variety of thermoplastic resins for injection moulding, catering to diverse functional and aesthetic requirements. The choice of material significantly impacts the part's properties, durability, and cost.
            </p>
            
            <h2 className="font-headline text-2xl text-primary pt-2">Popular Injection Moulding Materials:</h2>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li><span className="font-semibold text-foreground">Polypropylene (PP):</span> Good chemical resistance, fatigue resistance, low cost.</li>
              <li><span className="font-semibold text-foreground">Acrylonitrile Butadiene Styrene (ABS):</span> High impact strength, good toughness, and surface finish.</li>
              <li><span className="font-semibold text-foreground">Polyethylene (PE - HDPE, LDPE):</span> Versatile, good chemical resistance, low cost.</li>
              <li><span className="font-semibold text-foreground">Polycarbonate (PC):</span> High impact strength, good heat resistance, transparent grades available.</li>
              <li><span className="font-semibold text-foreground">Nylon (PA6, PA66):</span> Good mechanical strength, wear resistance, temperature resistance.</li>
              <li><span className="font-semibold text-foreground">Polystyrene (PS - HIPS, GPPS):</span> Low cost, easy to process, good for disposable items.</li>
              <li><span className="font-semibold text-foreground">Thermoplastic Elastomers (TPE):</span> Rubber-like properties, flexible.</li>
            </ul>
             <p>
              We also support custom material requests and can help source specific grades or filled resins (e.g., glass-filled, flame retardant) to meet your project's unique demands. Our team can advise on material selection to optimize for performance, cost, and manufacturability.
            </p>
            <div className="text-center pt-6">
              <Button asChild size="lg">
                <Link href="/">Discuss Your Material Needs & Get a Quote</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
