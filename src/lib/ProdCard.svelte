<script>
    export let product;
</script>

<div class="prodcard">
    <img src={product.image} alt={product.name} class="prodimg"/>
    <h2 class="prodname">{product.name}</h2>
    <p class="price">${product.price}</p>
</div>

<style>
    .prodcard {
        padding: 16px;
        background-color: #293b7a;
        color: white;
        text-align: center;
    }

    .prodname {
        font-size: 20px;
    }
</style>