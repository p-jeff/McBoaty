<script>
	import anime from "animejs";
	import { onMount } from "svelte";
	import { base } from "$app/paths";

	export let wind;
	let strength = 75000 / wind + 1000;

	onMount(() => {
		const boatPath = anime.path(".arch");

		let boatAnimation = anime({
			targets: ".boat",
			translateX: boatPath("x"),
			translateY: boatPath("y"),
			rotate: boatPath("angle"),
			direction: "alternate",
			easing: "linear",
			duration: strength,
			loop: true,
		});

		let armAnimation = anime({
			targets: ".arm",
			rotateX: 40,
			rotateZ: 30,
			direction: "alternate",
			duration: 5000,
			easing: "linear",
			loop: true,
		});
	});
</script>

<div class="boat">
	<img src="boat.svg" alt="Boat" class="boatImg" />
	<img src="guy.svg" alt="guy" class="guyImg" />
	<img src="arm.svg" alt="arm" class="arm" />
</div>

<svg><path class="arch" d="m 0 0 q 20 -1 40 0" /></svg>

<style>
	.boatImg {
		grid-area: 1/2;
		z-index: 2;
		width: 50%;
		margin-left: auto;
		margin-right: auto;
	}
	.guyImg {
		width: 10%;
		grid-area: 1/2;
		z-index: 1;
		margin-left: 50%;
		margin-right: auto;
		margin-top: -12%;
	}
	.arm {
		width: 10%;
		grid-area: 1/2;
		z-index: 3;
		margin-left: 45%;
		margin-right: auto;
		margin-top: -2%;
		transform-origin: 100% 0%;
	}
	.boat {
		margin-top: 27vh;
		display: grid;
		text-align: center;
	}
	svg {
		stroke: none;
		fill: none;
		position: absolute;
		left: -9999px;
	}
</style>
