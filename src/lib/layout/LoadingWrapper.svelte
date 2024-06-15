<script>
    import { onDestroy, onMount } from "svelte"
    import { navigating } from "$app/stores"
    import { AddBodyLockCount, RemoveBodyLockCount } from "$lib/store"

    import Spinner from "$lib/props/Spinner.svelte"

    /** @type {boolean} */
    let isLoading = false

    /** @type {function | null} */
    let unsubscriber = null

    onMount(() => {
        unsubscriber = navigating.subscribe((value) => {
            isLoading = value != null

            if (isLoading) {
                AddBodyLockCount()
            } else {
                RemoveBodyLockCount()
            }
        })
    })

    onDestroy(() => {
        if (unsubscriber != null) {
            unsubscriber()
        }
    })
</script>

{#if isLoading}
    <div class="spinner-wrapper">
        <Spinner />
    </div>
{/if}

<slot />

<style>
    .spinner-wrapper {
        position: fixed;
        top: 0;
        width: 100vw;
        height: 100vh;

        overflow: hidden;

        background-color: rgba(0, 0, 0, 0.9);
        z-index: 10;
    }
</style>
