


    main.controller('profil' ,function($scope,cfpLoadingBar,Data,$timeout,authFactory)
    {
      cfpLoadingBar.start();
      $scope.$on("$destroy",function() {    
        $( window ).off( "resize.Viewport" );
     });
      /*
      {"il":{"il":"AFYONKARAH\u0130SAR"},"ilce":{"ilce":"BAYAT"},"tamAdres":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaa","gender":"Erkek","isletmeAdi":"kuafor","kapasite":"4","telefon":"5452059682",
      "hizmetler":[{"name":"Sa\u00e7 Bak\u0131m\u0131"},{"name":"Sakal Bak\u0131m\u0131"}],"acikSaatler":
      [{"saatler":"07:00 - 08:00","gunler":"Pazartesi"},{"saatler":"07:00 - 08:00","gunler":"Sal\u0131"},{"saatler":"08:00 - 09:00","gunler":"Sal\u0131"},{"saatler":"08:00 - 09:00","gunler":"Pazartesi"}],"fiyatlar":[{"name":"Sa\u00e7 Bak\u0131m\u0131","fiyat":"10"},{"name":"Sakal Bak\u0131m\u0131","fiyat":"20"}]}
      */

     function Cevir(text)
     {
        var trMap = {
            'çÇ':'c',
            'ğĞ':'g',
            'şŞ':'s',
            'üÜ':'u',
            'ıİ':'i',
            'öÖ':'o'
        };
        for(var key in trMap) {
            text = text.replace(new RegExp('['+key+']','g'), trMap[key]);
        }
        return  text.replace(/[^-a-zA-Z0-9\s]+/ig, '') 
                    .replace(/\s/gi, "-") 
                    .replace(/[-]+/gi, "-") 
                    .toLowerCase();
    
    }
      $scope.isProfilYukle = false;


   
      //angular.element(".ilveilce").scope().il=ilanlar.ilanBilgileri.il.il;
     //// $("input[name='ilDesktop']").val(ilanlar.ilanBilgileri.il.il);
      //$scope.model=ilanlar[0].ilanBilgileri.il.il;
      //$scope.modelIlce=ilanlar[0].ilanBilgileri.ilce.ilce;


        new ClipboardJS('#copy');

       
            Data.post('/getProfileUrl',{
              ad:authFactory.getUser().ad
          }).then(function(response){
            if(angular.isDefined(response.data.link))
            {
            $scope.profilUrl =
            "http://localhost:8000/profil-goster/"+encodeURIComponent(response.data.link)+"/"+encodeURIComponent(authFactory.getUser().ad);
            }
          }).catch(function(err){
            toastr.error("Başarısız")

          });
  
        $scope.linkUret = function()
        {

            cfpLoadingBar.start();
            Data.post('/profilUrlUret',{
              email:authFactory.getUser().email
          }).then(function(response){
            toastr.success("Başarılı");
            $scope.profilUrl =
            "http://localhost:8000/profil-goster/"+encodeURIComponent(response.data.link)+"/"+encodeURIComponent(authFactory.getUser().ad);
          }).catch(function(err){
            toastr.error("Başarısız")

          });
          
        }
        $scope.isAddedFile = false;
        $scope.isAddedFileIsletme=false;
        $scope.isAnimateButton = false;
     
          $scope.yukle = function(image)
          {
            if(image == "profile")
            {
             return $scope.isProfilYukle = true;
            }
            else{
              return $scope.isIsletmeYukle = true;

            }
          }
          $scope.dropzoneConfigProfile = {
            'options': { // passed into the Dropzone constructor
              'url': '/postImageProfile',
              "maxFilesize":6000,
              'autoDiscover': false,
              'autoProcessQueue':false,
              'dictDefaultMessage':"Buraya Sürekle Veya Tıkla",
              'addRemoveLinks':true  ,
              'mimetypes':'.png,.jpg'           
            },
            'eventHandlers': {
              'sending': function (file, xhr, formData) {
                  console.log(123)
              },
             'success': function (file, response) {
              }
            }
          };
          
          $scope.dropzoneConfigIsletme = {
            'options': { // passed into the Dropzone constructor
              'url': '/postImageIsletme',
              'autoDiscover': false,
              "maxFilesize":6000,
              'autoProcessQueue':false,
              'dictDefaultMessage':"Buraya Sürekle Veya Tıkla",
              'addRemoveLinks':true,
              "uploadMultiple":true           
            },
            'eventHandlers': {
              'sending': function (file, xhr, formData) {

              },
             'success': function (file, response) {
              }
            }
          };
          
          $scope.$watch("isAddedFile",function(value){
            value ? $scope.isAnimateButton = true : $scope.isAnimateButton =false; 
          })
          $scope.$watch("isAddedFileIsletme",function(value){
            value ? $scope.isAnimateButton2 = true : $scope.isAnimateButton =false; 
          })
          
          //let tabs = document.getElementsByClassName("tabs");
      
      /*
          tabsPane[4].addEventListener("click",function(){
            tabHeader.getElementsByClassName("active")[0].classList.remove("active");
            document.getElementById('fiyatlandirmaHeader').classList.add("active");
            tabBody.getElementsByClassName("active")[0].classList.remove("active");
            document.getElementById('fiyatlandirmaBody').classList.add("active");  
            tabIndicator.style.left = `calc(calc(100% / 5) * 4)`;
        
          });  
          */
         $timeout(function() {
          cfpLoadingBar.complete();
      }, 2000);
       

    });