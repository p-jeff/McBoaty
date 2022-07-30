<script>
    import anime from "animejs";
    import { onMount } from "svelte";

    onMount(() => {
        let dropeAnimation = anime({
            targets: ".drop",
            translateY: 270,
            delay: anime.stagger(700), // increase delay by 100ms for each elements.
            loop: true,
        });
    });
</script>

<img src="raindrop.svg" alt="raindrop" class="drop" />
<img src="raindrop.svg" alt="raindrop" class="drop" />
<img src="raindrop.svg" alt="raindrop" class="drop" />

<style>
    .drop {
        max-width: 2%;
    }
</style>
