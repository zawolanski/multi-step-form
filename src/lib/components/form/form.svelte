<script lang="ts">
	import { useForm, required, email } from 'svelte-use-form';

	import { isFormValid } from '$lib/store/form';
	import type { Keys } from '$lib/data/steps';

	import AddOns from './addOns.svelte';
	import Finishing from './finishing.svelte';
	import PersonalInfo from './PersonalInformation.svelte';
	import Plans from './plans.svelte';

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

	$: {
		console.log($form.values);
		console.log($form);

		isFormValid.set($form.valid);
	}
</script>

<form use:form style={`transform: translateX(-${(currentStep - 1) * 25}%)`}>
	<div>
		<PersonalInfo bind:formData={$form} />
	</div>
	<div>
		<Plans values={$form.values} />
	</div>
	<div>
		<AddOns values={$form.values} />
	</div>
	<div>
		<Finishing values={$form.values} />
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
		width: 400%;
		display: flex;
		transition: transform 0.15s;
		overflow: hidden;

		@media (min-width: $tablet) {
			margin: 0;
			padding: 0;
		}
	}
</style>
