<script>
    import { getPostBannerFromId } from "$lib/banner"
    import { getLinkObject } from "$lib/posts"

    import ButtonWrapper from "./layout/ButtonWrapper.svelte"
    import Button from "./props/Button.svelte"

    /** @type {import("$lib/posts").Post} 글 정보 (* 프로젝트 정보) */
    export let post

    /** @type {string} */
    let background = "url(" + getPostBannerFromId(post.id) + ")"

    /** @type {import("$lib/posts").Link[]} 링크 목록 */
    let links = post.preview?.link ?? []

    // 글 읽어보기 링크가 필요하고
    if (post.hasPost) {
        const postUrl = `/posts/${post.id}`

        // 포함되어 있지 않다면 추가하기
        if (links.filter((link) => link.src == postUrl).length == 0) {
            links.push(getLinkObject(postUrl))
            links = links
        }
    }
</script>

<div class="plate">
    <div class="content">
        <h2 class="title">{post.title}</h2>

        {#if post.preview != null}
            <p class="subtitle">{@html post.preview.description}</p>

            {#each post.preview.content as line}
                <p>{@html line}</p>
            {/each}
        {/if}

        {#if links.length != 0}
            <div class="links">
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
            </div>
        {/if}
    </div>

    <div
        class="background"
        style="--background: {background}; --position: {post.preview?.position ?? 'center'}">
    </div>

    <div class="filter"></div>
</div>

<style>
    .plate {
        --width: 320px;
        --height: 480px;

        width: var(--width);
        height: var(--height);

        --plate-padding: 20px;

        flex-shrink: 0;
    }

    .content {
        width: var(--width);
        height: var(--height);
        background: transparent;

        position: relative;
        top: 0;
        z-index: 5;

        padding: var(--plate-padding);

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
        font-weight: bold;

        margin-top: 0;
        margin-bottom: 20px;
    }

    .subtitle {
        margin-top: -20px;
        margin-bottom: 20px;
    }

    .links {
        position: absolute;
        left: var(--plate-padding);
        bottom: var(--plate-padding);
    }
</style>
