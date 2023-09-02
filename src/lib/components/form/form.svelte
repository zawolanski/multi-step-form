<script lang="ts">
	import AddOns from './addOns.svelte';
	import Finishing from './finishing.svelte';
	import PersonalInfo from './personalInfo.svelte';
	import Plans from './plans.svelte';

	import { useForm } from 'svelte-use-form';

	const form = useForm();

	export let currentStep: number;

	$: {
		console.log($form.values);
	}
</script>

<form use:form style={`transform: translateX(-${(currentStep - 1) * 25}%)`}>
	<div>
		<PersonalInfo />
	</div>
	<div>
		<Plans />
	</div>
	<div>
		<AddOns />
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
	}

	form {
		margin-inline: auto;
		margin-top: 9.5rem;
		flex-grow: 1;
		width: 400%;
		display: flex;
		transition: transform 0.15s;

		@media (min-width: $tablet) {
			margin: 0;
			padding: 0;
		}
	}
</style>
