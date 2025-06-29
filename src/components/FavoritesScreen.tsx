
import React from 'react';
import { ArrowLeft, Heart, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Product } from '../pages/Index';

interface FavoritesScreenProps {
  products: Product[];
  favorites: number[];
  onBack: () => void;
  onProductSelect: (product: Product) => void;
  onToggleFavorite: (productId: number) => void;
  onCartClick: () => void;
  cartItemsCount: number;
}

const FavoritesScreen = ({
  products,
  favorites,
  onBack,
  onProductSelect,
  onToggleFavorite,
  onCartClick,
  cartItemsCount
}: FavoritesScreenProps) => {
  const favoriteProducts = products.filter(product => favorites.includes(product.id));

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-slate-800">
        <div className="flex items-center">
          <button onClick={onBack} className="p-2">
            <ArrowLeft className="w-6 h-6 text-red-500" />
          </button>
          <h1 className="text-xl font-bold ml-4">Favoritos</h1>
        </div>
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

      {/* Content */}
      <div className="flex-1 px-4 lg:px-8 pb-20">
        {favoriteProducts.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-96">
            <Heart className="w-16 h-16 text-gray-600 mb-4" />
            <h2 className="text-2xl font-bold mb-2">Nenhum favorito ainda</h2>
            <p className="text-gray-400 mb-6 text-center">
              Adicione slides aos seus favoritos para vê-los aqui
            </p>
            <Button onClick={onBack} className="bg-red-500 hover:bg-red-600">
              Explorar Slides
            </Button>
          </div>
        ) : (
          <div className="pt-4">
            <p className="text-gray-400 mb-4">
              {favoriteProducts.length} {favoriteProducts.length === 1 ? 'item favoritado' : 'itens favoritados'}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {favoriteProducts.map((product) => (
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
                      <Heart className="w-4 h-4 fill-red-500 text-red-500" />
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
        )}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-slate-800 border-t border-slate-700 px-4 py-2">
        <div className="flex justify-around items-center max-w-md mx-auto">
          <button onClick={onBack} className="flex flex-col items-center p-2">
            <ArrowLeft className="w-6 h-6 text-gray-400" />
          </button>
          <button className="flex flex-col items-center p-2">
            <Heart className="w-6 h-6 text-red-500" />
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

export default FavoritesScreen;
