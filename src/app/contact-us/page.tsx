
'use client'; // Add this directive

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
// Removed Metadata type import as it's not used in client components directly for this purpose
// import type { Metadata } from 'next'; 
import { Mail, Phone, MapPin } from 'lucide-react';

// Metadata should be exported separately if needed, or handled in a layout if this page remains client-side focused.
// For client components, 'metadata' export isn't directly used by Next.js for page metadata.
// If static metadata is needed, it should be in a parent layout or a server component.
// export const metadata: Metadata = { 
// title: 'Contact Us - Inventex Labs',
// description: 'Get in touch with Inventex Labs for inquiries, support, or partnership opportunities. We are here to help.',
// };

export default function ContactUsPage() {
  // In a real app, you'd handle form submission, e.g., with a server action
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Add form submission logic here
    alert('Thank you for your message! We will get back to you soon.');
    (event.target as HTMLFormElement).reset();
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <Mail className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="font-headline text-4xl md:text-5xl text-primary mb-3">Contact Inventex Labs</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're here to answer your questions, provide support, or discuss how we can help with your manufacturing needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-primary">Send Us a Message</CardTitle>
              <CardDescription>Fill out the form below and our team will get back to you shortly.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" name="name" type="text" placeholder="John Doe" required />
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" name="email" type="email" placeholder="you@example.com" required />
                </div>
                 <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" name="subject" type="text" placeholder="Inquiry about CNC services" required />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" placeholder="Your message here..." rows={5} required />
                </div>
                <Button type="submit" className="w-full" size="lg">Send Message</Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-2xl text-primary">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-6 w-6 text-primary" />
                  <a href="mailto:info@inventexlabs.com" className="text-lg hover:underline">info@inventexlabs.com</a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-6 w-6 text-primary" />
                  <a href="tel:+15551234567" className="text-lg hover:underline">+1 (555) 123-4567</a>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-6 w-6 text-primary mt-1 shrink-0" />
                  <p className="text-lg">
                    Inventex Labs HQ<br />
                    123 Innovation Drive<br />
                    Tech City, CA 94000, USA
                  </p>
                </div>
              </CardContent>
            </Card>
             <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-2xl text-primary">Business Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">Monday - Friday: 9:00 AM - 6:00 PM (PST)</p>
                <p className="text-muted-foreground">Online platform available 24/7 for quotes.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
