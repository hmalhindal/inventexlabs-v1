'use client';

import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
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
      // corrected "Nickle" -> "Nickel"
      { name: 'Nickel', price: '0.15 KWD/cm²', imageUrl: 'https://placehold.co/100x100.png', imageHint: 'nickel metal' },
      // ...other items...
    ],
  },
  // ...other categories...
];

// rest of file unchanged
export default function OnlineDesignToolPage() {
  const [selectedTool, setSelectedTool] = useState('select');
  const [selectedMaterial, setSelectedMaterial] = useState('Nickle');
  const [canvasWidth, setCanvasWidth] = useState(200);
  const [canvasHeight, setCanvasHeight] = useState(200);

  return (
    <>
      <Header />
      <main className="container mx-auto py-12">
        <Card className="p-6">
          <CardHeader>
            <CardTitle>Online Design Tool</CardTitle>
            <CardDescription>Design and price materials</CardDescription>
          </CardHeader>
          <CardContent>
            {/* UI that uses materialCategories */}
          </CardContent>
        </Card>
      </main>
      <Footer />
    </>
  );
}