<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateKullanicilarsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('kullanicilars', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('ad')->unique();
            $table->string('email')->unique();
            $table->string('sifre');
            $table->string('profilResmiUrl')->nullable();
            $table->rememberToken();
            $table->timestamps();
            $table->bigInteger('rolID')->unsigned();
            $table->foreign('rolID')->references('id')->on('rols')->onDelete('cascade');
            $table->timestamp('email_verified_at')->nullable();

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('kullanicilars');
    }
}
