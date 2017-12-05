<template>
    <div id="passport-app">
        <div v-if="$auth.ready()">
            <span v-show="!$auth.check()">
                <passport-login-component ></passport-login-component>
            </span>
            <span v-show="$auth.check()">
                <passport-portal-component :routes="$router.options.routes"></passport-portal-component>
            </span>
        </div>
    </div>
</template>
<script>
    export default {
        mounted() {
        }
    }
</script>