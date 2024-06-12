export type HeadingLevels = "heading-1" | "heading-2" | "heading-3" | ""

export type Heading = {
    level: HeadingLevels
    text: string
    node: Element
}
