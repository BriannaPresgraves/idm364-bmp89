<script>
    import Prodcard from '$lib/Prodcard.svelte';
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

<div class="shoppage">
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
</div>
    
<style>

.shoppage {
  margin-left: 2rem;
  margin-right: 2rem;
}

.product-grid { 
    display: grid; 
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 40px;
    place-items: center;
}

.product-tile { 
  border: 2px solid black;
  border-radius: 20px;
  padding: 10px;
  text-align: center;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.product-tile img { 
    max-width: 100%; 
    height: auto; 
}
</style>
