<script>
	import Text from './Text.svelte';
	import JsWaves from './JsWaves.svelte';
	import Button from './Button.svelte';
	import Time from './Time.svelte';
	import Boat from './Boat.svelte';
	import Clouds from './Clouds.svelte';

	let working = false;
	let rain = false;
	let snow = false;
	let mist = false;
	let thunder = false;
	let pkg;

	function disect(props) {
		/*if (props.weather[0].description === 'clear') {
		} else if (props.weather[0].description === 'rain') {
			rain = true;
			pkg.clouds = 5;
		} */

		pkg = {
			name: props.name,
			weather: props.weather[0].description,
			clouds: props.clouds.all,
			temp: props.main.temp,
			wind: props.wind.speed
		};

		working = true;
	}

	async function getWeather(lat, lon) {
		const response = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
		);

		const data = await response.json();
		console.log('response: ', data);

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
			alert('Geolocation is not supported by your browser');
		} else {
			navigator.geolocation.getCurrentPosition(success, error);
		}

		function success(position) {
			let latitude = position.coords.latitude;
			let longitude = position.coords.longitude;
			getWeather(latitude, longitude);
		}

		function error() {
			alert('Unable to retrieve your location');
		}
	}

	function clickHandler() {
		getLocation();
	}

	const API_KEY = '48a68e3cc741ec9730c4fae0dea41bc5';

	//https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=48a68e3cc741ec9730c4fae0dea41bc5
</script>

<svelte:head>
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway" />
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
			<Time />
		</div>

		<div class="clouds"><Clouds cloudPercentage={pkg.clouds} /></div>
	</div>
{:else}
	<h1>Welcome, this idea requires location data. Nothing will be stored or recorded.</h1>
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
