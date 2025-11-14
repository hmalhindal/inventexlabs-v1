
'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Zap, Cog, Layers, Truck, FileText, Bot, Compass, ShoppingCart, Home, Gift, Briefcase, Box, GalleryHorizontal, ChevronRight, Calculator } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

const storeCategories = [
    { title: 'Home Decor', icon: Home },
    { title: 'Business Signs', icon: Briefcase },
    { title: 'Personalized Gifts', icon: Gift },
    { title: 'Custom Boxes', icon: Box },
    { title: 'Event Props', icon: GalleryHorizontal },
];

const additionalServices = [
    {
        icon: Zap,
        title: "Express Service",
        description: "Same-day delivery for urgent projects",
        features: ["Rush orders", "Priority queue", "Dedicated support"],
    },
    {
        icon: Cog,
        title: "Custom Design",
        description: "Professional design service for your project",
        features: ["CAD design", "3D modeling", "File optimization"],
    },
    {
        icon: Layers,
        title: "Assembly Service",
        description: "Complete assembly and finishing",
        features: ["Multi-part assembly", "Hardware installation", "Quality testing"],
    },
    {
        icon: Truck,
        title: "Kuwait Delivery",
        description: "Free delivery across Kuwait",
        features: ["Same-day delivery", "Installation service", "Tracking updates"],
    },
];

const platformHighlights = [
    {
        icon: Bot,
        title: "Instant AI-Powered Quotes",
        description: "Our AI analyzes your CAD files to provide instant, accurate quotes for various materials and services."
    },
    {
        icon: Compass,
        title: "Multiple Services",
        description: "We offer a range of manufacturing services including CNC Machining and Laser Cutting to suit your project needs."
    },
    {
        icon: FileText,
        title: "Seamless Workflow",
        description: "From design upload to order placement and tracking, our platform simplifies the entire manufacturing process."
    }
];


export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
        <div className="text-center mb-10 md:mb-16">
          <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-3">
            On-Demand Manufacturing Made Simple
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Inventex Labs provides an intelligent, automated platform for engineers, designers, and businesses to get custom parts manufactured with speed and precision.
          </p>
        </div>

        <section className="mb-10 md:mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {platformHighlights.map((highlight) => (
                    <div key={highlight.title} className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                                <highlight.icon className="h-6 w-6 text-primary" />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-foreground mb-1">{highlight.title}</h3>
                            <p className="text-sm text-muted-foreground">{highlight.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        <section className="mb-10 md:mb-16">
            <Card className="w-full bg-primary/10 shadow-xl overflow-hidden border-2 border-primary/20">
                 <div className="p-8 md:p-12 text-center">
                    <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary mb-4">
                        Ready to Create?
                    </h2>
                    <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                        Get an instant price for your design. Upload a CAD file to our AI-powered quoting tool and start your manufacturing journey today.
                    </p>
                    <Button asChild size="lg" className="text-lg py-7 px-10">
                        <Link href="/get-a-quote">
                            <Calculator className="mr-3 h-6 w-6" />
                            Get an Instant Quote
                        </Link>
                    </Button>
                </div>
            </Card>
        </section>

        <section className="mb-10 md:mb-16">
            <Card className="w-full bg-card text-card-foreground shadow-xl overflow-hidden">
                <div className="grid md:grid-cols-2 items-center">
                    <div className="p-8 md:p-12">
                        <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary mb-4">
                            Explore Our Online Store
                        </h2>
                        <p className="text-lg text-muted-foreground mb-6">
                            Discover a curated collection of laser-cut products, ready to be customized for your home, business, or special occasions.
                        </p>
                        <div className="space-y-3 mb-8">
                           {storeCategories.map(category => (
                             <div key={category.title} className="flex items-center gap-3 p-3 bg-background/10 rounded-md">
                                <category.icon className="h-5 w-5 text-primary"/>
                                <span className="font-medium text-foreground">{category.title}</span>
                             </div>
                           ))}
                        </div>
                        <Button asChild size="lg">
                            <Link href="/store">
                                <ShoppingCart className="mr-2 h-5 w-5" />
                                Shop All Products
                                <ChevronRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                    </div>
                    <div className="hidden md:block h-full">
                        <Image
                            src="https://placehold.co/600x800/EEE/31343C?text=Product%20Showcase"
                            alt="Promotional image for online store"
                            width={600}
                            height={800}
                            className="object-cover w-full h-full"
                            data-ai-hint="product showcase"
                            unoptimized
                        />
                    </div>
                </div>
            </Card>
        </section>
        
        <section className="mb-10 md:mb-16">
            <div className="text-center mb-12">
                <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary mb-3">
                    Additional Services
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Comprehensive solutions to support your project from concept to completion
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {additionalServices.map((service) => (
                    <Card key={service.title} className="text-center shadow-lg hover:shadow-xl transition-shadow bg-card text-card-foreground">
                        <CardContent className="p-6">
                            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                                <service.icon className="h-8 w-8 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                            <p className="text-sm text-muted-foreground mb-4 h-10">{service.description}</p>
                            <ul className="space-y-2 text-sm text-left">
                                {service.features.map((feature) => (
                                    <li key={feature} className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-primary" />
                                        <span className="text-muted-foreground">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
