// Aguardar o carregamento completo da página
window.addEventListener('load', function() {
    console.log('Page loaded, initializing...');
    
    // Controle de navegação entre páginas
    const nextButton = document.getElementById('next-button');
    const landingPage = document.getElementById('landing-page');
    const mainPage = document.getElementById('main-page');
    
    if (nextButton && landingPage && mainPage) {
        nextButton.addEventListener('click', function() {
            console.log('Next button clicked');
            landingPage.style.display = 'none';
            mainPage.style.display = 'block';
        });
    }
    
    // Controle de categorias
    const categoryTabs = document.querySelectorAll('.category-tab');
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            categoryTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Controle de favoritos
    const favoriteButtons = document.querySelectorAll('.favorite-btn');
    favoriteButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            
            if (this.innerHTML === '♡') {
                this.innerHTML = '♥';
                this.style.color = '#e53e3e';
            } else {
                this.innerHTML = '♡';
                this.style.color = 'white';
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
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
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
    
    console.log('All event listeners initialized');
});

