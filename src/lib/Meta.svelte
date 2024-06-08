<script>
    import { PUBLIC_HOST } from "$env/static/public"

    /** 페이지 제목 */
    export let title = "chick_0"

    /** 페이지 설명 */
    export let description = "🥞"

    /** 미리보기 이미지 */
    export let image = "https://ch1ck.xyz/favicon.png"

    /** 검색 키워드 `,`를 이용해 구분해주세요. */
    export let keywords = ""

    // 이미지 여부 검증 (* 일부 상황에서는 색상 코드 사용됨)
    const re = /(#[A-z0-9]{6,8})|(rgba?\([0-9, .]*\))/g

    if (re.test(image)) {
        image = "https://ch1ck.xyz/favicon.png"
    } else {
        image = PUBLIC_HOST + image
    }
</script>

<svelte:head>
    <!-- HTML -->
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content="chick_0{keywords.length == 0 ? '' : ',' + keywords}" />

    <!-- OG -->
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
</svelte:head>
