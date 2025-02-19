<script>
    import carts from '$lib/imgs/cart.png';
    import { goto } from '$app/navigation';
    import { cart } from '$lib/stores/cart';
    import { derived } from 'svelte/store';

    function goToCart() {
        goto('/cart');
    }

    function goToHome() {
        goto('/');
    }

    const hasItemsInCart = derived(cart, $cart => $cart.length > 0);
</script>

<header>
    <h1 on:click={goToHome} class="shop">Artistry Hub</h1>
    <button on:click={goToCart} class="cart">
        <img src={carts} alt="cart" width="29" height="29.02">
    </button>
</header>

<style>
.shop {
    cursor: pointer;
}

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