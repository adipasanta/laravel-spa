<template>
	<div id="message-form">

		<div class="field">
			<label v-text="dateStamp"></label>
		</div>

		<div class="field">
			<label class="label">Subject</label>
			<div class="control">
			<div class="select">
				<select>
					<option v-for="opt in opts" v-text="opt.text" v-bind:value="opt.val"></option>
				</select>
			</div>
			</div>
		</div>

		<div class="field">
			<label class="label">Message</label>
			<div class="control">
			<textarea class="textarea" placeholder="Textarea"></textarea>
			</div>
		</div>

		<div class="field is-grouped">
			<div class="control">
			<button class="button is-link">Send</button>
			</div>
		</div>
	</div>
</template>

<script>
	var Moment = require('moment-timezone');
	export default {
		data: function() {
			return {
				dateStamp: `Date ${Moment().tz('America/Los_Angeles').format('M/D/YYYY h:m:s A z')}`,
				opts: [
					{text: 'options-1', val: 1},
					{text: 'options-2', val: 2},
					{text: 'options-3', val: 3}
				]
			}
		},
		methods: {
			updateTime() {
				let self = this;
				this.dateStamp = `Date ${Moment().tz('America/Los_Angeles').format('M/D/YYYY h:m:s A z')}`;
				setInterval(self.updateTime, 1000);
			}
		},
		mounted() {
			this.updateTime();
		}
	}    
</script>