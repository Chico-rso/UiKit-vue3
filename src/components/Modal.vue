<template>
	<div class="modal"
		 v-if="isOpen"
	>
		<slot></slot>
	</div>
</template>

<script setup>
const props = defineProps({
	isOpen:
	{
		type: Boolean,
		required: true
	}
})
</script>

<style scoped lang="scss">
</style>
