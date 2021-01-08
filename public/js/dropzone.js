angular.module('dropzone', []).directive('dropzone', function () {
    return function (scope, element, attrs) {
      var config, dropzone;
  
      config = scope[attrs.dropzone];
  
      // create a Dropzone for the element with the given options
      dropzone = new Dropzone(element[0], config.options);
  
      // bind the given event handlers
      angular.forEach(config.eventHandlers, function (handler, event) {
        dropzone.on(event, handler);
      });
      dropzone.on('addedfile', function(file) {
        scope.$apply(function(){
           angular.element("#profil").scope().isAddedFile = true;
        });
      });
      dropzone.on('removedfile', function(file) {
      scope.$apply(function(){
         angular.element("#profil").scope().isAddedFile = false;
      });
    });
    };
  });
  
  //var app = angular.module('app', ['dropzone']);

  
 