


    main.controller('yayinlananilanlar' ,function($scope,cfpLoadingBar,$timeout,socketFactory,uuid)
    {
      
    //ws.$emit("hello","ana");
     /*socketFactory({
        ioSocket: io.connect("http://127.0.0.1:8001",{transports:['websocket']})
        })
    .emit("sendMessageToServer");
    */
      cfpLoadingBar.start();

      $scope.$on("$destroy",function() {    
        $( window ).off( "resize.Viewport" );
     });
     var ilanlarByID = $("input[name='ilanlarByID']").val();
      $scope.ilanlar =JSON.parse(ilanlarByID);


     $scope.ilanlar =JSON.parse(ilanlarByID);
     $timeout(function() {
        cfpLoadingBar.complete();
    }, 2000);
     socketFactory({
      ioSocket: io.connect("http://127.0.0.1:8001",{transports:['websocket'],reconnection:true})
      })
    .on("sendMessageToClient", function(message){
      alert(message);
    });

    

    $scope.genderInput = [
      {	name: "Erkek",	ticked: false	},
      {	name: "Bayan",	ticked: false	},
      {	name: "Erkek Ve Bayan",	ticked: false	}

 ];
 $scope.hizmetInput = [
  {	name: "Saç Bakımı",	ticked: false	},
  {	name: "Sakal Bakımı",	ticked: false	},
  {	name: "Balyaj",	ticked: false	},
  {	name: "Röfle",	ticked: false	},

  {	name: "Ombré",	ticked: false	},
  {	name: "Kırık fön",	ticked: false	},
  {	name: "Bronde",	ticked: false	},
  {	name: "Saç strobingi",	ticked: false	},
  {	name: "Cila atmak",	ticked: false	},
  {	name: "Dekolore",	ticked: false	},
  {	name: "Perma",	ticked: false	},
  {	name: "Meç",	ticked: false	},
  {	name: "Defrize",	ticked: false	},
  {	name: "Dekolare",	ticked: false	},
  {	name: "Efile Makası",	ticked: false	},
  {	name: "Helezon",	ticked: false	},
  {	name: "Komoden",	ticked: false	},
  {	name: "Kompres",	ticked: false	},
  {	name: "Mizanpli",	ticked: false	},
  {	name: "Mizanpli",	ticked: false	},
  {	name: "Mizanpli",	ticked: false	},
  {	name: "Nötralizatör",	ticked: false	},
  {	name: "Penuvar",	ticked: false	},
  {	name: "Perhidrol",	ticked: false	},
  {	name: "Şesuar",	ticked: false	},
  {	name: "Vigo",	ticked: false	},
  {	name: "Volüm",	ticked: false	},
  {	name: "Zekzel",	ticked: false	},

];

$scope.saatInput=[
  {name:"07:00 - 08:00"},
  {name:"08:00 - 09:00"},
  {name:"09:00 - 10:00"},
   {name:"10:00 - 11:00"},
    {name:"11:00 - 12:00"},
    {name:"12:00 - 13:00"},
    {name:"13:00 - 14:00"},
    {name:"14:00 - 15:00"},
    {name:"15:00 - 16:00"},
    {name:"16:00 - 17:00"},
    {name:"17:00 - 18:00"},
    {name:"18:00 - 19:00"},
    {name:"19:00 - 20:00"},
    {name:"20:00 - 21:00"},
    {name:"21:00 - 22:00"},
    {name:"22:00 - 23:00"},
    {name:"23:00 - 00:00"},
 

];
 $scope.genderOutput=[];
 $scope.hizmetOutput=[];
 //$scope.zamanOutput =[];
 //$scope.zamanTotal = [];
 //$scope.saatOutput = [];
 $scope.total=[

 ];
 $scope.uniqID=uuid;

 $scope.kapasiteDegisti=function()
{
    $scope.kapasite==0 ? $scope.diger=true:'';
}
let i=false;
$scope.allCheck=function()
{
    if(!i)
    {
        $("table input[type='checkbox']").prop("checked",true);
        i=true;
    }
    else{
        $("table input[type='checkbox']").prop("checked",false);
       i=false;
    }

}
$scope.sec=function(gun,saat,event,uniqID){
  if(event.target.checked)
  {
      $scope.total.push({
          id:uniqID,
          gunler:gun,
          saatler:saat
      });
  }
  else
  {
      //let filter = $filter('filter')($scope.total,{id:uniqID},true).remove();
      $scope.total.map(function(item,index){
          if(item.id==uniqID){ $scope.total.splice(index,1)}
      })
      //$scope.total.remove()
  }
}

$scope.formIsValid = {form1 : false  , form2 : false  , form3 : false ,form4: false ,form5:false ,yeni:false};

$scope.validation = function(event)
{
    let ilveilce = angular.element(".form-doldur").scope();
    var regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/; //telefon numarası validation.
    var element = $(event.target).parent().children().find(".tab-content");
    var ilveilce = angular.element(element.find(".ilveilce")).scope();
    var tamAdres = element.find("textarea").val().toString().trim();
    if(angular.isUndefined(ilveilce.il) || (angular.isUndefined(tamAdres) || tamAdres.length<20 ))
    {
    
       if(angular.isUndefined(ilveilce.il)){
        ilveilce.isValidSehir = true;
        $("input[name='ilDesktop']").addClass("borderRedAll");
       }
       else {
        ilveilce.isValidSehir = false;
        $("input[name='ilDesktop']").removeClass("borderRedAll")
        }
     
               

       if(angular.isUndefined($scope.tamAdres) || $scope.tamAdres.length<20 )
               {
                $("#tamAdres").addClass("borderRedAll")
                $scope.tamAdresValid=true;
               } 

       else{ 
                 $scope.tamAdresValid=false;
           $("#tamAdres").removeClass("borderRedAll")
            }
       $scope.formIsValid.form1 = false;
     }
     else
     {
        
         $scope.formIsValid.form1 = true;

     }
      if($scope.genderOutput.length == 0 || angular.isUndefined($scope.isletmeAdi) || angular.isUndefined($scope.kapasite)
     ||  ($scope.diger && angular.isUndefined($scope.kapasiteDiger)) || angular.isUndefined($scope.telefon) || !regex.test($scope.telefon))
     {
      
        if($scope.genderOutput.length == 0) 
        {
            $scope.genderValid=true;
            $("#collapseTwo .multiSelect  button:not('.clearButton'):not('.reset') , .checkboxLayer ").addClass("borderRedAll");
        }
            else
            {
                $scope.genderValid=false;

                 $("#collapseTwo .multiSelect  button , .checkboxLayer ").removeClass("borderRedAll")
            }
                 if(angular.isUndefined($scope.isletmeAdi)) 
                 {
                     $scope.isletmeAdiValid=true;
                     $("#isletmeAdi").addClass("borderRedAll");
                 }
        else{ 
            $scope.isletmeAdiValid=false;

            $("#isletmeAdi").removeClass("borderRedAll");
        }
        if(angular.isUndefined($scope.kapasite))
        {
            $scope.kapasiteValid=true;
             $("#kapasite").addClass("borderRedAll")
        }
        else
        {
            $scope.kapasiteValid=false;

             $("#kapasite").removeClass("borderRedAll")
         }
        if(angular.isUndefined($scope.kapasiteDiger) && $scope.diger)
        {
            $scope.digerValid=true;
             $("#kapasiteDiger").addClass("borderRedAll")
        }
        else{ 
            $scope.digerValid=false;

        $("#kapasiteDiger").removeClass("borderRedAll")
        }
        if(angular.isUndefined($scope.telefon) || !regex.test($scope.telefon))
        {
             $("#telefon").addClass("borderRedAll")
             $scope.telValid=true;
        }
        else 
        {
            $("#telefon").removeClass("borderRedAll")
            $scope.telValid=false;

        }
            $scope.formIsValid.form2 = false;

      }
      else
      {
        
          $scope.formIsValid.form2 = true;
      }
      if($scope.hizmetOutput.length == 0 )
      {
        $scope.hizmetValid = true;

      
          $("#collapseThree .multiSelect  button:not('.clearButton'):not('.reset') , .checkboxLayer ").addClass("borderRedAll");
         $scope.formIsValid.form3 = false;

       }
       else
       { $scope.hizmetValid = false;
          
           $("#collapseThree .multiSelect  button , .checkboxLayer ").removeClass("borderRedAll")

           $scope.formIsValid.form3 = true;

       }
       if($scope.total.length == 0 )
       {
       
          $("#collapseFour table ").addClass("borderRedAll");
          $scope.formIsValid.form4 = false;

        }
        else
        {
            $scope.totalValid = false;

     
            $("#collapseFour table ").removeClass("borderRedAll")
            $scope.formIsValid.form4 = true;

        }
        let el = $(".dataTr");
       let isValid =true;
       for (let index = 0; index < el.length; index++) {
       let elchildren = el.eq(index).children();
        if(!elchildren.find("input").val().toString().trim())
        isValid=false;
        }
        console.log(isValid)
        if(!isValid  || $scope.hizmetOutput.length==0)
        {
            $scope.fiyatlandirmaValid = true;

          $("#headingFive").parent().addClass("borderRedAll")
          //$("#collapseFive .card-body").addClass("borderRedAll");
         //$("#headingFive").css({"border-top":'1px solid red'});
           $("#collapseFive table ").addClass("borderRedAll");
           $scope.formIsValid.form5 = false;

         }
         else
         {
            $scope.fiyatlandirmaValid = false;

             $("#headingFive").parent().removeClass("borderRedAll")
             //$("#collapseFive .card-body").removeClass("borderRed");
             //$("#headingFive").css({"border-top":'none'});
             $("#collapseFive table ").removeClass("borderRedAll")
             $scope.formIsValid.form5= true;

         }
         $scope.formIsValid.yeni=true;
         return $scope.formIsValid;
}
$scope.guncelle=function(ilanID ,event )
{
    var validation = $scope.validation(event);

    if(validation.form1 && validation.form2 && validation.form3 && validation.form4 &&  validation.form5)
    {
        let ilveilce = angular.element(".form-doldur").scope();
        let fiyatlar=[];
        let el = $(".dataTr");

     for (let index = 0; index < el.length; index++) {
       let elchildren = el.eq(index);
        if(angular.isDefined(elchildren.find("input").val()))
        fiyatlar.push({
            name:elchildren.find(".dataTd").html().toString().trim(),
            fiyat:elchildren.find("input").val()
        })
     }
        let data=[
         {
                il:ilveilce.il,
                ilce:ilveilce.ilce,
                tamAdres:$scope.tamAdres,
                gender:$scope.genderOutput[0].name,
                isletmeAdi:$scope.isletmeAdi,
                kapasite:angular.isUndefined($scope.kapasite) ? $scope.kapasiteDiger : $scope.kapasite,
                telefon:$scope.telefon,
                hizmetler : $scope.hizmetOutput.map(function(item){ return {name:item.name} }),
                acikSaatler: $scope.total.map(function(item){return { saatler:item.saatler , gunler:item.gunler } }),
                fiyatlar:fiyatlar,
            },
        {
            userID:authFactory.getUser().id

        }]
                    
        console.log(data);
        Data.post('/ilan-kaydet',data).then(function(response){
            toastr.success("Başarılı !");
