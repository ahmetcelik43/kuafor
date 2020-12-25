var app = angular
    .module('module', [ 'angucomplete-alt'])
    .config(function ($locationProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    });
app.controller('main', function ($scope,$http) {

    $scope.originalData = []
    $scope.iller=[]
    $scope.ilceler = []
    $scope.secilenilMobil=''
    $scope.secilenilDekstop = ''

    //$scope.appurl = "http://localhost:8000/"
     $scope.sehirMobilInit = function ()
     {
        $http.get("http://localhost:8000/ilveilce.json").then(function (response) {
       
        response.data.forEach(function (item, index) {
            //if (!data.includes(item.il)) {
                //console.log(item.il)
                iller.push(item.il)
            //}

        })
    });
     }
   
    $scope.secilMobil = function (il) {
        if (!angular.isUndefined(il)) {
            $scope.secilenilMobil = il.originalObject;
        }
    }
    $scope.mobilIlFocusOut = function () {

        return

    }
});
/*
var originalData = []
var data = []
var ilceler = []
//var result = []
var selectedItem ;
var appurl="http://localhost:8000/"
async function getData()
{
  await fetch(appurl + 'ilveilce.json')
 .then(response => response.json())
 .then(function(res){
   //data = res
   res.forEach(function(item , index){
     if(!data.includes(item.il))
     {
     //console.log(item.il)
     data.push(item.il)
     }

   })
   originalData = res
 })
}
getData()
*/
/*
document.getElementById("myInput2").addEventListener('focusout', function()
{
  //alert(selectedItem)
  var ilceler3 = []
  originalData.forEach(function(item , index){
    //console.log(item.il) 

    if(item.il.toUpperCase()==selectedItem){
      ilceler3.push(item.ilce)
    }
  })

  autocompleteIlce(document.getElementById('ilce2'), ilceler3);

})

document.getElementById("ilce").addEventListener('focus', function()
{
  //alert(selectedItem)

  var ilceler2 = []
  originalData.forEach(function(item , index){
    //console.log(item.il)

    if(item.il.toLowerCase()==selectedItem.toLowerCase()){
      ilceler2.push(item.ilce)
    }
  })
//alert(ilceler[0])
  autocompleteIlce(document.getElementById('ilce'), ilceler2);

})
//autocomplete(document.getElementById("myInput2"), data);

  //console.log(ilceler)
  //console.log(originalData)


//  autocomplete(document.getElementById("ilce"), ilceler);


function sidebarClose()
{
  document.getElementById('mySidenav').style.width = '0';
}

function sidebarOpen()
{
  document.getElementById('mySidenav').style.width = '100%';
}


document.getElementsByClassName('ara1')[0].addEventListener('submit', function (e)
{
  e.preventDefault();
  //$('.ara1').fadeOut();
  //$('.ara2').fadeIn();
  ileri()

})

function ileri()
{
  var ara1 = document.getElementsByClassName('ara1')[0]
  var ara2 = document.getElementsByClassName('ara2')[0]
  ara1.classList.add('animate__backOutRight')

  setTimeout(function(){
    ara1.style.display = 'none'
    ara2.style.display = 'block'
    ara2.classList.remove('animate__backOutLeft')
    ara2.classList.add('animate__backInLeft')
  }, 500);
}
function  geri() {
//  e.preventDefault();
var ara1 = document.getElementsByClassName('ara1')[0]
var ara2 = document.getElementsByClassName('ara2')[0]
ara2.classList.remove('animate__backInLeft')
ara2.classList.add('animate__backOutLeft')
setTimeout(function(){
  //ara1.classList.remove('animate__backOutRight')
  ara1.classList.remove('animate__backOutRight')
  ara1.style.display = 'block'
  ara2.style.display = 'none'
  //ara1.classList.add('animate__backInRight')
}, 500);
}
function  ara(e) {
  e.preventDefault();
  alert("tamamlandı")
}
function iletisimGoster()
{
  $("html, body").animate({ scrollTop: 800 }, "slow");
}
function gosterTop()
{
  $("html, body").animate({ scrollTop: 0 }, "slow");
}


function aramaGoster()
{
  $("html, body").animate({ scrollTop: 0 }, "slow");
}

window.onscroll = function() {myFunction()};

var navbar = document.getElementsByClassName("mynavbar")[0];
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
function loginModalOpen()
{
  $('.loginModal').modal('show')
}
function girisRedirect()
{
  //alert($('div[role="tabs"]').eq(1))

kayitTabYonlendir()


}
function girisTabYonlendir()
{
  $('#login').css('display','block')
  $('#register').css('display','none')
  var el = $('div[role="tabs"]').children()
  el.eq(1).removeClass('addui-Tabs-active')

  el.eq(0).addClass('addui-Tabs-active')
}
function kayitTabYonlendir()
{

    $('#login').css('display','none')
    $('#register').css('display','block')
    var el = $('div[role="tabs"]').children()
    el.eq(0).removeClass('addui-Tabs-active')

    el.eq(1).addClass('addui-Tabs-active')

}

$('#girisForm').submit(function (e)
{

e.preventDefault()
var array=[{
elID:'email',
name:'email',
required : true,
email :true,

},
{
  elID:'sifre',
  name:$('#sifreLabel').html(),
  required : true,

}]

var result = validation('girisForm',array,lang)
//alert(result)
})
//import React from 'react';
//import ReactDOM from 'react-dom';
*/
