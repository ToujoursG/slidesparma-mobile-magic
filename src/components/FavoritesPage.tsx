
import React from 'react'
import ProductCard from './ProductCard'

interface FavoritesPageProps {
  favorites: any
  onBack: () => void
}

export default function FavoritesPage({ favorites, onBack }: FavoritesPageProps) {
  const products = [
    {
      id: 'business-pro',
      category: 'business',
      title: 'Business Pro',
      description: 'Apresentações profissionais para negócios',
      price: '$29.99',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop&crop=center'
    },
    {
      id: 'corporate-elite',
      category: 'business',
      title: 'Corporate Elite',
      description: 'Templates corporativos premium',
      price: '$39.99',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop&crop=center'
    },
    {
      id: 'startup-pitch',
      category: 'business',
      title: 'Startup Pitch',
      description: 'Apresentações para startups',
      price: '$44.99',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop&crop=center'
    },
    {
      id: 'education-template',
      category: 'education',
      title: 'Education Pro',
      description: 'Templates para apresentações educacionais',
      price: '$24.99',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop&crop=center'
    },
    {
      id: 'creative-design',
      category: 'creative',
      title: 'Creative Master',
      description: 'Templates criativos e inovadores',
      price: '$34.99',
      image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=400&h=250&fit=crop&crop=center'
    }
  ]

  const favoriteProducts = products.filter(product => favorites.isFavorite(product.id))

  return (
    <div className="min-h-screen">
      <header className="flex items-center p-6 border-b border-white/10">
        <button
          onClick={onBack}
          className="mr-4 w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors"
        >
          ←
        </button>
        <div className="text-2xl font-bold">Meus Favoritos</div>
      </header>

      <main className="p-6">
        {favoriteProducts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-xl font-semibold text-white mb-2">Nenhum produto favoritado ainda</p>
            <p className="text-slate-300">Explore nossos templates e adicione seus favoritos!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {favoriteProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                favorites={favorites}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
