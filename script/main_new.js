var b1 = $("#b1");
var b2 = $("#b2");
var b3 = $("#b3");
var b4 = $("#b4");
var b5 = $("#b5");
var b6 = $("#b6");
var b7 = $("#b7");


var b1isHide = false;
var b2isHide = true;
var b3isHide = true;
var b4isHide = true;
var b5isHide = true;
var b6isHide = true;
var b7afterForm = true;

   function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    var c = setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            clearTimeout(c)
        }
    }, 1000);

}
$(b1).show()
$('.s0').addClass('martop')
setTimeout(function(){
    $('.s0').removeClass('martop')
    $(b1).slideUp(200);
}, 5000);
$(window).scroll(function(){
    var scrollPos = $(window).scrollTop()
    
    if(scrollPos >= $('#secondB2').offset().top && b2isHide == true){
        b2isHide = false
        $(b1).hide()
        $(b2).show()
        setTimeout(function(){
            $(b2).slideUp(200)
        }, 5000)
    }
    if(scrollPos >= $('#B3').offset().top && b3isHide == true){
        b3isHide = false
        $(b1).hide()
        $(b2).hide()
        $(b3).show()
        setTimeout(function(){
            $(b3).slideUp(200)
        }, 5000)
    }
    if(scrollPos >= $('#B4').offset().top && b4isHide == true){
        b4isHide = false
         $(b1).hide()
        $(b2).hide()
        $(b3).hide()
        $(b4).show()
        setTimeout(function(){
            $(b4).slideUp(200)
        }, 5000)
    }
    if(scrollPos >= $('#B5').offset().top && b5isHide == true){
        b5isHide = false
        $(b1).hide()
        $(b2).hide()
        $(b3).hide()
        $(b4).hide()
        $(b5).show()
        setTimeout(function(){
            $(b5).slideUp(200)
        }, 5000)
    }
    if((scrollPos >= $('#B6').offset().top) && !(scrollPos <= $('#B6').offset().top) && b6isHide == true){
        b6isHide = false
        $(b1).hide()
        $(b2).hide()
        $(b3).hide()
        $(b4).hide()
        $(b5).hide()
        $(b6).show()
        var fiveMinutes = 60 * 3,
        display = document.querySelector('.timeCounter');
    startTimer(fiveMinutes, display);
       
    }
  
})






function hideBanner(anh) {
  anh.fadeOut("slow");
}
function showBanner(anh) {
  anh.fadeIn("slow");
}
var hightDevice = document.documentElement.clientHeight;
var heightBody = document.body.offsetHeight;
var whenShowB2 = heightBody;
var whenShowB3 = heightBody;
var whenShowB4 = heightBody;
var whenShowB5 = heightBody;
var whenShowB6 = heightBody;


$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();

        if(target.selector == '#form')
          form = 54;
        else 
          form = 0;

        $("html, body").animate(
          {
            scrollTop: target.offset().top - form
          },
          1000,
          function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) {
              // Checking if the target was focused
              return false;
            } else {
              $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            }
          }
        );
      }
    }
  });

function showComments() {
  if ($(".opinion-box .comments button span").hasClass("active")) {
    $(".opinion-box .comments .content").fadeOut("slow");
    $(".opinion-box .comments button span").removeClass("active");
  } else {
    $(".opinion-box .comments .content").fadeIn("slow");
    $(".opinion-box .comments button span").addClass("active");
  }
}
function showNewComments() {
  if ($(".opinion-box .comments-new button span").hasClass("active")) {
    $(".opinion-box .comments-new .content").fadeOut("slow");
    $(".opinion-box .comments-new button span").removeClass("active");
  } else {
    $(".opinion-box .comments-new .content").fadeIn("slow");
    $(".opinion-box .comments-new button span").addClass("active");
  }
}

function ExpiryTime() {
  hideBanner(b6);
  if(b7afterForm)
    showBanner(b7);
}

function counterBanner() {
  showBanner(b6);
  $(document).ready(function() {
    if (typeof countdown !== 'undefined' && $.isFunction(countdown)) {
      $(".timeCounter").countdown({
        until: "+3min",
        compact: true,
        format: "MS",
        description: "",
        onExpiry: ExpiryTime
      });
    }
  });
}

$(document).ready(function() {
$('.slickSlider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: ".slide-back",
  nextArrow: ".slide-next"
});  
 
    
        $('.button').on('click', function(event){
        if($('#name1').val() != '' && $('#phone1').val() != '' && $('#phone1').val().length >= 5 && $('#phone1').val().length <= 15){
             $("#form2").submit();
        }
        else{
            if($('#name1').val() == ''){
                $('#name1').addClass('form__input_error');
            } else {
                $('#name1').removeClass('form__input_error');
            }
            if($('#phone1').val() == '' || $('#phone1').val().length < 5 || $('#phone1').val().length > 15){
                $('#phone1').addClass('form__input_error');
                $('#phone_error').show();
            } else {
                $('#phone1').removeClass('form__input_error');
                $('#phone_error').hide();
            }
        }
       
    })
        $('.btn').on('click', function(){
        $('html, body').animate({
            scrollTop: $(".prod-bl-2").offset().top
        }, 1000);
    });

  $('.wv_phone').on('keyup keypress', function(e) {
   if (e.keyCode == 8 || e.keyCode == 46) {}
   else
     {
       var letters=' +-()1234567890';
                    return (letters.indexOf(String.fromCharCode(e.which))!=-1);
                }
           });      
});