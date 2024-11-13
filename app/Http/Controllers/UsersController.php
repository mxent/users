<?php

namespace Mxent\Users\Http\Controllers;

use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;

class UsersController extends Controller implements HasMiddleware
{
    /**
     * Middleware
     */
    public static function middleware(): array
    {
        return [
            // new Middleware('auth'),
        ];
    }

    /**
     * Index
     */
    public function index()
    {
        return inertia('users/index');
    }

    /**
     * Create
     */
    public function create()
    {
        return inertia('users/create');
    }
}
