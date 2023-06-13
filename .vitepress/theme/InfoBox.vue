<template>
    <div class="info-box">
        <slot></slot>
    </div>
</template>

<style lang="scss">
.info-box {
	float: right;
	width: 35%;

	padding-left: .5em;
	padding-bottom: .5em;

	position: relative;
	z-index: 100;

	background-color: var(--vp-c-bg);

	p {
		margin: 0;

		display: flex;
		justify-content: space-between;
	}
}
</style>