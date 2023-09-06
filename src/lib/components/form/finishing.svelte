<script lang="ts">
	import { addOnsOptions } from '$lib/data/addOns';
	import type { Keys } from '$lib/data/steps';
	import Text from './Text.svelte';
	import type { FormValues } from 'svelte-use-form/models/form';

	export let values: FormValues<Keys>;
	export let currentStep: number;

	$: selectedAddOns = addOnsOptions.filter(({ id }) => values[id] === 'checked');
	$: isMonthly = values.duration === '';
</script>

<Text>
	Finishing up
	<svelte:fragment slot="text">Double-check everything looks OK before confirming.</svelte:fragment>
</Text>
<div class="summary">
	<div class="plan">
		<div>
			<p>{values.plan} ({isMonthly ? 'Monthly' : 'Yearly'})</p>
			<button tabindex={currentStep === 4 ? 0 : -1}>Change</button>
		</div>
		<p>$90/{isMonthly ? 'mo' : 'yr'}</p>
	</div>
	{#if selectedAddOns.length > 0}
		<div class="divider" />
		{#each selectedAddOns as addOn}
			<div class="addOn_container">
				<p>{addOn.header}</p>
				<p class="addOn_price">+{addOn.price}/{isMonthly ? 'mo' : 'yr'}</p>
			</div>
		{/each}
	{/if}
</div>
<div class="total">
	<p>Total (per {isMonthly ? 'month' : 'year'})</p>
	<p class="total_price">$120/{isMonthly ? 'mo' : 'yr'}</p>
</div>

<style lang="scss">
	.summary {
		border-radius: 0.8rem;
		padding: 1.6rem;
		background-color: $alabaster;
		display: flex;
		flex-direction: column;
		gap: 1.2rem;
		margin-bottom: 2.4rem;
		font-size: 1.4rem;
		color: $coolGray;

		.plan {
			display: flex;
			justify-content: space-between;
			align-items: center;
			color: $marineBlue;

			& > div {
				p {
					text-transform: capitalize;
					margin-bottom: 0.3rem;
					font-weight: 500;
				}

				button {
					background: transparent;
					border: 0;
					font-family: Ubuntu;
					font-size: 1.4rem;
					line-height: 2rem;
					text-decoration: underline;
					padding: 0;
					cursor: pointer;
					color: $coolGray;
				}
			}

			& > p {
				font-weight: 700;
			}
		}

		.divider {
			height: 0.1rem;
			background-color: $coolGray;
			opacity: 0.2;
		}

		.addOn_container {
			display: flex;
			justify-content: space-between;

			& > p {
				line-height: 2rem;
			}

			.addOn_price {
				color: $marineBlue;
			}
		}
	}

	.total {
		display: flex;
		justify-content: space-between;
		margin-bottom: 2.4rem;
		font-size: 1.4rem;
		color: $coolGray;
		padding-inline: 1.6rem;

		.total_price {
			font-size: 1.6rem;
			color: $purplishBlue;
			font-weight: 700;
		}
	}
</style>
