<script>
    import "$lib/css/base.css"
    import ReturnButton from "$lib/props/ReturnButton.svelte"
    import BodyLockWrapper from "$lib/layout/BodyLockWrapper.svelte"
    import LoadingWrapper from "$lib/layout/LoadingWrapper.svelte"
    import UpdateWatcher from "$lib/props/UpdateWatcher.svelte"
    import Footer from "$lib/props/Footer.svelte"
</script>

<ReturnButton />

<BodyLockWrapper>
    <LoadingWrapper>
        <slot />
    </LoadingWrapper>
</BodyLockWrapper>

<UpdateWatcher />

<Footer />
