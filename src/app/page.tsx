
'use client';

import { useState } from 'react';
import type { EstimateQuotationOutput } from '@/ai/flows/estimate-quotation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { QuoteForm } from '@/components/quote/QuoteForm';
import { QuotationDisplay } from '@/components/quote/QuotationDisplay';
import { OrderPlacementModal } from '@/components/order/OrderPlacementModal';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Gift, Printer, Megaphone, PartyPopper, PenTool, Paintbrush, 
  Clapperboard, Shield, Box, MonitorSmartphone, Flag, Zap 
} from 'lucide-react';
import type { LucideProps } from 'lucide-react';

interface Service {
  name: string;
  icon: React.FC<LucideProps>;
}

const servicesData: Service[] = [
  { name: 'Promotion Gifts', icon: Gift },
  { name: 'Printing', icon: Printer },
  { name: 'Advertising', icon: Megaphone },
  { name: 'Parties & Exhibitions', icon: PartyPopper },
  { name: 'Graphics Design', icon: PenTool },
  { name: 'Painter & Calligrapher', icon: Paintbrush },
  { name: 'Marketing Video', icon: Clapperboard },
  { name: 'Honor Shields', icon: Shield },
  { name: '3D Models', icon: Box },
  { name: 'Website Design', icon: MonitorSmartphone },
  { name: 'International Flags', icon: Flag },
  { name: 'Laser Cutting', icon: Zap },
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
            Explore Our Services
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6">
            {servicesData.map((service) => (
              <Card key={service.name} className="shadow-md hover:shadow-lg transition-shadow text-center">
                <CardHeader className="pb-2">
                  <service.icon className="h-10 w-10 text-primary mx-auto mb-2" />
                  <CardTitle className="font-headline text-md sm:text-lg text-foreground">
                    {service.name}
                  </CardTitle>
                </CardHeader>
                {/* <CardContent>
                  <p className="text-xs text-muted-foreground">Description placeholder</p>
                </CardContent> */}
              </Card>
            ))}
          </div>
        </section>

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
