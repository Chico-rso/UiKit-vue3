<template>
<ul class="form-rating">
	<li v-for="rating in ratingData" :key="rating.id">
		<input type="radio" :id="rating.id" :value="rating.id" v-model="ratingValue">
		<label :for="rating.id">{{ rating.label }}</label>
	</li>
</ul>
</template>

<script setup>
const ratingData = [
	{
		id: 1,
		label: '1',
	},
	{
		id: 2,
		label: '2',
	},
	{
		id: 3,
		label: '3',
	},
	{
		id: 4,
		label: '4',
	},
	{
		id: 5,
		label: '5',
	}
]
</script>

<style scoped lang="scss">

</style>
