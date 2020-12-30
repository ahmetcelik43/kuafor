<?php

use Illuminate\Database\Seeder;
use App\User;
use Illuminate\Support\Facades\Hash;
class KullanicilarsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $array =array("ad"=>"Ahmet ÇELİK" , "email"=>"ahmet.celik5443@gmail.com",
          "sifre"=>Hash::make("Ahmet"), "rolID"=>1);
          User::create($array);

        //env
        /*
        $Kullanicilar = new Kullanicilar;
        $Kullanicilar->ad = "Ahmet ÇELİK";
        $Kullanicilar->email = "ahmet.celik5443@gmail.com";
        $Kullanicilar->sifre = Hash::make("Ahmet");
        $Kullanicilar->rolID = 1;
        $Kullanicilar->save();
        */
    }
}
