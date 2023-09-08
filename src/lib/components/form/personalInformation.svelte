<script lang="ts">
	import type { Form, FormControlsSpecified, FormControlsUnspecified } from 'svelte-use-form';
	import Text from './text.svelte';
	import type { Keys } from '$lib/data/steps';

	export let formData: Form<Keys> & FormControlsSpecified<Keys> & FormControlsUnspecified;
	export let currentStep: number;

	$: isNameTouched = formData.name.touched;
	$: isNameValid = formData.name.valid;
	$: isEmailTouched = formData.email.touched;
	$: isEmailValid = formData.email.valid;
	$: isPhoneNumberTouched = formData.phoneNumber.touched;
	$: isPhoneNumberValid = formData.phoneNumber.valid;

	$: isNameInvalid = isNameTouched && !isNameValid;
	$: isEmailInvalid = isEmailTouched && !isEmailValid;
	$: isPhoneNumberInvalid = isPhoneNumberTouched && !isPhoneNumberValid;
</script>

<Text>
	Personal info
	<svelte:fragment slot="text">
		Please provide your name, email address, and phone number.
	</svelte:fragment>
</Text>
<div class="container">
	<div class="textField">
		<div class="label_container">
			<label for="name">Name</label>
			{#if isNameInvalid && formData.name.errors.required}
				<span class="error">This field is required</span>
			{/if}
		</div>
		<input
			id="name"
			name="name"
			placeholder="e.g. Stephen King"
			class:invalid={isNameInvalid}
			aria-invalid={isNameInvalid}
			tabindex={currentStep === 1 ? 0 : -1}
		/>
	</div>
	<div class="textField">
		<div class="label_container">
			<label for="email">Email Address</label>
			{#if isEmailInvalid && Object.keys(formData.email.errors).length > 0}
				{#if formData.email.errors.required}
					<span class="error">This field is required</span>
				{:else}
					<span class="error">Invalid email address format</span>
				{/if}
			{/if}
		</div>
		<input
			id="email"
			name="email"
			type="email"
			placeholder="e.g. stephenking@lorem.com"
			class:invalid={isEmailInvalid}
			aria-invalid={isEmailInvalid}
			tabindex={currentStep === 1 ? 0 : -1}
		/>
	</div>
	<div class="textField">
		<div class="label_container">
			<label for="phoneNumber">Phone Number</label>
			{#if isPhoneNumberInvalid && formData.phoneNumber.errors.required}
				<span class="error">This field is required</span>
			{/if}
		</div>
		<input
			id="phoneNumber"
			name="phoneNumber"
			placeholder="e.g. +1 234 567 890"
			class:invalid={isPhoneNumberInvalid}
			aria-invalid={isPhoneNumberInvalid}
			tabindex={currentStep === 1 ? 0 : -1}
		/>
	</div>
</div>

<style lang="scss">
	.container {
		display: flex;
		flex-direction: column;
		gap: 1.6rem;

		@media (min-width: $tablet) {
			gap: 2.4rem;
		}
	}

	.textField {
		display: flex;
		flex-direction: column;
		gap: 0.3rem;

		@media (min-width: $tablet) {
			gap: 0.8rem;
		}

		.label_container {
			display: flex;
			justify-content: space-between;
			align-items: center;

			label {
				font-size: 1.2rem;
				color: $marineBlue;

				@media (min-width: $tablet) {
					font-size: 1.4rem;
				}
			}

			.error {
				font-size: 1.2rem;
				font-weight: 700;
				color: $strawberryRed;

				@media (min-width: $tablet) {
					font-size: 1.4rem;
				}
			}
		}

		input {
			border-radius: 0.4rem;
			border: 1px solid $borderColor;
			padding: 1.1rem 1.6rem;
			font-size: 1.5rem;
			font-weight: 500;
			color: $marineBlue;
			outline: none;
			transition: border-color 0.15s;

			&.invalid {
				border-color: $strawberryRed;
			}

			&:focus,
			&:hover {
				border-color: $purplishBlue;
			}

			&::placeholder {
				color: $coolGray;
			}
		}
	}
</style>
