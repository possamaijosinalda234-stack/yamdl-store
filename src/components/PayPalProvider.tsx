import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import type { ReactNode } from 'react';

// PayPal Live Client ID
const PAYPAL_CLIENT_ID = 'BAAIW9Vpvt_AIvhLZee-YGWTnoEQ03GbOtsGfBorb6IX4ngtWmhXV8a3f28F7cBptFcxcVEiJBYtRnSgtU';

interface PayPalProviderProps {
  children: ReactNode;
}

export function PayPalProvider({ children }: PayPalProviderProps) {
  return (
    <PayPalScriptProvider
      options={{
        clientId: PAYPAL_CLIENT_ID,
        currency: 'USD',
        intent: 'capture',
        components: 'buttons',
      }}
    >
      {children}
    </PayPalScriptProvider>
  );
}
