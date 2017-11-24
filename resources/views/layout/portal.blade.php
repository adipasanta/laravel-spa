<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="{{ app()->getLocale() }}" lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="iso-8859-1" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="robots" content="noindex, nofollow" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>Online Application Portal | Bing Overseas Studies</title>
        {{-- using laravel mix to generate css file --}}
        <link rel="stylesheet" href="{{ mix('/css/new-main.css') }}" type="text/css" media="all" charset="utf-8" />
        @yield('style')
    </head>
    <body id="main-app">
        @yield('content')
    </body>
</html>