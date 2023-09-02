<script lang="ts">
	import Text from './text.svelte';
</script>

<Text>
	Personal info
	<svelte:fragment slot="text">
		Please provide your name, email address, and phone number.
	</svelte:fragment>
</Text>
<div class="textFields_container">
	<div class="textField_container">
		<label for="name">Name</label>
		<input id="name" name="name" placeholder="e.g. Stephen King" />
	</div>
	<div class="textField_container">
		<label for="email">Email Address</label>
		<input id="email" name="email" type="email" placeholder="e.g. stephenking@lorem.com" />
	</div>
	<div class="textField_container">
		<label for="phoneNumber">Phone Number</label>
		<input id="phoneNumber" name="phoneNumber" placeholder="e.g. +1 234 567 890" />
	</div>
</div>

<style lang="scss">
	.textFields_container {
		display: flex;
		flex-direction: column;
		gap: 1.6rem;
	}

	.textField_container {
		display: flex;
		flex-direction: column;
		gap: 0.3rem;

		label {
			font-size: 1.2rem;
			color: $marineBlue;
		}

		input {
			font-family: Ubuntu;
			border-radius: 0.4rem;
			border: 1px solid $borderColor;
			padding: 1.1rem 1.6rem;
			font-size: 1.5rem;
			font-weight: 500;
			color: $marineBlue;
			outline: none;
			transition: border-color 0.15s;

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
