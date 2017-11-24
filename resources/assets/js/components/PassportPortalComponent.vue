<template>
    <div id="passport-portal-component">
        <section class="main-page">
            <nav>
                <div class="wrap-nav clearfix">
                    <app-main-nav-component :routes="routes"></app-main-nav-component>
                </div>
            </nav>
            <section class="section">
                <router-view></router-view>
            </section>
            <app-main-footer-component></app-main-footer-component>
        </section>
    </div>
</template>

<script>
    export default {
        props: ['routes']
    }
</script>