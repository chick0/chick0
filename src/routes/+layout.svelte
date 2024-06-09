<script>
    import { onMount } from "svelte"
    import { navigating } from "$app/stores"

    import "$lib/css/base.css"
    import Spinner from "$lib/Spinner.svelte"
    import Footer from "$lib/layout/Footer.svelte"

    /** 페이지 로딩 여부 */
    let isLoading = false

    /** 클라이언트 준비 완료 여부 */
    let isMounted = false

    $: {
        isLoading = $navigating != null

        if (isMounted) {
            if (isLoading == true) {
                document.body.classList.add("locked-slot")
            } else {
                document.body.classList.remove("locked-slot")
            }
        }
    }

    onMount(() => {
        isMounted = true
    })
</script>

<div id="top"></div>

{#if isLoading == true}
    <div class="loading">
        <Spinner />
    </div>
{/if}

<slot />

<Footer />

<style>
    .loading {
        position: fixed;
        top: 0;
        width: 100vw;
        height: 100vh;

        overflow: hidden;

        background-color: rgba(0, 0, 0, 0.9);
        z-index: 10;
    }

    :global(.locked-slot) {
        overflow: hidden !important;
    }
</style>
