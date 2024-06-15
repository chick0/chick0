<script>
    import { onDestroy, onMount } from "svelte"
    import { updated } from "$app/stores"

    import Alert from "$lib/component/props/Alert.svelte"

    /** @type {function | null} */
    let updateUnsubscriber = null

    let isUpdated = false

    onMount(() => {
        updateUnsubscriber = updated.subscribe((value) => {
            if (value) {
                isUpdated = true

                setTimeout(() => {
                    location.reload()
                }, 1000)
            }
        })
    })

    onDestroy(() => {
        if (updateUnsubscriber != null) {
            updateUnsubscriber()
        }
    })
</script>

{#if isUpdated}
    <Alert>
        <p>사이트가 업데이트되었습니다.</p>
        <br />
        <p>잠시만 기다려주세요...</p>
    </Alert>
{/if}
