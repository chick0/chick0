<script>
    import { onMount } from "svelte"

    /** @type {string} Tweet Owner */
    export let user

    /** @type {string} Tweet Id */
    export let id

    /** @type {"auto"|"light"|"dark"} mode */
    export let theme = "auto"

    /** @type {HTMLBodyElement} */
    let body

    /** @type {HTMLScriptElement} */
    let script

    /** @type {HTMLDivElement} */
    let tweetContainer

    /** @type {Number | null} */
    let intervalId = null

    let isTweetEmbedReady = false

    /**
     * @returns {boolean}
     */
    function createTweetWidget() {
        // @ts-ignore
        if (window.twttr == null) {
            return false
        }

        // @ts-ignore
        window.twttr.ready((twttr) => {
            twttr.widgets
                .createTweet(id, tweetContainer, {
                    theme: theme,
                })
                .then(() => {
                    isTweetEmbedReady = true
                })
        })

        return true
    }

    onMount(() => {
        if (theme == "auto") {
            if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
                theme = "dark"
            } else {
                theme = "light"
            }
        }

        if (createTweetWidget()) {
            return
        }

        // @ts-ignore
        body = document.querySelector("body")

        script = document.createElement("script")
        script.src = "https://platform.twitter.com/widgets.js"
        script.async = true

        body.appendChild(script)

        intervalId = setInterval(() => {
            if (createTweetWidget()) {
                if (intervalId != null) {
                    clearInterval(intervalId)
                }

                intervalId = null
            }
        }, 500)
    })
</script>

<div class="tweet-container" bind:this={tweetContainer}>
    {#if isTweetEmbedReady == false}
        <div class="tweet-fallback">
            <a href="https://x.com/{user}/status/{id}" target="_blank" referrerpolicy="no-referrer">
                <i class="fa fa-brands fa-x-twitter"></i> Read more on X (formerly Twitter)
            </a>
        </div>
    {/if}
</div>

<style>
    .tweet-fallback {
        padding-top: 20px;
        padding-bottom: 20px;
    }

    .tweet-container :global(iframe) {
        width: 100% !important;
    }
</style>
