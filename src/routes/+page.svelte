<script lang="ts">
	import Steps from '$lib/components/steps/wrapper.svelte';
</script>

<Steps currentStep={2} />
<form>
  <div>Form</div>
</form>
<div>
	<button type="button">Go back</button>
	<button type="button">Next step</button>
	<button type="button">Confirm</button>
</div>

<style lang="scss">
	form {
		margin-inline: auto;
		padding: 0 1.6rem;
    margin-top: 16.8rem;
    background-color: $white;
	}
</style>
