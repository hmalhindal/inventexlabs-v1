'use client';

import { useState } from 'react';
import type { EstimateQuotationOutput } from '@/ai/flows/estimate-quotation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { QuoteForm } from '@/components/quote/QuoteForm';
import { QuotationDisplay } from '@/components/quote/QuotationDisplay';
import { OrderPlacementModal } from '@/components/order/OrderPlacementModal';
import { Separator } from '@/components/ui/separator';

export default function HomePage() {
  const [quotation, setQuotation] = useState<EstimateQuotationOutput | null>(null);
  const [isQuoteLoading, setIsQuoteLoading] = useState(false);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
        <div className="text-center mb-10 md:mb-16">
          <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-3">
            Inventex Labs - Instant Quotes
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Upload your CAD design, select materials, and get a real-time quotation for laser cutting or CNC machining with Inventex Labs.
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
