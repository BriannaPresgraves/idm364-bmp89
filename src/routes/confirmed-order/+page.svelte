<script> 
    import { clearCart } from '$lib/stores/cart';
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';

    onMount(() => {
        clearCart();
    });

    function backHome() {
        goto('/');
    }
</script>

<div class="confirmation">
    <img src="/imgs/confirm-icon.png" alt="Order confirmed" class="confirmimg" />
    <h2>Thank you for your order!</h2>
    <p>Your order has been placed successfully.</p>
    <button on:click={backHome} class="home-btn">Back to Home</button>
</div>

<style>
    .confirmation {
        text-align: center;
        padding: 2rem;
    }

    .confirmimg {
        width: 200px;
        height: 200px;
        margin-bottom: 20px;
    }

    .home-btn {
        display: inline-block;
        margin-top: 10px;
        font-size: 16px;
        color: white;
        padding: 10px;
        border: none;
        border-radius: 20px;
        background-color: var(--gold);
        transition: color 0.3s ease;
    }

    .home-btn:hover {
        background-color: #a66d00;
    }

    @media (max-width: 768px) {
        .confirmation {
            padding: 1.5rem;
        }

        .confirmimg {
            width: 150px;
            height: 150px;
        }
    }

    @media (max-width: 480px) {
        .confirmation {
            padding: 1rem;
        }

        .confirmimg {
            width: 100px;
            height: 100px;
        }

        .home-btn {
            font-size: 14px;
        }
    }
</style>