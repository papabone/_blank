//on-top
var onTopElement = document.querySelector('.on-top-element');
if(onTopElement){
  onTopElement.onclick = function(){
    this.classList.toggle('on-top');
  }
}

//tagVideo
var videoElem = document.querySelector('video');
// - poster:hover
if(videoElem && videoElem.hasAttribute('poster') ){
  videoElem.addEventListener('mousemove', videoHoverAdd);
  var oldPoster = videoElem.getAttribute('poster');
  videoElem.addEventListener('mouseout', videoHoverRemove);
};
function videoHoverAdd(e){
  if(videoElem.dataset.posterHover){
    videoElem.setAttribute('poster', videoElem.dataset.posterHover);
  };
};
function videoHoverRemove(e){
  videoElem.setAttribute('poster', oldPoster);
};
// - play
videoElem.addEventListener('click',videoPlay);
function videoPlay(e){
  if (this.paused) {
      this.play();
  } else {
      this.pause();
  }
};

//countdown
/*jQuery(document).ready(function() {  
  $('#countdown').countdown({
    timestamp :  new Date(2021, 0, 1)
  });
  $('#countdown2').countdown({
    timestamp :  new Date(2021, 0, 1)
  });
  $('#countdown-modal').countdown({
    timestamp :  new Date(2021, 0, 1)
  });
});*/

//Плавная прокрутка к якорю
$("body").on('click', 'a[href*=#]:not([href=#])', function(e){
  var fixed_offset = 40;
  $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
  e.preventDefault();
});
//Плавная прокрутка к верхнему краю последней формы заказа
$('.to-form').click(function(e){  
  e.preventDefault();
  $('html, body').stop().animate({scrollTop: ($('form:visible:last').offset().top)}, 1000);
});
	
/*//header во весь экран
	jQuery(".header").css("min-height",jQuery(document).height());
*/

//кнопка sandwiich
jQuery(document).ready(function() {
  sandwich.init();
});

//Проверка кода на упаковке
/*jQuery(document).ready(function() {
  $(".chek-code button").click(function () {
    var $code = $(".chek-code input "),
    $message = $(".chek-code-message");
    var $codeLenght = $(".chek-code input").val().length;
    var codeValue = $code.val();
    var reg1 = new RegExp("[^0-9]*", "g"), // создаем регулярку, чтобы она выбрала все цифры
    codeValue = codeValue.replace(reg1, ''); // берем все цифры из некой переменной
    if (codeValue.length == 15) { // Если кол-во цифр = 15
      return $message.text("Заказанный Вами продукт является подлинным, пользуйтесь с удовольствием!");
    }
    else if ($code.val() !== '' && $code.val() !== ' ' && $code.val() !== '  ') {
      return $message.text("К сожалению, данный код не найден! Вероятнее всего, вы приобрели поддельный продукт.");
    } else {
      return $message.text("Введите, пожалуйста, код.");
    }
  })

});*/



  //initialize SWIPPER touch-slider
var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 30
    });
var swiper = new Swiper('.swiper-container-phone', {
        nextButton: '.swiper-button-next-phone',
        prevButton: '.swiper-button-prev-phone',
        spaceBetween: 30
    });

 /* var swiper01 = new Swiper('.swiper-container', {
    // Optional parameters 
    grabCursor: true,
    threshold: 10,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    loop:true,
    speed: 1000
  });
  
 //form заказ звонка в Хедере и в контактах
  jQuery(".call_back").click(function() {
   jQuery("#contact-form01").addClass("active");
  });
  
    //крестик для выхода
  jQuery(".esc").click(function() {
    jQuery("#contact-form01").removeClass("active"),
    jQuery("#contact-form02").removeClass("active"),
    jQuery("#contact-form03").removeClass("active"),
    alert('Внимание! Вы отменили действие');
  });

  //escape для выхода (глобально)
  jQuery(document).keydown(function(e){
    if (e.keyCode == 27){
      jQuery("#contact-form01").removeClass("active"),
      jQuery("#contact-form02").removeClass("active"),
      jQuery("#contact-form03").removeClass("active")
    }
  });
  */












					