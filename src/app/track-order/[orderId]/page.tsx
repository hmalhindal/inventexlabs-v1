
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { FileText, AlertTriangle, Cog, Truck, CheckCircle, PackageSearch } from 'lucide-react';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

// Mock data for demonstration
const mockOrderStatuses = [
  { status: 'Order Placed', icon: FileText, date: '2023-10-26', completed: true },
  { status: 'Design Review', icon: PackageSearch, date: '2023-10-27', completed: true },
  { status: 'In Production (CNC Machining)', icon: Cog, date: '2023-10-28', completed: false, current: true },
  { status: 'Quality Check', icon: CheckCircle, date: null, completed: false },
  { status: 'Shipped', icon: Truck, date: null, completed: false },
  { status: 'Delivered', icon: CheckCircle, date: null, completed: false },
];

export async function generateStaticParams() {
  const validOrderIds = ['12345', '67890', 'abcde'];
  return validOrderIds.map((orderId) => ({
    orderId,
  }));
}

export default async function TrackOrderPage({ params }: { params: Promise<{ orderId: string }> }) {
  // In a real app, you'd fetch order data based on params.orderId
  const { orderId } = await params;
  const validOrderIds = ['12345', '67890', 'abcde']; // Mock valid order IDs
  const orderExists = validOrderIds.includes(orderId); // Mock check

  if (!orderExists) {
    return (
      <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12 flex items-center justify-center">
        <Card className="w-full max-w-md text-center">
          <CardHeader>
            <AlertTriangle className="h-12 w-12 text-destructive mx-auto mb-4" />
            <CardTitle className="font-headline text-2xl">Order Not Found</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6">
              We couldn't find an order with the ID: <span className="font-semibold text-primary">{orderId}</span>. Please check the ID and try again.
            </p>
            <Button asChild>
              <Link href="/">Go to Homepage</Link>
            </Button>
          </CardContent>
        </Card>
      </main>
      <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <Card className="w-full max-w-2xl mx-auto shadow-xl">
          <CardHeader>
            <CardTitle className="font-headline text-3xl text-primary">Track Your Order</CardTitle>
            <CardDescription>
              Status for order: <span className="font-semibold text-primary">{orderId}</span>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {mockOrderStatuses.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className={`flex flex-col items-center mr-2 ${item.current ? 'text-primary' : item.completed ? 'text-green-500' : 'text-muted-foreground'}`}>
                    <item.icon className={`h-6 w-6 ${item.current ? 'animate-pulse' : ''}`} />
                    {index < mockOrderStatuses.length -1 && (
                       <div className={`w-0.5 h-12 mt-1 ${item.completed ? 'bg-green-500' : 'bg-border'}`}></div>
                    )}
                  </div>
                  <div>
                    <h3 className={`font-semibold ${item.current ? 'text-primary' : ''}`}>{item.status}</h3>
                    {item.date && <p className="text-sm text-muted-foreground">{item.date}</p>}
                    {item.current && <p className="text-sm text-primary font-medium">Current Stage</p>}
                  </div>
                </div>
              ))}
            </div>
            <Separator className="my-8" />
            <div className="text-center">
              <p className="text-muted-foreground mb-2">Need help with your order?</p>
              <Button variant="outline" asChild>
                <Link href="/contact-us">Contact Support</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
