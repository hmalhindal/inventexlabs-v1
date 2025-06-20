
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Trees } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Wood Materials - Inventex Labs',
  description: 'Information on various wood types like Plywood and MDF for laser cutting, engraving, and fabrication at Inventex Labs.',
};

export default function WoodMaterialPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <Card className="w-full max-w-4xl mx-auto shadow-lg">
          <CardHeader className="text-center">
            <Trees className="h-12 w-12 text-primary mx-auto mb-3" />
            <CardTitle className="font-headline text-4xl text-primary mb-2">Wood Materials</CardTitle>
            <CardDescription className="text-xl text-muted-foreground">
              Natural and Engineered Woods for Creative Projects
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-lg">
            <Image 
              src="https://placehold.co/800x300.png" 
              alt="Samples of different wood types like plywood and MDF" 
              width={800} 
              height={300} 
              className="rounded-lg mb-6"
              data-ai-hint="wood samples grain"
            />
            <p>
              Wood is a versatile and popular material for a wide range of fabrication projects, including laser cutting, engraving, and CNC machining. Inventex Labs works with various types of wood, including natural hardwoods, softwoods, and engineered wood products like Plywood and MDF.
            </p>
            
            <h2 className="font-headline text-2xl text-primary pt-2">Common Wood Types & Properties:</h2>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li><span className="font-semibold text-foreground">Plywood:</span> Made from thin layers of wood veneer glued together. Strong, stable, and available in various grades and thicknesses. Good for structural applications, signage, and decorative items.</li>
              <li><span className="font-semibold text-foreground">MDF (Medium-Density Fiberboard):</span> An engineered wood product made by breaking down hardwood or softwood residuals into wood fibers. Smooth, uniform surface ideal for painting and engraving. Cost-effective and easy to machine.</li>
              <li><span className="font-semibold text-foreground">Hardwoods (e.g., Oak, Maple, Walnut):</span> Known for their durability and attractive grain patterns. Used for high-quality furniture, decorative pieces, and engraving.</li>
              <li><span className="font-semibold text-foreground">Softwoods (e.g., Pine, Cedar):</span> Generally lighter and less expensive than hardwoods. Easier to work with, suitable for crafts, models, and some signage.</li>
            </ul>

            <h2 className="font-headline text-2xl text-primary pt-2">Considerations for Wood Fabrication:</h2>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li><span className="font-semibold text-foreground">Grain Direction:</span> Affects strength and appearance, particularly in natural woods.</li>
              <li><span className="font-semibold text-foreground">Laser Cutting/Engraving:</span> Different woods produce varying results in terms of charring and engraving depth/contrast.</li>
              <li><span className="font-semibold text-foreground">Finishing:</span> Wood can be sanded, stained, painted, or varnished to achieve desired aesthetics and protection.</li>
              <li><span className="font-semibold text-foreground">Moisture Content:</span> Wood is susceptible to changes in humidity, which can cause warping or dimensional changes.</li>
            </ul>
            <p className="pt-4">
              At Inventex Labs, we can help you select the right wood material for your project, ensuring optimal results for laser cutting, engraving, or other fabrication methods.
            </p>
            <div className="text-center pt-6">
              <Button asChild size="lg">
                <Link href="/">Get a Quote for Wood Parts</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
