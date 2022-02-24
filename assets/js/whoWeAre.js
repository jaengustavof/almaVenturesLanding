
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

/***Top Carousel***/
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("wwaCarrPicture");
  var dots = document.getElementsByClassName("dotpag");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" activedotpag", "");
  }
  slides[slideIndex-1].style.display = "flex";  
  dots[slideIndex-1].className += " activedotpag";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}


/*****Profile Cards*****/
var deviceWidth = window.innerWidth;    
//console.log(deviceWidth);    
var slidesP = document.getElementsByClassName("myDivs2");
var slidesProfile = document.getElementsByClassName("containerProfile");

  for(let i = 0; i < slidesProfile.length; i++){
            var actual = slidesProfile[i];
            $(actual).css('height', '0px');
            $(actual).find('*').hide();
            $(actual).hide();
        }

  var shown =true;
  var contSize = 0;
    $('.myDivs2').click(function(){
      /*Device Width*/
      if(deviceWidth > 1600){
        contSize = '815px';
      }else if(deviceWidth <= 1600 && deviceWidth >1536){
        contSize = '783px';
      }else if(deviceWidth <= 1536 && deviceWidth >1400){
        contSize = '732px';
      }else if(deviceWidth <= 1400 && deviceWidth > 1280){
        contSize = '678px';
      }else if(deviceWidth <= 1280 && deviceWidth > 1152){
        contSize = '626px';
      }else if(deviceWidth <= 1152 && deviceWidth > 1024){
        contSize = '567px';
      }else if(deviceWidth <= 1024 && deviceWidth > 800){
        contSize = '489px';
      }else if (deviceWidth <= 800){
        contSize = '378px';
      }
        var text = $(this).attr("id");
      
      switch(shown){

        case true:
          $('#cont'+text).show();
          $('#cont'+text).css('height', contSize);//will modify the size according to the device
          $('#cont'+text).find('*').fadeIn(700);
        shown = false;
        break;

        case false:
        for(let i = 0; i < slidesProfile.length; i++){
          var actual = slidesProfile[i];
          $(actual).css('height', '0px');
          $(actual).find('*').fadeOut(150);

        }
        shown = true;
        break;
      } 
    
  });


/*****************MOBILE MENU************************/

  var logo = document.getElementById("imagenMobileLogo");
  var burger = document.getElementById("burgerMobile");
  var menuContainer = document.getElementById("mobileMenuContainer");
  logo.src= "assets/rsc/img/logo.png";
  burger.style.color = "black";
  menuContainer.style.background ="rgba(255,255,255,0.7)";


    function desplegar(){
      document.getElementById('menuMobile').style.transform = 'translate(0%, 0%)';
    }

    function cerrarMenu(){
      document.getElementById('menuMobile').style.transform = 'translate(100%, 0%)';
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


/************* Slider Mobile *****************/

const slider = document.querySelector('.slider-container-Wwa'),
  slides = Array.from(document.querySelectorAll('.slideWwa'))

let isDragging = false,
  startPos = 0,
  currentTranslate = 0,
  prevTranslate = 0,
  animationID = 0,
  currentIndex = 0

slides.forEach((slide, index) => {
  const slideImage = slide.querySelector('.content')
  slideImage.addEventListener('dragstart', (e) => e.preventDefault())

  // Touch events
  slide.addEventListener('touchstart', touchStart(index))
  slide.addEventListener('touchend', touchEnd)
  slide.addEventListener('touchmove', touchMove)

  // Mouse events
  slide.addEventListener('mousedown', touchStart(index))
  slide.addEventListener('mouseup', touchEnd)
  slide.addEventListener('mouseleave', touchEnd)
  slide.addEventListener('mousemove', touchMove)
})



function touchStart(index) {
  return function (event) {
    currentIndex = index
    startPos = getPositionX(event)
    isDragging = true

    // https://css-tricks.com/using-requestanimationframe/
    animationID = requestAnimationFrame(animation)
    slider.classList.add('grabbing')
  }
}

function touchEnd() {
  isDragging = false
  cancelAnimationFrame(animationID)

  const movedBy = currentTranslate - prevTranslate

  if (movedBy < -100 && currentIndex < slides.length - 1) currentIndex += 1

  if (movedBy > 100 && currentIndex > 0) currentIndex -= 1

  setPositionByIndex()

  slider.classList.remove('grabbing')
}

function touchMove(event) {
  if (isDragging) {
    const currentPosition = getPositionX(event)
    currentTranslate = prevTranslate + currentPosition - startPos
  }
}

function getPositionX(event) {
  return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX
}

function animation() {
  setSliderPosition()
  if (isDragging) requestAnimationFrame(animation)
}

function setSliderPosition() {
  slider.style.transform = `translateX(${currentTranslate}px)`
}

function setPositionByIndex() {
  currentTranslate = currentIndex * -window.innerWidth
  prevTranslate = currentTranslate
  setSliderPosition()
}


/*****Responsive Imgs Our Founders******/

var foundersPic1 = document.getElementById("ourFoundersBioPic1");
var foundersPic2 = document.getElementById("ourFoundersBioPic2");

console.log(deviceWidth);
console.log(foundersPic1.src);

if (deviceWidth <= 768) {

  foundersPic1.src = 'assets/rsc/img/Sample2IpadVersion.jpg';
  foundersPic2.src = 'assets/rsc/img/Sample1IpadVersion.jpg';
}