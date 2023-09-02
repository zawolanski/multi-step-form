<script lang="ts">
	import Buttons from '$lib/components/buttons.svelte';
	import Steps from '$lib/components/steps/wrapper.svelte';
	import { steps } from '$lib/data/steps';

	let currentStep = 1;
</script>

<Steps {currentStep} />
<div class="container">
	<form>
		<div>Form</div>
	</form>
	<Buttons
		bind:currentStep
		isFirstStep={currentStep === 1}
		isLastStep={steps.length === currentStep}
	/>
</div>

<style lang="scss">
	.container {
		display: flex;
		flex-direction: column;
		flex-grow: 1;
		padding: 0 10rem;
	}

	form {
		margin-inline: auto;
		padding: 0 1.6rem;
		margin-top: 16.8rem;
		background-color: $white;
		flex-grow: 1;

		@media (min-width: $tablet) {
			margin: 0;
			padding: 0;
		}
	}
</style>
