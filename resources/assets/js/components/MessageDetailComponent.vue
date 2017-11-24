<template>
    <div class="message">
        <p v-text="messageDetail"></p>
    </div>
</template>
<script>
    export default {
        props: ['messageDetail']
    }
</script>