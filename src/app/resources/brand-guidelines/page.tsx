
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { PenTool, Palette } from 'lucide-react'; // Using PenTool for design/brand and Palette for colors

export const metadata: Metadata = {
  title: 'Brand Guidelines - Inventex Labs',
  description: 'Official brand assets and usage guidelines for Inventex Labs, including logo, color palette, and typography.',
};

export default function BrandGuidelinesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <Card className="w-full max-w-4xl mx-auto shadow-lg">
          <CardHeader className="text-center">
            <PenTool className="h-12 w-12 text-primary mx-auto mb-3" />
            <CardTitle className="font-headline text-4xl text-primary mb-2">Inventex Labs Brand Guidelines</CardTitle>
            <CardDescription className="text-xl text-muted-foreground">
              Ensuring Consistent and Effective Brand Representation
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-lg">
            <Image 
              src="https://placehold.co/800x300.png" 
              alt="Inventex Labs brand moodboard or logo variations" 
              width={800} 
              height={300} 
              className="rounded-lg mb-6"
              data-ai-hint="brand identity design"
            />
            <p>
              Welcome to the official brand guidelines for Inventex Labs. This document provides the necessary information to ensure our brand is represented consistently and accurately across all communications and materials.
            </p>
            
            <h2 className="font-headline text-2xl text-primary pt-2">Logo Usage</h2>
            <p className="text-muted-foreground">
              Our logo is the primary visual identifier of Inventex Labs. Please adhere to the following:
            </p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Use the official logo files provided. Do not alter, distort, or reconfigure the logo.</li>
              <li>Maintain clear space around the logo to ensure its visibility and impact.</li>
              <li>Use the appropriate logo version (e.g., full color, monochrome) based on the background and application.</li>
            </ul>
            {/* Placeholder for logo download button */}
            <div className="text-center my-4">
                <Button variant="outline" disabled>Download Logo Pack (Coming Soon)</Button>
            </div>


            <h2 className="font-headline text-2xl text-primary pt-2 flex items-center gap-2"><Palette /> Color Palette</h2>
            <p className="text-muted-foreground">Our primary brand colors are:</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li><span className="font-semibold text-foreground">Primary Yellow:</span> HSL(var(--primary)) / Hex: #FACC15 (example, actual HSL is dynamic)</li>
              <li><span className="font-semibold text-foreground">Dark Background:</span> HSL(var(--background)) / Hex: #1C1C1E (example)</li>
              <li><span className="font-semibold text-foreground">Light Foreground:</span> HSL(var(--foreground)) / Hex: #F5F5F7 (example)</li>
              <li><span className="font-semibold text-foreground">Secondary Grey:</span> HSL(var(--secondary)) / Hex: #3A3A3C (example)</li>
            </ul>
            <p className="text-muted-foreground">Refer to `globals.css` for the precise HSL values. Consistent use of these colors reinforces our brand identity.</p>

            <h2 className="font-headline text-2xl text-primary pt-2">Typography</h2>
            <p className="text-muted-foreground">
              Our brand uses the following typefaces:
            </p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li><span className="font-semibold text-foreground">Headlines:</span> Space Grotesk</li>
                <li><span className="font-semibold text-foreground">Body Text:</span> Inter</li>
            </ul>
            <p className="text-muted-foreground">Consistent typography ensures readability and a cohesive brand voice.</p>
            
            <p className="pt-4">
              For any questions regarding brand usage or for specific asset requests, please <Link href="/contact-us?subject=Brand%20Guideline%20Inquiry" className="text-primary hover:underline">contact our marketing team</Link>.
            </p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
