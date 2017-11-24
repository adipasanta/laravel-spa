<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="{{ app()->getLocale() }}" lang="{{ app()->getLocale() }}">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />
        <title>Stanford BOSP Site Manager</title>
        <meta name="robots" content="noindex, nofollow" />
        <link rel="stylesheet" href="{{ mix('/css/console.css') }}" type="text/css" media="all" charset="utf-8" />
    </head>
    <body>
        <section class="section" id="main-page">
            <div class="level">
                <div class="console-navigation level-left">
                    <aside class="menu">
                        <div v-for="nav in navs">
                            <p v-if="!nav.isRoute" class="menu-label" v-text="nav.text"></p>
                            <ul v-if="nav.hasChildren" class="menu-list">
                                <li v-for="cnav in nav.children">
                                    <router-link active-class="is-active" v-bind:to="cnav.path" v-text="cnav.text"></router-link>
                                    <ul v-if="cnav.hasChildren">
                                        <li v-for="ccnav in cnav.children">
                                            <router-link active-class="is-active" v-bind:to="ccnav.path" v-text="ccnav.text">
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </aside>
                </div>
                <div class="level-right">
                    <router-view></router-view>
                </div>
            </div>

        </section>
        <!--
            COPYRIGHT 2013 ERESOURCES LLC
            1015 15TH ST NW #900
            WASHINGTON DC 20005
            
            YOU MAY NOT COPY, ALTER, ADD TO, DELETE, OR REDISTRIBUTE THIS CODE WITHOUT
            EXPRESS WRITTEN CONSENT OF ERESOURCES CHIEF EXECUTIVE OFFICER.
            
            ERESOURCES IS A REGISTERED TRADEMARK OF ERESOURCES LLC
            -->
        <script type="text/javascript" src="{{ mix('/js/console.js') }}"></script>
    </body>
</html>

