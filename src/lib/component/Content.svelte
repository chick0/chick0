<script>
    import { onDestroy, onMount } from "svelte"
    import TableOfContents from "$lib/component/TableOfContents.svelte"

    import "$lib/css/content.css"
    import { RefreshTableOfContents } from "$lib/store"

    /** @type {string | null} */
    export let id = null

    /** @type {string} 최소 높이 (* 기본값: 100vh) */
    export let height = "100vh"

    /** @type {boolean} 목차 사용 여부 */
    export let useTableOfContents = false

    /** @type {HTMLDivElement} */
    let wrapper

    /** @type {import("$lib/types/Heading").Heading[]} */
    let headingList = []

    /** @type {function|null} */
    let unsubscriber = null

    /**
     * @param {string} nodeName
     * @returns {import("$lib/types/Heading").HeadingLevels}
     */
    function getLevelFromNodeName(nodeName) {
        switch (nodeName) {
            case "H1":
            case "h1":
                return "heading-1"

            case "H2":
            case "h2":
                return "heading-2"

            case "H3":
            case "h3":
                return "heading-3"

            default:
                return ""
        }
    }

    function scanTableOfContents() {
        headingList = []
        wrapper.querySelectorAll("h1, h2, h3").forEach((heading) => {
            headingList.push({
                level: getLevelFromNodeName(heading.nodeName),
                text: heading.textContent ?? "",
                node: heading,
            })
        })

        headingList = headingList
    }

    if (useTableOfContents) {
        onMount(() => {
            scanTableOfContents()

            unsubscriber = RefreshTableOfContents.subscribe((value) => {
                if (value) {
                    scanTableOfContents()
                    RefreshTableOfContents.set(false)
                }
            })
        })

        onDestroy(() => {
            if (unsubscriber != null) {
                unsubscriber()
            }
        })
    }
</script>

<div {id} class="page-content" style="--height: {height}">
    {#if useTableOfContents}
        <TableOfContents {headingList} />
    {/if}

    <div bind:this={wrapper}>
        <slot />
    </div>
</div>

<style>
    .page-content {
        min-height: var(--height);
        background-color: #fff;

        padding-top: 40px;
        padding-bottom: 40px;

        --content-padding: 250px;
        padding-left: var(--content-padding);
        padding-right: var(--content-padding);
    }

    @media (max-width: 768px) {
        .page-content {
            --content-padding: 10px;
        }
    }

    @media (min-width: 768px) and (max-width: 1200px) {
        .page-content {
            --content-padding: 50px;
        }
    }

    .page-content :global(a) {
        --background: transparent;
        --text: #0772fd;
        padding: 0;
    }

    .page-content :global(a:hover),
    .page-content :global(a:focus) {
        text-decoration: var(--text) 2px underline;
    }
</style>
