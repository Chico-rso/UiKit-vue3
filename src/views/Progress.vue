<template>
	<h1 class="heading-1">Progress</h1>
	<h2 class="heading-2">Progress Bar</h2>
	<div class="line line__block">
		<ProgresBar
			:maxWidth="'500px'"
			:percent="percentBar"
			:color="'danger'"
		/>
		<Button label="Plus 10%" @click="plusPrecentBar" />
		<Button label="Minus 10%" @click="minusPrecentBar" />
	</div>
</template>

<script setup>
import {ref} from "vue";
import ProgresBar from "@/components/progress/ProgresBar.vue";
import Button from "@/components/Button.vue";

const percentBar = ref(40)

const plusPrecentBar = () =>
{
	percentBar.value += 10;
	if(percentBar.value > 100)
	{
		percentBar.value = 100;
	}
}
const minusPrecentBar = () =>
{
	percentBar.value -= 10;
	if(percentBar.value < 0)
	{
		percentBar.value = 0;
	}
}
</script>

<style lang="scss" scoped>

</style>
