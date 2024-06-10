<script>
    /** @type {String} 제목 */
    export let title

    /** @type {String} 부제목 */
    export let subtitle = ""

    /** @type {string} 배경 이미지 */
    export let background = ""

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
        // 이미지 여부 검증 (* 일부 상황에서는 색상 코드 사용됨)
        const re = /(#[A-z0-9]{6,8})|(rgba?\([0-9, .]*\))/g

        if (!re.test(background)) {
            background = `url(${background})`
        }
    }
</script>

<div class="plate" style="--background: {background}; --position: {position}">
    <div class="content">
        <h2 class="title">{title}</h2>
        <p class="subtitle">{@html subtitle}</p>

        {#each content as line}
            <p>{@html line}</p>
        {/each}

        {#if links.length != 0}
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

    <div class="background" style="--background: {background}; --position: {position}"></div>

    <div class="filter"></div>
</div>

<style>
    .plate {
        --width: 320px;
        --height: 480px;

        width: var(--width);
        height: var(--height);

        --padding: 20px;

        flex-shrink: 0;
    }

    .content {
        width: var(--width);
        height: var(--height);
        background: transparent;

        position: relative;
        top: 0;
        z-index: 5;

        padding: var(--padding);

        color: #fff;
    }

    .background {
        width: var(--width);
        height: var(--height);
        border-radius: 0.25em;

        position: relative;
        top: calc(var(--height) * -1);
        margin-bottom: calc(var(--height) * -1);

        box-shadow: 0px 0px 10px rgb(128, 128, 128, 1);

        background: var(--background);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: var(--position);
    }

    .filter {
        position: relative;
        top: calc(var(--height) * -1);
        margin-bottom: calc(var(--height) * -1);

        width: var(--width);
        height: var(--height);
        border-radius: 0.25em;

        filter: brightness(0.4);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
    }

    .title {
        margin-top: 0;
    }

    .group {
        position: absolute;
        left: var(--padding);
        bottom: var(--padding);
    }
</style>
