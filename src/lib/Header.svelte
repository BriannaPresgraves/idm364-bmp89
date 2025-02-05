<script>
    import cart from '$lib/imgs/cart.png';
</script>

<header>
    <h1 class="shop">Artistry Hub</h1>
    <button class="cart">
        <img src={cart} alt="cart" width="29" height="29.02">
    </button>
</header>

<style>

.cart {
    cursor: pointer;
    height: 50px;
    width: 50px;
    display: flex;
    background-color: #e2f4fc;
    border: none;
    align-items: center;
    justify-content: center;
    margin: 0.9rem;
    margin-right: 1rem;
    margin-left: auto;
}
</style>