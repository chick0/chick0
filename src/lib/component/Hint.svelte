<script>
    /** @type {string} */
    export let to

    /** @type {string} */
    export let icon = "fa-arrow-down"

    /** @type {string} */
    export let height = "120px"
</script>

<div class="hint" style="--height: {height}">
    <a href={to}><i class="fa {icon}"></i></a>
</div>

<style>
    .hint {
        height: 0;
        width: 100%;

        position: relative;
        top: calc(var(--height) * -1);

        text-align: center;
    }

    .hint a {
        --background: rgba(0, 0, 0, 0.4);
        --text: #fff;
        /* animation: hint-bg-color 1.2s linear infinite; */

        display: inline-block;
        height: 50px;
        width: 50px;

        border-radius: 50%;
    }

    .hint a > i {
        position: relative;
        top: 50%;
        transform: translateY(-50%);
    }

    /*
    @keyframes hint-bg-color {
        0% {
            background-color: rgba(0, 0, 0, 0.4);
        }
        100% {
            background-color: rgba(0, 0, 0, 0.1);
        }
    } 
    */
</style>
