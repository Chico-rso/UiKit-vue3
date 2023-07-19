<template>
	<h1 class="heading-1">Progress</h1>
	<h2 class="heading-2">Progress Bar</h2>
	<div class="line line__block">
		<ProgressBar
			:maxWidth="'500px'"
			:percent="percentBar"
			:color="'danger'"
		/>
		<Button label="Minus 10%" @click="decreasePercentBar"/>
		<Button label="Plus 10%" @click="increasePercentBar"/>
	</div>
	<h2 class="heading-2">Progress circle</h2>
	<div class="line line__block">
		<ProgressCircle
			:percent="percentCircle"
			:color="'success'"
		/>
		<Button label="Minus 10%" @click="decreasePercentCircle"/>
		<Button label="Plus 10%" @click="increasePercentCircle"/>
	</div>
</template>

<script setup>
import {ref} from "vue";
import ProgressBar from "@/components/progress/ProgressBar.vue";
import ProgressCircle from "@/components/progress/ProgressCircle.vue";
import Button from "@/components/Button.vue";

const percentBar = ref(40);
const percentCircle = ref(40);

const increasePercentBar = () =>
{
	percentBar.value = capValue(percentBar.value + 10);
};
const decreasePercentBar = () =>
{
	percentBar.value = capValue(percentBar.value - 10);
};

const increasePercentCircle = () =>
{
	percentCircle.value = capValue(percentCircle.value + 10);
};
const decreasePercentCircle = () =>
{
	percentCircle.value = capValue(percentCircle.value - 10);
};
const capValue = (value) =>
{
	if (value > 100) return 100;
	if (value < 0) return 0;
	return value;
};
</script>
