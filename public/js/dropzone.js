angular.module('dropzone', [])
.directive('dropzone', function () {
    return function (scope, element, attrs) {
      var config, dropzone;
  
      //config = scope[attrs.dropzone];
     
        config={
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
     
      // create a Dropzone for the element with the given options
      dropzone = new Dropzone(element[0], config.options);
      // bind the given event handlers
      angular.forEach(config.eventHandlers, function (handler, event) {
        dropzone.on(event, handler);
      });

      scope.$watch("isProfilYukle",function(value)
       {
         return value ? dropzone.processQueue(): '';
       })
    
        
      dropzone.on('addedfile', function(file) {
        scope.$apply(function(){
          if(attrs.id=="profile-dropzone")
          scope.isAddedFile = true;
          else scope.isAddedFileIsletme=true;
        });

      });
      
      dropzone.on('removedfile', function(file) {
      scope.$apply(function(){
        if(attrs.id=="profile-dropzone")
        scope.isAddedFile = false;
        else scope.isAddedFileIsletme=false;   
         });
    });
    };
  });
  
  //var app = angular.module('app', ['dropzone']);

  
 