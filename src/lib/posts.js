/**
 * @typedef Post 글 정보
 * @property {string} id 식별자
 * @property {string} title 제목
 * @property {string} description 설명
 * @property {string} date 프로젝트 시작 날짜
 * @property {boolean} hasPost 글 준비여부
 * @property {string[]} tags 태그
 * @property {string} color 상징 색상
 * @property {Preview | null} [preview] 미리보기 정보
 */

/**
 * @typedef Link 링크 정보
 * @property {string} label 표시 텍스트
 * @property {string} src 링크 주소
 * @property {string} color 버튼 배경 색상
 * @property {string} [text] 버튼 텍스트 색상
 * @property {string} [icon] 아이콘
 */

/**
 * @typedef Preview 미리보기 정보
 * @property {string} description
 * @property {string[]} content
 * @property {"left"|"center"|"right"} position
 * @property {Link[]} link
 */

const TimeZone = "GMT+9"

/**
 * @param {Post} post
 * @returns {Date}
 */
export function getPostDate(post) {
    return new Date(post.date + " " + TimeZone)
}

/**
 * @param {string} url
 * @param {string | null} label
 * @returns {Link}
 */
export function getLinkObject(url, label = null) {
    if (label == null || label.length == 0) {
        label = "더 읽어보기"
    }

    return {
        label: label,
        src: url,
        color: "#4399fe",
        icon: "fa-book",
    }
}

/**
 * @type {Post[]} 프로젝트 글 목록 정보
 */
export const PostList = [
    // {
    //     id: "-",
    //     title: "-",
    //     description: "저를 소개하는 웹 사이트를 제작했습니다.",
    //     hasPost: false,
    //     tags: ["Svelte", "JavaScript"],
    //     color: "#ffcc4d",
    // },
    {
        id: "paper-boat",
        title: "PAPER BOAT",
        description: "4일간 진행된 게임잼 프로젝트에서 유니티 프로그래머로 참여했습니다.",
        date: "2022-08-04",
        hasPost: true,
        tags: ["Unity", "C#"],
        color: "#26cff0",
        preview: {
            description: "[청강 하이! 게임잼] 개발 참여",
            content: [
                "4일간 진행된 게임잼 프로젝트에서 유니티 프로그래머로 참여했습니다.",
                "해당 게임의 기본 구조 및 인게임 플레이 과정을 제작했습니다.",
            ],
            position: "center",
            link: [],
        },
    },
    {
        id: "cat-tab",
        title: "CAT TAB",
        description: "새 탭에서 고양이 사진을 보여주는 확장 프로그램을 제작했습니다.",
        date: "2022-07-25",
        hasPost: false,
        tags: ["JavaScript"],
        color: "#ffcc4d",
        preview: {
            description: "새 탭에서 고양이 사진을 보여주는 확장 프로그램 제작",
            content: ["자바스크립트 연습 및 웹 확장 프로그램 구조를 알아보기 위해 제작했습니다."],
            position: "center",
            link: [
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
            ],
        },
    },
    // {
    //     id: "archive-sign",
    //     title: "파일 서명 시스템",
    //     date: "2022-12-29",
    //     description: " 비대칭 암호화를 이용해 파일 서명 시스템를 제작했습니다.",
    //     hasPost: false,
    //     tags: ["C#"],
    //     color: "#3578FF",
    // },
    {
        id: "festa",
        title: "FESTA",
        description: "대회 참가 및 온라인 예선을 진행하기 위한 웹 사이트를 제작했습니다.",
        date: "2023-02-21",
        hasPost: true,
        tags: ["JavaScript", "Python", "Unity", "C#"],
        color: "#f3e61b",
        preview: {
            description: "<u>비공식</u> 유저 대회 제작 참여",
            content: ["대회 참가 및 온라인 예선을 진행하기 위한 웹 사이트를 제작했습니다."],
            position: "center",
            link: [
                {
                    label: "대회 웹 사이트",
                    src: "https://djmaxfesta.xyz",
                    color: "#f3e61b",
                    text: "#000",
                    icon: "fa-crown",
                },
                // {
                //     label: "YouTube 다시보기",
                //     src: "https://www.youtube.com/@DJMAX_FESTA/videos",
                //     color: "#ff0000",
                //     icon: "fa-brands fa-youtube",
                // },
            ],
        },
    },
    {
        id: "hard-archive",
        title: "전일 아카이브",
        description: "DJMAX RESPECT V <u>비공식</u> 기록 저장 및 랭킹 페이지를 제작했습니다.",
        date: "2023-08-24",
        hasPost: true,
        tags: ["JavaScript", "Python"],
        color: "#de4846",
        preview: {
            description: "<u>비공식</u> 랭킹 페이지 제작",
            content: [
                "게임 DJMAX RESPECT V의 <u>비공식</u> 하드 판정 및 맥스 판정 모드의 랭킹 페이지를 제작했습니다.",
            ],
            position: "left",
            link: [
                {
                    label: "웹 사이트",
                    src: "https://hard-archive.com/",
                    color: "#de4846",
                    icon: "fa-box-archive",
                },
            ],
        },
    },
    {
        id: "table",
        title: "Table",
        date: "2023-09-26",
        description: " 정렬 가능한 표를 만들어주는 클래스를 제작했습니다.",
        hasPost: false,
        tags: ["JavaScript"],
        color: "#212121",
    },
]
