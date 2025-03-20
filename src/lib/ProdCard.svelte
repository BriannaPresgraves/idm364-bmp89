<script>
    import { slugify } from '$lib/utils';

    export let product;
</script>

<div class="product-tile">
    <img src={product.image} alt={product.name} />
    <h3>{product.name}</h3>
    <p class="price">${product.price}</p>
    <a href="/products/{slugify(product.name)}">View Details</a>
</div>

<style>
.product-tile { 
    border: 2px solid black;
    border-radius: 20px;
    padding: 10px;
    text-align: center;
    width: 75%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

.product-tile img { 
    max-width: 70%;
    height: auto; 
    border-radius: 20px;
    border: 2px solid black;
}

.price {
    margin-top: 0%;
}
</style>