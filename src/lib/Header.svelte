<script>
    import carts from '$lib/img/cart.svg';
    import { goto } from '$app/navigation';
    import { cart } from '$lib/stores/cart';
    import { derived } from 'svelte/store';

    function goToCart() {
        goto('/cart');
    }

    function goToHome() {
        goto('/');
    }

    const cartItemCount = derived(cart, $cart => 
        $cart.reduce((total, item) => total + item.quantity, 0)
    );
</script>

<header>
    <h1 on:click={goToHome} class="shop">Artistry Hub</h1>
    <button on:click={goToCart} class="cart">
        <img src={carts} alt="cart" width="29" height="29.02">
        {#if $cartItemCount > 0}
            <span class="count">{$cartItemCount}</span>
        {/if}
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
    background-color: black;
    border: none;
    align-items: center;
    justify-content: center;
    margin: 0.9rem;
    margin-right: 1rem;
    margin-left: auto;
    position: relative;
}

.count {
    position: absolute;
    top: -5px;
    right: -5px;
    background-color: white;
    color: black;
    border-radius: 50%;
    padding: 2px 8px;
    font-size: 12px;
}

@media (max-width: 480px) {
    .cart {
        height: 25px;
        width: 25px;
    }

    .count {
        top: -10px;
        right: -10px;
        padding: 1px 4px;
    }
}

</style>