<template>
	<h1 class="heading-1">Table</h1>
	<span style="display: block">Sort Field: {{sortField}}</span>
	<span>Type Sort: {{typeSort}}</span>
	<div class="line line__block">
		<BaseTable
			:head="tableHeads"
			:columnTemplates="tableSizeColumns"
			@sorting="setSort"
		>
			<TableRow
				v-for="book in booksSorting"
				:key="book.id"
				:columnTemplates="tableSizeColumns"
				:bg-row="book.bg"
			>
				<TableColumn :column-title="tableHeads[0]">
					{{book.id}}
				</TableColumn>
				<TableColumn :column-title="tableHeads[1]">
					{{book.author}}
				</TableColumn>
				<TableColumn :column-title="tableHeads[2]">
					{{book.title}}
				</TableColumn>
				<TableColumn
					:srcImage="book.image"
					:image="true"
				>
				</TableColumn>
				<TableColumn>
					<Button label="Read only"></Button>
				</TableColumn>
			</TableRow>
		</BaseTable>
	</div>
</template>

<script setup>
import BaseTable from "@/components/Table/BaseTable.vue";
import TableRow from "@/components/Table/TableRow.vue";
import {computed, reactive, ref} from "vue";
import TableColumn from "@/components/Table/TableColumn.vue";
import Button from "@/components/Button.vue";

const tableHeads = ["Id", "Author", "Title", "Cover", ""];
const tableSizeColumns = "50px 1fr 2fr 150px 140px";

const sortField = ref('id');
const typeSort = ref('asc');

const books = reactive([
	{
		id: 1,
		author: "Dmitry Glukhovsky",
		title: "Metro 2033",
		image: "https://m.media-amazon.com/images/P/0735211299.01._SCLZZZZZZZ_SX500_.jpg",
		bg: "#FFA26B",
	},
	{
		id: 12,
		author: "James Clear",
		title: "Atomic Habits: An Easy",
		image: "https://m.media-amazon.com/images/P/0735211299.01._SCLZZZZZZZ_SX500_.jpg",
		bg: "#00C48C",
	},
	{
		id: 2,
		author: "J. K. Rowling",
		title: "Harry Potter and the Order of the Phoenix",
		image: "https://m.media-amazon.com/images/P/0735211299.01._SCLZZZZZZZ_SX500_.jpg",
		bg: "#AAD42C",
	},
]);

const booksSorting = computed(() => {
	return books.sort((a, b) =>
	{
		let modifier = 1;
		if(typeSort.value === 'desc')
		{
			modifier = -1;
		}
		if(a[sortField.value] < b[sortField.value])
		{
			return -1 * modifier
		}
		if(a[sortField.value] > b[sortField.value])
		{
			return modifier
		}
		return  0;
	})
})

const setSort = (name) =>
{
	if(sortField.value === name){
		if(typeSort.value === 'asc')
		{
			typeSort.value = 'desc';
		}
		else
		{
			typeSort.value = 'asc';
		}
	}
	else
	{
		sortField.value = name;
	}
}
</script>

<style lang="scss" scoped>

</style>
