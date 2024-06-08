import hljs from "highlight.js/lib/core"
import csharp from "highlight.js/lib/languages/csharp"

import "highlight.js/styles/atom-one-dark.min.css"

hljs.registerLanguage("cs", csharp)

export function highlightAll() {
    hljs.highlightAll()
}
