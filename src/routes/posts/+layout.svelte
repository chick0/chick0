<script>
    import { onMount } from "svelte"
    import { page } from "$app/stores"
    import { PageReturn } from "$lib/store"
    import { PostList, getPostDate } from "$lib/posts"
    import { getPostBannerFromId } from "$lib/banner"

    import Intro from "$lib/component/Intro.svelte"
    import Content from "$lib/component/Content.svelte"
    import TagWrapper from "$lib/component/TagWrapper.svelte"
    import Tag from "$lib/component/Tag.svelte"

    let isReady = false
    let isPostMode = false

    /** * @type {import("$lib/posts").Post | null} */
    let post

    const re = /(\/posts[/]?)$/g

    $: if (re.test($page.route.id ?? "")) {
        isPostMode = false
    } else {
        getPostId()
        isPostMode = true
    }

    onMount(() => {
        isReady = true
    })

    function getPostId() {
        const uri = $page.route.id ?? ""
        const result = /(\/posts\/)([A-z-0-9]*)/.exec(uri)

        result?.forEach((match) => {
            if (!match.startsWith("/posts")) {
                post = getPostFromId(match)
            }
        })
    }

    /**
     * @param {string} postId
     * @returns {import("$lib/posts").Post | null}
     */
    function getPostFromId(postId) {
        for (let i = 0; i < PostList.length; i++) {
            const post = PostList[i]

            if (post.id == postId) {
                return post
            }
        }

        return null
    }
</script>

<a class="return {isReady ? 'ready' : ''}" href={$PageReturn}>
    <i class="fa fa-arrow-left"></i>
</a>

{#if isPostMode && post != null}
    <Intro
        title={post.title}
        description={post.description}
        tags={post.tags.join(",")}
        image={getPostBannerFromId(post.id)}>
        <p>
            <i class="fa fa-calendar-days"></i>&nbsp;&nbsp;{getPostDate(post).toLocaleDateString()}
        </p>

        <TagWrapper>
            {#each post.tags as tag}
                <Tag {tag} />
            {/each}
        </TagWrapper>
    </Intro>
{:else}
    <Intro
        title="안녕하세요!"
        description="이 페이지에서는 제 프로젝트를 소개하는 글을 확인할 수 있습니다."
        image="linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)"
        returnTo="/"
        height="300px"
        useFilterOptions={false} />
{/if}

<Content useTableOfContents={isPostMode}>
    <slot />
</Content>

<style>
    .return {
        position: fixed;
        --pos: 30px;
        top: var(--pos);
        left: var(--pos);
        z-index: 10;

        color: #fff;
        background-color: rgba(0, 0, 0, 0.5);

        border: 0;
        border-radius: 50%;

        width: 50px;
        height: 50px;
    }

    @media (max-width: 768px) {
        .return {
            --pos: 10px;
        }
    }

    .return i {
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .return:not(.ready) {
        opacity: 0;
    }

    .return.ready {
        opacity: 1;
        transition: 0.5s ease-out;
    }
</style>
