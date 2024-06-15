<div class="plate-wrapper">
    <slot />
</div>

<style>
    .plate-wrapper {
        --plate-gap: 20px;
        display: flex;
        gap: var(--plate-gap);

        padding: 10px;
        overflow-x: auto;
    }
</style>
