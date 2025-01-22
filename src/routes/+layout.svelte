<script lang="js">
    import Footer from '$lib/Footer.svelte';
    import Header from '$lib/Header.svelte';

    let { children } = $props();
</script>

<Header />
{@render children()}
<Footer />