<template>
	<h1>Modals</h1>

	<h2>Modal window</h2>
	<div class="line__block">
		<Button label="Open Modal"
			@click="openModalWindow"
		></Button>
		<Button label="Open Modal2"
			@click="openModalWindow2"
		></Button>
		<component :isOpen="isOpen">
			<ExamplePopup1
				@close-modal="closeModalWindow"
			/>
		</component>
		<component :isOpen="isOpen2">
			<ExamplePopup2
				@close-modal="closeModalWindow"
			/>
		</component>
	</div>
</template>

<script setup>
import ExamplePopup1 from "@/components/poups/ExamplePopup1.vue"
import ExamplePopup2 from "@/components/poups/ExamplePopup2.vue"
import Button from "@/components/Button.vue";
import {ref} from "vue";

const isOpen = ref(false)
const isOpen2 = ref(false)

const openModalWindow = () =>
{
	console.log('openModalWindow');

	isOpen.value = true;
	document.body.style.overflow = "hidden";
}
const openModalWindow2 = () =>
{
	isOpen2.value = true;
	document.body.style.overflow = "hidden";
}
const  closeModalWindow = (val) =>
{
	isOpen.value = val;
	document.body.style.overflow = "";
}
</script>

<style scoped lang="scss"></style>
