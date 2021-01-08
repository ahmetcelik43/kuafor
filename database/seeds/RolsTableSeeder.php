<?php

use Illuminate\Database\Seeder;
use App\Rol;
class RolsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $rol = new Rol;
        $rol->rolAdi = "Kuafor";
        //$rol->timestamps =true;
        $rol->save();
        $rol = new Rol;
        $rol->rolAdi = "Kullanici";
        //$rol->timestamps =true;
        $rol->save();
    }
}
