<template>
    <div class="mail-list">
        <p class="title is-5">Outbox</p>
        <div class="field">
            <div class="control">
                <input name="query" class="input" type="text" placeholder="Search" v-model="searchQueryData">
            </div>
        </div>
        <vue-grid-component
            :data="gridData"
            :columns="gridColumns"
            :filter-key="searchQueryData"
            :mode="mode"
            :is-no-content="isNoContent"
            :show-detail-callback="showDetailCallback"
        >
        </vue-grid-component>
    </div>
</template>

<script>
    export default {
        methods: {
            showDetailCallback(e) {
                this.messageDetail = 'lorem ipsum';
            }
        }
    }
</script>