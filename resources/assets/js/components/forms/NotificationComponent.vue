<template>
    <div :class="notification.class" v-text="notification.message" v-show="show"></div>
</template>
<script>
    export default {
        props: ['notification', 'show']
    }
</script>