<script>
    import { PageReturn } from "$lib/store"
    import { onMount } from "svelte"

    let isReady = false

    onMount(() => {
        isReady = true
    })
</script>

<a class="return {isReady ? 'ready' : ''}" href={$PageReturn}>
    <i class="fa fa-arrow-left"></i>
</a>

<slot />

<style>
    .return {
        position: fixed;
        top: 30px;
        left: 30px;

        color: #fff;
        background-color: rgba(0, 0, 0, 0.5);

        border: 0;
        border-radius: 50%;

        width: 50px;
        height: 50px;
    }

    .return i {
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .return:not(.ready) {
        opacity: 0;
    }

    .return.ready {
        opacity: 1;
        transition: 0.75s ease-out;
    }
</style>
