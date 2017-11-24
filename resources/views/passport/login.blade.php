@extends('layout.portal')

@section('content')
    <div id="app">
        <passport-login-component></passport-login-component>
    </div>
    <script type="text/javascript" src="{{ mix('/js/login.js') }}"></script>
@endsection