<script>
    /** @type {string} */
    export let src

    /** @type {string} */
    export let alt

    /** @type {string} */
    export let width = "auto"

    /** @type {string} */
    export let maxWidth = "800px"

    function getMaxWidth() {
        if (width == "auto") {
            return `--img-max-width: ${maxWidth};`
        }

        return ""
    }
</script>

<div class="img-wrapper" style="--img-width: {width};{getMaxWidth()}">
    <img {src} {alt} loading="lazy" />
</div>

<style>
    .img-wrapper {
        overflow-x: auto;

        width: var(--img-width);
        max-width: var(--img-max-width);
    }

    @media (max-width: 768px) {
        .img-wrapper {
            width: 100%;
        }
    }
</style>
