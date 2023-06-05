<script setup>
import {ref} from "vue";

const links = ref([
	{name: "Typography", href: '/typography'},
	{name: "Button", href: "/button"},
]);
</script>

<template>
	<div class="sidebar">
		<router-link
			class="sidebar__link"
			v-for="link in links"
			:key="link.name"
			:to="link.href"
		>
			{{ link.name }}
		</router-link>
	</div>
</template>

<style scoped lang="scss">
.sidebar
{
	position: fixed;
	left: 0;
	top: 62px;
	height: 100%;
	width: 250px;
	padding: 20px;
	transition: 0.2s;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
	transform: translateX(0px);
	&__link
	{
		display: block;
		padding: 10px;
		margin-bottom: 10px;
		border-radius: 12px;
		border: 2px solid #fff;
		transition: 0.2s;
		font-weight: bold;
		&:hover{border-color: var(--primary-color)};
	}
}
</style>
