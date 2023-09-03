<script lang="ts">
	import type { Keys } from '$lib/data/steps';
	import AddOns from './addOns.svelte';
	import Finishing from './finishing.svelte';
	import PersonalInfo from './personalInfo.svelte';
	import Plans from './plans.svelte';

	import { useForm } from 'svelte-use-form';

	const form = useForm<Keys>({
		plan: { initial: 'arcade' },
		onlineServices: { initial: '' },
		largerStorage: { initial: '' },
		customizableProfile: { initial: '' }
	});

	export let currentStep: number;

	$: {
		console.log($form.values);
		console.log($form);
	}
</script>

<form use:form style={`transform: translateX(-${(currentStep - 1) * 25}%)`}>
	<div>
		<PersonalInfo />
	</div>
	<div>
		<Plans values={$form.values} />
	</div>
	<div>
		<AddOns values={$form.values} />
	</div>
	<div>
		<Finishing />
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
