<template>
	<Checkbox />
</template>

<script setup>
import Checkbox from "@/components/Checkbox.vue";

const props = defineProps({
	options:
	{
		type: Array,
		required: true,
	}
})
</script>

<style lang="scss">

</style>
