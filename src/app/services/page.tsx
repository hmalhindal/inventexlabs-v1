
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Metadata } from 'next';
import { Scissors, Printer, Cog, Layers, Zap, Star, CheckCircle } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Services - Inventex Labs',
  description: 'Explore the wide range of manufacturing, design, and printing services offered by Inventex Labs.',
};

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

const services: Service[] = [
  {
    icon: Scissors,
    title: 'Laser Cutting',
    description: 'Precision cutting in acrylic, wood, metal, and more materials.',
    features: ['Sub-millimeter precision', 'Multiple materials', 'Custom thickness'],
  },
  {
    icon: Printer,
    title: 'Print on Demand',
    description: 'Custom printing services for promotional materials and products.',
    features: ['Digital printing', 'Large format', 'Variable data'],
  },
  {
    icon: Cog,
    title: 'Custom Fabrication',
    description: 'Bespoke manufacturing solutions for unique requirements.',
    features: ['Rapid prototyping', 'Small to large batches', 'Design consultation'],
  },
  {
    icon: Layers,
    title: 'Design Services',
    description: 'Professional design assistance and file preparation.',
    features: ['CAD design', 'File optimization', 'Material consultation'],
  },
  {
    icon: Zap,
    title: 'Quick Turnaround',
    description: 'Fast production times without compromising quality.',
    features: ['Same-day quotes', 'Rush orders', 'Real-time tracking'],
  },
  {
    icon: Star,
    title: 'Quality Guarantee',
    description: 'Premium materials and rigorous quality control.',
    features: ['Material certification', 'Quality testing', 'Satisfaction guarantee'],
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl md:text-5xl text-primary mb-3">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From precision laser cutting to custom fabrication and design, we provide a comprehensive suite of services to bring your projects to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
             <Card key={service.title} className="flex flex-col p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card text-card-foreground">
              <div className="mb-4">
                <div className="w-fit p-3 bg-primary/10 rounded-lg">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
              </div>
              <h3 className="font-headline text-xl text-foreground font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 flex-grow">{service.description}</p>
              <ul className="space-y-2 text-sm mt-auto">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
