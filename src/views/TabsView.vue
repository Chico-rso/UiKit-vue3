<template>
	<h1 class="heading-1">
		Tabs
	</h1>
	<div class="line__block">
		<Tabs
			:names="tabs"
			:selectedTab="selectedTab"
			@changeTab="changeTab"
		>
			<div v-if="selectedTab === 'About'">About Lorem ipsum dolor sit!</div>
			<div v-if="selectedTab === 'Vue'">Vue Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, velit.</div>
			<div v-if="selectedTab === 'React'">React Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad delectus et iste odio pariatur quidem sequi vitae! Accusamus, odio possimus?</div>
		</Tabs>
	</div>
</template>

<script setup>
import Tabs from "@/components/Tabs.vue";
import {ref} from "vue";

const tabs = [
	{
		name: 'About',
		label: 'О проекте'
	},
	{
		name: 'Vue',
		label: 'Про Vue'
	},
	{
		name: 'React',
		label: 'Про React'
	}
]
const selectedTab = ref('About')

const changeTab = (tabName) =>
{
	selectedTab.value = tabName;
}
</script>

<style lang="scss" scoped>

</style>
