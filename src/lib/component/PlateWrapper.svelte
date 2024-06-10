<div class="plate-wrapper">
    <slot />
</div>

<style>
    .plate-wrapper {
        --gap: 20px;
        display: flex;
        gap: var(--gap);

        padding: 10px;
        overflow-x: auto;
    }
</style>
