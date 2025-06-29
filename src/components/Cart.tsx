
import React from 'react';
import { ArrowLeft, Plus, Minus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CartItem } from '../pages/Index';

interface CartProps {
  items: CartItem[];
  onBack: () => void;
  onUpdateQuantity: (productId: number, change: number) => void;
  onCheckout: () => void;
  totalPrice: number;
}

const Cart = ({ items, onBack, onUpdateQuantity, onCheckout, totalPrice }: CartProps) => {
  const deliveryFee = 2.49;
  const finalTotal = totalPrice + deliveryFee;

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="flex items-center p-4 bg-slate-800">
          <button onClick={onBack} className="p-2">
            <ArrowLeft className="w-6 h-6 text-red-500" />
          </button>
          <h1 className="text-xl font-bold ml-4">Carrinho</h1>
        </div>
        
        <div className="flex flex-col items-center justify-center h-96">
          <div className="text-6xl mb-4">🛒</div>
          <h2 className="text-2xl font-bold mb-2">Seu carrinho está vazio</h2>
          <p className="text-gray-400 mb-6">Adicione alguns slides incríveis!</p>
          <Button onClick={onBack} className="bg-red-500 hover:bg-red-600">
            Continuar Comprando
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col">
      {/* Header */}
      <div className="flex items-center p-4 bg-slate-800">
        <button onClick={onBack} className="p-2">
          <ArrowLeft className="w-6 h-6 text-red-500" />
        </button>
        <h1 className="text-xl font-bold ml-4">Carrinho</h1>
      </div>

      {/* Responsive Layout */}
      <div className="flex-1 flex flex-col lg:flex-row lg:max-w-6xl lg:mx-auto lg:w-full">
        {/* Cart Items */}
        <div className="flex-1 p-4 lg:p-8">
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.id} className="bg-slate-800 rounded-lg p-4 flex items-center space-x-4">
                <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={`https://images.unsplash.com/${item.image}?w=400`}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-lg truncate">{item.name}</h3>
                  <p className="text-gray-400 text-sm truncate">{item.description}</p>
                  <p className="text-red-500 font-bold">${item.price.toFixed(2)}</p>
                </div>

                <div className="flex items-center space-x-2 flex-shrink-0">
                  <button
                    onClick={() => onUpdateQuantity(item.id, -1)}
                    className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center hover:bg-slate-600"
                  >
                    {item.quantity === 1 ? (
                      <Trash2 className="w-4 h-4 text-red-500" />
                    ) : (
                      <Minus className="w-4 h-4" />
                    )}
                  </button>
                  <span className="text-lg font-semibold w-8 text-center">{item.quantity}</span>
                  <button
                    onClick={() => onUpdateQuantity(item.id, 1)}
                    className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center hover:bg-slate-600"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                <div className="text-right flex-shrink-0">
                  <p className="font-bold text-lg">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:w-80 bg-slate-800 lg:m-8 lg:rounded-lg lg:h-fit">
          <div className="p-4 lg:p-6">
            <h2 className="text-xl font-bold mb-4">Resumo do Pedido</h2>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-400">Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Taxa de entrega</span>
                <span>${deliveryFee.toFixed(2)}</span>
              </div>
              <div className="border-t border-slate-600 pt-3">
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span className="text-red-500">${finalTotal.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <Button
              onClick={onCheckout}
              className="w-full bg-red-500 hover:bg-red-600 text-white py-3 text-lg font-medium rounded-lg"
            >
              FINALIZAR PEDIDO ${finalTotal.toFixed(2)}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
