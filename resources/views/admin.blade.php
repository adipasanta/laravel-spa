@extends('layout.portal')

@section('style')
  <link rel="stylesheet" href="https://jenil.github.io/bulmaswatch/slate/bulmaswatch.min.css" type="text/css" media="all" charset="utf-8" />
@endsection

@section('content')
  <div id="app" class="container"></div>
  <script type="text/javascript" src="{{ mix('/js/admin.js') }}"></script>
@endsection