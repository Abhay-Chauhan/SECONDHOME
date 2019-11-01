(function ($) {
  "use strict";

  var review = $('.review_part_text');
  if (review.length) {
    review.owlCarousel({
      items: 2,
      loop: true,
      dots: true,
      autoplay: true,
      margin: 40,
      autoplayHoverPause: true,
      autoplayTimeout:5000,
      nav: false,
      responsive: {
        0:{
          items: 1
        },
        480:{
          items: 1
        },
        769:{
          items: 2
        }
    }
    });
  }
  $('.popup-youtube, .popup-vimeo').magnificPopup({
    // disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
});
  // menu fixed js code
  $(window).scroll(function () {
    var window_top = $(window).scrollTop() + 1;
    if (window_top > 50) {
      $('.main_menu').addClass('menu_fixed animated fadeInDown');
    } else {
      $('.main_menu').removeClass('menu_fixed animated fadeInDown');
    }
  });
  if (document.getElementById('default-select')) {
		$('select').niceSelect();
	}

  // page-scroll
  $('.page-scroll').bind('click', function(event) {
    var $anchor = $(this);
    var headerH = '80';
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
 });

}(jQuery));




                                        $(document).ready(function(){
                                            $('#home').tooltip('show')
                                            $('#home').tooltip('hide')
                                        });
                                   
                        
                                        $(document).ready(function(){
                                            $('#feed').tooltip('show')
                                            $('#feed').tooltip('hide')
                                        });
                                   
                                        $(document).ready(function(){
                                            $('#conc').tooltip('show')
                                            $('#conc').tooltip('hide')
                                        });
                                    
                                        $(document).ready(function(){
                                            $('#servi').tooltip('show')
                                            $('#servi').tooltip('hide')
                                        });
 function checkForm() {

    var email = document.getElementById('email');
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(email.value)) {
    alert('Please provide a valid email address');
    email.focus;
    return false;
    var name = document.getElementById('name');
    var filter = /^([a-zA-Z0-9_\.\-])$/;

    if (!filter.test(name.value)) {
    alert('Please provide a valid name');
    name.focus;
    return false;
 }    

 (function() {
  'use strict';
  window.addEventListener('load', function() {
    // Get the forms we want to add validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();                               