window.onload = function() {

 	/**** navBar ****/

/****Menu navBar Scroll Control****/
var menuItems = document.getElementsByClassName("blogLink");
var flipBox = document.getElementsByClassName("flip-box-inner"); 
var burgerCont = document.getElementById("mobileBurgerContainer");
var burger = document.getElementById("burgerMobile");
var mobileMenuContainer = document.getElementById("mobileMenuContainer");
var logo = document.getElementById("imagenMobileLogo");
window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
   /* console.log(scroll);*/
    var deviceWidth = screen.width;
    
 
    if(deviceWidth > 1600){
      if (scroll > 0 && scroll< 970){
          for(let i=0; i < menuItems.length; i++){
              menuItems[i].classList.remove("activeNavBar");
              menuItems[0].classList.add("activeNavBar");
            }
        }else if(scroll >= 970 && scroll < 1920) {
          for(let i=0; i < menuItems.length; i++){
            menuItems[i].classList.remove("activeNavBar");
            menuItems[1].classList.add("activeNavBar");
          }
          
          setTimeout(function(){ flipBox[0].style.transform = "rotateX(180deg)";}, 100);
           
          setTimeout(function(){ flipBox[1].style.transform = "rotateX(180deg)";}, 250);
          setTimeout(function(){ flipBox[2].style.transform = "rotateX(180deg)";}, 400);
   
        }else if(scroll >=1920 && scroll < 3965){
          for(let i=0; i < menuItems.length; i++){
            menuItems[i].classList.remove("activeNavBar");
            menuItems[2].classList.add("activeNavBar");
          }
        }else if(scroll >= 3965 && scroll < 4981){
          for(let i=0; i < menuItems.length; i++){
            menuItems[i].classList.remove("activeNavBar");
            menuItems[3].classList.add("activeNavBar");
          }
      }else {
        for(let i=0; i < menuItems.length; i++){
            menuItems[i].classList.remove("activeNavBar");
            menuItems[4].classList.add("activeNavBar");
          }
      }
    }else if(deviceWidth <= 1600 && deviceWidth > 1440){
      if (scroll > 0 && scroll< 780){
          for(let i=0; i < menuItems.length; i++){
              menuItems[i].classList.remove("activeNavBar");
              menuItems[0].classList.add("activeNavBar");
            }
        }else if(scroll >= 780 && scroll < 1600) {
          for(let i=0; i < menuItems.length; i++){
            menuItems[i].classList.remove("activeNavBar");
            menuItems[1].classList.add("activeNavBar");
          }
          
          setTimeout(function(){ flipBox[0].style.transform = "rotateX(180deg)";}, 100);
           
          setTimeout(function(){ flipBox[1].style.transform = "rotateX(180deg)";}, 250);
          setTimeout(function(){ flipBox[2].style.transform = "rotateX(180deg)";}, 400);
   
        }else if(scroll >=1600 && scroll < 3646){
          for(let i=0; i < menuItems.length; i++){
            menuItems[i].classList.remove("activeNavBar");
            menuItems[2].classList.add("activeNavBar");
          }
        }else if(scroll >= 3646 && scroll < 4662){
          for(let i=0; i < menuItems.length; i++){
            menuItems[i].classList.remove("activeNavBar");
            menuItems[3].classList.add("activeNavBar");
          }
      }else {
        for(let i=0; i < menuItems.length; i++){
            menuItems[i].classList.remove("activeNavBar");
            menuItems[4].classList.add("activeNavBar");
          }
      }
    }else if(deviceWidth <= 1440 && deviceWidth > 1360){/****For devices max-width 1360***/
        if (scroll > 0 && scroll< 715){
          for(let i=0; i < menuItems.length; i++){
              menuItems[i].classList.remove("activeNavBar");
              menuItems[0].classList.add("activeNavBar");
            }
        }else if(scroll >= 715 && scroll < 1535) {
          for(let i=0; i < menuItems.length; i++){
            menuItems[i].classList.remove("activeNavBar");
            menuItems[1].classList.add("activeNavBar");
          }
          
          setTimeout(function(){ flipBox[0].style.transform = "rotateX(180deg)";}, 100);           
          setTimeout(function(){ flipBox[1].style.transform = "rotateX(180deg)";}, 250);
          setTimeout(function(){ flipBox[2].style.transform = "rotateX(180deg)";}, 400);
   
        }else if(scroll >=1535 && scroll < 3581){
          for(let i=0; i < menuItems.length; i++){
            menuItems[i].classList.remove("activeNavBar");
            menuItems[2].classList.add("activeNavBar");
          }
        }else if(scroll >= 3581 && scroll < 4597){
          for(let i=0; i < menuItems.length; i++){
            menuItems[i].classList.remove("activeNavBar");
            menuItems[3].classList.add("activeNavBar");
          }
        }else {
          for(let i=0; i < menuItems.length; i++){
              menuItems[i].classList.remove("activeNavBar");
              menuItems[4].classList.add("activeNavBar");
          }
      }

    }else if(deviceWidth <= 1360 && deviceWidth > 1152){/****For devices max-width 1360***/
        if (scroll > 0 && scroll< 786){
          for(let i=0; i < menuItems.length; i++){
              menuItems[i].classList.remove("activeNavBar");
              menuItems[0].classList.add("activeNavBar");
            }
        }else if(scroll >= 786 && scroll < 1620) {
          for(let i=0; i < menuItems.length; i++){
            menuItems[i].classList.remove("activeNavBar");
            menuItems[1].classList.add("activeNavBar");
          }
          
          setTimeout(function(){ flipBox[0].style.transform = "rotateX(180deg)";}, 100);           
          setTimeout(function(){ flipBox[1].style.transform = "rotateX(180deg)";}, 250);
          setTimeout(function(){ flipBox[2].style.transform = "rotateX(180deg)";}, 400);
   
        }else if(scroll >=1620 && scroll < 3551){
          for(let i=0; i < menuItems.length; i++){
            menuItems[i].classList.remove("activeNavBar");
            menuItems[2].classList.add("activeNavBar");
          }
        }else if(scroll >= 3551 && scroll < 4494){
          for(let i=0; i < menuItems.length; i++){
            menuItems[i].classList.remove("activeNavBar");
            menuItems[3].classList.add("activeNavBar");
          }
        }else {
          for(let i=0; i < menuItems.length; i++){
              menuItems[i].classList.remove("activeNavBar");
              menuItems[4].classList.add("activeNavBar");
          }
      }

    }else if (deviceWidth <= 1152 && deviceWidth > 1024){/*Menores a 1024px*/
      if (scroll > 0 && scroll< 763){
          for(let i=0; i < menuItems.length; i++){
              menuItems[i].classList.remove("activeNavBar");
              menuItems[0].classList.add("activeNavBar");
            }
      }else if (scroll >= 763 && scroll <1603){
          for(let i=0; i < menuItems.length; i++){
            menuItems[i].classList.remove("activeNavBar");
            menuItems[1].classList.add("activeNavBar");
          }
          
          setTimeout(function(){ flipBox[0].style.transform = "rotateX(180deg)";}, 100);
           
          setTimeout(function(){ flipBox[1].style.transform = "rotateX(180deg)";}, 250);
          setTimeout(function(){ flipBox[2].style.transform = "rotateX(180deg)";}, 400);
      }else if(scroll >= 1603 && scroll< 3528){
          for(let i=0; i < menuItems.length; i++){
            menuItems[i].classList.remove("activeNavBar");
            menuItems[2].classList.add("activeNavBar");
          }
      }else if(scroll >= 3528 && scroll< 4408){
          for(let i=0; i < menuItems.length; i++){
            menuItems[i].classList.remove("activeNavBar");
            menuItems[3].classList.add("activeNavBar");
          }
      }else if (scroll >=4408){
          for(let i=0; i < menuItems.length; i++){
              menuItems[i].classList.remove("activeNavBar");
              menuItems[4].classList.add("activeNavBar");
          }
      }
    }else if (deviceWidth <= 1024 && deviceWidth > 800){/*Menores a 1024px*/
      if (scroll > 0 && scroll< 700){
          for(let i=0; i < menuItems.length; i++){
              menuItems[i].classList.remove("activeNavBar");
              menuItems[0].classList.add("activeNavBar");
            }
      }else if (scroll >= 700 && scroll <1440){
          for(let i=0; i < menuItems.length; i++){
            menuItems[i].classList.remove("activeNavBar");
            menuItems[1].classList.add("activeNavBar");
          }
          
          setTimeout(function(){ flipBox[0].style.transform = "rotateX(180deg)";}, 100);
           
          setTimeout(function(){ flipBox[1].style.transform = "rotateX(180deg)";}, 250);
          setTimeout(function(){ flipBox[2].style.transform = "rotateX(180deg)";}, 400);
      }else if(scroll >= 1440 && scroll< 2940){
          for(let i=0; i < menuItems.length; i++){
            menuItems[i].classList.remove("activeNavBar");
            menuItems[2].classList.add("activeNavBar");
          }
      }else if(scroll >= 2940 && scroll< 3790){
          for(let i=0; i < menuItems.length; i++){
            menuItems[i].classList.remove("activeNavBar");
            menuItems[3].classList.add("activeNavBar");
          }
      }else if (scroll >=3790){
          for(let i=0; i < menuItems.length; i++){
              menuItems[i].classList.remove("activeNavBar");
              menuItems[4].classList.add("activeNavBar");
          }
      }
    }else if(deviceWidth <=800){
      if (scroll > 0 && scroll< 604){
          for(let i=0; i < menuItems.length; i++){
              menuItems[i].classList.remove("activeNavBar");
              menuItems[0].classList.add("activeNavBar");
            }
      }else if (scroll >= 604 && scroll <1255){
          for(let i=0; i < menuItems.length; i++){
            menuItems[i].classList.remove("activeNavBar");
            menuItems[1].classList.add("activeNavBar");
          }
          
          setTimeout(function(){ flipBox[0].style.transform = "rotateX(180deg)";}, 100);
           
          setTimeout(function(){ flipBox[1].style.transform = "rotateX(180deg)";}, 250);
          setTimeout(function(){ flipBox[2].style.transform = "rotateX(180deg)";}, 400);
      }else if(scroll >= 1255 && scroll< 2645){
          for(let i=0; i < menuItems.length; i++){
            menuItems[i].classList.remove("activeNavBar");
            menuItems[2].classList.add("activeNavBar");
          }
      }else if(scroll >= 2645 && scroll< 3301){
          for(let i=0; i < menuItems.length; i++){
            menuItems[i].classList.remove("activeNavBar");
            menuItems[3].classList.add("activeNavBar");
          }
      }else if (scroll >=3301){
          for(let i=0; i < menuItems.length; i++){
              menuItems[i].classList.remove("activeNavBar");
              menuItems[4].classList.add("activeNavBar");
          }
      }

    }


    
    if(deviceWidth <=768 && deviceWidth > 540){
       if (scroll > 0 && scroll< 968){
          burger.style.color = "white";
          logo.src = "assets/rsc/img/almaVenturesFooter.png";
          mobileMenuContainer.style.backgroundColor ="";
          mobileMenuContainer.style.height = "200px";
          mobileBurgerContainer.style.paddingTop = "60px";
       }else if(scroll >= 968) {
          burger.style.color = "black";
          logo.src= "assets/rsc/img/logo.png";
          mobileMenuContainer.style.backgroundColor ="rgba(255,255,255,0.8)";
          mobileMenuContainer.style.height = "120px";
          mobileBurgerContainer.style.paddingTop = "20px";
       }

    }else if (deviceWidth <=540 && deviceWidth > 478){
      if (scroll > 0 && scroll< 867){
          burger.style.color = "white";
           logo.src = "assets/rsc/img/almaVenturesFooter.png";
          mobileMenuContainer.style.backgroundColor ="";
          mobileMenuContainer.style.height = "120px";
          mobileBurgerContainer.style.paddingTop = "34px";
       }else if(scroll >= 867) {
          burger.style.color = "black";
          logo.src = "assets/rsc/img/logo.png";
          mobileMenuContainer.style.backgroundColor ="rgba(255,255,255,0.8)";
          mobileMenuContainer.style.height = "78px";
          mobileBurgerContainer.style.paddingTop = "18px";

       }
    }else if (deviceWidth <=478){
      if (scroll > 0 && scroll< 481){
          burger.style.color = "white";
          logo.src = "assets/rsc/img/almaVenturesFooter.png";
          mobileMenuContainer.style.backgroundColor ="";
          mobileMenuContainer.style.height = "120px";
          mobileBurgerContainer.style.paddingTop = "34px";
       }else if(scroll >= 481) {
          burger.style.color = "black";
          logo.src = "assets/rsc/img/logo.png";
          mobileMenuContainer.style.backgroundColor ="rgba(255,255,255,0.8)";
          mobileMenuContainer.style.height = "78px";
          mobileBurgerContainer.style.paddingTop = "18px";

       }
    }

    
});/****Menu navBar Scroll Control****/


//*****SWIPER****//

 	var galleryThumbs = new Swiper('.gallery-thumbs', {
      spaceBetween: 10,
      slidesPerView: 1,
      loop: true,
      freeMode: true,
      loopedSlides: 3, //looped slides should be the same
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    });
    var galleryTop = new Swiper('.gallery-top', {
      spaceBetween: 10,
      loop: true,
      loopedSlides: 3, //looped slides should be the same
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    
      thumbs: {
        swiper: galleryThumbs,
      },
    });


/***Slider Videos - Primer Carrusel***/
     var slideIndex = 1;
      showSlides(slideIndex);

      function plusSlides(n) {
      showSlides(slideIndex += n);

      }

      function currentSlide(n) {
      showSlides(slideIndex = n);
      }

      function showSlides(n) {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var videoText = document.getElementsByClassName("videoText");
      var dots = document.getElementsByClassName("dot");
      if (n > slides.length) {slideIndex = 1}    
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
        videoText[i].style.display = "none";
   
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }

      slides[slideIndex-1].style.display = "block"; 
      videoText[slideIndex-1].style.display = "block";
      dots[slideIndex-1].className += " active";
      } /***Slider Videos***/



/***Building With Alma***/
     var slideIndex = 1;
      showSlidesBuilding(slideIndex);

      function plusSlidesBuilding(n) {
      showSlidesBuilding(slideIndex += n);
      }

      function currentSlideBuilding(n) {
      showSlidesBuilding(slideIndex = n);
      }

      function showSlidesBuilding(n) {
      var i;
      var slides = document.getElementsByClassName("mySlidesBuilding");
      var contenidoInfoBuilding = document.getElementsByClassName("contenidoInfoBuilding");
      var dots = document.getElementsByClassName("demoBuilding");
      if (n > slides.length) {slideIndex = 1}    
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
        contenidoInfoBuilding[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" activeBuilding", "");
      }
      slides[slideIndex-1].style.display = "block";  
      contenidoInfoBuilding[slideIndex-1].style.display = "flex";
      dots[slideIndex-1].className += " activeBuilding";
      }  /***Building With Alma***/
      


/***NavBar***/
  window.onscroll = function() {scrollFunction()};
function scrollFunction() {

      if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
      $("#navbar").fadeIn(200);
      document.getElementById("navbar").style.top = "0";
      }else{
      document.getElementById("navbar").style.top = "-188px";
      }

  
}



/**Footer Clock**/
 var date = new Date();
    var day = date.getDay();
    var hour = date.getHours();


    if(day != 6 || day !=0){
      if(hour >= 9 && hour <19){
        document.getElementById("open").style.display ="block";
      }else{
        document.getElementById("close").style.display ="block";
      }
      
    }else{
      document.getElementById("close").style.display ="block";
    }

};/*************FIN window.onload*************/



/***Primer Carrusel***/
  var slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
  showSlides(slideIndex += n);

  }

  function currentSlide(n) {
  showSlides(slideIndex = n);
  }

  function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var videoText = document.getElementsByClassName("videoText");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
      videoText[i].style.display = "none";

    }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block"; 
  videoText[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  } /***Slider Videos***/



/***Flip Cards Innovate***/

function flip(n){

  var flipCard = document.getElementsByClassName("flip-box-inner");
  console.log(flipCard[n].style.transform);
  if(flipCard[n].style.transform == "rotateX(180deg)"){
    flipCard[n].style.transform = "rotateX(0deg)";
  }else{
    flipCard[n].style.transform = "rotateX(180deg)";
  }
  

}


/***Building With Alma***/
     var slideIndex = 1;
      showSlidesBuilding(slideIndex);

      function plusSlidesBuilding(n) {
      showSlidesBuilding(slideIndex += n);
      }

      function currentSlideBuilding(n) {
      showSlidesBuilding(slideIndex = n);
      }

      function showSlidesBuilding(n) {
      var i;
      var slides = document.getElementsByClassName("mySlidesBuilding");
      var contenidoInfoBuilding = document.getElementsByClassName("contenidoInfoBuilding");
      var dots = document.getElementsByClassName("demoBuilding");
      if (n > slides.length) {slideIndex = 1}    
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
        contenidoInfoBuilding[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" activeBuilding", "");
      }
      slides[slideIndex-1].style.display = "block";  
      contenidoInfoBuilding[slideIndex-1].style.display = "flex";
      dots[slideIndex-1].className += " activeBuilding";
      }  


    function hide() {
      var cover = document.getElementById("coverMySlide");
      var iframe = document.getElementById("iframeristal");


      cover.style.display = "none";
      iframe.style.display = "block";
     }



      /***Building With Alma***/
      

/*****************MOBILE MENU************************/
/*****************MOBILE MENU************************/

    function desplegar(){
      document.getElementById('menuMobile').style.transform = 'translate(0%, 0%)';
    }

    function cerrarMenu(){
      document.getElementById('menuMobile').style.transform = 'translate(100%, 0%)';
    }

/*****************MOBILE MENU************************/
/*****************MOBILE MENU************************/

/*****************IPAD VERSION************************/
/*****************IPAD VERSION************************/

 var deviceWidth = screen.width;
console.log(deviceWidth);

if(deviceWidth > 478){
   var slideMobileIndex = 1;
            showSlidesMobile(slideMobileIndex);

            function plusSlidesMobile(n) {
              showSlidesMobile(slideMobileIndex += n);
            }

            function showSlidesMobile(n) {
              var i;
              var one = document.getElementsByClassName("innovateMobileContainer1");
              var two =document.getElementsByClassName("innovateMobileMain"); 
              var three = document.getElementsByClassName("innovateMobileContainer2");
              if (n > one.length) {slideMobileIndex = 1}   
               if (n > two.length) {slideMobileIndex = 1} 
                if (n > three.length) {slideMobileIndex = 1} 

              if (n < 1) {slideMobileIndex = one.length}
                if (n < 1) {slideMobileIndex = two.length}
                    if (n < 1) {slideMobileIndex = three.length}

              for (i = 0; i < one.length; i++) {
                  one[i].style.display = "none";  
              }
              for (i = 0; i < two.length; i++) {
                  two[i].style.display = "none";  
              }

              for (i = 0; i < three.length; i++) {
                  three[i].style.display = "none";  
              }
           
              one[slideMobileIndex-1].style.display = "flex";  
              two[slideMobileIndex-1].style.display = "flex"; 
              three[slideMobileIndex-1].style.display = "flex"; 
              //dots[slideMobileIndex-1].className += " active";
            }

            /***Automatico***/

var slideMobileIndex2 = 0;
showSlidesMobile2();

function showSlidesMobile2() {
  var i;
  var one = document.getElementsByClassName("innovateMobileContainer1");
  var two =document.getElementsByClassName("innovateMobileMain"); 
  var three = document.getElementsByClassName("innovateMobileContainer2");
  for (i = 0; i < one.length; i++) {
    one[i].style.display = "none";
  }
  for (i = 0; i < two.length; i++) {
    two[i].style.display = "none";
  }
  for (i = 0; i < three.length; i++) {
    three[i].style.display = "none";
  }
  slideMobileIndex2++;
  if (slideMobileIndex2 > one.length) {slideMobileIndex2 = 1}
  one[slideMobileIndex2-1].style.display = "flex";
  if (slideMobileIndex2 > two.length) {slideMobileIndex2 = 1}
  two[slideMobileIndex2-1].style.display = "flex";
  if (slideMobileIndex2 > three.length) {slideMobileIndex2 = 1}
  three[slideMobileIndex2-1].style.display = "flex";
  setTimeout(showSlidesMobile2, 3000); 
}
  
}
       


/*****************IPAD VERSION************************/
/*****************IPAD VERSION************************/