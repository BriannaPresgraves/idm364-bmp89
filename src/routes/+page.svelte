<script>
    import ProdCard from "$lib/ProdCard.svelte";
</script>

<div class="shop">
    <ProdCard></ProdCard>
    <ProdCard></ProdCard>
    <ProdCard></ProdCard>
    <ProdCard></ProdCard>
    <ProdCard></ProdCard>
    </div>
    
    <style>
    .shop {
        display: flex;
        gap: 6.5%;
        row-gap: 4em;
        flex-direction: row;
        flex-wrap: wrap;
        width: calc(100% - .5rem);
        align-items: center;
        margin-left: .5em;
    }
    
    </style>
