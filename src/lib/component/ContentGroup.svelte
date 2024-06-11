<div class="content-group">
    <slot />
</div>

<style>
    .content-group {
        display: flex;
        flex-wrap: nowrap;
        gap: 30px;
    }

    @media (max-width: 768px) {
        .content-group {
            display: block;
        }
    }
</style>
