<script>
  import ProdDetail from '$lib/ProdDetail.svelte';

  export let data;
  const { product } = data;
</script>

<ProdDetail {product} />