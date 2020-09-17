<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Repositories\Auth\UserRepository;
use App\Http\Controllers\Controller;

class UserController extends Controller
{
    protected $request;
    protected $repo;
    protected $module = 'user';

    /**
     * Instantiate a new controller instance.
     *
     * @return void
     */
    public function __construct(
        Request $request,
        UserRepository $repo
    ) {
        $this->request = $request;
        $this->repo = $repo;
    }

    /**
     * Used to get preference Pre Requisite
     * @get ("/api/user/preference/pre-requisite")
     * @return Response
     */
    public function preferencePreRequisite()
    {
        $system_variables = getVar('system');
        $color_themes = isset($system_variables['color_themes']) ? $system_variables['color_themes'] : [];
        $directions = isset($system_variables['directions']) ? $system_variables['directions'] : [];
        $sidebar = isset($system_variables['sidebar']) ? $system_variables['sidebar'] : [];

        return $this->success(compact('color_themes', 'directions', 'sidebar'));
    }

    /**
     * Used to store user preference
     * @post ("/api/user/preference")
     * @return Response
     */
    public function preference()
    {
        $this->repo->updatePreference(\Auth::user()->UserPreference, $this->request->all());

        return $this->success(['message' => trans('user.preference_updated')]);
    }
}
