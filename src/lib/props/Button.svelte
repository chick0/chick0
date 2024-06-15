<script>
    import Icon from "$lib/props/Icon.svelte"

    /** @type {string | null} */
    export let id = null

    /** @type {string | null} */
    export let icon = null

    /** @type {boolean} */
    export let iconNoMargin = false

    /** @type {string | null} */
    export let href = null

    /** @type {string | null} */
    export let title = null

    /** @type {string} background color (option) */
    export let background = "#000"

    /** @type {string | null} text color */
    export let text = null

    /** @type {import("$lib/types/ExtraButtonOption").ExtraButtonOption | null} */
    export let extraButtonOption = null

    function getExtraButtonOptionClass() {
        if (extraButtonOption == null) {
            return ""
        }

        /** @type {string[]} */
        let result = []

        if (extraButtonOption.size != undefined) {
            result.push("ext-size")
        }

        if (extraButtonOption.borderRadius != undefined) {
            result.push("ext-border-radius")
        }

        if (extraButtonOption.center != undefined && extraButtonOption.center) {
            result.push("ext-center")
        }

        return result.join(" ")
    }

    function getExtraButtonOptionStyle() {
        if (extraButtonOption == null) {
            return ""
        }

        let result = ""

        if (extraButtonOption.size != undefined) {
            result += `--ext-s-w: ${extraButtonOption.size.width};`
            result += `--ext-s-h: ${extraButtonOption.size.height};`
        }

        if (extraButtonOption.borderRadius != undefined) {
            result += `--ext-b-r: ${extraButtonOption.borderRadius};`
        }

        return result
    }

    $: if (text == null) {
        text = "#fff"
    }
</script>

{#if href == null}
    <button
        {id}
        {title}
        class="button {getExtraButtonOptionClass()}"
        style="--button-background: {background}; --button-text: {text}; {getExtraButtonOptionStyle()}">
        <div class="button-content">
            <Icon {icon} noMargin={iconNoMargin} />
            <slot />
        </div>
    </button>
{:else}
    <a
        {id}
        {href}
        {title}
        class="button {getExtraButtonOptionClass()}"
        style="--button-background: {background}; --button-text: {text}; {getExtraButtonOptionStyle()}">
        <div class="button-content">
            <Icon {icon} noMargin={iconNoMargin} />
            <slot />
        </div>
    </a>
{/if}

<style>
    .button {
        background: var(--button-background);
        color: var(--button-text);
        text-decoration: none;

        display: inline-block;
        padding: 10px;

        border: 0;
    }

    .button-content {
        display: inline-block;
        line-height: 1.2;
    }

    button:hover {
        cursor: pointer;
    }

    .button:hover,
    .button:focus {
        filter: brightness(0.85);
    }

    /* extra button option */
    .ext-size {
        width: var(--ext-s-w);
        height: var(--ext-s-h);
    }

    .ext-border-radius {
        border-radius: var(--ext-b-r);
    }

    .ext-center .button-content {
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>
