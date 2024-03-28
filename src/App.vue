<template>
	<div class="container">
		<div class="sidebar__toggle" @click="toggleSidebar">&#5125</div>
		<LayoutHeader/>
		<LayoutSidebar
			:sidebarOpen="sidebarOpen"
		/>
		<div :class="['content', {content__full: !sidebarOpen}]">
			<router-view/>
			<Sprite/>
		</div>
	</div>
</template>

<script setup>
import LayoutHeader from "@/components/Layout/Header.vue";
import LayoutSidebar from "@/components/Layout/Sidebar.vue";
import {onMounted, ref} from "vue";
import Sprite from "@/components/Sprite.vue";

const sidebarOpen = ref(false);

function toggleSidebar()
{
	sidebarOpen.value = !sidebarOpen.value;
}
	(function(e, x, pe, r, i, me, nt){
	e[i]=e[i]||function(){(e[i].a=e[i].a||[]).push(arguments)},
	me=x.createElement(pe),me.async=1,me.src=r,nt=x.getElementsByTagName(pe)[0],nt.parentNode.insertBefore(me,nt)})
	(window, document, 'script', 'https://abt.s3.yandex.net/expjs/latest/exp.js', 'ymab');
	ymab('metrika.95337196', 'init'/*, {clientFeatures}, {callback}*/);
	ymab('metrika.95337196', 'getFlags', function(flags) {
    const heading = document.querySelector('.ab-heading-1');
		const heading2 = document.querySelector('.ab-heading-2');

		heading.style.display = flags.hide;
		heading2.style.display = flags.show;
});
</script>

<style lang="scss">
@import 'assets/styles/global';
#app
{
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
.content
{
	max-width: 1400px;
	margin-left: 258px;
	padding: 30px;
	transition: .2s;

	&__full
	{margin-left: 0;}
}
.sidebar__toggle
{
	position: fixed;
	display: flex;
	align-items: center;
	justify-content: center;
	left: 0;
	width: 15px;
	height: 100%;
	top: 62px;
	cursor: pointer;
	color: #ffffff;
	background: var(--primary);
	z-index: 2;
}
@media (max-width: 1043px)
{
	.content{margin-left: 0;}
}
</style>
