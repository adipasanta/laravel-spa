<template>
	<div id="message-compose">
		<notification-component :notification="form.global.notification" :show="displayNotification"></notification-component>
		<form id="message-compose-form" @submit.prevent="onSubmit">
			<div class="field">
				<label v-text="dateStamp"></label>
			</div>
			<!-- <dropdown-component></dropdown-component> -->
			<!-- <textarea-component></textarea-component> -->
			<div class="field">
				<label class="label">Subject</label>
				<div class="control">
					<div v-bind:class="form.subject.input.class">
						<select v-model="model.subject">
							<option value="">Select Subject</option>
							<option v-for="opt in messageOptions" v-text="opt.subject" v-bind:value="opt.id"></option>
						</select>
						<span class="icon is-small is-right" v-show="form.subject.input.invalid">
							<i class="fa fa-warning"></i>
						</span>
					</div>
				</div>
			</div>
			<div class="field">
				<label class="label">Message</label>
				<div v-bind:class="form.message.container.class">
					<textarea id="message" v-model="model.message" v-bind:class="form.message.input.class" @focus="clear('message')"></textarea>
					<span class="icon is-small is-right" v-show="form.message.input.invalid">
						<i class="fa fa-warning"></i>
					</span>
				</div>
				<span v-show="form.message.input.invalid">
					<p class="help is-danger" v-for="error in form.message.input.errors" v-text="error"></p>
				</span>
			</div>
			<div class="field is-grouped">
				<div class="control">
					<button :class="form.button.submit.class" type="submit">Submit</button>
				</div>
<!-- 			    <div class="control">
					<button class="button is-text" @click>Cancel</button>
				</div> -->
			</div>
		</form>
	</div>
</template>

<script>
	var Moment = require('moment-timezone');
	export default {
		data: function() {
			return {
				formstate: {},
				dateStamp: `Date ${Moment().tz('America/Los_Angeles').format('M/D/YYYY h:m:s A z')}`,
				model: {
					subject: '',
					message: ''
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
					subject: {
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
					message: {
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
				},
				messageOptions: []
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
			fetchMessageOptions() {
				this.$http
					.get(`${process.env.MIX_REST_END_POINT}/api/messages/subject`)
					.then(response => this.messageOptions = response.body)
					.catch(reject => console.log('reject'))
				;
			},
			updateTime() {
				this.dateStamp = `Date ${Moment().tz('America/Los_Angeles').format('M/D/YYYY h:m:s A z')}`;
			},
			onSubmit() {
				// loading
				this.form.button.submit.class['is-loading'] = true;
				// validation
				this.form.global.notification.class['is-danger'] = false;
				this.form.global.notification.class['is-success'] = false;
				this.form.global.notification.message = '';
				for (var i = Object.keys(this.model).length - 1; i >= 0; i--) {
					this.clear(Object.keys(this.model)[i]);
				}
				// if(this.formstate.$invalid) {
				//     // alert user and exit early
				//     return;
				// }
				let self = this;
				this.$http
					.post(`${process.env.MIX_REST_END_POINT}/api/messages/send`, this.model)
					.then(response => {
						this.form.button.submit.class['is-loading'] = false;
						// display notification
						this.form.global.notification.class['is-success'] = true;
						this.form.global.notification.message = response.body.notification;
						setTimeout(() => this.form.global.notification.message = '', 3000)
						// empty value
						this.model.subject = '';
						this.model.message = '';
					})
					.catch(reject => {
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
					})
				;
			}
		},
		computed: {
			displayNotification() {
				return this.form.global.notification.message.length > 0;
			}
		},
		mounted() {
			this.fetchMessageOptions();
			setInterval(this.updateTime, 1000);
		}
	}  
</script>