
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { Package, Settings, CreditCard, MapPin, Shield, LogOut, FileText } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'My Account - Inventex Labs',
  description: 'Manage your profile, orders, and settings on Inventex Labs.',
};

const accountSections = [
    { title: 'Order History', description: 'View your past and current orders', icon: Package, href: '/my-account/orders' },
    { title: 'Saved Designs', description: 'Access your uploaded CAD files', icon: FileText, href: '/my-account/designs' },
    { title: 'Shipping Addresses', description: 'Manage your delivery addresses', icon: MapPin, href: '/my-account/addresses' },
    { title: 'Payment Methods', description: 'Update your payment information', icon: CreditCard, href: '/my-account/payment' },
    { title: 'Account Settings', description: 'Update your profile details', icon: Settings, href: '/my-account/settings' },
    { title: 'Security', description: 'Change your password', icon: Shield, href: '/my-account/security' },
];

// Mock user data
const user = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  initials: 'JD',
  avatarUrl: 'https://placehold.co/100x100.png',
};

export default function MyAccountPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl md:text-5xl text-primary mb-3">My Account</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Welcome back, {user.name}. Manage your account and orders here.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Sidebar Card */}
            <aside className="lg:col-span-1">
                <Card className="shadow-lg sticky top-28">
                    <CardHeader className="items-center text-center">
                        <Avatar className="h-24 w-24 mb-4 border-2 border-primary">
                            <AvatarImage src={user.avatarUrl} alt={user.name} data-ai-hint="profile avatar" />
                            <AvatarFallback className="text-3xl">{user.initials}</AvatarFallback>
                        </Avatar>
                        <CardTitle className="font-headline text-2xl">{user.name}</CardTitle>
                        <CardDescription>{user.email}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Separator />
                        <div className="p-4 space-y-2">
                             <Button variant="outline" className="w-full justify-start gap-2">
                                <Settings className="h-4 w-4" /> Edit Profile
                            </Button>
                            <Button variant="ghost" className="w-full justify-start gap-2 text-destructive hover:text-destructive hover:bg-destructive/10">
                                <LogOut className="h-4 w-4" /> Logout
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </aside>

            {/* Right Content */}
            <div className="lg:col-span-2">
                <div className="grid md:grid-cols-2 gap-6">
                    {accountSections.map((section) => (
                        <Link href={section.href} key={section.title}>
                            <Card className="h-full hover:shadow-xl hover:border-primary transition-all duration-200 cursor-pointer">
                                <CardHeader className="flex-row items-center gap-4">
                                    <div className="p-3 bg-primary/10 rounded-lg">
                                        <section.icon className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <CardTitle className="text-xl text-primary">{section.title}</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">{section.description}</p>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
