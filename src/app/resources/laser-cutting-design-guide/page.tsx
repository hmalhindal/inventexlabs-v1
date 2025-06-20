
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Laser Cutting Design Guide - Inventex Labs',
  description: 'Key design considerations for laser cutting, including kerf, minimum feature size, material choice, and file formats.',
};

export default function LaserCuttingDesignGuidePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <Card className="w-full max-w-4xl mx-auto shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="font-headline text-4xl text-primary mb-2">Laser Cutting Design Guide</CardTitle>
            <CardDescription className="text-xl text-muted-foreground">
              Optimizing Your Designs for Laser Processing
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-lg prose prose-slate dark:prose-invert max-w-none">
            <Image 
              src="https://placehold.co/800x350.png" 
              alt="Diagram illustrating laser cutting design principles like kerf and minimum feature size" 
              width={800} 
              height={350} 
              className="rounded-lg mb-6"
              data-ai-hint="laser cut design"
            />
            <p>
              Designing for laser cutting involves specific considerations to ensure your parts are manufactured accurately and efficiently. This guide covers essential principles for preparing your vector designs.
            </p>

            <h2>Kerf Compensation</h2>
            <p>The laser beam removes a small amount of material during cutting, known as the "kerf". For precise fits, especially in interlocking parts or assemblies, you may need to account for the kerf (typically 0.1mm - 0.5mm depending on material and thickness) by slightly offsetting your cut lines.</p>
            
            <h2>Minimum Feature Size and Spacing</h2>
            <p>Very small details or thin sections might be fragile or burn away. Ensure features like narrow slots or small holes meet minimum size requirements for the chosen material and thickness. Maintain adequate spacing between cut lines to prevent material from deforming or melting.</p>

            <h2>Corners and Radii</h2>
            <p>Internal corners will inherently have a slight radius equivalent to the laser beam's diameter. If sharp internal corners are critical, consider adding small relief cuts (e.g., "dog bones"). External corners can be cut very sharply.</p>

            <h2>Holes</h2>
            <p>Generally, the minimum hole diameter should be at least equal to, or slightly greater than, the material thickness, especially in thicker materials. Spacing between holes and from edges should also be considered to maintain structural integrity.</p>
            
            <h2>Text and Engraving</h2>
            <p>For laser engraving or marking, ensure text is converted to outlines/paths. Choose fonts and line thicknesses that are suitable for the laser process. Very fine details might not resolve well on certain materials.</p>

            <h2>Nesting and Layout</h2>
            <p>If you are providing a pre-nested file, arrange parts efficiently to minimize material waste. Ensure there's enough space between parts for the laser to cut without affecting adjacent components.</p>
            
            <h2>Material Considerations</h2>
            <p>Different materials react differently to laser cutting. Reflective materials (like polished aluminum or copper) can be challenging. Some plastics may produce harmful fumes or melt excessively. See our <Link href="/materials/laser-cutting">Laser Cutting Materials page</Link> for more details.</p>

            <h2>File Formats and Preparation</h2>
            <p>We typically accept 2D vector files like DXF, DWG, AI, or SVG. Ensure your design:
              <ul className="list-disc list-inside">
                <li>Uses closed paths for all cut lines.</li>
                <li>Has no overlapping lines or duplicate entities.</li>
                <li>Is scaled to the correct dimensions (1:1 scale is preferred).</li>
                <li>Clearly differentiates between cutting lines, engraving lines, and scoring lines if applicable (e.g., by using different colors or layers).</li>
              </ul>
            </p>

            <p className="pt-4">
              By following these design guidelines, you can improve the quality and manufacturability of your laser-cut parts. Our platform may also provide DFM feedback on your uploaded designs.
            </p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

