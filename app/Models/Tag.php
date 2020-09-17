<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    protected $fillable = ['slug','type'];

    public function scopeFilterByType($q, $type = null)
    {
    	return $q->whereType($type);
    }
}