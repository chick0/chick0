<script>
    export let tag
</script>

<div class="tag" title={tag}>
    <i class="fa fa-tag"></i>
    {tag}
</div>

<style>
    .tag {
        background: #000;
        color: #fff;
        border-radius: 0.25rem;

        padding: 5px !important;
    }

    .tag,
    .fa {
        line-height: 1.2 !important;
    }

    .fa {
        width: 24px;
        text-align: center;
    }
</style>
