<?php

namespace App\Http\Controllers\Configuration;

use Illuminate\Http\Request;
use App\Repositories\Configuration\RoleRepository;
use App\Http\Controllers\Controller;

class RoleController extends Controller
{
    protected $request;
    protected $repo;
    protected $module = 'role';

    /**
     * Instantiate a new controller instance.
     *
     * @return void
     */
    public function __construct(
        Request $request,
        RoleRepository $repo
    ) {
        $this->request = $request;
        $this->repo = $repo;

        $this->middleware('role:'.config('system.default_role.admin'), ['except' => ['list']]);
    }

    /**
     * List all roles
     * @get ("/api/role/employee/list")
     * @return Response
     */
    public function employeeRoleList()
    {
        return $this->ok(generateSelectOption($this->repo->employeeRoleList()));
    }
}
