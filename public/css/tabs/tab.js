let tabHeader = document.getElementsByClassName("tab-header")[0];
let tabIndicator = document.getElementsByClassName("tab-indicator")[0];
let tabBody = document.getElementsByClassName("tab-body")[0];

let tabsPane = tabHeader.getElementsByTagName("div");
/*
for(let i=0;i<tabsPane.length;i++)
{
    tabsPane[i].addEventListener("click",function(){
    tabHeader.getElementsByClassName("active")[0].classList.remove("active");
    tabsPane[i].classList.add("active");
    tabBody.getElementsByClassName("active")[0].classList.remove("active");
    tabBody.getElementsByTagName("div")[i].classList.add("active");
    tabIndicator.style.left = `calc(calc(100% / 2) * ${i})`;

  });
}*/

  function manualRedirectToRegister()
  {
    tabHeader.getElementsByClassName("active")[0].classList.remove("active");
    document.getElementById('registerHeaderModal').classList.add("active");
    tabBody.getElementsByClassName("active")[0].classList.remove("active");
    document.getElementById('registerModalBody').classList.add("active");
    
    tabIndicator.style.left = `calc(calc(100% / 2) * 1)`;
  }
  
  function manualRedirectToLogin()
  {
    tabHeader.getElementsByClassName("active")[0].classList.remove("active");
    document.getElementById('loginHeaderModal').classList.add("active");
    tabBody.getElementsByClassName("active")[0].classList.remove("active");
    document.getElementById('loginModalBody').classList.add("active");
    
    tabIndicator.style.left = `calc(calc(100% / 2) * 0)`;
  }
  tabsPane[1].addEventListener("click",function(){
    manualRedirectToRegister()
  
  });
  tabsPane[0].addEventListener("click",function(){
    manualRedirectToLogin()
  
  });