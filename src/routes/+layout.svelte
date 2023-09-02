<script>
	import '@fontsource/ubuntu/400.css';
	import '@fontsource/ubuntu/500.css';
	import '@fontsource/ubuntu/700.css';
	import '../app.scss';
</script>

<div>
	<slot />
</div>

<style lang="scss">
	div {
		min-height: 100vh;
		position: relative;
		overflow: auto;

		@media (min-width: $tablet) {
			min-height: auto;
			margin-inline: auto;
			width: 100%;
			max-width: 94rem;
			background-color: $white;
			padding: 1.6rem;
			border-radius: 1.5rem;
			box-shadow: $mainWrapperShadow;
			display: flex;
		}
	}
</style>
