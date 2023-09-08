<script lang="ts">
	import { addOnsOptions } from '$lib/data/addOns';
	import { plansOptions } from '$lib/data/plans';
	import type { Keys } from '$lib/data/steps';
	import Text from './text.svelte';
	import type { FormValues } from 'svelte-use-form/models/form';

	export let values: FormValues<Keys>;
	export let currentStep: number;

	$: [selectedPlan] = plansOptions.filter(({ id }) => values.plan === id);
	$: selectedAddOns = addOnsOptions.filter(({ id }) => values[id] === 'checked');
	$: totalPriceMonth =
		selectedPlan.price.month + selectedAddOns.reduce((acc, cur) => acc + cur.price.month, 0);
	$: totalPriceYear =
		selectedPlan.price.year + selectedAddOns.reduce((acc, cur) => acc + cur.price.year, 0);
	$: isYearlyBilling = values.duration === 'checked';
</script>

<Text>
	Finishing up
	<svelte:fragment slot="text">Double-check everything looks OK before confirming.</svelte:fragment>
</Text>
<div class="summary">
	<div class="plan">
		<div>
			<p>{values.plan} ({isYearlyBilling ? 'Yearly' : 'Monthly'})</p>
			<button
				tabindex={currentStep === 4 ? 0 : -1}
				on:click={() => {
					currentStep = 2;
				}}>Change</button
			>
		</div>
		<p>${isYearlyBilling ? `${selectedPlan.price.year}/yr` : `${selectedPlan.price.month}/mo`}</p>
	</div>
	{#if selectedAddOns.length > 0}
		<div class="divider" />
		{#each selectedAddOns as addOn}
			<div class="addOn_container">
				<p>{addOn.header}</p>
				<p class="addOn_price">
					+${isYearlyBilling ? `${addOn.price.year}/yr` : `${addOn.price.month}/mo`}
				</p>
			</div>
		{/each}
	{/if}
</div>
<div class="total">
	<p>Total (per {isYearlyBilling ? 'year' : 'month'})</p>
	<p class="total_price">${isYearlyBilling ? `${totalPriceYear}/yr` : `${totalPriceMonth}/mo`}</p>
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
