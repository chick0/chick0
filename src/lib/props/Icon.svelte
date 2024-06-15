<script>
    /** @type {string | null} */
    export let icon

    /** @type {boolean} */
    export let noMargin = false
</script>

{#if icon != null}
    <i class="fa {icon} {noMargin ? '' : 'icon-margin'}"></i>
{/if}

<style>
    .icon-margin {
        margin-right: 3px;
    }
</style>
