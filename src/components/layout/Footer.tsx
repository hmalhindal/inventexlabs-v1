export function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-6 text-center text-muted-foreground text-sm">
        <p>&copy; {new Date().getFullYear()} Inventex Labs. All rights reserved.</p>
        <p className="mt-1">Powered by Precision Engineering & AI</p>
      </div>
    </footer>
  );
}
