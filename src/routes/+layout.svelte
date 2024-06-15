<script>
    import "$lib/css/base.css"
    import ReturnButton from "$lib/component/props/ReturnButton.svelte"
    import BodyLockWrapper from "$lib/component/layout/BodyLockWrapper.svelte"
    import LoadingWrapper from "$lib/component/layout/LoadingWrapper.svelte"
    import UpdateWatcher from "$lib/component/props/UpdateWatcher.svelte"
    import Footer from "$lib/component/layout/Footer.svelte"
</script>

<ReturnButton />

<BodyLockWrapper>
    <LoadingWrapper>
        <slot />
    </LoadingWrapper>
</BodyLockWrapper>

<UpdateWatcher />

<Footer />
