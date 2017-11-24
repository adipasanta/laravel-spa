<template>
	<div class="container">
		<div class="field">
			<div class="control">
				<input name="query" class="input" type="text" placeholder="Search" v-model="searchQueryData">
			</div>
		</div>
		<vue-grid-component
			:data="cGridData"
			:columns="gridColumns"
			:filter-key="searchQueryData"
			:mode="mode"
			:is-no-content="isNoContent"
		>
		</vue-grid-component>
	</div>
</template>
<script>
	export default {
		props: ['searchQuery','gridColumns','gridData'],
		data() {
			return {
				mode: 'inbox',
				searchQueryData: this._props.searchQuery,
				isNoContent: false,
			}
		}
	}
</script>