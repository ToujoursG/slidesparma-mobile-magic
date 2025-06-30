
import React, { useState } from 'react'
import ProductCard from './ProductCard'

interface MainAppProps {
  favorites: any
  onShowFavorites: () => void
}

export default function MainApp({ favorites, onShowFavorites }: MainAppProps) {
  const [selectedCategory, setSelectedCategory] = useState('business')
  const [searchTerm, setSearchTerm] = useState('')

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

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex items-center justify-between p-6 border-b border-white/10">
        <div className="text-2xl font-bold">SlidesParma</div>
        <div className="flex-1 max-w-md mx-8">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-green-400"
          />
        </div>
      </header>

      <main className="flex-1 p-6">
        <section className="bg-gradient-to-r from-red-600 to-red-700 rounded-xl p-6 mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">Slides Grátis</h2>
            <p className="text-xl">1 + 1 = 1</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="bg-white/20 border border-white/30 px-6 py-2 rounded-lg font-semibold hover:bg-white/30 transition-colors">
              Pedir Agora
            </button>
            <div className="w-15 h-15 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=80&h=80&fit=crop&crop=center" 
                alt="Free Slides"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Categorias</h3>
          <div className="flex gap-3 flex-wrap">
            <button
              onClick={() => setSelectedCategory('business')}
              className={`px-5 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === 'business' 
                  ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white' 
                  : 'bg-white/10 border border-white/20 hover:bg-white/15'
              }`}
            >
              💼 Business
            </button>
            <button
              onClick={() => setSelectedCategory('education')}
              className={`px-5 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === 'education' 
                  ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white' 
                  : 'bg-white/10 border border-white/20 hover:bg-white/15'
              }`}
            >
              🎓 Education
            </button>
            <button
              onClick={() => setSelectedCategory('creative')}
              className={`px-5 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === 'creative' 
                  ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white' 
                  : 'bg-white/10 border border-white/20 hover:bg-white/15'
              }`}
            >
              🎨 Creative
            </button>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              favorites={favorites}
            />
          ))}
        </section>
      </main>

      <nav className="flex justify-center gap-8 p-4 border-t border-white/10">
        <button className="flex items-center justify-center w-12 h-12 rounded-full bg-red-600/20 text-red-600">
          🏠
        </button>
        <button className="flex items-center justify-center w-12 h-12 rounded-full text-white/60 hover:text-white hover:bg-white/10">
          🛒
        </button>
        <button 
          onClick={onShowFavorites}
          className="flex items-center justify-center w-12 h-12 rounded-full text-white/60 hover:text-white hover:bg-white/10 relative"
        >
          💚
          {favorites.count > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {favorites.count}
            </span>
          )}
        </button>
      </nav>
    </div>
  )
}
