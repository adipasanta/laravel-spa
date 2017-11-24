require('./bootstrap');
require('./bulma');

import Vue from 'vue';
import VueResource from 'vue-resource';
import VueForm from 'vue-form';
import Router from 'vue-router';
import Vuex from 'vuex';

// Vue Auth
import VueAuth from '@websanova/vue-auth';
import VueAuthDriver from '@websanova/vue-auth/drivers/auth/bearer';
import VueAuthHttp from '@websanova/vue-auth/drivers/http/vue-resource.1.x';
import VueAuthRouter from '@websanova/vue-auth/drivers/router/vue-router.2.x';

import App from './components/PassportAppComponent.vue';


Vue.use(VueResource);
Vue.use(VueForm);
Vue.use(Vuex);
Vue.use(Router);

// register component
Vue.component('vue-grid-component', require('./components/VueGridComponent.vue'));
Vue.component('passport-login-component', require('./components/PassportLoginComponent.vue'));
Vue.component('passport-portal-component', require('./components/PassportPortalComponent.vue'));
Vue.component('app-main-nav-component', require('./components/AppMainNavComponent.vue'));
Vue.component('app-main-footer-component', require('./components/AppMainFooterComponent.vue'));

Vue.store = new Vuex.Store({
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

// main apps data
// var main = {
//     user: {
//         name: 'Paul Warren'
//     },
//     apps: [
//         {
//             title: 'Application Profile 9826114',
//             deadline: '11/29/2017',
//             daysleft: '23 days',
//             status: 'IN PROGRESS',
//         },
//         {
//             title: 'ERESOURCES APPLICATION',
//             deadline: '11/30/2017',
//             daysleft: '24 days',
//             status: 'START YOUR APPLICATION',
//         }
//     ]
// };

// inbox data
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

// outbox data
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

// vue-router components & paths
Vue.router = new Router({
    routes: [
        {
            name: 'main',
            path: '/home',
            text: 'Bing Overseas Studies Program',
            component: require('./components/MainComponent.vue'),
            hasChildren: false,
            isRoute: true,
        },
        {
            path: '/message',
            text: 'Message',
            isRoute: false,
            hasChildren: true,
            component: require('./components/MessageComponent.vue'),
            children: [
                {
                    name: 'compose',
                    component: require('./components/MessageComposeComponent.vue'),
                    path: '/message/compose',
                    text: 'Compose'
                },
                {
                    name: 'inbox',
                    component: require('./components/MessageInboxComponent.vue'),
                    path: '/message/inbox',
                    text: 'Inbox',
                    props: {searchQuery: vueInboxData.searchQuery,gridColumns: vueInboxData.gridColumns,gridData: vueInboxData.gridData}
                },
                {
                    name: 'outbox',
                    component: require('./components/MessageOutboxComponent.vue'),
                    path: '/message/outbox',
                    text: 'Outbox',
                    props: {searchQuery: vueOutboxData.searchQuery,gridColumns: vueOutboxData.gridColumns,gridData: vueOutboxData.gridData}
                },
            ]
        }
    ]
})




// setting authentication using Vue Auth
Vue.http.options.root = 'http://localhost:8007';
Vue.use(VueAuth, {
    auth: {
        request: function (req, token) {
            this.options.http._setHeaders.call(this, req, {Authorization: 'Bearer ' + token});
        },
        
        response: function (res) {
            var body = this.options.http._httpData.call(this, res),
                token = body.access_token ;
            if (token) return token;
        }
    },
    http: VueAuthHttp,
    router: VueAuthRouter,
    loginData: {url: 'oauth/token'},
    fetchData: {url: 'api/user'},
    refreshData: {url: 'oauth/token/refresh'},
    authRedirect: {path: '/'},
    // bearerAuth: {
    //     request: function (req, token) {
    //         console.log('test');
    //         this.options.http._setHeaders.call(this, req, {Authorization: 'Bearer ' + token});
    //     },
    //     response: function (res) {
    //         console.log('tast');
    //         var token = this.options.http._getHeaders.call(this, res).Authorization;

    //         if (token) {
    //             token = token.split('Bearer ');
                
    //             return token[token.length > 1 ? 1 : 0];
    //         }
    //     }
    // }
    // authType: 'passport',
    // passportAuth: {
    //     request(req, token) {
    //         this.options.http._setHeaders.call(this, req, {Authorization: 'Bearer ' + token});
    //     },
    //     response(res) {
    //         console.log('debug res');
    //         console.log(res);
    //         return (res.body || {}).access_token;
    //     }

    // },
    // token: {authType: 'bearer'},
    // parseOauthState: '_custom',
    // _custom(obj) {
    //     console.log(obj);
    // }
});

var component = require('./components/PassportAppComponent.vue');
component.router = Vue.router;
component.store = Vue.store;
new Vue(component).$mount('#app');