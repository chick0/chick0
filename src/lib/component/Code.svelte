<script>
    import "$lib/css/d2coding.css"

    export let language = "language"
    export let code = ""
</script>

<!-- prettier-ignore -->
<pre><code class={language.startsWith("language") ? language : "language-" + language}>{code.trim()}<slot /></code></pre>

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
