<script>
    const { data } = $props();
    const { name, price, image, description } = data.product;
  </script>
  
  <h1>{name}</h1>
  <img src={image} alt={name} />
  <p>Price: {price}</p>
  <p>{description}</p>
  <a href="/">Back to Shop</a>