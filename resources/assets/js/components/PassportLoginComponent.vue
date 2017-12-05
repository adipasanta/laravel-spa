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
								<img :src="avatarSrc">
							</figure>
							<form id="passport-login-form" @submit.prevent="onSubmit">
								<div class="field">
									<div class="control">
										<input required v-model="model.email" name="email" class="input is-large" placeholder="Your Email" autofocus="" type="email">
									</div>
								</div>
								<div class="field">
									<div class="control">
										<input required v-model="model.password" name="password" class="input is-large" placeholder="Your Password" type="password">
									</div>
								</div>
								<div class="field">
									<label class="checkbox">
									<input type="checkbox">
									Remember me
									</label>
								</div>
								<button id="passport-form-button" class="hidden button is-block is-info is-large" type="submit">Login</button>
								<a @click="clickButton" class="button is-block is-info is-large">Login</a>
							</form>
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
		props: ['formProvider'],
		data() {
			return {
				formstate: {},
				auth: {
					provider: this._props.formProvider ? this._props.formProvider : ''
				},
				model: {
					email: '',
					password: ''
				},
				form: {
					global: {
						notification: {
							class: {
								'notification': true,
								'is-danger': false,
								'is-success': false,
							},
							message: ''
						}
					},
					button: {
						submit: {
							class: {
								'button': true,
								'is-link': true,
								'is-loading': false,
							}
						}
					},
					email: {
						container: {
							class: {
								'control': true,
								'has-icons-right': false,
							},
						},
						input: {
							class: {
								'select': true,
								'is-danger': false,
								'is-success': false,
							},
							invalid: false,
							errors: []
						},                      
					},
					password: {
						container: {
							class: {
								'control': true,
								'has-icons-right': false,
							},
						},
						input: {
							class: {
								'textarea': true,
								'is-danger': false,
								'is-success': false,
							},
							invalid: false,
							errors: []
						},
					}
				}
			}
		},
		methods: {
			clear(field) {
				this.form[field].container.class['has-icons-right'] = false;
				this.form[field].input.invalid = false;
				this.form[field].input.class['is-danger'] = false;
				this.form[field].input.class['is-success'] = false;
				this.form[field].input.errors = [];
			},
			clickButton: function () {
				// simulate click, submit
				document.getElementById('passport-form-button').click();
			},
			onSubmit: function () {
				// loading
				this.form.button.submit.class['is-loading'] = true;
				// validation
				this.form.global.notification.class['is-danger'] = false;
				this.form.global.notification.class['is-success'] = false;
				this.form.global.notification.message = '';
				for (var i = Object.keys(this.model).length - 1; i >= 0; i--) {
					this.clear(Object.keys(this.model)[i]);
				}
				this.$auth.login({
					body: {
						grant_type: 'password',
						client_id: 6,
						client_secret: 'HWlXi7Ak3kq0jfhujYp6zupM2iHdHQ7D7ds7pGJQ',
						username: this.model.email,
						password: this.model.password,
						scope: 'portal',
						provider: this.auth.provider
					}, // Vue-resource
					success(res) {
						this.$localStorage.set('avatar', this.$auth.user().avatar);
						this.form.button.submit.class['is-loading'] = false;
						// display notification
						this.form.global.notification.class['is-success'] = true;
						this.form.global.notification.message = response.body.notification;
						setTimeout(() => this.form.global.notification.message = '', 3000)
						// empty value
						this.model.email = '';
						this.model.password = '';
					},
					error(e) {
						this.form.button.submit.class['is-loading'] = false;
						if (reject.status == 422) {
							// validation
							this.form.global.notification.class['is-danger'] = true;
							this.form.global.notification.message = reject.body.message;
							setTimeout(() => this.form.global.notification.message = '', 3000)
							for (var i = Object.keys(this.model).length - 1; i >= 0; i--) {
								let prop = Object.keys(this.model)[i];
								// if (i == Object.keys(this.model).length - 1) document.getElementById(prop)
								if (_.has(reject.body.errors, prop)) {
									this.form[prop].container.class['has-icons-right'] = true;
									this.form[prop].input.class['is-danger'] = true;
									this.form[prop].input.invalid = true;
									this.form[prop].input.errors = reject.body.errors[prop];
								}
							}
						}				
					},
					// redirect: {name: redirect ? redirect.from.name : 'account'},
					fetchUser: true,
					rememberMe: true
				})
			}
		},
		computed: {
			avatarSrc() {
				return this.$localStorage.get('avatar') ? this.$localStorage.get('avatar') : '';
			}
		}
	}
</script>