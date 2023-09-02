<script lang="ts">
	import Step from './step.svelte';

	export let currentStep: number;
	const steps = [
		{
			step: 1,
			infoText: 'your info'
		},
		{
			step: 2,
			infoText: 'select plan'
		},
		{
			step: 3,
			infoText: 'add-ons'
		},
		{
			step: 4,
			infoText: 'summary'
		}
	];
</script>

<div>
	<ul>
		{#each steps as { step, infoText }}
			<Step {step} {currentStep} {infoText} />
		{/each}
	</ul>
</div>

<style lang="scss">
	div {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		z-index: -1;
		height: 16.8rem;
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		background-image: url('../../assets/bg-sidebar-mobile.svg');
		padding-top: 3.2rem;

		@media (min-width: $tablet) {
			position: relative;
			z-index: 1;
			border-radius: 1.5rem;
			width: 27rem;
			height: 100%;
			padding: 4rem 3.2rem;
			background-image: url('../../assets/bg-sidebar-desktop.svg');
		}
	}

	ul {
		display: flex;
		justify-content: center;
		gap: 1.6rem;

		@media (min-width: $tablet) {
			gap: 3.2rem;
			flex-direction: column;
		}
	}
</style>
