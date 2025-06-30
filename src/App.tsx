
import React, { useState } from 'react'
import LandingPage from './components/LandingPage'
import MainApp from './components/MainApp'
import FavoritesPage from './components/FavoritesPage'
import { useFavorites } from './hooks/useFavorites'

type Page = 'landing' | 'main' | 'favorites'

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('landing')
  const favorites = useFavorites()

  const showPage = (page: Page) => {
    setCurrentPage(page)
  }

  return (
    <div className="min-h-screen bg-slate-800 text-white">
      {currentPage === 'landing' && (
        <LandingPage onNext={() => showPage('main')} />
      )}
      {currentPage === 'main' && (
        <MainApp 
          favorites={favorites}
          onShowFavorites={() => showPage('favorites')}
        />
      )}
      {currentPage === 'favorites' && (
        <FavoritesPage 
          favorites={favorites}
          onBack={() => showPage('main')}
        />
      )}
    </div>
  )
}

export default App
