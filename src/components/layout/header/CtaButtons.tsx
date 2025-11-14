
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  PenTool,    // Online Design Tool
  ShoppingCart, // Online Store
  User, // My Account
  Wand2, // AI Mockup Generator
  Calculator, // Get a Quote
} from 'lucide-react';

const ctaButtons = [
  { id: 'design-tool', href: '/online-design-tool', label: 'Online Design Tool', icon: PenTool, variant: 'ghost' as const, isIconOnly: true },
  { id: 'mockup-generator', href: '/mockup-generator', label: 'AI Mockup Generator', icon: Wand2, variant: 'ghost' as const, isIconOnly: true },
  { id: 'store', href: '/store', label: 'Online Store', icon: ShoppingCart, variant: 'ghost' as const, isIconOnly: true },
  { id: 'account', href: '/my-account', label: 'My Account', icon: User, variant: 'ghost' as const, isIconOnly: true },
  { id: 'get-a-quote', href: '/get-a-quote', label: 'Get a Quote', icon: Calculator, variant: 'default' as const },
];

export function CtaButtons() {
  return (
    <div className="flex items-center gap-1 md:gap-2">
      {ctaButtons.map((button) => {
         const ButtonComponent = (
          <Button asChild variant={button.variant} size={button.isIconOnly ? 'icon' : 'sm'} className={!button.isIconOnly ? "px-2 md:px-3" : ""}>
            <Link href={button.href} aria-label={button.label}>
              <button.icon className="h-5 w-5" />
              {!button.isIconOnly && <span className="hidden md:inline">{button.label}</span>}
            </Link>
          </Button>
        );

        if(button.isIconOnly || !button.label) {
            return (
                <Tooltip key={button.id}>
                    <TooltipTrigger asChild>
                        {ButtonComponent}
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                        <p>{button.label}</p>
                    </TooltipContent>
                </Tooltip>
            )
        }
        return <div key={button.id}>{ButtonComponent}</div>
      })}
    </div>
  );
}
