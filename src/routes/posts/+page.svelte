<script>
    import { PostList } from "$lib/posts"
    import Box from "$lib/props/Box.svelte"
    import TagWrapper from "$lib/layout/TagWrapper.svelte"
    import Tag from "$lib/props/Tag.svelte"
    import Button from "$lib/props/Button.svelte"

    /** @type {string[]} 필터링 태그 목록 */
    let filteredTagList = []

    /**
     * 렌더 대상 글의 주소를 가져옵니다.
     *
     * @param {import("$lib/posts").Post} post 렌더 대상 글
     * @returns {string} 글의 주소
     */
    function getHref(post) {
        if (post.hasPost) {
            return `/posts/${post.id}`
        }

        return "#"
    }

    /**
     * 클릭한 글이 준비되었는지 테스트합니다.
     *
     * @param {Event} event 클릭 이벤트
     * @param {import("$lib/posts").Post} post 대상 글
     * @returns {boolean} 해당 글의 준비 완료 여부
     */
    function onPostClicked(event, post) {
        if (post.hasPost) {
            return true
        }

        event.preventDefault()
        event.stopPropagation()

        alert("죄송합니다. 해당 글은 지금 준비중입니다.")
        return false
    }

    /**
     * @param {import("$lib/posts").Post} post
     * @returns {boolean}
     */
    function testPostHasTag(post) {
        for (let i = 0; i < filteredTagList.length; i++) {
            let flag = false

            for (let j = 0; j < post.tags.length; j++) {
                if (filteredTagList[i] == post.tags[j]) {
                    flag = true
                }
            }

            if (!flag) {
                return false
            }
        }

        return true
    }

    /**
     * @param {Event} event
     * @param {string} tag
     */
    function onTagClicked(event, tag) {
        event.preventDefault()
        event.stopPropagation()

        if (filteredTagList.indexOf(tag) == -1) {
            filteredTagList.push(tag)
            filteredTagList = filteredTagList

            setTimeout(() => {
                location.replace("#_tag_filter")
            }, 100)
        }
    }

    /**
     * @param {string} tag
     */
    function onFilteredTagClicked(tag) {
        const index = filteredTagList.indexOf(tag)

        if (index > -1) {
            filteredTagList.splice(index, 1)
            filteredTagList = filteredTagList
        }
    }
</script>

{#if filteredTagList.length != 0}
    <Box id="_tag_filter" type="no-style">
        <p><b>{filteredTagList.length}개</b>의 필터를 적용했습니다.</p>

        <TagWrapper noPaddingBottom={true}>
            {#each filteredTagList as tag}
                <button on:click={() => onFilteredTagClicked(tag)}>
                    <Tag {tag} />
                </button>
            {/each}
        </TagWrapper>
    </Box>
{/if}

{#each PostList as post}
    {#if filteredTagList.length == 0 || testPostHasTag(post)}
        <a
            id={post.id}
            class="button"
            href={getHref(post)}
            on:click={(event) => onPostClicked(event, post)}>
            <div class="post-info" style="--color: {post.color}">
                <h2>{post.title}</h2>
                <p class="description">{@html post.description}</p>

                <TagWrapper>
                    {#each post.tags as tag}
                        <button on:click={(event) => onTagClicked(event, tag)}>
                            <Tag {tag} />
                        </button>
                    {/each}
                </TagWrapper>
            </div>
        </a>
    {/if}
{/each}

<style>
    a {
        display: block;
        padding: 0;

        color: #000;
        text-decoration: none !important;
    }

    a:hover,
    a:focus {
        background-color: rgba(0, 0, 0, 0.05);
    }

    .post-info {
        padding-left: 10px;
        border-left: var(--color) 5px solid;
    }

    /* tag button */
    button {
        background: transparent;
        border: transparent;
        padding: 0;
        cursor: pointer;
    }

    .description {
        margin-top: -20px;
    }
</style>
