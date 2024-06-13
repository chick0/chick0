<script>
    /** @type {string} */
    export let src

    /** @type {string} */
    export let alt

    /** @type {string} */
    export let maxWidth = "800px"
</script>

<div class="img-wrapper">
    <img {src} {alt} style="--img-max-width: {maxWidth}" />
</div>

<style>
    .img-wrapper {
        overflow-x: auto;
    }

    .img-wrapper img {
        max-width: var(--img-max-width);
    }

    @media (max-width: 768px) {
        .img-wrapper img {
            max-width: 100%;
        }
    }
</style>
