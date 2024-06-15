<script>
    import { onDestroy, onMount } from "svelte"
    import { page } from "$app/stores"
    import { PageReturn } from "$lib/store"
    import CenterWrapper from "../layout/CenterWrapper.svelte"
    import Icon from "$lib/component/props/Icon.svelte"

    /** 클라이언트 준비 완료 여부 */
    let isMounted = false

    /** 뒤로가기 버튼의 필요 여부 */
    let needReturnButton = false

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

<a class="return {isMounted && needReturnButton ? 'show' : ''}" href={$PageReturn}>
    <CenterWrapper>
        <Icon icon="fa-arrow-left" noMargin={true} />
    </CenterWrapper>
</a>

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

    .return:not(.show) {
        display: none;
    }
</style>
