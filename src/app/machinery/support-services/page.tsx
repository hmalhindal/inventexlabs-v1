
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Support & Services - Inventex Labs',
  description: 'Professional support, installation, and maintenance services for your industrial machinery.',
};

export default function SupportServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <Card className="w-full max-w-4xl mx-auto shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="font-headline text-4xl text-primary mb-2">Support & Services</CardTitle>
            <CardDescription className="text-xl text-muted-foreground">
              Your Partner in Machinery Performance and Longevity
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-lg">
            <Image 
              src="https://placehold.co/800x400.png" 
              alt="Technician servicing a machine" 
              width={800} 
              height={400} 
              className="rounded-lg mb-6"
              data-ai-hint="technician support team"
            />
            <p>
              Beyond providing state-of-the-art machinery, we offer a full suite of support services to ensure you get the most out of your investment. Our team of expert technicians is dedicated to providing timely, professional, and effective solutions.
            </p>
            
            <h2 className="font-headline text-2xl text-primary pt-4">Our Service Offerings:</h2>
            <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2">
                <li className="flex items-start gap-3"><CheckCircle className="h-6 w-6 text-primary mt-1 shrink-0" /><p><span className="font-semibold">On-Site Installation:</span> Professional setup and calibration of your new equipment to ensure optimal performance from day one.</p></li>
                <li className="flex items-start gap-3"><CheckCircle className="h-6 w-6 text-primary mt-1 shrink-0" /><p><span className="font-semibold">Comprehensive Training:</span> We provide thorough training for your operators on machine use, software, and safety protocols.</p></li>
                <li className="flex items-start gap-3"><CheckCircle className="h-6 w-6 text-primary mt-1 shrink-0" /><p><span className="font-semibold">Preventive Maintenance:</span> Scheduled maintenance plans to prevent issues, reduce downtime, and extend the life of your machinery.</p></li>
                <li className="flex items-start gap-3"><CheckCircle className="h-6 w-6 text-primary mt-1 shrink-0" /><p><span className="font-semibold">Expert Troubleshooting:</span> Fast and effective remote or on-site support to diagnose and resolve any operational issues.</p></li>
            </ul>

            <h2 className="font-headline text-2xl text-primary pt-4">Why Choose Our Services?</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Team of certified and experienced technicians</li>
              <li>Commitment to minimizing your operational downtime</li>
              <li>Customized service plans tailored to your needs</li>
              <li>Access to genuine spare parts</li>
            </ul>

            <p className="pt-4">
              Partner with us for peace of mind, knowing that expert help is always available to support your manufacturing operations.
            </p>
            <div className="text-center pt-6">
              <Button asChild size="lg">
                <Link href="/contact-us?subject=Support%20and%20Services%20Inquiry">Inquire About Support Services</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
