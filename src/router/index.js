import {createRouter, createWebHistory} from "vue-router";
import Index from "@/views/Index.vue";
import Button from "@/views/Button.vue";
import Typography from "@/views/Typography.vue";
import Checkbox from "@/views/CheckboxView.vue";
import RadiobuttonView from "@/views/RadiobuttonView.vue";

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
		}
	]
})

export default router;
