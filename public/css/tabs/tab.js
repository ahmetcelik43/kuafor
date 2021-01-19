
   


//////////////////profil sayfası
/*
var tab =document.getElementsByClassName("tabs2");
console.log(tab.length)
// let tabHeader = document.getElementsByClassName("tab-header2");
//let tabIndicator = document.getElementsByClassName("tab-indicator2");
//let tabBody = document.getElementsByClassName("tab-body2");
// let tabsPane = tabHeader.getElementsByTagName("div");
for (let index = 0; index < tab.length; index++) {
         let tabsindex = tabs.eq(index);
         let tabHeader_ = tabsindex.children().find(".tab-header2");
         let tabIndicator_ =  tabsindex.children().find(".tab-indicator2"); 
         let tabBody_ =   tabsindex.children().find(".tab-body2");   
         let tabsPane_ =    tabHeader_.children().find("div");
         console.log(tabsPane)
       for (let i = 0; i < tabsPane_.length; i++) {
         
        tabsPane_.eq(i).click(function(){
          console.log(123)
          tabHeader_.children().find(".active").removeClass("active");
         // tabHeader.getElementsByClassName("active")[0].classList.remove("active");
         tabsPane_.eq(i).children().find(".Header").addClass("active")

         tabBody_.children().find(".active").removeClass("active");


         tabsPane_.eq(i).children().find(".body").addClass("active")
         tabIndicator_.css("left", 'calc(calc(100% / 5) * 1)');
        });
         
       }
}*/