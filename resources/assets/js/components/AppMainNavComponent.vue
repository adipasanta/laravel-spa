<template>
	<div class="menu">
		<nav class="navbar is-light">
			<div class="navbar-brand">
				<a class="navbar-item" href="https://undergrad.stanford.edu/programs/bosp">
					<img src="/i/undergrad-logo.png" alt="Stanford Undergrad" width="112" height="28">
				</a>
				<div id="navbar-app-main-burger" class="navbar-burger burger" data-target="navbar-app-main">
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>

			<div id="navbar-app-main" class="navbar-menu">
				<div class="navbar-start">
					<div v-for="nav in navs" v-bind:class="{'navbar-item navbar-app-main': true, 'has-dropdown is-hoverable': nav.hasChildren }">
						<router-link 
							v-if="nav.isRoute" 
							v-on:click.native="refreshIsmainpage" 
							v-bind:to="nav.path" v-text="nav.text" 
							v-bind:class="{'navbar-link': nav.hasChildren}"
						>
						</router-link>
						<a 
							v-else class="navbar-link" 
							v-text="nav.text"
						>
						</a>
						<div v-if="nav.hasChildren" class="navbar-dropdown">
							<div v-for="child in nav.children">
								<router-link 
									v-on:click.native="refreshIsmainpage" 
									v-bind:to="child.path" 
									v-text="child.text" 
									v-bind:class="{'navbar-item': true}"
								>
								</router-link>
							</div>
						</div>
					</div>
				</div>

				<div class="navbar-end">
					<div class="navbar-item has-dropdown is-hoverable">
						<a class="navbar-link">
							<figure class="image is-24x24 image-profile">
								<img v-bind:src="image">
							</figure>
						</a>
						<div class="navbar-dropdown is-right">
							<span class="navbar-item">Signed as {{name}}</span>
							<hr class="navbar-divider">
							<a class="navbar-item">
								Edit Profile
							</a>
							<a class="navbar-item">
								Help
							</a>
							<hr class="navbar-divider">
							<a class="navbar-item">
								Log Out
							</a>
						</div>
					</div>
				</div>
			</div>
		</nav>
	</div>
</template>

<script>
	export default {
		props: ['routes', 'avatar'],
		methods: {
			refreshIsmainpage() {
				this.$store.dispatch('refreshIsmainpage', this.$router.currentRoute.path == '/');
				document.getElementById('navbar-app-main-burger').classList.toggle('is-active');
				document.getElementById('navbar-app-main').classList.toggle('is-active');
			}
		},
		data() {
			return {
				navs: this._props.routes,
				name: 'Paul Warren',
				image: '/images/peoplesoft_profile_10652.jpg'
			};
		}
	}
</script>