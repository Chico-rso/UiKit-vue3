<template>
	<div class="slider">
		<div class="slider__wrapper"
		>
			<div class="slider__slide"
				 v-for="(slide, index) of slides"
				 :key="index"
				 :class="{active: index === curSlide}"
				 :style="{transform: `translate(${slideWidth}px)`}"
			>
					<img :src="slide.imgSrc" alt="" ref="slideSize" id="slideSizeId">
			</div>
		</div>
		<div class="slider__pagination"></div>
		<button class="slider__btn slider__btn-prev" @click="goToPrev"> &lt; </button>
		<button class="slider__btn slider__btn-next" @click="goToNext"> &lt; </button>
	</div>
</template>

<script setup>
import {onMounted, ref} from "vue";

const props = defineProps({
	slides:
	{
		type: Array,
		requred: true
	}
})
const curSlide = ref(0);
const slidesLength = props.slides.length;
const slideSize = ref(null);
const slideWidth = ref(0);

const goToPrev = () =>
{

	if(curSlide.value === 0)
	{
		curSlide.value = slidesLength - 1;
		slideWidth.value = -(slidesLength - 1) * slideSize.value[0].clientWidth;
	}
	else
	{
		curSlide.value--;
		slideWidth.value += slideSize.value[0].clientWidth
	}
}
const goToNext = () =>
{
	if(curSlide.value === slidesLength - 1)
	{
		curSlide.value = 0;
		slideWidth.value = 0;
	}
	else
	{
		curSlide.value++;
		slideWidth.value -= slideSize.value[0].clientWidth
	}
}
</script>

<style lang="scss" scoped>
.slider
{
	position: relative;
	width: 100%;
	height: 100%;
	margin-left: 20px;
}
.slider__wrapper
{
	width: 100%;
	height: 100%;
	border-radius: 10px;
	display: flex;
	align-items: center;
	overflow: hidden;
}
.slider__slide
{
	flex: 0 0 100%;
	transition: all .3s ease;
	border-radius: 10px;
	overflow: hidden;
	img
	{
		display: block;
		width: 100%;
		height: auto;
		object-fit: cover;
	}
}
.slider__btn
{
	width: 30px;
	height: 30px;
	text-align: center;
	vertical-align: middle;
	position: absolute;
	top: 50%;
	transform: translate(0, -50%);
	border-radius: 10px;
	border: none;
	background-color: #00C48C;
	cursor: pointer;
	transition: all .3s ease;
	&:hover{background-color: #7DDFC3;}
}
.slider__btn-prev{left: -15px;}
.slider__btn-next
{
	right: -15px;
	top: 50%;
	transform: translate(0, -50%) rotate(180deg);
}
.preloader
{
	background-color: #BE52F2;
	width: 500px;
	height: 250px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 9999;
}
[v-cloak]::before{content: 'Loading...';}
[v-cloak] > *{display: none;}
</style>
