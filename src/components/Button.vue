<template>
	<button
		:class="['btn', `btn--${color}`,
			`btn--${size}`,
			{'btn--rounded': rounded},
			{'btn--outlined': outlined},
			{'btn--icon': icon},
		]"
		:disabled="disabled"
		@click="clickOnButton"
	>
		<span v-if="icon">
			<font-awesome-icon :icon="`fa-regular fa-${icon}`" />
		</span>
		<span v-else>{{ label }}</span>
	</button>
</template>

<script setup>
const props = defineProps({
	label:
	{
		type: String,
		default: "Button",
	},
	color:
	{
		type: String,
		default: "primary",
	},
	rounded:
	{
		type: Boolean,
		default: false,
	},
	disabled:
	{
		type: Boolean,
		default: false,
	},
	outlined:
	{
		type: Boolean,
		default: false,
	},
	icon:
	{
		type: String,
		default: ''
	},
	size:
	{
		type: String,
		default: ''
	}
});

const emit = defineEmits([
	'click'
])
function clickOnButton()
{
	emit('click')
}
</script>

<style lang="scss" scoped>
.btn
{
	margin-right: 10px;
	margin-bottom: 10px;
	padding: 0 20px;
	height: 40px;
	color: #fff;
	border-radius: 7px;
	border: none;
	cursor: pointer;
	font-size: 15px;
	transition: .2s;

	&--primary
	{
		background: var(--primary);
		border: 1px solid var(--primary);

		&:enabled:hover
		{
			background: var(--primary-hover);
		}
	}

	&--second
	{
		background: var(--second);
		border: 1px solid var(--second);

		&:enabled:hover
		{
			background: var(--second-hover);
		}
	}

	&--success
	{
		background: var(--success);
		border: 1px solid var(--success);

		&:enabled:hover
		{
			background: var(--success-hover);
		}
	}

	&--info
	{
		background: var(--info);
		border: 1px solid var(--info);

		&:enabled:hover
		{
			background: var(--info-hover);
		}
	}

	&--warning
	{
		background: var(--warning);
		border: 1px solid var(--warning);

		&:enabled:hover
		{
			background: var(--warning-hover);
		}
	}

	&--danger
	{
		background: var(--danger);
		border: 1px solid var(--danger);

		&:enabled:hover
		{
			background: var(--danger-hover);
		}
	}

	&:disabled
	{
		opacity: .6;
		cursor: default;
	}

	&--rounded
	{
		border-radius: 15px;
	}

	&--outlined
	{
		background: transparent;
		color: #000;

		&:hover
		{
			color: #fff;
		}
	}

	&--icon
	{
		padding: 0;
		width: 40px;
		height: 40px;
		border-radius: 50%;
	}

	&--large
	{
		height: 48px;
		padding: 0 30px;
	}
}
</style>
