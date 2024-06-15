<script>
    /** @type {import("$lib/types/Heading").Heading[]} */
    export let headingList

    /**
     * @param {import("$lib/types/Heading").Heading}  heading
     * @param {number} index
     * @returns {string}
     */
    function getHeadingId(heading, index) {
        if (heading.node.id.length != 0) {
            return heading.node.id
        }

        let result = heading.text.replace(" ", "-")

        if (!heading.node.classList.contains("js-heading-back")) {
            heading.node.classList.add("js-heading-back")
            heading.node.addEventListener("click", () => {
                location.replace("#toc")
            })
        }

        if (document.getElementById(result) != null) {
            result = index.toString()
        }

        heading.node.id = result
        return result
    }
</script>

{#if headingList.length != 0}
    <div id="toc" class="table-of-contents" title="목차">
        <ul>
            {#each headingList as heading, index}
                <li class="heading {heading.level}" title="{heading.text} 항목으로 이동">
                    <a href="#{getHeadingId(heading, index)}">{heading.text}</a>
                </li>
            {/each}
        </ul>
    </div>
{/if}

<style>
    .table-of-contents {
        padding: 20px;

        border: rgba(0, 0, 0, 0.1) 1px solid;
        border-radius: 0.25em;
    }

    .table-of-contents li {
        margin-left: 0;
    }

    .heading a {
        --background: transparent;
        --text: #0772fd;
        padding: 0;
    }

    .heading a:hover,
    .heading a:focus {
        text-decoration: var(--text) 2px underline;
    }

    .heading {
        padding-left: var(--heading);
    }

    .heading-1 {
        --heading: 0;
    }

    .heading-2 {
        --heading: 20px;
    }

    .heading-3 {
        --heading: 40px;
    }

    :global(.js-heading-back):hover {
        cursor: pointer;
    }
</style>
