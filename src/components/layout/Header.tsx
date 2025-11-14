
'use client';

import Link from 'next/link';
import { InventexLogo } from '@/components/icons/InventexLogo';
import { TooltipProvider } from "@/components/ui/tooltip";
import { NavLinks } from './header/Navlinks';
import { CtaButtons } from './header/CtaButtons';

export function Header() {
  return (
    <header className="bg-card border-b border-border shadow-sm sticky top-0 z-50">
      <TooltipProvider delayDuration={100}>
        <div className="container mx-auto px-4 py-2">
          {/* Top Row */}
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 group shrink-0">
              <InventexLogo className="h-10 w-auto text-primary group-hover:opacity-80 transition-opacity" />
              <span className="font-headline text-2xl font-bold text-primary hidden sm:block whitespace-nowrap">
                مصنع انفنتكس
              </span>
            </Link>
            <CtaButtons />
          </div>
          
          {/* Bottom Row - Main Navigation */}
          <NavLinks />
        </div>
      </TooltipProvider>
    </header>
  );
}
