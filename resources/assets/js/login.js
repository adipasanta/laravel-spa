require('./bootstrap');
import Router from 'vue-router'
window.Vue = require('vue')

Vue.component('passport-login-component', require('./components/PassportLoginComponent.vue'));

var vm = new Vue({

    el: "#app"

})