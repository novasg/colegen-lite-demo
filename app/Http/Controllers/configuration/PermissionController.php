<?php

namespace App\Http\Controllers\Configuration;

use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use App\Repositories\Configuration\PermissionRepository;
use App\Http\Controllers\Controller;

class PermissionController extends Controller
{
    protected $request;
    protected $repo;

    protected $module = 'permission';

    /**
     * Instantiate a new controller instance.
     *
     * @return void
     */
    public function __construct(
        Request $request,
        PermissionRepository $repo
    ) {
        $this->repo = $repo;
        $this->request = $request;

        $this->middleware('role:'.config('system.default_role.admin'));
    }

    /**
     * Used to fetch Pre-Requisites during Permission Assign
     * @get ("/api/permission/pre-requisite")
     * @return Response
     */
    public function preRequisite()
    {
        // assign default permission

        $system_permissions = array();
        foreach (config('system.default_permission') as $permission_group) {
            foreach ($permission_group as $name => $permission) {
                $system_permissions[] = $name;
            }
        }
        $existing_permissions = Permission::all()->pluck('name')->all();

        $remaining_permissions = array_diff($system_permissions, $existing_permissions);

        foreach ($remaining_permissions as $permission) {
            Permission::create(['name' => strtolower($permission)]);
        }
        
        $permissions = Permission::all()->pluck('name')->all();
        $role = Role::findByName(config('system.default_role.admin'));

        if ($role->permissions->count() != count($permissions)) {
            $role->syncPermissions($permissions);
        }

        return $this->success($this->repo->getPreRequisite());
    }

    /**
     * Used to fetch Module Pre-Requisites
     * @get ("/api/permission/{module}/pre-requisite")
     * @return Response
     */
    public function modulePreRequisite($module)
    {
        return $this->success($this->repo->getModulePreRequisite($module));
    }

    /**
     * Used to assign Permission
     * @post ("/api/permission")
     * @param ({
     *      @Parameter("data", type="array", required="true", description="Array of Permissions"),
     * })
     * @return Response
     */
    public function assignPermission()
    {
        $this->repo->assignPermission($this->request->all());

        activity('permission')->log('assigned');

        return $this->success(['message' => trans('configuration.permission_assigned')]);
    }

    /**
     * Used to assign Permission
     * @post ("/api/module/permission")
     * @param ({
     *      @Parameter("data", type="array", required="true", description="Array of Permissions"),
     * })
     * @return Response
     */
    public function assignModulePermission()
    {
        $this->repo->assignModulePermission($this->request->all());

        activity('permission')->log('assigned');

        return $this->success(['message' => trans('configuration.permission_assigned')]);
    }
}
