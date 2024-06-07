<script>
    import Meta from "$lib/Meta.svelte"
    import Section from "$lib/main/Section.svelte"
    import { PageReturn } from "$lib/store"
    import { onMount } from "svelte"

    /** @type {string} 페이지 제목 */
    export let title

    /** @type {string} 페이지 설명 */
    export let description

    /** @type {string} 이미지 */
    export let image

    /** @type {string} 뒤 돌아가기 버튼의 이동 주소 */
    export let returnTo = "/"

    PageReturn.set(returnTo)
</script>

<Meta {title} {description} {image} />

<Section id="intro" {title} subtitle={description} background={image} height="60vh" />
