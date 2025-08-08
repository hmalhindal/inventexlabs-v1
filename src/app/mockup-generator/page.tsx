
'use client';

import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Loader2, UploadCloud, Wand2, Image as ImageIcon } from 'lucide-react';
import Image from 'next/image';
import { generateMockupAction } from './actions';

export default function MockupGeneratorPage() {
  const { toast } = useToast();
  const [designFile, setDesignFile] = useState<File | null>(null);
  const [prompt, setPrompt] = useState<string>('A modern storefront with a logo sign');
  const [isLoading, setIsLoading] = useState(false);
  const [generatedMockup, setGeneratedMockup] = useState<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setDesignFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerateMockup = async () => {
    if (!designFile || !prompt) {
      toast({
        variant: 'destructive',
        title: 'Missing Information',
        description: 'Please upload a design and provide a prompt.',
      });
      return;
    }

    setIsLoading(true);
    setGeneratedMockup(null);

    try {
        const reader = new FileReader();
        reader.readAsDataURL(designFile);
        reader.onload = async () => {
            const designDataUri = reader.result as string;
            const result = await generateMockupAction({ designDataUri, prompt });

            if (result.error) {
                toast({
                    variant: 'destructive',
                    title: 'Generation Failed',
                    description: result.error,
                });
            } else if (result.data) {
                setGeneratedMockup(result.data.imageDataUri);
                toast({
                    title: 'Mockup Generated!',
                    description: 'Your new mockup is ready.',
                });
            }
            setIsLoading(false);
        };
        reader.onerror = (error) => {
             toast({
                variant: 'destructive',
                title: 'File Error',
                description: 'Could not read the uploaded file.',
            });
            setIsLoading(false);
        }

    } catch (error) {
      console.error('Mockup generation error:', error);
      toast({
        variant: 'destructive',
        title: 'An Error Occurred',
        description: 'Something went wrong. Please try again.',
      });
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <Wand2 className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="font-headline text-4xl md:text-5xl text-primary mb-3">AI Mockup Generator</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Visualize your designs in realistic scenes. Upload your logo or sign and let our AI create a mockup for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-primary">1. Configure Your Mockup</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="designFile" className="flex items-center gap-2 mb-1">
                  <UploadCloud className="h-4 w-4" /> Upload Your Design (PNG, JPG)
                </Label>
                <Input
                  id="designFile"
                  type="file"
                  accept="image/png, image/jpeg"
                  onChange={handleFileChange}
                />
              </div>

              {previewUrl && (
                <div className="border rounded-md p-2 bg-secondary/30">
                    <p className="text-sm font-medium text-muted-foreground mb-2">Design Preview:</p>
                    <Image src={previewUrl} alt="Design preview" width={200} height={200} className="rounded-md mx-auto" />
                </div>
              )}

              <div>
                <Label htmlFor="prompt" className="flex items-center gap-2 mb-1">
                  <Wand2 className="h-4 w-4" /> Describe the Scene
                </Label>
                <Textarea
                  id="prompt"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="e.g., A sign on a modern glass-front building"
                  rows={3}
                />
                 <p className="text-xs text-muted-foreground mt-1">Example: A logo on a coffee cup on a wooden table.</p>
              </div>

              <Button onClick={handleGenerateMockup} disabled={isLoading || !designFile} size="lg" className="w-full">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Wand2 className="mr-2 h-5 w-5" /> Generate Mockup
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-lg sticky top-28">
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-primary">2. Your Generated Mockup</CardTitle>
            </CardHeader>
            <CardContent className="min-h-[300px] flex items-center justify-center bg-secondary/30 rounded-b-lg">
              {isLoading ? (
                 <div className="text-center text-muted-foreground">
                    <Loader2 className="h-12 w-12 mx-auto animate-spin mb-4" />
                    <p>Generating your mockup... This may take a moment.</p>
                </div>
              ) : generatedMockup ? (
                <Image
                  src={generatedMockup}
                  alt="Generated AI mockup"
                  width={500}
                  height={500}
                  className="rounded-lg object-contain"
                />
              ) : (
                <div className="text-center text-muted-foreground">
                  <ImageIcon className="h-12 w-12 mx-auto mb-4" />
                  <p>Your generated mockup will appear here.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
