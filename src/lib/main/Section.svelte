<script>
    /** @type {String} 섹션 ID */
    export let id

    /** @type {String} 제목 */
    export let title

    /** @type {String} 부제목 */
    export let subtitle = ""

    /** @type {String} 배경 이미지 혹은 색상 */
    export let background = "#1f1f1f"

    /** @type {String} 섹션 높이 */
    export let height = "100vh"

    /** @type {("center" | "left"| "right")} 배경 이미지 위치 */
    export let position = "center"

    /** @type {String[]} 텍스트 내용들 */
    export let content = []

    /**
     * @typedef Link 링크 정보
     * @property {string} label 표시 텍스트
     * @property {string} src 링크 주소
     * @property {string} color 버튼 배경 색상
     * @property {string} [text] 버튼 텍스트 색상
     * @property {string} [icon] 아이콘
     */

    /** @type {Link[]} 링크 목록 */
    export let links = []

    if (!background.startsWith("url(")) {
        const re = /(#[A-z0-9]{6,8})|(rgba?\([0-9, .]*\))/g

        if (!re.test(background)) {
            background = `url(${background})`
        }
    }
</script>

<div {id} class="section" style="--bg: {background}; --position: {position}; --height: {height}">
    <div>
        <h1 class="title">{title}</h1>
        <p class="subtitle">{@html subtitle}</p>

        {#each content as line}
            <p>{@html line}</p>
        {/each}

        {#if links.length != 0}
            <br />
            <div class="group">
                {#each links as link}
                    <a
                        href={link.src}
                        style="--background: {link.color}; --text: {link.text ?? '#fff'}">
                        {#if link.icon != null}
                            <i class="fa {link.icon}"></i>
                        {/if}
                        {link.label}
                    </a>
                {/each}
            </div>
        {/if}
    </div>
</div>

<style>
    .section {
        width: 100%;
        height: var(--height);
        color: #fff;

        background: var(--bg);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: var(--position);
    }

    .section > div {
        position: relative;
        top: 50%;
        transform: translateY(-50%);

        width: 100%;

        --padding: 250px;
        padding-left: var(--padding);
        padding-right: var(--padding);
    }

    @media (max-width: 768px) {
        .section > div {
            --padding: 10px;
        }
    }

    @media (min-width: 768px) and (max-width: 1200px) {
        .section > div {
            --padding: 50px;
        }
    }

    .title {
        font-size: 45px;
        font-weight: bold;

        margin-bottom: 20px;
    }

    .subtitle {
        font-size: 22px;

        margin-top: -20px;
        margin-bottom: 20px;
    }

    /* icon margin */
    .fa {
        margin-right: 3px;
    }
</style>
