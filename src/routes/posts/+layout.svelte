<script>
    import { onDestroy } from "svelte"
    import { page } from "$app/stores"
    import { RefreshTableOfContents } from "$lib/store"
    import { PostList, getPostDate } from "$lib/posts"
    import { getPostBannerFromId } from "$lib/banner"

    import Intro from "$lib/props/Intro.svelte"
    import Content from "$lib/props/Content.svelte"
    import TagWrapper from "$lib/layout/TagWrapper.svelte"
    import Tag from "$lib/props/Tag.svelte"

    let isPostMode = false

    /** * @type {import("$lib/posts").Post | null} */
    let post

    /** @type {function|null} */
    let unsubscriber = null

    onDestroy(() => {
        if (unsubscriber != null) {
            unsubscriber()
        }
    })

    unsubscriber = page.subscribe((e) => {
        const routeId = e?.route?.id ?? ""

        if (routeId == "/posts" || routeId == "/posts/") {
            isPostMode = false
        } else {
            getPostId()
            isPostMode = true
            RefreshTableOfContents.set(true)
        }
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
