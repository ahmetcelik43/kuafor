@extends('landing')
@section('title', 'Ana Sayfa - Kuaför.tk')
@section('heads')
<script src="{{ URL::asset('js/servis/home.js') }}"></script>

@endsection
@section('main')
<div ng-controller="home">
<div class="row">

    <div class="top-img text-center">
      <h3 style="color:white">Türkiye' nin kuaför bulma sitesi</h3>
      <br>
      <div class="arama-kutusu-mobil" >

  <form  class="ara1 animate__animated animate__backInLeft">
  <div style="width:100%;margin-left:auto;margin-right:auto">
    <i style="float:right;display:none" onclick="ileri()" class="fa fa-arrow-left" style="font-size:40px;color:rgba(0,0,200,0.6)"></i>

 <div class="sehir" ng-init="sehirMobilInit()">
  <!-- <input id="myInput2" ng-focusout="mobilIlFocusOut()" class="form-control" autocomplete="off" type="text" name="myCountry" placeholder="Şehir"/>-->

   <div angucomplete-alt 
                    maxlength="50"
                    pause="300"
                    initial-value="ilMobil"
                    selected-object="secilMobil"
                    local-data="iller"
                    search-fields="ilMobil"
                    title-field="ilMobil"
                    minlength="0"                        
                    input-name="il"
                    input-class="form-control"                                         
                    text-no-results="İl Bulunamadı !">
   </div>

   </div>

   <button type="button" style="margin-left:7px"  class="btn btn-success ara-btn"><i class="fa fa-arrow-right" style="font-size:25px"></i> İleri</button>
   </div>
 </form>

 <form  class="ara2 animate__animated animate__backInLeft">
   <div style="width:100%;margin-left:auto;margin-right:auto">
<button type="button" onclick="geri()" class="btn btn-danger ara-btn">
    Geri  <i class="fa fa-arrow-left" style="font-size:25px"></i>
</button>
   <div class="ilce">
   <div class="autocomplete">
 <input id="ilce2"  autocomplete="off" type="text" class="form-control ilce"  style="margin-left:3px" placeholder="İlçe"/>
 </div>
   </div>

  <button type="button" style="margin-left:7px"  class="btn btn-success ara-btn"><i class="fa fa-arrow-right" style="font-size:25px"></i> Ara</button>
  </div>
</form>

    </div>
      <div class="arama-kutusu-desktop" id="arama-kutusu-desktop">

 <div class="sehir2">
     <div class="autocomplete">
      <div angucomplete-alt id="ilDesktop"
      maxlength="50"
      pause="300"
      initial-value="il"
      selected-object="secIlDesktop"
      local-data="illerDesktop"
      search-fields="il"
      title-field="il"
      minlength="1" 
      match-class="highlight"                  
      input-name="ilDesktop"
      input-class="form-control"
      focus-out="focusOutIlDesktop()"                                         
      text-no-results="İl Bulunamadı !">
</div>

   <!--<input id="myInput" autocomplete="off" class="form-control" type="text" name="myCountry" placeholder="Şehir"/>
   --> 
  </div>

   </div>
   <div class="ilce2">
   <div class="autocomplete">
 <!--<input id="ilce" type="text" autocomplete="off" class="form-control ilce"  style="margin-left:3px" placeholder="İlçe"/>
 -->
 <!--
 <div angucomplete-alt 
 maxlength="50"
 pause="300"
 initial-value="ilceDesktop"
 selected-object="seciliIlceDesktop"
 local-data="ilcelerDesktop"
 search-fields="ilceDesktop"
 title-field="ilceDesktop"
 minlength="0"                        
 input-name="ilceDesktop"
 input-class="form-control"                                         
 text-no-results="İlçe Bulunamadı !">
</div> -->
</div>
   </div>
   <button type="button" style="margin-left:7px"   class="btn btn-success ara-btn2"><i class="fa fa-search" style="font-size:25px"></i></button>

    </div>
   </div>
</div>
<br>
<div class="row tanitim text-center">
    <div class="col-md-12"><h3>Nasıl çalışır ?</h3>
      <br>
      <br>
    </div>

    <div class="col-md-4 col-xs-4 col-sm-4 buyutme">
      <h4>Üye ol</h4>
      <img src="/login.png" alt="" class="img-fluid tanitim-imgs">
    </div>
    <div class="col-md-4 col-xs-4 col-sm-4 buyutme">
      <h4>Form doldur</h4>
      <img src="/sign-form.png" alt="" class="img-fluid tanitim-imgs">
    </div>

    <div class="col-md-4 col-xs-4 col-sm-4 buyutme">
      <h4> Yönet</h4>
      <img src="/team-management.png" alt="" class="img-fluid tanitim-imgs">
    </div>
  </div>
<br>
<br>
<br>
<div style="width:100%; background:rgb(0,0,0,0.1)">
  <div class="row iletisim text-center">

    <div class="col-md-12"><h3>İletişim</h3>
      <br>
    </div>

      <div class="col-md-6 col-xs-6 ">
   <input class="form-control" type="text" name="isim" placeholder="İsim" required>

      </div>
      <div class="col-md-6 col-xs-6 ">
  <input type="text" class="form-control" name="email" placeholder="Email" required>
      </div>
      <br>
      <br>
      <div class="col-md-12 col-xs-12 ">
      <textarea name="name" class="form-control" rows="4" cols="10" placeholder="konu" required></textarea>
      </div>

      <div class="col-md-12 col-xs-12 ">
        <br>

      <button class="btn btn-primary" type="button">{{trans('page.gonder')}}</button>
      </div>

  </div>
</div>
</div>
@endsection