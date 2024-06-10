<script>
    import { getPostBannerFromId } from "$lib/banner"
    import { POST_COLOR, POST_ICON, PostList } from "$lib/posts"

    import Meta from "$lib/Meta.svelte"
    import Section from "$lib/component/Section.svelte"
    import Hint from "$lib/component/Hint.svelte"
    import Content from "$lib/component/Content.svelte"
    import Plate from "$lib/component/Plate.svelte"
    import PlateWrapper from "$lib/component/PlateWrapper.svelte"

    import image_main from "$lib/assets/image/main.webp"
</script>

<Meta />

<Section
    id="intro"
    title="안녕하세요!"
    content={[
        "저는 대학생 개발자 <b>chick_0</b>이라고 합니다.",
        "이 웹 사이트에서 제가 제작한 몇몇 요소들을 소개하고자 합니다.",
    ]}
    background={image_main}
    links={[
        {
            label: "GitHub",
            src: "https://github.com/chick0",
            color: "#000",
            icon: "fa-brands fa-github",
        },
        {
            label: "Email",
            src: "mailto:chick_0@kakao.com",
            color: "#3295eb",
            icon: "fa-envelope",
        },
    ]} />

<Hint to="#projects" />

<Content id="projects" height="580px">
    <PlateWrapper>
        {#each PostList as post}
            {#if post.preview != null}
                <Plate
                    title={post.title}
                    subtitle={post.preview.description}
                    background={getPostBannerFromId(post.id)}
                    content={post.preview.content}
                    position={post.preview.position}
                    links={post.preview.link} />
            {/if}
        {/each}
    </PlateWrapper>
</Content>

<Section
    id="outro-post"
    title="안녕하세요!"
    subtitle="아래 페이지에서 제 프로젝트를 소개하는 글을 확인할 수 있습니다."
    background="linear-gradient(90deg, rgba(207,157,178,1) 0%, rgba(131,163,201,1) 100%)"
    height="400px"
    useFilterOptions={false}
    links={[
        {
            label: "글 확인하기",
            src: "/posts",
            color: POST_COLOR,
            icon: POST_ICON,
        },
    ]} />
