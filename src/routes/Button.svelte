<script>
	export let tag;
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css?family=Raleway"
	/>
</svelte:head>

<button on:click> {tag} </button>

<style>
	button {
		background: #e2e8f0;
		color: #64748b;
		border: unset;
		border-radius: 6px;
		padding: 0.75rem 1.5rem;
		cursor: pointer;
		font-family: Raleway;
		display: block;
		margin-left: auto;
		margin-right: auto;
	}
	button:hover {
		background: #cbd5e1;
		color: #475569;
	}
	button:focus {
		background: #94a3b8;
		color: #f1f5f9;
	}
</style>
