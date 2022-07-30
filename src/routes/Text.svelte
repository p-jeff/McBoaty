<script>
	export let name;
	export let weather;
	export let clouds;
	export let temp;
	export let wind;
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css?family=Raleway"
	/>
</svelte:head>

<p>
	The weather is {name} is {weather} and it is {clouds}% cloudy, with {temp} degrees
	celsius. Current Windspeed is: {wind}
</p>

<style>
	p {
		font: 11px Raleway;
		position: absolute;
		bottom: 2px;
	}
</style>
