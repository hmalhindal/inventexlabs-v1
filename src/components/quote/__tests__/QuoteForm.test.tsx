
import { render, screen } from '@testing-library/react';
import { QuoteForm } from '../QuoteForm';
import { SERVICE_TYPES, MATERIALS } from '@/lib/constants';

// Mock matchMedia
window.matchMedia = jest.fn().mockImplementation(query => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: jest.fn(),
  removeListener: jest.fn(),
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  dispatchEvent: jest.fn(),
}));

// Mock useToast
jest.mock('@/hooks/use-toast', () => ({
  useToast: () => ({
    toast: jest.fn(),
  }),
}));

// Mock lucide-react
jest.mock('lucide-react', () => ({
  UploadCloud: () => <div>UploadCloud Icon</div>,
  Zap: () => <div>Zap Icon</div>,
  Settings: () => <div>Settings Icon</div>,
  Package: () => <div>Package Icon</div>,
  ChevronsRight: () => <div>ChevronsRight Icon</div>,
  Loader2: () => <div>Loader2 Icon</div>,
}));

// Mock zodResolver
jest.mock('@hookform/resolvers/zod', () => ({
  zodResolver: () => (values: any) => ({
    values,
    errors: {},
  }),
}));

// Mock child components
jest.mock('@/components/ui/button', () => ({
  Button: ({ children }: { children: React.ReactNode }) => <button>{children}</button>,
}));
jest.mock('@/components/ui/card', () => ({
  Card: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  CardContent: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  CardDescription: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  CardHeader: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  CardTitle: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));
jest.mock('@/components/ui/form', () => ({
  Form: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  FormControl: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  FormDescription: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  FormField: ({ render }: { render: any }) => render({ field: {} }),
  FormItem: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  FormLabel: ({ children }: { children: React.ReactNode }) => <label>{children}</label>,
  FormMessage: () => null,
}));
jest.mock('@/components/ui/input', () => ({
  Input: (props: any) => <input {...props} />,
}));
jest.mock('@/components/ui/select', () => ({
  Select: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  SelectContent: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  SelectItem: ({ children, value }: { children: React.ReactNode; value: string }) => <option value={value}>{children}</option>,
  SelectTrigger: ({ children }: { children: React.ReactNode }) => <button>{children}</button>,
  SelectValue: () => <span>Select a value</span>,
}));
jest.mock('@/components/ui/tabs', () => ({
  Tabs: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  TabsList: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  TabsTrigger: ({ children, value }: { children: React.ReactNode; value: string }) => <button value={value}>{children}</button>,
}));


describe('QuoteForm', () => {
  it('renders all form fields correctly', () => {
    const setQuotation = jest.fn();
    const setIsLoading = jest.fn();
    render(<QuoteForm setQuotation={setQuotation} setIsLoading={setIsLoading} />);

    expect(screen.getByText('Service Type')).toBeInTheDocument();
    expect(screen.getByText('Upload CAD Design')).toBeInTheDocument();
    expect(screen.getByText('Material')).toBeInTheDocument();
    expect(screen.getByText('Quantity')).toBeInTheDocument();
    expect(screen.getByText('The number of parts to manufacture.')).toBeInTheDocument();
  });
});
