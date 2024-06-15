<script>
    import { page } from "$app/stores"
    import Section from "$lib/props/Section.svelte"

    import image_main from "$lib/assets/image/main.webp"
</script>

<Section
    id="error"
    title={$page.status?.toString() ?? "오류"}
    subtitle={$page.error?.message ?? "알 수 없는 오류가 발생했습니다."}
    background={image_main}
    links={[
        {
            label: "메인 화면으로 이동",
            src: "/",
            color: "#000",
            icon: "fa-home",
        },
    ]} />
