
'use client';

import React, { useState } from 'react';
import ProductTable from './ProductTable';
import ProductForm from './ProductForm';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

const AdminProductsPage: React.FC = () => {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  const handleProductAdd = (productData: { name: string; price: number }) => {
    // In a real app, you would handle adding the product to your data source
    console.log('Adding product:', productData);
    setIsAddDialogOpen(false); // Close the dialog after submission
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Product Management</h1>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>Add New Product</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add New Product</DialogTitle>
              <DialogDescription>
                Fill in the details for the new product. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <ProductForm onSubmit={handleProductAdd} />
          </DialogContent>
        </Dialog>
      </div>
      <ProductTable />
    </div>
  );
};

export default AdminProductsPage;
