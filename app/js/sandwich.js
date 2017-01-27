var sandwich = {

  toggle : function(){
    if (jQuery(".pop-menu").is(":visible")) {
      jQuery(".sandwich").toggleClass("active");
      jQuery(".pop-menu").fadeOut(600);
      document.body.style.overflowY = "scroll";
    } else {
      jQuery(".sandwich").toggleClass("active");
      jQuery(".pop-menu").fadeIn(600);
      document.body.style.overflowY = "hidden";
    };
  },

  init: function(){
    var popMenu = document.createElement('ul');
    popMenu.className = 'pop-menu';
    popMenu.style.display = 'none';
    popMenu.innerHTML = document.querySelector('.menu>ul').innerHTML;
    document.body.appendChild(popMenu);
    document.querySelector('.nav-toggle').addEventListener( 'click', this.toggle);
    popMenu.addEventListener( 'click', this.toggle);
  }

};

