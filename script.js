
// Enhanced Products Data with detailed information
const PRODUCTS = [
    {
        id: 'business-pro',
        category: 'business',
        title: 'Business Pro',
        description: 'Apresentações profissionais para negócios modernos com designs clean e impactantes',
        price: 29.99,
        originalPrice: 49.99,
        discount: 40,
        rating: 4.9,
        downloads: 1234,
        image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop&crop=center',
        images: [
            'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=400&fit=crop&crop=center',
            'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop&crop=center',
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=center',
            'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=400&fit=crop&crop=center'
        ],
        badges: ['premium', 'popular'],
        formats: ['powerpoint', 'google-slides'],
        features: ['100+ Slides', 'Vectorial Icons', 'Easy to Edit', 'Modern Design']
    },
    {
        id: 'corporate-elite',
        category: 'business',
        title: 'Corporate Elite',
        description: 'Templates corporativos premium com design sofisticado para empresas de alto nível',
        price: 39.99,
        originalPrice: 59.99,
        discount: 33,
        rating: 4.8,
        downloads: 892,
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop&crop=center',
        images: [
            'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=400&fit=crop&crop=center',
            'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=400&fit=crop&crop=center',
            'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=400&fit=crop&crop=center',
            'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=400&h=400&fit=crop&crop=center'
        ],
        badges: ['premium', 'new'],
        formats: ['powerpoint', 'google-slides'],
        features: ['150+ Slides', 'Professional Charts', 'Color Variations', 'Premium Support']
    },
    {
        id: 'startup-pitch',
        category: 'business',
        title: 'Startup Pitch',
        description: 'Apresentações dinâmicas para startups impressionarem investidores e conquistarem o mercado',
        price: 44.99,
        originalPrice: 69.99,
        discount: 36,
        rating: 4.9,
        downloads: 2156,
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop&crop=center',
        images: [
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=center',
            'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=400&fit=crop&crop=center',
            'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=400&h=400&fit=crop&crop=center',
            'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=400&fit=crop&crop=center'
        ],
        badges: ['premium', 'bestseller'],
        formats: ['powerpoint', 'google-slides'],
        features: ['Pitch Deck Template', 'Investor Ready', 'Market Analysis', 'Financial Projections']
    },
    {
        id: 'education-template',
        category: 'education',
        title: 'Education Pro',
        description: 'Templates educacionais modernos para professores e instituições de ensino',
        price: 24.99,
        originalPrice: 39.99,
        discount: 38,
        rating: 4.7,
        downloads: 756,
        image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop&crop=center',
        images: [
            'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=400&fit=crop&crop=center',
            'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=400&fit=crop&crop=center',
            'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=400&h=400&fit=crop&crop=center',
            'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=400&fit=crop&crop=center'
        ],
        badges: ['education', 'interactive'],
        formats: ['powerpoint', 'google-slides'],
        features: ['Interactive Elements', 'Student Friendly', 'Quiz Templates', 'Lesson Plans']
    },
    {
        id: 'creative-design',
        category: 'creative',
        title: 'Creative Master',
        description: 'Templates criativos e inovadores para designers e agências criativas',
        price: 34.99,
        originalPrice: 54.99,
        discount: 36,
        rating: 4.8,
        downloads: 1432,
        image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=400&h=250&fit=crop&crop=center',
        images: [
            'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=400&h=400&fit=crop&crop=center',
            'https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=400&fit=crop&crop=center',
            'https://images.unsplash.com/photo-1609921141835-710b7fa6e438?w=400&h=400&fit=crop&crop=center',
            'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=400&fit=crop&crop=center'
        ],
        badges: ['creative', 'trending'],
        formats: ['powerpoint', 'google-slides'],
        features: ['Creative Layouts', 'Artistic Elements', 'Color Palettes', 'Typography Focused']
    },
    {
        id: 'marketing-master',
        category: 'business',
        title: 'Marketing Master',
        description: 'Templates focados em marketing digital e estratégias de vendas modernas',
        price: 36.99,
        originalPrice: 56.99,
        discount: 35,
        rating: 4.9,
        downloads: 1876,
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&crop=center',
        images: [
            'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop&crop=center',
            'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=400&fit=crop&crop=center',
            'https://images.unsplash.com/photo-1553484771-cc0d9b8c2b33?w=400&h=400&fit=crop&crop=center',
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=center'
        ],
        badges: ['marketing', 'popular'],
        formats: ['powerpoint', 'google-slides'],
        features: ['Marketing Focused', 'Social Media Ready', 'Campaign Templates', 'Analytics Charts']
    }
];

// Enhanced App State Management
class AppState {
    constructor() {
        this.currentPage = 'landing';
        this.currentProduct = null;
        this.currentCategory = 'all';
        this.searchTerm = '';
        this.viewMode = 'grid';
        this.favorites = this.loadFromStorage('favorites', []);
        this.cart = this.loadFromStorage('cart', []);
        this.filters = {
            priceRange: [0, 100],
            rating: 0,
            sortBy: 'popular'
        };
        
        this.initializeEventListeners();
        this.updateBadges();
    }
    
    loadFromStorage(key, defaultValue) {
        try {
            const data = localStorage.getItem(key);
            return data ? JSON.parse(data) : defaultValue;
        } catch (error) {
            console.error(`Error loading ${key} from storage:`, error);
            return defaultValue;
        }
    }
    
    saveToStorage(key, data) {
        try {
            localStorage.setItem(key, JSON.stringify(data));
        } catch (error) {
            console.error(`Error saving ${key} to storage:`, error);
        }
    }
    
    initializeEventListeners() {
        document.addEventListener('DOMContentLoaded', () => {
            this.bindEvents();
            this.renderCurrentPage();
        });
    }
    
    bindEvents() {
        // Landing page
        const startBtn = document.getElementById('start-btn');
        if (startBtn) {
            startBtn.addEventListener('click', () => this.showPage('main'));
        }
        
        // Navigation
        document.querySelectorAll('.nav-item').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const nav = btn.getAttribute('data-nav');
                this.handleNavigation(nav);
            });
        });
        
        // Back buttons
        document.getElementById('back-btn')?.addEventListener('click', () => this.showPage('landing'));
        document.getElementById('back-from-product')?.addEventListener('click', () => this.showPage('main'));
        document.getElementById('back-from-cart')?.addEventListener('click', () => this.showPage('main'));
        document.getElementById('back-from-favorites')?.addEventListener('click', () => this.showPage('main'));
        
        // Search functionality
        const searchInput = document.getElementById('search-input');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.searchTerm = e.target.value;
                this.renderProducts();
            });
        }
        
        // Category filters
        document.querySelectorAll('.category-card').forEach(card => {
            card.addEventListener('click', () => {
                this.currentCategory = card.getAttribute('data-category');
                document.querySelectorAll('.category-card').forEach(c => c.classList.remove('active'));
                card.classList.add('active');
                this.renderProducts();
            });
        });
        
        // View mode toggle
        document.querySelectorAll('.view-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                this.viewMode = btn.getAttribute('data-view');
                document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.renderProducts();
            });
        });
        
        // Product actions
        document.getElementById('add-to-cart')?.addEventListener('click', () => {
            if (this.currentProduct) {
                this.addToCart(this.currentProduct.id);
                this.showNotification('Produto adicionado ao carrinho!', 'success');
            }
        });
        
        document.getElementById('fav-toggle')?.addEventListener('click', () => {
            if (this.currentProduct) {
                this.toggleFavorite(this.currentProduct.id);
            }
        });
        
        // Cart actions
        document.getElementById('clear-cart')?.addEventListener('click', () => {
            this.showConfirmDialog('Limpar carrinho?', 'Tem certeza que deseja remover todos os itens?', () => {
                this.clearCart();
                this.showNotification('Carrinho limpo!', 'info');
            });
        });
        
        document.getElementById('clear-favorites')?.addEventListener('click', () => {
            this.showConfirmDialog('Limpar favoritos?', 'Tem certeza que deseja remover todos os favoritos?', () => {
                this.clearFavorites();
                this.showNotification('Favoritos limpos!', 'info');
            });
        });
        
        // Continue shopping buttons
        document.querySelectorAll('.continue-shopping').forEach(btn => {
            btn.addEventListener('click', () => this.showPage('main'));
        });
        
        // Checkout
        document.getElementById('checkout-btn')?.addEventListener('click', () => {
            this.processCheckout();
        });
        
        // Promo code
        document.querySelector('.apply-promo-btn')?.addEventListener('click', () => {
            this.applyPromoCode();
        });
        
        // Scroll to top on page change
        window.addEventListener('scroll', () => {
            const scrollBtn = document.querySelector('.scroll-to-top');
            if (scrollBtn) {
                scrollBtn.style.display = window.pageYOffset > 300 ? 'block' : 'none';
            }
        });
    }
    
    handleNavigation(nav) {
        switch(nav) {
            case 'home':
                this.showPage('main');
                break;
            case 'cart':
                this.showPage('cart');
                break;
            case 'favorites':
                this.showPage('favorites');
                break;
            case 'profile':
                this.showNotification('Página de perfil em desenvolvimento', 'info');
                break;
        }
    }
    
    showPage(pageName) {
        // Add page transition effects
        const currentPage = document.querySelector('.page.active');
        const newPage = document.getElementById(`${pageName}-page`);
        
        if (currentPage) {
            currentPage.style.opacity = '0';
            setTimeout(() => {
                currentPage.classList.remove('active');
                newPage.classList.add('active');
                newPage.style.opacity = '0';
                requestAnimationFrame(() => {
                    newPage.style.opacity = '1';
                });
            }, 150);
        } else {
            document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
            newPage.classList.add('active');
        }
        
        this.currentPage = pageName;
        this.updateNavigation();
        this.renderCurrentPage();
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    renderCurrentPage() {
        switch(this.currentPage) {
            case 'main':
                this.renderProducts();
                break;
            case 'product':
                this.renderProductDetails();
                break;
            case 'cart':
                this.renderCart();
                break;
            case 'favorites':
                this.renderFavorites();
                break;
        }
    }
    
    updateNavigation() {
        document.querySelectorAll('.nav-item').forEach(btn => btn.classList.remove('active'));
        
        const activeNav = document.querySelector(`[data-nav="${this.getNavType()}"]`);
        if (activeNav) {
            activeNav.classList.add('active');
        }
    }
    
    getNavType() {
        switch(this.currentPage) {
            case 'main': return 'home';
            case 'cart': return 'cart';
            case 'favorites': return 'favorites';
            default: return 'home';
        }
    }
    
    renderProducts() {
        const grid = document.getElementById('products-grid');
        if (!grid) return;
        
        const filtered = this.getFilteredProducts();
        
        if (filtered.length === 0) {
            grid.innerHTML = `
                <div class="empty-state">
                    <div class="empty-icon">
                        <i class="fas fa-search"></i>
                    </div>
                    <h3>Nenhum resultado encontrado</h3>
                    <p>Tente ajustar seus filtros de busca</p>
                </div>
            `;
            return;
        }
        
        grid.className = `products-grid ${this.viewMode}-view`;
        grid.innerHTML = filtered.map(product => this.createProductCard(product)).join('');
        
        // Add click handlers for product cards
        grid.querySelectorAll('.product-card').forEach(card => {
            card.addEventListener('click', (e) => {
                if (!e.target.closest('.favorite-btn')) {
                    const productId = card.getAttribute('data-product-id');
                    this.viewProduct(productId);
                }
            });
        });
        
        // Add favorite button handlers
        grid.querySelectorAll('.favorite-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const productId = btn.getAttribute('data-product-id');
                this.toggleFavorite(productId);
            });
        });
    }
    
    getFilteredProducts() {
        return PRODUCTS.filter(product => {
            const matchesCategory = this.currentCategory === 'all' || product.category === this.currentCategory;
            const matchesSearch = !this.searchTerm || 
                product.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                product.description.toLowerCase().includes(this.searchTerm.toLowerCase());
            const matchesPrice = product.price >= this.filters.priceRange[0] && 
                               product.price <= this.filters.priceRange[1];
            const matchesRating = product.rating >= this.filters.rating;
            
            return matchesCategory && matchesSearch && matchesPrice && matchesRating;
        }).sort((a, b) => {
            switch(this.filters.sortBy) {
                case 'price-low': return a.price - b.price;
                case 'price-high': return b.price - a.price;
                case 'rating': return b.rating - a.rating;
                case 'downloads': return b.downloads - a.downloads;
                default: return b.downloads - a.downloads; // popular
            }
        });
    }
    
    createProductCard(product) {
        const isFavorite = this.favorites.includes(product.id);
        const discount = product.originalPrice ? Math.round((1 - product.price / product.originalPrice) * 100) : 0;
        
        return `
            <div class="product-card" data-product-id="${product.id}">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.title}" loading="lazy">
                    <button class="favorite-btn ${isFavorite ? 'active' : ''}" data-product-id="${product.id}" title="${isFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}">
                        <i class="fas fa-heart"></i>
                    </button>
                    ${discount > 0 ? `<div class="discount-badge">${discount}% OFF</div>` : ''}
                </div>
                <div class="product-details">
                    <div class="product-badges">
                        ${product.badges?.map(badge => `<span class="badge ${badge}">${this.getBadgeText(badge)}</span>`).join('') || ''}
                    </div>
                    <h4 class="product-title">${product.title}</h4>
                    <p class="product-description">${product.description}</p>
                    <div class="product-stats">
                        <div class="stat">
                            <i class="fas fa-star"></i>
                            <span>${product.rating} (${this.formatNumber(product.downloads)})</span>
                        </div>
                        <div class="stat">
                            <i class="fas fa-download"></i>
                            <span>${this.formatNumber(product.downloads)} downloads</span>
                        </div>
                    </div>
                    <div class="product-footer">
                        <div class="price-info">
                            <span class="product-price">$${product.price}</span>
                            ${product.originalPrice ? `<span class="original-price">$${product.originalPrice}</span>` : ''}
                        </div>
                        <button class="action-btn" onclick="event.stopPropagation(); app.viewProduct('${product.id}')">
                            Ver Detalhes
                        </button>
                    </div>
                </div>
            </div>
        `;
    }
    
    getBadgeText(badge) {
        const badges = {
            premium: 'Premium',
            new: 'Novo',
            popular: 'Popular',
            bestseller: 'Mais Vendido',
            education: 'Educação',
            creative: 'Criativo',
            marketing: 'Marketing',
            interactive: 'Interativo',
            trending: 'Trending'
        };
        return badges[badge] || badge;
    }
    
    formatNumber(num) {
        if (num >= 1000) {
            return (num / 1000).toFixed(1) + 'k';
        }
        return num.toString();
    }
    
    viewProduct(id) {
        this.currentProduct = PRODUCTS.find(p => p.id === id);
        if (this.currentProduct) {
            this.showPage('product');
        }
    }
    
    renderProductDetails() {
        if (!this.currentProduct) return;
        
        const product = this.currentProduct;
        const isFavorite = this.favorites.includes(product.id);
        
        // Update product information
        document.getElementById('product-name').textContent = product.title;
        document.getElementById('product-desc').textContent = product.description;
        document.getElementById('product-price').textContent = `$${product.price}`;
        
        // Update images
        const mainImage = document.getElementById('main-product-image');
        mainImage.src = product.images[0];
        mainImage.alt = product.title;
        
        const thumbnails = document.querySelectorAll('.thumbnail');
        thumbnails.forEach((thumb, index) => {
            if (product.images[index]) {
                thumb.src = product.images[index];
                thumb.alt = `${product.title} - Image ${index + 1}`;
                thumb.style.display = 'block';
                thumb.onclick = () => {
                    mainImage.src = product.images[index];
                    thumbnails.forEach(t => t.classList.remove('active'));
                    thumb.classList.add('active');
                };
            } else {
                thumb.style.display = 'none';
            }
        });
        
        // Update favorite button
        const favBtn = document.getElementById('fav-toggle');
        if (favBtn) {
            favBtn.classList.toggle('active', isFavorite);
            favBtn.title = isFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos';
        }
        
        // Update badges
        const badgesContainer = document.querySelector('.product-badges');
        if (badgesContainer && product.badges) {
            badgesContainer.innerHTML = product.badges.map(badge => 
                `<span class="badge ${badge}">${this.getBadgeText(badge)}</span>`
            ).join('');
        }
        
        // Update stats
        const statsContainer = document.querySelector('.product-stats');
        if (statsContainer) {
            statsContainer.innerHTML = `
                <div class="stat">
                    <i class="fas fa-download"></i>
                    <span>${this.formatNumber(product.downloads)} downloads</span>
                </div>
                <div class="stat">
                    <i class="fas fa-star"></i>
                    <span>${product.rating} (234 reviews)</span>
                </div>
                <div class="stat">
                    <i class="fas fa-file-powerpoint"></i>
                    <span>PowerPoint & Google Slides</span>
                </div>
            `;
        }
        
        // Update price info
        const priceSection = document.querySelector('.price-info');
        if (priceSection) {
            const discount = product.originalPrice ? Math.round((1 - product.price / product.originalPrice) * 100) : 0;
            priceSection.innerHTML = `
                <span class="current-price">$${product.price}</span>
                ${product.originalPrice ? `<span class="original-price">$${product.originalPrice}</span>` : ''}
                ${discount > 0 ? `<span class="discount-badge">${discount}% OFF</span>` : ''}
            `;
        }
    }
    
    toggleFavorite(id) {
        const index = this.favorites.indexOf(id);
        if (index > -1) {
            this.favorites.splice(index, 1);
            this.showNotification('Removido dos favoritos', 'info');
        } else {
            this.favorites.push(id);
            this.showNotification('Adicionado aos favoritos!', 'success');
        }
        
        this.saveToStorage('favorites', this.favorites);
        this.updateBadges();
        
        // Update UI
        if (this.currentPage === 'main') {
            this.renderProducts();
        } else if (this.currentPage === 'product' && this.currentProduct?.id === id) {
            this.renderProductDetails();
        } else if (this.currentPage === 'favorites') {
            this.renderFavorites();
        }
    }
    
    addToCart(id, quantity = 1) {
        const product = PRODUCTS.find(p => p.id === id);
        if (!product) return;
        
        const existingItem = this.cart.find(item => item.id === id);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.cart.push({ ...product, quantity });
        }
        
        this.saveToStorage('cart', this.cart);
        this.updateBadges();
    }
    
    updateCartQuantity(id, change) {
        const item = this.cart.find(item => item.id === id);
        if (item) {
            item.quantity = Math.max(1, item.quantity + change);
            this.saveToStorage('cart', this.cart);
            this.updateBadges();
            this.renderCart();
        }
    }
    
    removeFromCart(id) {
        this.cart = this.cart.filter(item => item.id !== id);
        this.saveToStorage('cart', this.cart);
        this.updateBadges();
        this.renderCart();
        this.showNotification('Item removido do carrinho', 'info');
    }
    
    clearCart() {
        this.cart = [];
        this.saveToStorage('cart', this.cart);
        this.updateBadges();
        this.renderCart();
    }
    
    clearFavorites() {
        this.favorites = [];
        this.saveToStorage('favorites', this.favorites);
        this.updateBadges();
        this.renderFavorites();
    }
    
    renderCart() {
        const container = document.getElementById('cart-items-container');
        const emptyState = document.getElementById('empty-cart-state');
        const summary = document.querySelector('.cart-summary');
        
        if (!container) return;
        
        if (this.cart.length === 0) {
            container.innerHTML = '';
            if (emptyState) emptyState.style.display = 'block';
            if (summary) summary.style.display = 'none';
            return;
        }
        
        if (emptyState) emptyState.style.display = 'none';
        if (summary) summary.style.display = 'block';
        
        container.innerHTML = this.cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.title}" loading="lazy">
                </div>
                <div class="cart-item-info">
                    <h4>${item.title}</h4>
                    <p>Template premium • ${item.category}</p>
                </div>
                <div class="cart-quantity">
                    <button onclick="app.updateCartQuantity('${item.id}', -1)" class="qty-btn">
                        <i class="fas fa-minus"></i>
                    </button>
                    <span class="quantity">${item.quantity}</span>
                    <button onclick="app.updateCartQuantity('${item.id}', 1)" class="qty-btn">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
                <div class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
                <button onclick="app.removeFromCart('${item.id}')" class="remove-btn" title="Remover item">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `).join('');
        
        this.updateCartSummary();
    }
    
    updateCartSummary() {
        const subtotal = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const discount = subtotal * 0.1; // 10% discount
        const total = subtotal - discount;
        
        const subtotalEl = document.getElementById('subtotal');
        const discountEl = document.getElementById('discount');
        const totalEl = document.getElementById('total');
        const checkoutBtn = document.getElementById('checkout-btn');
        
        if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
        if (discountEl) discountEl.textContent = `-$${discount.toFixed(2)}`;
        if (totalEl) totalEl.textContent = `$${total.toFixed(2)}`;
        if (checkoutBtn) {
            checkoutBtn.innerHTML = `
                <i class="fas fa-lock"></i>
                <span>Finalizar Compra • $${total.toFixed(2)}</span>
            `;
        }
    }
    
    renderFavorites() {
        const grid = document.getElementById('favorites-grid');
        const emptyState = document.getElementById('empty-favorites-state');
        
        if (!grid) return;
        
        const favoriteProducts = PRODUCTS.filter(p => this.favorites.includes(p.id));
        
        if (favoriteProducts.length === 0) {
            grid.innerHTML = '';
            if (emptyState) emptyState.style.display = 'block';
            return;
        }
        
        if (emptyState) emptyState.style.display = 'none';
        
        grid.innerHTML = favoriteProducts.map(product => this.createProductCard(product)).join('');
        
        // Add event listeners
        grid.querySelectorAll('.product-card').forEach(card => {
            card.addEventListener('click', (e) => {
                if (!e.target.closest('.favorite-btn')) {
                    const productId = card.getAttribute('data-product-id');
                    this.viewProduct(productId);
                }
            });
        });
        
        grid.querySelectorAll('.favorite-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const productId = btn.getAttribute('data-product-id');
                this.toggleFavorite(productId);
            });
        });
    }
    
    updateBadges() {
        const cartCount = this.cart.reduce((sum, item) => sum + item.quantity, 0);
        const favCount = this.favorites.length;
        
        const cartBadge = document.getElementById('cart-badge');
        const favBadge = document.getElementById('fav-badge');
        
        if (cartBadge) {
            cartBadge.textContent = cartCount;
            cartBadge.classList.toggle('show', cartCount > 0);
        }
        
        if (favBadge) {
            favBadge.textContent = favCount;
            favBadge.classList.toggle('show', favCount > 0);
        }
    }
    
    applyPromoCode() {
        const promoInput = document.getElementById('promo-input');
        if (!promoInput) return;
        
        const code = promoInput.value.trim().toLowerCase();
        const validCodes = {
            'welcome10': 10,
            'save20': 20,
            'premium': 15
        };
        
        if (validCodes[code]) {
            this.showNotification(`Código promocional aplicado! ${validCodes[code]}% de desconto`, 'success');
            promoInput.value = '';
            this.updateCartSummary();
        } else {
            this.showNotification('Código promocional inválido', 'error');
        }
    }
    
    processCheckout() {
        if (this.cart.length === 0) {
            this.showNotification('Seu carrinho está vazio', 'warning');
            return;
        }
        
        // Simulate checkout process
        this.showNotification('Processando pagamento...', 'info');
        
        setTimeout(() => {
            this.showNotification('Compra realizada com sucesso! Obrigado!', 'success');
            this.clearCart();
            this.showPage('main');
        }, 2000);
    }
    
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-${this.getNotificationIcon(type)}"></i>
                <span>${message}</span>
            </div>
            <button class="notification-close">
                <i class="fas fa-times"></i>
            </button>
        `;
        
        // Add styles
        Object.assign(notification.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            background: this.getNotificationColor(type),
            color: 'white',
            padding: '1rem 1.5rem',
            borderRadius: '12px',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
            zIndex: '10000',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            maxWidth: '400px',
            animation: 'slideInRight 0.3s ease'
        });
        
        document.body.appendChild(notification);
        
        // Auto remove
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 5000);
        
        // Manual close
        notification.querySelector('.notification-close').onclick = () => {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        };
    }
    
    getNotificationIcon(type) {
        const icons = {
            success: 'check-circle',
            error: 'exclamation-triangle',
            warning: 'exclamation-circle',
            info: 'info-circle'
        };
        return icons[type] || 'info-circle';
    }
    
    getNotificationColor(type) {
        const colors = {
            success: '#10b981',
            error: '#ef4444',
            warning: '#f59e0b',
            info: '#6366f1'
        };
        return colors[type] || '#6366f1';
    }
    
    showConfirmDialog(title, message, onConfirm) {
        const dialog = document.createElement('div');
        dialog.className = 'confirm-dialog-overlay';
        dialog.innerHTML = `
            <div class="confirm-dialog">
                <h3>${title}</h3>
                <p>${message}</p>
                <div class="dialog-actions">
                    <button class="secondary-btn cancel-btn">Cancelar</button>
                    <button class="primary-btn confirm-btn">Confirmar</button>
                </div>
            </div>
        `;
        
        // Add styles
        Object.assign(dialog.style, {
            position: 'fixed',
            inset: '0',
            background: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: '10000',
            backdropFilter: 'blur(5px)'
        });
        
        const dialogContent = dialog.querySelector('.confirm-dialog');
        Object.assign(dialogContent.style, {
            background: 'var(--bg-secondary)',
            borderRadius: '16px',
            padding: '2rem',
            maxWidth: '400px',
            textAlign: 'center',
            border: '1px solid var(--border-color)'
        });
        
        document.body.appendChild(dialog);
        
        dialog.querySelector('.cancel-btn').onclick = () => dialog.remove();
        dialog.querySelector('.confirm-btn').onclick = () => {
            onConfirm();
            dialog.remove();
        };
        
        dialog.onclick = (e) => {
            if (e.target === dialog) dialog.remove();
        };
    }
}

// Initialize the app
const app = new AppState();

// Make functions globally available for inline handlers
window.app = app;

// Add some additional animations and effects
document.addEventListener('DOMContentLoaded', () => {
    // Add smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add intersection observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fade-up 0.6s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    setTimeout(() => {
        document.querySelectorAll('.product-card, .category-card, .promo-card').forEach(el => {
            observer.observe(el);
        });
    }, 100);
    
    // Add loading states
    const addLoadingState = (element) => {
        if (element) {
            element.style.opacity = '0.7';
            element.style.pointerEvents = 'none';
        }
    };
    
    const removeLoadingState = (element) => {
        if (element) {
            element.style.opacity = '1';
            element.style.pointerEvents = 'auto';
        }
    };
    
    // Enhanced image loading
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('load', () => {
            img.style.opacity = '1';
        });
        
        img.addEventListener('error', () => {
            img.src = 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop&crop=center';
        });
    });
});

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close dialogs or go back
        const dialogs = document.querySelectorAll('.confirm-dialog-overlay');
        if (dialogs.length > 0) {
            dialogs.forEach(dialog => dialog.remove());
        } else if (app.currentPage !== 'landing') {
            if (app.currentPage === 'product') {
                app.showPage('main');
            } else if (app.currentPage !== 'main') {
                app.showPage('main');
            }
        }
    }
    
    if (e.key === '/' && !e.target.matches('input, textarea')) {
        e.preventDefault();
        const searchInput = document.getElementById('search-input');
        if (searchInput) {
            searchInput.focus();
        }
    }
});

// Performance optimizations
const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

// Add resize handler for responsive adjustments
window.addEventListener('resize', debounce(() => {
    // Trigger re-render if needed
    if (app.currentPage === 'main') {
        app.renderProducts();
    }
}, 250));

// Service Worker registration for PWA capabilities (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // navigator.serviceWorker.register('/sw.js').catch(console.error);
    });
}
