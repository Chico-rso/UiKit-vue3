<script setup>
import LayoutHeader from "@/components/layout/Header.vue";
import LayoutSidebar from "@/components/layout/Sidebar.vue";
import {ref} from "vue";

const sidebarOpen = ref(false);

function toggleSidebar()
{
	sidebarOpen.value = !sidebarOpen.value;
	console.log(sidebarOpen.value);
}
</script>

<template>
	<div class="container">
		<div class="sidebar__toggle" @click="toggleSidebar">&#5125</div>
		<LayoutHeader/>
		<Transition name="slide-fade">
			<LayoutSidebar
				v-if="sidebarOpen"
			/>
		</Transition>
		<div class="content">
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

	&_full
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
	background: var(--primary-color);
	z-index: 2;
}
.slide-fade-enter-active{transition: all 0.3s ease-out;}
.slide-fade-leave-active{transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);}
.slide-fade-enter-from,
.slide-fade-leave-to
{
	transform: translateX(20px);
	opacity: 0;
}
</style>
