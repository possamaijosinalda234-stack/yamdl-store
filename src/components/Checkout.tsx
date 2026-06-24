import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { CheckCircle, Truck, Shield, ArrowLeft, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { useCart } from '@/hooks/use-cart';
import { PayPalProvider } from './PayPalProvider';
import { PayPalButton } from './PayPalButton';

export function Checkout() {
  const { cart, clearCart } = useCart();
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    countryCode: '+1',
    address: '',
    city: '',
    postalCode: '',
    country: 'US',
  });

  const countryCodes = [
    { code: '+1', country: 'US/CA', flag: '🇺🇸' },
    { code: '+44', country: 'UK', flag: '🇬🇧' },
    { code: '+61', country: 'AU', flag: '🇦🇺' },
    { code: '+65', country: 'SG', flag: '🇸🇬' },
    { code: '+86', country: 'CN', flag: '🇨🇳' },
    { code: '+81', country: 'JP', flag: '🇯🇵' },
    { code: '+82', country: 'KR', flag: '🇰🇷' },
    { code: '+49', country: 'DE', flag: '🇩🇪' },
    { code: '+33', country: 'FR', flag: '🇫🇷' },
    { code: '+39', country: 'IT', flag: '🇮🇹' },
    { code: '+34', country: 'ES', flag: '🇪🇸' },
    { code: '+31', country: 'NL', flag: '🇳🇱' },
    { code: '+91', country: 'IN', flag: '🇮🇳' },
    { code: '+7', country: 'RU', flag: '🇷🇺' },
    { code: '+55', country: 'BR', flag: '🇧🇷' },
    { code: '+52', country: 'MX', flag: '🇲🇽' },
    { code: '+971', country: 'AE', flag: '🇦🇪' },
    { code: '+852', country: 'HK', flag: '🇭🇰' },
    { code: '+886', country: 'TW', flag: '🇹🇼' },
    { code: '+62', country: 'ID', flag: '🇮🇩' },
    { code: '+60', country: 'MY', flag: '🇲🇾' },
    { code: '+66', country: 'TH', flag: '🇹🇭' },
    { code: '+84', country: 'VN', flag: '🇻🇳' },
    { code: '+63', country: 'PH', flag: '🇵🇭' },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePayPalSuccess = (details: unknown) => {
    console.log('Payment successful:', details);
    setIsSuccess(true);
    clearCart();
  };

  const handlePayPalError = (err: Error) => {
    console.error('PayPal error:', err);
    setError('Payment failed. Please try again.');
  };

  if (isSuccess) {
    return (
      <div className="container mx-auto px-4 py-16 max-w-2xl">
        <div className="text-center space-y-6 animate-fade-in">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-foreground">Payment Successful!</h1>
          <p className="text-muted-foreground">
            Thank you for your purchase. Your order has been confirmed and will be shipped soon.
          </p>
          <div className="bg-card rounded-lg p-6 mt-8">
            <h2 className="font-semibold mb-4">Order Summary</h2>
            <p className="text-muted-foreground">Order Total: ${(cart.total * 1.08).toFixed(2)}</p>
            <p className="text-muted-foreground">Payment Method: PayPal</p>
          </div>
          <Link to="/">
            <Button className="mt-8">
              Continue Shopping
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  if (cart.items.length === 0 && !isSuccess) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
        <p className="text-muted-foreground mb-8">Add some items to proceed with checkout.</p>
        <Link to="/products">
          <Button>Browse Products</Button>
        </Link>
      </div>
    );
  }

  return (
    <PayPalProvider>
      <div className="container mx-auto px-4 py-8">
        <Link to="/cart" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Cart
        </Link>

        <h1 className="text-3xl font-bold mb-8">Checkout</h1>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Shipping & Payment */}
          <div className="space-y-6">
            {/* Shipping Information */}
            <div className="bg-card rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <Truck className="w-5 h-5 text-primary" />
                <h2 className="text-lg font-semibold">Shipping Information</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <div className="flex gap-2">
                    <select
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={(e) => setFormData(prev => ({ ...prev, countryCode: e.target.value }))}
                      className="w-32 px-3 py-2 border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      {countryCodes.map((item) => (
                        <option key={item.code} value={item.code}>
                          {item.flag} {item.code} ({item.country})
                        </option>
                      ))}
                    </select>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Phone number"
                      className="flex-1"
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="address">Address</Label>
                  <Input
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Street address"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="postalCode">Postal Code</Label>
                    <Input
                      id="postalCode"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* PayPal Payment */}
            <div className="bg-card rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                  <path d="M7.5 19.5H4.5L6 7.5H10.5C12.5 7.5 14 8.5 14.5 10.5C15 12.5 14 14.5 12 15H9L8.5 19.5H7.5Z" fill="#003087"/>
                  <path d="M16.5 7.5H13.5L12 19.5H15L16.5 7.5Z" fill="#0070E0"/>
                  <path d="M18 7.5H21L19.5 19.5H16.5L18 7.5Z" fill="#003087"/>
                </svg>
                <h2 className="text-lg font-semibold">Payment</h2>
              </div>
              
              {error && (
                <div className="bg-destructive/10 text-destructive p-3 rounded-lg mb-4 text-sm">
                  {error}
                </div>
              )}

              <div className="bg-[#0070BA]/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-muted-foreground">
                  Secure payment via PayPal. You can pay with your PayPal account or credit card.
                </p>
              </div>

              <PayPalButton
                onSuccess={handlePayPalSuccess}
                onError={handlePayPalError}
              />

              <div className="flex items-center gap-2 mt-4 text-sm text-muted-foreground">
                <Shield className="w-4 h-4" />
                <span>Your payment information is secure</span>
              </div>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div>
            <div className="bg-card rounded-lg p-6 sticky top-24">
              <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
              <div className="space-y-4">
                {cart.items.map((item) => (
                  <div key={item.product.id} className="flex gap-4">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <p className="font-medium text-sm">{item.product.name}</p>
                      <p className="text-muted-foreground text-sm">Qty: {item.quantity}</p>
                    </div>
                    <p className="font-medium">${(item.product.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>
              <Separator className="my-4" />
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${cart.total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tax (8%)</span>
                  <span>${(cart.total * 0.08).toFixed(2)}</span>
                </div>
              </div>
              <Separator className="my-4" />
              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>${(cart.total * 1.08).toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PayPalProvider>
  );
}
