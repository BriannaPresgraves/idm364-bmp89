<script>
    import {products} from '$lib/data.js';
    import ProdCard from "$lib/ProdCard.svelte";

    const groupedProducts = products.reduce((acc, product) => {
            if (!acc[product.type]) acc[product.type] = [];
            acc[product.type].push(product);
            return acc;
        }, {});
</script>

<div class="shop">
    {#each Object.keys(groupedProducts) as type}
        <div class="prodtype">
            <h1>{type}</h1>
        </div>
        <div class="prodcards">
            {#each groupedProducts[type] as product}
                <ProdCard {product} />
            {/each}
        </div>
    {/each}
    </div>
    
    <style>
        .shop {

        }

        .prodtype {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            width: 100%;
        }

        .prodcards {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            width: 100%;
        }
    
    </style>
