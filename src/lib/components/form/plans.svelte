<script lang="ts">
	import type { FormValues } from 'svelte-use-form/models/form';

	import IconAdvanced from '$lib/assets/icon-advanced.svelte';
	import IconArcade from '$lib/assets/icon-arcade.svelte';
	import IconPro from '$lib/assets/icon-pro.svelte';
	import { plansOptions } from '$lib/data/plans';
	import type { Keys } from '$lib/data/steps';

	import Text from './Text.svelte';

	export let values: FormValues<Keys>;
	export let currentStep: number;

	$: isYearlyBilling = values.duration === 'checked';
</script>

<Text>
	Select your plan
	<svelte:fragment slot="text">You have the option of monthly or yearly billing.</svelte:fragment>
</Text>
<div class="container">
	{#each plansOptions as { id, header, yearText, icon, price }}
		<div class="radio_container">
			<input
				{id}
				name="plan"
				type="radio"
				value={id}
				checked={values.plan === id}
				tabindex={currentStep === 2 ? 0 : -1}
			/>
			<svelte:component this={icon} />
			<label for={id}>
				<span class="title">{header}</span>
				<span class="price">
					{#if isYearlyBilling}
						${price.year}/yr
					{:else}
						${price.month}/mo
					{/if}
				</span>
				{#if isYearlyBilling}
					<span class="free">{yearText}</span>
				{/if}
			</label>
		</div>
	{/each}
</div>
<div class="toggle_container">
	<input
		id="duration"
		type="checkbox"
		role="switch"
		name="duration"
		checked={isYearlyBilling}
		tabindex={currentStep === 2 ? 0 : -1}
	/>
	<label for="duration" class="visuallyhidden">Monthly subscription</label>
	<div class="state">
		<div class="monthly" aria-hidden="true" class:checked={isYearlyBilling}>Monthly</div>
		<div class="position_container" class:checked={isYearlyBilling} />
		<div class="yearly" aria-hidden="true" class:checked={!isYearlyBilling}>Yearly</div>
	</div>
</div>

<style lang="scss">
	.container {
		display: flex;
		flex-direction: column;
		gap: 1.4rem;
		margin-bottom: 2.4rem;

		@media (min-width: $tablet) {
			flex-direction: row;
			gap: 1.8rem;
			margin-bottom: 3.2rem;
		}
	}

	.radio_container {
		border-radius: 0.8rem;
		border: 1px solid $lightGray;
		position: relative;
		padding: 1.6rem;
		display: flex;
		gap: 1.4rem;
		transition: border-color 0.15s, background-color 0.15s;

		@media (min-width: $tablet) {
			padding: 2rem 1.8rem;
			flex-direction: column;
			flex-basis: 33.33%;
			gap: 4rem;
		}

		&:has(input[type='radio']:checked) {
			border-color: $purplishBlue;
			background-color: $veryLightGrey;
		}

		&:has(input[type='radio']:focus) {
			outline: solid;
		}

		label {
			display: flex;
			flex-direction: column;
			gap: 0.7rem;

			.title {
				font-size: 1.6rem;
				font-weight: 500;
				color: $marineBlue;
			}

			.price {
				font-size: 1.4rem;
				color: $coolGray;
			}

			.free {
				font-size: 1.2rem;
				color: $marineBlue;
			}
		}

		input[type='radio'] {
			width: 100%;
			height: 100%;
			cursor: pointer;
			opacity: 0;
			position: absolute;
			top: 0;
			left: 0;
			margin: 0;
			z-index: 2;
		}
	}

	.toggle_container {
		background-color: $alabaster;
		border-radius: 0.8rem;
		padding: 1.3rem;
		position: relative;

		.state {
			display: flex;
			gap: 2.4rem;
			justify-content: center;

			.position_container {
				width: 3.8rem;
				height: 2rem;
				border-radius: 1rem;
				background-color: $marineBlue;
				position: relative;

				&::after {
					content: '';
					position: absolute;
					border-radius: 50%;
					background-color: $white;
					height: 1.2rem;
					width: 1.2rem;
					top: 0.4rem;
					left: 0.4rem;
					transition: transform 0.15s;
				}

				&.checked::after {
					transform: translateX(150%);
				}
			}

			.monthly,
			.yearly {
				color: $marineBlue;
				font-size: 1.4rem;
				font-weight: 500;

				&.checked {
					color: $coolGray;
				}
			}
		}

		input[type='checkbox'] {
			width: 100%;
			height: 100%;
			cursor: pointer;
			opacity: 0;
			position: absolute;
			top: 0;
			left: 0;
			margin: 0;
			z-index: 2;
		}

		input[type='checkbox']:focus ~ .state > .position_container {
			outline: solid;
		}
	}

	.visuallyhidden {
		border: 0;
		clip: rect(0 0 0 0);
		height: 1px;
		margin: -1px;
		overflow: hidden;
		padding: 0;
		position: absolute;
		width: 1px;
	}
</style>
