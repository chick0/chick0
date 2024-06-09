<script>
    import Intro from "$lib/component/Intro.svelte"
    import Content from "$lib/component/Content.svelte"
    import { PostList } from "$lib/posts"
</script>

<Intro
    title="안녕하세요!"
    description="이 페이지에서는 제 프로젝트를 소개하는 글을 확인할 수 있습니다."
    image="linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)"
    returnTo="/"
    height="300px" />

<Content>
    {#each PostList as post}
        <a id={post.id} href="/posts/{post.id}">
            <div class="post-info" style="--color: {post.color}">
                <h2>{post.title}</h2>
                <p>{post.description}</p>

                <div class="tags">
                    {#each post.tags as tag}
                        <div class="tag"><i class="fa fa-tag"></i> {tag}</div>
                    {/each}
                </div>
            </div>
        </a>
    {/each}
</Content>

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

    .post-info:hover h2,
    .post-info:focus h2 {
        text-decoration: underline;
    }

    .tags {
        display: flex;
        flex-wrap: nowrap;
        gap: 5px;
        padding-top: 8px;
        padding-bottom: 8px;
    }

    .tag {
        background: #000;
        color: #fff;
        padding-left: 5px;
        padding-right: 5px;
        border-radius: 0.25rem;
    }
</style>
