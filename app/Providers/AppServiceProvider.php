<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Models\IRepository\IUserRepository;
use App\Models\Repositories\UserRepository;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(
                    'App\Models\IRepository\IUserRepository', 
                    'App\Models\Repositories\UserRepository'
            );
    }
}
