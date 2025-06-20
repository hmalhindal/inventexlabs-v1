
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sheet Metal Design Guide - Inventex Labs',
  description: 'Best practices for designing sheet metal parts, including bend radii, hole placement, and material choices.',
};

export default function SheetMetalDesignGuidePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <Card className="w-full max-w-4xl mx-auto shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="font-headline text-4xl text-primary mb-2">Sheet Metal Design Guide</CardTitle>
            <CardDescription className="text-xl text-muted-foreground">
              Principles for Effective Sheet Metal Fabrication
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-lg prose prose-slate dark:prose-invert max-w-none">
            <Image 
              src="https://placehold.co/800x350.png" 
              alt="Examples of well-designed sheet metal parts" 
              width={800} 
              height={350} 
              className="rounded-lg mb-6"
              data-ai-hint="metal parts"
            />
            <p>
              Designing for sheet metal fabrication involves specific considerations to ensure parts can be manufactured accurately and efficiently. This guide highlights key design rules for common sheet metal processes like cutting, bending, and punching.
            </p>

            <h2>Material Thickness</h2>
            <p>Maintain a uniform material thickness throughout a single part. This simplifies manufacturing and avoids issues with tooling setups.</p>
            
            <h2>Bend Radii</h2>
            <p>Specify internal bend radii that are equal to or greater than the material thickness. Smaller radii can cause material cracking or distortion. Standard tooling often dictates preferred bend radii.</p>

            <h2>Bend Relief</h2>
            <p>Incorporate bend relief (e.g., rectangular or tear-drop cutouts) at the ends of bend lines to prevent material tearing and deformation. Relief width should be at least equal to material thickness, and depth should extend slightly beyond the bend radius.</p>

            <h2>Hole Placement and Size</h2>
            <p>Holes should be placed at a distance of at least 2-3 times the material thickness from any edge or bend. Hole diameter should generally be no smaller than the material thickness to avoid tool breakage during punching.</p>
            
            <h2>Flat Pattern Design</h2>
            <p>Consider the flat pattern when designing features. Ensure features do not overlap or interfere after bending. Software tools can help generate accurate flat patterns and identify potential issues.</p>

            <h2>Features Near Bends</h2>
            <p>Avoid placing features like holes, slots, or embossing too close to bends, as they can deform during the bending process. A general rule is to keep features at least 2.5 times the material thickness plus the bend radius away from the bend.</p>
            
            <h2>Material Selection</h2>
            <p>Choose materials based on strength, corrosion resistance, formability, and cost. Refer to our <Link href="/materials/sheet-metal">Sheet Metal Materials page</Link> for common options like aluminum, steel, and stainless steel.</p>

            <p className="pt-4">
              By applying these sheet metal design principles, you can optimize your parts for fabrication, leading to better quality, reduced costs, and faster production.
            </p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
