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

</style>
