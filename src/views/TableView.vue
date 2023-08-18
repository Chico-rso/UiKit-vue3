<template>
	<h1 class="heading-1">Table</h1>
	<div class="line line__block">
		<BaseTable
			:head="tableHeads"
			:columnTemplates="tableSizeColumns"
		></BaseTable>
	</div>
</template>

<script setup>
import BaseTable from "@/components/Table/BaseTable.vue";

const tableHeads = ['Id', 'Author', 'Title', 'Cover', ''];
const tableSizeColumns = '50px 1fr 2fr 150px 140px'
</script>

<style lang="scss" scoped>

</style>
