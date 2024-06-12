import { PostList } from "./src/lib/posts.js"
import { existsSync, mkdirSync, writeFileSync } from "fs"

PostList.forEach((post) => {
    const path = `./src/routes/posts/${post.id}`
    const file = path + "/+page.svelte"

    if (!existsSync(file)) {
        console.log(`[${post.title}]`, "대상 파일이 없습니다")

        if (!existsSync(path)) {
            mkdirSync(path)
        }

        writeFileSync(file, "\n")
    }
})
