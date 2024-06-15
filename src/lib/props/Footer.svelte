<script>
    import Button from "$lib/props/Button.svelte"
    import CenterWrapper from "../layout/CenterWrapper.svelte"

    /** @type {import("$lib/types/ExtraButtonOption").ExtraButtonOption} */
    let buttonOption = {
        size: {
            width: "50px",
            height: "50px",
        },
        borderRadius: "50%",
        center: true,
    }
</script>

<div class="footer">
    <CenterWrapper>
        <Button
            href="#top"
            icon="fa-arrow-up"
            iconNoMargin={true}
            title="페이지 상단으로 이동하기"
            background="#fff"
            text="#000"
            extraButtonOption={buttonOption} />
    </CenterWrapper>
</div>

<style>
    .footer {
        background-color: #000;
        color: #fff;
        height: 250px;
    }
</style>
