<template>
	<div>
		<section class="hero">
			<div class="hero-body">
				<div class="container">
					<h1 class="title">
					</h1>
					<h2 class="subtitle">
						Welcome to the BOSP and SiNY application portal!
					<!-- Hero subtitle -->
					</h2>
				</div>
			</div>
		</section>
	</div>
<!--     <div class="main-section">
		<section class="wrap-content two-col">
			<div class="pri">
				<div class="content">
					<p><strong>Welcome to the BOSP and SiNY application portal!</strong></p>
					<p><strong>Below you will see a list of available applications, including any previous applications that you have started.&nbsp; You can also view real-time updates on the status of your application, and see what additional information is required for submission.&nbsp; We encourage you to check back frequently to ensure that you've met all of the application requirements!</strong></p>
					<p><strong>Deadlines&nbsp;</strong></p>
					<ul>
						<li>View our&nbsp;<strong><a href="https://undergrad.stanford.edu/programs/bosp/apply/apply-now" target="_blank">current application&nbsp;deadlines</a></strong>&nbsp;and&nbsp;<strong><a href="https://undergrad.stanford.edu/programs/bosp/apply/apply-now/future-application-deadlines" target="_blank">future application deadlines</a></strong>.</li>
					</ul>
					<p><strong>Explore Programs&nbsp;</strong></p>
					<ul>
						<li>Learn more about&nbsp;<a href="https://undergrad.stanford.edu/programs/bosp" target="_blank"><strong>BOSP</strong></a>&nbsp;or&nbsp;<strong><a href="https://undergrad.stanford.edu/stanford-in-new-york" target="_blank">SiNY</a> </strong>to compare programs, view advising information and read frequently asked questions about language prerequisites.&nbsp;</li>
					</ul>
				</div>
			</div>
		</section>
		
		<section class="wrap-list">
			<div>
				<div class="list-title"><h2>Available Application(s)</h2></div>
				<div class="list-row" v-for="app in apps">
					<div class="list-item">
						<p v-text="">{{ app.title }}</p>
						<p class="meta"><span>Deadline: </span>{{ app.deadline }} ({{ app.daysleft }})</p>
					</div>
					<div class="list-action">
						<span>
							<a>{{ app.status }}</a>
						</span>
					</div>
				</div>
			</div>
		</section>
	</div> -->
</template>

<script>
	export default {
		// props: ['main'],
		data() {
			return {
				apps: ''
				// apps: this._props.main.apps
			}
		}
	}
</script>