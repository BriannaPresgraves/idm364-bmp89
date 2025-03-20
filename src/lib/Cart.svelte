<script>
    import { cart, removeFromCart, updateCartItem } from '$lib/stores/cart.js';
    import { goto } from '$app/navigation';
    import trash from '$lib/img/trashcan.svg';

    // Calculate total price
    $: totalPrice = $cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    export let onCheckout;

    function continueShopping() {
        goto('/');
    }

    // Update quantity with plus/minus buttons
    function updateQuantity(itemId, newQuantity) {
        if (newQuantity > 0) {
            updateCartItem(itemId, newQuantity);
        }
    }

    // Plus button
    function increaseQuantity(itemId, currentQuantity) {
        updateQuantity(itemId, currentQuantity + 1);
    }

    // Minus button
    function decreaseQuantity(itemId, currentQuantity) {
        if (currentQuantity > 1) {
            updateQuantity(itemId, currentQuantity - 1);
        }
    }
</script>

<div class="cart">
    <h2 class="carttitle">Shopping Cart</h2>

    {#if $cart.length === 0}
        <p class="empty-cart">Your cart is empty. Go back to the <a href="/">shop</a> to add some items.</p>
    {:else}
        <div class="cart-layout">
            <div class="cart-items">
                {#each $cart as item}
                    <div class="cart-item">
                        <img src={item.image} alt={item.name} class="cartimg" />
                        <div class="cartdetails">
                            <h3 class="cartname">{item.name}</h3>
                            <p class="cartprice">Price: <span>${(item.price * item.quantity).toFixed(2)}</span></p>
                            <div class="quantity-container">
                                <button class="quantity-btn" on:click={() => decreaseQuantity(item.id, item.quantity)}>-</button>
                                <span class="quantity">{item.quantity}</span>
                                <button class="quantity-btn" on:click={() => increaseQuantity(item.id, item.quantity)}>+</button>
                            </div>
                            <button on:click={() => removeFromCart(item.id)} class="remove">
                                <img src={trash} alt="trashcan" width="15" height="15" />
                            </button>
                        </div>
                    </div>
                {/each}
            </div>

            <div class="summary">
                <h3 class="summary-title">Order Summary</h3>
                <div class="total">
                    <p>Total:</p>
                    <p class="total-amount">${totalPrice.toFixed(2)}</p>
                </div>
                <button on:click={onCheckout} class="checkout-btn">Proceed to Checkout</button>
                <button on:click={continueShopping} class="continue-btn">Continue Shopping</button>
            </div>
        </div>
    {/if}
</div>

<style>
    .cart {
        margin-left: 3rem;
        margin-right: 3rem;
    }

    .carttitle {
        margin-top: 2.5rem;
        font-size: 1.5rem;
        font-weight: bold;
    }

    .empty-cart {
        text-align: left;
        margin-top: 2rem;
    }

    .cart-layout {
        margin-left: 3.3rem;
        margin-right: 3.3rem;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 10rem;
    }

    .cart-items {
        flex: 2;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        max-width: 1500px;
        position: relative;
    }

    .cart-item {
        display: flex;
        padding: 12px;
        border: 1px solid #ddd;
        background: white;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
        position: relative;
    }

    .cartimg {
        width: 100px;
        height: 100px;
        object-fit: cover;
        margin-right: 1rem;
        border-radius: 20px;
    }

    .cartdetails {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .cartname {
        font-weight: bold;
        margin-bottom: 5px;
    }

    .cartprice {
        margin-bottom: 5px;
    }

    .quantity-container {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-top: 1rem;
        border: 1px solid #ddd;
        border-radius: 20px;
        width: fit-content;
    }

    .quantity-btn {
        width: 30px;
        height: 30px;
        background-color: transparent;
        border: none;
        cursor: pointer;
        font-size: 1.2rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .quantity {
        font-size: 16px;
        font-weight: bold;
        min-width: 40px;
        text-align: center;
    }

    .remove {
        position: absolute;
        top: 10px;
        right: 10px;
        background-color: transparent;
        border: none;
        padding: 5px 10px;
        cursor: pointer;
        font-size: 0.9rem;
        border-radius: 20px;
    }

    .remove:hover img {
        filter: brightness(0.5);
    }

    .summary {
        flex: 1;
        padding: 12px;
        background: white;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
        min-width: 250px;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.8rem;
    }

    .summary-title {
        font-size: 1.1rem;
        font-weight: bold;
        margin-bottom: 0.8rem;
    }

    .total {
        display: flex;
        justify-content: space-between;
        width: 80%;
        font-size: 1.1rem;
        font-weight: bold;
        margin-bottom: 1rem;
    }

    .checkout-btn, .continue-btn {
        width: 80%;
        padding: 10px;
        font-size: 0.9rem;
        cursor: pointer;
        border-radius: 20px;
        border: none;
        margin-bottom: 0.6rem;
    }

    .checkout-btn {
        background-color: #230b6e;
        color: white;
    }

    .checkout-btn:hover {
        background-color: #2b2d42;
    }

    .continue-btn {
        background-color: #c27c0e;
        color: white;
    }

    .continue-btn:hover {
        background-color: #a66d00;
    }

@media (max-width: 1045px) {
    .cart-layout {
        gap: 5rem;
    }
}

@media (max-width: 960px) {
    .cart-layout {
        gap: 2rem;
    }
}

@media (max-width: 890px) {
    .cart-layout {
        flex-direction: column;
        align-items: center;
    }

    .cart-items {
        width: 90%;
        max-width: 100%;
    }

    .cartimg {
        width: 120px;
        height: 120px;
    }

    .cartdetails {
        align-items: center;
        text-align: center;
        margin-top: 1rem;
    }

    .quantity-container {
        margin-top: 1rem;
        border-radius: 20px;
        padding: 5px 10px;
        width: fit-content;
        border: 1px solid #ddd;
    }

    .quantity-btn {
        width: 28px;
        height: 28px;
        font-size: 1.1rem; 
    }

    .quantity {
        font-size: 14px; 
        min-width: 30px;
    }

    .summary {
        width: 100%;
        max-width: 400px;
        margin-top: 2rem;
    }

    .checkout-btn, .continue-btn {
        width: 60%;
        font-size: 1rem;
        padding: 12px;
    }

    .total {
        display: flex;
        justify-content: space-between;
        width: 40%;
        font-size: 1.1rem;
        font-weight: bold;
        margin-bottom: 1rem;
    }

}

@media (max-width: 730px) {
    .cart-layout {
        margin-left: 0;
        margin-right: 0;
    }

}

@media (max-width: 600px) {
    .carttitle {
        margin-top: 1.5rem;
        text-align: center;
    }

    .empty-cart {
        text-align: center;
    }

    .cart-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .cartimg {
        width: 200px;
        height: 200px;
    }

    .remove {
        top: 5px;
        right: 5px;
    }

    .quantity-btn {
        width: 24px;
        height: 24px;
        font-size: 1rem;
    }

    .quantity {
        font-size: 14px;
        min-width: 30px;
    }

    .checkout-btn, .continue-btn {
        padding: 10px;
        font-size: 0.9rem;
    }
}

@media (max-width: 350px) {

    .cartimg {
        width: 150px;
        height: 150px;
    }

}
</style>
