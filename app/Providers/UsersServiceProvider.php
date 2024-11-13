<?php

namespace Mxent\Users\Providers;

use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;

class UsersServiceProvider extends ServiceProvider
{
    public function boot()
    {
        $this->loadMigrationsFrom(__DIR__.'/../../database/migrations');
        $this->loadTranslationsFrom(__DIR__.'/../../resources/lang', 'users');
        $this->publishes([
            __DIR__.'/../../config/users.php' => config_path('users.php'),
        ], 'users-config');
        $this->publishes([
            __DIR__.'/../../database/migrations' => database_path('migrations'),
        ], 'users-migrations');
        $this->publishes([
            __DIR__.'/../../database/seeders' => database_path('seeders'),
        ], 'users-seeders');
        $this->publishes([
            __DIR__.'/../../resources/lang' => $this->app->langPath('vendor/users'),
        ], 'users-lang');
        $this->publishes([
            __DIR__.'/../../resources/views' => resource_path('views/vendor/users'),
        ], 'users-views');
        $this->publishes([
            __DIR__.'/../../resources/js' => resource_path('js/vendor/users'),
        ], 'users-js');
        $this->publishes([
            __DIR__.'/../../resources/css' => resource_path('css/vendor/users'),
        ], 'users-css');

        Vite::prefetch(concurrency: 3);
    }

    public function register()
    {
        $this->app->register(RouteServiceProvider::class);
        $this->mergeConfigFrom(__DIR__.'/../../config/users.php', 'users');
        $this->loadViewsFrom(__DIR__.'/../../resources/views', 'users');
    }
}
