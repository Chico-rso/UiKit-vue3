<template>
	<h1 class="heading-1">Inputs</h1>
	<h2 class="heading-2">Input</h2>
	<div class="line">
		<form>
			<Input
				label="Your name"
				name="name"
				placeholder="Your name"
				v-model:value="v$.nameField.$model"
				:error="v$.nameField.$errors"
			/>
			<Input
				label="Your email"
				name="email"
				placeholder="Your email"
				v-model:value="v$.emailFiled.$model"
				:error="v$.emailFiled.$errors"
			/>
			<Input
				label="Your lucky number"
				name="number"
				placeholder="Your lucky number"
				v-model:value="v$.luckyField.$model"
				:error="v$.luckyField.$errors"
			/>
			<Input
				label="Your password"
				name="password"
				placeholder="Your password"
				v-model:value="passwordField"
				type="password"
			/>
			<Input
				label="Confirm password"
				name="confirm"
				type="password"
				placeholder="Confirm password"
				v-model:value="v$.confirmPassword.$model"
				:error="v$.confirmPassword.$errors"
			/>
		</form>
	</div>
</template>

<script setup>
import Input from "@/components/Input.vue";
import {ref, computed} from "vue";
import useVuelidate from "@vuelidate/core";
import {helpers, minLength, maxLength, email, numeric, sameAs} from "@vuelidate/validators";

const nameField = ref('');
const emailFiled = ref('');
const luckyField = ref('');
const passwordField = ref('');
const confirmPassword = ref('');

const rules = computed(() =>({
	nameField:
		{
			minLength: helpers.withMessage(`Минимальная длина: 3 символа`, minLength(3))
		},
	emailFiled:
		{
			email: helpers.withMessage(`Вы ввели неверный email`, email)
		},
	luckyField:
		{
			maxLength: helpers.withMessage('Максимальная длина: 2 символа', maxLength(2)),
			numeric: helpers.withMessage('Используйте только цифры', numeric),
		},
	confirmPassword:
		{
			sameAsPassword: helpers.withMessage('Пароли не совпадают', sameAs(passwordField.value)),
		}
}))

const v$ = useVuelidate(rules, {nameField, emailFiled, luckyField, confirmPassword})

</script>

<style lang="scss" scoped>

</style>
