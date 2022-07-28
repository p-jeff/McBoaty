<script>
	import anime from "animejs";
	import { onMount } from "svelte";
	import Boat from "./Boat.svelte";
	import Time from "./Time.svelte";
	import { base } from "$app/paths";

	let wind = 20;
	let strength = 75000 / wind + 1000;

	onMount((wind) => {
		const wavePath = anime.path(".eight");
		const boatPath = anime.path(".arch");

		let waveAnimation = anime({
			targets: ".one",
			translateX: wavePath("x"),
			translateY: wavePath("y"),
			easing: "linear",
			duration: strength,
			loop: true,
		});

		let reverseWave = anime({
			targets: ".two",
			translateX: wavePath("x"),
			translateY: wavePath("y"),
			direction: "reverse",
			easing: "linear",
			duration: strength,
			loop: true,
		});
		let boat = anime({
			targets: ".boat",
			translateX: boatPath("x"),
			translateY: boatPath("y"),
			rotate: boatPath("angle"),
			direction: "alternate",
			easing: "linear",
			duration: strength / 2,
			loop: true,
		});
	});
</script>

<div class="container">
	<img src="wave_mirror.svg" alt="wave" class="wave one" />
	<img src="wave.svg" alt="wave" class="wave two" />
	<div class="boat">
		<Boat />
	</div>

	<div class="time"><Time /></div>
</div>

<svg>
	<path
		class="eight"
		d="m 43.75 25 q -43.75 18.75 0 37.5 q 12.5 6.25 25 -18.75 q 6.25 -25 18.75 -18.75 q 37.5 18.75 12.5 37.5 q -25 12.5 -31.25 -18.75 q -6.25 -25 -25 -18.75"
	/>
	<path class="arch" d="m 0 0 q 20 -1 40 0" />
</svg>

<style>
	.wave {
		max-width: 50%;
		margin-top: 50vh;
		margin-left: 20vw;
		margin-right: auto;
		display: block;
		width: 50%;
		grid-area: 1/2;
		text-align: center;
	}

	.time {
		grid-area: 1/2;
	}

	.boat {
		width: 50%;
		margin-top: 26vh;
		margin-left: auto;
		margin-right: auto;
		grid-area: 1/2;
		text-align: center;
		z-index: 1;
	}

	svg {
		stroke: none;
		fill: none;
		position: absolute;
		left: -9999px;
	}

	.container {
		display: grid;
		text-align: center;
	}

	.one {
		z-index: 0;
	}
	.two {
		z-index: 2;
	}
</style>
