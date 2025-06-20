
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Printer, FileCheck2, Palette } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Digital Printing Design Guide - Inventex Labs',
  description: 'Guidelines for preparing artwork and files for high-quality digital printing services at Inventex Labs.',
};

export default function DigitalPrintingDesignGuidePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <Card className="w-full max-w-4xl mx-auto shadow-lg">
          <CardHeader className="text-center">
            <Printer className="h-12 w-12 text-primary mx-auto mb-3" />
            <CardTitle className="font-headline text-4xl text-primary mb-2">Digital Printing Design Guide</CardTitle>
            <CardDescription className="text-xl text-muted-foreground">
              Optimizing Your Designs for Perfect Prints
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-lg prose prose-slate dark:prose-invert max-w-none">
            <Image 
              src="https://placehold.co/800x350.png" 
              alt="Examples of print-ready design files and considerations" 
              width={800} 
              height={350} 
              className="rounded-lg mb-6"
              data-ai-hint="digital print design"
            />
            <p>
              Achieving high-quality digital prints starts with well-prepared artwork. This guide provides essential tips for designing and submitting files for Inventex Labs' digital printing services.
            </p>

            <h2 className="flex items-center gap-2 font-headline text-2xl text-primary pt-2"><FileCheck2 /> File Formats & Resolution</h2>
            <ul className="list-disc list-inside">
                <li><strong>Preferred Formats:</strong> We recommend submitting print-ready PDF files. We also accept high-resolution JPG, PNG, TIFF, AI, and EPS files.</li>
                <li><strong>Resolution:</strong> For optimal print quality, ensure raster images (like photos) are at least 300 DPI (dots per inch) at the final print size. Vector graphics are ideal for logos and text as they can be scaled without loss of quality.</li>
                <li><strong>Flatten Artwork:</strong> If possible, flatten layers in your design software before exporting to PDF to avoid font or layer issues.</li>
            </ul>
            
            <h2 className="flex items-center gap-2 font-headline text-2xl text-primary pt-2"><Palette /> Color Mode & Bleed</h2>
            <ul className="list-disc list-inside">
                <li><strong>Color Mode:</strong> Design your artwork in CMYK color mode for most print projects. If RGB is used, colors may shift during conversion to CMYK. For specific spot colors (Pantone), please specify them.</li>
                <li><strong>Bleed:</strong> If your design extends to the edge of the printed piece, include a bleed area (typically 3mm or 0.125 inches) on all sides. This ensures no white edges appear after trimming.</li>
                <li><strong>Safe Zone:</strong> Keep important text and graphics within a safe zone (typically 3-5mm or 0.125-0.2 inches from the trim edge) to prevent them from being cut off.</li>
            </ul>

            <h2>Text and Fonts</h2>
            <ul className="list-disc list-inside">
                <li><strong>Convert to Outlines:</strong> Convert all text and fonts to outlines (or paths/curves) before submitting your file. This prevents font substitution issues if we don't have the specific font you used.</li>
                <li><strong>Minimum Font Size:</strong> Ensure text is legible. Avoid very small font sizes, especially for fine print or on textured materials.</li>
                <li><strong>Rich Black:</strong> For large areas of solid black, use a "rich black" CMYK mix (e.g., C:60 M:40 Y:40 K:100) instead of just K:100 for a deeper, more saturated black.</li>
            </ul>
            
            <h2>Proofing</h2>
            <p>We may provide a digital proof for your approval before proceeding with full production, especially for large orders or complex designs. Please review proofs carefully for any errors in content, layout, and color.</p>

            <p className="pt-4">
              By following these guidelines, you can help ensure your digital printing projects are produced accurately and to the highest quality. If you have any questions or need assistance with file preparation, please <Link href="/contact-us?subject=Digital%20Printing%20Design%20Help" className="text-primary hover:underline">contact our support team</Link>.
            </p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
