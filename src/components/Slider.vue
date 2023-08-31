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
					<span>{{index}}</span>
					<img :src="slide.imgSrc" alt="">
			</div>
		</div>
		<div class="slider__pagination"></div>
		<button class="slider__btn-prev" @click="goToPrev"><span>prev</span></button>
		<button class="slider__btn-next" @click="goToNext"><span>next</span></button>
	</div>
</template>

<script setup>
import {ref} from "vue";

const props = defineProps({
	slides:
	{
		type: Array,
		requred: true
	}
})

const curSlide = ref(0);
const slidesLength = props.slides.length;
const slideWidth = ref(0);

const goToPrev = () =>
{
	if(curSlide.value === 0)
	{
		curSlide.value = slidesLength - 1;
		slideWidth.value = -(slidesLength - 1) * 500;
	}
	else
	{
		curSlide.value--;
		slideWidth.value += 500
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
		slideWidth.value -= 500
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
	display: flex;
	align-items: center;
	overflow: hidden;
}
.slider__slide
{
	flex: 0 0 100%;
	transition: all .3s ease;
	img
	{
		width: 100%;
		height: auto;
		object-fit: cover;
	}
}
.slider__btn-next,
.slider__btn-prev
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
.slider__btn-next{right: -15px;}

</style>
