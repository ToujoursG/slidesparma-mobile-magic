
import { useState, useEffect } from 'react'

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>([])

  useEffect(() => {
    const saved = localStorage.getItem('slidesparma_favorites')
    if (saved) {
      setFavorites(JSON.parse(saved))
    }
  }, [])

  const saveFavorites = (newFavorites: string[]) => {
    localStorage.setItem('slidesparma_favorites', JSON.stringify(newFavorites))
    setFavorites(newFavorites)
  }

  const addFavorite = (productId: string) => {
    if (!favorites.includes(productId)) {
      const newFavorites = [...favorites, productId]
      saveFavorites(newFavorites)
      return true
    }
    return false
  }

  const removeFavorite = (productId: string) => {
    const newFavorites = favorites.filter(id => id !== productId)
    saveFavorites(newFavorites)
    return true
  }

  const isFavorite = (productId: string) => {
    return favorites.includes(productId)
  }

  return {
    favorites,
    addFavorite,
    removeFavorite,
    isFavorite,
    count: favorites.length
  }
}
