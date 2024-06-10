<script>
    import { PostList } from "$lib/posts"
    import TagWrapper from "$lib/component/TagWrapper.svelte"
    import Tag from "$lib/component/Tag.svelte"

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
     * @param {Event} event
     * @param {string} tag
     */
    function onTagClicked(event, tag) {
        event.preventDefault()
        event.stopPropagation()

        alert("죄송합니다. 태그 선택 기능은 준비중입니다.")
    }
</script>

{#each PostList as post}
    <a id={post.id} href={getHref(post)} on:click={(event) => onPostClicked(event, post)}>
        <div class="post-info" style="--color: {post.color}">
            <h2>{post.title}</h2>
            <p>{@html post.description}</p>

            <TagWrapper>
                {#each post.tags as tag}
                    <button on:click={(event) => onTagClicked(event, tag)}>
                        <Tag {tag} />
                    </button>
                {/each}
            </TagWrapper>
        </div>
    </a>
{/each}

<style>
    a {
        --background: transpert;
        --text: #000;
        display: block;
        padding: 0;
    }

    a:hover,
    a:focus {
        --background: rgba(0, 0, 0, 0.05);
    }

    .post-info {
        padding-left: 10px;
        border-left: var(--color) 5px solid;
    }

    .post-info:hover h2 {
        text-decoration: underline;
    }

    /* tag button */
    button {
        background: transparent;
        border: transparent;
        padding: 0;
        cursor: pointer;
    }
</style>
