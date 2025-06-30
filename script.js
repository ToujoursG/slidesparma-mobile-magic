
// Products Data
const PRODUCTS = [
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
        ]
    }
];

// App State
let currentPage = 'landing';
let currentProduct = null;
let currentCategory = 'all';
let searchTerm = '';
let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
let cart = JSON.parse(localStorage.getItem('cart') || '[]');

// Page Management
function showPage(pageName) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(`${pageName}-page`).classList.add('active');
    currentPage = pageName;
    updateNavigation();
    
    if (pageName === 'main') {
        renderProducts();
    } else if (pageName === 'product') {
        renderProductDetails();
    } else if (pageName === 'cart') {
        renderCart();
    } else if (pageName === 'favorites') {
        renderFavorites();
    }
}

function updateNavigation() {
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    const activeNav = document.querySelector(`[data-nav="${getNavType()}"]`);
    if (activeNav) {
        activeNav.classList.add('active');
    }
}

function getNavType() {
    switch(currentPage) {
        case 'main': return 'home';
        case 'cart': return 'cart';
        case 'favorites': return 'favorites';
        default: return 'home';
    }
}

// Product Rendering
function renderProducts() {
    const grid = document.getElementById('products-grid');
    const filtered = PRODUCTS.filter(product => {
        const matchesCategory = currentCategory === 'all' || product.category === currentCategory;
        const matchesSearch = !searchTerm || 
            product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    grid.innerHTML = filtered.map(product => `
        <div class="product-card" onclick="viewProduct('${product.id}')">
            <div class="product-image">
                <img src="${product.image}" alt="${product.title}">
                <button class="heart-btn ${favorites.includes(product.id) ? 'active' : ''}" 
                        onclick="event.stopPropagation(); toggleFavorite('${product.id}')">
                    ${favorites.includes(product.id) ? '♥' : '♡'}
                </button>
            </div>
            <div class="product-details">
                <h4>${product.title}</h4>
                <p>${product.description}</p>
                <div class="product-footer">
                    <span class="product-price">$${product.price}</span>
                    <button class="view-btn" onclick="event.stopPropagation(); viewProduct('${product.id}')">
                        Ver Detalhes
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function renderProductDetails() {
    if (!currentProduct) return;
    
    document.getElementById('product-name').textContent = currentProduct.title;
    document.getElementById('product-desc').textContent = currentProduct.description;
    document.getElementById('product-price').textContent = `$${currentProduct.price}`;
    
    const mainImage = document.getElementById('main-product-image');
    mainImage.src = currentProduct.images[0];
    
    const thumbnails = document.querySelectorAll('.thumb');
    thumbnails.forEach((thumb, index) => {
        if (currentProduct.images[index]) {
            thumb.src = currentProduct.images[index];
            thumb.onclick = () => {
                mainImage.src = currentProduct.images[index];
                thumbnails.forEach(t => t.classList.remove('active'));
                thumb.classList.add('active');
            };
        }
    });
    
    const favBtn = document.getElementById('fav-toggle');
    favBtn.textContent = favorites.includes(currentProduct.id) ? '♥' : '♡';
    favBtn.classList.toggle('active', favorites.includes(currentProduct.id));
}

function renderCart() {
    const container = document.getElementById('cart-items-container');
    const emptyState = document.getElementById('empty-cart-state');
    const paymentBtn = document.getElementById('payment-btn');
    
    if (cart.length === 0) {
        container.innerHTML = '';
        emptyState.style.display = 'block';
        paymentBtn.textContent = 'MAKE PAYMENT | $0.00';
        return;
    }
    
    emptyState.style.display = 'none';
    
    container.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.title}">
            </div>
            <div class="cart-item-info">
                <h4>${item.title}</h4>
                <p>Produto premium</p>
            </div>
            <div class="cart-qty-controls">
                <button onclick="updateCartQuantity('${item.id}', -1)">−</button>
                <span>${item.quantity}</span>
                <button onclick="updateCartQuantity('${item.id}', 1)">+</button>
            </div>
            <div class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
        </div>
    `).join('');
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    paymentBtn.textContent = `MAKE PAYMENT | $${(total * 0.9).toFixed(2)}`;
}

function renderFavorites() {
    const grid = document.getElementById('favorites-grid');
    const emptyState = document.getElementById('empty-favorites-state');
    
    const favoriteProducts = PRODUCTS.filter(p => favorites.includes(p.id));
    
    if (favoriteProducts.length === 0) {
        grid.innerHTML = '';
        emptyState.style.display = 'block';
        return;
    }
    
    emptyState.style.display = 'none';
    
    grid.innerHTML = favoriteProducts.map(product => `
        <div class="product-card" onclick="viewProduct('${product.id}')">
            <div class="product-image">
                <img src="${product.image}" alt="${product.title}">
                <button class="heart-btn active" onclick="event.stopPropagation(); toggleFavorite('${product.id}')">♥</button>
            </div>
            <div class="product-details">
                <h4>${product.title}</h4>
                <p>${product.description}</p>
                <div class="product-footer">
                    <span class="product-price">$${product.price}</span>
                    <button class="view-btn">Ver Detalhes</button>
                </div>
            </div>
        </div>
    `).join('');
}

// Actions
function viewProduct(id) {
    currentProduct = PRODUCTS.find(p => p.id === id);
    showPage('product');
}

function toggleFavorite(id) {
    if (favorites.includes(id)) {
        favorites = favorites.filter(fav => fav !== id);
    } else {
        favorites.push(id);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    updateBadges();
    
    if (currentPage === 'main') {
        renderProducts();
    } else if (currentPage === 'product' && currentProduct?.id === id) {
        renderProductDetails();
    } else if (currentPage === 'favorites') {
        renderFavorites();
    }
}

function addToCart(id) {
    const product = PRODUCTS.find(p => p.id === id);
    const existingItem = cart.find(item => item.id === id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateBadges();
}

function updateCartQuantity(id, change) {
    const item = cart.find(item => item.id === id);
    if (item) {
        item.quantity = Math.max(1, item.quantity + change);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateBadges();
        renderCart();
    }
}

function clearCart() {
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateBadges();
    renderCart();
}

function clearFavorites() {
    favorites = [];
    localStorage.setItem('favorites', JSON.stringify(favorites));
    updateBadges();
    renderFavorites();
}

function updateBadges() {
    const cartBadge = document.querySelector('.cart-badge');
    const favBadge = document.querySelector('.fav-badge');
    
    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartBadge.textContent = cartCount;
    cartBadge.classList.toggle('show', cartCount > 0);
    
    favBadge.textContent = favorites.length;
    favBadge.classList.toggle('show', favorites.length > 0);
}

function changeQty(change) {
    const qtyDisplay = document.getElementById('qty');
    let current = parseInt(qtyDisplay.textContent);
    current = Math.max(1, current + change);
    qtyDisplay.textContent = current;
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Landing page
    document.getElementById('start-btn')?.addEventListener('click', () => showPage('main'));
    
    // Navigation
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const nav = btn.getAttribute('data-nav');
            if (nav === 'home') showPage('main');
            else if (nav === 'cart') showPage('cart');
            else if (nav === 'favorites') showPage('favorites');
        });
    });
    
    // Back buttons
    document.getElementById('back-btn')?.addEventListener('click', () => showPage('landing'));
    document.getElementById('back-from-product')?.addEventListener('click', () => showPage('main'));
    document.getElementById('back-from-cart')?.addEventListener('click', () => showPage('main'));
    document.getElementById('back-from-favorites')?.addEventListener('click', () => showPage('main'));
    
    // Search
    document.getElementById('search-input')?.addEventListener('input', (e) => {
        searchTerm = e.target.value;
        if (currentPage === 'main') renderProducts();
    });
    
    // Categories
    document.querySelectorAll('.pill').forEach(pill => {
        pill.addEventListener('click', () => {
            currentCategory = pill.getAttribute('data-category');
            document.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            if (currentPage === 'main') renderProducts();
        });
    });
    
    // Product actions
    document.getElementById('add-to-cart')?.addEventListener('click', () => {
        if (currentProduct) {
            const qty = parseInt(document.getElementById('qty').textContent);
            for (let i = 0; i < qty; i++) {
                addToCart(currentProduct.id);
            }
        }
    });
    
    document.getElementById('fav-toggle')?.addEventListener('click', () => {
        if (currentProduct) {
            toggleFavorite(currentProduct.id);
        }
    });
    
    // Size selection
    document.querySelectorAll('.size-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
    
    // Cart actions
    document.getElementById('clear-cart')?.addEventListener('click', clearCart);
    document.getElementById('clear-favorites')?.addEventListener('click', clearFavorites);
    
    // Continue shopping
    document.querySelectorAll('.continue-btn').forEach(btn => {
        btn.addEventListener('click', () => showPage('main'));
    });
    
    // Payment
    document.getElementById('payment-btn')?.addEventListener('click', () => {
        alert('Pagamento processado com sucesso!');
        clearCart();
        showPage('main');
    });
    
    // Initialize
    updateBadges();
    renderProducts();
});

// Make functions global for inline handlers
window.viewProduct = viewProduct;
window.toggleFavorite = toggleFavorite;
window.addToCart = addToCart;
window.updateCartQuantity = updateCartQuantity;
window.changeQty = changeQty;
