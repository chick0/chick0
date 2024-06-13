<script>
    import { onDestroy, onMount } from "svelte"
    import { navigating, page, updated } from "$app/stores"
    import { PageReturn } from "$lib/store"

    import "$lib/css/base.css"
    import Spinner from "$lib/component/props/Spinner.svelte"
    import Footer from "$lib/component/layout/Footer.svelte"
    import Box from "$lib/component/props/Box.svelte"

    /** 페이지 로딩 여부 */
    let isLoading = false

    /** 클라이언트 준비 완료 여부 */
    let isMounted = false

    /** 뒤로가기 버튼의 필요 여부 */
    let needReturnButton = false

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

    /** @type {function|null} */
    let unsubscriber = page.subscribe((value) => {
        if (value.route.id == "/") {
            needReturnButton = false
        } else {
            needReturnButton = true
        }
    })

    onMount(() => {
        isMounted = true
    })

    onDestroy(() => {
        if (unsubscriber != null) {
            unsubscriber()
            unsubscriber = null
        }
    })
</script>

<div id="top"></div>

<a class="return {isMounted && needReturnButton ? 'show' : ''}" href={$PageReturn}>
    <i class="fa fa-arrow-left"></i>
</a>

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
    .return {
        position: fixed;
        --pos: 30px;
        top: var(--pos);
        left: var(--pos);
        z-index: 10;

        color: #fff;
        background-color: rgba(0, 0, 0, 0.5);

        border: 0;
        border-radius: 50%;

        width: 50px;
        height: 50px;
    }

    @media (max-width: 768px) {
        .return {
            --pos: 10px;
        }
    }

    .return i {
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .return:not(.show) {
        display: none;
    }

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
