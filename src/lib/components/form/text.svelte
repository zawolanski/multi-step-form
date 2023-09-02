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
	}

	h1 {
		font-size: 2.4rem;
		font-weight: 700;
		color: $marineBlue;
		margin: 0;
	}

	p {
		font-size: 1.6rem;
		line-height: 2.5rem;
		color: $coolGray;
		font-feature-settings: 'clig' off, 'liga' off;
		margin: 0;
	}
</style>
