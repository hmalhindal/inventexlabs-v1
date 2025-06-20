
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import type { Metadata } from 'next';
import { HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'FAQ - Inventex Labs',
  description: 'Find answers to frequently asked questions about Inventex Labs services, platform, quoting, and manufacturing processes.',
};

const faqItems = [
  {
    question: "What manufacturing services does Inventex Labs offer?",
    answer: "Inventex Labs currently offers CNC Machining and Laser Cutting services. We are continuously expanding our capabilities, so please check back for updates on services like Injection Moulding, Sheet Metal Fabrication, and 3D Printing.",
  },
  {
    question: "How do I get a quote for my design?",
    answer: "Simply navigate to our homepage, upload your CAD file (e.g., STEP, DXF, DWG, IGES), select your desired material, quantity, and manufacturing service. Our AI-powered platform will provide you with an instant quote.",
  },
  {
    question: "What file formats do you accept for CAD designs?",
    answer: "We accept a variety of common CAD file formats, including .STEP, .STP, .IGES, .IGS, .DXF, and .DWG. For 3D printing, .STL is also commonly accepted. If you have a different format, please contact us.",
  },
  {
    question: "What materials can I choose from?",
    answer: "We offer a range of materials for each service. For CNC machining, common options include Aluminum, Steel, and various plastics. For Laser Cutting, we primarily work with metals like Steel and Aluminum. Specific material availability can be seen during the quoting process on our platform.",
  },
  {
    question: "What is the typical lead time for orders?",
    answer: "Lead times vary depending on the complexity of the part, the manufacturing process, material availability, and order quantity. Our instant quoting system provides an estimated lead time along with your price. Expedited options may be available.",
  },
  {
    question: "How is my intellectual property (IP) protected?",
    answer: "We take IP protection very seriously. All design uploads are treated as confidential. Our platform uses secure connections, and we have strict data handling policies. For more details, please review our Privacy Policy.",
  },
  {
    question: "Can I get DFM (Design for Manufacturability) feedback?",
    answer: "Yes, our platform often provides automated DFM feedback to help you optimize your design for the chosen manufacturing process, potentially reducing costs and improving quality. Our engineering team can also provide more detailed DFM analysis if required.",
  },
  {
    question: "What are your payment options?",
    answer: "We accept major credit cards through our secure online payment portal. For larger orders or specific business accounts, other payment terms may be arranged. Please contact us for more details.",
  },
];

export default function FaqPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <HelpCircle className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="font-headline text-4xl md:text-5xl text-primary mb-3">Frequently Asked Questions</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find quick answers to common questions about our services and platform.
          </p>
        </div>

        <Card className="w-full max-w-3xl mx-auto shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline text-2xl text-primary">General Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger className="text-left hover:no-underline text-lg">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground prose dark:prose-invert max-w-none">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
        
        <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground mb-4">Can't find the answer you're looking for?</p>
            <Link href="/contact-us" className="text-primary font-semibold hover:underline text-xl">
                Contact Our Support Team &rarr;
            </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
