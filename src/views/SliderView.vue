<template>
	<h1 class="heading-1">Slider</h1>
	<div class="line__block">
		<Suspense v-if="show">
			<template #default>
				<SliderComponent
					:slides="sliderData"
				/>
			</template>
			<template #fallback>
				Loading...
			</template>
		</Suspense>
	</div>
</template>

<script setup>
import {defineAsyncComponent, onMounted, reactive, ref} from "vue";
import Slider from "@/components/Slider.vue";

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
const show = ref(false)
const SliderComponent = defineAsyncComponent(
{
	loader: () => import("@/components/Slider.vue"),
	loadingComponent: Slider,
	delay: 2000,
	timeout: 3000,
	suspensible: true
})
onMounted(() =>
{
	show.value = true;
})
</script>

<style lang="scss" scoped>
.line__block
{
	max-width: 500px;
}
</style>
