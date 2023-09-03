<script lang="ts">
	import Buttons from '$lib/components/buttons.svelte';
	import Form from '$lib/components/form/form.svelte';
	import Steps from '$lib/components/steps/wrapper.svelte';
	import { steps } from '$lib/data/steps';

	let currentStep = 1;
</script>

<Steps {currentStep} />
<div class="container">
	<Form {currentStep} />
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
		width: 100%;
		overflow: hidden;
	}
</style>
