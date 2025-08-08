import React from 'react';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (
    <div className="admin-layout">
      <header className="admin-header">
        <h1>Admin Dashboard</h1>
        {/* Add navigation or other header elements here */}
      </header>
      <main className="admin-content">
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;