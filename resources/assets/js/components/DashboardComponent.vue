<template>
    <div id="admin-app">
        <header class="hero is-light">
            <div class="hero-head">
                <nav class="navbar has-shadow" role="navigation" aria-label="main navigation">
                    <div class="navbar-brand">
                        <a class="navbar-item">
                        <img src="http://stanfordbosp.eresources.id/console/images/orchestrate-color.png" alt="Orchestrate">
                        </a>
                        <a class="navbar-item is-tab is-hidden-mobile is-active"><span class="icon is-medium"><i class="fa fa-home"></i></span>Executive Summary</a>
                        <a class="navbar-item is-tab is-hidden-mobile">Applications</a>
                        <a class="navbar-item is-tab is-hidden-mobile">Settings</a>
                        <a class="navbar-item is-tab is-hidden-mobile">Web</a>
                        <button class="button navbar-burger" data-target="navMenu">
                        <span></span>
                        <span></span>
                        <span></span>
                        </button>
                    </div>
                    <div class="navbar-menu navbar-end" id="navMenu">
                        <a class="navbar-item is-tab is-hidden-tablet is-active">Executive Summary</a>
                        <a class="navbar-item is-tab is-hidden-tablet">Applications</a>
                        <a class="navbar-item is-tab is-hidden-tablet">Settings</a>
                        <a class="navbar-item is-tab is-hidden-tablet">Web</a>
                        <router-link to="message" tag="span">
                            <a class="navbar-item nav-tag">              
                                <span class="icon is-small">
                                <i class="fa fa-envelope-o"></i>
                                </span>
                                <span class="tag is-primary tag-notif">6</span>
                            </a>  
                        </router-link>
                        <div class="navbar-item has-dropdown is-hoverable">
                            <a class="navbar-link">
                                <figure class="image is-24x24 image-profile" style="margin-right:.5em;">
                                    <img src="https://avatars1.githubusercontent.com/u/7221389?v=4&amp;s=32">
                                </figure>
                                Administrator
                            </a>
                            <div class="navbar-dropdown is-right">
                                <a class="navbar-item">
                                <span class="icon is-small">
                                <i class="fa fa-user-o"></i>
                                </span>
                                Profile
                                </a>
                                <hr class="navbar-divider">
                                <a class="navbar-item">
                                <span class="icon is-small">
                                <i class="fa fa-power-off"></i>
                                </span>
                                Logout
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
        <div class="section">
            <div class="columns">
                <aside class="column is-2">
                    <nav class="menu">
                        <p class="menu-label">
                            General
                        </p>
                        <ul class="menu-list">
                            <li><a class="is-active" href="#"><span class="icon is-small"><i class="fa fa-tachometer"></i></span> Dashboard</a></li>
                        </ul>
                        <p class="menu-label">
                            Administration
                        </p>
                        <ul class="menu-list">
                            <li><a href="/bulma-admin-dashboard-template/forms.html"><span class="icon is-small"><i class="fa fa-pencil-square-o"></i></span> Forms</a></li>
                            <li><a href="/bulma-admin-dashboard-template/ui-elements.html"><span class="icon is-small"><i class="fa fa-desktop"></i></span> UI Elements</a></li>
                            <li><a href="/bulma-admin-dashboard-template/tables.html"><span class="icon is-small"><i class="fa fa-table"></i></span> Tables</a></li>
                            <li><a href="/bulma-admin-dashboard-template/presentations.html"><span class="icon is-small"><i class="fa fa-bar-chart"></i></span> Presentations</a></li>
                            <li>
                                <a class=""><i class="fa fa-cog"></i> Settings</a>
                                <ul>
                                    <li><a>Members</a></li>
                                    <li><a>Plugins</a></li>
                                    <li><a>Add a member</a></li>
                                </ul>
                            </li>
                        </ul>
                        <p class="menu-label">
                            Live On
                        </p>
                        <ul class="menu-list">
                            <li><a><span class="icon is-small"><i class="fa fa-bug"></i></span> Additional Pages</a></li>
                            <li><a><span class="icon is-small"><i class="fa fa-windows"></i></span> Extras</a></li>
                            <li><a><span class="icon is-small"><i class="fa fa-laptop"></i></span> Landing Page</a></li>
                        </ul>
                    </nav>
                </aside>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script src="https://mazipan.github.io/bulma-admin-dashboard-template/dist/build.js"></script>
<script type="application/ld+json">
    {
      "@context": "http://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [{
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@id": "http://mazipan.github.io/",
          "name": "Home",
          "image": "http://mazipan.github.io/images/irfan-maulana.jpg"
        }
      }, {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@id": "http://mazipan.github.io/demo/",
          "name": "Demo",
          "image": "http://mazipan.github.io/images/irfan-maulana.jpg"
        }
      }, {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@id": "http://mazipan.github.io/bulma-admin-dashboard-template",
          "name": "bulma-admin-dashboard-template",
          "image": "https://mazipan.github.io/bulma-admin-dashboard-template/logo.png"
        }
      }]
    }
</script>
<script>
    export default {
        data() {
            return {
                formProvider: 'admins'
            }
        }
    }
</script>

<style scoped>
    /*slate*/
    .hero.is-light a.navbar-item:not(.button)
    {
        color: #AAA;
    }
    .hero.is-light a.navbar-item:not(.button):hover
    {
        color: #FFF;
    }
    .is-24x24.image-profile img,
    .tag.is-primary.tag-notif
    {
        border-radius: 50%;
        margin: 2px;

        object-fit: cover;
        object-position: center right;
    }
    .tag.is-primary.tag-notif
    {
        margin-bottom: 1.2em;
        margin-left: -0.6em;
    }

</style>