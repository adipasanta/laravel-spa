<template>
<!--         <thead>
            <tr>
                <th v-for="key in columns"
                    @click="sortBy(key)"
                    :class="{ active: sortKey == key }">
                    {{ key | capitalize }}
                    <span class="arrow" :class="sortOrders[key] > 0 ? 'asc' : 'dsc'">
                    </span>
                </th>
            </tr>
        </thead> -->
                                    <!-- <text v-text="entry.sender"></text> -->
    <table class="table is-fullwidth is-hoverable">
        <tbody>
            <tr v-for="entry in filteredData" @click="showDetail(entry)">
                <td>
                    <table>
                        <tbody>
                            <tr>
                                <td class="bulma-custom-no-border">
                                    <div v-show="isInbox" class="svg-icon svg-baseline">
                                        <svg width="24" height="24" viewBox="0 0 24 24">
                                            <circle cx="12" cy="12" r="8" fill="blue" />
                                        </svg>
                                    </div>
                                    {{ entry.agent }}
                                </td>
                                <td v-text="entry.time" class="bulma-custom-no-border bulma-custom-table-right"></td>
                            </tr>
                        </tbody>
                    </table>
                    <table>
                        <tbody>
                            <tr>
                                <td v-text="entry.subject" colspan="2" class="bulma-custom-no-border"></td>
                            </tr>
                            <tr v-show="!isNoContent">
                                <td v-text="entry.content" colspan="2" class="bulma-custom-no-border"></td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
    export default {
        props: ['data','columns','filterKey', 'mode', 'isNoContent', 'showDetailCallback'],
        data: function () {
            var sortOrders = {}
            this.columns.forEach(function (key) {
                sortOrders[key] = 1
            })
            return {
                isShowContent: true,
                sortKey: '',
                sortOrders: sortOrders,
                key: '',
                entry: ''
            }
        },
        computed: {
            filteredData: function () {
                var sortKey = this.sortKey
                var filterKey = this.filterKey && this.filterKey.toLowerCase()
                var order = this.sortOrders[sortKey] || 1
                var data = this.data
                if (filterKey) {
                    data = data.filter(function (row) {
                        return Object.keys(row).some(function (key) {
                            return String(row[key]).toLowerCase().indexOf(filterKey) > -1
                        })
                    })
                }
                if (sortKey) {
                    data = data.slice().sort(function (a, b) {
                        a = a[sortKey]
                        b = b[sortKey]
                        return (a === b ? 0 : a > b ? 1 : -1) * order
                    })
                }
                return data
            }
        },
        filters: {
            capitalize: function (str) {
                return str.charAt(0).toUpperCase() + str.slice(1)
            }
        },
        methods: {
            sortBy: function (key) {
                this.sortKey = key
                this.sortOrders[key] = this.sortOrders[key] * -1
            },
            isInbox() {
                console.log(this._props.mode);
                return this._props.mode == 'inbox';
            },
            showDetail(entry) {
                if (this._props.showDetailCallback) {
                    return this._props.showDetailCallback(entry);
                }
                return false;
            }
        }
    }
</script>