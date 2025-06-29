
import React, { useState } from 'react';
import WelcomeScreen from '../components/WelcomeScreen';
import MainMenu from '../components/MainMenu';
import ProductDetail from '../components/ProductDetail';
import Cart from '../components/Cart';
import Checkout from '../components/Checkout';

export type Screen = 'welcome' | 'menu' | 'product' | 'cart' | 'checkout';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'business' | 'education' | 'creative';
  popular?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

const Index = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('welcome');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [favorites, setFavorites] = useState<number[]>([]);

  const products: Product[] = [
    {
      id: 1,
      name: 'Business Pro',
      description: 'Apresentações profissionais para negócios',
      price: 29.99,
      image: 'photo-1551288049-bebda4e38f71',
      category: 'business',
      popular: true
    },
    {
      id: 2,
      name: 'Corporate Elite',
      description: 'Templates corporativos premium',
      price: 39.99,
      image: 'photo-1542744173-8e7e53415bb0',
      category: 'business',
      popular: true
    },
    {
      id: 3,
      name: 'Education Master',
      description: 'Slides educacionais interativos',
      price: 24.99,
      image: 'photo-1523050854058-8df90110c9f1',
      category: 'education'
    },
    {
      id: 4,
      name: 'Creative Vision',
      description: 'Designs criativos e modernos',
      price: 34.99,
      image: 'photo-1556075798-4825dfaaf498',
      category: 'creative'
    },
    {
      id: 5,
      name: 'Startup Pitch',
      description: 'Apresentações para startups',
      price: 44.99,
      image: 'photo-1551434678-e076c223a692',
      category: 'business'
    },
    {
      id: 6,
      name: 'Academic Plus',
      description: 'Templates para pesquisa acadêmica',
      price: 19.99,
      image: 'photo-1481627834876-b7833e8f5570',
      category: 'education'
    }
  ];

  const addToCart = (product: Product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: number) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === productId);
      if (existingItem && existingItem.quantity > 1) {
        return prevCart.map(item =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
      return prevCart.filter(item => item.id !== productId);
    });
  };

  const toggleFavorite = (productId: number) => {
    setFavorites(prev =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);
    setCurrentScreen('product');
  };

  switch (currentScreen) {
    case 'welcome':
      return <WelcomeScreen onNext={() => setCurrentScreen('menu')} />;
    
    case 'menu':
      return (
        <MainMenu
          products={products}
          favorites={favorites}
          onProductSelect={handleProductSelect}
          onToggleFavorite={toggleFavorite}
          onCartClick={() => setCurrentScreen('cart')}
          cartItemsCount={getTotalItems()}
        />
      );
    
    case 'product':
      return selectedProduct ? (
        <ProductDetail
          product={selectedProduct}
          isFavorite={favorites.includes(selectedProduct.id)}
          onBack={() => setCurrentScreen('menu')}
          onToggleFavorite={() => toggleFavorite(selectedProduct.id)}
          onAddToCart={() => addToCart(selectedProduct)}
          onCartClick={() => setCurrentScreen('cart')}
          cartItemsCount={getTotalItems()}
        />
      ) : null;
    
    case 'cart':
      return (
        <Cart
          items={cart}
          onBack={() => setCurrentScreen('menu')}
          onUpdateQuantity={(productId, change) => {
            if (change > 0) {
              const product = products.find(p => p.id === productId);
              if (product) addToCart(product);
            } else {
              removeFromCart(productId);
            }
          }}
          onCheckout={() => setCurrentScreen('checkout')}
          totalPrice={getTotalPrice()}
        />
      );
    
    case 'checkout':
      return (
        <Checkout
          items={cart}
          totalPrice={getTotalPrice()}
          onBack={() => setCurrentScreen('cart')}
          onPayment={() => {
            setCart([]);
            setCurrentScreen('menu');
          }}
        />
      );
    
    default:
      return <WelcomeScreen onNext={() => setCurrentScreen('menu')} />;
  }
};

export default Index;
