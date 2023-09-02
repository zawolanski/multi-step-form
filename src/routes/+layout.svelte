<script>
	import '@fontsource/ubuntu/400.css';
	import '@fontsource/ubuntu/500.css';
	import '@fontsource/ubuntu/700.css';
	import '../app.scss';
</script>

<div class="mainContainer">
	<div class="container">
		<slot />
	</div>
</div>

<style lang="scss">
	.mainContainer {
		@media (min-width: $tablet) {
			height: 100vh;
			display: flex;
			justify-content: center;
			align-items: center;

			@media (max-height: 620px) {
				align-items: flex-start;
			}
		}
	}

	.container {
		min-height: 100vh;
		position: relative;
		overflow: auto;
		
		@media (min-width: $tablet) {
			margin: 1rem;
			min-height: auto;
			width: 100%;
			max-width: 94rem;
			background-color: $white;
			padding: 1.6rem;
			border-radius: 1.5rem;
			box-shadow: $mainWrapperShadow;
			display: flex;
			height: 60rem;
		}
	}
</style>
