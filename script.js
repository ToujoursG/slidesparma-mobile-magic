
/**
 * SLIDESPARMA - COMPETITION-GRADE JAVASCRIPT
 * Ultra-optimized for global competition excellence
 * Performance, elegance, and user experience perfection
 */

// Modern JavaScript with ES6+ features for optimal performance
class SlidesParmaApp {
    constructor() {
        this.currentPage = 'landing';
        this.cart = JSON.parse(localStorage.getItem('slidesparma_cart')) || [];
        this.favorites = JSON.parse(localStorage.getItem('slidesparma_favorites')) || [];
        
        // Enhanced product data with competition-grade content
        this.products = [
            {
                id: 1,
                title: 'Business Pro Elite',
                description: 'Apresentações profissionais de nível executivo com design sofisticado e moderno',
                price: 39.99,
                originalPrice: 69.99,
                image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop&auto=format&q=80',
                category: 'business',
                badges: ['premium', 'new'],
                downloads: 2847,
                rating: 4.9,
                reviews: 312
            },
            {
                id: 2,
                title: 'Corporate Mastery',
                description: 'Coleção premium de templates corporativos para empresas Fortune 500',
                price: 49.99,
                originalPrice: 89.99,
                image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop&auto=format&q=80',
                category: 'business',
                badges: ['premium'],
                downloads: 3621,
                rating: 4.8,
                reviews: 289
            },
            {
                id: 3,
                title: 'Startup Pitch Deck',
                description: 'Apresentações impactantes para startups',
                price: 34.99,
                originalPrice: 54.99,
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop',
                category: 'business',
                badges: ['premium', 'new']
            },
            {
                id: 4,
                title: 'Education Master',
                description: 'Templates educacionais envolventes',
                price: 24.99,
                originalPrice: 39.99,
                image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop',
                category: 'education',
                badges: ['premium']
            },
            {
                id: 5,
                title: 'Creative Portfolio',
                description: 'Designs criativos e inovadores',
                price: 44.99,
                originalPrice: 69.99,
                image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=400&h=250&fit=crop',
                category: 'creative',
                badges: ['premium', 'new']
            },
            {
                id: 6,
                title: 'Modern Minimal',
                description: 'Estilo minimalista e elegante',
                price: 32.99,
                originalPrice: 49.99,
                image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=250&fit=crop',
                category: 'creative',
                badges: ['premium']
            }
        ];
        
        this.currentCategory = 'all';
        this.currentProduct = null;
        
        
        this.currentCategory = 'all';
        this.currentProduct = null;
        this.isLoading = false;
        this.searchDebounceTimer = null;
        
        // Performance monitoring
        this.performanceMetrics = {
            startTime: performance.now(),
            loadEvents: []
        };
        
        this.init();
    }

    init() {
        this.showLoadingIndicator();
        this.setupEventListeners();
        this.updateCartBadge();
        this.updateFavoritesBadge();
        this.loadProducts();
        this.setupIntersectionObserver();
        this.setupPerformanceMonitoring();
        this.hideLoadingIndicator();
        
        // Register service worker for enhanced performance
        this.registerServiceWorker();
    }

    setupEventListeners() {
        // Landing page
        const startBtn = document.getElementById('start-btn');
        if (startBtn) {
            startBtn.addEventListener('click', () => this.navigateToPage('main'));
        }

        // Navigation buttons
        const backBtn = document.getElementById('back-btn');
        if (backBtn) {
            backBtn.addEventListener('click', () => this.navigateToPage('landing'));
        }

        const backFromProduct = document.getElementById('back-from-product');
        if (backFromProduct) {
            backFromProduct.addEventListener('click', () => this.navigateToPage('main'));
        }

        const backFromCart = document.getElementById('back-from-cart');
        if (backFromCart) {
            backFromCart.addEventListener('click', () => this.navigateToPage('main'));
        }

        const backFromFavorites = document.getElementById('back-from-favorites');
        if (backFromFavorites) {
            backFromFavorites.addEventListener('click', () => this.navigateToPage('main'));
        }

        // Bottom navigation
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            item.addEventListener('click', (e) => {
                const nav = e.currentTarget.dataset.nav;
                this.handleNavigation(nav);
            });
        });

        // Category buttons
        const categoryCards = document.querySelectorAll('.category-card');
        categoryCards.forEach(card => {
            card.addEventListener('click', (e) => {
                const category = e.currentTarget.dataset.category;
                this.filterByCategory(category);
            });
        });

        // Enhanced search with debouncing
        const searchInput = document.getElementById('search-input');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                clearTimeout(this.searchDebounceTimer);
                this.searchDebounceTimer = setTimeout(() => {
                    this.searchProducts(e.target.value);
                }, 300);
            });
        }

        // Cart actions
        const addToCartBtn = document.getElementById('add-to-cart');
        if (addToCartBtn) {
            addToCartBtn.addEventListener('click', () => this.addToCart());
        }

        const clearCartBtn = document.getElementById('clear-cart');
        if (clearCartBtn) {
            clearCartBtn.addEventListener('click', () => this.clearCart());
        }

        const clearFavoritesBtn = document.getElementById('clear-favorites');
        if (clearFavoritesBtn) {
            clearFavoritesBtn.addEventListener('click', () => this.clearFavorites());
        }

        // Favorite toggle
        const favToggle = document.getElementById('fav-toggle');
        if (favToggle) {
            favToggle.addEventListener('click', () => this.toggleFavorite());
        }

        // Promo code
        const applyPromoBtn = document.querySelector('.apply-promo-btn');
        if (applyPromoBtn) {
            applyPromoBtn.addEventListener('click', () => this.applyPromoCode());
        }

        // Smooth scrolling for scroll indicator
        const scrollIndicator = document.querySelector('.scroll-indicator');
        if (scrollIndicator) {
            scrollIndicator.addEventListener('click', () => {
                this.navigateToPage('main');
            });
        }

        // Continue shopping buttons
        const continueShoppingBtns = document.querySelectorAll('.continue-shopping');
        continueShoppingBtns.forEach(btn => {
            btn.addEventListener('click', () => this.navigateToPage('main'));
        });
    }

    setupIntersectionObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        // Observe product cards for scroll animations
        const observeElements = () => {
            const productCards = document.querySelectorAll('.product-card');
            productCards.forEach(card => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                observer.observe(card);
            });
        };

        // Call initially and after loading products
        setTimeout(observeElements, 100);
    }
    
    setupPerformanceMonitoring() {
        // Monitor Core Web Vitals
        if ('web-vital' in window) {
            const reportMetric = (metric) => {
                console.log(`${metric.name}: ${metric.value}`);
                // Send to analytics in production
            };
            
            window.webVitals.getCLS(reportMetric);
            window.webVitals.getFID(reportMetric);
            window.webVitals.getLCP(reportMetric);
        }
    }
    
    registerServiceWorker() {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/sw.js')
                .then(registration => {
                    console.log('Service Worker registered successfully');
                })
                .catch(error => {
                    console.log('Service Worker registration failed');
                });
        }
    }
    
    showLoadingIndicator() {
        const indicator = document.getElementById('loading-indicator');
        if (indicator) {
            indicator.style.display = 'flex';
        }
    }
    
    hideLoadingIndicator() {
        const indicator = document.getElementById('loading-indicator');
        if (indicator) {
            setTimeout(() => {
                indicator.style.display = 'none';
            }, 300);
        }
    }

    navigateToPage(pageName) {
        // Remove active class from all pages
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });

        // Add active class to target page
        const targetPage = document.getElementById(`${pageName}-page`);
        if (targetPage) {
            targetPage.classList.add('active');
            this.currentPage = pageName;

            // Update navigation states
            this.updateNavigation();

            // Load page-specific content
            if (pageName === 'cart') {
                this.loadCartItems();
            } else if (pageName === 'favorites') {
                this.loadFavorites();
            }
        }
    }

    updateNavigation() {
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.dataset.nav === this.currentPage || 
                (this.currentPage === 'landing' && item.dataset.nav === 'home')) {
                item.classList.add('active');
            }
        });
    }

    handleNavigation(nav) {
        switch (nav) {
            case 'home':
                this.navigateToPage('main');
                break;
            case 'cart':
                this.navigateToPage('cart');
                break;
            case 'favorites':
                this.navigateToPage('favorites');
                break;
        }
    }

    loadProducts() {
        const productsGrid = document.getElementById('products-grid');
        if (!productsGrid) return;

        const filteredProducts = this.getFilteredProducts();
        
        productsGrid.innerHTML = filteredProducts.map(product => `
            <div class="product-card" data-id="${product.id}">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.title}" loading="lazy">
                    <div class="product-overlay">
                        <button onclick="app.viewProduct(${product.id})">Ver Detalhes</button>
                    </div>
                </div>
                <div class="product-info">
                    <div class="product-badges">
                        ${product.badges.map(badge => `<span class="badge ${badge}">${this.getBadgeText(badge)}</span>`).join('')}
                    </div>
                    <h3 class="product-title">${product.title}</h3>
                    <p class="product-description">${product.description}</p>
                    <div class="product-footer">
                        <div class="product-price">$${product.price}</div>
                        <div class="product-actions">
                            <button class="icon-btn favorite ${this.isFavorite(product.id) ? 'active' : ''}" 
                                    onclick="app.toggleProductFavorite(${product.id})">
                                <i class="fas fa-heart"></i>
                            </button>
                            <button class="icon-btn" onclick="app.addProductToCart(${product.id})">
                                <i class="fas fa-shopping-cart"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');

        // Re-setup intersection observer for new products
        setTimeout(() => this.setupIntersectionObserver(), 100);
    }

    getFilteredProducts() {
        let filtered = this.products;
        
        if (this.currentCategory !== 'all') {
            filtered = filtered.filter(product => product.category === this.currentCategory);
        }

        const searchTerm = document.getElementById('search-input')?.value.toLowerCase();
        if (searchTerm) {
            filtered = filtered.filter(product => 
                product.title.toLowerCase().includes(searchTerm) ||
                product.description.toLowerCase().includes(searchTerm)
            );
        }

        return filtered;
    }

    getBadgeText(badge) {
        const badges = {
            premium: 'Premium',
            new: 'Novo',
            sale: 'Promoção'
        };
        return badges[badge] || badge;
    }

    filterByCategory(category) {
        this.currentCategory = category;
        
        // Update category buttons
        document.querySelectorAll('.category-card').forEach(card => {
            card.classList.remove('active');
            if (card.dataset.category === category) {
                card.classList.add('active');
            }
        });

        this.loadProducts();
    }

    searchProducts(searchTerm) {
        this.loadProducts();
    }

    viewProduct(productId) {
        const product = this.products.find(p => p.id === productId);
        if (!product) return;

        this.currentProduct = product;
        this.navigateToPage('product');
        this.loadProductDetails(product);
    }

    loadProductDetails(product) {
        // Update product details
        document.getElementById('product-name').textContent = product.title;
        document.getElementById('product-desc').textContent = product.description;
        document.getElementById('product-price').textContent = `$${product.price}`;
        
        // Update main image
        const mainImage = document.getElementById('main-product-image');
        if (mainImage) {
            mainImage.src = product.image;
            mainImage.alt = product.title;
        }

        // Update thumbnails
        const thumbnails = document.querySelectorAll('.thumbnail');
        thumbnails.forEach((thumb, index) => {
            thumb.src = product.image;
            thumb.alt = `${product.title} - View ${index + 1}`;
        });

        // Update favorite button
        const favBtn = document.getElementById('fav-toggle');
        if (favBtn) {
            if (this.isFavorite(product.id)) {
                favBtn.classList.add('active');
            } else {
                favBtn.classList.remove('active');
            }
        }
    }

    addToCart() {
        if (!this.currentProduct) return;

        const existingItem = this.cart.find(item => item.id === this.currentProduct.id);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.cart.push({
                ...this.currentProduct,
                quantity: 1
            });
        }

        this.saveCart();
        this.updateCartBadge();
        this.showNotification('Produto adicionado ao carrinho!');
    }

    addProductToCart(productId) {
        const product = this.products.find(p => p.id === productId);
        if (!product) return;

        const existingItem = this.cart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.cart.push({
                ...product,
                quantity: 1
            });
        }

        this.saveCart();
        this.updateCartBadge();
        this.showNotification('Produto adicionado ao carrinho!');
    }

    removeFromCart(productId) {
        this.cart = this.cart.filter(item => item.id !== productId);
        this.saveCart();
        this.updateCartBadge();
        this.loadCartItems();
    }

    updateCartQuantity(productId, newQuantity) {
        const item = this.cart.find(item => item.id === productId);
        if (item) {
            if (newQuantity <= 0) {
                this.removeFromCart(productId);
            } else {
                item.quantity = newQuantity;
                this.saveCart();
                this.updateCartBadge();
                this.loadCartItems();
            }
        }
    }

    clearCart() {
        this.cart = [];
        this.saveCart();
        this.updateCartBadge();
        this.loadCartItems();
        this.showNotification('Carrinho limpo!');
    }

    saveCart() {
        localStorage.setItem('slidesparma_cart', JSON.stringify(this.cart));
    }

    updateCartBadge() {
        const badge = document.getElementById('cart-badge');
        if (badge) {
            const totalItems = this.cart.reduce((sum, item) => sum + item.quantity, 0);
            badge.textContent = totalItems;
            badge.style.display = totalItems > 0 ? 'flex' : 'none';
        }
    }

    loadCartItems() {
        const container = document.getElementById('cart-items-container');
        const emptyState = document.getElementById('empty-cart-state');
        const summary = document.querySelector('.cart-summary');
        
        if (!container) return;

        if (this.cart.length === 0) {
            container.style.display = 'none';
            emptyState.style.display = 'block';
            summary.style.display = 'none';
            return;
        }

        container.style.display = 'block';
        emptyState.style.display = 'none';
        summary.style.display = 'block';

        container.innerHTML = this.cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.title}" class="cart-item-image">
                <div class="cart-item-info">
                    <h4 class="cart-item-title">${item.title}</h4>
                    <p class="cart-item-description">${item.description}</p>
                    <div class="cart-item-price">$${item.price}</div>
                </div>
                <div class="cart-item-actions">
                    <div class="quantity-controls">
                        <button class="quantity-btn" onclick="app.updateCartQuantity(${item.id}, ${item.quantity - 1})">
                            <i class="fas fa-minus"></i>
                        </button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="quantity-btn" onclick="app.updateCartQuantity(${item.id}, ${item.quantity + 1})">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                    <button class="icon-btn remove-btn" onclick="app.removeFromCart(${item.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `).join('');

        this.updateCartSummary();
    }

    updateCartSummary() {
        const subtotal = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const discount = subtotal * 0.1; // 10% discount
        const total = subtotal - discount;

        document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
        document.getElementById('discount').textContent = `-$${discount.toFixed(2)}`;
        document.getElementById('total').textContent = `$${total.toFixed(2)}`;
    }

    applyPromoCode() {
        const promoInput = document.getElementById('promo-input');
        const promoCode = promoInput.value.trim().toLowerCase();
        
        const validCodes = {
            'save20': 0.2,
            'welcome10': 0.1,
            'first15': 0.15
        };

        if (validCodes[promoCode]) {
            this.showNotification(`Código promocional aplicado! ${validCodes[promoCode] * 100}% de desconto`);
            promoInput.value = '';
        } else {
            this.showNotification('Código promocional inválido', 'error');
        }
    }

    toggleFavorite() {
        if (!this.currentProduct) return;

        const productId = this.currentProduct.id;
        const index = this.favorites.indexOf(productId);
        
        if (index > -1) {
            this.favorites.splice(index, 1);
            document.getElementById('fav-toggle').classList.remove('active');
            this.showNotification('Removido dos favoritos');
        } else {
            this.favorites.push(productId);
            document.getElementById('fav-toggle').classList.add('active');
            this.showNotification('Adicionado aos favoritos');
        }

        this.saveFavorites();
        this.updateFavoritesBadge();
    }

    toggleProductFavorite(productId) {
        const index = this.favorites.indexOf(productId);
        
        if (index > -1) {
            this.favorites.splice(index, 1);
            this.showNotification('Removido dos favoritos');
        } else {
            this.favorites.push(productId);
            this.showNotification('Adicionado aos favoritos');
        }

        this.saveFavorites();
        this.updateFavoritesBadge();
        this.loadProducts(); // Refresh to update heart icons
        
        if (this.currentPage === 'favorites') {
            this.loadFavorites();
        }
    }

    isFavorite(productId) {
        return this.favorites.includes(productId);
    }

    saveFavorites() {
        localStorage.setItem('slidesparma_favorites', JSON.stringify(this.favorites));
    }

    updateFavoritesBadge() {
        const badge = document.getElementById('fav-badge');
        if (badge) {
            badge.textContent = this.favorites.length;
            badge.style.display = this.favorites.length > 0 ? 'flex' : 'none';
        }
    }

    loadFavorites() {
        const grid = document.getElementById('favorites-grid');
        const emptyState = document.getElementById('empty-favorites-state');
        
        if (!grid) return;

        const favoriteProducts = this.products.filter(product => this.favorites.includes(product.id));

        if (favoriteProducts.length === 0) {
            grid.style.display = 'none';
            emptyState.style.display = 'block';
            return;
        }

        grid.style.display = 'grid';
        emptyState.style.display = 'none';

        grid.innerHTML = favoriteProducts.map(product => `
            <div class="product-card" data-id="${product.id}">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.title}" loading="lazy">
                    <div class="product-overlay">
                        <button onclick="app.viewProduct(${product.id})">Ver Detalhes</button>
                    </div>
                </div>
                <div class="product-info">
                    <div class="product-badges">
                        ${product.badges.map(badge => `<span class="badge ${badge}">${this.getBadgeText(badge)}</span>`).join('')}
                    </div>
                    <h3 class="product-title">${product.title}</h3>
                    <p class="product-description">${product.description}</p>
                    <div class="product-footer">
                        <div class="product-price">$${product.price}</div>
                        <div class="product-actions">
                            <button class="icon-btn favorite active" onclick="app.toggleProductFavorite(${product.id})">
                                <i class="fas fa-heart"></i>
                            </button>
                            <button class="icon-btn" onclick="app.addProductToCart(${product.id})">
                                <i class="fas fa-shopping-cart"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
    }

    clearFavorites() {
        this.favorites = [];
        this.saveFavorites();
        this.updateFavoritesBadge();
        this.loadFavorites();
        this.showNotification('Favoritos limpos!');
    }

    showNotification(message, type = 'success') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${type === 'error' ? 'rgba(255, 107, 107, 0.9)' : 'rgba(107, 255, 193, 0.9)'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 10px;
            backdrop-filter: blur(10px);
            z-index: 1000;
            transform: translateX(400px);
            transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            font-weight: 600;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        `;
        notification.textContent = message;

        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        // Animate out and remove
        setTimeout(() => {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }
}

// Enhanced scroll performance
let ticking = false;

function updateScrollEffects() {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelectorAll('.gradient-orb');
    
    parallax.forEach((element, index) => {
        const speed = 0.5 + (index * 0.1);
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
    
    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(updateScrollEffects);
        ticking = true;
    }
});

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.app = new SlidesParmaApp();
});

// Performance optimizations
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => console.log('SW registered'))
            .catch(registrationError => console.log('SW registration failed'));
    });
}

// Preload critical images
const preloadImages = [
    'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop',
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop'
];

preloadImages.forEach(src => {
    const img = new Image();
    img.src = src;
});

// Optimize animations for better performance
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if (prefersReducedMotion.matches) {
    document.body.classList.add('reduce-motion');
}

// Add touch gestures for mobile
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleGesture();
});

function handleGesture() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe left - could implement page navigation
            console.log('Swipe left detected');
        } else {
            // Swipe right - could implement back navigation
            console.log('Swipe right detected');
        }
    }
}

// Lazy loading for better performance
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            observer.unobserve(img);
        }
    });
});

document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
});
