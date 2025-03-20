<script>
    import { cart, removeFromCart } from '$lib/stores/cart.js';
    import { goto } from '$app/navigation';
    import trash from '$lib/img/trashcan.svg';

    // Calculate total price
    $: totalPrice = $cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    export let onCheckout;

    function continueShopping() {
        goto('/');
    }
</script>

<div class="cart-container">
    <h2 class="cart-title">Shopping Cart</h2> <!-- Shopping Cart Title -->

    {#if $cart.length === 0}
        <p class="empty-cart">Your cart is empty. Go back to the <a href="/" class="shop-link">shop</a> to add some items.</p>
        {:else}
            <div class="cart-layout">
                <!-- Left: Cart Items -->
                <div class="cart-items">
                    {#each $cart as item}
                        <div class="cart-item">
                            <img src={item.image} alt={item.name} class="cart-item-image" />
                            <div class="cart-item-details">
                                <h3 class="cart-item-name">{item.name}</h3>
                                <p class="cart-item-price">Price: <span>${item.price}</span></p>
                                <p class="cart-item-quantity">Quantity: {item.quantity}</p>
                                <button on:click={() => removeFromCart(item.id)} class="remove-btn"><img src={trash} alt="trashcan" width="15" height="15"></button>
                            </div>
                        </div>
                    {/each}
                </div>

                <!-- Right: Order Summary -->
                <div class="cart-summary">
                    <h3 class="summary-title">Order Summary</h3>
                    <div class="total-box">
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
    /* Page Layout */
    .cart-container {
        margin-left: 3rem;
        margin-right: 3rem;
    }

    /* Title aligned with product type from shop page */
    .cart-title {
        margin-top: 2.5rem;
        font-size: 1.5rem;   /* Adjust to match product type title */
        font-weight: bold;
    }

    /* Empty Cart */
    .empty-cart {
        font-size: 1.1rem;
        text-align: center;
        margin-top: 2rem;
    }

    .shop-link {
        color: #007bff;
        text-decoration: none;
    }

    .shop-link:hover {
        text-decoration: underline;
    }

    /* Cart Layout */
    .cart-layout {
        margin-left: 3.3rem;
        margin-right: 3.3rem;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 10rem;
    }

    /* Left Side - Cart Items */
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
        border-radius: 20px;
        background: white;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
        position: relative;
    }

    .cart-item-image {
        width: 100px;
        height: 100px;
        object-fit: cover;
        margin-right: 1rem;
        border-radius: 20px;
    }

    .cart-item-details {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .cart-item-name {
        font-size: 1rem;
        font-weight: bold;
        margin-bottom: 5px;
    }

    .cart-item-price {
        font-size: 1rem;
        margin-bottom: 5px;
    }

    .cart-item-quantity {
        font-size: 0.9rem;
        color: #555;
    }

    /* Remove Button positioned to top right */
    .remove-btn {
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

    .remove-btn:hover img {
    filter: brightness(0.5); /* Darken the icon on hover */
}

    /* Right Side - Order Summary */
    .cart-summary {
        flex: 1;
        padding: 12px; /* Reduced padding */
        border-radius: 20px;
        background: white;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
        min-width: 250px; /* Reduced min-width */
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.8rem; /* Reduced gap between elements */
    }

    /* Order Summary Title */
    .summary-title {
        font-size: 1.1rem; /* Smaller title font size */
        font-weight: bold;
        margin-bottom: 0.8rem;
    }

    /* Total Price Box */
    .total-box {
        display: flex;
        justify-content: space-between;
        width: 80%;
        font-size: 1.1rem; /* Smaller font size */
        font-weight: bold;
        margin-bottom: 1rem;
    }

    /* Buttons */
    .checkout-btn, .continue-btn {
        width: 80%;
        padding: 10px; /* Reduced padding */
        font-size: 0.9rem; /* Smaller font size */
        cursor: pointer;
        border-radius: 20px;
        border: none;
        margin-bottom: 0.6rem; /* Reduced space between buttons */
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

    /* Responsive Design */
    @media (max-width: 900px) {
        .cart-layout {
            flex-direction: column;
            align-items: center;
        }
        .cart-summary {
            width: 100%;
            max-width: 400px;
            margin-top: 2rem;
        }
    }
</style>
