@extends('layout.portal')
@section('style')
<style type="text/css">
    html,body {
    font-family: 'Open Sans', serif;
    font-size: 14px;
    font-weight: 300;
    }
    .hero.is-success {
    background: #F2F6FA;
    }
    .hero .nav, .hero.is-success .nav {
    -webkit-box-shadow: none;
    box-shadow: none;
    }
    .box {
    margin-top: 5rem;
    }
    .avatar {
    margin-top: -70px;
    padding-bottom: 20px;
    }
    .avatar img {
    padding: 5px;
    background: #fff;
    border-radius: 50%;
    -webkit-box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
    box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
    }
    input {
    font-weight: 300;
    }
    p {
    font-weight: 700;
    }
    p.subtitle {
    padding-top: 1rem;
    }
    .avatar img
    {
    width: 128px;
    }
    .hidden
    {
        display: none !important;
    }
</style>
@endsection
@section('content')
<div id="app" class="container"></div>
<script type="text/javascript" src="{{ mix('/js/passport.js') }}"></script>
@endsection

