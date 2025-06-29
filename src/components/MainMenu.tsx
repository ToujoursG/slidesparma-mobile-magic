
import React, { useState } from 'react';
import { Search, Home, Heart, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Product } from '../pages/Index';

interface MainMenuProps {
  products: Product[];
  favorites: number[];
  onProductSelect: (product: Product) => void;
  onToggleFavorite: (productId: number) => void;
  onCartClick: () => void;
  onFavoritesClick: () => void;
  cartItemsCount: number;
}

const MainMenu = ({ 
  products, 
  favorites, 
  onProductSelect, 
  onToggleFavorite, 
  onCartClick,
  onFavoritesClick,
  cartItemsCount 
}: MainMenuProps) => {
  const [activeCategory, setActiveCategory] = useState<'business' | 'education' | 'creative'>('business');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter(product => {
    const matchesCategory = product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const popularProducts = products.filter(product => product.popular);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'business':
        return '💼';
      case 'education':
        return '🎓';
      case 'creative':
        return '🎨';
      default:
        return '📊';
    }
  };

  const getCategoryName = (category: string) => {
    switch (category) {
      case 'business':
        return 'Business';
      case 'education':
        return 'Education';
      case 'creative':
        return 'Creative';
      default:
        return 'Slides';
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <div className="bg-slate-800 p-4 lg:px-8">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl lg:text-3xl font-bold">SlidesParma</h1>
          {favorites.length > 0 && (
            <button
              onClick={onFavoritesClick}
              className="flex items-center space-x-2 px-3 py-2 bg-red-500 hover:bg-red-600 rounded-lg transition-colors"
            >
              <Heart className="w-4 h-4" />
              <span className="text-sm font-medium">{favorites.length}</span>
            </button>
          )}
        </div>
        
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-slate-700 border-slate-600 text-white pl-10 py-2"
          />
        </div>
      </div>

      {/* Promotional Banner - Desktop/Tablet only */}
      <div className="hidden md:block bg-gradient-to-r from-red-500 to-red-600 m-4 lg:mx-8 rounded-lg p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold mb-1">Slides Grátis</h2>
            <p className="text-red-100">1 + 1 = 1</p>
          </div>
          <div className="flex items-center space-x-4">
            <Button className="bg-white text-red-500 hover:bg-gray-100 font-medium">
              Pedir Agora
            </Button>
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400"
              alt="Free Slides"
              className="w-16 h-16 rounded-lg object-cover"
            />
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="px-4 lg:px-8 mb-6">
        <h3 className="text-lg font-semibold mb-3">Categorias</h3>
        <div className="flex space-x-3 overflow-x-auto pb-2">
          {(['business', 'education', 'creative'] as const).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                activeCategory === category
                  ? 'bg-red-500 text-white'
                  : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
              }`}
            >
              <span className="text-lg">{getCategoryIcon(category)}</span>
              <span className="font-medium">{getCategoryName(category)}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Popular Now - Mobile */}
      <div className="px-4 lg:px-8 mb-6 md:hidden">
        <h3 className="text-lg font-semibold mb-3">Popular Agora</h3>
        <div className="flex space-x-3 overflow-x-auto pb-2">
          {popularProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => onProductSelect(product)}
              className="flex-shrink-0 w-32 cursor-pointer"
            >
              <div className="w-full h-24 rounded-lg overflow-hidden mb-2">
                <img
                  src={`https://images.unsplash.com/${product.image}?w=400`}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm font-medium truncate">{product.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-4 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => onProductSelect(product)}
            >
              <div className="relative h-48 lg:h-40">
                <img
                  src={`https://images.unsplash.com/${product.image}?w=400`}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleFavorite(product.id);
                  }}
                  className="absolute top-3 right-3 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                >
                  <Heart
                    className={`w-4 h-4 ${
                      favorites.includes(product.id)
                        ? 'fill-red-500 text-red-500'
                        : 'text-white'
                    }`}
                  />
                </button>
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-lg mb-1">{product.name}</h4>
                <p className="text-gray-400 text-sm mb-3">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-red-500 font-bold text-lg">
                    ${product.price.toFixed(2)}
                  </span>
                  <Button
                    size="sm"
                    className="bg-red-500 hover:bg-red-600"
                    onClick={(e) => {
                      e.stopPropagation();
                      onProductSelect(product);
                    }}
                  >
                    Ver Detalhes
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-slate-800 border-t border-slate-700 px-4 py-2">
        <div className="flex justify-around items-center max-w-md mx-auto">
          <button className="flex flex-col items-center p-2">
            <Home className="w-6 h-6 text-red-500" />
          </button>
          <button 
            onClick={onFavoritesClick}
            className="flex flex-col items-center p-2 relative"
          >
            <Heart className={`w-6 h-6 ${favorites.length > 0 ? 'text-red-500' : 'text-gray-400'}`} />
            {favorites.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {favorites.length}
              </span>
            )}
          </button>
          <button 
            onClick={onCartClick}
            className="flex flex-col items-center p-2 relative"
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
    </div>
  );
};

export default MainMenu;
