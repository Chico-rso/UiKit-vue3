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
		name: "Barcelona Moscow",
		id: 'f3'
	},
	{
		name: "Real Madrid Moscow",
		id: 'f4'
	}
]);

const selectedClub = ref('');
</script>

<style lang="scss" scoped>

</style>
