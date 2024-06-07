<div class="page-content">
    <slot />
</div>

<style>
    .page-content {
        min-height: 100vh;
        background-color: #fff;

        padding-top: 40px;

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
