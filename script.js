
// Global State
let currentScreen = 'welcome';
let selectedProduct = null;
let cart = [];
let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
let activeCategory = 'business';
let productQuantity = 1;
let selectedSize = 'Standard';
let selectedSizePrice = 5;

// Products Database
const products = [
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

// Screen Navigation
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
    currentScreen = screenId;
}

function goToMenu() {
    showScreen('main-menu');
    renderProducts();
    renderPopularProducts();
    updateCartBadges();
}

function backToMenu() {
    showScreen('main-menu');
    renderProducts();
    updateCartBadges();
}

function goToCart() {
    showScreen('cart-screen');
    renderCart();
}

function goToCheckout() {
    showScreen('checkout-screen');
    renderCheckout();
}

// Product Functions
function renderProducts() {
    const grid = document.getElementById('products-grid');
    const filteredProducts = products.filter(product => {
        const matchesCategory = product.category === activeCategory;
        const searchTerm = document.getElementById('search-input').value.toLowerCase();
        const matchesSearch = product.name.toLowerCase().includes(searchTerm) ||
                             product.description.toLowerCase().includes(searchTerm);
        return matchesCategory && matchesSearch;
    });

    grid.innerHTML = filteredProducts.map(product => `
        <div class="product-card" onclick="selectProduct(${product.id})">
            <div class="product-image">
                <img src="https://images.unsplash.com/${product.image}?w=400" alt="${product.name}">
                <button class="favorite-btn ${favorites.includes(product.id) ? 'active' : ''}" 
                        onclick="event.stopPropagation(); toggleFavorite(${product.id})">
                    <i class="fas fa-heart"></i>
                </button>
            </div>
            <div class="product-details">
                <h4>${product.name}</h4>
                <p>${product.description}</p>
                <div class="product-footer">
                    <span class="product-price">$${product.price.toFixed(2)}</span>
                    <button class="btn-detail" onclick="event.stopPropagation(); selectProduct(${product.id})">
                        Ver Detalhes
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function renderPopularProducts() {
    const container = document.getElementById('popular-products');
    const popularProducts = products.filter(product => product.popular);
    
    container.innerHTML = popularProducts.map(product => `
        <div class="popular-item" onclick="selectProduct(${product.id})">
            <img src="https://images.unsplash.com/${product.image}?w=400" alt="${product.name}">
            <p>${product.name}</p>
        </div>
    `).join('');
}

function selectProduct(productId) {
    selectedProduct = products.find(p => p.id === productId);
    showScreen('product-detail');
    renderProductDetail();
}

function renderProductDetail() {
    if (!selectedProduct) return;

    document.getElementById('product-img').src = `https://images.unsplash.com/${selectedProduct.image}?w=800`;
    document.getElementById('product-img').alt = selectedProduct.name;
    document.getElementById('product-name').textContent = selectedProduct.name;
    document.getElementById('product-description').textContent = selectedProduct.description;
    
    // Reset product state
    productQuantity = 1;
    selectedSize = 'Standard';
    selectedSizePrice = 5;
    
    // Update favorite button
    const favoriteBtn = document.getElementById('favorite-btn');
    favoriteBtn.classList.toggle('active', favorites.includes(selectedProduct.id));
    
    // Update size buttons
    document.querySelectorAll('.size-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.size === selectedSize) {
            btn.classList.add('active');
        }
    });
    
    updateProductPrice();
    updateCartBadges();
}

function updateProductPrice() {
    const totalPrice = (selectedProduct.price + selectedSizePrice) * productQuantity;
    document.getElementById('total-price').textContent = `$${totalPrice.toFixed(2)}`;
    document.getElementById('quantity').textContent = productQuantity;
}

function selectSize(size, additionalPrice) {
    selectedSize = size;
    selectedSizePrice = additionalPrice;
    
    document.querySelectorAll('.size-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.size === size) {
            btn.classList.add('active');
        }
    });
    
    updateProductPrice();
}

function changeQuantity(change) {
    productQuantity = Math.max(1, productQuantity + change);
    updateProductPrice();
}

// Category Functions
function setActiveCategory(category) {
    activeCategory = category;
    
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.category === category) {
            btn.classList.add('active');
        }
    });
    
    renderProducts();
}

// Favorites Functions
function toggleFavorite(productId) {
    if (favorites.includes(productId)) {
        favorites = favorites.filter(id => id !== productId);
    } else {
        favorites.push(productId);
    }
    
    localStorage.setItem('favorites', JSON.stringify(favorites));
    
    // Update UI
    if (currentScreen === 'main-menu') {
        renderProducts();
    } else if (currentScreen === 'product-detail' && selectedProduct && selectedProduct.id === productId) {
        document.getElementById('favorite-btn').classList.toggle('active', favorites.includes(productId));
    }
}

function toggleProductFavorite() {
    if (selectedProduct) {
        toggleFavorite(selectedProduct.id);
    }
}

function showFavorites() {
    // Filter products to show only favorites
    const originalCategory = activeCategory;
    const favoriteProducts = products.filter(product => favorites.includes(product.id));
    
    if (favoriteProducts.length === 0) {
        alert('Você ainda não tem favoritos!');
        return;
    }
    
    // Temporarily show all categories with favorites
    const grid = document.getElementById('products-grid');
    grid.innerHTML = favoriteProducts.map(product => `
        <div class="product-card" onclick="selectProduct(${product.id})">
            <div class="product-image">
                <img src="https://images.unsplash.com/${product.image}?w=400" alt="${product.name}">
                <button class="favorite-btn active" 
                        onclick="event.stopPropagation(); toggleFavorite(${product.id})">
                    <i class="fas fa-heart"></i>
                </button>
            </div>
            <div class="product-details">
                <h4>${product.name}</h4>
                <p>${product.description}</p>
                <div class="product-footer">
                    <span class="product-price">$${product.price.toFixed(2)}</span>
                    <button class="btn-detail" onclick="event.stopPropagation(); selectProduct(${product.id})">
                        Ver Detalhes
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Cart Functions
function addToCart() {
    if (!selectedProduct) return;
    
    const cartItem = {
        id: selectedProduct.id,
        name: selectedProduct.name,
        description: selectedProduct.description,
        price: selectedProduct.price + selectedSizePrice,
        image: selectedProduct.image,
        quantity: productQuantity,
        size: selectedSize
    };
    
    const existingItem = cart.find(item => item.id === selectedProduct.id && item.size === selectedSize);
    
    if (existingItem) {
        existingItem.quantity += productQuantity;
    } else {
        cart.push(cartItem);
    }
    
    updateCartBadges();
    alert(`${cartItem.name} (${selectedSize}) adicionado ao carrinho!`);
}

function updateCartQuantity(productId, size, change) {
    const item = cart.find(item => item.id === productId && item.size === size);
    if (!item) return;
    
    if (change < 0 && item.quantity === 1) {
        // Remove item
        cart = cart.filter(item => !(item.id === productId && item.size === size));
    } else {
        item.quantity += change;
    }
    
    renderCart();
    updateCartBadges();
}

function renderCart() {
    const emptyCart = document.getElementById('empty-cart');
    const cartContent = document.getElementById('cart-content');
    
    if (cart.length === 0) {
        emptyCart.style.display = 'flex';
        cartContent.style.display = 'none';
        return;
    }
    
    emptyCart.style.display = 'none';
    cartContent.style.display = 'block';
    
    const cartList = document.getElementById('cart-items-list');
    cartList.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="https://images.unsplash.com/${item.image}?w=400" alt="${item.name}">
            <div class="cart-item-details">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <div class="cart-item-price">$${item.price.toFixed(2)}</div>
            </div>
            <div class="cart-controls">
                <button class="cart-qty-btn ${item.quantity === 1 ? 'remove' : ''}" 
                        onclick="updateCartQuantity(${item.id}, '${item.size}', -1)">
                    <i class="fas fa-${item.quantity === 1 ? 'trash' : 'minus'}"></i>
                </button>
                <span class="cart-quantity">${item.quantity}</span>
                <button class="cart-qty-btn" onclick="updateCartQuantity(${item.id}, '${item.size}', 1)">
                    <i class="fas fa-plus"></i>
                </button>
            </div>
            <div class="cart-item-total">$${(item.price * item.quantity).toFixed(2)}</div>
        </div>
    `).join('');
    
    updateCartSummary();
}

function updateCartSummary() {
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const deliveryFee = 2.49;
    const finalTotal = subtotal + deliveryFee;
    
    document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('final-total').textContent = `$${finalTotal.toFixed(2)}`;
    document.getElementById('checkout-total').textContent = `$${finalTotal.toFixed(2)}`;
}

function updateCartBadges() {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    const badges = document.querySelectorAll('.cart-badge');
    
    badges.forEach(badge => {
        if (totalItems > 0) {
            badge.textContent = totalItems;
            badge.style.display = 'flex';
        } else {
            badge.style.display = 'none';
        }
    });
}

// Checkout Functions
function renderCheckout() {
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const deliveryFee = 2.49;
    const finalTotal = subtotal + deliveryFee;
    
    // Update totals
    document.getElementById('checkout-subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('checkout-final-total').textContent = `$${finalTotal.toFixed(2)}`;
    document.getElementById('mobile-final-total').textContent = `$${finalTotal.toFixed(2)}`;
    document.getElementById('payment-total').textContent = `$${finalTotal.toFixed(2)}`;
    
    // Render items for desktop
    const checkoutList = document.getElementById('checkout-items-list');
    if (checkoutList) {
        checkoutList.innerHTML = cart.map(item => `
            <div class="checkout-item">
                <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
                    <img src="https://images.unsplash.com/${item.image}?w=400" 
                         alt="${item.name}" 
                         style="width: 3rem; height: 3rem; border-radius: 0.5rem; object-fit: cover;">
                    <div style="flex: 1;">
                        <p style="font-weight: 500; font-size: 0.875rem;">${item.name}</p>
                        <p style="color: #9ca3af; font-size: 0.75rem;">Qtd: ${item.quantity}</p>
                    </div>
                    <span style="font-weight: 500;">$${(item.price * item.quantity).toFixed(2)}</span>
                </div>
            </div>
        `).join('');
    }
    
    // Render items for mobile
    const mobileList = document.getElementById('mobile-checkout-items');
    if (mobileList) {
        mobileList.innerHTML = cart.map(item => `
            <div class="checkout-item">
                <span>${item.name} x${item.quantity}</span>
                <span>$${(item.price * item.quantity).toFixed(2)}</span>
            </div>
        `).join('');
    }
}

function processPayment() {
    const name = document.getElementById('customer-name').value;
    const email = document.getElementById('customer-email').value;
    
    if (!name || !email) {
        alert('Por favor, preencha nome e email para continuar.');
        return;
    }
    
    // Simulate payment processing
    alert('Pagamento processado com sucesso! Obrigado pela compra!');
    
    // Clear cart and return to menu
    cart = [];
    showScreen('main-menu');
    renderProducts();
    updateCartBadges();
}

// Search Function
function filterProducts() {
    renderProducts();
}

// Initialize App
document.addEventListener('DOMContentLoaded', function() {
    // Load favorites from localStorage
    favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    
    // Show welcome screen initially
    showScreen('welcome-screen');
});
