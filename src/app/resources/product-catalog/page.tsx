
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ShoppingCart, BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Product Catalog - Inventex Labs',
  description: 'Discover the range of standard products and customizable items available through Inventex Labs.',
};

export default function ProductCatalogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <Card className="w-full max-w-4xl mx-auto shadow-lg">
          <CardHeader className="text-center">
            <BookOpen className="h-12 w-12 text-primary mx-auto mb-3" />
            <CardTitle className="font-headline text-4xl text-primary mb-2">Product Catalog Overview</CardTitle>
            <CardDescription className="text-xl text-muted-foreground">
              Explore Our Range of Standard and Customizable Products
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-lg">
            <Image 
              src="https://placehold.co/800x400.png" 
              alt="Collection of various products offered by Inventex Labs" 
              width={800} 
              height={400} 
              className="rounded-lg mb-6"
              data-ai-hint="product display showcase"
            />
            <p>
              Inventex Labs offers a diverse catalog of products, ranging from standard items ready for customization to fully bespoke solutions tailored to your manufacturing needs. This overview provides insight into our product categories and how to access them.
            </p>
            
            <h2 className="font-headline text-2xl text-primary pt-2">What You'll Find:</h2>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li><span className="font-semibold text-foreground">Customizable Standard Products:</span> Items like pre-designed signs, display stands, promotional gifts, and utility items that can be customized with your branding or specific dimensions.</li>
              <li><span className="font-semibold text-foreground">Manufacturing Aids:</span> Tools, jigs, and fixtures designed to assist in various production processes.</li>
              <li><span className="font-semibold text-foreground">Material Blanks:</span> Cut-to-size sheets of acrylic, wood, metal, and other materials for your own projects.</li>
              <li><span className="font-semibold text-foreground">Finished Goods:</span> A selection of ready-to-purchase items from our featured collections.</li>
            </ul>

            <p>
              Our full, interactive product catalog with purchasing options is available through our <Link href="/store" className="text-primary hover:underline">Online Store</Link>. There, you can browse detailed product specifications, view pricing, and place orders directly.
            </p>
            <p>
              For fully custom manufactured parts based on your unique designs, please use our <Link href="/" className="text-primary hover:underline">Instant Quote tool</Link> on the homepage.
            </p>
            
            <div className="text-center pt-6">
              <Button asChild size="lg">
                <Link href="/store">
                  <ShoppingCart className="mr-2 h-5 w-5" /> Visit Our Online Store
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
