<template>
	<div class="input__form" :style="[{'width': width}]">
		<input
			class="input__text"
			:type="type"
			:name="name"
			:id="name"
			:value="value"
			:placeholder="placeholder"
			:label="label"
			@input="updateValue"
		>
		<label :for="name" class="input__label">{{ label }}</label>
		<TransitionGroup>
			<div class="input__error"
				 v-for="element of error"
				 :key="element.$uid"
			>
				<div class="input__error-form">
					{{element.$message}}
				</div>
			</div>
		</TransitionGroup>
	</div>
</template>

<script setup>

const emits = defineEmits(['update:value'])
const props = defineProps({
	value:
		{
			type: String,
			default: "",
		},
	name:
		{
			type: String,
			default: "",
		},
	type:
		{
			type: String,
			default: "text",
		},
	label:
		{
			type: String,
			required: true,
		},
	width:
		{
			type: String,
			default: "300px",
		},
	placeholder:
		{
			type: String,
			default: 'Placeholder'
		},
	error:
		{
			type: String || Array,
			required: false
		}
});

const updateValue = (e) =>
{
	emits('update:value', e.target.value)
}
</script>

<style lang="scss" scoped>
.input__form
{
	margin-bottom: 30px;
	position: relative;
}
.input__error
{
	background: var(--danger);
	margin-top: 4px;
	border-radius: 7px;
	font-size: 13px;
	color: #fff;
	padding: 5px;
}
.input__text
{
	border: 1px solid var(--primary);
	padding: 0 10px;
	height: 40px;
	border-radius: 7px;
	font-size: 15px;
	width: 100%;
	position: relative;
	z-index: 1;

	&:focus + .input__label
	{
		z-index: 1;
		opacity: 1;
		top: -20px;
	}

	&:not(:placeholder-shown) + .input__label
	{
		z-index: 1;
		opacity: 1;
		top: -20px;
	}
}
.input__label
{
	font-weight: bold;
	display: block;
	position: absolute;
	top: 20px;
	opacity: 0;
	z-index: -1;
	transition: .3s;
	font-size: 13px;
	color: var(--primary);
}
.v-enter-active,
.v-leave-active
{
	transition: opacity 0.5s ease;
}
.v-enter-from,
.v-leave-to
{
	opacity: 0;
}
</style>
