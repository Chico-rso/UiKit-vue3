import {createRouter, createWebHistory} from "vue-router";
import Index from "@/views/Index.vue";
import Button from "@/views/Button.vue";
import Typography from "@/views/Typography.vue";
import Checkbox from "@/views/CheckboxView.vue";
import RadiobuttonView from "@/views/RadiobuttonView.vue";
import Progress from "@/views/Progress.vue";
import Inputs from "@/views/Inputs.vue";
import Tabs from "@/views/TabsView.vue";
import TableView from "@/views/TableView.vue";
import ModalView from "@/views/ModalView.vue";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			name: 'Index',
			component: Index
		},
		{
			path: '/button',
			name: 'Button',
			component: Button
		},
		{
			path: '/typography',
			name: 'Typography',
			component: Typography
		},
		{
			path: '/checkbox',
			name: 'Checkbox',
			component: Checkbox
		},
		{
			path: '/radio-button',
			name: 'Radio-button',
			component: RadiobuttonView
		},
		{
			path: '/Progress',
			name: 'Progress',
			component: Progress
		},
		{
			path: '/inputs',
			name: 'Inputs',
			component: Inputs
		},
		{
			path: '/tabs',
			name: 'Tabs',
			component: Tabs
		},
		{
			path: '/table',
			name: 'Table',
			component: TableView
		},
		{
			path: '/modal',
			name: 'Modal',
			component: ModalView
		}
	]
})

export default router;
