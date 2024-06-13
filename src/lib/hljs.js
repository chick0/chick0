import hljs from "highlight.js/lib/core"
import csharp from "highlight.js/lib/languages/csharp"
import markdown from "highlight.js/lib/languages/markdown"
import python from "highlight.js/lib/languages/python"

import "highlight.js/styles/atom-one-dark.min.css"

hljs.registerLanguage("cs", csharp)
hljs.registerLanguage("markdown", markdown)

// @ts-ignore
hljs.registerLanguage("python", python)

/**
 * @param {HTMLElement} element
 */
export function highlightElement(element) {
    hljs.highlightElement(element)
}
