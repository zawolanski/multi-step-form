<script lang="ts">
	import IconAdvanced from '$lib/assets/icon-advanced.svelte';
	import IconArcade from '$lib/assets/icon-arcade.svelte';
	import IconPro from '$lib/assets/icon-pro.svelte';
	import type { Keys } from '$lib/data/steps';
	import Text from './text.svelte';
	import type { FormValues } from 'svelte-use-form/models/form';

	export let values: FormValues<Keys>;

	$: isDurationChecked = values.duration === 'checked';
</script>

<Text>
	Select your plan
	<svelte:fragment slot="text">You have the option of monthly or yearly billing.</svelte:fragment>
</Text>
<div class="container">
	<div class="radio_container">
		<input id="arcade" name="plan" type="radio" value="arcade" checked={values.plan === 'arcade'} />
		<IconArcade />
		<label for="arcade">
			<span class="title">Arcade</span>
			<span class="price">$9/mo</span>
			{#if isDurationChecked}
				<span class="free">2 months free</span>
			{/if}
		</label>
	</div>
	<div class="radio_container">
		<input
			id="advanced"
			name="plan"
			type="radio"
			value="advanced"
			checked={values.plan === 'advanced'}
		/>
		<IconAdvanced />
		<label for="advanced">
			<span class="title">Advanced</span>
			<span class="price">$12/mo</span>
			{#if isDurationChecked}
				<span class="free">2 months free</span>
			{/if}
		</label>
	</div>
	<div class="radio_container">
		<input id="pro" name="plan" type="radio" value="pro" checked={values.plan === 'pro'} />
		<IconPro />
		<label for="pro">
			<span class="title">Pro</span>
			<span class="price">$15/mo</span>
			{#if isDurationChecked}
				<span class="free">2 months free</span>
			{/if}
		</label>
	</div>
</div>
<div class="toggle_container">
	<input id="duration" type="checkbox" role="switch" name="duration" checked={isDurationChecked} />
	<label for="duration" class="visuallyhidden">Monthly subscription</label>
	<div class="state">
		<div class="monthly" aria-hidden="true" class:checked={isDurationChecked}>Monthly</div>
		<div class="position_container" class:checked={isDurationChecked} />
		<div class="yearly" aria-hidden="true" class:checked={!isDurationChecked}>Yearly</div>
	</div>
</div>

<style lang="scss">
	.container {
		display: flex;
		flex-direction: column;
		gap: 1.4rem;
		margin-bottom: 2.4rem;
	}

	.radio_container {
		border-radius: 0.8rem;
		border: 1px solid $lightGray;
		position: relative;
		padding: 1.6rem;
		display: flex;
		gap: 1.4rem;
		transition: border-color 0.15s, background-color 0.15s;

		&:has(input[type='radio']:checked) {
			border-color: $purplishBlue;
			background-color: $veryLightGrey;
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
		}
	}

	.toggle_container {
		background-color: $alabaster;
		border-radius: 0.8rem;
		padding: 1.3rem;
		position: relative;

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
