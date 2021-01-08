


    main.controller('profil' ,function($scope,cfpLoadingBar,Data,$timeout,authFactory)
    {
        cfpLoadingBar.start();
        new ClipboardJS('#copy');

         function getProfileUrl()
          {
            Data.post('/getProfileUrl',{
              ad:authFactory.getUser().ad
          }).then(function(response){
            $scope.profilUrl =
            "http://localhost:8000/profilgoster/"+encodeURIComponent(response.data.link)+"/"+encodeURIComponent(authFactory.getUser().ad);

          }).catch(function(err){
            toastr.error("Başarısız")

          });
          }
      getProfileUrl();
        $scope.linkUret = function()
        {
            cfpLoadingBar.start();
            Data.post('/profilUrlUret',{
              email:authFactory.getUser().email
          }).then(function(response){
            toastr.success("Başarılı");
            $scope.profilUrl =
            "http://localhost:8000/profilgoster/"+encodeURIComponent(response.data.link)+"/"+encodeURIComponent(authFactory.getUser().ad);
          }).catch(function(err){
            toastr.error("Başarısız")

          });
          
            $timeout(function() {
                cfpLoadingBar.complete();
            }, 2000);
        }
        $scope.isAddedFile = false;
        $scope.isAnimateButton = false;
        $scope.$on("$destroy",function() {
            $( window ).off( "resize.Viewport" );
         });    
    
          $scope.yukle = function()
          {
              alert("ok");
          }
          $scope.dropzoneConfig = {
            'options': { // passed into the Dropzone constructor
              'url': 'upload.php',
              'autoDiscover': false,
              'autoProcessQueue':false,
              'dictDefaultMessage':"Buraya Sürekle Veya Tıkla",
              'addRemoveLinks':true             
            },
            'eventHandlers': {
              'sending': function (file, xhr, formData) {
                  console.log(123)
              },
             'success': function (file, response) {
              }
            }
          };
          $scope.$watch("isAddedFile",function(value){
              console.log(value)
            value ? $scope.isAnimateButton = true : $scope.isAnimateButton =false; 
          })
    });