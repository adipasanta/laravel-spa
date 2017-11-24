<?php

use App\Message;
use Illuminate\Http\Request;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('passport');
    // $query = http_build_query([
    //     'client_id' => 5,
    //     'redirect_uri' => 'http://localhost:8005/passport',
    //     'response_type' => 'token',
    //     'scope' => 'portal',
    // ]);
    // return redirect('http://localhost:8007/oauth/authorize?'.$query);
});

// passport callback
Route::get('/passport', function(Request $request) {
    dd($request);
    return view('passport', [
        'code' => $request->code,
    ]);
    $http = new GuzzleHttp\Client;
    $response = $http->post('http://172.18.0.3/oauth/token', [
        'form_params' => [
            'grant_type' => 'authorization_code',
            'client_id' => 4,
            'client_secret' => env('PASSPORT_CLIENT_SECRET'),
            'redirect_uri' => 'http://localhost:8005/passport',
            'code' => $request->code,
        ],
    ]);

    return json_decode((string) $response->getBody(), true)['access_token'];
});

// Route::get('/app/main/main', 'ManageUsersController@records');
// Route::get('/login', function() {
// });

// Route::get('/main', function () {
//     return view('main');
// });

// Route::get('/console', function () {
//     return view('console');
// });

Route::get('/api/messages', function(Message $message) {
    return $message->all();
});

Route::get('/api/messages/{id}', function(Message $message, $id) {
    return $message->where('id', $id)->get();
});

Route::get('/api/messages/part/{column}', function(Message $message, $column) {
    $res = [];
    foreach ($message->all() as $key => $value) {
        $res[] = $value->{$column};
    }
    return $res;
})->middleware('check_column:'.Message::class);

