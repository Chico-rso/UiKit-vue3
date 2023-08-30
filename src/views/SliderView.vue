<template>
	<h1 class="heading-1">Slider</h1>
	<div class="line__block">
		<Slider
			:slides="sliderData"
		/>
	</div>
</template>

<script setup>
import Slider from "@/components/Slider.vue";
import {reactive} from "vue";

const sliderData = reactive([
	{
		imgSrc: 'https://imgholder.ru/600x300/8493a8/adb9ca&text=IMAGE+HOLDER&font=kelson'
	},
	{
		imgSrc: 'https://imgholder.ru/600x300/8493a8/adb9ca&text=IMAGE+HOLDER&font=kelson'
	},
	{
		imgSrc: 'https://imgholder.ru/600x300/8493a8/adb9ca&text=IMAGE+HOLDER&font=kelson'
	},
	{
		imgSrc: 'https://imgholder.ru/600x300/8493a8/adb9ca&text=IMAGE+HOLDER&font=kelson'
	},
])
</script>

<style lang="scss" scoped>

</style>
