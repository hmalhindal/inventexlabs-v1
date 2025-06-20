
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Briefcase, Users, Lightbulb } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Careers - Inventex Labs',
  description: 'Join the Inventex Labs team and help us shape the future of manufacturing. Explore current job openings.',
};

const jobOpenings = [
  { title: "Senior Software Engineer (AI/ML)", location: "Remote / San Francisco", department: "Engineering" },
  { title: "Mechanical Engineer (DFM Specialist)", location: "Austin, TX", department: "Manufacturing Ops" },
  { title: "Product Manager", location: "Remote", department: "Product" },
  { title: "Marketing Specialist", location: "New York, NY", department: "Marketing" },
];


export default function CareersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <Briefcase className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="font-headline text-4xl md:text-5xl text-primary mb-3">Careers at Inventex Labs</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Be part of a dynamic team that's revolutionizing the manufacturing industry. We're looking for passionate, innovative individuals to join us on our mission.
          </p>
        </div>

        <Card className="w-full max-w-4xl mx-auto shadow-lg mb-12">
          <CardHeader>
            <CardTitle className="font-headline text-2xl flex items-center gap-2"><Users className="text-primary" /> Why Join Us?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-lg">
            <p>Inventex Labs is at the forefront of integrating AI with advanced manufacturing. We offer a collaborative, fast-paced environment where your work directly impacts the future of how things are made. Join us to tackle challenging problems, work with cutting-edge technology, and grow your career.</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Work on impactful projects that redefine manufacturing.</li>
              <li>Collaborate with a talented and diverse team.</li>
              <li>Opportunities for professional growth and development.</li>
              <li>Competitive salary and benefits package.</li>
            </ul>
             <Image 
              src="https://placehold.co/800x300.png" 
              alt="Inventex Labs team working collaboratively" 
              width={800} 
              height={300} 
              className="rounded-lg my-6"
              data-ai-hint="office collaboration"
            />
          </CardContent>
        </Card>

        <Card className="w-full max-w-4xl mx-auto shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline text-2xl flex items-center gap-2"><Lightbulb className="text-primary" /> Current Openings</CardTitle>
            <CardDescription>We are always looking for talented individuals. If you don't see a role that fits, feel free to reach out.</CardDescription>
          </CardHeader>
          <CardContent>
            {jobOpenings.length > 0 ? (
              <ul className="space-y-4">
                {jobOpenings.map((job, index) => (
                  <li key={index} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-semibold text-primary">{job.title}</h3>
                    <p className="text-sm text-muted-foreground">{job.department} &bull; {job.location}</p>
                    <Button asChild variant="link" className="p-0 h-auto mt-2">
                      {/* In a real app, this would link to a job description page or application form */}
                      <Link href={`mailto:careers@inventexlabs.com?subject=Application for ${job.title}`}>Apply Now</Link>
                    </Button>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-muted-foreground">There are currently no open positions. Please check back later or send us your resume speculatively.</p>
            )}
             <div className="text-center mt-8">
                <p className="text-muted-foreground mb-2">Don't see your dream role?</p>
                 <Button asChild>
                    <Link href="mailto:careers@inventexlabs.com?subject=General Application Inquiry">Send Us Your Resume</Link>
                </Button>
             </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
