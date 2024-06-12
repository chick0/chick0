<script>
    import { onMount } from "svelte"
    import Box from "./Box.svelte"

    export let baseSrc = "/example/posts"
    export let src

    export let title = "예시 페이지"

    let showFrame = false

    /** @type {"loading"|"error"} */
    let status = "loading"

    onMount(() => {
        const path = baseSrc + src

        fetch(path, {
            method: "HEAD",
        }).then((resp) => {
            if (resp.ok) {
                showFrame = true
            } else {
                status = "error"
            }
        })
    })
</script>

{#if showFrame}
    <iframe class="example-frame" src="{baseSrc}{src}" {title}> </iframe>
{:else if status == "loading"}
    <Box type="info">{title} 페이지의 유효성 여부를 확인하고 있습니다...</Box>
{:else if status == "error"}
    <Box type="danger">{title} 페이지를 준비하는 과정에서 오류가 발생했습니다.</Box>
{/if}

<style>
    .example-frame {
        display: block;
        width: 100% !important;

        margin-top: 20px;
        margin-bottom: 20px;
    }
</style>
