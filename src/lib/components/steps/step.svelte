<script lang="ts">
	export let step: number;
	export let currentStep: number;
  export let infoText: string;
</script>

<li>
	<div class="wrapper">
		<p class:active={currentStep === step}>{step}</p>
		<div class="step_info">
			<span class="step">step {step}</span>
			<span class="info">{infoText}</span>
		</div>
	</div>
</li>

<style lang="scss">
	.wrapper {
		@media (min-width: $tablet) {
			display: flex;
			gap: 1.6rem;
			align-items: center;
		}
	}

	p {
		margin: 0;
		color: $white;
		font-size: 1.4rem;
		font-weight: 700;
		border: 1px solid $white;
		border-radius: 50%;
		width: 3.3rem;
		height: 3.3rem;
		text-align: center;
		line-height: 3.3rem;

		&.active {
			color: $marineBlue;
			border-color: $lightBlue;
			background-color: $lightBlue;
		}
	}

	.step_info {
		display: none;

		@media (min-width: $tablet) {
			display: flex;
			flex-direction: column;
			gap: 0.4rem;
		}
	}

	.step {
		font-size: 1.2rem;
		color: $lightBlue;
		text-transform: uppercase;
	}

  .info {
    font-size: 1.4rem;
    color: $white;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    font-weight: 700;

  }
</style>
