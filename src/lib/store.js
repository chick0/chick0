import { writable } from "svelte/store"

export const PageReturn = writable("/")

export const RefreshTableOfContents = writable(false)

export const BodyLockConut = writable(0)

export function AddBodyLockCount() {
    BodyLockConut.update((n) => n + 1)
}

export function RemoveBodyLockCount() {
    BodyLockConut.update((n) => (n >= 1 ? n - 1 : 0))
}
