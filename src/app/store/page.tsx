
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ShoppingCart, Clock, Layers, Trees, RectangleHorizontal, Truck, Flag, ScissorsLine, type LucideProps } from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Online Store - Inventex Labs',
  description: 'Browse and purchase products from the Inventex Labs online store. Shopify integration coming soon!',
};

interface ProductCategory {
  name: string;
  slug: string;
  icon: React.FC<LucideProps>;
  description: string;
  image_hint: string;
}

const productCategories: ProductCategory[] = [
  { name: 'Acrylic Products', slug: 'acrylic', icon: Layers, description: 'Custom cut acrylic sheets and products.', image_hint: 'acrylic sheet' },
  { name: 'Wood Products', slug: 'wood', icon: Trees, description: 'Engraved and cut wood items.', image_hint: 'wood craft' },
  { name: 'Backdrops & Displays', slug: 'backdrops', icon: RectangleHorizontal, description: 'Custom backdrops for events and photography.', image_hint: 'event backdrop' },
  { name: 'Trolley Carts', slug: 'trolley-carts', icon: Truck, description: 'Customizable utility and display carts.', image_hint: 'utility cart' },
  { name: 'Signs & Banners', slug: 'signs-banners', icon: Flag, description: 'Promotional and informational signage.', image_hint: 'banner sign' },
  { name: 'Stickers (Print & Cut)', slug: 'stickers', icon: ScissorsLine, description: 'Custom die-cut stickers and labels.', image_hint: 'sticker sheet' },
];

export default function StorePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <ShoppingCart className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="font-headline text-4xl md:text-5xl text-primary mb-3">Inventex Labs Store</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our online store is currently under development. Products will be available soon!
          </p>
        </div>

        <Card className="w-full max-w-4xl mx-auto shadow-lg mb-12">
          <CardHeader>
            <CardTitle className="font-headline text-2xl text-primary flex items-center gap-2">
              <Clock className="h-6 w-6" /> Shopify Integration Coming Soon
            </CardTitle>
            <CardDescription>
              We are working hard to bring you a seamless shopping experience for all our products.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-lg">
            <Image
              src="https://placehold.co/800x300.png"
              alt="Store placeholder graphic"
              width={800}
              height={300}
              className="rounded-lg mb-6"
              data-ai-hint="online shopping"
            />
            <p>
              Our online store will feature a range of products and manufacturing aids. We are planning to integrate with Shopify for a secure and convenient checkout process.
            </p>
            <p className="text-sm text-muted-foreground">
              Thank you for your patience. Check back soon for updates!
            </p>
          </CardContent>
        </Card>

        <section className="mb-16">
          <h2 className="font-headline text-3xl text-primary mb-8 text-center">Featured Categories (Coming Soon)</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {productCategories.map((category) => (
              <Link key={category.slug} href={`/products/${category.slug}`} passHref>
                <Card className="flex flex-col h-full shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader className="items-center text-center pb-3">
                    <category.icon className="h-10 w-10 text-primary mb-3" />
                    <CardTitle className="font-headline text-xl text-foreground">{category.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center flex-grow">
                    <p className="text-sm text-muted-foreground">{category.description}</p>
                  </CardContent>
                  <div className="p-4 pt-2 text-center">
                    <span className="text-xs text-primary hover:underline">View Products &rarr;</span>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </section>
        
        <div className="text-center">
             <p className="text-lg text-muted-foreground">
              In the meantime, you can explore our <Link href="/" className="text-primary hover:underline">custom manufacturing services</Link> or <Link href="/contact-us" className="text-primary hover:underline">contact us</Link> if you have specific inquiries.
            </p>
        </div>

      </main>
      <Footer />
    </div>
  );
}
