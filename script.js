
// Sistema de dados dos produtos
const PRODUCTS_DATA = [
    {
        id: 'business-pro',
        category: 'business',
        title: 'Business Pro',
        description: 'Apresentações profissionais para negócios',
        price: 29.99,
        originalPrice: 49.99,
        image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop&crop=center',
        images: [
            'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop&crop=center',
            'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&crop=center',
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop&crop=center'
        ],
        features: [
            'Templates profissionais modernos',
            'Gráficos e charts inclusos',
            'Layouts responsivos',
            'Fácil personalização',
            'Suporte técnico incluído'
        ]
    },
    {
        id: 'corporate-elite',
        category: 'business',
        title: 'Corporate Elite',
        description: 'Templates corporativos premium',
        price: 39.99,
        originalPrice: 59.99,
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop&crop=center',
        images: [
            'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop&crop=center',
            'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=250&fit=crop&crop=center',
            'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=250&fit=crop&crop=center'
        ],
        features: [
            'Design corporativo elegante',
            'Paleta de cores premium',
            'Animações suaves',
            'Múltiplos layouts',
            'Guia de uso detalhado'
        ]
    },
    {
        id: 'startup-pitch',
        category: 'business',
        title: 'Startup Pitch',
        description: 'Apresentações para startups',
        price: 44.99,
        originalPrice: 69.99,
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop&crop=center',
        images: [
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop&crop=center',
            'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=250&fit=crop&crop=center',
            'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=400&h=250&fit=crop&crop=center'
        ],
        features: [
            'Ideal para pitch decks',
            'Estrutura otimizada para investidores',
            'Gráficos financeiros',
            'Storytelling visual',
            'Templates para diferentes setores'
        ]
    },
    {
        id: 'education-template',
        category: 'education',
        title: 'Education Pro',
        description: 'Templates para apresentações educacionais',
        price: 24.99,
        originalPrice: 39.99,
        image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop&crop=center',
        images: [
            'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop&crop=center',
            'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=250&fit=crop&crop=center',
            'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=400&h=250&fit=crop&crop=center'
        ],
        features: [
            'Design educativo e limpo',
            'Perfeito para aulas e seminários',
            'Elementos interativos',
            'Fácil leitura',
            'Cores amigáveis aos olhos'
        ]
    },
    {
        id: 'creative-design',
        category: 'creative',
        title: 'Creative Master',
        description: 'Templates criativos e inovadores',
        price: 34.99,
        originalPrice: 54.99,
        image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=400&h=250&fit=crop&crop=center',
        images: [
            'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=400&h=250&fit=crop&crop=center',
            'https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=250&fit=crop&crop=center',
            'https://images.unsplash.com/photo-1609921141835-710b7fa6e438?w=400&h=250&fit=crop&crop=center'
        ],
        features: [
            'Designs únicos e criativos',
            'Ideal para portfolios',
            'Elementos visuais impactantes',
            'Layouts inovadores',
            'Inspiração garantida'
        ]
    },
    {
        id: 'marketing-master',
        category: 'business',
        title: 'Marketing Master',
        description: 'Templates focados em marketing e vendas',
        price: 36.99,
        originalPrice: 56.99,
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&crop=center',
        images: [
            'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&crop=center',
            'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=250&fit=crop&crop=center',
            'https://images.unsplash.com/photo-1553484771-cc0d9b8c2b33?w=400&h=250&fit=crop&crop=center'
        ],
        features: [
            'Foco em conversão',
            'CTAs estratégicos',
            'Gráficos de performance',
            'Design persuasivo',
            'Métricas visuais'
        ]
    }
];

// Sistema de gerenciamento de estado
class AppState {
    constructor() {
        this.favorites = this.loadFavorites();
        this.cart = this.loadCart();
        this.currentProduct = null;
        this.currentCategory = 'all';
        this.searchTerm = '';
        this.isLoading = true;
        
        // Bind methods
        this.updateUI = this.updateUI.bind(this);
        this.showToast = this.showToast.bind(this);
    }

    // Local Storage Management
    loadFavorites() {
        const saved = localStorage.getItem('slidesparma_favorites');
        return saved ? JSON.parse(saved) : [];
    }

    saveFavorites() {
        localStorage.setItem('slidesparma_favorites', JSON.stringify(this.favorites));
        this.updateUI();
    }

    loadCart() {
        const saved = localStorage.getItem('slidesparma_cart');
        return saved ? JSON.parse(saved) : [];
    }

    saveCart() {
        localStorage.setItem('slidesparma_cart', JSON.stringify(this.cart));
        this.updateUI();
    }

    // Favorites Management
    addFavorite(productId) {
        if (!this.favorites.includes(productId)) {
            this.favorites.push(productId);
            this.saveFavorites();
            this.showToast('Produto adicionado aos favoritos!', 'success');
            return true;
        }
        return false;
    }

    removeFavorite(productId) {
        const index = this.favorites.indexOf(productId);
        if (index > -1) {
            this.favorites.splice(index, 1);
            this.saveFavorites();
            this.showToast('Produto removido dos favoritos', 'info');
            return true;
        }
        return false;
    }

    isFavorite(productId) {
        return this.favorites.includes(productId);
    }

    // Cart Management
    addToCart(productId) {
        const product = PRODUCTS_DATA.find(p => p.id === productId);
        if (!product) return false;

        const existingItem = this.cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.cart.push({
                id: productId,
                quantity: 1,
                ...product
            });
        }
        
        this.saveCart();
        this.showToast('Produto adicionado ao carrinho!', 'success');
        return true;
    }

    removeFromCart(productId) {
        this.cart = this.cart.filter(item => item.id !== productId);
        this.saveCart();
        this.showToast('Produto removido do carrinho', 'info');
    }

    clearCart() {
        this.cart = [];
        this.saveCart();
        this.showToast('Carrinho limpo', 'info');
    }

    getCartTotal() {
        return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    getCartItemCount() {
        return this.cart.reduce((total, item) => total + item.quantity, 0);
    }

    // UI Updates
    updateUI() {
        this.updateFavoritesCount();
        this.updateCartCount();
    }

    updateFavoritesCount() {
        const countElement = document.querySelector('.favorites-count');
        if (countElement) {
            const count = this.favorites.length;
            countElement.textContent = count.toString();
            
            if (count > 0) {
                countElement.classList.add('show');
            } else {
                countElement.classList.remove('show');
            }
        }
    }

    updateCartCount() {
        const countElement = document.querySelector('.cart-count');
        if (countElement) {
            const count = this.getCartItemCount();
            countElement.textContent = count.toString();
            
            if (count > 0) {
                countElement.classList.add('show');
            } else {
                countElement.classList.remove('show');
            }
        }
    }

    // Toast Notifications
    showToast(message, type = 'info') {
        const container = document.getElementById('toast-container');
        if (!container) return;

        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.textContent = message;

        container.appendChild(toast);

        // Auto remove after 3 seconds
        setTimeout(() => {
            toast.classList.add('removing');
            setTimeout(() => {
                if (container.contains(toast)) {
                    container.removeChild(toast);
                }
            }, 300);
        }, 3000);
    }

    // Product Management
    getProduct(productId) {
        return PRODUCTS_DATA.find(p => p.id === productId);
    }

    getFilteredProducts() {
        return PRODUCTS_DATA.filter(product => {
            const matchesCategory = this.currentCategory === 'all' || product.category === this.currentCategory;
            const matchesSearch = !this.searchTerm || 
                product.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                product.description.toLowerCase().includes(this.searchTerm.toLowerCase());
            
            return matchesCategory && matchesSearch;
        });
    }

    getFavoriteProducts() {
        return PRODUCTS_DATA.filter(product => this.favorites.includes(product.id));
    }
}

// Initialize app state
const appState = new AppState();

// Page Management
const PageManager = {
    currentPage: 'landing',

    showPage(pageName) {
        console.log(`Switching to page: ${pageName}`);
        
        // Hide all pages
        const pages = document.querySelectorAll('.page');
        pages.forEach(page => {
            page.classList.remove('active');
            page.style.display = 'none';
        });

        // Show target page
        const targetPage = document.getElementById(`${pageName}-page`);
        if (targetPage) {
            targetPage.classList.add('active');
            targetPage.style.display = 'block';
            this.currentPage = pageName;

            // Update navigation
            this.updateNavigation(pageName);

            // Load page-specific content
            switch(pageName) {
                case 'main':
                    this.loadMainPage();
                    break;
                case 'product':
                    this.loadProductPage();
                    break;
                case 'cart':
                    this.loadCartPage();
                    break;
                case 'favorites':
                    this.loadFavoritesPage();
                    break;
            }
        }
    },

    updateNavigation(currentPage) {
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(nav => nav.classList.remove('active'));

        const activeNav = document.querySelector(`[data-nav="${this.getNavType(currentPage)}"]`);
        if (activeNav) {
            activeNav.classList.add('active');
        }
    },

    getNavType(pageName) {
        switch(pageName) {
            case 'main': return 'home';
            case 'cart': return 'cart';
            case 'favorites': return 'favorites';
            default: return 'home';
        }
    },

    loadMainPage() {
        this.renderProducts();
    },

    loadProductPage() {
        if (appState.currentProduct) {
            this.renderProductDetails(appState.currentProduct);
        }
    },

    loadCartPage() {
        this.renderCartItems();
    },

    loadFavoritesPage() {
        this.renderFavoriteProducts();
    },

    // Product Rendering
    renderProducts() {
        const grid = document.getElementById('products-grid');
        if (!grid) return;

        const products = appState.getFilteredProducts();
        
        if (products.length === 0) {
            grid.innerHTML = `
                <div class="empty-state" style="grid-column: 1 / -1;">
                    <div class="empty-icon">🔍</div>
                    <h3>Nenhum produto encontrado</h3>
                    <p>Tente ajustar os filtros ou termos de busca</p>
                </div>
            `;
            return;
        }

        grid.innerHTML = products.map(product => `
            <div class="product-card" data-category="${product.category}" onclick="PageManager.viewProduct('${product.id}')">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.title}" loading="lazy">
                    <button class="favorite-btn ${appState.isFavorite(product.id) ? 'favorited' : ''}" 
                            data-product-id="${product.id}" 
                            onclick="event.stopPropagation(); PageManager.toggleFavorite('${product.id}')">
                        ${appState.isFavorite(product.id) ? '♥' : '♡'}
                    </button>
                </div>
                <div class="product-info">
                    <h4>${product.title}</h4>
                    <p>${product.description}</p>
                    <div class="product-footer">
                        <span class="price">$${product.price}</span>
                        <span class="original-price">$${product.originalPrice}</span>
                        <button class="details-btn" onclick="event.stopPropagation(); PageManager.viewProduct('${product.id}')">
                            Ver Detalhes
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    },

    renderProductDetails(product) {
        document.getElementById('product-title').textContent = product.title;
        document.getElementById('product-description').textContent = product.description;
        document.getElementById('product-price').textContent = `$${product.price}`;
        
        // Main image
        const mainImage = document.getElementById('product-main-image');
        mainImage.src = product.images[0];
        mainImage.alt = product.title;

        // Thumbnails
        const thumbnails = document.querySelectorAll('.thumbnail');
        thumbnails.forEach((thumb, index) => {
            if (product.images[index]) {
                thumb.src = product.images[index];
                thumb.alt = `${product.title} - Imagem ${index + 1}`;
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

        // Features
        const featuresList = document.getElementById('product-features-list');
        featuresList.innerHTML = product.features.map(feature => 
            `<li>${feature}</li>`
        ).join('');

        // Favorite button
        const favoriteBtn = document.getElementById('product-favorite-btn');
        favoriteBtn.textContent = appState.isFavorite(product.id) ? '♥' : '♡';
        favoriteBtn.className = `favorite-toggle ${appState.isFavorite(product.id) ? 'favorited' : ''}`;
    },

    renderCartItems() {
        const cartItems = document.getElementById('cart-items');
        const emptyCart = document.getElementById('empty-cart');
        const cartSummary = document.getElementById('cart-summary');

        if (appState.cart.length === 0) {
            cartItems.innerHTML = '';
            emptyCart.style.display = 'block';
            cartSummary.style.display = 'none';
            return;
        }

        emptyCart.style.display = 'none';
        cartSummary.style.display = 'block';

        cartItems.innerHTML = appState.cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.title}" loading="lazy">
                </div>
                <div class="cart-item-info">
                    <h4>${item.title}</h4>
                    <p>Quantidade: ${item.quantity}</p>
                </div>
                <div class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
                <button class="remove-item-btn" onclick="PageManager.removeFromCart('${item.id}')">
                    ×
                </button>
            </div>
        `).join('');

        // Update summary
        const subtotal = appState.getCartTotal();
        const discount = subtotal * 0.1; // 10% discount
        const total = subtotal - discount;

        document.getElementById('cart-subtotal').textContent = `$${subtotal.toFixed(2)}`;
        document.getElementById('cart-discount').textContent = `-$${discount.toFixed(2)}`;
        document.getElementById('cart-total').textContent = `$${total.toFixed(2)}`;
    },

    renderFavoriteProducts() {
        const grid = document.getElementById('favorites-grid');
        const emptyFavorites = document.getElementById('empty-favorites');
        
        const favoriteProducts = appState.getFavoriteProducts();

        if (favoriteProducts.length === 0) {
            emptyFavorites.style.display = 'block';
            grid.innerHTML = '';
            return;
        }

        emptyFavorites.style.display = 'none';
        
        grid.innerHTML = favoriteProducts.map(product => `
            <div class="product-card" data-category="${product.category}" onclick="PageManager.viewProduct('${product.id}')">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.title}" loading="lazy">
                    <button class="favorite-btn favorited" 
                            data-product-id="${product.id}" 
                            onclick="event.stopPropagation(); PageManager.toggleFavorite('${product.id}')">
                        ♥
                    </button>
                </div>
                <div class="product-info">
                    <h4>${product.title}</h4>
                    <p>${product.description}</p>
                    <div class="product-footer">
                        <span class="price">$${product.price}</span>
                        <span class="original-price">$${product.originalPrice}</span>
                        <button class="details-btn" onclick="event.stopPropagation(); PageManager.viewProduct('${product.id}')">
                            Ver Detalhes
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    },

    // Actions
    viewProduct(productId) {
        const product = appState.getProduct(productId);
        if (product) {
            appState.currentProduct = product;
            this.showPage('product');
        }
    },

    toggleFavorite(productId) {
        if (appState.isFavorite(productId)) {
            appState.removeFavorite(productId);
        } else {
            appState.addFavorite(productId);
        }

        // Update UI based on current page
        if (this.currentPage === 'main') {
            this.renderProducts();
        } else if (this.currentPage === 'favorites') {
            this.renderFavoriteProducts();
        } else if (this.currentPage === 'product' && appState.currentProduct?.id === productId) {
            const favoriteBtn = document.getElementById('product-favorite-btn');
            if (favoriteBtn) {
                favoriteBtn.textContent = appState.isFavorite(productId) ? '♥' : '♡';
                favoriteBtn.className = `favorite-toggle ${appState.isFavorite(productId) ? 'favorited' : ''}`;
            }
        }
    },

    addToCart(productId) {
        appState.addToCart(productId);
    },

    removeFromCart(productId) {
        appState.removeFromCart(productId);
        this.renderCartItems();
    },

    clearCart() {
        if (confirm('Tem certeza que deseja limpar o carrinho?')) {
            appState.clearCart();
            this.renderCartItems();
        }
    },

    clearFavorites() {
        if (confirm('Tem certeza que deseja limpar todos os favoritos?')) {
            appState.favorites = [];
            appState.saveFavorites();
            this.renderFavoriteProducts();
        }
    }
};

// Search and Filter Management
const SearchManager = {
    init() {
        const searchInput = document.getElementById('search-input');
        if (searchInput) {
            searchInput.addEventListener('input', this.handleSearch.bind(this));
        }

        // Category tabs
        const categoryTabs = document.querySelectorAll('.category-tab');
        categoryTabs.forEach(tab => {
            tab.addEventListener('click', this.handleCategoryChange.bind(this));
        });
    },

    handleSearch(event) {
        appState.searchTerm = event.target.value;
        if (PageManager.currentPage === 'main') {
            PageManager.renderProducts();
        }
    },

    handleCategoryChange(event) {
        const category = event.target.getAttribute('data-category');
        appState.currentCategory = category;

        // Update active tab
        document.querySelectorAll('.category-tab').forEach(tab => {
            tab.classList.remove('active');
        });
        event.target.classList.add('active');

        if (PageManager.currentPage === 'main') {
            PageManager.renderProducts();
        }
    }
};

// Modal Management
const ModalManager = {
    init() {
        const checkoutModal = document.getElementById('checkout-modal');
        const checkoutBtn = document.getElementById('checkout-btn');
        const modalClose = document.querySelector('.modal-close');
        const checkoutForm = document.getElementById('checkout-form');

        if (checkoutBtn) {
            checkoutBtn.addEventListener('click', this.openCheckoutModal.bind(this));
        }

        if (modalClose) {
            modalClose.addEventListener('click', this.closeCheckoutModal.bind(this));
        }

        if (checkoutModal) {
            checkoutModal.addEventListener('click', (e) => {
                if (e.target === checkoutModal) {
                    this.closeCheckoutModal();
                }
            });
        }

        if (checkoutForm) {
            checkoutForm.addEventListener('submit', this.handleCheckout.bind(this));
        }
    },

    openCheckoutModal() {
        const modal = document.getElementById('checkout-modal');
        const checkoutItems = document.getElementById('checkout-items');
        const checkoutTotal = document.getElementById('checkout-total');

        // Populate order summary
        checkoutItems.innerHTML = appState.cart.map(item => `
            <div class="checkout-item">
                <span>${item.title} (x${item.quantity})</span>
                <span>$${(item.price * item.quantity).toFixed(2)}</span>
            </div>
        `).join('');

        const total = appState.getCartTotal() * 0.9; // Apply 10% discount
        checkoutTotal.textContent = `$${total.toFixed(2)}`;

        modal.classList.add('active');
    },

    closeCheckoutModal() {
        const modal = document.getElementById('checkout-modal');
        modal.classList.remove('active');
    },

    handleCheckout(event) {
        event.preventDefault();
        
        const formData = new FormData(event.target);
        const customerData = {
            name: formData.get('customer-name') || document.getElementById('customer-name').value,
            email: formData.get('customer-email') || document.getElementById('customer-email').value,
            phone: formData.get('customer-phone') || document.getElementById('customer-phone').value
        };

        // Simulate order processing
        setTimeout(() => {
            appState.showToast('Pedido realizado com sucesso! 🎉', 'success');
            appState.clearCart();
            this.closeCheckoutModal();
            PageManager.showPage('main');
        }, 1000);

        appState.showToast('Processando pedido...', 'info');
    }
};

// Event Listeners Setup
function setupEventListeners() {
    // Landing page navigation
    const nextButton = document.getElementById('next-button');
    if (nextButton) {
        nextButton.addEventListener('click', () => {
            PageManager.showPage('main');
        });
    }

    // Back buttons
    const backButtons = {
        'back-from-product': 'main',
        'back-from-cart': 'main',
        'back-from-favorites': 'main'
    };

    Object.entries(backButtons).forEach(([buttonId, targetPage]) => {
        const button = document.getElementById(buttonId);
        if (button) {
            button.addEventListener('click', () => {
                PageManager.showPage(targetPage);
            });
        }
    });

    // Bottom navigation
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const navType = item.getAttribute('data-nav');
            
            switch(navType) {
                case 'home':
                    PageManager.showPage('main');
                    break;
                case 'cart':
                    PageManager.showPage('cart');
                    break;
                case 'favorites':
                    PageManager.showPage('favorites');
                    break;
            }
        });
    });

    // Product page actions
    const addToCartBtn = document.getElementById('add-to-cart-btn');
    const buyNowBtn = document.getElementById('buy-now-btn');
    const productFavoriteBtn = document.getElementById('product-favorite-btn');

    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', () => {
            if (appState.currentProduct) {
                PageManager.addToCart(appState.currentProduct.id);
            }
        });
    }

    if (buyNowBtn) {
        buyNowBtn.addEventListener('click', () => {
            if (appState.currentProduct) {
                PageManager.addToCart(appState.currentProduct.id);
                PageManager.showPage('cart');
            }
        });
    }

    if (productFavoriteBtn) {
        productFavoriteBtn.addEventListener('click', () => {
            if (appState.currentProduct) {
                PageManager.toggleFavorite(appState.currentProduct.id);
            }
        });
    }

    // Cart page actions
    const clearCartBtn = document.getElementById('clear-cart-btn');
    if (clearCartBtn) {
        clearCartBtn.addEventListener('click', () => {
            PageManager.clearCart();
        });
    }

    // Favorites page actions
    const clearFavoritesBtn = document.getElementById('clear-favorites-btn');
    if (clearFavoritesBtn) {
        clearFavoritesBtn.addEventListener('click', () => {
            PageManager.clearFavorites();
        });
    }

    // Continue shopping buttons
    const continueShoppingBtns = document.querySelectorAll('.continue-shopping-btn');
    continueShoppingBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            PageManager.showPage('main');
        });
    });

    // Order button
    const orderButton = document.querySelector('.order-button');
    if (orderButton) {
        orderButton.addEventListener('click', () => {
            appState.showToast('Função em desenvolvimento!', 'info');
        });
    }

    // Hero dots
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            dots.forEach(d => d.classList.remove('active'));
            dot.classList.add('active');
        });
    });
}

// App Initialization
function initializeApp() {
    console.log('Initializing SlidesParma App...');
    
    // Hide loading screen
    setTimeout(() => {
        const loadingScreen = document.getElementById('loading-screen');
        if (loadingScreen) {
            loadingScreen.classList.add('hidden');
        }
        appState.isLoading = false;
    }, 1500);

    // Setup all event listeners
    setupEventListeners();
    
    // Initialize managers
    SearchManager.init();
    ModalManager.init();
    
    // Initial UI update
    appState.updateUI();
    
    // Load main page content (for when user navigates directly)
    PageManager.renderProducts();
    
    console.log('App initialized successfully!');
    
    // Show welcome message
    setTimeout(() => {
        if (PageManager.currentPage === 'landing') {
            appState.showToast('Bem-vindo ao SlidesParma! 🎉', 'success');
        }
    }, 2000);
}

// Error Handling
window.addEventListener('error', (event) => {
    console.error('App Error:', event.error);
    appState.showToast('Ocorreu um erro. Tente recarregar a página.', 'error');
});

// Performance optimization
window.addEventListener('beforeunload', () => {
    // Save any pending data
    localStorage.setItem('slidesparma_last_visit', Date.now());
});

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}

// Expose PageManager for inline event handlers
window.PageManager = PageManager;

// Service Worker registration (for PWA capabilities)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}
