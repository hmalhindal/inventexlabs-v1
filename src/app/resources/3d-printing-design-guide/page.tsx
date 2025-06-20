
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '3D Printing Design Guide - Inventex Labs',
  description: 'Guidelines for designing parts for various 3D printing technologies, covering supports, wall thickness, and feature resolution.',
};

export default function ThreeDPrintingDesignGuidePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <Card className="w-full max-w-4xl mx-auto shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="font-headline text-4xl text-primary mb-2">3D Printing Design Guide</CardTitle>
            <CardDescription className="text-xl text-muted-foreground">
              Optimizing Designs for Additive Manufacturing
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-lg prose prose-slate dark:prose-invert max-w-none">
            <Image 
              src="https://placehold.co/800x350.png" 
              alt="Comparison of 3D printed parts with design considerations" 
              width={800} 
              height={350} 
              className="rounded-lg mb-6"
              data-ai-hint="3D models"
            />
            <p>
              Designing for 3D printing (additive manufacturing) requires understanding the capabilities and limitations of different technologies (FDM, SLA, SLS, etc.). This guide provides general best practices to help you achieve successful prints.
            </p>

            <h2>Wall Thickness</h2>
            <p>Ensure walls are thick enough to be structurally sound and printable by the chosen technology. Minimum wall thickness varies (e.g., FDM might need 0.8-1.2mm, SLA can go thinner). Too thin walls can be fragile or fail to print.</p>
            
            <h2>Overhangs and Supports</h2>
            <p>Be mindful of overhangs. Most 3D printers require support structures for overhangs exceeding a certain angle (typically 45 degrees). Design to minimize supports where possible (e.g., using chamfers or fillets, orienting the part strategically) as supports add material, print time, and post-processing effort.</p>

            <h2>Feature Resolution</h2>
            <p>Small features (e.g., pins, holes, text) have minimum printable sizes depending on the printer's resolution and nozzle/laser spot size. Embossed or engraved details should be sufficiently large and deep/tall to be visible.</p>

            <h2>Hole Design</h2>
            <p>Holes, especially horizontal ones, may print slightly smaller than designed due to material shrinkage or layering effects. Consider designing them slightly oversized or be prepared for post-processing (e.g., drilling) for precise fits.</p>
            
            <h2>Part Orientation</h2>
            <p>The orientation of the part on the build plate affects surface finish, strength (especially for FDM), print time, and support requirements. Consider this during design or consult with our experts.</p>

            <h2>Material Selection</h2>
            <p>Different materials have different properties (strength, flexibility, temperature resistance) and printing requirements. Choose a material suitable for your application. See our <Link href="/materials/3d-printing">3D Printing Materials page</Link>.</p>
            
            <h2>Assemblies and Moving Parts</h2>
            <p>If designing assemblies, ensure sufficient clearance between mating parts to account for printing tolerances. Some technologies allow for printing assembled mechanisms (print-in-place).</p>

            <p className="pt-4">
              By considering these 3D printing design principles, you can create parts that are optimized for additive manufacturing, resulting in better quality, reduced failures, and efficient production.
            </p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
