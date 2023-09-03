<div>
	<h1>
		<slot />
	</h1>
	<p>
		<slot name="text" />
	</p>
</div>

<style lang="scss">
	div {
		display: flex;
		flex-direction: column;
		gap: 0.9rem;
		margin-bottom: 2.2rem;

		@media (min-width: $tablet) {
			font-size: 1.1rem;
			margin-bottom: 3.5rem;
		}
	}

	h1 {
		font-size: 2.4rem;
		font-weight: 700;
		color: $marineBlue;

		@media (min-width: $tablet) {
			font-size: 3.2rem;
		}
	}

	p {
		font-size: 1.6rem;
		line-height: 2.5rem;
		color: $coolGray;
		font-feature-settings: 'clig' off, 'liga' off;
	}
</style>
