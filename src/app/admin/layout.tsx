
import React from 'react';

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <html>
      <body>
        <div className="admin-layout">
          <header className="admin-header p-4 bg-card text-card-foreground border-b">
            <h1 className="text-xl font-bold">Admin Dashboard</h1>
          </header>
          <main className="admin-content p-4">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
};
