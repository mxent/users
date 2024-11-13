<?php

use Mxent\Users\Http\Controllers\UsersController;

Route::get('/', [UsersController::class, 'index'])->name('index');
Route::get('/create', [UsersController::class, 'create'])->name('create');
