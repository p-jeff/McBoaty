<script>
	import anime from "animejs";
	import { onMount } from "svelte";

	export let downfall;
	export let hour;

	function getMilliseconds() {
		let now = new Date();
		let hours = now.getHours();
		let minutes = now.getMinutes();
		let seconds = now.getSeconds();
		let milliseconds = now.getMilliseconds();

		let sum =
			hours * 3600000 + minutes * 60000 + seconds * 1000 + milliseconds;
		return sum;
	}

	let day = false;
	let morning = true;
	let currentTime;

	if (hour < 23) {
		currentTime = hour * 3600000;
	} else {
		currentTime = getMilliseconds();
	}

	console.log("currentTime: " + currentTime);

	if (currentTime <= 8 * 3600000) {
		day = false;
		morning = true;
	} else if (currentTime < 20 * 3600000) {
		day = true;
	} else if (currentTime >= 20 * 3600000) {
		day = false;
		morning = false;
	}

	function animationSetup() {
		let orbiterPath = anime.path(".sunCircle");

		let bgColor = anime.timeline({
			targets: "body",
			duration: 1,
			autoplay: false,
		});
		bgColor.add({
			backgroundColor: "#69788a",
		});
		bgColor.add({
			backgroundColor: "#c7dfff",
		});
		bgColor.add({
			backgroundColor: "#32324f",
		});

		if (day && downfall) {
			bgColor.seek(1);
		} else if (day) {
			bgColor.seek(2);
		} else if (!day) {
			bgColor.seek(3);
		}

		let orbiterAnimation = anime({
			targets: ".orbiter",
			translateX: orbiterPath("x"),
			translateY: orbiterPath("y"),
			easing: "linear",
			rotateZ: 360000,
			duration: 43200000,
			autoplay: false,
		});

		if (day) {
			//calculate position of sun depending on ms
			let t = currentTime - 28800000;
			orbiterAnimation.seek(t);
			orbiterAnimation.play();
		} else if (!day && morning) {
			let t = currentTime + 14400000;
			orbiterAnimation.seek(t);
			orbiterAnimation.play();
		} else if (!day && !morning) {
			let t = currentTime - 72000000;
			orbiterAnimation.seek(t);
			orbiterAnimation.play();
			console.log("night");
		} else {
			alert(
				"Something went Horribly Wrong - According to my calculations, it is neither day nor night"
			);
		}
	}

	onMount(animationSetup);
</script>

<svg>
	<path d="m 400 0 a 1 1 0 0 0 -800 0" class="sunCircle" />
</svg>

{#if day}
	<img src="Sun.svg" alt="sun" class="orbiter" />
{:else if !day}
	<img src="Moon.svg" alt="moon" class="orbiter" />
{/if}

<style>
	img {
		margin-top: 60vh;
		width: 10%;
		z-index: 1;
	}
	svg {
		stroke: none;
		fill: none;
		z-index: 0;
		position: absolute;
		left: -9999px;
	}
</style>
