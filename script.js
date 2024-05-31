function addProduct() {
    // Get form values
    const productImage = document.getElementById('productImage').value;
    const productName = document.getElementById('productName').value;
    const productPrice = document.getElementById('productPrice').value;

    // Check if any field is empty
    if (!productImage || !productName || !productPrice) {
        alert('Please fill in all fields.');
        return;
    }

    // Create product card
    const productCard = document.createElement('div');
    productCard.className = 'product-card';

    const img = document.createElement('img');
    img.src = productImage;
    productCard.appendChild(img);

    const name = document.createElement('p');
    name.textContent = `Name: ${productName}`;
    productCard.appendChild(name);

    const price = document.createElement('p');
    price.textContent = `Price: $${productPrice}`;
    productCard.appendChild(price);

    const buyButton = document.createElement('button');
    buyButton.textContent = 'Buy';
    buyButton.onclick = () => {
        alert(`${productName} purchased successfully!`);
    };
    productCard.appendChild(buyButton);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = () => {
        productCard.remove();
    };
    productCard.appendChild(deleteButton);

    // Add product card to container
    document.getElementById('productContainer').appendChild(productCard);

    // Reset form
    document.getElementById('productForm').reset();
}

// Sale timer
function startSaleTimer(duration, display) {
    let timer = duration, minutes, seconds;
    const interval = setInterval(() => {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            clearInterval(interval);
            alert("Sale has ended!");
        }
    }, 1000);
}

window.onload = () => {
    const saleDuration = 60 * 30; // 30 minutes
    const display = document.querySelector('#time');
    startSaleTimer(saleDuration, display);
};
