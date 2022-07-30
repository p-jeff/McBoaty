<script>
    import { onMount } from "svelte";

    export let strength;
    export let snow;

    let characters = ["🥳"];

    let confetti = new Array(strength)
        .fill()
        .map((_, i) => {
            return {
                character: characters[i % characters.length],
                x: Math.random() * 100,
                y: -20 - Math.random() * 100,
                r: 0.1 + Math.random() * 1,
            };
        })
        .sort((a, b) => a.r - b.r);

    onMount(() => {
        let frame;

        function loop() {
            frame = requestAnimationFrame(loop);

            confetti = confetti.map((emoji) => {
                emoji.y += 0.9 * emoji.r;
                if (emoji.y > 120) emoji.y = -20;
                return emoji;
            });
        }

        loop();

        return () => cancelAnimationFrame(frame);
    });
</script>

{#if snow}
    {#each confetti as c}
        <img
            src="snowflake.svg"
            alt="raindrop"
            class="drop"
            style="left: {c.x}%; top: {c.y}%; transform: scale({c.r})"
        />
    {/each}
{:else}
    {#each confetti as c}
        <img
            src="raindrop.svg"
            alt="raindrop"
            class="drop"
            style="left: {c.x}%; top: {c.y}%; transform: scale({c.r})"
        />
    {/each}
{/if}

<style>
    img {
        position: absolute;
        font-size: 5vw;
        user-select: none;
        max-width: 3%;
    }
</style>
