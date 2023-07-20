<template>
	<h1 class="heading-1">Inputs</h1>
	<h2 class="heading-2">Input</h2>
	<div class="line">
		<form action="submit">
			<Input
				label="Your name"
				name="name"
				placeholder="Your name"
				v-model:value="nameField"
			/>
		</form>
	</div>
</template>

<script setup>
import Input from "@/components/Input.vue";
import {ref} from "vue";

const nameField = ref('')
</script>

<style lang="scss" scoped>

</style>
