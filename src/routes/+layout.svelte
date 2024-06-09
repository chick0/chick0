<script>
    import { onMount } from "svelte"
    import { navigating, updated } from "$app/stores"

    import "$lib/css/base.css"
    import Spinner from "$lib/Spinner.svelte"
    import Footer from "$lib/layout/Footer.svelte"
    import Box from "$lib/page/Box.svelte"

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

    $: {
        if ($updated == true) {
            setTimeout(() => location.reload(), 500)
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

{#if $updated}
    <div class="fixed-box-wrapper">
        <Box type="info">웹 사이트가 업데이트되었습니다. 잠시만 기다려주세요...</Box>
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

    .fixed-box-wrapper {
        position: fixed;

        top: 10px;
        left: 10px;

        z-index: 10;
    }
</style>
