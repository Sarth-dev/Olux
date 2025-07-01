import dynamic from 'next/dynamic';

// Dynamically load client component with no SSR
const CheckoutForm = dynamic(() => import('./checkoutForm'), { ssr: false });

export default function CheckoutPage() {
  return <CheckoutForm />;
}
