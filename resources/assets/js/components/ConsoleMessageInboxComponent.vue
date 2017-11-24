<template>
    <div class="level">
        <div id="second-container" class="container level-left mail-subject-container">
            <div class="mail-list">
                <p class="title is-5">Inbox</p>
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
                    :show-detail-callback="showDetailCallback"
                >
                </vue-grid-component>
            </div>
        </div>
        <div class="container level-right">
            <div class="container content">
                <message-detail-component :message-detail="messageDetail"></message-detail-component>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: ['searchQuery','gridColumns','gridData'],
        data() {
            return {
                mode: 'inbox',
                isNoContent: true,
                searchQueryData: this._props.searchQuery,
                messageDetailId: 0
            }
        },
        methods: {
            showDetailCallback(entry) {
                this.messageDetailId = entry.id;
            }
        },
        asyncComputed: {
            cGridData: {
                get() {
                    return Vue.http
                        .get('/api/messages')
                        .then((response) => response.body)
                    ;
                    
                },
                default: []
            },
            messageDetail: {
                get() {
                    return Vue.http
                        .get('/api/messages/' + this.messageDetailId)
                        .then((response) => response.body[0].content)
                    ;
                },
                default: ''
            },
        }
    }
</script>