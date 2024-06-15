<script>
    import Button from "$lib/props/Button.svelte"

    /** @type {string} */
    export let to

    /** @type {string} */
    export let icon = "fa-arrow-down"

    /** @type {string} */
    export let height = "150px"

    /** @type {import("$lib/types/ExtraButtonOption").ExtraButtonOption} */
    let buttonOption = {
        size: {
            width: "50px",
            height: "50px",
        },
        borderRadius: "50%",
        center: true,
    }
</script>

<div class="hint" style="--height: {height}">
    <div class="hint-button-wrapper">
        <Button
            href={to}
            {icon}
            iconNoMargin={true}
            background="rgba(0, 0, 0, 0.4)"
            extraButtonOption={buttonOption} />
    </div>
</div>

<style>
    .hint {
        height: 0;
        width: 100%;

        position: absolute;
        bottom: var(--height);

        animation: hint-anim-frames 1.2s linear infinite;
    }

    .hint-button-wrapper {
        display: inline-block;

        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    @keyframes hint-anim-frames {
        0% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(5px);
        }
        100% {
            transform: translateY(0);
        }
    }
</style>
