import React from 'react';
import ProductTable from '@/app/admin/products/ProductTable'; // Assuming ProductTable is in the same directory

const AdminProductsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Product Management</h1>
      {/* Product listing table or components will go here */}
 <ProductTable />
ye    </div>
  );
};

export default AdminProductsPage;