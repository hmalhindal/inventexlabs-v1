
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Flag } from 'lucide-react'; 

export const metadata: Metadata = {
  title: 'Signs & Banners Services - Inventex Labs',
  description: 'Custom signs, banners, and display solutions for your business and events at Inventex Labs.',
};

export default function SignsAndBannersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <Card className="w-full max-w-4xl mx-auto shadow-lg">
          <CardHeader className="text-center">
            <Flag className="h-12 w-12 text-primary mx-auto mb-3" />
            <CardTitle className="font-headline text-4xl text-primary mb-2">Signs & Banners Services</CardTitle>
            <CardDescription className="text-xl text-muted-foreground">
              High-Quality Custom Signage and Promotional Displays
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-lg">
            <Image 
              src="https://placehold.co/800x400.png" 
              alt="Various custom signs and banners" 
              width={800} 
              height={400} 
              className="rounded-lg mb-6"
              data-ai-hint="signage display"
            />
            <p>
              Inventex Labs offers a comprehensive range of custom sign and banner solutions to elevate your brand visibility and make a lasting impression. From vibrant event banners to durable outdoor signs and professional indoor displays, we provide high-quality products tailored to your specific needs.
            </p>
            <p>
              Our state-of-the-art printing and fabrication technologies ensure crisp graphics, vivid colors, and long-lasting materials. Whether you need a single banner or a complete signage package for your business, our team is ready to assist.
            </p>
            <div className="my-6 flex justify-center">
              <Image 
                src="https://placehold.co/300x200.png"
                alt="Inventex Labs Signs & Banners Showcase"
                width={300} 
                height={200} 
                className="rounded-md shadow-md"
                data-ai-hint="banner stand"
              />
            </div>
            <h2 className="font-headline text-2xl text-primary pt-4">Our Sign & Banner Offerings Include:</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><span className="font-semibold text-foreground">Vinyl Banners (Indoor & Outdoor)</span></li>
              <li><span className="font-semibold text-foreground">Retractable Banner Stands</span></li>
              <li><span className="font-semibold text-foreground">Foam Board Signs</span></li>
              <li><span className="font-semibold text-foreground">Acrylic Signs</span></li>
              <li><span className="font-semibold text-foreground">Metal Signs (e.g., Aluminum)</span></li>
              <li><span className="font-semibold text-foreground">Window Decals and Graphics</span></li>
              <li><span className="font-semibold text-foreground">Yard Signs</span></li>
              <li><span className="font-semibold text-foreground">Trade Show Displays</span></li>
            </ul>
            <p className="pt-4">
              Let us help you create impactful visual communications. Contact us to discuss your project or upload your design for a custom quote.
            </p>
            <div className="text-center pt-6">
              <Button asChild size="lg">
                <Link href="/contact-us?subject=Signs%20and%20Banners%20Inquiry">Get a Quote for Signs & Banners</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
