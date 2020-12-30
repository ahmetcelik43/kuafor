<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\User;
class Rol extends Model
{
    protected $table = 'rols';

    public function user(){
        return $this->hasMany(User::class, 'rolID','id');
    }
}
