
'use client';

import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import {
  Upload,
  RectangleHorizontal,
  Circle,
  Type,
  RotateCcw,
  Grid3x3,
  Calculator,
  MousePointer,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const materialCategories = [
  {
    title: 'Cool Metals',
    items: [
      { name: 'Nickle', price: '0.15 KWD/cm²', imageUrl: 'https://placehold.co/100x100.png', imageHint: 'nickle metal' },
      { name: 'Silver', price: '0.18 KWD/cm²', imageUrl: 'https://placehold.co/100x100.png', imageHint: 'silver metal' },
      { name: 'Stainless Steel', price: '0.14 KWD/cm²', imageUrl: 'https://placehold.co/100x100.png', imageHint: 'stainless steel' },
      { name: 'Chrome', price: '0.16 KWD/cm²', imageUrl: 'https://placehold.co/100x100.png', imageHint: 'chrome metal' },
      { name: 'Aluminum', price: '0.12 KWD/cm²', imageUrl: 'https://placehold.co/100x100.png', imageHint: 'aluminum metal' },
    ]
  },
  {
    title: 'Warm Metals',
    items: [
      { name: 'Gold', price: '0.25 KWD/cm²', imageUrl: 'https://placehold.co/100x100.png', imageHint: 'gold metal' },
      { name: 'Brass', price: '0.17 KWD/cm²', imageUrl: 'https://placehold.co/100x100.png', imageHint: 'brass metal' },
      { name: 'Antique Brass', price: '0.19 KWD/cm²', imageUrl: 'https://placehold.co/100x100.png', imageHint: 'antique brass' },
      { name: 'Copper', price: '0.20 KWD/cm²', imageUrl: 'https://placehold.co/100x100.png', imageHint: 'copper metal' },
    ]
  },
  {
    title: 'Dark Metals',
    items: [
      { name: 'Cast Iron', price: '0.10 KWD/cm²', imageUrl: 'https://placehold.co/100x100.png', imageHint: 'cast iron' },
      { name: 'Flat Black', price: '0.11 KWD/cm²', imageUrl: 'https://placehold.co/100x100.png', imageHint: 'flat black metal' },
      { name: 'Matte Black', price: '0.11 KWD/cm²', imageUrl: 'https://placehold.co/100x100.png', imageHint: 'matte black metal' },
    ]
  }
];

const tools = [
  { id: 'select', name: 'Select', icon: MousePointer },
  { id: 'rectangle', name: 'Rectangle', icon: RectangleHorizontal },
  { id: 'circle', name: 'Circle', icon: Circle },
  { id: 'text', name: 'Text', icon: Type },
];

export default function OnlineDesignToolPage() {
  const [selectedTool, setSelectedTool] = useState('select');
  const [selectedMaterial, setSelectedMaterial] = useState('Nickle');
  const [canvasWidth, setCanvasWidth] = useState(200);
  const [canvasHeight, setCanvasHeight] = useState(200);

  const getSelectedMaterialPrice = () => {
    for (const category of materialCategories) {
      const material = category.items.find(item => item.name === selectedMaterial);
      if (material) {
        return material.price;
      }
    }
    return 'N/A';
  };

  return (
    <div className="flex flex-col min-h-screen bg-secondary/30 text-foreground">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_280px] gap-6 h-full">

          {/* Left Sidebar */}
          <aside className="space-y-6">
            <Card className="bg-background/80">
              <CardHeader>
                <CardTitle className="text-lg">Tools</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-2">
                {tools.map((tool) => (
                  <Button
                    key={tool.id}
                    variant={selectedTool === tool.id ? 'default' : 'outline'}
                    className="flex flex-col h-16"
                    onClick={() => setSelectedTool(tool.id)}
                  >
                    <tool.icon className="h-6 w-6 mb-1" />
                    <span>{tool.name}</span>
                  </Button>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-background/80">
              <CardHeader>
                <CardTitle className="text-lg">Materials</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {materialCategories.map((category) => (
                  <div key={category.title}>
                    <h3 className="font-semibold text-muted-foreground mb-2">{category.title}</h3>
                    <div className="grid grid-cols-4 gap-2">
                      {category.items.map((material) => (
                        <button
                          key={material.name}
                          className={cn(
                            'w-full text-center p-1 border rounded-lg flex flex-col items-center gap-1 transition-colors',
                            selectedMaterial === material.name
                              ? 'border-primary ring-2 ring-primary/50 bg-primary/10'
                              : 'border-border hover:bg-accent'
                          )}
                          onClick={() => setSelectedMaterial(material.name)}
                          title={`${material.name} - ${material.price}`}
                        >
                          <Image 
                            src={material.imageUrl} 
                            alt={material.name} 
                            width={40} 
                            height={40} 
                            className="rounded-md"
                            data-ai-hint={material.imageHint}
                          />
                           <p className="text-xs font-medium text-foreground truncate">{material.name}</p>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
            
            <Card className="bg-background/80">
                <CardHeader>
                    <CardTitle className="text-lg">Canvas Size (mm)</CardTitle>
                </CardHeader>
                <CardContent className="flex items-center gap-2">
                    <Input 
                        type="number" 
                        value={canvasWidth} 
                        onChange={(e) => setCanvasWidth(Number(e.target.value))}
                        aria-label="Canvas Width"
                    />
                     <span className="text-muted-foreground">x</span>
                    <Input 
                        type="number" 
                        value={canvasHeight} 
                        onChange={(e) => setCanvasHeight(Number(e.target.value))}
                        aria-label="Canvas Height"
                    />
                </CardContent>
            </Card>

          </aside>

          {/* Center Canvas */}
          <div className="flex flex-col">
            <Card className="flex-grow flex flex-col bg-background/80">
              <CardHeader className="flex-row items-center justify-between border-b">
                <div className="flex items-center gap-4">
                  <CardTitle className="text-lg">Design Canvas</CardTitle>
                  <div className="px-3 py-1 bg-secondary rounded-md text-sm font-medium">
                    {canvasWidth} x {canvasHeight} mm
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm"><RotateCcw className="h-4 w-4 mr-1" /> Reset</Button>
                  <Button variant="ghost" size="sm"><Grid3x3 className="h-4 w-4 mr-1" /> Grid</Button>
                </div>
              </CardHeader>
              <CardContent className="flex-grow p-4 relative">
                 <div className="h-full w-full border-2 border-dashed border-border rounded-lg flex items-center justify-center bg-background">
                   <div className="text-center text-muted-foreground">
                      <Upload className="h-12 w-12 mx-auto mb-2" />
                      <p className="font-semibold">Design Area</p>
                      <p className="text-sm">Click tools to start designing</p>
                   </div>
                 </div>
                 <div className="absolute bottom-6 right-6 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-md text-sm font-medium border">
                    {selectedMaterial}
                 </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Sidebar */}
          <aside className="space-y-6">
            <Card className="bg-background/80">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2"><Calculator className="h-5 w-5 text-primary" /> Live Quote</CardTitle>
                <CardDescription>Real-time pricing based on your design</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Material:</span>
                  <span className="font-medium">{selectedMaterial}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Area:</span>
                  <span className="font-medium">4.00 cm²</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Material Cost:</span>
                  <span className="font-medium">0.200 KWD</span>
                </div>
                 <div className="flex justify-between">
                  <span className="text-muted-foreground">Cutting Cost:</span>
                  <span className="font-medium">0.500 KWD</span>
                </div>
                 <div className="flex justify-between">
                  <span className="text-muted-foreground">Setup Cost:</span>
                  <span className="font-medium">2.000 KWD</span>
                </div>
                <Separator />
                <div className="flex justify-between font-bold text-lg items-center">
                  <span>Total:</span>
                  <span className="text-primary">2.700 KWD</span>
                </div>
              </CardContent>
              <CardContent className="space-y-2">
                 <Button className="w-full" size="lg">Add to Cart</Button>
                 <Button variant="outline" className="w-full">Request Custom Quote</Button>
                 <p className="text-xs text-muted-foreground pt-2">
                    * Prices include cutting and basic finishing<br/>
                    * Delivery: 2-3 business days in Kuwait
                 </p>
              </CardContent>
            </Card>

            <Card className="bg-background/80">
               <CardHeader>
                <CardTitle className="text-lg">Production Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                 <div className="flex justify-between">
                  <span className="text-muted-foreground">Estimated Production:</span>
                  <span className="font-medium">1-2 days</span>
                </div>
                 <div className="flex justify-between">
                  <span className="text-muted-foreground">Cutting Precision:</span>
                  <span className="font-medium">±0.1mm</span>
                </div>
                 <div className="flex justify-between">
                  <span className="text-muted-foreground">Min Order:</span>
                  <span className="font-medium">1 piece</span>
                </div>
              </CardContent>
            </Card>
          </aside>

        </div>
      </main>
      <Footer />
    </div>
  );
}
