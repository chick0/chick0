<script>
    import Meta from "$lib/props/Meta.svelte"
    import Section from "$lib/props/Section.svelte"
    import { PageReturn } from "$lib/store"

    /** @type {string} 페이지 제목 */
    export let title

    /** @type {string} 페이지 설명 */
    export let description

    /** @type {string} meta tag */
    export let tags = ""

    /** @type {string} 이미지 */
    export let image

    /** @type {string} 뒤 돌아가기 버튼의 이동 주소 */
    export let returnTo = "/posts"

    /** @type {string} 페이지 인트로 섹션 높이 */
    export let height = "60vh"

    /** @type {boolean} 어둡게 & 블러 필터 적용 여부 */
    export let useFilterOptions = true

    PageReturn.set(returnTo)
</script>

<Meta {title} {description} {image} keywords={tags} />

<Section id="intro" {title} subtitle={description} background={image} {useFilterOptions} {height}>
    <slot />
</Section>
