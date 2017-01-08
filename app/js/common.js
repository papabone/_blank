jQuery(document).ready(function() {
	
  /*//header во весь экран
	jQuery(".header").css("min-height",jQuery(document).height());

  //кнопка sandwiich
	jQuery(".nav_toggle").click(function() {
		jQuery("#sandwich").toggleClass("active");
	});
	
	jQuery(".nav_mnu ul a").click(function() {
		jQuery(".nav_mnu").fadeOut(600);
		jQuery("#sandwich").toggleClass("active");
	});

	jQuery(".nav_toggle").click(function() {
		if (jQuery(".nav_mnu").is(":visible")) {
			jQuery(".nav_mnu").fadeOut(600);
		} else {
			jQuery(".nav_mnu").fadeIn(600);
		};
	});

  //initialize SWIPPER touch-slider
  var swiper01 = new Swiper('.swiper-container', {
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
  //Проверка кода на упаковке
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

});












					