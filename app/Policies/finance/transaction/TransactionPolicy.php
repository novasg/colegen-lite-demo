<?php

namespace App\Policies\Finance\Transaction;

use App\User;
use App\Models\Finance\Transaction\Transaction;
use Illuminate\Auth\Access\HandlesAuthorization;
use App\Repositories\Employee\EmployeeRepository;

class TransactionPolicy
{
    protected $employee;

    use HandlesAuthorization;

    /**
     * Create a new policy instance.
     *
     * @return void
     */
    public function __construct(
        EmployeeRepository $employee
    ) {
        $this->employee = $employee;
    }
}
