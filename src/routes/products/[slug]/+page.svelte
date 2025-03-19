<script>
    export let data;
    const { product } = data;
</script>
  
<div class="proddetail">
  <div>
    <a href="/" class="backtoshop"> <span class="arrow">&#8592;</span> Back to Shop</a>
  </div>
  <div class="info">
    <img class="prodimg" src={product.image} alt={product.name} />
    <div class="textinfo">
      <h2 class="name">{product.name}</h2>
      <h3 class="price">Price: {product.price}</h3>
      <p class="desc">{product.description}</p>
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

</style>