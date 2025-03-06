<script>
    const { data } = $props();
    const { name, price, image, description } = data.product;
  </script>
  
<div class="proddetail">
  <h2 class="name">{name}</h2>
  <div class="info">
    <img class="prodimg" src={image} alt={name} />
    <div class="textinfo">
      <h3 class="price">Price: ${price}</h3>
      <p class="desc">{description}</p>
      <a href="/">Back to Shop</a>
    </div>
  </div>
</div>

<style>

.proddetail {
  margin: auto 3rem ;
  padding: 20px;
}

.name {
  text-align: center;
  margin-bottom: 1rem;
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