<script>
    import "$lib/css/content.css"

    /** @type {string | null} */
    export let id = null

    /** @type {string} 최소 높이 (* 기본값: 100vh) */
    export let height = "100vh"
</script>

<div {id} class="page-content" style="--height: {height}">
    <slot />
</div>

<style>
    .page-content {
        min-height: var(--height);
        background-color: #fff;

        padding-top: 40px;
        padding-bottom: 40px;

        --padding: 250px;
        padding-left: var(--padding);
        padding-right: var(--padding);
    }

    @media (max-width: 768px) {
        .page-content {
            --padding: 10px;
        }
    }

    @media (min-width: 768px) and (max-width: 1200px) {
        .page-content {
            --padding: 50px;
        }
    }
</style>
