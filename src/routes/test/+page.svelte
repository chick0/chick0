<script>
    import Content from "$lib/component/Content.svelte"
    import ContentGroup from "$lib/component/ContentGroup.svelte"

    let command = ""
    let result = "READY"
</script>

<Content>
    <ContentGroup>
        <input bind:value={command} />
        <button
            on:click={() => {
                try {
                    result = JSON.stringify(eval(command))

                    if (result == "null") {
                        result = eval(command).toString()
                    }
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
