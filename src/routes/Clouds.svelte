<script>
	import anime from 'animejs';
	import { onMount } from 'svelte';
	import { base } from '$app/paths';

	export let cloudPercentage;
	let clouds = [];

	let numberOfClouds = Math.round(cloudPercentage / 10);
	console.log(cloudPercentage);

	for (let i = 1; i <= numberOfClouds; i++) {
		clouds.push({ id: { i }, class: `c${i}` });
	}

	onMount(() => {
		const cloudPath = anime.path('.cloudy');

		for (let i = 1; i <= clouds.length; i++) {
			let cloudAnimation = anime({
				targets: `.c${i}`,
				translateX: cloudPath('x'),
				translateY: cloudPath('y'),
				scale: Math.random() + 0.4,
				easing: 'linear',
				duration: 200000,
				delay: i * Math.floor(Math.random() * 100),
				direction: 'alternate',
				loop: true,
				autoplay: false
			});
			let p = Math.floor(Math.random() * 10000) * 20;
			console.log('p:' + p);
			cloudAnimation.seek(p);
			cloudAnimation.play();
		}
	});
</script>

{#each clouds as clouds}
	<img src="cloud.svg" alt="cloud" class={clouds.class} />
{/each}

<svg>
	<path d="m -97 0 q 15 -138 40 0 t 40 0 t 35 0 t 35 0 t 35 0" class="cloudy" />
</svg>

<style>
	img {
		width: 25%;
		margin-top: 15vh;
	}

	svg {
		stroke: none;
		fill: none;
		position: absolute;
		left: -9999px;
	}
</style>
