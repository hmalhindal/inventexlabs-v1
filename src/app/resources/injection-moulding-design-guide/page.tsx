
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Injection Moulding Design Guide - Inventex Labs',
  description: 'Key design considerations for injection moulding, including wall thickness, draft angles, and material selection.',
};

export default function InjectionMouldingDesignGuidePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <Card className="w-full max-w-4xl mx-auto shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="font-headline text-4xl text-primary mb-2">Injection Moulding Design Guide</CardTitle>
            <CardDescription className="text-xl text-muted-foreground">
              Optimizing Your Parts for Efficient Moulding
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-lg prose prose-slate dark:prose-invert max-w-none">
            <Image 
              src="https://placehold.co/800x350.png" 
              alt="Diagram illustrating injection moulding design principles" 
              width={800} 
              height={350} 
              className="rounded-lg mb-6"
              data-ai-hint="technical diagram"
            />
            <p>
              Effective design is crucial for successful injection moulding. This guide covers essential principles to help you create parts that are manufacturable, functional, and cost-effective.
            </p>

            <h2>Uniform Wall Thickness</h2>
            <p>Maintain a consistent wall thickness throughout the part. Variations can lead to sink marks, warping, and inconsistent cooling. If thickness variations are necessary, make transitions gradual.</p>
            
            <h2>Draft Angles</h2>
            <p>Incorporate draft angles (typically 1-3 degrees) on all surfaces perpendicular to the mould parting line. This facilitates easy ejection of the part from the mould, preventing damage and reducing cycle times.</p>

            <h2>Radii and Corners</h2>
            <p>Use generous radii on internal and external corners. Sharp corners can create stress concentrations, impede material flow, and make mould machining more difficult. Rounded corners improve strength and mould life.</p>

            <h2>Ribs and Bosses</h2>
            <p>Use ribs to increase stiffness and strength without increasing overall wall thickness. Rib thickness should typically be 50-60% of the nominal wall thickness to avoid sink marks. Design bosses with appropriate draft and radii, and consider gussets for support.</p>
            
            <h2>Undercuts</h2>
            <p>Avoid undercuts if possible, as they require complex mould mechanisms (e.g., sliders, lifters), increasing tooling cost and complexity. If undercuts are essential, design them to be as simple as possible.</p>

            <h2>Material Selection</h2>
            <p>The chosen material affects design considerations such as shrinkage, flow properties, and required draft angles. Consult our <Link href="/materials/injection-moulding">Injection Moulding Materials page</Link> and consider material datasheets.</p>
            
            <h2>Gate Location and Parting Line</h2>
            <p>While often determined by the mould designer, consider potential gate locations and their cosmetic impact. The parting line (where mould halves meet) should ideally be on an inconspicuous edge.</p>

            <p className="pt-4">
              Adhering to these design guidelines will enhance the quality of your moulded parts, reduce manufacturing issues, and optimize costs. Our team is available to provide DFM feedback on your designs.
            </p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
