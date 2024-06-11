<script>
    /** @type {boolean} 상단 패딩을 제거합니다. */
    export let noPaddingTop = false

    /** @type {boolean} 하단 패딩을 제거합니다. */
    export let noPaddingBottom = false
</script>

<div class="tags {noPaddingTop ? '' : 'pad-top'} {noPaddingBottom ? '' : 'pad-bottom'}">
    <slot />
</div>

<style>
    .tags {
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
    }

    .pad-top {
        padding-top: 8px;
    }

    .pad-bottom {
        padding-bottom: 8px;
    }
</style>
