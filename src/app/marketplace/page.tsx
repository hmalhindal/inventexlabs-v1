
'use client';

import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  TrendingUp, 
  Users, 
  Award, 
  Filter, 
  LayoutGrid, 
  List, 
  Heart, 
  ShoppingCart, 
  Star,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const categories = [
  { name: 'All Products', count: 156 },
  { name: 'Business Signs', count: 45 },
  { name: 'Home Decor', count: 38 },
  { name: 'Accessories', count: 28 },
  { name: 'Prototypes', count: 22 },
  { name: 'Keychains', count: 15 },
  { name: 'Office Items', count: 8 },
];

const products = [
  {
    id: 1,
    type: 'dark',
    featured: true,
    title: 'Custom Business Sign',
    vendor: 'Kuwait Design Studio',
    rating: 4.8,
    reviews: 24,
    image: 'https://placehold.co/600x400.png',
    imageHint: 'service list dark'
  },
  {
    id: 2,
    type: 'light',
    featured: false,
    title: 'Modern Wall Art',
    vendor: 'Modern Crafts KW',
    rating: 4.6,
    reviews: 12,
    image: 'https://placehold.co/600x400.png',
    imageHint: 'promo card light'
  },
  {
    id: 3,
    type: 'light',
    featured: true,
    title: 'Personalized Keychain',
    vendor: 'Industrial Arts',
    rating: 4.9,
    reviews: 45,
    image: 'https://placehold.co/600x400.png',
    imageHint: 'features list light'
  },
  {
    id: 4,
    type: 'light',
    featured: false,
    title: 'Engraved Wood Coasters',
    vendor: 'Kuwait Design Studio',
    rating: 4.7,
    reviews: 31,
    image: 'https://placehold.co/600x400.png',
    imageHint: 'wood coasters drink'
  },
  {
    id: 5,
    type: 'light',
    featured: false,
    title: 'Acrylic Photo Block',
    vendor: 'Modern Crafts KW',
    rating: 4.8,
    reviews: 19,
    image: 'https://placehold.co/600x400.png',
    imageHint: 'photo frame acrylic'
  },
  {
    id: 6,
    type: 'dark',
    featured: false,
    title: 'Metal Business Cards',
    vendor: 'Industrial Arts',
    rating: 5.0,
    reviews: 10,
    image: 'https://placehold.co/600x400.png',
    imageHint: 'metal business card'
  },
];


export default function MarketplacePage() {
  const [activeCategory, setActiveCategory] = useState('All Products');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  return (
    <div className="flex flex-col min-h-screen bg-secondary/20">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
        
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Kuwait's Premier <span className="text-primary">Laser Cutting</span> Marketplace
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Discover unique designs from local creators and businesses. From custom signs to personalized accessories.
          </p>
          <div className="flex justify-center items-center gap-4 flex-wrap">
            <Badge variant="outline" className="text-sm py-2 px-4 bg-background"><TrendingUp className="h-4 w-4 mr-2" /> 150+ Products</Badge>
            <Badge variant="outline" className="text-sm py-2 px-4 bg-background"><Users className="h-4 w-4 mr-2" /> 25+ Local Vendors</Badge>
            <Badge variant="outline" className="text-sm py-2 px-4 bg-background"><Award className="h-4 w-4 mr-2" /> Premium Quality</Badge>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
          
          <aside>
            <Card className="p-4 bg-background sticky top-24">
              <h2 className="text-lg font-semibold mb-4 px-2">Categories</h2>
              <div className="flex flex-col gap-1">
                {categories.map((category) => (
                  <Button
                    key={category.name}
                    variant={activeCategory === category.name ? 'default' : 'ghost'}
                    className="w-full justify-between"
                    onClick={() => setActiveCategory(category.name)}
                  >
                    <span>{category.name}</span>
                    <span className="text-xs font-normal">{category.count}</span>
                  </Button>
                ))}
              </div>
            </Card>
          </aside>

          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">All Products <span className="text-base font-normal text-muted-foreground">({products.length} items)</span></h2>
              <div className="flex items-center gap-2">
                <Button variant="outline" className="gap-2 bg-background"><Filter className="h-4 w-4" /> Filter</Button>
                <div className="bg-background p-1 rounded-md border flex">
                  <Button variant={viewMode === 'grid' ? 'secondary' : 'ghost'} size="icon" onClick={() => setViewMode('grid')} className="h-8 w-8">
                    <LayoutGrid className="h-4 w-4" />
                  </Button>
                   <Button variant={viewMode === 'list' ? 'secondary' : 'ghost'} size="icon" onClick={() => setViewMode('list')} className="h-8 w-8">
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            <div className={cn(
              "grid gap-6",
              viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1'
            )}>
              {products.map(product => (
                <Card key={product.id} className={cn(
                  "overflow-hidden shadow-md hover:shadow-xl transition-shadow flex flex-col group",
                  product.type === 'dark' ? 'bg-card text-card-foreground' : 'bg-background'
                )}>
                  <CardHeader className="p-0 relative">
                      {product.featured && <Badge className="absolute top-3 left-3 z-10">Featured</Badge>}
                      <div className="absolute top-3 right-3 z-10 flex gap-2">
                        <Button variant="secondary" size="icon" className="h-8 w-8 rounded-full bg-background/50 hover:bg-background/80 text-foreground"><Heart className="h-4 w-4" /></Button>
                        <Button variant="secondary" size="icon" className="h-8 w-8 rounded-full bg-background/50 hover:bg-background/80 text-foreground"><ShoppingCart className="h-4 w-4" /></Button>
                      </div>
                      <Image 
                        src={product.image}
                        width={600} 
                        height={400} 
                        alt={product.title} 
                        data-ai-hint={product.imageHint}
                        className="w-full aspect-video object-cover"
                      />
                  </CardHeader>
                  <CardContent className="p-4 flex-grow flex flex-col">
                      <h3 className="font-bold text-lg">{product.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{product.vendor}</p>
                      <div className="flex items-center gap-1 text-sm mt-auto pt-2">
                        <Star className="h-4 w-4 text-primary fill-primary" />
                        <span className="font-bold">{product.rating.toFixed(1)}</span>
                        <span className="text-muted-foreground">({product.reviews})</span>
                      </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
