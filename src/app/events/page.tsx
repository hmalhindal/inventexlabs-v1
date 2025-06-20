
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { CalendarDays, MapPin, Ticket } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Events - Inventex Labs',
  description: 'Join Inventex Labs at upcoming industry events, webinars, and workshops. Stay informed about our latest activities.',
};

// Mock event data
const upcomingEvents = [
  {
    id: 1,
    title: "Innovate MFG Conference 2024",
    date: "November 15-17, 2024",
    location: "Tech Center, San Jose, CA",
    description: "Join us at Booth #123 to see live demos of our AI-powered quoting platform and discuss your manufacturing challenges.",
    image: "https://placehold.co/600x300.png",
    image_hint: "conference hall",
    registerLink: "#" // Placeholder
  },
  {
    id: 2,
    title: "Webinar: AI in Design for Manufacturability",
    date: "December 5, 2024 - 11:00 AM PST",
    location: "Online Webinar",
    description: "Learn how AI is revolutionizing DFM feedback and helping engineers optimize designs for production.",
    image: "https://placehold.co/600x300.png",
    image_hint: "webinar screen",
    registerLink: "#" // Placeholder
  },
];

const pastEvents = [
 {
    id: 3,
    title: "Advanced Manufacturing Expo 2023",
    date: "May 10-12, 2023",
    location: "Chicago, IL",
    description: "We had a great time showcasing our platform and connecting with industry leaders.",
    image: "https://placehold.co/600x300.png",
    image_hint: "trade show",
  },
];


export default function EventsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <CalendarDays className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="font-headline text-4xl md:text-5xl text-primary mb-3">Inventex Labs Events</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect with us at industry conferences, trade shows, webinars, and workshops.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="font-headline text-3xl text-primary mb-8 text-center">Upcoming Events</h2>
          {upcomingEvents.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-8">
              {upcomingEvents.map((event) => (
                <Card key={event.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <Image 
                    src={event.image} 
                    alt={event.title} 
                    width={600} 
                    height={300} 
                    className="w-full h-48 object-cover"
                    data-ai-hint={event.image_hint}
                  />
                  <CardHeader>
                    <CardTitle className="font-headline text-xl text-primary">{event.title}</CardTitle>
                    <div className="text-sm text-muted-foreground flex items-center gap-2"><CalendarDays className="h-4 w-4" /> {event.date}</div>
                    <div className="text-sm text-muted-foreground flex items-center gap-2"><MapPin className="h-4 w-4" /> {event.location}</div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground text-sm">{event.description}</p>
                  </CardContent>
                  <div className="p-6 pt-0">
                    <Button asChild>
                      <Link href={event.registerLink} target={event.location === "Online Webinar" ? "_blank" : "_self"}>
                        <Ticket className="mr-2 h-4 w-4" /> 
                        {event.location === "Online Webinar" ? "Register Now" : "Learn More"}
                      </Link>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground text-center text-lg">No upcoming events scheduled at the moment. Please check back soon!</p>
          )}
        </section>

        <section>
          <h2 className="font-headline text-3xl text-primary mb-8 text-center">Past Events</h2>
           {pastEvents.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastEvents.map((event) => (
                <Card key={event.id} className="flex flex-col overflow-hidden shadow-md bg-secondary/30">
                  <Image 
                    src={event.image} 
                    alt={event.title} 
                    width={600} 
                    height={300} 
                    className="w-full h-40 object-cover opacity-70"
                    data-ai-hint={event.image_hint}
                  />
                  <CardHeader>
                    <CardTitle className="font-headline text-lg text-foreground">{event.title}</CardTitle>
                     <div className="text-xs text-muted-foreground flex items-center gap-1"><CalendarDays className="h-3 w-3" /> {event.date}</div>
                    <div className="text-xs text-muted-foreground flex items-center gap-1"><MapPin className="h-3 w-3" /> {event.location}</div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-xs">{event.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground text-center">No past event highlights available yet.</p>
          )}
        </section>

      </main>
      <Footer />
    </div>
  );
}
