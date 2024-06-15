<script>
    import { onMount } from "svelte"
    import { highlightElement } from "$lib/hljs"

    import "$lib/css/d2coding.css"

    export let language = "language"
    export let code = ""

    /** @type {HTMLElement} */
    let display

    onMount(() => {
        highlightElement(display)
    })
</script>

<!-- prettier-ignore -->
<pre><code bind:this={display} class={language.startsWith("language") ? language : "language-" + language}>{code.trim()}<slot /></code></pre>

<style>
    pre {
        margin-top: 10px;
        margin-bottom: 10px;
    }

    code,
    code :global(span) {
        font-size: 18px;
    }
</style>
