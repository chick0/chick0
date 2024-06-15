<script>
    import { onDestroy, onMount } from "svelte"
    import { AddBodyLockCount, RemoveBodyLockCount } from "$lib/store"

    onMount(() => {
        AddBodyLockCount()
    })

    onDestroy(() => {
        RemoveBodyLockCount()
    })
</script>

<div class="background">
    <div class="alert">
        <slot />
    </div>
</div>

<style>
    .background {
        display: block;
        width: 100vw;
        height: 100vh;

        position: fixed;
        top: 0;
        left: 0;
        z-index: 100;

        background-color: rgba(0, 0, 0, 0.8);
    }

    .alert {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 105;

        padding: 30px;

        --alert-width: 300px;
        width: var(--alert-width);

        background-color: #fff;

        border-radius: 0.25em;
        box-shadow: 0px 0px 10px rgb(128, 128, 128, 1);
    }

    /* 모바일 기기를 제외한 */
    @media (min-width: 768px) {
        .alert {
            --alert-width: 500px;
        }
    }
</style>
