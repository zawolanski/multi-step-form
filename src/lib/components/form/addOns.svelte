<script lang="ts">
	import { addOnsOptions } from '$lib/data/addOns';
	import type { Keys } from '$lib/data/steps';
	import Text from './Text.svelte';
	import type { FormValues } from 'svelte-use-form/models/form';

	export let values: FormValues<Keys>;
	export let currentStep: number;
</script>

<Text>
	Pick add-ons
	<svelte:fragment slot="text">Add-ons help enhance your gaming experience.</svelte:fragment>
</Text>
<div class="options_container">
	{#each addOnsOptions as { header, id, price, text }}
		<div class="option">
			<input {id} type="checkbox" name={id} checked={values[id] !== ''} tabindex={currentStep === 3 ? 0 : -1} />
			<label for={id}>
				<div class="label">
					<div class="box" />
					<div class="text_container">
						<span class="header">{header}</span>
						<span class="text">{text}</span>
					</div>
					<span class="price">+${price}/yr</span>
				</div>
			</label>
		</div>
	{/each}
</div>

<style lang="scss">
	.options_container {
		display: flex;
		flex-direction: column;
		gap: 1.2rem;
	}

	.option {
		position: relative;
		padding: 1.3rem 1.6rem;
		border-radius: 0.8rem;
		border: 1px solid $lightGray;
		transition: border-color 0.15s, background-color 0.15s;

		input[type='checkbox'] {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			z-index: 2;
			opacity: 0;
			cursor: pointer;
			margin: 0;
		}

		.label {
			display: flex;
			gap: 1.6rem;
			align-items: center;

			.box {
				width: 2rem;
				height: 2rem;
				// background-color: $purplishBlue;
				border-radius: 0.4rem;
				border: 1px solid $lightGray;
			}

			.text_container {
				display: flex;
				flex-direction: column;
				flex-grow: 1;
				gap: 0.3rem;

				.header {
					font-size: 1.4rem;
					font-weight: 500;
					color: $marineBlue;
				}

				.text {
					font-size: 1.2rem;
					color: $coolGray;
				}
			}

			.price {
				font-size: 1.2rem;
				color: $purplishBlue;
			}
		}
	}

	.option:has(input[type='checkbox']:checked) {
		border-color: $purplishBlue;
		background-color: $veryLightGrey;
	}
</style>
