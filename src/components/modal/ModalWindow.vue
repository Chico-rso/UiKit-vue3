<template>
	<teleport to="body">
		<Transition name="transition">
			<div class="modal"
				 v-if="isOpen"
				 @click="clickOutSide"
			>
				<div class="modal__content">
					<svg width="30px" height="30px"
						 @click="closeModalWindow"
					>
						<use xlink:href="#closeIcon"></use>
					</svg>
					<slot></slot>
				</div>
			</div>
		</Transition>
	</teleport>
</template>

<script setup>
const props = defineProps({
	isOpen:
		{
			type: Boolean,
			required: true,
		},
});
const emit = defineEmits(["closeModal"]);

const closeModalWindow = () =>
{
	emit("closeModal", false);
	document.body.style.overflow = "";
};
const clickOutSide = (event) =>
{
	let target = event.target;
	if (!target.closest(".modal__content"))
	{
		emit("closeModal", false);
		document.body.style.overflow = "";
	}
};
</script>

<style scoped lang="scss">
.modal
{
	position: fixed;
	display: flex;
	height: 100%;
	width: 100%;
	top: 0;
	right: 0;
	background-color: rgba(25, 28, 33, .1);
	z-index: 100;
	transition: opacity .3s ease;
}
.modal__content
{
	position: relative;
	min-height: 100%;
	min-width: 100%;
	text-align: center;
	margin: auto;
	background-color: #DBA5F5;
	padding: 10px;
	border-radius: 6px;
	transition: ease .3s;

	svg
	{
		position: absolute;
		right: 10px;
		top: 10px;
		cursor: pointer;

		&:hover
		{
			fill: #ffffff;
			transition: ease .3s;
		}
	}

	@media (min-width: 768px)
	{
		min-width: 300px;
		max-width: 500px;
		min-height: 200px;
	}
}
.transition-enter-from
{
	opacity: 0;
}
.transition-leave-to
{
	opacity: 0;
}
.transition-enter-from .transition-container,
.transition-leave-to .transition-container
{
	-webkit-transform: scale(1.1);
	transform: scale(1.1);
}
</style>
