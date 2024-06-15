<script>
    const pancakeCount = 3
    let pancakeStatus = new Array(pancakeCount)

    /**
     * @param {MouseEvent} event
     * @param {Number} index
     */
    function onPancakeClicked(event, index) {
        event.preventDefault()
        event.stopPropagation()

        if (index >= 0 && index < pancakeCount) {
            pancakeStatus[index] = !(pancakeStatus[index] ?? true)
        }
    }
</script>

<div class="wrapper">
    {#each { length: pancakeCount } as _, i}
        <button on:click={(e) => onPancakeClicked(e, i)}>
            {#if pancakeStatus[i] ?? true}
                🥞
            {:else}
                🍽️
            {/if}
        </button>
    {/each}
</div>

<style>
    .wrapper {
        display: flex;
        gap: 10px;
        margin-bottom: 45px;
    }

    button {
        background: none;
        border: 0;
        padding: 0;
        width: 30px;
    }

    button:hover {
        cursor: pointer;
    }
</style>
