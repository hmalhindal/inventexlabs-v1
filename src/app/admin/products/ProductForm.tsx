
'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface ProductFormProps {
  initialData?: {
    name: string;
    price: number;
  };
  onSubmit: (productData: { name: string; price: number }) => void;
}

const ProductForm: React.FC<ProductFormProps> = ({ initialData, onSubmit }) => {
  const [name, setName] = useState(initialData?.name || '');
  const [price, setPrice] = useState(initialData?.price?.toString() || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() === '' || price.trim() === '') {
      // Basic validation, can be improved with a form library
      return;
    }
    const priceNumber = parseFloat(price);
    if (isNaN(priceNumber)) {
      return;
    }

    onSubmit({ name, price: priceNumber });

    if (!initialData) {
      setName('');
      setPrice('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 py-4">
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="productName" className="text-right">
          Name
        </Label>
        <Input
          id="productName"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="col-span-3"
          placeholder="e.g. Aluminum Sheet"
        />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="productPrice" className="text-right">
          Price
        </Label>
        <Input
          id="productPrice"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="col-span-3"
          placeholder="e.g. 45.50"
          step="0.01"
        />
      </div>
       <Button type="submit" className="mt-4">
          {initialData ? 'Update Product' : 'Save Product'}
        </Button>
    </form>
  );
};

export default ProductForm;
