<script>
    import Meta from "$lib/Meta.svelte"
    import Section from "$lib/component/Section.svelte"
    import Hint from "$lib/component/Hint.svelte"
    import Content from "$lib/component/Content.svelte"
    import Plate from "$lib/component/Plate.svelte"
    import PlateWrapper from "$lib/component/PlateWrapper.svelte"

    import bg_main from "$lib/assets/banner/main.webp"
    import bg_paper_boat from "$lib/assets/banner/paper-boat.webp"
    import bg_festa from "$lib/assets/banner/festa.webp"
    import bg_cat_tab from "$lib/assets/banner/cat-tab.webp"
    import bg_hja from "$lib/assets/banner/hard-archive.webp"

    /** `[더 읽어보기]` 링크 버튼 색상 */
    const POST_COLOR = "#3295eb"

    /** `[더 읽어보기]` 링크 버튼 아이콘 */
    const POST_ICON = "fa-book"
</script>

<Meta />

<Section
    id="intro"
    title="안녕하세요!"
    content={[
        "저는 대학생 개발자 <b>chick_0</b>이라고 합니다.",
        "이 웹 사이트에서 제가 제작한 몇몇 요소들을 소개하고자 합니다.",
    ]}
    background={bg_main}
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
            color: "#000",
            icon: "fa-envelope",
        },
    ]} />

<Hint to="#projects" />

<Content id="projects" height="580px">
    <PlateWrapper>
        <Plate
            title="PAPER BOAT"
            subtitle="[청강 하이! 게임잼] 프로그래머 참여"
            background={bg_paper_boat}
            content={[
                "4일간 진행된 게임잼 프로젝트에서 유니티 프로그래머로 참여했습니다.",
                "해당 게임의 기본 구조 및 인게임 플레이 과정을 제작했습니다.",
            ]}
            links={[
                {
                    label: "더 읽어보기",
                    src: "/posts/paper-boat",
                    color: POST_COLOR,
                    icon: POST_ICON,
                },
            ]} />

        <Plate
            title="DJMAX FESTA"
            subtitle="DJMAX RESPECT V <u>비공식</u> 유저 대회 DJMAX FESTA 스태프 참여"
            background={bg_festa}
            content={[
                "대회 참가 및 온라인 예선을 진행하기 위한 웹 사이트를 제작하였습니다.",
                "또한 방송 진행을 위해 참가자 정보 표시 오버레이 및 랜덤 룰렛을 제작하였습니다.",
            ]}
            links={[
                {
                    label: "대회 웹 사이트",
                    src: "https://djmaxfesta.xyz",
                    color: "#f3e61b",
                    text: "#000",
                    icon: "fa-crown",
                },
                {
                    label: "YouTube 다시보기",
                    src: "https://www.youtube.com/@DJMAX_FESTA/videos",
                    color: "#ff0000",
                    icon: "fa-brands fa-youtube",
                },
            ]} />

        <Plate
            title="CAT TAB"
            subtitle="새 탭에서 고양이 사진을 보여주는 확장 프로그램 제작"
            background={bg_cat_tab}
            position="right"
            links={[
                {
                    label: "GitHub 저장소",
                    src: "https://github.com/chick0/cat-tab",
                    color: "#000",
                    icon: "fa-brands fa-github",
                },
                {
                    label: "확장 기능 페이지",
                    src: "https://addons.mozilla.org/ko/firefox/addon/cat-tab/",
                    color: "#fc324e",
                    icon: "fa-brands fa-firefox",
                },
            ]} />

        <Plate
            title="전일 아카이브"
            subtitle="DJMAX RESPECT V <u>비공식</u> 기록 저장 및 랭킹 페이지 제작"
            background={bg_hja}
            position="left"
            links={[
                {
                    label: "웹 사이트",
                    src: "https://hard-archive.com/",
                    color: "#de4846",
                    icon: "fa-box-archive",
                },
            ]} />
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
