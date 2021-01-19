<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Ilanlar extends Model
{
    protected $table = 'ilanlars';
    protected $fillable = ['userID','ilanBilgileri'];

    public function user(){
        return $this->hasOne(User::class, 'id','userID');
    }
    protected $casts = [
        'ilanBilgileri' => 'array'
    ];
}
