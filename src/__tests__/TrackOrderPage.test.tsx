import { render, screen } from '@testing-library/react';
import TrackOrderPage from '@/app/track-order/[orderId]/page';

jest.mock('lucide-react', () => ({
  FileText: () => <div>FileText</div>,
  AlertTriangle: () => <div>AlertTriangle</div>,
  Cog: () => <div>Cog</div>,
  Zap: () => <div>Zap</div>,
  Truck: () => <div>Truck</div>,
  CheckCircle: () => <div>CheckCircle</div>,
  PackageSearch: () => <div>PackageSearch</div>,
}));

jest.mock('@/components/layout/Header', () => ({
  Header: () => <div>Header</div>,
}));

jest.mock('@/components/layout/Footer', () => ({
  Footer: () => <div>Footer</div>,
}));

describe('TrackOrderPage', () => {
  it('should render the order not found message for an invalid order ID', () => {
    render(<TrackOrderPage params={{ orderId: 'invalid-order-id' }} />);

    expect(screen.getByText('Order Not Found')).toBeInTheDocument();
    expect(screen.getByText(/We couldn't find an order with the ID:/)).toBeInTheDocument();
    expect(screen.getByText('invalid-order-id')).toBeInTheDocument();
  });

  it('should render the order status for a valid order ID', () => {
    render(<TrackOrderPage params={{ orderId: '12345' }} />);

    expect(screen.getByText('Track Your Order')).toBeInTheDocument();
    expect(screen.getByText(/Status for order:/)).toBeInTheDocument();
    expect(screen.getByText('12345')).toBeInTheDocument();
  });
});
