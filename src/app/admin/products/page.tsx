import React from 'react';
import ProductTable from './ProductTable';

const AdminProductsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Product Management</h1>
      <ProductTable />
    </div>
  );
};

export default AdminProductsPage;
