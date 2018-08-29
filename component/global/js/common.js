//common js || need for all the pages [START] || >>>>> Always keep on overwriting the Latest file <<<<
$(document).ready(function () {
	//tabs with content [START]
	$('.tab-link').click(function() {
		$('.tab-content').removeClass('tab-current');
		var tab_con = $(this).attr("data-class");
		$(".tab-content."+tab_con).addClass('tab-current');

		if(!$(this).hasClass('tab-active'))
		{
			$(".tab-link").removeClass("tab-active");
			$(this).addClass("tab-active");
		}
	});
	//tabs with content [END]

	//YouTube video play popup [START]
	// display video player
	$('.youtube-play').on('click',function(e){
		e.preventDefault();
		// get video url
		var yt = $(this).attr('href');

		// display video or go to youtube depending on window size
		// this is an attempt to load videos on mobile devices in the youtube app
		if($(window).width() > 280) {
			// get video id
			var i = yt.substring(yt.search('=')+1,yt.length);

			// build player
			$('#YouTube-player .yt-play-box').html('<iframe src="https://www.youtube.com/embed/' + i + '?rel=0&autoplay=1&controls=0&showinfo=0" frameborder="0" allowfullscreen="true"></iframe>');

			// display player
			$('#YouTube-player').fadeIn(500);
		}
		else {
			window.location.href = yt;
		}
	}); // end of display player

	// hide video player on click
	$('#YouTube-player, .youPlayer-close').on('click',function(e){
		// hide player
		$('#YouTube-player').fadeOut(500);

		// destroy player
		$('#YouTube-player .yt-play-box').empty();
		$('#YouTube-player').find('iframe').attr('src','');
	});

	//Share button
	$('.share-links button').on('click', function(){
		$('.share-links').toggleClass('sl-open');  
	});

	//Components changing the color [START]
	$('.card-comp.black').each(function() {
		$(this).find('.custom-btn').addClass('clr-b');
	});
	$('.card-comp.white').each(function() {
		$(this).find('.custom-btn').addClass('clr-w');
	});
	//Components changing the color [END]
});

//carousel's
$(document).ready(function () {
	//carousel-grid-four
	$('.carousel-grid-4').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: false,
		fade: false,
		infinite: false,
		speed: 1000,
	  	touchThreshold: 15,
		responsive: [
		{
		breakpoint: 1080,
		settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1,
			speed: 200,
		  	centerMode: true,
		  	centerPadding: '15px',
		  	focusOnSelect: true,
		  	infinite: true,
		  	dots: false,
  			touchThreshold: 15,
			}
		},
		{
		breakpoint: 600,
		settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
		  	centerMode: true,
		  	centerPadding: '15px',
		  	focusOnSelect: true,
		  	infinite: true,
		  	dots: false,
  			touchThreshold: 15,
			speed: 200,
			}
		},
		{
		breakpoint: 320,
		settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
		  	centerMode: true,
		  	centerPadding: '15px',
		  	focusOnSelect: true,
		  	infinite: true,
		  	dots: false,
  			touchThreshold: 15,
			speed: 200,
			}
		}
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
		]
	});

	//carousel-grid-three
	$('.carousel-grid-3').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		fade: false,
		infinite: false,
		speed: 1000,
	  	touchThreshold: 15,
		responsive: [
		{
		breakpoint: 1080,
		settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1,
			speed: 150,
  			touchThreshold: 15,
			}
		},
		{
		breakpoint: 600,
		settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
		  	centerMode: true,
		  	centerPadding: '15px',
		  	focusOnSelect: true,
		  	infinite: true,
		  	dots: false,
  			touchThreshold: 15,
			}
		},
		{
		breakpoint: 330,
		settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
		  	centerMode: true,
		  	centerPadding: '15px',
		  	focusOnSelect: true,
  			touchThreshold: 15,
			}
		}
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
		]
	});

	//carousel-grid-two
	$('.carousel-grid-2').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		arrows: false,
		fade: false,
		infinite: false,
		speed: 1000,
	  	touchThreshold: 15,
		responsive: [
		{
		breakpoint: 1080,
		settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1,
			speed: 150,
  			touchThreshold: 15,
			}
		},
		{
		breakpoint: 600,
		settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
		  	centerMode: true,
		  	centerPadding: '15px',
		  	focusOnSelect: true,
		  	infinite: true,
		  	dots: false,
  			touchThreshold: 15,
			}
		},
		{
		breakpoint: 330,
		settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
		  	centerMode: true,
		  	centerPadding: '15px',
		  	focusOnSelect: true,
  			touchThreshold: 15,
			}
		}
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
		]
	});

	//carousel dots 
	$('.carousel-slider-dots').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		fade: false,
		infinite: true,
		speed: 1000,
		autoplay: false,
	  	touchThreshold: 15,
	});
});

//progress slider

$(document).ready(function () {
	var time = 4;
	var $bar,
	    $slick_progress,
	    isPause,
	    tick,
	    percentTime;

	$slick_progress = $('.carousel-slider-progress');
	$slick_progress.slick({
	    draggable: false,
	    adaptiveHeight: false,
	    dots: false,
	    arrows: false,
	    mobileFirst: true,
	    pauseOnHover: true,  
	    fade: true,
		speed: 300,
	});

	$bar = $('.slider-progress .progress');

	function startProgressbar() {
	    resetProgressbar();
	    percentTime = 0;
	    isPause = false;
	    tick = setInterval(interval, 10);
	}

	function interval() {
	    if (isPause === false) {
	        percentTime += 1 / (time + 0.1);
	        $bar.css({
	            width: percentTime + "%"
	        });
	        if (percentTime >= 100) {
	            $slick.slick('slickNext');
	            startProgressbar();
	        }
	    }
	}

	function resetProgressbar() {
	    $bar.css({
	        width: 0 + '%'
	    });
	    clearTimeout(tick);
	}

	startProgressbar();
});
//end of progress slider

// *** smooth scroll hashtag with nav active *** //
$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
    // On-page links
    if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
        location.hostname == this.hostname
    ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top - 97
            }, 1000, function() {
                // Callback after animation
                // Must change focus!
                var $target = $(target);
                $target.focus();
                if ($target.is(":focus")) { // Checking if the target was focused
                    return false;
                } else {
                    $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                    $target.focus(); // Set focus again
                };
            });
        }
    }
});
$(window).scroll(function() {
    var scrollDistance = $(window).scrollTop();
    $('.secondary-sticky-nav li a.active').removeClass('active');
    // Assign active class to nav links while scolling
    $('.scroll-section').each(function(i) {
        if ($(this).position().top - 97 <= scrollDistance) {
            $('.secondary-sticky-nav li a.active').removeClass('active');
            $('.secondary-sticky-nav li a').eq(i).addClass('active');
        }
    });
}).scroll();
// *** end of smooth scroll hashtag with nav active *** //

//All the pages Header Secondary navigation for mobile dropdown list [START]
function mobileView() {
	if ($(window).width() < 1090) {
		console.log("in");
		$('.secondary-sticky-nav-trigger, .secondary-sticky-nav li a').on('click', function(event) {
			$('body').toggleClass('secondary-sticky-nav-open');
			event.preventDefault();
		});
	}
	else {
		console.log("out");
	}
}
mobileView(); 
$(window).resize(function(){
	mobileView();
});
//All the pages Header Secondary navigation for mobile dropdown list [END]

//animate element [START] --> common for all the pages <--
var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
 var window_height = $window.height();
 var window_top_position = $window.scrollTop();
 var window_bottom_position = (window_top_position + window_height);

 $.each($animation_elements, function() {
     var $element = $(this);
     var element_height = $element.outerHeight();
     var element_top_position = $element.offset().top;
     var element_bottom_position = (element_top_position + element_height);

     //check to see if this current container is within viewport
     if ((element_bottom_position >= window_top_position) &&
         (element_top_position <= window_bottom_position)) {
         $element.addClass('in-view');
     } else {
         $element.removeClass('in-view');
     }
 });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');
//animate element [END]

//close YouTube-player when clicking the esc keyboard button
$(document).keyup(function(event){
    if(event.which=='27'){
		//video close trigger
		$('#YouTube-player').fadeOut(500);
		$('#YouTube-player').find('iframe').attr('src','');
    }
});
//YouTube video play popup  [END]

//placeholder IE [START]
function add() {
	if($(this).val() === ''){
		$(this).val($(this).attr('placeholder')).addClass('placeholder');
	}
}
function remove() {
	if($(this).val() === $(this).attr('placeholder')){
		$(this).val('').removeClass('placeholder');
	}
}
// Create a dummy element for feature detection
if (!('placeholder' in $('<input>')[0])) {
	// Select the elements that have a placeholder attribute
	$('input[placeholder], textarea[placeholder]').blur(add).focus(remove).each(add);

	// Remove the placeholder text before the form is submitted
	$('form').submit(function(){
	$(this).find('input[placeholder], textarea[placeholder]').each(remove);
});
}
//placeholder IE [END]


//file upload [START]
$(function() {
  // We can attach the `fileselect` event to all file inputs on the page
  $(document).on('change', ':file', function() {
    var input = $(this),
        numFiles = input.get(0).files ? input.get(0).files.length : 1,
        label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
    input.trigger('fileselect', [numFiles, label]);
  });

  // We can watch for our custom `fileselect` event like this
  $(document).ready( function() {
      $(':file').on('fileselect', function(event, numFiles, label) {

          var input = $(this).parents('.file-group').find(':text'),
              log = numFiles > 1 ? numFiles + ' files selected' : label;

          if( input.length ) {
              input.val(log);
          } else {
              if( log ) alert(log);
          }

      });
  });
  
});

$(function() {
	$(document).on('click', '.icon-plus', function(e)
	{
		e.preventDefault();

		var controlForm = $('.file-wrapper:first'),
		currentEntry = $(this).parents('.file-group:first'),
		newEntry = $(currentEntry.clone()).appendTo(controlForm);

		newEntry.find('input').val('');
		controlForm.find('.file-group:not(:last) .custom-btn')
		// .removeClass('icon-plus').addClass('icon-minus')
		// .removeClass('icon-plus').addClass('icon-minus') 
		.html('<span class="icon-minus"></span>');

		 $(':file').on('fileselect', function(event, numFiles, label) {

          var input = $(this).parents('.file-group').find(':text'),
              log = numFiles > 1 ? numFiles + ' files selected' : label;

          if( input.length ) {
              input.val(log);
          } else {
              if( log ) alert(log);
          }

      });

	}).on('click', '.icon-minus', function(e) {
		$(this).parents('.file-group:first').remove();
		e.preventDefault();
			return false;
	});
});
//file upload [END]

// Picture tag script IE Support [START]
// picturefill();
// Picture tag script [END]
//common js [END]
