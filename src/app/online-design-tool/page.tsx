
'use client';

import { useState, type ChangeEvent } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import type { Metadata } from 'next';
import { UploadCloud, Edit3 } from 'lucide-react';

// Static metadata for this page, can be uncommented if moved to a layout or if this becomes a server component.
// export const metadata: Metadata = {
//   title: 'Online Design Tool - Inventex Labs',
//   description: 'Upload and view your SVG designs with the Inventex Labs Online Design Tool.',
// };

export default function OnlineDesignToolPage() {
  const [svgString, setSvgString] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.type !== 'image/svg+xml') {
        setError('Invalid file type. Please upload an SVG file.');
        setSvgString(null);
        setFileName(null);
        return;
      }
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        setError('File is too large. Maximum size is 5MB.');
        setSvgString(null);
        setFileName(null);
        return;
      }
      setError(null);
      setFileName(file.name);
      const reader = new FileReader();
      reader.onload = (e) => {
        setSvgString(e.target?.result as string);
      };
      reader.onerror = () => {
        setError('Failed to read the file.');
        setSvgString(null);
        setFileName(null);
      };
      reader.readAsText(file);
    } else {
      setSvgString(null);
      setFileName(null);
      setError(null);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <Card className="w-full max-w-4xl mx-auto shadow-lg">
          <CardHeader className="text-center">
            <Edit3 className="h-12 w-12 text-primary mx-auto mb-3" />
            <CardTitle className="font-headline text-4xl text-primary mb-2">Online Design Tool</CardTitle>
            <CardDescription className="text-xl text-muted-foreground">
              Upload and view your SVG designs. Basic editing features coming soon!
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="svg-upload" className="text-lg font-medium">Upload SVG File</Label>
              <Input
                id="svg-upload"
                type="file"
                accept=".svg,image/svg+xml"
                onChange={handleFileChange}
                className="file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
              />
              {fileName && <p className="text-sm text-muted-foreground mt-1">Loaded: {fileName}</p>}
              {error && <p className="text-sm text-destructive mt-1">{error}</p>}
            </div>

            {svgString && (
              <div className="mt-6">
                <h3 className="text-2xl font-semibold mb-3 text-primary">Preview</h3>
                <div
                  className="border-2 border-dashed border-border rounded-lg p-4 bg-secondary/20 min-h-[300px] max-h-[600px] overflow-auto flex items-center justify-center"
                >
                  <div dangerouslySetInnerHTML={{ __html: svgString }} />
                </div>
              </div>
            )}

            {!svgString && !error && (
                <div className="mt-6 border-2 border-dashed border-border rounded-lg p-8 min-h-[300px] flex flex-col items-center justify-center text-center bg-secondary/20">
                    <UploadCloud className="h-16 w-16 text-muted-foreground mb-4" />
                    <p className="text-lg text-muted-foreground">Upload an SVG file to see a preview here.</p>
                    <p className="text-sm text-muted-foreground mt-2">Max file size: 5MB.</p>
                </div>
            )}
             {error && !svgString && (
                <div className="mt-6 border-2 border-dashed border-destructive/50 rounded-lg p-8 min-h-[300px] flex flex-col items-center justify-center text-center bg-destructive/10">
                    <UploadCloud className="h-16 w-16 text-destructive mb-4" />
                    <p className="text-lg text-destructive">{error}</p>
                    <p className="text-sm text-destructive/80 mt-2">Please try uploading a valid SVG file (max 5MB).</p>
                </div>
            )}
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
