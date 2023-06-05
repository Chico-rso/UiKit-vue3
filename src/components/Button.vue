<script setup>
const props = defineProps({
	label:
	{
		type: String,
		default: 'Button'
	}
})
</script>

<template>
<button class="btn">
{{label}}
</button>
</template>

<style lang="scss" scoped>

</style>
