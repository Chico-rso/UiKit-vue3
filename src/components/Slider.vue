<template>
	<div class="slider">
		<div class="slider__wrapper">
			<div class="slider__slide"
				 v-for="slide of slides"
			>
				<img :src="slide.imgSrc" alt="">
			</div>
		</div>
		<div class="slider__pagination"></div>
		<div class="slider__btn-prev"><span>prev</span></div>
		<div class="slider__btn-next"><span>next</span></div>
	</div>
</template>

<script setup>
const props = defineProps({
	slides:
	{
		type: Array,
		requred: true
	}
})
</script>

<style lang="scss" scoped>
.slider
{
	position: relative;
	width: 100%;
	height: 100%;
}
.slider__wrapper
{
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 20px;
	overflow: hidden;
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
	transform: translate(-50%);
	border-radius: 10px;
	background-color: #00C48C;
	cursor: pointer;
	transition: all .3s ease;
	&:hover{background-color: #7DDFC3;}
}
.slider__btn-prev{left: 0;}
.slider__btn-next{right: 0;}

</style>
