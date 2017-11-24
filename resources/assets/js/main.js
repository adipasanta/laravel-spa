require('./bootstrap');
import Vue from 'vue';
import Router from 'vue-router';
import Vuex from 'vuex';
Vue.use(Vuex);
Vue.use(Router);

window.Moment = require('moment-timezone');


var VueGridComponent = Vue.component('vue-grid-component', require('./components/VueGridComponent.vue'));
var MainComponent = Vue.component('main-component', require('./components/MainComponent.vue'));
var AppMainNavComponent = Vue.component('app-main-nav-component', require('./components/AppMainNavComponent.vue'));
var MessageComponent = Vue.component('message-component', require('./components/MessageComponent.vue'));
var MessageComposeComponent = Vue.component('message-compose-component', require('./components/MessageComposeComponent.vue'));
var MessageInboxComponent = Vue.component('message-inbox-component', require('./components/MessageInboxComponent.vue'));
var MessageOutboxComponent = Vue.component('message-outbox-component', require('./components/MessageOutboxComponent.vue'));
var AppMainFooterComponent = Vue.component('app-main-footer-component', require('./components/AppMainFooterComponent.vue'));

var store = new Vuex.Store({
        state: {
            connect: false,
            message: '',
            ismainpage: true
        },
        mutations: {
            updateIsmainpage(state, payload) {
                state.ismainpage = payload;
            }
        },
        actions: {
            refreshIsmainpage(context, payload) {
                context.commit('updateIsmainpage', payload);
            }
        }
});

var main = {
            user: {
                name: 'Paul Warren'
            },
            apps: [
                {
                    title: 'Application Profile 9826114',
                    deadline: '11/29/2017',
                    daysleft: '23 days',
                    status: 'IN PROGRESS',
                },
                {
                    title: 'ERESOURCES APPLICATION',
                    deadline: '11/30/2017',
                    daysleft: '24 days',
                    status: 'START YOUR APPLICATION',
                }
            ]
};
var vueInboxData = {
    searchQuery: '',
    gridColumns: ['agent'],
    gridData: [
        {
            subject: 'Thank you for submitting your application',
            content: `Dear Paul,

                Thank you for submitting your application for 1178 - BOSP Bio-Cultural Diversity and Community-Based Conservation in Oaxaca and completing the first step in your abroad experience ...`,
            agent: 'Administrator',
            time: '2017-01-16 02:55:00.000'
        },
        {
            subject: 'Thank you for submitting your application',
            content: `Dear, Applicant.  Thank you for submitting your application for Stanford  in New York! As part of the application process, you may be asked to  interview with the director ...`,
            agent: 'Administrator',
            time: '2017-09-26 17:31:00.000'
        }

    ]
};
var vueOutboxData = {
    searchQuery: '',
    gridColumns: ['agent'],
    gridData: [
        {
            subject: 'Test',
            content: `Test  ...`,
            agent: 'Administrator',
            time: '2017-01-16 02:55:00.000'
        },
        {
            subject: 'Dear Admin',
            content: `Dear Admin`,
            agent: 'Administrator',
            time: '2017-09-26 17:31:00.000'
        }

    ]
};
var routes = [
    {
        name: 'main',
        path: '/',
        text: 'Bing Overseas Studies Program',
        props: {main},
        component: MainComponent,
        hasChildren: false,
        isRoute: true,
    },
    {
        path: '/',
        text: 'Message',
        isRoute: false,
        hasChildren: true,
        component: MessageComponent,
        children: [
            {
                name: 'compose',
                component: MessageComposeComponent,
                path: 'compose',
                text: 'Compose'
            },
            {
                name: 'inbox',
                component: MessageInboxComponent,
                path: 'inbox',
                text: 'Inbox',
                props: {searchQuery: vueInboxData.searchQuery,gridColumns: vueInboxData.gridColumns,gridData: vueInboxData.gridData}
            },
            {
                name: 'outbox',
                component: MessageOutboxComponent,
                path: 'outbox',
                text: 'Outbox',
                props: {searchQuery: vueOutboxData.searchQuery,gridColumns: vueOutboxData.gridColumns,gridData: vueOutboxData.gridData}
            },
        ]
    }

];
main.navs = routes;
var router = new Router({routes});

const app = new Vue({
    store,
    router,
    el: '#main-page',
    data: { main }
}).$mount('#main-page');


document.addEventListener('DOMContentLoaded', function () {

  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function () {

        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});