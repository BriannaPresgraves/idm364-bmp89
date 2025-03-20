<script>
    import { clearCart } from '$lib/stores/cart';
    import { onMount } from 'svelte';

    onMount(() => {
        clearCart();
    });
</script>

<div class="confirmation">
    <h2>Thank you for your order!</h2>
    <p>Your order has been placed successfully.</p>
    <a href="/">Back to Home</a>
</div>

<style>
    .confirmation {
        text-align: center;
        padding: 2rem;
    }
    
    a {
        display: inline-block;
        margin-top: 10px;
        text-decoration: none;
        color: blue;
    }
    </style>