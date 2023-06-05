<script setup>
import LayoutHeader from "@/components/layout/Header.vue";
import LayoutSidebar from "@/components/layout/Sidebar.vue";
import {ref} from "vue";

const sidebarOpen = ref(false);

function toggleSidebar()
{
	sidebarOpen.value = !sidebarOpen.value;
}
</script>

<template>
	<div class="container">
		<div class="sidebar__toggle" @click="toggleSidebar">&#5125</div>
		<LayoutHeader/>
		<LayoutSidebar
			:sidebarOpen="sidebarOpen"
		/>
		<div :class="['content', {content__full: !sidebarOpen}]">
			<router-view/>
		</div>
	</div>
</template>

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
