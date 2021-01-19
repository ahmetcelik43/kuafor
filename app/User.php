<?php

namespace App;

//use Illuminate\Contracts\Auth\MustVerifyEmail;
//use Illuminate\Foundation\Auth\User as Authenticatable;
//use Illuminate\Notifications\Notifiable;
//use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Database\Eloquent\Model;

use App\Rol;
class User extends Model
{
    //use Notifiable;

    protected $table = 'kullanicilars';

    public function rol(){
        return $this->hasOne(Rol::class, 'id','rolID');
    }
    protected $fillable = ['ad', 'email', 'password','rolID'];

    public function ilan(){
        return $this->hasMany(Ilanlar::class, 'userID','id');
    }

    /*
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    public function getJWTCustomClaims()
    {
        return [];
    }
    */
    /*
    public function setPasswordAttribute($password)
    {
        if ( !empty($password) ) {
            $this->attributes['password'] = Hash::make($password);
        }
    } 
    */   
}
