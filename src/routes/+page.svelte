<script>
    import Meta from "$lib/Meta.svelte"
    import Section from "$lib/main/Section.svelte"

    import bg_main from "$lib/assets/main/bg_main.jpg"
    import bg_paper_boat from "$lib/assets/main/bg_paperboat.jpg"
    import bg_festa from "$lib/assets/main/bg_dgf.jpg"
    import bg_cat_tab from "$lib/assets/main/bg_cat-tab.jpg"
    import bg_hja from "$lib/assets/main/bg_hja.jpg"
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

<Section
    id="paper-boat"
    title="PAPER BOAT"
    subtitle="[청강 하이! 게임잼] 프로그래머 참여"
    background={bg_paper_boat}
    content={[
        "4일간 진행된 게임잼 프로젝트에서 유니티 프로그래머로 참여했습니다.",
        "해당 게임의 기본 구조 및 인게임 플레이 과정을 제작했습니다.",
    ]} />

<Section
    id="djmax-festa"
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

<Section
    id="cat-tab"
    title="CAT TAB"
    subtitle="새 탭에서 고양이 사진을 보여주는 확장 프로그램 제작"
    background={bg_cat_tab}
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

<Section
    id="hard-archive"
    title="전일 아카이브"
    subtitle="DJMAX RESPECT V <u>비공식</u> 하판/맥저 전일 기록 저장 및 랭킹 페이지 제작"
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
