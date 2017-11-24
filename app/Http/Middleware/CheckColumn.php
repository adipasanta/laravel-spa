<?php

namespace App\Http\Middleware;

use Closure;

class CheckColumn
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next, $class)
    {
        return in_array($request->route('column'), $class::checkColumn()) ? $next($request) : abort(404);
    }
}
    