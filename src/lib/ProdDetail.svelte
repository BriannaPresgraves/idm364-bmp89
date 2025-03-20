<script>
    export let product;

    import { addToCart } from '$lib/stores/cart.js';
    import { goto } from '$app/navigation';

    function handleAddToCart() {
        addToCart(product);
        goto('/cart'); 
    }
</script>
    
  <div class="proddetail">
    <div>
      <a href="/" class="backtoshop"> <span class="arrow">&#8592;</span> Back to Shop</a>
    </div>
    <div class="info">
      <img class="prodimg" src={product.image} alt={product.name} />
      <div class="textinfo">
        <h2 class="name">{product.name}</h2>
        <h3 class="price">Price: ${product.price}</h3>
        <p class="desc">{product.description}</p>
        <button class="addtocart" on:click={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  </div>
  
  <style>
  
  .proddetail {
    margin: auto 3rem ;
    padding: 20px;
  }
  
  .arrow {
    margin-right: 0.5rem;
    font-size: 1.5rem;
  }
  
  .name {
    margin-bottom: 2rem;
  }
  
  .info {
    display: flex;
    align-items: center;
    margin-left: 2rem;
  }
  
  .prodimg { 
      max-width: 40%;
      height: auto; 
      margin-right: 20px;
      border-radius: 20px;
  }
  
  .textinfo {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  .price {
    font-weight: bold;
    margin-bottom: 0%;
  }
  
  .desc {
    line-height: 1.5;
    margin-bottom: 30px;
  }

@media (max-width: 768px) {
    .proddetail {
        margin: auto 1rem;
    }

    .name {
        margin-bottom: 0;
        margin-top: 0;
    }

    .info {
        flex-direction: column;
        align-items: center;
        margin-left: 0;
    }

    .prodimg {
        max-width: 70%;
        margin-right: 0;
    }

    .textinfo {
        text-align: center;
        padding: 1rem;
    }

    .desc {
        margin-top: 1rem;
        margin-bottom: 20px;
    }

    .addtocart {
        align-self: center;
    }

}

@media (max-width: 480px) {
    .arrow {
        font-size: 1.2rem;
    }

    .desc {
        text-align: left;
    }
}
</style>