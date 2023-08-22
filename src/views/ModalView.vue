<template>
	<h1>Modals</h1>

	<h2>Modal window</h2>
	<div class="line__block">
		<Button label="Open Modal"
			@click="openModalWindow"
		></Button>
		<Modal
			:isOpen="isOpen"
		>
			<h1>Example</h1>
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
	return isOpen.value = true;
}
</script>

<style scoped lang="scss"></style>
