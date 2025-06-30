
import React from 'react'

interface Product {
  id: string
  category: string
  title: string
  description: string
  price: string
  image: string
}

interface ProductCardProps {
  product: Product
  favorites: any
}

export default function ProductCard({ product, favorites }: ProductCardProps) {
  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    
    if (favorites.isFavorite(product.id)) {
      favorites.removeFavorite(product.id)
    } else {
      favorites.addFavorite(product.id)
    }
  }

  const handleDetailsClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    alert(`Visualizando detalhes de: ${product.title}\nPreço: ${product.price}`)
  }

  return (
    <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:transform hover:-translate-y-1 hover:shadow-2xl hover:border-white/20 transition-all duration-300">
      <div className="relative h-48 overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        <button
          onClick={handleFavoriteClick}
          className={`absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center text-lg transition-all duration-300 hover:scale-110 ${
            favorites.isFavorite(product.id)
              ? 'bg-red-600/20 text-red-600'
              : 'bg-black/50 text-white hover:bg-red-600/80'
          }`}
        >
          {favorites.isFavorite(product.id) ? '♥' : '♡'}
        </button>
      </div>
      
      <div className="p-5">
        <h4 className="text-lg font-semibold mb-2 text-white">{product.title}</h4>
        <p className="text-slate-300 text-sm mb-4 leading-relaxed">{product.description}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-red-600">{product.price}</span>
          <button
            onClick={handleDetailsClick}
            className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5"
          >
            Ver Detalhes
          </button>
        </div>
      </div>
    </div>
  )
}
