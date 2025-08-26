
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Layers } from 'lucide-react';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Acrylic Material - Inventex Labs',
  description: 'Explore acrylic (PMMA) as a versatile material for laser cutting, fabrication, and signage at Inventex Labs.',
};

const acrylicColors = [
    { name: 'Clear', style: { background: 'repeating-conic-gradient(#808080 0% 25%, transparent 0% 50%) 50% / 10px 10px' }, border: true },
    { name: 'White', style: { backgroundColor: '#FFFFFF' }, border: true },
    { name: 'Black', style: { backgroundColor: '#000000' } },
    { name: 'Red', style: { backgroundColor: '#B71C1C' } },
    { name: 'Blue', style: { backgroundColor: '#1976D2' } },
    { name: 'Green', style: { backgroundColor: '#2E7D32' } },
    { name: 'Yellow', style: { backgroundColor: '#FBC02D' } },
    { name: 'Orange', style: { backgroundColor: '#E65100' } },
    { name: 'Frosted', style: { backgroundColor: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(4px)' }, border: true },
    { name: 'Mirror', style: { background: 'linear-gradient(45deg, #B0B0B0, #E0E0E0, #B0B0B0)' } },
    { name: 'Fluo Pink', style: { backgroundColor: '#FF4081', boxShadow: '0 0 5px #FF4081, 0 0 10px #FF4081' } },
    { name: 'Fluo Green', style: { backgroundColor: '#69F0AE', boxShadow: '0 0 5px #69F0AE, 0 0 10px #69F0AE' } },
];


export default function AcrylicMaterialPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <Card className="w-full max-w-4xl mx-auto shadow-lg">
          <CardHeader className="text-center">
            <Layers className="h-12 w-12 text-primary mx-auto mb-3" />
            <CardTitle className="font-headline text-4xl text-primary mb-2">Acrylic (PMMA)</CardTitle>
            <CardDescription className="text-xl text-muted-foreground">
              Versatile, Clear, and Colorful Plastic
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-lg">
            <p>
              Acrylic, also known as Polymethyl Methacrylate (PMMA), is a transparent thermoplastic widely used as a lightweight and shatter-resistant alternative to glass. It's known for its excellent optical clarity, weather resistance, and ease of fabrication, making it a popular choice for a multitude of applications.
            </p>

            <h2 className="font-headline text-2xl text-primary pt-2">Available Acrylic Colors & Finishes</h2>
            <p className="text-muted-foreground">Below is a selection of our standard acrylic colors and finishes. We can source other colors upon request.</p>
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4">
                {acrylicColors.map((swatch) => (
                    <div key={swatch.name} className="flex flex-col items-center gap-2">
                        <div 
                            className={cn("h-16 w-16 rounded-lg shadow-md", swatch.border && "border border-muted")}
                            style={swatch.style}
                            title={swatch.name}
                        ></div>
                        <p className="text-sm font-medium text-center">{swatch.name}</p>
                    </div>
                ))}
            </div>

            <div className="border-t border-border my-6"></div>
            
            <h2 className="font-headline text-2xl text-primary pt-2">Key Properties of Acrylic:</h2>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li><span className="font-semibold text-foreground">Optical Clarity:</span> High light transmission, often clearer than glass.</li>
              <li><span className="font-semibold text-foreground">Lightweight:</span> Approximately half the weight of glass.</li>
              <li><span className="font-semibold text-foreground">Impact Resistance:</span> Significantly more impact resistant than glass, though not as strong as polycarbonate.</li>
              <li><span className="font-semibold text-foreground">Weather Resistance:</span> Excellent resistance to UV light and weathering, making it suitable for outdoor use.</li>
              <li><span className="font-semibold text-foreground">Versatility:</span> Available in a wide range of colors, opacities, and finishes (e.g., frosted, mirrored).</li>
              <li><span className="font-semibold text-foreground">Ease of Fabrication:</span> Easily laser cut, engraved, bent, glued, and polished.</li>
            </ul>

            <div className="border-t border-border my-6"></div>


            <h2 className="font-headline text-2xl text-primary pt-2">Common Applications:</h2>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Signage and displays (retail, exhibitions)</li>
              <li>Protective barriers and glazing</li>
              <li>Lighting fixtures and diffusers</li>
              <li>Point-of-purchase displays and product stands</li>
              <li>Awards, trophies, and decorative items</li>
              <li>Architectural models and art projects</li>
            </ul>
            <p className="pt-4">
              Inventex Labs utilizes high-quality acrylic for laser cutting and fabrication projects, offering precise cuts and a variety of thicknesses and colors.
            </p>
            <div className="text-center pt-6">
              <Button asChild size="lg">
                <Link href="/">Get a Quote for Acrylic Parts</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
