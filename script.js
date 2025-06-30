
// Sistema de favoritos
class FavoritesManager {
    constructor() {
        this.favorites = this.loadFavorites();
        this.updateFavoritesCount();
    }

    loadFavorites() {
        const saved = localStorage.getItem('slidesparma_favorites');
        return saved ? JSON.parse(saved) : [];
    }

    saveFavorites() {
        localStorage.setItem('slidesparma_favorites', JSON.stringify(this.favorites));
    }

    addFavorite(productId) {
        if (!this.favorites.includes(productId)) {
            this.favorites.push(productId);
            this.saveFavorites();
            this.updateFavoritesCount();
            return true;
        }
        return false;
    }

    removeFavorite(productId) {
        const index = this.favorites.indexOf(productId);
        if (index > -1) {
            this.favorites.splice(index, 1);
            this.saveFavorites();
            this.updateFavoritesCount();
            return true;
        }
        return false;
    }

    isFavorite(productId) {
        return this.favorites.includes(productId);
    }

    getFavorites() {
        return [...this.favorites];
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
}

// Inicializar gerenciador de favoritos
const favoritesManager = new FavoritesManager();

// Aguardar o carregamento completo da página
window.addEventListener('load', function() {
    console.log('Page loaded, initializing...');
    
    // Controle de navegação entre páginas
    const nextButton = document.getElementById('next-button');
    const landingPage = document.getElementById('landing-page');
    const mainPage = document.getElementById('main-page');
    const favoritesPage = document.getElementById('favorites-page');
    
    if (nextButton && landingPage && mainPage) {
        nextButton.addEventListener('click', function() {
            console.log('Next button clicked');
            landingPage.style.display = 'none';
            mainPage.style.display = 'block';
            landingPage.classList.remove('active');
            mainPage.classList.add('active');
        });
    }
    
    // Controle de categorias com filtros
    const categoryTabs = document.querySelectorAll('.category-tab');
    const productCards = document.querySelectorAll('.product-card');
    
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            categoryTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            const selectedCategory = this.getAttribute('data-category');
            
            productCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                if (selectedCategory === 'all' || cardCategory === selectedCategory) {
                    card.style.display = 'block';
                    card.style.opacity = '1';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    
    // Controle de favoritos
    const favoriteButtons = document.querySelectorAll('.favorite-btn');
    favoriteButtons.forEach(btn => {
        const productId = btn.getAttribute('data-product-id');
        
        // Definir estado inicial baseado no localStorage
        if (favoritesManager.isFavorite(productId)) {
            btn.innerHTML = '♥';
            btn.classList.add('favorited');
        } else {
            btn.innerHTML = '♡';
            btn.classList.remove('favorited');
        }
        
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            
            if (favoritesManager.isFavorite(productId)) {
                // Remover dos favoritos
                favoritesManager.removeFavorite(productId);
                this.innerHTML = '♡';
                this.classList.remove('favorited');
                console.log(`Produto ${productId} removido dos favoritos`);
            } else {
                // Adicionar aos favoritos
                favoritesManager.addFavorite(productId);
                this.innerHTML = '♥';
                this.classList.add('favorited');
                console.log(`Produto ${productId} adicionado aos favoritos`);
            }
            
            // Atualizar página de favoritos se estiver ativa
            if (favoritesPage.classList.contains('active')) {
                loadFavoritesPage();
            }
        });
    });
    
    // Controle da barra de pesquisa
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const products = document.querySelectorAll('.product-card');
            
            products.forEach(product => {
                const title = product.querySelector('h4').textContent.toLowerCase();
                const description = product.querySelector('p').textContent.toLowerCase();
                
                if (title.includes(searchTerm) || description.includes(searchTerm) || searchTerm === '') {
                    product.style.display = 'block';
                    product.style.opacity = '1';
                } else {
                    product.style.opacity = '0.3';
                }
            });
        });
    }
    
    // Controle de navegação inferior
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const navType = this.getAttribute('data-nav');
            
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
            
            // Navegação para favoritos
            if (navType === 'favorites') {
                showPage('favorites');
                loadFavoritesPage();
            } else if (navType === 'home') {
                showPage('main');
            } else if (navType === 'cart') {
                alert('Funcionalidade do carrinho em desenvolvimento!');
            }
        });
    });
    
    // Controle de botões de detalhes
    const detailsButtons = document.querySelectorAll('.details-btn');
    detailsButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            
            const productCard = this.closest('.product-card');
            const productTitle = productCard.querySelector('h4').textContent;
            const productPrice = productCard.querySelector('.price').textContent;
            
            alert(`Visualizando detalhes de: ${productTitle}\nPreço: ${productPrice}`);
        });
    });
    
    // Controle do botão "Pedir Agora"
    const orderButton = document.querySelector('.order-button');
    if (orderButton) {
        orderButton.addEventListener('click', function() {
            alert('Redirecionando para o processo de pedido...');
        });
    }
    
    // Controle de dots do hero
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            dots.forEach(d => d.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Botão voltar da página de favoritos
    const backButton = document.getElementById('back-from-favorites');
    if (backButton) {
        backButton.addEventListener('click', function() {
            showPage('main');
            // Reativar navegação home
            const homeNav = document.querySelector('[data-nav="home"]');
            navItems.forEach(nav => nav.classList.remove('active'));
            if (homeNav) homeNav.classList.add('active');
        });
    }
    
    console.log('All event listeners initialized');
});

// Função para mostrar páginas
function showPage(pageName) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
        page.style.display = 'none';
    });
    
    const targetPage = document.getElementById(`${pageName}-page`);
    if (targetPage) {
        targetPage.classList.add('active');
        targetPage.style.display = 'block';
    }
}

// Função para carregar a página de favoritos
function loadFavoritesPage() {
    const favoritesGrid = document.getElementById('favorites-grid');
    const favorites = favoritesManager.getFavorites();
    
    if (favorites.length === 0) {
        favoritesGrid.innerHTML = `
            <div class="empty-favorites">
                <p>Nenhum produto favoritado ainda</p>
                <p>Explore nossos templates e adicione seus favoritos!</p>
            </div>
        `;
        return;
    }
    
    // Dados dos produtos
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
    ];
    
    // Criar HTML dos produtos favoritos
    let favoritesHTML = '';
    
    products.forEach(product => {
        if (favorites.includes(product.id)) {
            favoritesHTML += `
                <div class="product-card" data-category="${product.category}">
                    <div class="product-image">
                        <img src="${product.image}" alt="${product.title}">
                        <button class="favorite-btn favorited" data-product-id="${product.id}">♥</button>
                    </div>
                    <div class="product-info">
                        <h4>${product.title}</h4>
                        <p>${product.description}</p>
                        <div class="product-footer">
                            <span class="price">${product.price}</span>
                            <button class="details-btn">Ver Detalhes</button>
                        </div>
                    </div>
                </div>
            `;
        }
    });
    
    favoritesGrid.innerHTML = favoritesHTML;
    
    // Reativar event listeners para os novos botões de favorito
    const newFavoriteButtons = favoritesGrid.querySelectorAll('.favorite-btn');
    newFavoriteButtons.forEach(btn => {
        const productId = btn.getAttribute('data-product-id');
        
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            
            // Remover dos favoritos
            favoritesManager.removeFavorite(productId);
            console.log(`Produto ${productId} removido dos favoritos`);
            
            // Recarregar página de favoritos
            loadFavoritesPage();
            
            // Atualizar botão na página principal
            const mainPageBtn = document.querySelector(`[data-product-id="${productId}"]`);
            if (mainPageBtn && !mainPageBtn.closest('#favorites-page')) {
                mainPageBtn.innerHTML = '♡';
                mainPageBtn.classList.remove('favorited');
            }
        });
    });
    
    // Reativar event listeners para botões de detalhes
    const newDetailsButtons = favoritesGrid.querySelectorAll('.details-btn');
    newDetailsButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            
            const productCard = this.closest('.product-card');
            const productTitle = productCard.querySelector('h4').textContent;
            const productPrice = productCard.querySelector('.price').textContent;
            
            alert(`Visualizando detalhes de: ${productTitle}\nPreço: ${productPrice}`);
        });
    });
}
