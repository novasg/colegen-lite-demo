<?php
namespace App\Repositories\Configuration;

use App\Models\Configuration\Role;
use Illuminate\Validation\ValidationException;

class RoleRepository
{
    protected $role;

    /**
     * Instantiate a new instance.
     *
     * @return void
     */
    public function __construct(
        Role $role
    ) {
        $this->role = $role;
    }

    /**
     * Get all roles
     *
     * @return Role
     */

    public function getAll()
    {
        return $this->role->all();
    }

    /**
     * List all roles by name & id
     *
     * @return Role
     */

    public function list()
    {
        $query = $this->role->all()->pluck('detail', 'id')->all();
    }

    /**
     * List roles for employees
     *
     * @return Role
     */

    public function employeeRoleList()
    {
        $exclude = array(
            config('system.default_role.admin'),
            config('system.default_role.student'),
            config('system.default_role.parent')
        );

        if (! \Auth::user()->hasRole(config('system.default_role.admin'))) {
            array_push($exclude, config('system.default_role.manager'));
            array_push($exclude, config('system.default_role.principal'));
        }

        return $this->role->whereNotIn('name', $exclude)->get()->pluck('detail', 'id')->all();
    }

    /**
     * Get role by name
     *
     * @return Role
     */

    public function findByName($name = null)
    {
        return $this->role->filterByName($name)->first();
    }

    /**
     * List (name,id) all roles by name where given name is not included
     *
     * @return Role
     */

    public function listExceptName($names = array())
    {
        return $this->role->whereNotIn('name', $names)->get()->pluck('name', 'id')->all();
    }

    /**
     * List (name) all roles by id
     *
     * @return Role
     */

    public function listNameById($ids = array())
    {
        $ids = is_array($ids) ? $ids : (($ids) ? [$ids] : []);

        return $this->role->whereIn('id', $ids)->get()->pluck('name')->all();
    }

    /**
     * List all names
     *
     * @return Role
     */

    public function listName()
    {
        return $this->role->all()->pluck('name')->all();
    }
}
