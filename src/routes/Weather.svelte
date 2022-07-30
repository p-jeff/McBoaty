<script>
	import Text from "./Text.svelte";
	import JsWaves from "./JsWaves.svelte";
	import Button from "./Button.svelte";
	import Time from "./Time.svelte";
	import Boat from "./Boat.svelte";
	import Clouds from "./Clouds.svelte";
	import Rain from "./rain.svelte";

	let working = false;
	let downfall = false;
	let snow = false;
	let pkg;

	function disect(props) {
		pkg = {
			name: props.name,
			weather: props.weather[0].description,
			clouds: props.clouds.all,
			temp: props.main.temp,
			wind: props.wind.speed,
			rain: 0,
		};

		working = true;
		isDownfall(props.weather[0].id);
	}

	function isDownfall(code) {
		if (code === 300 || code === 301 || code === 302 || code === 500) {
			(downfall = true), (pkg.rain = 10);
		} else if (
			code === 310 ||
			code === 311 ||
			code === 312 ||
			code === 313 ||
			code === 314 ||
			code === 321 ||
			code === 501
		) {
			(downfall = true), (pkg.rain = 20);
		} else if (
			code === 502 ||
			code === 503 ||
			code === 520 ||
			code === 521
		) {
			(downfall = true), (pkg.rain = 50);
		} else if (code === 504 || code === 522 || code === 531) {
			(downfall = true), (pkg.rain = 100);
		} else if (
			code === 601 ||
			code === 602 ||
			code === 603 ||
			code === 620 ||
			code === 621
		) {
			(downfall = true), (snow = true), (pkg.rain = 50);
		} else if (code === 604 || code === 622) {
			(downfall = true), (snow = true), (pkg.rain = 100);
		}
	}

	async function getWeather(lat, lon) {
		const response = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
		);

		const data = await response.json();
		console.log("response: ", data);

		if (response.ok) {
			disect(data);
			working = true;
			return data;
		} else {
			throw new Error(data);
		}
	}

	async function getLocation() {
		if (!navigator.geolocation) {
			alert("Geolocation is not supported by your browser");
		} else {
			navigator.geolocation.getCurrentPosition(success, error);
		}

		function success(position) {
			let latitude = position.coords.latitude;
			let longitude = position.coords.longitude;
			getWeather(latitude, longitude);
		}

		function error() {
			alert("Unable to retrieve your location");
		}
	}

	function clickHandler() {
		getLocation();
	}

	const API_KEY = "48a68e3cc741ec9730c4fae0dea41bc5";

	//https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=48a68e3cc741ec9730c4fae0dea41bc5
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css?family=Raleway"
	/>
</svelte:head>

{#if working}
	<Text {...pkg} />

	<div class="container">
		<div class="waves">
			<JsWaves wind={pkg.wind} />
		</div>

		<div class="boat">
			<Boat wind={pkg.wind} />
		</div>

		<div class="time">
			<Time {downfall} />
		</div>

		<div class="clouds"><Clouds cloudPercentage={pkg.clouds} /></div>

		{#if downfall}
			<div class="rain"><Rain {snow} strength={pkg.rain} /></div>
		{/if}
	</div>
{:else}
	<h1>
		Welcome, this idea requires location data. Nothing will be stored or
		recorded.
	</h1>
	<Button on:click={clickHandler} tag="Enter" />
{/if}

<style>
	h1 {
		font: 20px Raleway;
		margin-left: auto;
		margin-right: auto;
		text-align: center;
		margin-top: 20%;
	}

	.time {
		grid-area: 1/2;
		z-index: 3;
	}
	.waves {
		grid-area: 1/2;
		z-index: 2;
	}

	.clouds {
		grid-area: 1/2;
		z-index: 4;
	}

	.rain {
		grid-area: 1/2;
		z-index: 4;
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

	.container {
		display: grid;
		text-align: center;
	}
</style>
