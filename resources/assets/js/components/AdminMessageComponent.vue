<template>
    <div id="admin-message-component">
        <nav class="navbar has-shadow">
            <div class="container">
                <div class="navbar-brand">
                    <a class="navbar-item" href="../">
                        <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox">
                    </a>

                    <div class="navbar-burger burger" data-target="navMenu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <div id="navMenu" class="navbar-menu">
                    <div class="navbar-end">
                        <div class="navbar-item has-dropdown is-active">
                            <a class="navbar-link">
                                Account
                            </a>

                            <div class="navbar-dropdown">
                                <a class="navbar-item">
                                    Dashboard
                                </a>
                                <a class="navbar-item">
                                    Profile
                                </a>
                                <a class="navbar-item">
                                    Settings
                                </a>
                                <hr class="navbar-divider">
                                <div class="navbar-item">
                                    Logout
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <div class="columns" id="mail-app">
            <aside class="column is-2 aside hero is-fullheight">
                    <div>
                        <div class="compose has-text-centered">
                            <a class="button is-danger is-block is-bold">
                                <span class="compose">Compose</span>
                            </a>
                        </div>
                        <div class="main">
                            <a href="#" class="item active"><span class="icon"><i class="fa fa-inbox"></i></span><span class="name">Inbox</span></a>
                            <a href="#" class="item"><span class="icon"><i class="fa fa-star"></i></span><span class="name">Starred</span></a>
                            <a href="#" class="item"><span class="icon"><i class="fa fa-envelope-o"></i></span><span class="name">Sent Mail</span></a>
                            <a href="#" class="item"><span class="icon"><i class="fa fa-folder-o"></i></span><span class="name">Folders</span></a>
                        </div>
                    </div>
            </aside>
            <div class="column is-4 messages hero is-fullheight" id="message-feed">
                <div class="action-buttons">
                    <div class="control is-grouped">
                        <a class="button is-small"><i class="fa fa-chevron-down"></i></a>
                        <a class="button is-small"><i class="fa fa-refresh"></i></a>
                    </div>
                    <div class="control is-grouped">
                        <a class="button is-small"><i class="fa fa-inbox"></i></a>
                        <a class="button is-small"><i class="fa fa-exclamation-circle"></i></a>
                        <a class="button is-small"><i class="fa fa-trash-o"></i></a>
                    </div>
                    <div class="control is-grouped">
                        <a class="button is-small"><i class="fa fa-folder"></i></a>
                        <a class="button is-small"><i class="fa fa-tag"></i></a>
                    </div>
                    <div class="control is-grouped pg">
                        <div class="title">{{ paginate.pointer.start }}-{{ paginate.pointer.end }} of {{ paginate.total }}</div>
                        <a class="button is-link"><i class="fa fa-chevron-left"></i></a>
                        <a class="button is-link"><i class="fa fa-chevron-right"></i></a>
                    </div>
                </div>

                <div class="inbox-messages" id="inbox-messages">
                    <div v-for="(msg, index) in messages" class="card" v-bind:id="'msg-card-'+index" v-on:click="showMessage(msg,index)" v-bind:data-preview-id="index">
                        <div class="card-content">
                            <div class="msg-header">
                                <span class="msg-from"><small>From: {{ msg.from }}</small></span>
                                <span class="msg-timestamp"></span>
                                <span class="msg-attachment"><i class="fa fa-paperclip"></i></span>
                            </div>
                            <div class="msg-subject">
                                <span class="msg-subject"><strong id="fake-subject-1">{{ msg.subject }}</strong></span>
                            </div>
                            <div class="msg-snippet">
                                <p id="fake-snippet-1">{{ msg.snippet }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column is-6 message hero is-fullheight is-hidden" id="message-pane">
                <div class="action-buttons">
                    <div class="control is-grouped">
                        <a class="button is-small"><i class="fa fa-inbox"></i></a>
                        <a class="button is-small"><i class="fa fa-exclamation-circle"></i></a>
                        <a class="button is-small"><i class="fa fa-trash-o"></i></a>
                    </div>
                    <div class="control is-grouped">
                        <a class="button is-small"><i class="fa fa-exclamation-circle"></i></a>
                        <a class="button is-small"><i class="fa fa-trash-o"></i></a>
                    </div>
                    <div class="control is-grouped">
                        <a class="button is-small"><i class="fa fa-folder"></i></a>
                        <a class="button is-small"><i class="fa fa-tag"></i></a>
                    </div>
                </div>
                <div class="box message-preview">
                    <div class="top">
                        <div class="avatar">
                            <img src="https://placehold.it/128x128">
                        </div>
                        <div class="address">
                            <div class="name">John Smith</div>
                            <div class="email">someone@gmail.com</div>
                        </div>
                        <hr>
                        <div class="content">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer class="footer">
            <div class="container">
                <div class="content has-text-centered">
                    <p>
                        <strong>Bulma Templates</strong> by <a href="https://github.com/dansup">Daniel Supernault</a>. The source code is licensed
                        <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
                    </p>
                    <p>
                        <a class="icon" href="https://github.com/dansup/bulma-templates">
                            <i class="fa fa-github"></i>
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                messages: {},
                paginate: {
                    pointer: {
                        start: 1,
                        end: 10
                    },
                    total: 100
                }
            }
        },
        methods: {
            showMessage: function (msg, index) {
                $('#message-pane').removeClass('is-hidden');
                $('.card').removeClass('active');
                $('#msg-card-'+index).addClass('active');
                $('.message .address .name').text(msg.from);
                $('.message .address .email').text(msg.email);
                var msg_body = '<p>' + 
                    msg.snippet + 
                    '</p>' + 
                    '<br>' +
                    '<p>' +
                    msg.fullMail +
                    '</p>';
                $('.message .content').html(msg_body);
            }
        }
    }
</script>