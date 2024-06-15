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

    /** @type {boolean} 어둡게 & 블러 필터 적용 여부 */
    export let useFilterOptions = true

    /** @type {import("$lib/posts").Link[]} 링크 목록 */
    export let links = []

    import ButtonWrapper from "$lib/layout/ButtonWrapper.svelte"
    import Button from "$lib/props/Button.svelte"

    $: if (!background.startsWith("url(")) {
        // 이미지 여부 검증 (* 일부 상황에서는 색상 코드 사용됨)
        const re = /(#[A-z0-9]{6,8})|(rgba?\([0-9, .]*\))/g

        if (!re.test(background)) {
            background = `url(${background})`
        }
    }
</script>

<div {id} class="section" style="--position: {position}; --height: {height}">
    <div class="content">
        <h1 class="title">{title}</h1>

        {#if subtitle.length != 0}
            <p class="subtitle">{@html subtitle}</p>
        {/if}

        {#if content.length == 0}
            <slot />
        {:else}
            {#each content as line}
                <p>{@html line}</p>
            {/each}
        {/if}

        {#if links.length != 0}
            <br />
            <ButtonWrapper>
                {#each links as link}
                    <Button
                        href={link.src}
                        icon={link.icon}
                        background={link.color}
                        text={link.text}>
                        {link.label}
                    </Button>
                {/each}
            </ButtonWrapper>
        {/if}
    </div>
</div>

<div class="background" style="--bg: {background}; --position: {position}; --height: {height}">
</div>

{#if useFilterOptions}
    <div class="filter" style="--height: {height}"></div>
{/if}

<style>
    .section {
        width: 100%;
        height: var(--height);
        color: #fff;
    }

    .section > .content {
        z-index: 5;
    }

    .section > .content {
        position: relative;
        top: 50%;
        transform: translateY(-50%);

        width: 100%;

        --section-padding: 250px;
        padding-left: var(--section-padding);
        padding-right: var(--section-padding);
    }

    @media (max-width: 768px) {
        .section > .content {
            --section-padding: 10px;
        }
    }

    @media (min-width: 768px) and (max-width: 1200px) {
        .section > .content {
            --section-padding: 50px;
        }
    }

    .background {
        position: relative;
        top: calc(var(--height) * -1);
        margin-bottom: calc(var(--height) * -1);

        width: 100%;
        height: var(--height);

        background: var(--bg);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: var(--position);
    }

    .filter {
        position: relative;
        top: calc(var(--height) * -1);
        margin-bottom: calc(var(--height) * -1);

        width: 100%;
        height: var(--height);

        filter: brightness(0.4);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
    }

    .title {
        font-weight: bold;
        font-size: 45px;

        margin-top: 0;
        margin-bottom: 20px;
    }

    .subtitle {
        margin-top: -20px;
        margin-bottom: 20px;
    }

    .subtitle,
    .subtitle :global(*) {
        font-size: 22px;
    }
</style>
