import React, { useState } from 'react';

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
    // Basic validation (can be expanded)
    if (name.trim() === '' || price.trim() === '') {
      alert('Please fill in all fields');
      return;
    }
    const priceNumber = parseFloat(price);
    if (isNaN(priceNumber)) {
      alert('Price must be a valid number');
      return;
    }

    onSubmit({ name, price: priceNumber });
    // Optionally clear the form after submission if adding
    if (!initialData) {
      setName('');
      setPrice('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="productName" className="block text-sm font-medium text-gray-700">
          Product Name
        </label>
        <input
          type="text"
          id="productName"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="productPrice" className="block text-sm font-medium text-gray-700">
          Price
        </label>
        <input
          type="number"
          id="productPrice"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          step="0.01"
        />
      </div>
      <button
        type="submit"
        className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        {initialData ? 'Update Product' : 'Add Product'}
      </button>
    </form>
  );
};

export default ProductForm;