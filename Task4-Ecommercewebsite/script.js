
function searchProducts() {
    const query = document.getElementById("search").value.toLowerCase();
    const products = document.querySelectorAll(".product");

    products.forEach(product => {
        const productName = product.querySelector("h3").textContent.toLowerCase();

        if (productName.includes(query)) {
            product.style.display = "";   
        } else {
            product.style.display = "none"; 
        }
    });
}


function addToCart(productName) {
    alert(productName + " added to cart!");
}

function filterCategory(category) {
    const products = document.querySelectorAll(".product");

    products.forEach(product => {
        if (category === "all" || product.getAttribute("data-category") === category) {
            product.style.display = "";
        } else {
            product.style.display = "none";
        }
    });
}
