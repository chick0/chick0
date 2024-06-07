<script>
    import { onMount } from "svelte"
    import { Confetti } from "svelte-confetti"

    /** 팬케이크를 다 먹었는가 여부 */
    let isPancakeOver = false

    /** 먹은 팬케이크 개수 */
    let count = 0

    $: if (count == 3) {
        isPancakeOver = true
    } else {
        isPancakeOver = false
    }

    onMount(() => {
        document.querySelectorAll(".pancake").forEach((element) => {
            // @ts-expect-error
            const handler = element.dataset.handler

            if (handler == null) {
                // @ts-expect-error
                element.dataset.handler = "installed"

                element.addEventListener("click", (e) => {
                    // if (isPancakeOver) {
                    //     return
                    // }

                    /** @type {HTMLElement} */
                    // @ts-expect-error
                    const target = e.currentTarget

                    /** @type {("o"|"x")} */
                    // @ts-expect-error
                    const key = target.dataset.key ?? "x"

                    if (key == "o") {
                        target.innerText = "🥞"
                        target.dataset.key = "x"

                        count -= 1
                    } else {
                        target.innerText = "🍽"
                        target.dataset.key = "o"

                        count += 1
                    }
                })
            }
        })
    })
</script>

{#if isPancakeOver}
    <div class="confetti-wrapper">
        <Confetti x={[-5, 5]} y={[0, 0.1]} delay={[50, 2000]} amount={300} duration={3000} fallDistance="100vh" />
    </div>
{/if}

<div class="footer">
    <div>
        <div class="pancake">🥞</div>
        <div class="pancake">🥞</div>
        <div class="pancake">🥞</div>
    </div>
</div>

<style scoped>
    .footer {
        background-color: #000;
        color: #fff;
        height: 250px;
    }

    .footer > div {
        position: relative;
        display: inline-block;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        text-align: center;
    }

    .confetti-wrapper {
        position: fixed;
        top: -50px;
        left: 0;
        height: 100vh;
        width: 100vw;
        display: flex;
        justify-content: center;
        overflow: hidden;
        pointer-events: none;
    }

    .pancake {
        display: inline-block;
        width: 30px;
        cursor: pointer;
    }
</style>
