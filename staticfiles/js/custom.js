(function($) {
    'use strict';

    // Mean Menu
	$('.mean-menu').meanmenu({
		meanScreenWidth: "991"
	});

    // Header Sticky
	$(window).on('scroll',function() {
		if ($(this).scrollTop() > 120){  
			$('.navbar-area').addClass("is-sticky");
		}
		else{
			$('.navbar-area').removeClass("is-sticky");
		}
	});

    // Language-switcher
    $(".language-option").each(function() {
        var each = $(this)
        each.find(".lang-name").html(each.find(".language-dropdown-menu a:nth-child(1)").text());
        var allOptions = $(".language-dropdown-menu").children('a');
        each.find(".language-dropdown-menu").on("click", "a", function() {
             allOptions.removeClass('selected');
             $(this).addClass('selected');
             $(this).closest(".language-option").find(".lang-name").html($(this).text());
        });
    })

    // Others Option For Responsive JS
    $(".side-nav-responsive .dot-menu").on("click", function(){
        $(".side-nav-responsive .container-max .container").toggleClass("active");
    });

    // Hero Slider
    $('.hero-slider').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: true,
        items: 1,
        autoplay: true,
        autoHeight:true,
        autoplayHoverPause: true,
    })

    // Services Slider
    $('.services-slider').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: true,
        autoplay: true,
        autoHeight:true,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items: 1
            },
            521:{
                items: 2
            },
            900:{
                items: 3
            },
            1200:{
                items: 4
            },
        }
    })

    // Case Studies Slider
    $('.case-studies-slider').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        autoplay: true,
        center: true,
        autoHeight:true,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items: 1,
                center: false,
            },
            768:{
                items: 2,
                center: false,
            },
            1000:{
                items: 2
            },
        },
        navText: [
            "<i class='ri-arrow-left-s-line'></i>",
            "<i class='ri-arrow-right-s-line'></i>"
        ]
    })

     // Case Studies Slider Two
     $('.case-studies-slider-two').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        autoplay: true,
        autoHeight:true,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items: 1,
            },
            768:{
                items: 2,
            },
            1000:{
                items: 3
            },
        },
        navText: [
            "<i class='ri-arrow-left-s-line'></i>",
            "<i class='ri-arrow-right-s-line'></i>"
        ]
    })


    // Review Slider
    $('.review-slider').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: true,
        autoplay: true,
        autoHeight:true,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items: 1
            },
            576:{
                items: 2
            },
            900:{
                items: 3
            },
        }
    })

    // Review Slider Two
    $('.review-slider-two').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        items: 1,
        dots: true,
        autoplay: true,
        autoHeight:true,
        autoplayHoverPause: true,
    })

    // Team Slider
    $('.team-slider').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: true,
        autoplay: true,
        autoHeight:true,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items: 1
            },
            576:{
                items: 2
            },
            900:{
                items: 3
            },
            1200:{
                items: 4
            },
        }
    })


    // Blog Slider
    $('.blog-slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        autoplay: true,
        autoHeight:true,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items: 1
            },
            768:{
                items: 2
            },
            1000:{
                items: 3
            },
        }
    })

    // Skill-bar JS
    $(".skill-bar").each(function () {
        $(this).find(".progress-content").animate({ width: $(this).attr("data-percentage") }, 2000);
        $(this).find(".progress-number-mark").animate({ left: $(this).attr("data-percentage") },
            {
                duration: 2000,
                step: function (now, fx) {
                    var data = Math.round(now);
                    $(this)
                        .find(".percent")
                        .html(data + "%");
                },
            }
        );
    });

    // Brand Slider
    $('.brand-slider').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items: 2
            },
            520:{
                items: 3
            },
            668:{
                items: 5
            },
            1000:{
                items: 6
            },
        }
    })

    // FAQ Accordion JS
	$('.accordion').find('.accordion-title').on('click', function(){
		// Adds Active Class
		$(this).toggleClass('active');
		// Expand or Collapse This Panel
		$(this).next().slideToggle('fast');
		// Hide The Other Panels
		$('.accordion-content').not($(this).next()).slideUp('fast');
		// Removes Active Class From Other Titles
		$('.accordion-title').not($(this)).removeClass('active');		
    });

    // Odometer JS
    $('.odometer').appear(function(e) {
        var odo = $(".odometer");
        odo.each(function() {
            var countNumber = $(this).attr("data-count");
            $(this).html(countNumber);
        });
    });

    // Popup Video 
    $('.play-btn').magnificPopup({
        disableOn: 0,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    // Popup Gallery 
    $('.gallery-photo').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] 
        }
    });

    // Preloader JS
    $(window).on('load',function(){
        $(".preloader").fadeOut(500);
    });

    // Count Time JS
    function makeTimer() {
        var endTime = new Date("October 30, 2026 17:00:00 PDT");			
        var endTime = (Date.parse(endTime)) / 1000;
        var now = new Date();
        var now = (Date.parse(now) / 1000);
        var timeLeft = endTime - now;
        var days = Math.floor(timeLeft / 86400); 
        var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
        var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
        if (hours < "10") { hours = "0" + hours; }
        if (minutes < "10") { minutes = "0" + minutes; }
        if (seconds < "10") { seconds = "0" + seconds; }
        $("#days").html(days + "<span>Days</span>");
        $("#hours").html(hours + "<span>Hours</span>");
        $("#minutes").html(minutes + "<span>Minutes</span>");
        $("#seconds").html(seconds + "<span>Seconds</span>");
      }
      setInterval(function() { makeTimer(); }, 300);
  
      // Subscribe form
       $(".newsletter-form").validator().on("submit", function (event) {
        if (event.isDefaultPrevented()) {
            // Handle The Invalid Form...
            formErrorSub();
            submitMSGSub(false, "Please enter your email correctly");
        } else {
            // Everything Looks Good!
            event.preventDefault();
        }
      });
      function callbackFunction (resp) {
          if (resp.result === "success") {
              formSuccessSub();
          }
          else {
              formErrorSub();
          }
      }
      function formSuccessSub(){
          $(".newsletter-form")[0].reset();
          submitMSGSub(true, "Thank you for subscribing!");
          setTimeout(function() {
              $("#validator-newsletter").addClass('hide');
          }, 4000)
      }
      function formErrorSub(){
          $(".newsletter-form").addClass("animated shake");
          setTimeout(function() {
              $(".newsletter-form").removeClass("animated shake");
          }, 1000)
      }
      function submitMSGSub(valid, msg){
        if(valid){
            var msgClasses = "validation-success";
        } else {
            var msgClasses = "validation-danger";
        }
      $("#validator-newsletter").removeClass().addClass(msgClasses).text(msg);
    }
        
    // AJAX MailChimp
    $(".newsletter-form").ajaxChimp({
        url: "https://envyTheme.us20.list-manage.com/subscribe/post?u=60e1ffe2e8a68ce1204cd39a5&amp;id=42d6d188d9", // Your url MailChimp
        callback: callbackFunction
    });
  
    // Back To Top
    $('body').append("<div class='go-top'><i class='ri-arrow-up-s-line'></i></div>");
    $(window).on('scroll', function() {
        var scrolled = $(window).scrollTop();
        if (scrolled > 600) $('.go-top').addClass('active');
        if (scrolled < 600) $('.go-top').removeClass('active');
    });
    $('.go-top').on('click', function() {
        $('html, body').animate({
            scrollTop: '0',
        }, 500 );
    });

})($);