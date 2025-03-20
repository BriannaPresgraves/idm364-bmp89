<script>
  import ProductCard from '$lib/ProdCard.svelte';

  export let data;
  const { products } = data;

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
      <h2 class="type">{type}</h2>
      <div class="product-grid">
          {#each items as product}
              <ProductCard {product} />
          {/each}
      </div>
  {/each}
</div>

<style>

.shoppage {
  margin-left: 3rem;
  margin-right: 3rem;
}

.type {
  margin-top: 2.5rem;
}

.product-grid { 
  display: grid; 
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  place-items: center;
}

@media (max-width: 768px) {
  .shoppage {
    margin-left: 1rem;
    margin-right: 1rem;
  }

  .product-grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
}

@media (max-width: 630px) {
  .shoppage {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }

  .type {
    text-align: center;
  }

  .product-grid {
    grid-template-columns: 1fr;
  }
}
</style>
