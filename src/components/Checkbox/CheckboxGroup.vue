<template>
	<ul class="checkbox-group__list">
		<li
			v-for="option in options"
			:key="option.id"
		>
			<Checkbox
				:label="option.name"
				:id="option.id"
				:name="name"
				:value="option.name"
				:checked="value.includes(option.id)"
				@updateCheckboxGroup="check"
				group
			/>
		</li>
	</ul>
</template>

<script setup>
import Checkbox from "@/components/Checkbox/Checkbox.vue";

const emits = defineEmits(['update:value'])
const props = defineProps({
	value:
	{
		type: Array,
		required: true
	},
	name:
	{
		type: String,
		required: true
	},
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

const check = (params)=>
{
	let updateValue = [...props.value]
	if(params.checked)
	{
		updateValue.push(params.optionId)
	}
	else
	{
		updateValue.splice(updateValue.indexOf(params.optionId), 1)
	}
	emits('update:value', updateValue)
}
</script>

<style lang="scss">
.checkbox-group__list
{
	display: flex;
	flex-direction: column;
	padding: 0;
	li{list-style: none;}
}
</style>
