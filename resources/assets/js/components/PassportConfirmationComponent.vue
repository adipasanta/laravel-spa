<template>
    <div id="passport-confirmation-component">
    </div>
</template>

<script>
    export default {
        // data() {
        //     return {
        //     }
        // }
        forms: {
            passportConfirmationComponent: {
                grantType: '',
                name: '',
                clientId: '',
                clientSecret: '',
                redirectUri: '',
                code: ''
            }
        },
        methods: {
            passportConfirmation() {
                this.$forms
                    .post('http://localhost:8007/oauth/token', this.passportConfirmationComponent)
                    .then(response => console.log(response.data))
                    .catch(reject => console.log(reject))
            }
        }
    }
</script>