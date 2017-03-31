function getCountdown(zeroPoint) {
  var now = new Date();
  // создать объект из завтрашней даты(0:00:00)
  var tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+ zeroPoint);
  var diff = tomorrow - now; // разница в миллисекундах
  var day, hrs, min, sec;
  day = Math.floor(diff / (1000*60*60*24)); 
  hrs = Math.floor((diff - (day*1000*60*60*24)) / (1000*60*60));
  min = Math.floor((diff - (day*1000*60*60*24) - (hrs*1000*60*60) ) / (1000*60));
  sec = Math.floor((diff - (day*1000*60*60*24) - (hrs*1000*60*60) - (min * 1000*60)) / (1000));
  if (day < 10) day = '0' + day;
  if (hrs < 10) hrs = '0' + hrs;
  if (min < 10) min = '0' + min;
  if (sec < 10) sec = '0' + sec;
  var countdown = {
  	'day': day,
  	'hrs': hrs,
  	'min': min,
  	'sec': sec,
  }
  return countdown;
};

function stepCountdown(id){
	var countdown =  getCountdown(1);
	var day = document.body.querySelector(id + ' .day'),
			hrs = document.body.querySelector(id + ' .hrs'),
			min = document.body.querySelector(id + ' .min'),
			sec = document.body.querySelector(id + ' .sec');
	day.innerHTML = countdown.day;
	hrs.innerHTML = countdown.hrs;
	min.innerHTML = countdown.min;
	sec.innerHTML = countdown.sec;
	//scaleAnimate(id,countdown);
};

function initCountduwn(id){
	var count = document.body.querySelector(id);
	count.classList.add('countdown');
	count.insertAdjacentHTML('afterBegin', '<div class="day-wrap wrap"><span class="day value"></span><span class="day-unit unit">Дней</span></div><div class="hrs-wrap wrap"><span class="hrs value"></span><span class="hrs-unit unit">Часов</span></div><div class="min-wrap wrap"><span class="min value"></span><span class="min-unit unit">Минут</span></div><div class="sec-wrap wrap"><span class="sec value"></span><span class="sec-unit unit">Секунд</span></div>');
	//scaleCreate(id);
	var timerId =  setInterval(function(){stepCountdown(id)},1000);
};

//hourglass-effect (эффект песочных часов)

/*function scaleCreate(id){
	var countdown = document.body.querySelector(id);
	var wrap = countdown.querySelectorAll('.wrap');
	for (var i = 0; i < wrap.length; i++) {
		var scale = document.createElement('span');
		scale.classList.add('scale');
		var value = wrap[i].querySelector('.value');
		wrap[i].insertBefore(scale,value);
	}
}

function scaleAnimate(id, countdown){
	var parent = document.body.querySelector(id);
	var dayWrap = parent.querySelector('.day-wrap');
		if(dayWrap){
			var scale = dayWrap.querySelector('.scale');
			var value = dayWrap.querySelector('.value');
			var unit = dayWrap.querySelector('.unit');
			scale.style.top = '-'+ ( (countdown.day / 30) * 100 ) +'%';
			value.style.color = '';
			unit.style.color = '';
			if ( ((countdown.day / 30) * 100) < 50) value.style.color = '#f2f2f2';
			if ( ((countdown.day / 30) * 100) < 8) unit.style.color = '#f2f2f2';
		}
		var hrsWrap = parent.querySelector('.hrs-wrap');
		if(hrsWrap){
			scale = hrsWrap.querySelector('.scale');
			value = hrsWrap.querySelector('.value');
			unit = hrsWrap.querySelector('.unit');
			scale.style.top = '-'+ ( (countdown.hrs / 24) * 100 ) +'%';
			value.style.color = '';
			unit.style.color = '';
			if ( ((countdown.hrs / 24) * 100) < 50) value.style.color = '#f2f2f2';
			if ( ((countdown.hrs / 24) * 100) < 8) unit.style.color = '#f2f2f2';
		}
		var minWrap = parent.querySelector('.min-wrap');
		if(minWrap){
			scale = minWrap.querySelector('.scale');
			value = minWrap.querySelector('.value');
			unit = minWrap.querySelector('.unit');
			scale.style.top = '-'+ ( (countdown.min / 60) * 100 ) +'%';
			value.style.color = '';
			unit.style.color = '';
			if ( ((countdown.min / 60) * 100) < 50) value.style.color = '#f2f2f2';
			if ( ((countdown.min / 60) * 100) < 8) unit.style.color = '#f2f2f2';
		}
		var secWrap = parent.querySelector('.sec-wrap');
		if(secWrap){
			scale = secWrap.querySelector('.scale');
			value = secWrap.querySelector('.value');
			unit = secWrap.querySelector('.unit');
			scale.style.top = '-'+ ( (countdown.sec / 60) * 100 ) +'%';
			value.style.color = '';
			unit.style.color = '';
			if ( ((countdown.sec / 60) * 100) < 50) value.style.color = '#f2f2f2';
			if ( ((countdown.sec / 60) * 100) < 8) unit.style.color = '#f2f2f2';
		}
}*/