<script>
    import {products} from '$lib/data.js';
    import { slugify } from '$lib/utils';

    const groupedProducts = {};
  products.forEach(product => {
    if (!groupedProducts[product.type]) {
      groupedProducts[product.type] = [];
    }
    groupedProducts[product.type].push(product);
  });
</script>

<h1>Shop</h1>
{#each Object.entries(groupedProducts) as [type, items]}
  <h2>{type}</h2>
  <div class="product-grid">
    {#each items as { name, price, image }}
      <div class="product-tile">
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>${price}</p>
        <a href="/products/{slugify(name)}">View Details</a>
      </div>
    {/each}
  </div>
{/each}
    
    <style>

    .product-grid { 
        display: grid; 
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 20px; 
    }

    .product-tile { 
        border: 1px solid #ccc; 
        padding: 10px; 
        text-align: center; 
    }

    .product-tile img { 
        max-width: 100%; 
        height: auto; 
    }
    </style>
