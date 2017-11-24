require('./bootstrap');
import Router from 'vue-router';
import Vuex from 'vuex';
import AsyncComputed from 'vue-async-computed'
import VueResource from 'vue-resource';
window.Vue = require('vue');
window.Moment = require('moment-timezone');
Vue.use(Vuex);
Vue.use(Router);
Vue.use(AsyncComputed);
Vue.use(VueResource);

var ConsoleAppComponent = Vue.component('console-app-component', require('./components/ConsoleAppComponent.vue'));
var ConsolePortalComponent = Vue.component('console-portal-component', require('./components/ConsolePortalComponent.vue'));
var ConsoleSecurityComponent = Vue.component('console-security-component', require('./components/ConsoleSecurityComponent.vue'));
var ConsoleMessageComponent = Vue.component('console-message-component', require('./components/ConsoleMessageComponent.vue'));
var ConsoleMessageInboxComponent = Vue.component('console-message-inbox-component', require('./components/ConsoleMessageInboxComponent.vue'));
var ConsoleMessageOutboxComponent = Vue.component('console-message-outbox-component', require('./components/ConsoleMessageOutboxComponent.vue'));
var MessageDetailComponent = Vue.component('message-detail-component', require('./components/MessageDetailComponent.vue'));
var ConsoleApplicantComponent = Vue.component('console-applicant-component', require('./components/ConsoleApplicantComponent.vue'));
var ConsoleApplicationComponent = Vue.component('console-application-component', require('./components/ConsoleApplicationComponent.vue'));
var ConsoleReferenceComponent = Vue.component('console-reference-component', require('./components/ConsoleReferenceComponent.vue'));
var VueGridComponent = Vue.component('vue-grid-component', require('./components/VueGridComponent.vue'));

var vueInboxData = {
    searchQuery: '',
    gridColumns: ['agent'],
    gridData: [
        {
            subject: 'Thank you for submitting your application',
            content: `Dear Paul,

                Thank you for submitting your application for 1178 - BOSP Bio-Cultural Diversity and Community-Based Conservation in Oaxaca and completing the first step in your abroad experience ...`,
            agent: 'Paul Warren',
            time: '2017-01-16 02:55:00.000'
        },
        {
            subject: 'Thank you for submitting your application',
            content: `Dear, Applicant.  Thank you for submitting your application for Stanford  in New York! As part of the application process, you may be asked to  interview with the director ...`,
            agent: 'Paul Warren',
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
            agent: 'Paul Warren',
            time: '2017-01-16 02:55:00.000'
        },
        {
            subject: 'Dear Admin',
            content: `Dear Admin`,
            agent: 'Paul Warren',
            time: '2017-09-26 17:31:00.000'
        }

    ]
};

var routes = [
    {
        text: 'Application Manager',
        path: '/console/apps',
        isRoute: false,
        component: ConsoleAppComponent,
        hasChildren: true,
        children: [
            {
                text: 'Message Center',
                path: '/console/apps/messages',
                isRoute: false,
                hasChildren: true,
                component: ConsoleMessageComponent,
                children: [
                    {
                        text: 'Inbox',
                        path: '/console/apps/messages/inbox',
                        name: 'inbox',
                        isRoute: false,
                        hasChildren: false,
                        component: ConsoleMessageInboxComponent,
                        props: {searchQuery: vueInboxData.searchQuery,gridColumns: vueInboxData.gridColumns,gridData: vueInboxData.gridData}
                    },
                    {
                        text: 'Outbox',
                        path: '/console/apps/messages/outbox',
                        name: 'outbox',
                        isRoute: true,
                        hasChildren: false,
                        component: ConsoleMessageOutboxComponent
                    }
                ]
            },
            {
                text: 'Applicants',
                path: '/console/apps/applicants',
                isRoute: true,
                component: ConsoleApplicantComponent,
                hasChildren: false
            },
            {
                text: 'Applications',
                path: '/console/apps/applications',
                isRoute: true,
                component: ConsoleApplicationComponent,
                hasChildren: false
            },
            {
                text: 'References',
                path: '/console/apps/references',
                isRoute: true,
                component: ConsoleReferenceComponent,
                hasChildren: false
            }
        ]
    },
    // {
    //     text: 'User Portals',
    //     path: '/console/portals',
    //     isRoute: false,
    //     component: ConsolePortalComponent,
    //     hasChildren: false
    // },
    // {
    //     text: 'Access Security',
    //     path: '/console/security',
    //     isRoute: false,
    //     component: ConsoleSecurityComponent,
    //     hasChildren: false
    // }

];

var router = new Router({routes});

// Fetch Message
var asyncComputed = {
    cGridData: {
        get() {
            return Vue.http
                .get('/api/messages')
                .then((response) => response.body)
            ;
            
        },
        default: []
    }
}

const app = new Vue({
    // store,
    router,
    // asyncComputed,
    el: '#main-page',
    data: { navs: routes }
}).$mount('#main-page');