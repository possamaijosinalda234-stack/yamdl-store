import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js';
import { useCart } from '@/hooks/use-cart';
import { useState } from 'react';
import { Loader2 } from 'lucide-react';

interface PayPalButtonProps {
  onSuccess: (details: unknown) => void;
  onError: (error: Error) => void;
}

export function PayPalButton({ onSuccess, onError }: PayPalButtonProps) {
  const { cart } = useCart();
  const [{ isPending }] = usePayPalScriptReducer();
  const [isProcessing, setIsProcessing] = useState(false);

  if (isPending) {
    return (
      <div className="flex items-center justify-center py-8 bg-muted rounded-lg">
        <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
        <span className="ml-2 text-muted-foreground">Loading PayPal...</span>
      </div>
    );
  }

  return (
    <div className="relative">
      {isProcessing && (
        <div className="absolute inset-0 bg-background/50 flex items-center justify-center z-10 rounded-lg">
          <Loader2 className="w-6 h-6 animate-spin" />
        </div>
      )}
      <PayPalButtons
        createOrder={(_data, actions) => {
          setIsProcessing(true);
          const total = cart.total * 1.08;
          return actions.order.create({
            intent: 'CAPTURE',
            purchase_units: [
              {
                amount: {
                  currency_code: 'USD',
                  value: total.toFixed(2),
                },
              },
            ],
          });
        }}
        onApprove={async (_data, actions) => {
          try {
            const details = await actions.order?.capture();
            setIsProcessing(false);
            onSuccess(details);
          } catch (error) {
            setIsProcessing(false);
            onError(error as Error);
          }
        }}
        onCancel={() => {
          setIsProcessing(false);
        }}
        onError={(err) => {
          setIsProcessing(false);
          const errorMessage = typeof err === 'object' && err !== null && 'message' in err 
            ? String(err.message) 
            : 'Payment failed';
          onError(new Error(errorMessage));
        }}
        style={{
          layout: 'vertical',
          color: 'blue',
          shape: 'rect',
          label: 'paypal',
        }}
      />
    </div>
  );
}
