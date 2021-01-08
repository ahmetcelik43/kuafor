
<!doctype html>
<html lang="en">

<head>
    <meta charset="iso-8859-9">
<title> Profil : {{$arry["ad"]}}</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}"/>
<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
<meta http-equiv="Pragma" content="no-cache" />
<meta http-equiv="Expires" content="0" />
    <!-- <link rel="manifest" href="site.webmanifest"> -->
    <!-- Place favicon.ico in the root directory -->
    <link rel="stylesheet" href="{{ URL::asset('bower_components/bootstrap/dist/css/bootstrap.min.css') }}" />
    
   
   <link rel="stylesheet" media=" screen and (max-width: 850px)" href="{{ URL::asset('css/mobil.css') }}" />
   <link rel="stylesheet" media=" screen and (min-width: 851px)" href="{{ URL::asset('css/masaustu.css') }}" />
   <link rel="stylesheet" href="{{ URL::asset('css/mastercss.css') }}" />


     <script src="https://kit.fontawesome.com/d1fc3fdb09.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="{{ URL::asset('css/masaustu.css') }}" />
  
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
   <script src="{{ URL::asset('bower_components/bootstrap/dist/js/bootstrap.min.js')}}"></script>
</head>
<body>
    <div class="container bg-gray" id="accordion-style-1">
        <div class="container">
            <section>
                <div class="row">
                    <div class="col-12">
                        <h4 class="text-green mb-4 text-center" style="display:block">Profil</h4>
                           
                       </div>
                    <div class="col-10 mx-auto">
                        <div class="card">
                            <div class="card-header" id="headingOne">
                           
                            </div>

                            <div id="collapseOne" class="collapse show fade" aria-labelledby="headingOne" data-parent="#accordionExample">
                                <div class="card-body" style="border: none;">
                                <div class="form-group" style="text-align: center;">
                                    @if ($arry['resimUrl']==null)
                                    <img  style="width: 100px;height: 100px;" src="/user.png">
                                    @else                                        
                                    <img ng-if="getUser().profileImage!=null" src="" alt="">

                                    @endif
                                    <strong style="display: block;margin-top: 5px;">{{$arry['ad']}}</strong>
                                     <strong style="display: block;margin-top: 5px;">{{$arry['rol']}}</strong>
                                     <strong style="display: block;margin-top: 5px;">{{$arry['email']}}</strong>

                                </div>                                  
                                
                             </div>
                            </div>
                    </div>
                   
                            
                    </div>    
                    </div>
                
                </section>
        </div>
    </div>
</body>
</html>