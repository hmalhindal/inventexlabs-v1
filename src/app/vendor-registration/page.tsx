
'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import type { Metadata } from 'next';
import { Building, User, Mail, MessageSquare } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// Metadata for server components, but good to keep for reference
// export const metadata: Metadata = {
//   title: 'Vendor Registration - Inventex Labs',
//   description: 'Register as a vendor to sell your products and services on the Inventex Labs marketplace.',
// };

export default function VendorRegistrationPage() {
  const { toast } = useToast();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Add form submission logic here (e.g., send to an API)
    toast({
      title: 'Registration Submitted!',
      description: "Thank you for registering. Our team will review your application and get back to you soon.",
    });
    (event.target as HTMLFormElement).reset();
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12 flex items-center justify-center">
        <Card className="w-full max-w-lg shadow-xl">
          <CardHeader className="text-center">
            <Building className="h-12 w-12 text-primary mx-auto mb-3" />
            <CardTitle className="font-headline text-3xl text-primary">Vendor Registration</CardTitle>
            <CardDescription>
              Join our marketplace to sell your products and services.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="flex items-center gap-2 mb-1"><User className="h-4 w-4" /> Full Name</Label>
                <Input id="name" name="name" type="text" placeholder="Your Name" required />
              </div>
              <div>
                <Label htmlFor="companyName" className="flex items-center gap-2 mb-1"><Building className="h-4 w-4" /> Company Name</Label>
                <Input id="companyName" name="companyName" type="text" placeholder="Your Company LLC" required />
              </div>
              <div>
                <Label htmlFor="email" className="flex items-center gap-2 mb-1"><Mail className="h-4 w-4" /> Email Address</Label>
                <Input id="email" name="email" type="email" placeholder="you@company.com" required />
              </div>
              <div>
                <Label htmlFor="message" className="flex items-center gap-2 mb-1"><MessageSquare className="h-4 w-4" /> Tell us about your products/services</Label>
                <Textarea id="message" name="message" placeholder="We specialize in..." rows={4} required />
              </div>
              <Button type="submit" className="w-full" size="lg">Submit Registration</Button>
            </form>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
