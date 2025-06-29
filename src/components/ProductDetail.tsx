
import React, { useState } from 'react';
import { ArrowLeft, Heart, ShoppingCart, Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Product } from '../pages/Index';

interface ProductDetailProps {
  product: Product;
  isFavorite: boolean;
  onBack: () => void;
  onToggleFavorite: () => void;
  onAddToCart: () => void;
  onCartClick: () => void;
  cartItemsCount: number;
}

const ProductDetail = ({
  product,
  isFavorite,
  onBack,
  onToggleFavorite,
  onAddToCart,
  onCartClick,
  cartItemsCount
}: ProductDetailProps) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('Standard');

  const sizes = [
    { name: 'Basic', price: 0 },
    { name: 'Standard', price: 5 },
    { name: 'Premium', price: 15 }
  ];

  const features = [
    'Templates profissionais',
    'Múltiplos formatos',
    'Suporte técnico',
    'Atualizações gratuitas',
    'Uso comercial',
    'Personalização total'
  ];

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      onAddToCart();
    }
  };

  const totalPrice = (product.price + (sizes.find(s => s.name === selectedSize)?.price || 0)) * quantity;

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-slate-800">
        <button onClick={onBack} className="p-2">
          <ArrowLeft className="w-6 h-6 text-red-500" />
        </button>
        <div className="flex items-center space-x-4">
          <button
            onClick={onToggleFavorite}
            className="p-2"
          >
            <Heart
              className={`w-6 h-6 ${
                isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'
              }`}
            />
          </button>
          <button 
            onClick={onCartClick}
            className="p-2 relative"
          >
            <ShoppingCart className="w-6 h-6 text-gray-400" />
            {cartItemsCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartItemsCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Responsive Layout */}
      <div className="flex flex-col lg:flex-row lg:max-w-6xl lg:mx-auto">
        {/* Product Image */}
        <div className="lg:w-1/2">
          <div className="relative h-64 md:h-80 lg:h-96">
            <img
              src={`https://images.unsplash.com/${product.image}?w=800`}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="flex-1 p-4 lg:p-8">
          <h1 className="text-2xl lg:text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-gray-400 mb-4">{product.description}</p>

          {/* Size Selection */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Versão</h3>
            <div className="flex space-x-3">
              {sizes.map((size) => (
                <button
                  key={size.name}
                  onClick={() => setSelectedSize(size.name)}
                  className={`px-4 py-2 rounded-lg border transition-colors ${
                    selectedSize === size.name
                      ? 'bg-red-500 border-red-500 text-white'
                      : 'border-gray-600 text-gray-300 hover:border-gray-500'
                  }`}
                >
                  {size.name}
                </button>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Características</h3>
            <div className="text-gray-300 text-sm leading-relaxed">
              {features.join(' • ')}
            </div>
          </div>

          {/* Quantity and Price */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-slate-700"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="text-xl font-semibold w-8 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-slate-700"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
            <div className="text-right">
              <span className="text-2xl font-bold text-red-500">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
          </div>

          {/* Add to Cart Button */}
          <Button
            onClick={handleAddToCart}
            className="w-full bg-red-500 hover:bg-red-600 text-white py-3 text-lg font-medium rounded-lg"
          >
            <ShoppingCart className="w-5 h-5 mr-2" />
            ADICIONAR AO CARRINHO
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
