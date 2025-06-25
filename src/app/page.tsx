
'use client';

import { useState } from 'react';
import type { EstimateQuotationOutput } from '@/ai/flows/estimate-quotation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { QuoteForm } from '@/components/quote/QuoteForm';
import { QuotationDisplay } from '@/components/quote/QuotationDisplay';
import { OrderPlacementModal } from '@/components/order/OrderPlacementModal';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, CheckCircle } from 'lucide-react';
import Image from 'next/image';

const products = [
  {
    id: 1,
    title: 'Premium Acrylic Business Sign',
    description: 'Professional laser-cut business signage with LED backlighting option.',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'business sign illuminated',
    isFeatured: true,
    savePercent: 25,
    rating: 4.9,
    reviews: 38,
    leadTime: '2-3 days',
    materials: ['Acrylic', 'Metal backing'],
    features: ['LED Backlighting', 'Weather Resistant', 'Custom Size', 'Free Installation'],
    price: 45,
    originalPrice: 60,
  },
  {
    id: 2,
    title: 'Rapid Prototyping Service',
    description: 'Fast prototyping for product development and testing.',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'prototype 3d model',
    isFeatured: false,
    rating: 4.8,
    reviews: 22,
    leadTime: '4-8 hours',
    materials: ['Acrylic', 'Wood', 'Metal', 'Cardboard'],
    features: ['Same Day Service', 'Multiple Materials', 'Design Consultation', 'Iterative Testing'],
    price: 25,
  },
  {
    id: 3,
    title: 'Promotional Keychains - Bulk',
    description: 'Custom branded keychains for events and marketing.',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'custom keychains metal',
    isFeatured: false,
    rating: 4.7,
    reviews: 15,
    leadTime: '1-2 days',
    materials: ['Metal', 'Acrylic', 'Wood'],
    features: ['Bulk Pricing', 'Logo Engraving', 'Multiple Shapes', 'Gift Packaging'],
    price: 2.5,
    minOrder: 50,
  },
];


export default function HomePage() {
  const [quotation, setQuotation] = useState<EstimateQuotationOutput | null>(null);
  const [isQuoteLoading, setIsQuoteLoading] = useState(false);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
        <section className="mb-10 md:mb-16">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-center text-primary mb-8">
            Featured Services & Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card text-card-foreground">
                <div className="relative">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={600}
                    height={400}
                    className="w-full h-56 object-cover"
                    data-ai-hint={product.imageHint}
                  />
                  {product.isFeatured && (
                    <Badge className="absolute top-3 left-3" variant="default">Featured</Badge>
                  )}
                  {product.savePercent && (
                    <Badge className="absolute top-3 right-3" variant="destructive">Save {product.savePercent}%</Badge>
                  )}
                </div>
                <CardHeader>
                  <CardTitle className="font-headline text-xl text-primary">{product.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{product.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow space-y-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    <span className="font-bold text-foreground">{product.rating}</span>
                    <span className="text-muted-foreground">({product.reviews} reviews)</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Lead Time:</span>
                    <span className="font-semibold text-foreground">{product.leadTime}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Materials:</span>
                    <span className="font-semibold text-foreground truncate">{product.materials.join(', ')}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2 text-foreground">Key Features:</h4>
                    <ul className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm text-muted-foreground">
                      {product.features.map(feature => (
                        <li key={feature} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="flex-col items-start bg-secondary/30 p-4 mt-auto">
                  <div className="flex justify-between items-center w-full mb-4">
                    <div>
                      <p className="text-2xl font-bold text-primary">{product.price} KWD</p>
                      {product.originalPrice && (
                        <p className="text-sm text-muted-foreground line-through">{product.originalPrice} KWD</p>
                      )}
                    </div>
                    {product.minOrder && (
                      <Badge variant="secondary">Min. {product.minOrder}</Badge>
                    )}
                  </div>
                  <div className="flex gap-2 w-full">
                    <Button className="flex-1">Order Now</Button>
                    <Button variant="outline" className="flex-1">Get Quote</Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <div className="text-center mb-10 md:mb-16">
          <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-3">
            Get an Instant Quote
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Upload your CAD design, select materials, and get a real-time quotation for laser cutting or CNC machining.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 xl:gap-12 items-start">
          <div className="lg:col-span-3">
            <QuoteForm setQuotation={setQuotation} setIsLoading={setIsQuoteLoading} />
          </div>
          <div className="lg:col-span-2">
            <QuotationDisplay 
              quotation={quotation} 
              isLoading={isQuoteLoading} 
              onPlaceOrder={() => setIsOrderModalOpen(true)} 
            />
          </div>
        </div>
        
        {quotation && (
            <OrderPlacementModal
            isOpen={isOrderModalOpen}
            setIsOpen={setIsOrderModalOpen}
            quotation={quotation}
            />
        )}
      </main>
      <Footer />
    </div>
  );
}
