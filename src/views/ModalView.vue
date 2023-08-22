<template>
	<h1>Modals</h1>

	<h2>Modal window</h2>
	<div class="line__block">
		<Button label="Open Modal"
			@click="openModalWindow"
		></Button>
		<Modal
			:isOpen="isOpen"
			@close-modal="closeModalWindow"
		>
			<h3>Example</h3>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dolores fugit ipsa neque pariatur quasi, sapiente veritatis. Atque, iure, quae?</p>
			<Button label="Send"></Button>
		</Modal>
	</div>
</template>

<script setup>
import Modal from "@/components/Modal.vue";
import Button from "@/components/Button.vue";
import {ref} from "vue";

const isOpen = ref(false)

const openModalWindow = () =>
{
	isOpen.value = true;
	document.body.style.overflow = "hidden";
}
const  closeModalWindow = (val) =>
{
	isOpen.value = val;
	document.body.style.overflow = "";
}
</script>

<style scoped lang="scss"></style>
