<template>
    <div id="admin-app">
        <div v-if="$auth.ready()">
            <span v-show="!$auth.check()">
                <passport-login-component :form-provider='formProvider'></passport-login-component>
            </span>
            <span v-show="$auth.check()">
                <admin-message-component></admin-message-component>
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                formProvider: 'admins'
            }
        }
    }
</script>