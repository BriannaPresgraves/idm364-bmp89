<script>
    import Cart from '$lib/Cart.svelte';
    import { goto } from '$app/navigation';

    function handleCheckout() {
        goto('/confirmed-order');
    }
</script>

<Cart onCheckout={handleCheckout} />