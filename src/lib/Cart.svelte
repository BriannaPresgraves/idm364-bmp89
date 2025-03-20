<script>
    import { cart, removeFromCart } from '$lib/stores/cart.js'; // Import the cart store and functions
    import { goto } from '$app/navigation';

    // total price calculation
    $: totalPrice = $cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    export let onCheckout;
</script>

<div class="cartpage">
    <h2 class="carttitle">Shopping Cart</h2>
    {#if $cart.length === 0}
        <p>Your cart is empty. Go back to the store to add some items.</p>
    {:else}
        <div class="cart-items">
            {#each $cart as item}
                <div class="cart-item">
                    <img src={item.image} alt={item.name} class="cart-item-image" />
                    <div class="cart-item-details">
                        <h3>{item.name}</h3>
                        <p>Price: ${item.price}</p>
                        <p>Quantity: {item.quantity}</p>
                    </div>
                    <button on:click={() => removeFromCart(item.id)} class="remove-btn">Remove</button>
                </div>
            {/each}
        </div>
        <div class="cart-summary">
            <div class="cart-total">
                <h3>Total: ${totalPrice.toFixed(2)}</h3>
            </div>
            <button on:click={onCheckout} class="checkout-btn">Proceed to Checkout</button>
        </div>
    {/if}
</div>

<style>
.cartpage {
    margin-left: 3rem;
    margin-right: 3rem;
}

.carttitle {
    margin-top: 2.5rem;
}

.cart-items {
    display: flex;
    flex-direction: column;
}

.cart-item {
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
}

.cart-item-image {
    width: 100px;
    height: 100px;
    object-fit: cover;
    margin-right: 1rem;
}

.cart-item-details {
    flex-grow: 1;
}

.remove-btn {
    background-color: #ff3e00;
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s;
}

.remove-btn:hover {
    background-color: #d94d00;
}

.cart-summary {
    margin-top: 2rem;
}

.checkout-btn {
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s;
}

.checkout-btn:hover {
    background-color: #45a049;
}
</style>