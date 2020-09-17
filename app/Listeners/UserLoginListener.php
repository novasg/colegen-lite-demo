<?php

namespace App\Listeners;

use App\Events\UserLogin;
use Illuminate\Queue\InteractsWithQueue;
use App\Repositories\Auth\AuthRepository;
use Illuminate\Contracts\Queue\ShouldQueue;

class UserLoginListener
{
    protected $auth;

    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct(
        AuthRepository $auth
    ) {
        $this->auth = $auth;
    }

    /**
     * To check logged in user has preferences associated with it
     *
     * @param  UserLogin  $event
     * @return void
     */
    public function handle(UserLogin $event)
    {
        //
    }
}
