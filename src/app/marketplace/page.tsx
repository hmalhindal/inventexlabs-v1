
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Users, Star, MapPin, Building, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Marketplace - Inventex Labs',
  description: 'Discover top vendors and creators in Kuwait, or join our marketplace to sell your products and services.',
};

const topVendors = [
  {
    name: 'Kuwait Design Studio',
    rating: 4.9,
    products: 23,
    location: 'Kuwait City',
    badge: 'Top Seller',
  },
  {
    name: 'Modern Crafts KW',
    rating: 4.7,
    products: 18,
    location: 'Hawalli',
    badge: 'Rising Star',
  },
  {
    name: 'Industrial Arts',
    rating: 4.8,
    products: 31,
    location: 'Ahmadi',
    badge: 'Featured',
  },
];

export default function MarketplacePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <Building className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="font-headline text-4xl md:text-5xl text-primary mb-3">Inventex Labs Marketplace</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A curated space for vendors, fabricators, designers, and manufacturers to connect with customers. Register to sell your products and services using our platform and tools.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          <Card className="lg:col-span-2 shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-primary">Top Vendors</CardTitle>
              <CardDescription>Leading creators and manufacturers in Kuwait.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {topVendors.map((vendor, index) => (
                <div key={index} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-secondary/50">
                  <Avatar className="h-12 w-12 bg-primary/10">
                    <AvatarFallback>
                      <Users className="text-primary" />
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-grow">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-lg text-foreground">{vendor.name}</h3>
                      <Badge variant="secondary">{vendor.badge}</Badge>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground space-x-3 mt-1">
                      <span className="flex items-center gap-1"><Star className="h-4 w-4 text-yellow-400" /> {vendor.rating}</span>
                      <span>&bull;</span>
                      <span>{vendor.products} products</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground gap-1 mt-1">
                      <MapPin className="h-4 w-4" />
                      <span>{vendor.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="shadow-lg bg-primary/5 border-primary/20">
              <CardHeader className="text-center">
                <Avatar className="h-16 w-16 bg-primary/10 mx-auto mb-3">
                    <AvatarFallback>
                        <Building className="h-8 w-8 text-primary" />
                    </AvatarFallback>
                </Avatar>
                <CardTitle className="font-headline text-2xl text-primary">Become a Vendor</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-6">
                  Sell your designs and reach customers across Kuwait.
                </p>
                <Button asChild size="lg" className="w-full">
                  <Link href="/vendor-registration">
                    Join Marketplace <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
