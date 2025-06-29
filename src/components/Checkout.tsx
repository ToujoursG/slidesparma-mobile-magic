
import React, { useState } from 'react';
import { ArrowLeft, Home, Heart, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CartItem } from '../pages/Index';

interface CheckoutProps {
  items: CartItem[];
  totalPrice: number;
  onBack: () => void;
  onPayment: () => void;
}

const Checkout = ({ items, totalPrice, onBack, onPayment }: CheckoutProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const deliveryFee = 2.49;
  const finalTotal = totalPrice + deliveryFee;

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handlePayment = () => {
    if (formData.name && formData.email) {
      onPayment();
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <div className="flex items-center p-4 bg-slate-800">
        <button onClick={onBack} className="p-2">
          <ArrowLeft className="w-6 h-6 text-red-500" />
        </button>
        <h1 className="text-xl font-bold ml-4">Checkout</h1>
      </div>

      {/* Responsive Layout */}
      <div className="flex flex-col lg:flex-row lg:max-w-6xl lg:mx-auto">
        {/* Order Summary - Mobile */}
        <div className="lg:hidden bg-slate-800 m-4 rounded-lg p-4">
          <h2 className="font-bold text-lg mb-3">Seu Pedido</h2>
          <div className="space-y-2 text-sm">
            {items.map((item) => (
              <div key={item.id} className="flex justify-between">
                <span>{item.name} x{item.quantity}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <div className="border-t border-slate-600 pt-2 mt-2">
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span className="text-red-500">${finalTotal.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4 lg:p-8">
          {/* Delivery Info */}
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-4">Informações de Entrega</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Nome Completo</label>
                <Input
                  type="text"
                  placeholder="Seu nome completo"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="bg-slate-800 border-slate-600 text-white"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="bg-slate-800 border-slate-600 text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Telefone</label>
                <Input
                  type="tel"
                  placeholder="(11) 99999-9999"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="bg-slate-800 border-slate-600 text-white"
                />
              </div>
            </div>
          </div>

          {/* Payment Button */}
          <Button
            onClick={handlePayment}
            disabled={!formData.name || !formData.email}
            className="w-full bg-red-500 hover:bg-red-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white py-3 text-lg font-medium rounded-lg"
          >
            FAZER PAGAMENTO ${finalTotal.toFixed(2)}
          </Button>
        </div>

        {/* Order Summary - Desktop */}
        <div className="hidden lg:block lg:w-80 bg-slate-800 m-8 rounded-lg h-fit">
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Resumo do Pedido</h2>
            
            <div className="space-y-3 mb-6">
              {items.map((item) => (
                <div key={item.id} className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-lg overflow-hidden">
                    <img
                      src={`https://images.unsplash.com/${item.image}?w=400`}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-sm">{item.name}</p>
                    <p className="text-gray-400 text-xs">Qtd: {item.quantity}</p>
                  </div>
                  <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              
              <div className="border-t border-slate-600 pt-3 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Taxa de entrega</span>
                  <span>${deliveryFee.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span className="text-red-500">${finalTotal.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-slate-800 border-t border-slate-700 px-4 py-2 lg:hidden">
        <div className="flex justify-around items-center max-w-md mx-auto">
          <button className="flex flex-col items-center p-2">
            <Home className="w-6 h-6 text-gray-400" />
          </button>
          <button className="flex flex-col items-center p-2">
            <Heart className="w-6 h-6 text-gray-400" />
          </button>
          <button className="flex flex-col items-center p-2">
            <ShoppingCart className="w-6 h-6 text-red-500" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
