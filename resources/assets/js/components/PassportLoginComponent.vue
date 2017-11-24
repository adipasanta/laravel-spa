<template>
    <div id="passport-login-component">
        <section class="main-page hero is-success is-fullheight">
            <div class="hero-body">
                <div class="container has-text-centered">
                    <div class="column is-4 is-offset-4">
                        <h3 class="title has-text-grey">Login</h3>
                        <p class="subtitle has-text-grey">Please login to proceed.</p>
                        <div class="box">
                            <figure class="avatar">
                                <img src="https://placehold.it/128x128">
                            </figure>
                            <vue-form id="passport-login-form" :state="formstate" @submit.prevent="onSubmit">
                                <div class="field">
                                    <validate>
                                        <div class="control">
                                            <input required v-model="model.email" name="email" class="input is-large" placeholder="Your Email" autofocus="" type="email">
                                        </div>
                                    </validate>
                                </div>
                                <div class="field">
                                    <validate>
                                        <div class="control">
                                            <input required v-model="model.password" name="password" class="input is-large" placeholder="Your Password" type="password">
                                        </div>
                                    </validate>
                                </div>
                                <div class="field">
                                    <label class="checkbox">
                                    <input type="checkbox">
                                    Remember me
                                    </label>
                                </div>
                                <button id="passport-form-button" class="hidden button is-block is-info is-large" type="submit">Login</button>
                                <a @click="clickButton" class="button is-block is-info is-large">Login</a>
                            </vue-form>
                        </div>
                    </div>
                </div>
            </div>
            <app-main-footer-component></app-main-footer-component>
        </section>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                formstate: {},
                model: {
                    email: '',
                    password: '',
                    rememberMe: false
                },
            }
        },
        methods: {
            clickButton: function () {
                // simulate click, submit
                document.getElementById('passport-form-button').click();
            },
            onSubmit: function () {
                if(this.formstate.$invalid) {
                    // alert user and exit early
                    return;
                }
                this.$auth.login({
                    body: {
                        grant_type: 'password',
                        client_id: 6,
                        client_secret: 'HWlXi7Ak3kq0jfhujYp6zupM2iHdHQ7D7ds7pGJQ',
                        username: this.model.email,
                        password: this.model.password,
                        scope: 'portal'
                    }, // Vue-resource
                    success(res) {
                        console.log('res')
                        console.log(res)
                    },
                    error(e) {
                        console.log('e')
                        console.log(e)
                    },
                    // redirect: {name: redirect ? redirect.from.name : 'account'},
                    fetchUser: false,
                    rememberMe: true
                })
                // this.$http
                //     .post('http://localhost:8007/oauth/token', {
                //         grant_type: 'password',
                //         client_id: 6,
                //         client_secret: 'HWlXi7Ak3kq0jfhujYp6zupM2iHdHQ7D7ds7pGJQ',
                //         username: this.model.email,
                //         password: this.model.password,
                //         scope: 'portal'
                //     })
                //     .then(response => {
                //         console.log('success');
                //         this.authHeader = `${response.data.token_type} ${response.data.access_token}`;
                //         this.isAuthenticated = true;
                //     }, reject => {
                //         console.log('reject')
                //         console.log(reject)
                //     });
            }
        }
    }
</script>