<script lang="ts">
	import IconThankYou from '$lib/assets/icon-thank-you.svelte';
</script>

<div class="confirmation_container">
	<IconThankYou />
	<h2>Thank you!</h2>
	<p>
		Thanks for confirming your subscription! We hope you have fun using our platform. If you ever
		need support, please feel free to email us at support@loremgaming.com.
	</p>
</div>

<style lang="scss">
	.confirmation_container {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 4.6rem 0;

		@media (min-width: $tablet) {
			padding-top: 13rem;
		}
	}

	h2 {
		color: $marineBlue;
		font-size: 2.4rem;
		font-weight: 700;
		margin-bottom: 0.9rem;

		@media (min-width: $tablet) {
			font-size: 3.2rem;
			margin-bottom: 1.4rem;
		}
	}

	p {
		text-align: center;
		font-size: 1.6rem;
		line-height: 2.5rem;
		color: $coolGray;
	}
</style>
