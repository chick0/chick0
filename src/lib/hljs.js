import hljs from "highlight.js/lib/core"
import javascript from "highlight.js/lib/languages/javascript"
import csharp from "highlight.js/lib/languages/csharp"

hljs.registerLanguage("javascript", javascript)
hljs.registerLanguage("cs", csharp)

console.log(hljs.listLanguages().length)
import "highlight.js/styles/atom-one-dark.min.css"

export function highlightAll() {
    hljs.highlightAll()
}
