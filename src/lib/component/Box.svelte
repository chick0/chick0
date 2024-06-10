<script>
    /** @type {string | null} */
    export let id = null

    /** @type {"info"|"warning"|"danger"|"no-style"} 중요도 분류 */
    export let type
</script>

<div {id} class="box {type}">
    {#if type == "info"}
        <i class="fa fa-circle-info"></i>
    {:else if type == "warning"}
        <i class="fa fa-triangle-exclamation"></i>
    {:else if type == "danger"}
        <i class="fa fa-xmark"></i>
    {/if}

    <slot />
</div>

<style>
    .box {
        padding: 5px;
        padding-right: 10px;
        margin-top: 5px;
        margin-bottom: 5px;

        border: rgba(0, 0, 0, 0.25) 1px solid;
        border-radius: 0.25em;
    }

    .fa {
        text-align: center;
        width: 30px;
    }

    .info {
        background-color: #deebf5;
    }

    .warning {
        background-color: #eec662;
    }

    .danger {
        background-color: #f19191;
    }

    .no-style {
        padding: 10px;
    }
</style>
