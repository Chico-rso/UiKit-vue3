<template>
	<h1 class="heading-1">Button</h1>
	<h2 class="heading-2">Rounded</h2>
	<div class="line">
		<Button
			label="Primary"
			color="primary"
			disabled
		/>
		<Button
			label="Secondary"
			color="second"
			disabled
		/>
	</div>
	<h2 class="heading-2">Colors</h2>
	<div class="line">
		<Button
			label="Primary"
			color="primary"
			@click="changeColor"
		/>
		<Button
			label="Secondary"
			color="second"
		/>
		<Button
			label="Success"
			color="success"
		/>
		<Button
			label="Info"
			color="info"
		/>
		<Button
			label="Warning"
			color="warning"
		/>
		<Button
			label="Danger"
			color="danger"
		/>
		<Button
			label="Disabled"
			color="disabled"
		/>
	</div>
	<h2 class="heading-2">Rounded</h2>
	<div class="line">
		<Button
			label="Primary"
			color="primary"
			rounded
		/>
		<Button
			label="Secondary"
			color="second"
			rounded
		/>
		<Button
			label="Success"
			color="success"
			rounded
		/>
		<Button
			label="Info"
			color="info"
			rounded
		/>
		<Button
			label="Warning"
			color="warning"
			rounded
		/>
		<Button
			label="Danger"
			color="danger"
			rounded
		/>
		<Button
			label="Disabled"
			color="disabled"
			rounded
		/>
	</div>
	<h2 class="heading-2">Outlined</h2>
	<div class="line">
		<Button
			label="Primary"
			color="primary"
			outlined
		/>
		<Button
			label="Secondary"
			color="second"
			outlined
		/>
		<Button
			label="Success"
			color="success"
			outlined
		/>
		<Button
			label="Info"
			color="info"
			outlined
		/>
		<Button
			label="Warning"
			color="warning"
			outlined
		/>
		<Button
			label="Danger"
			color="danger"
			outlined
		/>
		<Button
			label="Disabled"
			color="disabled"
			outlined
		/>
	</div>
	<h2 class="heading-2">Icon</h2>
	<div class="line">
		<Button
			icon="heart"
			color="second"
			outlined
		/>
		<Button
			icon="hand"
			color="success"
		/>
		<Button
			icon="address-book"
			color="info"
			outlined
		/>
		<Button
			icon="credit-card"
			color="warning"
		/>
		<Button
			icon="lemon"
			color="danger"
			outlined
		/>
		<Button
			icon="hourglass"
		/>
	</div>
	<h2 class="heading-2">Size</h2>
	<div class="line">
		<Button
			label="Normal"
		/>
		<Button
			label="Large"
			size="large"
		/>
	</div>
	<h2 class="heading-2">Event</h2>
	<div class="line">
		<Button
			label="Normal"
			color="danger"
			@click="eventForButton"
		/>
	</div>
</template>
<script setup>
import Button from "@/components/Button.vue";
function eventForButton()
{
	alert('you clicked danger button')
}
</script>
