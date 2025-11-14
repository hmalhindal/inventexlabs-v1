'use client';

import type { EstimateQuotationOutput } from '@/ai/flows/estimate-quotation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormDescription as ShadcnFormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { UploadCloud, Zap, Settings, Package, ChevronsRight, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { getQuoteAction } from '@/app/actions';
import { MATERIALS, SERVICE_TYPES, type ServiceTypeName, type MaterialName } from '@/lib/constants';

const formSchema = z.object({
  serviceType: z.custom<ServiceTypeName>(val => SERVICE_TYPES.some(s => s.name === val), {
    message: "Please select a valid service type."
  }),
  cadFile: z.custom<FileList>((val) => val instanceof FileList && val.length > 0, 'CAD file is required')
    .refine(files => files?.[0]?.size <= 10 * 1024 * 1024, `Max file size is 10MB.`)
    .refine(
      files => ['application/dxf', 'image/vnd.dxf', 'application/dwg', 'image/vnd.dwg', 'application/STEP', 'application/step', 'application/x-step', 'application/iges', 'application/igs', 'model/iges'].includes(files?.[0]?.type),
      ".DXF, .DWG, .STEP, .IGES files are accepted." // Looser check, server/AI might be more specific
    ),
  material: z.custom<MaterialName>(val => MATERIALS.some(m => m.name === val), {
    message: "Please select a material."
  }),
  quantity: z.coerce.number().min(1, 'Quantity must be at least 1').max(10000, 'Maximum quantity is 10,000'),
});

type QuoteFormValues = z.infer<typeof formSchema>;

interface QuoteFormProps {
  setQuotation: (data: EstimateQuotationOutput | null) => void;
  setIsLoading: (loading: boolean) => void;
}

/**
 * A form for getting a manufacturing quote.
 * It allows users to select a service type, upload a CAD file, choose a material, and specify a quantity.
 * On submission, it calls the `getQuoteAction` server action and updates the parent component's state with the quotation data.
 *
 * @param {QuoteFormProps} props - The component props.
 * @returns {JSX.Element} The rendered QuoteForm component.
 */
export function QuoteForm({ setQuotation, setIsLoading }: QuoteFormProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<QuoteFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      serviceType: SERVICE_TYPES[0].name,
      material: MATERIALS[0].name,
      quantity: 1,
    },
  });

  const readFileAsDataURL = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };

  const onSubmit: SubmitHandler<QuoteFormValues> = async (data) => {
    setIsSubmitting(true);
    setIsLoading(true);
    setQuotation(null);

    try {
      const cadFile = data.cadFile[0];
      const cadDataUri = await readFileAsDataURL(cadFile);
      
      const result = await getQuoteAction({
        serviceType: data.serviceType,
        cadDataUri,
        material: data.material,
        quantity: data.quantity,
      });

      if (result.error) {
        toast({ variant: 'destructive', title: 'Error', description: result.error });
        setQuotation(null);
      } else if (result.data) {
        setQuotation(result.data);
        toast({ title: 'Success!', description: 'Your quotation has been generated.' });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast({ variant: 'destructive', title: 'Error', description: 'An unexpected error occurred. Please try again.' });
      setQuotation(null);
    } finally {
      setIsSubmitting(false);
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full shadow-lg">
      <CardHeader>
        <CardTitle className="font-headline text-2xl text-primary">Configure Your Part</CardTitle>
        <CardDescription>Select your service, upload your design, and choose materials to get an instant quote.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="serviceType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Service Type</FormLabel>
                  <FormControl>
                    <Tabs
                      value={field.value}
                      onValueChange={(value) => field.onChange(value as ServiceTypeName)}
                      className="w-full"
                    >
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value={SERVICE_TYPES[0].name} className="gap-2">
                          <Zap className="h-4 w-4" /> {SERVICE_TYPES[0].name}
                        </TabsTrigger>
                        <TabsTrigger value={SERVICE_TYPES[1].name} className="gap-2">
                          <Settings className="h-4 w-4" /> {SERVICE_TYPES[1].name}
                        </TabsTrigger>
                      </TabsList>
                    </Tabs>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="cadFile"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Upload CAD Design</FormLabel>
                  <FormControl>
                    <div className="relative flex items-center">
                       <UploadCloud className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none" />
                       <Input 
                        type="file" 
                        accept=".dxf,.dwg,.step,.iges"
                        onChange={(e) => field.onChange(e.target.files)}
                        className="pl-10 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
                       />
                    </div>
                  </FormControl>
                  <ShadcnFormDescription>Supported formats: DXF, DWG, STEP, IGES. Max 10MB.</ShadcnFormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="material"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-1"><Package className="h-4 w-4" /> Material</FormLabel>
                    <Select onValueChange={(value) => field.onChange(value as MaterialName)} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a material" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {MATERIALS.map((material) => (
                          <SelectItem key={material.id} value={material.name}>
                            {material.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="quantity"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Quantity</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="e.g., 10" {...field} min="1" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <Button type="submit" disabled={isSubmitting} className="w-full font-semibold text-lg py-6">
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Generating Quote...
                </>
              ) : (
                <>
                  Get Instant Quote <ChevronsRight className="ml-2 h-5 w-5" />
                </>
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
