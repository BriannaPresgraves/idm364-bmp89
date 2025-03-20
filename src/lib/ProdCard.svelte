<script>
    import { slugify } from '$lib/utils';

    export let product;
</script>

<a href="/products/{slugify(product.name)}">
    <div class="product-tile">
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p class="price">${product.price}</p>
    </div>
</a>

<style>
.product-tile { 
    text-decoration: none;
    display: block;
    width: 75%;
    border: 2px solid black;
    border-radius: 20px;
    padding: 10px;
    text-align: center;
    margin: 0 auto;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.product-tile:hover {
    transform: translateY(-10px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.product-tile img { 
    max-width: 70%;
    height: auto; 
    border-radius: 20px;
    border: 2px solid black;
}

a {
    text-decoration: none;
    color: white;
}

.price {
    margin-top: 0%;
}

@media (max-width: 900px) {
    .product-tile {
        width: 90%;
    }

    .product-tile img {
        max-width: 80%;
    }

}

@media (max-width: 630px) {
    .product-tile {
        width: 60%;
        padding: 12px;
        margin-bottom: 1rem;
    }

    .product-tile img {
        max-width: 80%;
    }

}

@media (max-width: 480px) {
    .product-tile {
        width: 90%;
        padding: 12px;
        margin-bottom: 1rem;
    }

    .product-tile img {
        max-width: 80%;
    }
}
</style>