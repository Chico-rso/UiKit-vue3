<template>
	<h1 class="heading-1">Checkbox</h1>

	<h2 class="heading-2">Checkbox Active</h2>
	<div class="line">
		<Checkbox
			label="Checkbox Active"
			id="checkboxActive"
			name="checkboxActive"
			value="it checkbox click here"
			v-model:checked="checkboxActive"
		/>
	</div>
	<h2 class="heading-2">Checkbox Disabled</h2>
	<div class="line">
		<Checkbox
			label="Checkbox Disabled"
			id="checkboxDisabled"
			name="checkboxDisabled"
			value="it checkbox click here"
			:disabled="checkboxDisabled"
			v-model:checked="checkboxDisabledChecked"
		/>
	</div>
	<h2 class="heading-2">Checkbox Group</h2>
	<div class="line">
		<p>Selected Heroes: {{selectedHeroes}}</p>
		<CheckboxGroup
			:options="listOfHeroes"
		/>
	</div>
</template>

<script setup>
import Checkbox from "@/components/Checkbox/Checkbox.vue";
import CheckboxGroup from "@/components/Checkbox/CheckboxGroup.vue";
import {reactive, ref} from "vue";

const checkboxActive = ref(true)
const checkboxDisabled = ref(true)
const checkboxDisabledChecked = ref(true)

const listOfHeroes = reactive([
	{
		name: 'Spider Man',
		ids: 'h1'
	},
	{
		name: 'Batman',
		id: 'h2'
	},
	{
		name: 'Tor',
		id: 'h3'
	},
	{
		name: 'Loki',
		id: 'h4'
	}
])

const selectedHeroes = reactive([])
</script>

<style lang="scss">

</style>
