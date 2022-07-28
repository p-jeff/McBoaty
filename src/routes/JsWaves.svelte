<script>
	import anime from 'animejs';
	import { onMount } from 'svelte';
	import Boat from './Boat.svelte';
	import Clouds from './Clouds.svelte';

	export let wind;
	let strength = 75000 / wind + 1000;

	onMount((wind) => {
		const wavePath = anime.path('.eight');

		let waveAnimation = anime({
			targets: '.one',
			translateX: wavePath('x'),
			translateY: wavePath('y'),
			easing: 'linear',
			duration: strength,
			loop: true
		});

		let reverseWave = anime({
			targets: '.two',
			translateX: wavePath('x'),
			translateY: wavePath('y'),
			direction: 'reverse',
			easing: 'linear',
			duration: strength,
			loop: true
		});
	});
</script>

<div class="container">
	<img src="wave_mirror.svg" alt="wave" class="wave one" />
	<img src="wave.svg" alt="wave" class="wave two" />
</div>

<svg>
	<path
		class="eight"
		d="m 43.75 25 q -43.75 18.75 0 37.5 q 12.5 6.25 25 -18.75 q 6.25 -25 18.75 -18.75 q 37.5 18.75 12.5 37.5 q -25 12.5 -31.25 -18.75 q -6.25 -25 -25 -18.75"
	/>
</svg>

<style>
	.wave {
		max-width: 50%;
		margin-top: 50vh;
		margin-left: 20vw;
		margin-right: auto;
		display: block;
		width: 50%;
		text-align: center;
		grid-area: 1/2;
	}

	svg {
		stroke: none;
		fill: none;
		position: absolute;
		left: -9999px;
	}

	.container {
		display: grid;
	}
</style>
