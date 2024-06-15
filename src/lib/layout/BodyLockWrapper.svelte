<script>
    import { BodyLockConut } from "$lib/store"
    import { onDestroy, onMount } from "svelte"

    /** @type {function | null} */
    let unsubscriber = null

    onMount(() => {
        unsubscriber = BodyLockConut.subscribe((lockCount) => {
            if (lockCount >= 1) {
                document.body.classList.add("lock")
            } else {
                document.body.classList.remove("lock")
            }
        })
    })

    onDestroy(() => {
        if (unsubscriber != null) {
            unsubscriber()
        }
    })
</script>

<slot />

<style>
    :global(.lock) {
        overflow: hidden !important;
    }
</style>
