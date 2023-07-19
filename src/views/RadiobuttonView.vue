<template>
	<h1 class="heading-1">Radiobutton</h1>
	<h2 class="heading-2">Basic</h2>
	<div class="line line__block">
		<p>Selected club: {{ selectedClub }}</p>
		<div
			v-for="club in footbalClubs"
			:key="club.id"
		>
			<Radiobutton
				:checked="true"
				:value="club.name"
				:label="club.name"
				:id="club.id"
				name="club"
				v-model:checkedValue="selectedClub"
			/>
		</div>
	</div>
	<h2 class="heading-2">Disabled</h2>
	<div class="line">
		<Radiobutton
			value="Disabled radiobutton"
			label="Disabled radiobutton"
			id="DisabledRadiobutton"
			name="club"
			:disabled="disabledRadio"
			v-model:checkedValue="disabledRadioChacked"
		/>
	</div>
</template>

<script setup>
import Radiobutton from "@/components/Radiobutton.vue";
import {ref} from "vue";

const footbalClubs = ref([
	{
		name: "CSKA Moscow",
		id: 'f1'
	},
	{
		name: "Spartak Moscow",
		id: 'f2'
	},
	{
		name: "Barcelona",
		id: 'f3'
	},
	{
		name: "Real Madrid",
		id: 'f4'
	}
]);

const selectedClub = ref('');
const disabledRadio = ref(true);
const disabledRadioChacked = ref(true);
</script>

<style lang="scss" scoped>

</style>
