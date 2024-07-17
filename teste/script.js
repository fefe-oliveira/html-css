// Dados dos produtos (simulados)
const products = [
    { id: 1, name: "Produto 1", price: 19.99 },
    { id: 2, name: "Produto 2", price: 29.99 },
    { id: 3, name: "Produto 3", price: 39.99 },
    { id: 4, name: "Produto 4", price: 49.99 }
];

// Função para exibir os produtos na página
function renderProducts() {
    const productList = document.getElementById('product-list');

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        productCard.innerHTML = `
            <h3>${product.name}</h3>
            <p>Preço: R$ ${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Adicionar ao carrinho</button>
        `;

        productList.appendChild(productCard);
    });
}

// Função para adicionar produto ao carrinho
function addToCart(productId) {
    alert(`Produto ${productId} adicionado ao carrinho!`);
    updateCartCount();
}

// Função para atualizar contagem do carrinho
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    // Simula a contagem de itens no carrinho (pode ser implementada mais tarde)
    let count = parseInt(cartCount.innerText);
    count++;
    cartCount.innerText = count;
}

// Inicialização: Renderiza os produtos na página
renderProducts();