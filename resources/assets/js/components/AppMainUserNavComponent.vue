<template>
    <div id="main-user-nav">
        <ul class="usernav">
            <li class="name">
                <a v-text="name"></a>
                <ul>
                    <li class="profile"><a>Edit My Profile</a></li>
                    <li class="log-out"><a></a></li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: ['name']
    }
</script>