<template>
	<Checkbox />
</template>

<script setup>
import Checkbox from "@/components/Checkbox/Checkbox.vue";

const props = defineProps({
	options:
	{
		type: Array,
		required: true,
		validator: (value) =>
		{
			const hasNameKey = value.every((option) =>
			{
				Object.keys(option).includes('name')
			})
			const hasIdKey = value.every((option) =>
			{
				Object.keys(option).includes('id')
			})
			return hasIdKey && hasNameKey
		}
	}
})
</script>

<style lang="scss">

</style>
