<script>
    import Content from "$lib/component/Content.svelte"
    import ContentGroup from "$lib/component/ContentGroup.svelte"

    let result = "READY"
    let command = ""
</script>

<Content>
    <ContentGroup>
        <input bind:value={command} />
        <button
            on:click={() => {
                try {
                    result = JSON.stringify(eval(command))
                } catch (e) {
                    // @ts-ignore
                    result = e.toString()
                }
            }}>Run</button>
    </ContentGroup>

    <hr />

    <pre>{result}</pre>
</Content>

<style>
    input {
        width: calc(100% - 100px);
    }

    button {
        width: 80px;
    }
</style>
