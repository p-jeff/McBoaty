<script>
	import Boat from "./Boat.svelte";
	import { base } from "$app/paths";

	export let wind;

	function calcIntensity(wind) {
		let intensity = { speed: "40s", intense: "50%" };

		if (wind < 3) {
			intensity.intense = "50%";
			intensity.speed = "60s";
		} else if (wind < 8) {
			intensity.intense = "40%";
			intensity.speed = "20s";
		} else if (wind < 14) {
			intensity.intense = "30%";
			intensity.speed = "10s";
		} else if (wind < 24) {
			intensity.intense = "30%";
			intensity.speed = "5s";
		} else {
			intensity.intense = "20%";
			intensity.speed = "3s";
		}

		return intensity;
	}

	let promise = calcIntensity(wind);
</script>

{#await promise then intensity}
	{@debug intensity}

	<div>
		<div
			class="boat"
			style="--delay: -2s; --index: 0; --intensity: 50%;--speed: {intensity.speed};"
		>
			<Boat />
		</div>

		<img
			src="wave_mirror.svg"
			alt="wave"
			style="--delay: -2s; --index: 0; --intensity: {intensity.intense};--speed: {intensity.speed};"
		/>
		<img
			src="wave.svg"
			alt="wave"
			style="--delay: -10s; --index: 1; --intensity: {intensity.intense}; --speed:{intensity.speed}; "
		/>
		<img
			src="wave.svg"
			alt="wave"
			style="--delay: -3s; --index: 5; --intensity: {intensity.intense}; --speed: {intensity.speed};"
		/>
		<img
			src="wave_mirror.svg"
			alt="wave"
			style="--delay: -5s; --index: 4; --intensity: {intensity.intense};--speed: {intensity.speed};"
		/>
	</div>
{/await}

<style>
	@keyframes wave {
		0% {
			max-width: 50%;
		}
		15% {
			transform: translate3D(1vw, 1vh, 0);
		}
		30% {
			transform: translate3D(1vw, 1vh, 0);
		}
		45% {
			transform: translate3D(0vw, 0vh, 0);
		}
		50% {
			max-width: var(--intensity);
		}
		70% {
			transform: translate3D(-1vw, -1vh, 0);
		}
		85% {
			transform: translate3D(-1vw, 1vh, 0);
		}
		100% {
			transform: translate3D(0vw, 0vh, 0);
			max-width: 50%;
		}
	}

	div {
		display: flex;
		justify-content: center;
		overflow: hidden;
	}

	img {
		max-width: 50%;
		position: absolute;
		margin-top: 50vh;
		animation: wave var(--speed) linear var(--delay) infinite;
		z-index: var(--index);
	}

	.boat {
		animation: wave var(--speed) linear var(--delay) infinite;
		z-index: var(--index);
		position: absolute;
		width: 100%;
		height: 10vh;
		margin-top: 47vh;
	}
</style>
