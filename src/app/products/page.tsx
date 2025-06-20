
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Package, Info } from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Products - Inventex Labs',
  description: 'Explore products offered by Inventex Labs. Full catalog coming soon.',
};

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <Package className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="font-headline text-4xl md:text-5xl text-primary mb-3">Our Products</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the range of products offered by Inventex Labs. More items are being added regularly!
          </p>
        </div>

        <Card className="w-full max-w-2xl mx-auto shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline text-2xl text-primary flex items-center gap-2">
              <Info className="h-6 w-6" /> Catalog Under Construction
            </CardTitle>
            <CardDescription>
              Our product catalog is being updated. Please check back soon for a full list of available items.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-lg">
             <Image
              src="https://placehold.co/700x350.png"
              alt="Products placeholder"
              width={700}
              height={350}
              className="rounded-lg mb-6"
              data-ai-hint="product display"
            />
            <p>
              We are currently curating our product offerings. You will soon find a variety of items related to manufacturing, design, and innovation right here.
            </p>
            <p>
              If you are looking for custom manufacturing, please visit our <Link href="/" className="text-primary hover:underline">instant quote page</Link>.
            </p>
             <p className="text-sm text-muted-foreground">
              For any specific product inquiries before our catalog is fully live, please <Link href="/contact-us" className="text-primary hover:underline">contact our team</Link>.
            </p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
