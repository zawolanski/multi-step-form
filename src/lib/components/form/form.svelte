<script lang="ts">
	import { useForm, required, email } from 'svelte-use-form';

	import { isFormValid, isConfirmed } from '$lib/store/form';
	import type { Keys } from '$lib/data/steps';

	import AddOns from './addOns.svelte';
	import Finishing from './finishing.svelte';
	import PersonalInfo from './personalInformation.svelte';
	import Plans from './plans.svelte';
	import Confirmation from './confirmation.svelte';

	const form = useForm<Keys>({
		plan: { initial: 'arcade' },
		onlineServices: { initial: '' },
		largerStorage: { initial: '' },
		customizableProfile: { initial: '' },
		name: { initial: '', validators: [required] },
		email: { initial: '', validators: [required, email] },
		phoneNumber: { initial: '', validators: [required] }
	});

	export let currentStep: number;

	$: isFormValid.set($form.valid);
</script>

<form
	use:form
	style={`transform: translateX(-${(currentStep - 1 + ($isConfirmed ? 1 : 0)) * 20}%)`}
>
	<div>
		<PersonalInfo {currentStep} bind:formData={$form} />
	</div>
	<div>
		<Plans {currentStep} values={$form.values} />
	</div>
	<div>
		<AddOns {currentStep} values={$form.values} />
	</div>
	<div>
		<Finishing bind:currentStep values={$form.values} />
	</div>
	<div>
		<Confirmation />
	</div>
</form>

<style lang="scss">
	div {
		background-color: $white;
		padding: 3.2rem 2.4rem;
		border-radius: 1rem;
		margin: 1.6rem;
		width: 100%;
		box-shadow: $mainWrapperShadow;
		margin-bottom: 8rem;
		height: fit-content;

		@media (min-width: $tablet) {
			margin: 0;
			padding: 2.4rem 10rem;
			box-shadow: none;
		}
	}

	form {
		margin-inline: auto;
		margin-top: 9.5rem;
		width: 500%;
		display: flex;
		transition: transform 0.15s;
		overflow: hidden auto;
		height: 100%;

		@media (min-width: $tablet) {
			margin: 0;
			padding: 0;
		}
	}
</style>
