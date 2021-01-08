main.controller('formDoldur', function($scope,$filter,uuid , cfpLoadingBar , $timeout  ){
    cfpLoadingBar.start();

    angular.element("#main").scope().linkActive.ilanYayinla = true;
    $scope.$on("$destroy",function() {
        $( window ).off( "resize.Viewport" );
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
  /*
  $scope.zamanInput = [
      {
      name:"Pazartesi"},
      {name:"Salı"},
      {name:"Çarşamba"},
      {name:"Perşembe"},
      {name:"Cuma"},
      {name:"Cumartesi"},
      {name:"Pazar"}
  ];*/
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
      {name:"00:00 - 01:00"},     
       
  ];
   $scope.genderOutput=[];
   $scope.hizmetOutput=[];
   //$scope.zamanOutput =[];
   //$scope.zamanTotal = [];
   //$scope.saatOutput = [];
   $scope.total=[
      
   ];
   $scope.uniqID=uuid;
   //$cacheFactory("hizmet").removeAll();
  
$scope.diger=function(){ $scope.diger = true; }
 
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
$scope.fiyatlandirma=[];
$scope.fiyatlandirmaKaydet=function(event)
{
    let el = $(event.target).parents("tbody").children(".dataTr");
    for (let index = 0; index < el.length; index++) {
        if (el.eq(index).find("input").val()) {
            $scope.fiyatlandirma.push({fiyat : el.eq(index).find("input").val(), hizmet:el.eq(index).find("td:first").html().toString().trim() })
         }    
    }
   
    console.error($scope.fiyatlandirma);
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
            if(item.id==uniqID){ $scope.total.splice(index,1);alert()}
        })
        //$scope.total.remove()
    }
    console.log($scope.total);
}

 $scope.formIsValid = {form1 : true  , form2 : true  , form3 : true  };
$scope.tamamla=function()
{  
   let ilveilce = angular.element(".form-doldur").scope();
   if(angular.isUndefined(ilveilce.il) || angular.isUndefined(ilveilce.ilce) || !$scope.tamAdres)
   {
     $("#headingOne").css({"border":'1px solid red'});
     $("#collapseOne .card-body").addClass("borderRed");
     $("#headingTwo").css({"border-top":'1px solid red'});
      if(angular.isUndefined(ilveilce.il)) $("input[name='ilDesktop']").addClass("borderRedAll");
      else $("input[name='ilDesktop']").removeClass("borderRedAll")
      if(angular.isUndefined(ilveilce.ilce)) $("input[name='ilceDesktop']").addClass("borderRedAll");
      else $("input[name='ilceDesktop']").removeClass("borderRedAll");
      if(angular.isUndefined($scope.tamAdres)) $("#tamAdres").addClass("borderRedAll")
      else $("#tamAdres").removeClass("borderRedAll")
      $scope.formIsValid.form1 = false;
    }
    else
    {
        $("#headingOne").css({"border":'none'});
        $("#collapseOne .card-body").removeClass("borderRed");
        $("#headingTwo").css({"border-top":'none'});
        $scope.formIsValid.form1 = true;

    }
     if($scope.genderOutput.length == 0 || angular.isUndefined($scope.isletmeAdi) || angular.isUndefined($scope.kapasite) 
    || angular.isUndefined($scope.kapasiteDiger) || angular.isUndefined($scope.telefon))
    {
      $("#headingTwo").css({"border":'1px solid red'});
      $("#collapseTwo .card-body").addClass("borderRed");
      $("#headingThree").css({"border-top":'1px solid red'});
       if($scope.genderOutput.length == 0) $("#collapseTwo .multiSelect  button:not('.clearButton'):not('.reset') , .checkboxLayer ").addClass("borderRedAll");
       else $("#collapseTwo .multiSelect  button , .checkboxLayer ").removeClass("borderRedAll")
       if(angular.isUndefined($scope.isletmeAdi)) $("#isletmeAdi").addClass("borderRedAll");
       else $("#isletmeAdi").removeClass("borderRedAll");
       if(angular.isUndefined($scope.kapasite)) $("#kapasite").addClass("borderRedAll")
       else $("#kapasite").removeClass("borderRedAll")
       if(angular.isUndefined($scope.kapasiteDiger)) $("#kapasiteDiger").addClass("borderRedAll")
       else $("#kapasiteDiger").removeClass("borderRedAll")
       if(angular.isUndefined($scope.telefon)) $("#telefon").addClass("borderRedAll")
       else $("#telefon").removeClass("borderRedAll")
       $scope.formIsValid.form2 = false;

     }
     else
     {
         $("#headingTwo").css({"border":'none'});
         $("#collapseTwo .card-body").removeClass("borderRed");
         $("#headingThree").css({"border-top":'none'});
         $scope.formIsValid.form2 = true;
     }
     if($scope.hizmetOutput.length == 0 )
     {
       $("#headingThree").css({"border":'1px solid red'});
       $("#collapseThree .card-body").addClass("borderRed");
       $("#headingFour").css({"border-top":'1px solid red'});
         $("#collapseThree .multiSelect  button:not('.clearButton'):not('.reset') , .checkboxLayer ").addClass("borderRedAll");
        $scope.formIsValid.form3 = false;

      }
      else
      {
          $("#headingThree").css({"border":'none'});
          $("#collapseThree .card-body").removeClass("borderRed");
          $("#headingFour").css({"border-top":'none'});
          $("#collapseThree .multiSelect  button , .checkboxLayer ").removeClass("borderRedAll")

          $scope.formIsValid.form3 = true;

      }
      if($scope.total.length == 0 )
      {
        $("#headingFour").css({"border":'1px solid red'});
        $("#collapseFour .card-body").addClass("borderRed");
        $("#headingFive").css({"border-top":'1px solid red'});
         $("#collapseFour table ").addClass("borderRedAll");
         $scope.formIsValid.form4 = false;
 
       }
       else
       {
           $("#headingFour").css({"border":'none'});
           $("#collapseFour .card-body").removeClass("borderRed");
           $("#headingFive").css({"border-top":'none'});
           $("#collapseFour table ").removeClass("borderRedAll")
           $scope.formIsValid.form4 = true;
 
       }
       if($scope.fiyatlandirma.length == 0 )
       {
         $("#headingFive").css({"border":'1px solid red'});
         $("#collapseFive .card-body").addClass("borderRedAll");
//         $("#headingFive").css({"border-top":'1px solid red'});
          $("#collapseFive table ").addClass("borderRedAll");
          $scope.formIsValid.form4 = false;
  
        }
        else
        {
            $("#headingFive").css({"border":'none'});
            $("#collapseFive .card-body").removeClass("borderRed");
            //$("#headingFive").css({"border-top":'none'});
            $("#collapseFive table ").removeClass("borderRedAll")
            $scope.formIsValid.form4 = true;
  
        }
} 
$timeout(function() {
    cfpLoadingBar.complete();
}, 2000);
});