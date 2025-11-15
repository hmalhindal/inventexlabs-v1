
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'CNC Design Guide - Inventex Labs',
  description: 'A comprehensive guide to designing parts for CNC machining, covering tolerances, features, and material considerations.',
};

export default function CncDesignGuidePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <Card className="w-full max-w-4xl mx-auto shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="font-headline text-4xl text-primary mb-2">CNC Machining Design Guide</CardTitle>
            <CardDescription className="text-xl text-muted-foreground">
              Best Practices for Optimizing Your CNC Parts
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-lg prose prose-slate dark:prose-invert max-w-none">
            <Image 
              src="https://placehold.co/800x350.png" 
              alt="Technical drawing for CNC machining" 
              width={800} 
              height={350} 
              className="rounded-lg mb-6"
              data-ai-hint="technical drawing"
            />
            <p>
              Designing parts for CNC machining requires consideration of various factors to ensure manufacturability, cost-effectiveness, and functionality. This guide provides key principles and tips for optimizing your designs for our CNC services.
            </p>

            <h2>Tolerances</h2>
            <p>Specify appropriate tolerances. Standard tolerances are generally more cost-effective. Tighter tolerances increase machining time and cost. Clearly indicate critical dimensions that require tighter control.</p>
            
            <h2>Wall Thickness</h2>
            <p>Avoid excessively thin walls, as they can be difficult to machine and may warp. Minimum wall thickness depends on the material and part geometry, but generally aim for at least 0.8mm for metals and 1.5mm for plastics.</p>

            <h2>Internal Radii</h2>
            <p>CNC cutting tools are round, so internal corners will always have a radius. Design with the largest possible internal radii, as smaller radii require smaller tools and more machining time. A common rule of thumb is that the radius should be at least 1/3 of the cavity depth.</p>

            <h2>Hole Design</h2>
            <p>Standard drill sizes are more economical. For deep holes (depth-to-diameter ratio &gt; 6:1), consider potential difficulties in chip evacuation and tool breakage. Clearly specify if holes are threaded and provide thread specifications (e.g., M6x1.0).</p>
            
            <h2>Feature Design</h2>
            <p>Avoid undercuts where possible, as they require special tooling or multi-axis machining, increasing cost. Simplify complex geometries if functionality is not compromised. Consider the accessibility of features for cutting tools.</p>

            <h2>Material Selection</h2>
            <p>Choose materials based on the desired mechanical properties, cost, and machinability. Softer materials like aluminum are generally easier and faster to machine than harder materials like stainless steel or titanium. Refer to our <Link href="/materials/cnc-machining">CNC Materials page</Link> for options.</p>
            
            <h2>Text and Lettering</h2>
            <p>If text or logos are required, opt for engraved (recessed) features rather than raised ones, as they are easier to machine. Ensure font sizes and line thicknesses are large enough to be clearly machined.</p>

            <p className="pt-4">
              By following these guidelines, you can improve the manufacturability of your CNC parts, reduce costs, and shorten lead times. Our DFM (Design for Manufacturability) feedback on our platform can also help identify potential issues.
            </p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
