<script lang="ts">
	export let isLastStep: boolean;
	export let isFirstStep: boolean;
	export let currentStep: number;

	const handleNext = () => currentStep++;
	const handleBack = () => currentStep--;
	const handleComplete = () => currentStep;
</script>

<div class:end={isFirstStep}>
	{#if !isFirstStep}
		<button on:click={handleBack} class="back" type="button">Go back</button>
	{/if}
	{#if !isLastStep}
		<button on:click={handleNext} class="next" type="button">Next step</button>
	{/if}
	{#if isLastStep}
		<button on:click={handleComplete} class="confirm" type="submit" on:submit|preventDefault>
			Confirm
		</button>
	{/if}
</div>

<style lang="scss">
	div {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		display: flex;
		justify-content: space-between;
		background-color: $white;
		padding: 1.6rem;

		&.end {
			justify-content: flex-end;
		}

		@media (min-width: $tablet) {
			position: relative;
			padding: 1.6rem 0;
		}
	}

	button {
		font-family: Ubuntu;
		font-size: 1.4rem;
		font-weight: 500;
		border: 0;
		border-radius: 0.4rem;
		padding: 1.2rem 1.6rem;
		cursor: pointer;
		transition: background-color 0.15s, color 0.15s;
		background: transparent;
		color: $white;

		&.back {
			color: $coolGray;

			&:hover {
				color: $marineBlue;
			}
		}

		&.next {
			background-color: $marineBlue;

			&:hover {
				background-color: $marineBlueHover;
			}
		}

		&.confirm {
			background-color: $purplishBlue;

			&:hover {
				background-color: $purplishBlueHover;
			}
		}

		@media (min-width: $tablet) {
			padding: 1.4rem 2.5rem;
			font-size: 1.6rem;
			border-radius: 0.8rem;
		}
	}
</style>
