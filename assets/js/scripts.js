	
$(document).ready(function() {
	
	"use strict";
	
	PageLoad();
	ScrollEffects();
	FirstLoad();
	Showcase();
	ShowcaseWebgl();
	QuickMenu();
	Portfolio();
	FitThumbScreen();
	Shortcodes();	
	AjaxLoad();
	JustifiedGrid();
	Lightbox();
	Sliders();
	ContactForm();
	PlayVideo();
	ContactMap();
});



/*--------------------------------------------------
Function Page Load
---------------------------------------------------*/

	function PageLoad() {	
		
		if ($('#page-content').hasClass("light-content")) {
			$('.preloader-wrap').addClass('light-content');			
		}
		
		TweenMax.set($(".menu-timeline .before-span"), {y: 120, opacity:0});
		
				
		$('body').removeClass('hidden').removeClass('hidden-ball');
		TweenMax.to($(".preloader-marquee-wrapper"), 1, {force3D:true, opacity:1, y: 0, delay:0.2, ease:Power3.easeOut});
		TweenMax.to($("#header-container"), 0.5, {force3D:true, opacity:1, delay:0.2, ease:Power2.easeOut}); //modified time
		var width = 100,
			perfData = window.performance.timing, 
			EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart),
			time = ((EstimatedTime/10)%50) * 100
			
		// Loadbar Animation
		$(".loadbar").animate({
			width: width + "%"
		}, time  );	
		
		
		// Percentage Increment Animation
		var PercentageID = $("#precent"),
				start = 0,
				end = 100,
				durataion = time + 0;
				animateValue(PercentageID, start, end, durataion);
				
		function animateValue(id, start, end, duration) {
		  
			var range = end - start,
			  current = start,
			  increment = end > start? 1 : -1,
			  stepTime = Math.abs(Math.floor(duration / range)),
			  obj = $(id);
			
			var timer = setInterval(function() {
				current += increment;
				$(obj).text(current);
			  //obj.innerHTML = current;
				if (current == end) {
					clearInterval(timer);
				}
			}, stepTime);
		}
		
		// Fading Out Loadbar on Finised
		setTimeout(function(){
			$('.loadbar').append('<span class="hold-progress-bar"></span>');
			
			TweenMax.to($('.hold-progress-bar'), 0.3, {force3D:true,width:'100%', delay:0, ease:Power2.easeOut, onComplete:function(){  //modified time 2019 nov
				
				$('body').waitForImages({
						finished: function() {
							TweenMax.to('#ball', 0.2,{borderWidth: '4px', scale:0.5, borderColor:'#999999', backgroundColor:'transparent'});
							TweenMax.to('#ball-loader', 0.2,{borderWidth: '4px', top: 0, left: 0});
							$('#ball p').remove();
							TweenMax.to($(" .trackbar, .percentage"),0.3, {force3D:true, opacity:0, y:-10, delay:0, ease:Power2.easeIn});
							TweenMax.to($(" .preloader-marquee"),0.5, {force3D:true, opacity:0, y:-40, delay:0.1, ease:Power2.easeIn});							
							TweenMax.to($(".preloader-wrap"),1, {force3D:true, yPercent: -101, delay:0.6, ease:Power2.easeInOut});
							TweenMax.set($(".preloader-wrap"), {visibility:'hidden', delay:1.7, opacity:0});
							TweenMax.to($("#header-container"), 0.5, {force3D:true, opacity:1, delay:1.4, ease:Power2.easeOut}); //modified time
							setTimeout(function(){
							
								$('body').waitForImages({
									finished: function() {
										TweenMax.to($(".header-middle, #footer-container, .showcase-counter, .swiper-pagination-bullet-active .counter"), 1, {force3D:true, opacity:1, delay:0, ease:Power2.easeOut}); 
												
									},
									waitForAll: true
								});
								
								if( $('.hero-video-wrapper').length > 0 ){
									$('#hero-image-wrapper').find('video').each(function() {
										$(this).get(0).play();
									}); 
								}
								
								TweenMax.to($("#main"), 0, {force3D:true, opacity:1, delay:0, ease:Power2.easeOut});//modified time
								if( $('#hero').hasClass("has-image")) {	
									TweenMax.to($("#hero-bg-image, #hero-fg-image"), 1, {force3D:true, scale:1 , opacity:1, delay:0.2, ease:Power2.easeOut});
									TweenMax.to($(".hero-title div"), 1, {force3D:true, y: 0, opacity:1, delay:0.5, ease:Power2.easeOut});
									TweenMax.to($(".hero-subtitle span"), 0.7, {force3D:true, y:0, opacity:1, rotation:0, delay:0.9, ease:Power2.easeOut});
									TweenMax.to($(".hero-footer-left"), 0.7, {force3D:true, y: 0, opacity:1, rotation:0, delay:1, ease:Power2.easeOut});
									TweenMax.to($(".hero-footer-right"), 0.7, {force3D:true, y:0, opacity:1, rotation:0, delay:1, ease:Power2.easeOut});
									TweenMax.to($(".scroll-down-wrap"), 1, {force3D:true, scale:1, opacity:1, delay:1.2, ease: Elastic.easeOut});														
									TweenMax.to($("#main-page-content"), 0.4, {force3D:true, opacity:1, y:0, delay:1.15, ease:Power2.easeOut});
								} else {
									// Fading In Small Carousel elements on Finised
									TweenMax.to($(".hero-title div"), 1, {force3D:true, y: 0, opacity:1, delay:0.5, ease:Power2.easeOut});
									TweenMax.to($(".hero-subtitle span"), 0.7, {force3D:true, y:0, opacity:1, rotation:0, delay:0.9, ease:Power2.easeOut});
									TweenMax.to($(".hero-footer-left"), 0.7, {force3D:true, y: 0, opacity:1, rotation:0, delay:1, ease:Power2.easeOut});
									TweenMax.to($(".hero-footer-right"), 0.7, {force3D:true, y:0, opacity:1, rotation:0, delay:1, ease:Power2.easeOut});									
									TweenMax.to($("#main-page-content"), 0.7, {force3D:true, opacity:1, y:0, delay:1.3, ease:Power2.easeOut});				
								}	
								
								
								// Fading In Showcase elements on Finised
								TweenMax.set($("#canvas-slider"), {scale:1.1});
								TweenMax.set($(".showcase-footer .quickmenu, .showcase-footer .socials-wrap, .swiper-pagination-bullet .parallax-element"), {opacity:0});								
								TweenMax.to($("#canvas-slider"), 1, {force3D:true, opacity:1, scale:1, delay:0.3, ease:Power2.easeOut});
								TweenMax.to($(".swiper-pagination-bullet .title div"), 1, {force3D:true, y: 0, opacity:1, delay:0.5, ease:Power2.easeOut});
								TweenMax.to($(".swiper-pagination-bullet-active .subtitle span"), 0.7, {force3D:true, y: 0, opacity:1, delay:0.9, ease:Power2.easeOut});								
								TweenMax.to($(".showcase-footer .quickmenu"), 0.7, {force3D:true, y: 0, opacity:1, rotation:0, delay:1.2, ease:Power2.easeOut});
								TweenMax.to($(".swiper-pagination-bullet .parallax-element"), 0.7, {force3D:true, y:0, opacity:1, rotation:0, delay:1, ease:Power2.easeOut});
								TweenMax.to($(".showcase-footer .socials-wrap"), 0.7, {force3D:true, y: 0, opacity:1, rotation:0, delay:1.2, ease:Power2.easeOut});
								setTimeout( function(){	
									$('#showcase-slider-webgl-holder').addClass("loaded");
								} , 1000 );
								
								
											
									
								setTimeout( function(){	
									$('body').removeClass("load-project-page").removeClass("load-project-page-carousel");
								} , 600 );
								
								setTimeout( function(){	
									$('body').removeClass("load-next-project");
									$('body').addClass("header-visible");
									$('#showcase-holder').removeClass("disabled");
								} , 1600 );
								
								setTimeout( function(){	
									$('body').removeClass("show-loader")
								} , 800 );	
								
							} , 600 );
						},
					waitForAll: true
				});
				
			}});
	  
		}, time);
		
		
		
	}// End Page Load




/*--------------------------------------------------
Function Scroll Effects
---------------------------------------------------*/





/*--------------------------------------------------
Function First Load
---------------------------------------------------*/	

	function FirstLoad() {
		
		
		$('#main .has-image .hero-title, #main #project-nav .hero-title').each(function(){
			var words = $(this).text().split(" ");
			var total = words.length;
			$(this).empty();
			for (index = 0; index < total; index ++){
				$(this).append($("<div /> ").text(words[index]));
			}
		});
		
		$('#main .has-image .hero-title div, #main #project-nav .hero-title div').each(function(){
			var words = $(this).text().slice(" ");
			var total = words.length;
			$(this).empty();
			for (index = 0; index < total; index ++){
				$(this).append($("<span /> ").text(words[index]));
			}
		});
		
		setTimeout(function(){
			if ($("#page-content").hasClass("light-content")) {
				$("nav").css('background-color', '#141414');
				$("main, #main-content.color-page").css('background-color', function () {
					return $("#page-content").data('bgcolor')
				});
				$('#magic-cursor').addClass('light-content');
				if( $('#hero').length > 0 ){						
					if( $('#hero').hasClass("has-image")) {	
						$("header").css('background-color', 'transparent');
					} else {
						$("header").css('background-color', 'transparent');
					}
				} else {
					$("header").css('background-color', 'transparent');
				}
			} else {			
				$("nav").css('background-color', '#141414');
				$("main, #main-content.color-page").css('background-color', function () {
					return $("#page-content").data('bgcolor')
				});
				$('#magic-cursor').removeClass('light-content');
				if( $('#hero').length > 0 ){	
					if( $('#hero').hasClass("has-image")) {	
						$("header").css('background-color', 'transparent');
					} else {
						$("header").css('background-color', 'transparent');
					}
				} else {
					$("header").css('background-color', 'transparent');
				}
			}
		} , 10 );
		
		$('.video-cover').each(function() {
			var image = $(this).data('src');	
			$(this).css({'background-image': 'url(' + image + ')'});
		});
		
		//Load Default Page
		$('a.ajax-link').on('click', function() {
			$("body").addClass("show-loader");	
			$(".flexnav").removeClass("flexnav-show");
			$('#menu-burger').removeClass("open");
			$('header').removeClass('white-header');
			$("#app").remove();
			setTimeout(function(){
				$("#canvas-slider.active").remove();						
			} , 300 );
			$(".temporary-hero").remove();	
			var tlMenu = new TimelineLite();
			$(".fullscreen-menu .menu-timeline").each(function(index, element) {
				tlMenu.to(element, 0.25, {y:-30, opacity:0, ease:Power2.easeIn}, index * 0.03)
			});	
			TweenMax.to('#ball', 0.3,{borderWidth:"4px",scale:0.5,backgroundColor:"rgba(0, 0, 0, 0)",opacity:1});			
			TweenMax.to($("#main, #hero-image-wrapper, #project-nav, .next-project-image, #app, #canvas-slider, #showcase-slider-webgl-holder, #quickmenu-scroll"), 0.3, {opacity:0, delay:0, ease:Power0.ease});					
			TweenMax.to($("#footer-container, .header-middle"), 0.3, {opacity:0, ease:Power0.ease});			
			TweenMax.to('#show-filters, #counter-wrap', 0.2,{opacity:0});
		});
		
		
		
		//Load Page From Menu
		$('nav .ajax-link').on('click', function() {
			$(this).parents('.flexnav').addClass('hover');
			$(this).parents('.item-with-ul').addClass('hover');
			TweenMax.set($(this).find('span'),{yPercent:0});
			var tl = new TimelineLite();
			$(".menu-timeline .before-span").each(function(index, element) {
				tl.to(element, 0.5, {force3D:true, y:-120, opacity:0, delay:0, ease:Power2.easeIn}, index * 0.05)
			});
			$('header').removeClass('white-header');
			$("#app").remove();
			$(".temporary-hero").remove();	
		});
		
		
		
		$('#burger-wrapper, .menu .button-text').on('click', function() {
			$('#menu-burger, nav').toggleClass('open');			
			setTimeout( function(){			
				if ($('#menu-burger').hasClass("open")) {
					$('header').addClass('over-sidebar').addClass('over-white-section');
					if (!$('#page-content').hasClass("light-content")) {	
						$('#magic-cursor').addClass('light-content');
						$('#header-container').addClass('light-content');
					}
					TweenMax.set($("nav ul ul li"), {y: 0, opacity:1});
					//Fade In Navigation Lists
					var tlMenu = new TimelineLite();
					tlMenu.set($(".menu-timeline .before-span"), {y: 120, opacity:0});
					$(".menu-timeline .before-span").each(function(index, element) {
						tlMenu.to(element, 0.7, {force3D:true, y:0, opacity:1, delay:0.4, ease:Power2.easeOut}, index * 0.1)
					});
					
						
				} else {	
					//Fade Out Navigation Lists	
					var tlMenu = new TimelineLite();					
					$(".menu-timeline .before-span").each(function(index, element) {
						tlMenu.to(element, 0.5, {force3D:true, y:-120, opacity:0, delay:0, ease:Power2.easeIn}, index * 0.05)
					});
					
					var tlSubMenu = new TimelineLite();					
					$("ul.flexnav-show li").each(function(index, element) {
						tlSubMenu.to(element, 0.5, {force3D:true, y:-120, opacity:0, delay:0, ease:Power2.easeIn}, index * 0.03)
					});
					
					if (!$('#page-content').hasClass("light-content")) {	
						setTimeout( function(){
							$('#magic-cursor').removeClass('light-content');
							$('#header-container').removeClass('light-content');
						} , 500 );
					}
					setTimeout( function(){
						$(".touch-button.active").trigger("click");
						$('header').removeClass('over-sidebar')
						setTimeout( function(){
							$('header').removeClass('over-white-section');
						} , 350 );
					} , 500 );
				}							
			} , 20 );
		});
		
		
		// Page Navigation Events
		$(".next-ajax-link-page").on('mouseenter', function() {	
			var $this = $(this);			
			if ($('#page-content').hasClass("light-content")) {
				TweenMax.to('#ball', 0.3,{borderWidth: '2px', scale: 1.2, borderColor:'#fff', backgroundColor:'#fff'});
				TweenMax.to('#ball p', 0, {css:{color:"#000"}})
			} else {
				TweenMax.to('#ball', 0.3,{borderWidth: '2px', scale: 1.2, borderColor:'#000', backgroundColor:'#000'});
				TweenMax.to('#ball p', 0, {css:{color:"#fff"}})
			}
			TweenMax.to('#ball-loader', 0.2,{borderWidth: '2px', top: 2, left: 2});
			$( "#ball" ).append( '<p class="first">' + $this.data("firstline") + '</p>' + '<p>' + $this.data("secondline") + '</p>' );				
		});
							
		$(".next-ajax-link-page").on('mouseleave', function() {					
			TweenMax.to('#ball', 0.2,{borderWidth: '4px', scale:0.5, borderColor:'#999999', backgroundColor:'transparent'});
			TweenMax.to('#ball-loader', 0.2,{borderWidth: '4px', top: 0, left: 0});
			$('#ball p').remove();				
		});				
		
		
		$('.next-ajax-link-page').on('click', function() {					
			$("body").addClass("load-next-page");
			$("body").addClass("show-loader");
			$('header').removeClass('white-header');
			$("#app").remove();
			$(".temporary-hero").remove();	
				
			TweenMax.to('#ball', 0.2,{borderWidth: '4px', scale:0.5, borderColor:'#999999', backgroundColor:'transparent'});
			TweenMax.to('#ball-loader', 0.2,{borderWidth: '4px', top: 0, left: 0});
			$("#ball").removeClass("with-icon");
			$('#ball p').remove();
			$('#ball i').remove();	
			
			if ($('#project-nav').hasClass("light-content")) {				
				setTimeout(function(){
					$('body').addClass('light-content');								
				} , 300 );
			}
			if ($("body").hasClass("smooth-scroll")) {
				var navmove = $("#content-scroll").height() - $("#page-nav").height() - $("footer").height() 			
			} else {
				var navmove = window.innerHeight - $("#hero").height() - $("footer").height() 		   
			}
			
			TweenMax.to($("#main-page-content, #hero"), 0.3, {opacity:0});		
			TweenMax.to($("#page-nav"), 0.7, {y: - navmove, delay:0, ease:Power2.easeInOut});
			TweenMax.to($("footer"), 0.3, {opacity:0, delay:0, ease:Power2.easeInOut});
		});
		
		
		// Project Navigation Events
		$("#project-nav .next-ajax-link-project").mouseenter(function(e) {	
			var $this = $(this);		
			$( "#ball" ).append( '<p class="first">' + $this.data("firstline") + '</p>' + '<p>' + $this.data("secondline") + '</p>' );
			if ($('#project-nav').hasClass("light-content")) {
				TweenMax.to('#ball', 0.3,{borderWidth: '2px', scale: 1.2, borderColor:'#fff', backgroundColor:'#fff'});
				TweenMax.to('#ball p', 0.5, {css:{color:"#000"}})
			} else {
				TweenMax.to('#ball', 0.3,{borderWidth: '2px', scale: 1.2, borderColor:'#000', backgroundColor:'#000'});
				TweenMax.to('#ball p', 0.5, {css:{color:"#fff"}})
			}
			TweenMax.to('#ball-loader', 0.2,{borderWidth: '2px', top: 2, left: 2});
			
		});
						
		$("#project-nav .next-ajax-link-project").mouseleave(function(e) {
			TweenMax.to('#ball', 0.2,{borderWidth: '4px', scale:0.5, borderColor:'#999999', backgroundColor:'transparent'});
			TweenMax.to('#ball-loader', 0.2,{borderWidth: '4px', top: 0, left: 0});
			$('#ball p').remove();
		});	
		
		$('.next-ajax-link-project').on('click', function() {					
			$("body").addClass("load-project-thumb-with-title").addClass("show-loader");
			$('header').removeClass('white-header');
			$("#app").remove();
			$('.next-project-image').addClass("temporary").appendTo('body');
			if ($(this).parents('#project-nav').hasClass("change-header")) {
				$("body").append('<div class="temporary-hero"><div class="outer"><div class="inner"></div></div></div>');
			} else {
				$("body").append('<div class="temporary-hero light-content"><div class="outer"><div class="inner"></div></div></div>');
			}
			$('.next-caption').appendTo('.temporary-hero .inner');	
				
			TweenMax.to('#ball', 0.2,{borderWidth: '4px', scale:0.5, borderColor:'#999999', backgroundColor:'transparent'});
			TweenMax.to('#ball-loader', 0.2,{borderWidth: '4px', top: 0, left: 0});
			$("#ball").removeClass("with-icon");
			$('#ball p').remove();
			$('#ball i').remove();
			
			TweenMax.to($("#main-page-content"), 0.3, {opacity:0});			
			TweenMax.to($(".next-project-image"), 0.6, {scale:1, opacity: 1, ease:Power2.easeOut,onComplete: function() {
			  $('.next-project-image').addClass("visible")
			}});
			TweenMax.to($("footer"), 0.3, {opacity:0, ease:Power2.easeInOut});
				
		});
		
		if( $('.portfolio').length > 0 ){
			$('#main-page-content').addClass('portfolio-page');			
		}
		
		var viewportWidth = $(window).width();
		if (viewportWidth < 1024) {				
			$('.hero-video-wrapper').remove();							 
		}
	}// End First Load
	
	

	
/*--------------------------------------------------
Function Lazy Load
---------------------------------------------------*/

	function LazyLoad() {	
		
		TweenMax.set($("#show-filters, #counter-wrap"), {opacity:0, delay:0});
		
		$('body').waitForImages({
			finished: function() {
				$('body').removeClass('loading')
				setTimeout( function(){	
					$('body').removeClass('hidden').removeClass('scale-up').removeClass('scale-none');
				} , 1500 );
			},
			waitForAll: true
		});	
		
		$('body').waitForImages({
			finished: function() {
				TweenMax.to($("#header-container, .header-middle"), 1, {force3D:true, opacity:1, ease:Power2.easeOut});
							
			},
			waitForAll: true
		});
		
		if( !$('#canvas-slider').hasClass("active")) {	
			TweenMax.set($('#canvas-slider'), {opacity:0, scale:1.1});
			TweenMax.to($('#canvas-slider'), 1, {force3D:true, opacity:1, scale:1, delay:0.3, ease:Power2.easeOut});
		}	
		
		TweenMax.to($("#main"), 0.3, {force3D:true, opacity:1, delay:0.1, ease:Power2.easeOut});
			
		
		if( $('#hero').hasClass("has-image")) {	
			if( $('body').hasClass("load-project-thumb-with-title")) {
				TweenMax.to($("#hero-fg-image, #hero-bg-image"), 0, {force3D:true, scale:1 , opacity:1, delay:0, ease:Power2.easeOut});	
				TweenMax.to($(".hero-title div"), 0, {y: 0, opacity:1, delay:0});
				TweenMax.to($(".hero-subtitle span"), 0, {y:0, opacity:1, rotation:0, delay:0});
				TweenMax.to($(".hero-footer-left"), 0.7, {force3D:true, y: 0, opacity:1, rotation:0, delay:0.9, ease:Power2.easeOut});
				TweenMax.to($(".hero-footer-right"), 0.7, {force3D:true, y:0, opacity:1, rotation:0, delay:1, ease:Power2.easeOut});		
			} else if( $('body').hasClass("load-project-thumb")) {
				TweenMax.to($("#hero-fg-image, #hero-bg-image"), 0, {force3D:true, scale:1.02 , opacity:1, delay:0, ease:Power2.easeOut});				
				TweenMax.to($(".hero-title div"), 1, {force3D:true, y: 0, opacity:1, delay:0.3, ease:Power2.easeOut});
				TweenMax.to($(".hero-subtitle span"), 0.7, {force3D:true, y:0, opacity:1, rotation:0, delay:0.7, ease:Power2.easeOut});
				TweenMax.to($(".hero-footer-left"), 0.7, {force3D:true, y: 0, opacity:1, rotation:0, delay:1.1, ease:Power2.easeOut});
				TweenMax.to($(".hero-footer-right"), 0.7, {force3D:true, y:0, opacity:1, rotation:0, delay:1.2, ease:Power2.easeOut});			
			} else if( $('body').hasClass("load-project-canvas")) {
				TweenMax.to($("#hero-fg-image, #hero-bg-image"), 0, {force3D:true, scale:1 , opacity:1, delay:0, ease:Power2.easeOut});				
				TweenMax.to($(".hero-title div"), 1, {force3D:true, y: 0, opacity:1, delay:0.3, ease:Power2.easeOut});
				TweenMax.to($(".hero-subtitle span"), 0.7, {force3D:true, y:0, opacity:1, rotation:0, delay:0.7, ease:Power2.easeOut});
				TweenMax.to($(".hero-footer-left"), 0.7, {force3D:true, y: 0, opacity:1, rotation:0, delay:1.1, ease:Power2.easeOut});
				TweenMax.to($(".hero-footer-right"), 0.7, {force3D:true, y:0, opacity:1, rotation:0, delay:1.2, ease:Power2.easeOut});			
			} else {
				TweenMax.to($("#hero-fg-image, #hero-bg-image"), 0, {force3D:true, scale:1.02 , opacity:1, delay:0, ease:Power2.easeOut});
				//Modification from span to div in selector
				TweenMax.to($(".hero-title div"), 0.7, {force3D:true, y: 0, opacity:1, rotation:0, delay:0.7, ease:Power2.easeOut});
				//Modification from noting to span in selector
				TweenMax.to($(".hero-subtitle span"), 0.7, {force3D:true, y:0, opacity:1, rotation:0, delay:0.6, ease:Power2.easeOut});
				TweenMax.to($(".hero-footer-left"), 0.7, {force3D:true, y: 0, opacity:1, rotation:0, delay:0.9, ease:Power2.easeOut});
				TweenMax.to($(".hero-footer-right"), 0.7, {force3D:true, y:0, opacity:1, rotation:0, delay:1, ease:Power2.easeOut});	
			}
			TweenMax.to($("#main-page-content"), 0.4, {force3D:true, opacity:1, y:0, delay:0.95, ease:Power2.easeOut});
		} else {
			TweenMax.to($("#hero .hero-title div"), 1, {y: 0, opacity:1, rotation:0, delay:0, ease:Power2.easeOut})
			TweenMax.to($("#hero .hero-subtitle span"), 0.7, {force3D:true, y: 0, opacity:1, delay:0.4, ease:Power2.easeOut});
			TweenMax.to($(".hero-footer-left"), 0.7, {force3D:true, y: 0, opacity:1, delay:0.5, ease:Power2.easeOut});
			TweenMax.to($(".hero-footer-right"), 0.7, {force3D:true, y:0, opacity:1, delay:0.6, ease:Power2.easeOut});
			TweenMax.to($("#main-page-content"), 0.2, {force3D:true, opacity:1, delay:0.15, ease:Power2.easeOut});
		}
		
		// Fading In Showcase elements on Finised
		
		TweenMax.set($(".showcase-footer .quickmenu, .showcase-footer .socials-wrap, .swiper-pagination-bullet .parallax-element"), {opacity:0});										
		TweenMax.to($(".swiper-pagination-bullet .title div"), 1, {force3D:true, y: 0, opacity:1, delay:0.5, ease:Power2.easeOut});
		TweenMax.to($(".swiper-pagination-bullet-active .subtitle span"), 0.7, {force3D:true, y: 0, opacity:1, delay:0.9, ease:Power2.easeOut});								
		TweenMax.to($(".showcase-footer .quickmenu"), 0.7, {force3D:true, y: 0, opacity:1, rotation:0, delay:1.2, ease:Power2.easeOut});
		TweenMax.to($(".swiper-pagination-bullet .parallax-element"), 0.7, {force3D:true, y:0, opacity:1, rotation:0, delay:1, ease:Power2.easeOut});
		TweenMax.to($(".showcase-footer .socials-wrap"), 0.7, {force3D:true, y: 0, opacity:1, rotation:0, delay:1.2, ease:Power2.easeOut});
		setTimeout( function(){	
			$('#showcase-slider-webgl-holder').addClass("loaded");
		} , 1000 );
		
		
		
		TweenMax.to($("#footer-container"), 1, {force3D:true, opacity:1, delay:0.4, ease:Power2.easeOut});		
		
		if( $('.load-project-thumb').length > 0 ){
			setTimeout( function(){
				$('#hero-image-wrapper').find('video').each(function() {
					$(this).get(0).play();
				});
				$("#app.active").remove();
				$("#canvas-slider.active").remove();
				$(".temporary-hero").remove();
				$(".next-project-image.temporary").remove();	
			} , 300 );
		} else if( $('.load-project-canvas').length > 0 ){
			setTimeout( function(){
				$('#hero-image-wrapper').find('video').each(function() {
					$(this).get(0).play();
				});
				$("#app.active").remove();
				$("#canvas-slider.active").remove();
				$(".temporary-hero").remove();
				$(".next-project-image.temporary").remove();	
			} , 300 );
		} else if( $('.load-project-thumb-with-title').length > 0 ){
			setTimeout( function(){
				$('#hero-image-wrapper').find('video').each(function() {
					$(this).get(0).play();
				});
				$("#app.active").remove();
				$("#canvas-slider.active").remove();
				$(".temporary-hero").remove();
				$(".next-project-image.temporary").remove();
				$('body').removeClass("load-project-thumb-with-title").removeClass("show-loader");	
			} , 500 );
		} else {
			$('#hero-image-wrapper').find('video').each(function() {
				$(this).get(0).play();
			});
		}
		setTimeout( function(){	
			$('body').removeClass("load-project-thumb").removeClass("load-project-canvas").removeClass("show-loader");			
		} , 300 );
		
		setTimeout( function(){	
			//$('header').removeClass('white-header');
			$('body').removeClass("load-project-page").removeClass("load-next-project").removeClass("load-next-page").removeClass("show-loader");			
		} , 500 );
		
	
	}// End Lazy Load		



	
	
/*--------------------------------------------------
Function Showcase
---------------------------------------------------*/
	
	function Showcase() {
		
	
		if( $('#showcase-slider-webgl-holder').length > 0 ){
			
			$("footer").addClass("showcase-footer")
			
			
			var titles = [];
			var subtitle = [];
			$('#slider .swiper-slide').each(function(i) {
			  	titles.push($(this).data('title'))
				subtitle.push($(this).data('subtitle'))
			});
			
								
			var swiperOptions = {
				direction: "horizontal",
				loop: true,
				grabCursor: false,
				resistance : true,
				touchRatio: 3,
				longSwipes:true,
				longSwipesRatio:0.1,
				resistanceRatio:1,
				slidesPerView: 1,				
				centeredSlides: true,
				allowTouchMove:true,
				spaceBetween:0,  
				speed:1000,
				autoplay: false,
				mousewheel: true,
				parallax:true,				
				pagination: {
				  el: '.showcase-pagination',
					clickable: true,
					renderBullet: function (index, className) {
						return '<div class="' + className + '">' + '<div class="caption-wrapper">' + '<div class="title">' + titles[index] + '</div>' + '<div class="subtitle">' + '<span>' + subtitle[index] + '</span>' + '</div>' + '</div>' +'<div class="parallax-wrap">' + '<div class="parallax-element">' + '<svg class="fp-arc-loader" width="20" height="20" viewBox="0 0 20 20">'+
								'<circle class="path" cx="10" cy="10" r="5.5" fill="none" transform="rotate(-90 10 10)"'+
								'stroke-opacity="1" stroke-width="2px"></circle>'+
								'<circle class="solid-fill" cx="10" cy="10" r="3"></circle>'+
								'</svg></div></div>' + '</div>';						 
					},
				},						
				on: {
					init: function () {
						var $transformPerspective = $(".swiper-pagination-bullet .title span");
						TweenLite.set($transformPerspective, {transformPerspective:500});
						
						
					},
					slidePrevTransitionStart: function () {	
			
						$('.showcase-pagination').find('.swiper-pagination-bullet').each(function() {
							if (!$(this).hasClass("swiper-pagination-bullet-active")) {															
								TweenMax.staggerTo($(this).find('.title span'), 0.5, {y:10, rotationX: -78, transformOrigin:"50% 90% 0px", opacity:0, ease:Power2.easeInOut},  0.04)
								TweenMax.to($(this).find('.subtitle span'), 0.5, {y:30, opacity:0, delay:0.2, ease:Power2.easeInOut})
							} else {
								TweenLite.set($(this).find('.title span'), {y:-10, rotationX: 78, transformOrigin:"50% 90% 0px", opacity:0, });
								TweenLite.set($(this).find('.subtitle span'), {y:-30, opacity:0, });
								TweenMax.staggerTo($(this).find('.title span'), 0.5, {y:0, rotationX: 0, transformOrigin:"50% 10% 0px", opacity:1, delay:0.5, ease:Power2.easeOut}, 0.04)
								TweenMax.to($(this).find('.subtitle span'), 0.5, {y:0, opacity:1, delay:0.5, ease:Power2.easeInOut})									
							}
						});
												
					},
					slideNextTransitionStart: function () {	
			
						$('.showcase-pagination').find('.swiper-pagination-bullet').each(function() {
							if (!$(this).hasClass("swiper-pagination-bullet-active")) {															
								TweenMax.staggerTo($(this).find('.title span'), 0.5, {y:-10, rotationX: 78, transformOrigin:"50% 10% 0px", opacity:0, ease:Power2.easeInOut},  0.04)
								TweenMax.to($(this).find('.subtitle span'), 0.5, {y:-30, opacity:0, delay:0.2, ease:Power2.easeInOut})
							} else {
								TweenLite.set($(this).find('.title span'), {y:10, rotationX: -78, transformOrigin:"50% 10% 0px", opacity:0, });
								TweenLite.set($(this).find('.subtitle span'), {y:30, opacity:0, });
								TweenMax.staggerTo($(this).find('.title span'), 0.5, {y:0, rotationX: 0, transformOrigin:"50% 90% 0px", opacity:1, delay:0.5, ease:Power2.easeOut}, 0.04)
								TweenMax.to($(this).find('.subtitle span'), 0.5, {y:0, opacity:1, delay:0.5, ease:Power2.easeInOut})											
							}
						});
												
					},		
					slideChangeTransitionStart: function () {
						
						$('.swiper-slide-active').find('div').first().each(function() {
							if (!$(this).hasClass("active")) {
								$(this).trigger('click');
							}
							
						});
						
						$('.swiper-slide-duplicate-active').find('div').first().each(function() {
							if (!$(this).hasClass("active")) {
								$(this).trigger('click');
							}
						}); 
						
						if ($('.swiper-slide-active').hasClass("change-header")) {							
							$('#page-content').delay(500).queue(function(next){
								$(this).removeClass('light-content');
								next();
							});							
						} else {							
							$('#page-content').delay(500).queue(function(next){
								$(this).addClass('light-content');
								next();
							});
						}
						
						$('.swiper-slide').find('.slide-title').each(function() {
							$(this).removeClass('active-title');							
						});
						
						LinesWidth();
						
						
					},
					slideChangeTransitionEnd: function () {	
						
						setTimeout(function(){ 
							$('.swiper-slide-active').find('.slide-title').each(function() {
								$(this).addClass('active-title');							
							});
							
							$('.swiper-slide-duplicate-active').find('.slide-title').each(function() {
								$(this).addClass('active-title');	
							});
						}, 0);
						
					},
  				},
			};
			
			
			function LinesWidth() {
			
				var carouselWidth = $('#showcase-slider-webgl-holder').width();
				var captionWidth = $('.swiper-slide-active .slide-title').width();
				var lineWidth = carouselWidth / 2 - 140
				
				$(".caption-border.left").css({
					'width': lineWidth - captionWidth/2 + 'px',
					'opacity': 1,
				});				
				$(".caption-border.right").css({
					'width': lineWidth - captionWidth/2 + 'px',
					'opacity': 1,
				});
				
			}// End Lines Width
			
			
							
			var showSwiper = new Swiper("#slider", swiperOptions);
			
			
			LinesWidth();
			
		
			
			function BulletsPosition() {
				var bullets_count = $('.swiper-pagination-bullet .parallax-wrap').length;
				var bullets_count_width = $('.swiper-pagination-bullet .parallax-wrap').length * 40 / 2;
				var bullets_height = $('.showcase-pagination-wrap').height()/2;
				var window_height = $(window).height() / 2;
				var footer_height = $('footer').height() / 2 + 130;
				for( i = 0; i < bullets_count; i++ ) { $('.swiper-pagination-bullet .parallax-wrap').eq( i ).css( 'left', (i * 40) - bullets_count_width + 20).css( 'top', (bullets_height - 20) + window_height - footer_height);	}
			}
			
			BulletsPosition();
			
			var resizeTime;
			$(window).resize(function() {
				clearTimeout(resizeTime);
				resizeTime = setTimeout(doneResizing, 50);
			});
				
			function doneResizing(){
				BulletsPosition();
				LinesWidth();
			}			
			
			$('.swiper-container .slide-title-wrapper').on('mousedown', function(event) {
				return false;
			});	
		
			$('.swiper-container').on('mousedown touchstart', function(event) {
				TweenMax.to('#ball', 0.2,{borderWidth: '2px', scale: 1, borderColor:'#fff',});
				$("body" ).addClass("scale-drag-x");				
			});
			
			$('.swiper-container').on('mouseup touchend', function(event) {
				TweenMax.to('#ball', 0.2,{borderWidth: '4px', scale:0.5, borderColor:'#999999',});
				$("body").removeClass("scale-drag-x");				
			});
						
			$('.title').each(function(){
				var words = $(this).text().split(" ");
				var total = words.length;
				$(this).empty();
				for (index = 0; index < total; index ++){
					$(this).append($("<div /> ").text(words[index]));
				}
			});
			
			$('.title div').each(function(){
				var words = $(this).text().slice(" ");
				var total = words.length;
				$(this).empty();
				for (index = 0; index < total; index ++){
					$(this).append($("<span /> ").text(words[index]));
				}
			});
			
			// Page Navigation Events
			$("#showcase-slider-webgl-holder .slide-link").on('mouseenter', function() {	
				var $this = $(this);			
				TweenMax.to('#ball', 0.3,{borderWidth: '2px', scale: 1.2, borderColor:'#fff', backgroundColor:'#fff'});
				TweenMax.to('#ball-loader', 0.2,{borderWidth: '2px', top: 2, left: 2});
				$( "#ball" ).append( '<p class="first">' + $this.data("firstline") + '</p>' + '<p>' + $this.data("secondline") + '</p>' );				
			});
								
			$("#showcase-slider-webgl-holder .slide-link").on('mouseleave', function() {					
				TweenMax.to('#ball', 0.2,{borderWidth: '4px', scale:0.5, borderColor:'#999999', backgroundColor:'transparent'});
				TweenMax.to('#ball-loader', 0.2,{borderWidth: '4px', top: 0, left: 0});
				$('#ball p').remove();				
			});			
			
			
			$('#showcase-slider-webgl-holder .slide-link').on('click', function() {				
				$("body").addClass("show-loader");
				if ($(this).parents('.swiper-slide').hasClass("change-header")) {
					$("body").append('<div class="temporary-hero"><div class="outer"><div class="inner"></div></div></div>');
				} else {
					$("body").append('<div class="temporary-hero light-content"><div class="outer"><div class="inner"></div></div></div>');
				}
				$('.swiper-pagination-bullet-active').find('.caption-wrapper').appendTo('.temporary-hero .inner');
				TweenMax.to('footer, .showcase-pagination-wrap .parallax-element, .caption-border', 0.5,{opacity:0, ease:Power4.easeInOut});
				
				setTimeout( function(){
					$("body").addClass("load-project-thumb-with-title");	
				} , 300 );
				
				TweenMax.to('#ball', 0.2,{borderWidth: '4px', scale:0.5, borderColor:'#999999', backgroundColor:'transparent'});
				TweenMax.to('#ball-loader', 0.2,{borderWidth: '4px', top: 0, left: 0});
				$("#ball").removeClass("with-icon");
				$('#ball p').remove();
				$('#ball i').remove();
			});
						
			
		}	
		
			
	}//End Showcase Slider
	
	

/*--------------------------------------------------
Function Showcase Webgl Slider
---------------------------------------------------*/
	
	

	
	
	
/*--------------------------------------------------
Function QuickMenu
---------------------------------------------------*/

	function QuickMenu() {
		
		//Quick Menu
		$('.quickmenu, #close-quickmenu').on('click', function() {			
			$('.quickmenu, #quickmenu').toggleClass('active');
			
			setTimeout( function(){			
				if ($('#quickmenu').hasClass("active")) {	
					
					$('#quickmenu-scroll').animate({ scrollTop: $('#quickmenu').offset().top },0);					
					
					TweenMax.to($("#canvas-slider"), 1, {force3D:true, scale:0.4, delay:0.3, ease:Power3.easeInOut});
					
					setTimeout(function(){
						$('.swiper-slide-active').find('div').first().each(function() {
							$(this).trigger('click');
							
						});
						
						$('.swiper-slide-duplicate-active').find('div').first().each(function() {
							$(this).trigger('click');
						}); 
					} , 300 );	
					
					var slidertitleheight = $(".title").height()
					
					TweenMax.to($('#fixed-borders'), 0.2, {force3D:true, opacity:0, delay:0, ease:Power2.easeIn});
					TweenMax.to($('.swiper-pagination-bullet-active').find('.title div'), 0.4, {force3D:true, opacity:0, y:-slidertitleheight/2, delay:0, ease:Power2.easeIn});
					TweenMax.to($('.swiper-pagination-bullet-active').find('.subtitle span'), 0.3, {force3D:true, opacity:0, y:-30, delay:0.1, ease:Power2.easeIn});
					
					TweenMax.to($(".showcase-pagination-wrap .parallax-element"), 0.3, {scale:0, delay:0.3, ease:Power2.easeOut});
					
					
					TweenMax.set($('.swiper-pagination-bullet-active').find('.title div'), {opacity:0, y:slidertitleheight, delay:0.7});
					TweenMax.set($('.swiper-pagination-bullet-active').find('.subtitle span'), {opacity:0, y:40, delay:0.9});
					
					var quicktitle = new TimelineLite();
					quicktitle.set($(".q-timeline"), {opacity:0, y:60});
					$(".q-timeline").each(function(index, element) {
						quicktitle.to(element, 0.5, {opacity:1, y:0, delay:0.5, ease:Power3.easeOut}, index * 0.1)
					});
					setTimeout(function(){
						if ($('.swiper-slide-active').hasClass("change-header")) {
							$('#page-content').addClass('light-content');
						}
						
						if ($('.swiper-slide-duplicate-active').hasClass("change-header")) {
							$('#page-content').addClass('light-content');
						}
					} , 500 );
						
						
				} else {
					
					var quicktitle = new TimelineLite();
					$(".q-timeline").each(function(index, element) {
						quicktitle.to(element, 0.25, {opacity:0, y:-60, ease:Power1.easeIn}, index * 0.03)
					});
					
					setTimeout(function(){
						$('#quickmenu-scroll').animate({ scrollTop: $('#quickmenu').offset().top },100);
					} , 700 );
					
					TweenMax.to($('#fixed-borders'), 0.3, {force3D:true, opacity:1, y:0, delay:1, ease:Power2.easeOut});
					TweenMax.to($('.swiper-pagination-bullet-active').find('.title div'), 0.7, {force3D:true, opacity:1, y:0, delay:0.5, ease:Power2.easeOut});
					TweenMax.to($('.swiper-pagination-bullet-active').find('.subtitle span'), 0.5, {force3D:true, opacity:1, y:0, delay:0.7, ease:Power2.easeOut});
					
					TweenMax.to($(".showcase-pagination-wrap .parallax-element"), 0.5, {scale:1,delay:1, ease:Power2.easeOut});				
					
					TweenMax.to($("#canvas-slider"), 1.2, {force3D:true, scale: 1, delay:0.2, ease:Power3.easeInOut});
					
					setTimeout(function(){
						$('.swiper-slide-active').find('div').first().each(function() {
							$(this).trigger('click');
							
						});
						
						$('.swiper-slide-duplicate-active').find('div').first().each(function() {
							$(this).trigger('click');
						}); 
					} , 300 );
					
					setTimeout( function(){
						if ($('.swiper-slide-active').hasClass("change-header")) {
							$('#page-content').removeClass('light-content');
						}
						
						if ($('.swiper-slide-duplicate-active').hasClass("change-header")) {
							$('#page-content').removeClass('light-content');
						}
					} , 900 );
				}							
			} , 20 );
		});
		
		
		$(".quickmenu, #close-quickmenu").on('click', function() {
			$(".quickmenu .icon-wrap").toggleClass("disabled");			   
			if ($(".quickmenu .icon-wrap").hasClass('disabled')) {
				$('.quickmenu .button-text span').text($('.quickmenu .button-text span').data('off'));
				$('.quickmenu .button-text span').attr("data-off", $('.quickmenu .button-text span').data('hover'));
				$('.quickmenu .button-text span').attr("data-hover", $('.quickmenu .button-text span').text());
				
			} else {
				$('.quickmenu .button-text span').text($('.quickmenu .button-text span').data('hover'));
				$('.quickmenu .button-text span').attr("data-hover", $('.quickmenu .button-text span').data('hover'));
				$('.quickmenu .button-text span').attr("data-off", $('.quickmenu .button-text span').data('off'));
			}
		});		
		
		if( $('#quickmenu').length > 0 ){
			var offsetHeight = document.getElementById('quick-projects').offsetHeight;
			document.getElementById('close-quickmenu').style.height = offsetHeight+'px';
		}
		
		
		$(" #close-quickmenu").mouseenter(function(e) {	
			TweenMax.to('#ball', 0.2,{borderWidth: '2px', scale: 1, borderColor:'#fff',});
			TweenMax.to('#ball-loader', 0.2,{borderWidth: '2px', top: 2, left: 2});
			$( "#ball" ).addClass("close-icon").append( '<i class="fa fa-times"></i>' );
		});
			
		$(" #close-quickmenu").mouseleave(function(e) {
			TweenMax.to('#ball', 0.2,{borderWidth: '4px', scale:0.5, borderColor:'#999999',});
			TweenMax.to('#ball-loader', 0.2,{borderWidth: '4px', top: 0, left: 0});
			$("#ball").removeClass("close-icon");
			$('#ball i').remove();
		});
		
		$("#close-quickmenu").on('click', function() {
			TweenMax.to('#ball', 0.2,{borderWidth: '4px', scale:0.5, borderColor:'#999999',});
			TweenMax.to('#ball-loader', 0.2,{borderWidth: '4px', top: 0, left: 0});
			$("#ball").removeClass("close-icon");
			$('#ball i').remove();
		});
		
		
		class Spring {
			constructor(list, friction) {
				this.__list = $(list);
				this.friction = friction;
				this.desire_positionY = $("#quickmenu-scroll").scrollTop();
				this.py = [];
				// Behaviours
				$("#quickmenu-scroll").on("scroll", this.handleChange.bind(this));
				this.update();
			}

			handleChange(e){
				this.desire_positionY = $("#quickmenu-scroll").scrollTop();
				
			}
  
			update(){
				$.each(this.__list, function(i, e){
					if(this.py[i] == null) this.py[i] = 0;
					this.py[i] += ( (this.desire_positionY) - this.py[i]) / (this.friction+i);
					$(e).css({
						"top":  Math.round(this.desire_positionY)+"px",
						"transform": " translateY(-"+ Math.round(this.py[i])+"px)"
					});
				}.bind(this))
				window.requestAnimationFrame(this.update.bind(this));
				
			}
		}

		if ($(window).width() > 1024) {			
				
			let spring = new Spring("#quick-projects li", 6);			
		}
		
		
		$('.quick-title').on('click', function() {
			let parent_slide = $(this).closest( 'li' );
			parent_slide.addClass('above');
			
			TweenMax.to($("#canvas-slider"), 1, {force3D:true, scale: 1, delay:0, ease:Power3.easeInOut});
			
			var quicktitle = new TimelineLite();
			$(".q-timeline").each(function(index, element) {
				quicktitle.to(element, 0.25, {opacity:0, y:-60, ease:Power1.easeIn}, index * 0.03)
			});
				
			$("body").addClass("show-loader");			
			TweenMax.to('footer, .showcase-pagination-wrap .parallax-element', 0.5,{opacity:0, ease:Power4.easeInOut});
			
			setTimeout( function(){
				$("body").addClass("load-project-canvas");	
			} , 300 );
			
			TweenMax.to('#ball', 0.2,{borderWidth: '4px', opacity:1, scale:0.5, borderColor:'#999999', backgroundColor:'transparent'});
			TweenMax.to('#ball-loader', 0.2,{borderWidth: '4px', top: 0, left: 0});
			$("#ball").removeClass("with-icon");
			$('#ball p').remove();
			$('#ball i').remove();
			$("#ball").removeClass("close-icon");
			$('#ball i').remove();
			
			$(this).delay(1000).queue(function() {
				var link = $(".above").find('a');
				link.trigger('click');
			});
			
		});
		
		
	}// End QuickMenu	

	


/*--------------------------------------------------
Function Portfolio
---------------------------------------------------*/	
		
	function Portfolio() {	
	
			
		if( $('.portfolio-wrap').length > 0 ){			
			
			
			if ($("body").hasClass("smooth-scroll")) {
				var elem = document.querySelector("#content-scroll");
				var scrollbar = Scrollbar.init(elem,
				{
					renderByPixels: true,
					damping:0.05
				});
			}
			
			var $container = $('.portfolio');
		
			$container.isotope({
			  layoutMode: 'packery',
			  itemSelector: '.item',
			  gutter:0,
			  transitionDuration: "0.5s"
			});
			
			$('#filters a').on('click', function() {
				$('#filters a').removeClass('active');
				$(this).addClass('active');
				$('.item').addClass('item-margins');
				var selector = $(this).attr('data-filter');
				$container.isotope({ filter: selector }, function( $changedItems, instance ) {
				  instance.$allAtoms.filter('.isotope-hidden').removeClass('is-filtered');
				  instance.$filteredAtoms.addClass('is-filtered');
				});		
				return false;
			});
			
			$("#all").trigger('click');
			
			
			$(".item-image").mouseenter(function(e) {	
				TweenMax.to('#ball', 0.3,{borderWidth: '2px', scale: 1, borderColor:'#fff'});
				TweenMax.to('#ball-loader', 0.2,{borderWidth: '2px', top: 2, left: 2});
				$( "#ball" ).addClass("with-icon").append( '<i class="fa fa-plus"></i>' );
				$(this).parent().find('video').each(function() {
					$(this).get(0).play();
				});
			});
							
			$(".item-image").mouseleave(function(e) {
				TweenMax.to('#ball', 0.2,{borderWidth: '4px', scale:0.5, borderColor:'#999999'});
				TweenMax.to('#ball-loader', 0.2,{borderWidth: '4px', top: 0, left: 0});
				$("#ball").removeClass("with-icon");
				$('#ball i').remove();
				$(this).parent().find('video').each(function() {
					$(this).get(0).pause();
				});
			});			
			
			
			//Show Filters On overlay
			$('#show-filters, #close-filters').on('click', function() {			
				$('#filters-overlay').toggleClass('active');
				var navtitleheight = $(".hero-title").height()
				var navsubtitleheight = $(".hero-subtitle").height()
				
				setTimeout( function(){			
					if ($('#filters-overlay').hasClass("active")) {
						
						TweenMax.to($(".item-parallax"), 0.6, {force3D:true, scale:0.9, opacity:0.3, delay:1.1, ease:Power2.easeInOut});					
						TweenMax.to($(".active .item-caption"), 0.3, {opacity:0, ease:Power2.easeOut});
						TweenMax.to($("#show-filters, #counter-wrap"), 0.3, {opacity:0, delay:0, ease:Power2.easeOut});
						TweenMax.to($("#show-filters, #counter-wrap"), 0, {visibility:'hidden', delay:0.35, ease:Power2.easeOut}); 
						
						//Fade In Navigation Lists
						TweenMax.set($(".filters-info"), {y:30, opacity:0});
						TweenMax.to($(".filters-info"), 0.4, {force3D:true, y:0, opacity:1, delay:0.7, ease:Power2.easeOut});
						var tlMenu = new TimelineLite();
						tlMenu.set($(".filters-timeline"), {y:60, opacity:0});
						$(".filters-timeline").each(function(index, element) {
							tlMenu.to(element, 0.5, {y:0, opacity:1, delay:1.2, ease:Power3.easeOut}, index * 0.1)
						});
						
						var heroheight = $("#hero").height();			
						if ($("body").hasClass("smooth-scroll")) {
							TweenLite.to(scrollbar, 1.5, {scrollTop:heroheight, ease:Power4.easeInOut});
						} else {
							$("html,body").animate({scrollTop: heroheight}, 800);
						}
							
					} else {					
						
						
						TweenMax.to($(".item-parallax"), 0.6, {force3D:true, scale: 1, opacity:1, delay:0.3, ease:Power2.easeInOut});					
						TweenMax.to($(".active .item-caption"), 0.5, {opacity:1, delay:0.5, ease:Power2.easeOut});
						TweenMax.set($("#show-filters, #counter-wrap"), {visibility:'visible', opacity:0});
						TweenMax.to($("#show-filters, #counter-wrap"), 0.3, {opacity:1, delay:0.7, ease:Power2.easeOut});
						
						//Fade Out Navigation Lists
						TweenMax.to($(".filters-info"), 0.2, {force3D:true, y:-30, opacity:0, delay:0, ease:Power1.easeIn});					
						var tlMenu = new TimelineLite();
						$(".filters-timeline, .jssocials-share").each(function(index, element) {
							tlMenu.to(element, 0.25, {opacity:0, y:-60, delay:0.1, ease:Power1.easeIn }, index * 0.1)
						});	
						TweenMax.to('#ball', 0.1,{borderWidth: '4px', scale:0.5,});
						$("#ball").removeClass("close-icon");
						$('#ball i').remove();
						
					}							
				} , 20 );
			});
			
			
			$("#close-filters").mouseenter(function(e) {	
				TweenMax.to('#ball', 0.2,{borderWidth: '2px', scale: 1, borderColor:'#fff',});
				TweenMax.to('#ball-loader', 0.2,{borderWidth: '2px', top: 2, left: 2});
				$( "#ball" ).addClass("close-icon").append( '<i class="fa fa-times"></i>' );
			});
				
			$("#close-filters").mouseleave(function(e) {
				TweenMax.to('#ball', 0.2,{borderWidth: '4px', scale:0.5, borderColor:'#999999',});
				TweenMax.to('#ball-loader', 0.2,{borderWidth: '4px', top: 0, left: 0});
				$("#ball").removeClass("close-icon");
				$('#ball i').remove();
			});
			
			
			
			
			setTimeout( function(){
				var controller = new ScrollMagic.Controller();
				$('.portfolio').each(function(){
					var $this = $(this);
					var $thisHeightFilters = $(this).outerHeight() - window.innerHeight*0.7;
					var $thisHeightCaptions = $(this).outerHeight() - window.innerHeight * 0.1;
					
					var sceneFilters = new ScrollMagic.Scene({triggerElement:$this[0],duration: $thisHeightFilters})
						.addTo(controller)
						
					
					sceneFilters.triggerHook(0.3)
					
					sceneFilters.on('enter', function(){				
						TweenMax.to($("#show-filters"), 0.3, {opacity:1, delay:0, ease:Power2.easeOut});
						$("#show-filters").addClass('enabled')
					});
					
					sceneFilters.on('leave', function(){				
						TweenMax.to($("#show-filters"), 0.15, {opacity:0, delay:0, ease:Power2.easeOut});
						$("#show-filters").removeClass('enabled')
					});
					
					var sceneCaptions = new ScrollMagic.Scene({triggerElement:$this[0],duration: $thisHeightCaptions})
						.addTo(controller)
						
					
					sceneCaptions.triggerHook(0.5)
					
					sceneCaptions.on('enter', function(){
						$(".portfolio-captions").addClass('enabled')
					});
					
					sceneCaptions.on('leave', function(){
						$(".portfolio-captions").removeClass('enabled')
					});
					
					
					
					if ($("body").hasClass("smooth-scroll")) {
						scrollbar.addListener(() => {
							sceneFilters.refresh()
							sceneCaptions.refresh()
						});
					}
				})
			} , 2000 );
			
			TweenMax.to($("#show-filters"), 0, {opacity:0, delay:0.05, ease:Power2.easeOut});
			
			if ($(window).width() > 1024) {
			
				if( $('.hover-caption').length > 0 ){
					
					if ($(".portfolio-wrap").hasClass("hover-caption")) {
						if ($("#page-content").hasClass("light-content")) {
							$("body").append('<div class="temporary-hero portfolio-captions light-content"></div>');
						} else {
							$("body").append('<div class="temporary-hero portfolio-captions"></div>');
						}
						$(".temporary-hero").append('<div class="outer"></div>');
						$(".temporary-hero .outer").append('<div class="inner"></div>');
						$(".portfolio").find(".item .item-caption").each(function() {
							$(".temporary-hero .outer .inner").append($(this))
						}); 
						
						$(".portfolio").find(".item .item-image").on("mouseenter", function(e) {
							
							TweenMax.to($(".temporary-hero .outer .inner").children().children(".item-title").eq($(this).parents('.item').index()), 0.5, {force3D:true, opacity:1,  y: 0, delay:0.15, ease:Power2.easeOut});
							TweenMax.to($(".temporary-hero .outer .inner").children().children(".item-cat").eq($(this).parents('.item').index()), 0.3, {force3D:true, opacity:1,  y: 0, delay:0.25, ease:Power2.easeOut});
							
						}).on("mouseleave", function(e) {
							
							TweenMax.to($(".temporary-hero .outer .inner").children().children(".item-title").eq($(this).parents('.item').index()), 0.3, {force3D:true, opacity:0,  y: -50, ease:Power2.easeIn});
							TweenMax.to($(".temporary-hero .outer .inner").children().children(".item-cat").eq($(this).parents('.item').index()), 0.3, {force3D:true, opacity:0,  y: -30, delay:0.05, ease:Power2.easeIn});
							TweenMax.set($(".temporary-hero .outer .inner").children().children(".item-title").eq($(this).parents('.item').index()), { y: 50, opacity:0, delay:0.3});
							TweenMax.set($(".temporary-hero .outer .inner").children().children(".item-cat").eq($(this).parents('.item').index()), { y: 30, opacity:0, delay:0.35});
							
						}).on("click", function() {
							$(".temporary-hero").removeClass('enabled')
						});
						$(".item-title-hover").remove();
					}
						
				}
			
			}
			
			
		}
	
	}//End Portfolio
	
	
	
	
/*--------------------------------------------------
Function FitThumbScreen
---------------------------------------------------*/	
	
	function FitThumbScreen() {
		
		if( $('#itemsWrapper').length > 0 ){
		
			function createDemoEffect(options) {
			  const transitionEffect = new GridToFullscreenEffect(
				document.getElementById("app"),
				document.getElementById("itemsWrapper"),
				Object.assign(
				  {
					scrollContainer: window,
					onToFullscreenStart: ({ index }) => {},
					onToFullscreenFinish: ({ index }) => {},
					onToGridStart: ({ index }) => {},
					onToGridFinish: ({ index, lastIndex }) => {}
				  },
				  options
				)
			  );
			
			  return transitionEffect;
			}
	
			let currentIndex;
			const itemsWrapper = document.getElementById("itemsWrapper");
			const thumbs = [...itemsWrapper.querySelectorAll("img.grid__item-img:not(.grid__item-img--large)")];
			const transitionEffectDuration = 1.8;

			const transitionEffect = createDemoEffect({
				activation: { type: "closestCorner" },
				timing: {
					type: "sameEnd",
					sections: 0,
					duration: transitionEffectDuration
				},
				activation: {
					type: "mouse"
				},
				transformation: {
					type: "wavy",
					props: {
						seed: "217",
						frequency: 0.1,
						amplitude: 0.1
					}
				},
				onToFullscreenStart: ({ index }) => {
					currentIndex = index;
					thumbs[currentIndex].style.opacity = 1;
					
					
					TweenLite.to(itemsWrapper, .6, {
						ease: Power1.easeInOut,
						scale: 1,
						opacity:1,
						delay:0,
					});
					

					toggleFullview();
				},
				
				onToGridStart: ({ index }) => {
					TweenLite.to(itemsWrapper, 1, {
						ease: Power3.easeInOut,
						scale: 1,
						opacity: 1
					});

					toggleFullview();
				},
				
				onToGridFinish: ({ index, lastIndex }) => {
					thumbs[lastIndex].style.opacity = 1;
					
				},
				easings: {
					toFullscreen: Cubic.easeInOut,
					toGrid: Power3.easeInOut
				}
			});
			transitionEffect.init();
			
			if( $('#itemsWrapperLinks').length > 0 ){
				
				const itemsCaptions = document.getElementById("itemsWrapperLinks");
				const thumbsLink = [...itemsCaptions.querySelectorAll(".thumb-link")];
				for( let idxCaption = 0; idxCaption < thumbsLink.length; idxCaption++){
				
					thumbsLink[idxCaption].addEventListener( "mousedown", transitionEffect.createOnMouseDown( idxCaption ) );
				}
			}
			
			const toggleFullview = () => {
				if ( transitionEffect.isFullscreen ) {
					
					transitionEffect.toGrid();
				}
				else {
					
					
				}
			};

			// Preload all the images in the pageI
			imagesLoaded(document.querySelectorAll(".grid__item-img"), instance => {
				//https://www.techrepublic.com/article/preloading-and-the-javascript-image-object/
				

				// Make Images sets for creating the textures.
				let images = [];
				for (var i = 0, imageSet = {}; i < instance.elements.length; i++) {
					let image = {
						element: instance.elements[i],
						image: instance.images[i].isLoaded ? instance.images[i].img : null
					};
					if (i % 2 === 0) {
						imageSet = {};
						imageSet.small = image;
					}

					if (i % 2 === 1) {
						imageSet.large = image;
						images.push(imageSet);
					}
				}
				transitionEffect.createTextures(images);
			});
		
		}
		
		$('.item .grid__item-img').on('click', function() {
			$(this).parents('.item').addClass('above');
			$("body").addClass("load-project-thumb").addClass("show-loader");
			TweenMax.to('.item, #show-filters, #counter-wrap, .marquee-wrapper, footer, .item-caption-wrapper', 0.5,{opacity:0, ease:Power4.easeInOut});
			TweenMax.to('#ball', 0.2,{borderWidth: '4px', scale:0.5, borderColor:'#999999', backgroundColor:'transparent'});
			TweenMax.to('#ball-loader', 0.2,{borderWidth: '4px', top: 0, left: 0});
			$("#ball").removeClass("with-icon");
			$('#ball p').remove();
			$('#ball i').remove();						
			$(this).delay(1000).queue(function() {
				var link = $(".above").find('a');
				link.trigger('click');
			});		
		});
		
		
	}//End FitThumbScreen		

	

/*--------------------------------------------------
Function Shortcodes
---------------------------------------------------*/
	
	function Shortcodes() {

		// Accordion	  
		
		$('dd.accordion-content').slideUp(1).addClass('hide');		
		$('dl.accordion').on('click', 'dt', function() {
			$(this).addClass('accordion-active').next().slideDown(200).siblings('dd.accordion-content').slideUp(200).prev().removeClass('accordion-active');						
		});	
		$('dl.accordion').on('click', 'dt.accordion-active', function() {
			$(this).removeClass('accordion-active').siblings('dd.accordion-content').slideUp(200);
		});
		
		$(".flexnav").flexNav({ 'animationSpeed' : 250 });
		
		// Project Share	
		
		$("#share").jsSocials({
            showLabel: false,
    		showCount: false,
    		shares: ["facebook", "twitter", "pinterest"]
        });
		
		$('.jssocials-share').wrap( "<div class='parallax-wrap'><div class='parallax-element'></div></div>" );

		if($('.fa.fa-facebook').length > 0)
			$('.fa.fa-facebook').attr('class', $('.fa.fa-facebook').attr('class').replace('fa', 'fab'));

		if($('.fa.fa-twitter').length > 0)
			$('.fa.fa-twitter').attr('class', $('.fa.fa-twitter').attr('class').replace('fa', 'fab'));

		if($('.fa.fa-pinterest').length > 0)
			$('.fa.fa-pinterest').attr('class', $('.fa.fa-pinterest').attr('class').replace('fa', 'fab'));
	}//End Shortcodes
	

	
	
/*--------------------------------------------------
Function Sliders
---------------------------------------------------*/
	
	function Sliders() {
		
		setTimeout( function(){
			if( $('.content-slider').length > 0 ){
			
				var interleaveOffset = 0.4;
				
				var ContentSliderOptions = {				
					direction: 'horizontal',
					loop: true,
					slidesPerView: 1,
					paginationClickable: true,
					spaceBetween: 0,
					mousewheelControl: false,
					simulateTouch: false,
					speed: 1000,
					navigation: {
						nextEl: '.slider-button-next',
						prevEl: '.slider-button-prev',
					},
					on: {
						progress: function() {
							var swiper = this;
							for (var i = 0; i < swiper.slides.length; i++) {
								var slideProgress = swiper.slides[i].progress;
								var innerOffset = swiper.height * interleaveOffset;
								var innerTranslate = slideProgress * innerOffset;
								swiper.slides[i].querySelector("img,video").style.transform = "translate3d(" + innerTranslate + "px,0, 0)";
							}
						  
						},
						touchStart: function() {
							var swiper = this;
							for (var i = 0; i < swiper.slides.length; i++) {
								swiper.slides[i].style.transition = "";
							}
						},
						setTransition: function(speed) {
							var swiper = this;
							for (var i = 0; i < swiper.slides.length; i++) {
								swiper.slides[i].style.transition = speed + "ms";
								swiper.slides[i].querySelector("img,video").style.transition = speed + "ms";
							}   
						}
					}
			
				}
				
				var swiper = new Swiper(".content-slider", ContentSliderOptions);
				
				$(".slider-button-prev").mouseenter(function(e) {	
					TweenMax.to('#ball', 0.2,{borderWidth: '2px', scale: 1, borderColor:'#fff',});
					TweenMax.to('#ball-loader', 0.2,{borderWidth: '2px', top: 2, left: 2});
					$( "#ball" ).addClass("with-icon").append( '<i class="fa fa-chevron-left"></i>' );
				});
					
				$(".slider-button-prev").mouseleave(function(e) {
					TweenMax.to('#ball', 0.2,{borderWidth: '4px', scale:0.5, borderColor:'#999999',});
					TweenMax.to('#ball-loader', 0.2,{borderWidth: '4px', top: 0, left: 0});
					$("#ball").removeClass("with-icon");
					$('#ball i').remove();
				});
				
				$(".slider-button-next").mouseenter(function(e) {	
					TweenMax.to('#ball', 0.2,{borderWidth: '2px', scale: 1, borderColor:'#fff',});
					TweenMax.to('#ball-loader', 0.2,{borderWidth: '2px', top: 2, left: 2});
					$( "#ball" ).addClass("with-icon").append( '<i class="fa fa-chevron-right"></i>' );
				});
					
				$(".slider-button-next").mouseleave(function(e) {
					TweenMax.to('#ball', 0.2,{borderWidth: '4px', scale:0.5, borderColor:'#999999',});
					TweenMax.to('#ball-loader', 0.2,{borderWidth: '4px', top: 0, left: 0});
					$("#ball").removeClass("with-icon");
					$('#ball i').remove();
				});
				
			}
			
			
			if( $('.content-carousel').length > 0 ){
			
				var ContentCarouselOptions = {			
					direction: 'horizontal',
					simulateTouch: true,
					slidesPerView: 'auto',
					spaceBetween: 0,
					mousewheelControl: false,
					speed: 700,			
				}
				
				var swiper = new Swiper(".content-carousel", ContentCarouselOptions);
				
				$('.content-carousel').on('mousedown touchstart', function(event) {
					TweenMax.to('.swiper-slide img', 0.7,{scale: 0.9});
					$("body").addClass("drag-cursor");
				});
				
				$('body').on('mouseup touchend', function(event) {
					TweenMax.to('.swiper-slide img', 0.7,{scale:1});
					$("body").removeClass("drag-cursor");
				});
				
				$('.content-carousel').on('mouseenter mousemove', function() {	
					TweenMax.to('#ball', 0.2,{borderWidth: '2px', scale: 1, borderColor:'#fff',});
					$("body" ).addClass("scale-drag-x");
				});
					
				$('.content-carousel').on('mouseleave', function() {
					TweenMax.to('#ball', 0.2,{borderWidth: '4px', scale:0.5, borderColor:'#999999',});
					$("body").removeClass("scale-drag-x");	
				});
				
				$("body").mouseleave(function(e) {
					TweenMax.to('.swiper-slide img', 0.7,{scale:1});
					$("body").removeClass("scale-drag-x").removeClass("drag-cursor");
				});
			
			}
			
			
			if( $('.content-looped-carousel').length > 0 ){
			
				var ContentLoopedCarouselOptions = {			
					direction: 'horizontal',
					simulateTouch: true,
					slidesPerView: 3,
					spaceBetween: 100,
					breakpoints: {
						// when window width is >= 320px
						320: {
						  slidesPerView: 1,
						  spaceBetween: 20
						},
						// when window width is >= 480px
						480: {
						  slidesPerView: 2,
						  spaceBetween: 30
						},
						// when window width is >= 640px
						640: {
						  slidesPerView: 3,
						  spaceBetween: 40
						}
					  },
					centeredSlides: true,
					loop:true,
					mousewheelControl: false,
					speed: 700,			
				}
				
				var swiper = new Swiper(".content-looped-carousel", ContentLoopedCarouselOptions);
				
				$('.content-looped-carousel').on('mousedown touchstart', function(event) {
					TweenMax.to('.swiper-slide img', 0.7,{scale: 0.9});
					$("body").addClass("drag-cursor");
				});
				
				$('body').on('mouseup touchend', function(event) {
					TweenMax.to('.swiper-slide img', 0.7,{scale:1});
					$("body").removeClass("drag-cursor");
				});
				
				$('.content-looped-carousel').on('mouseenter mousemove', function() {	
					TweenMax.to('#ball', 0.2,{borderWidth: '2px', scale: 1, borderColor:'#fff',});
					$("body" ).addClass("scale-drag-x");
				});
					
				$('.content-looped-carousel').on('mouseleave', function() {
					TweenMax.to('#ball', 0.2,{borderWidth: '4px', scale:0.5, borderColor:'#999999',});
					$("body").removeClass("scale-drag-x").removeClass("drag-cursor");
				});
				
				$("body").mouseleave(function(e) {
					TweenMax.to('.swiper-slide img', 0.7,{scale:1});
					$("body").removeClass("scale-drag-x").removeClass("drag-cursor");
				});
			
			}
		
		} , 400 );
		
	}//End Sliders	
	
	
/*--------------------------------------------------
Function Justified Grid
---------------------------------------------------*/	
	
	function JustifiedGrid() {
		
		if( $('#justified-grid').length > 0 ){
		
			$('#justified-grid').justifiedGallery({
				rowHeight : 300,
				lastRow : 'nojustify',
				margins : 10
			});
		
		}
		
	}//End Justified Grid	
	
	
/*--------------------------------------------------
Function Lightbox
---------------------------------------------------*/
	
	function Lightbox() {
		
		$('.image-link').magnificPopup({
		  	type: 'image',
			mainClass: 'mfp-with-zoom',	
			gallery: {
			  enabled:true
			},		
			zoom: {
				enabled: true, 			
				duration: 300, 
				easing: 'ease-in-out', 
				opener: function(openerElement) {
					return openerElement.is('img') ? openerElement : openerElement.find('img');
				}
			}			
		});
		
		$(".image-link").mouseenter(function(e) {	
			TweenMax.to('#ball', 0.2,{borderWidth: '2px', scale: 1, borderColor:'#fff',});
			TweenMax.to('#ball-loader', 0.2,{borderWidth: '2px', top: 2, left: 2});
			$( "#ball" ).addClass("with-icon").append( '<i class="fa fa-plus"></i>' );
		});
			
		$(".image-link").mouseleave(function(e) {
			TweenMax.to('#ball', 0.2,{borderWidth: '4px', scale:0.5, borderColor:'#999999',});
			TweenMax.to('#ball-loader', 0.2,{borderWidth: '4px', top: 0, left: 0});
			$("#ball").removeClass("with-icon");
			$('#ball i').remove();
		});
			
	}//End Lightbox	
	
	
	
/*--------------------------------------------------
Function Contact Formular
---------------------------------------------------*/	
		
	function ContactForm() {	
	
		if( $('#contact-formular').length > 0 ){
			
			$('#contactform').submit(function(){
				var action = $(this).attr('action');
				$("#message").slideUp(750,function() {
					$('#message').hide();
					$('#submit').attr('disabled','disabled');		
					$.post(action, {
						name: $('#name').val(),
						email: $('#email').val(),
						comments: $('#comments').val()
					},
					function(data){
						document.getElementById('message').innerHTML = data;
						$('#message').slideDown('slow');
						$('#contactform img.loader').fadeOut('slow',function(){$(this).remove()});
						$('#submit').removeAttr('disabled');
						if(data.match('success') != null) $('#contactform').slideUp('slow');		
					}
				);		
				});		
				return false;		
			});		
		}
		
		
		
		

	}//End ContactForm
	
	
	
/*--------------------------------------------------
Function Page PlayVideo
---------------------------------------------------*/	


	function PlayVideo() {
	
		if( $('.video-wrapper').length > 0 ){
			
			
			$(".video-wrapper").mouseenter(function(e) {
				if ($(this).hasClass("play")) {
					$( "#ball" ).addClass("pause-movie")		
				}
				TweenMax.to('#ball', 0.2,{borderWidth: '2px', scale: 1, borderColor:'#fff',});
				$( "#ball" ).addClass("over-movie").append( '<i class="fa fa-play"></i><i class="fa fa-pause"></i>' );
			});
			
			$(".video-wrapper").mouseleave(function(e) {
				TweenMax.to('#ball', 0.2,{borderWidth: '4px', scale:0.5, borderColor:'#999999',});
				$("#ball").removeClass("over-movie").removeClass("pause-movie");
				$('#ball i').remove();
			});
			
			$(".video-wrapper .control").mouseenter(function(e) {	
				TweenMax.to('#ball', 0.2,{borderWidth: '20px', scale: 0});
			});
			
			$(".video-wrapper .control").mouseleave(function(e) {
				TweenMax.to('#ball', 0.2,{borderWidth: '2px', scale: 1, borderColor:'#fff',});
			});
			
			var videocenter = ($(window).height() - $('.video-cover').height()) / 2
					
			////////////////////////////////////////////////////// REFACTOR //////////////////////////////////////////////////////
			// plays or pause the video function of its current state
			var playpause = function( videoObj ) {
				
				if( videoObj[0] != null ){
					if(videoObj[0].paused || videoObj[0].ended) {
						
						videoObj.parent().addClass('play');
						videoObj[0].play();
					}
					else {
						
						videoObj.parent().removeClass('play');
						videoObj[0].pause();
					}
				}
			};
			
			//Time format converter - 00:00
			var timeFormat = function(seconds){
				var m = Math.floor(seconds/60)<10 ? "0"+Math.floor(seconds/60) : Math.floor(seconds/60);
				var s = Math.floor(seconds-(m*60))<10 ? "0"+Math.floor(seconds-(m*60)) : Math.floor(seconds-(m*60));
				return m+":"+s;
			};
			
			// Events
			// click to video cover - will start the video
			$('.video-wrapper').on('click', function() {
				
				$('html,body').animate({scrollTop: $(this).offset().top - videocenter},390);		
				// hide the video cover in order to start playing
				$(this).find('.video-cover').addClass('hidden');
				
				$( "#ball" ).toggleClass("pause-movie");
				
				// pause first the other videos
				var current_wrapper = $(this);
				$('#main-page-content').find('.video-wrapper').each(function() {
					
					if( !current_wrapper.is( $(this) ) ){
						
						$(this).removeClass('play');
						$(this).find('video').each(function() {
							
							if( !$(this).get(0).paused && !$(this).get(0).ended ) {
								
								$(this).get(0).pause();
							}
						});
					}
					
				});
				
				// trigger the click for the inner video
				$(this).find('video').each(function() {

					playpause( $(this) );
				});

			});
			
			//fullscreen button clicked
			$('.btnFS').on('click', function( e ) {
					
				var parent_wrapper	= $(this).closest('.video-wrapper');
				var video_object 		= parent_wrapper.find('video');
					
				if($.isFunction(video_object[0].webkitEnterFullscreen)) {
					video_object[0].webkitEnterFullscreen();
				}	
				else if ($.isFunction(video_object[0].mozRequestFullScreen)) {
					video_object[0].mozRequestFullScreen();
				}
				else {
					alert('Your browsers doesn\'t support fullscreen');
				}
				
				// prevent video wrapper div responding the event
				e.stopPropagation();
				
			});
				
			//sound button clicked
			$('.sound').on('click', function( e ) {
					
				var parent_wrapper	= $(this).closest('.video-wrapper');
				var video_object 		= parent_wrapper.find('video');
					
				video_object[0].muted = !video_object[0].muted;
				$(this).toggleClass('muted');
				if(video_object[0].muted) {
					parent_wrapper.find('.volumeBar').css('width',0);
				}
				else{
					parent_wrapper.find('.volumeBar').css('width', video_object[0].volume*100+'%');
				}
				
				// prevent video wrapper div responding the event
				e.stopPropagation();
			});
			
			//progress bar (video timebar) clicked
			$('.progress').on('click', function( e ) {
				
				var parent_wrapper	= $(this).closest('.video-wrapper');
				var video_object 		= parent_wrapper.find('video');
									
				// calculate click position
				// and update video current time
				// as well as progress bar
				var maxduration 	= video_object[0].duration;
				var position 			= e.pageX - $(this).offset().left;
				var percentage 	= 100 * position / $(this).width();
				if(percentage > 100) {
					
					percentage = 100;
				}
				if(percentage < 0) {
					
					percentage = 0;
				}
				$('.timeBar').css('width', percentage+'%');	
				video_object[0].currentTime = maxduration * percentage / 100;
				
				// prevent video wrapper div responding the event
				e.stopPropagation();
			});
			
			$('#main-page-content').find('video').each(function() {
			
				var video = $(this);
				var video_wrapper = $(this).parent();
				
				//remove default control when JS loaded
				video[0].removeAttribute("controls");
				video_wrapper.find('.control').fadeIn(500);
				video_wrapper.find('.caption').fadeIn(500);
			 
				//before everything get started and we have the info about the video such as duration
				video.on('loadedmetadata', function() {
					
					var video_object = $(this);
					var parent_wrapper = $(this).parent();
					//set video properties
					parent_wrapper.find('.current').text(timeFormat(0));
					parent_wrapper.find('.duration').text(timeFormat(video[0].duration));
					
				});
				
				//display current video buffered progress
				video.on('progress', function() {
					
					var video_object 		= $(this);
					var parent_wrapper 	= $(this).parent();
					var maxduration 		= video_object [0].duration;
					
					if (maxduration > 0) {
					  for (var i = 0; i < video_object [0].buffered.length; i++) {
							if (video_object [0].buffered.start(video_object [0].buffered.length - 1 - i) <video_object [0].currentTime) {
								var perc = (video_object [0].buffered.end(video_object [0].buffered.length - 1 - i) / maxduration) * 100 + "%";
								parent_wrapper.find('.bufferBar').css('width',perc+'%');
								break;
							}
						}
					}
					
				});
				
				//display current video play time
				video.on('timeupdate', function() {
					
					var parent_wrapper 	= $(this).parent();
					var currentPos 			= $(this).get(0).currentTime;
					var maxduration 		= $(this).get(0).duration;
					var perc 					= 100 * currentPos / maxduration;
					parent_wrapper.find('.timeBar').css('width',perc+'%');	
					parent_wrapper.find('.current').text(timeFormat(currentPos));	
				});
				
				//video screen and play button clicked
				video.on('click', function() { 
					
					playpause( $(this) ); 
				});
				
				//video canplay event
				video.on('canplay', function() {
					
					var parent_wrapper = $(this).parent();
					parent_wrapper.find('.loading').fadeOut(100); //?
				});
				
				//video canplaythrough event
				//solve Chrome cache issue
				var completeloaded = false;
				video.on('canplaythrough', function() {
					
					completeloaded = true;
				});
				
				//video ended event
				video.on('ended', function() {		
					
					$(this).get(0).pause();
					$(this).parent().removeClass("play");
					$( "#ball" ).toggleClass("pause-movie");
				});
			
				//video seeking event
				video.on('seeking', function() {
					
					//if video fully loaded, ignore loading screen
					if(!completeloaded) { 
						var parent_wrapper = $(this).parent();
						parent_wrapper.find('.loading').fadeIn(200); //?
					}	
				});
				
				//video seeked event
				video.on('seeked', function() { });
				
				//video waiting for more data event
				video.on('waiting', function() {
					
					var parent_wrapper = $(this).parent();
					parent_wrapper.find('.loading').fadeIn(200); //?
				});
				
			});
			
		}
		
	}// End PlayVideo
	
	
/*--------------------------------------------------
Function Contact Map
---------------------------------------------------*/	
		
	function ContactMap() {	
	
		if( jQuery('#map_canvas').length > 0 ){					
			var latlng = new google.maps.LatLng(43.270441,6.640888);
			var settings = {
				zoom: 14,
				center: new google.maps.LatLng(43.270441,6.640888),
				mapTypeControl: false,
				scrollwheel: false,
				draggable: true,
				panControl:false,
				scaleControl: false,
				zoomControl: false,
				streetViewControl:false,
				navigationControl: false};			
				var newstyle = [
				{
					"featureType": "all",
					"elementType": "labels.text.fill",
					"stylers": [
						{
							"saturation": 36
						},
						{
							"color": "#000000"
						},
						{
							"lightness": 40
						}
					]
				},
				{
					"featureType": "all",
					"elementType": "labels.text.stroke",
					"stylers": [
						{
							"visibility": "on"
						},
						{
							"color": "#000000"
						},
						{
							"lightness": 16
						}
					]
				},
				{
					"featureType": "all",
					"elementType": "labels.icon",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				},
				{
					"featureType": "administrative",
					"elementType": "geometry.fill",
					"stylers": [
						{
							"color": "#000000"
						},
						{
							"lightness": 20
						}
					]
				},
				{
					"featureType": "administrative",
					"elementType": "geometry.stroke",
					"stylers": [
						{
							"color": "#000000"
						},
						{
							"lightness": 17
						},
						{
							"weight": 1.2
						}
					]
				},
				{
					"featureType": "landscape",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#000000"
						},
						{
							"lightness": 20
						}
					]
				},
				{
					"featureType": "poi",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#000000"
						},
						{
							"lightness": 21
						}
					]
				},
				{
					"featureType": "road.highway",
					"elementType": "geometry.fill",
					"stylers": [
						{
							"color": "#000000"
						},
						{
							"lightness": 17
						}
					]
				},
				{
					"featureType": "road.highway",
					"elementType": "geometry.stroke",
					"stylers": [
						{
							"color": "#000000"
						},
						{
							"lightness": 29
						},
						{
							"weight": 0.2
						}
					]
				},
				{
					"featureType": "road.arterial",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#000000"
						},
						{
							"lightness": 18
						}
					]
				},
				{
					"featureType": "road.local",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#000000"
						},
						{
							"lightness": 16
						}
					]
				},
				{
					"featureType": "transit",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#000000"
						},
						{
							"lightness": 19
						}
					]
				},
				{
					"featureType": "water",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#000000"
						},
						{
							"lightness": 17
						}
					]
				}
			];
			var mapOptions = {
				styles: newstyle,
				mapTypeControlOptions: {
					 mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'holver']
				}
			};
			var map = new google.maps.Map(document.getElementById("map_canvas"), settings);	
			var mapType = new google.maps.StyledMapType(newstyle, { name:"Grayscale" });    
				map.mapTypes.set('holver', mapType);
				map.setMapTypeId('holver');
						
			
			google.maps.event.addDomListener(window, "resize", function() {
				var center = map.getCenter();
				google.maps.event.trigger(map, "resize");
				map.setCenter(center);
			});	
			var contentString = '<div id="content-map-marker" style="text-align:center; padding-top:10px; padding-left:10px">'+
				'<div id="siteNotice">'+
				'</div>'+
				'<h4 id="firstHeading" class="firstHeading" style="color:#000!important; font-weight:600; margin-bottom:0px;">Hello Friend!</h4>'+
				'<div id="bodyContent">'+
				'<p color:#999; font-size:14px; margin-bottom:10px">Here we are. Come to drink a coffee!</p>'+
				'</div>'+
				'</div>';
			var infowindow = new google.maps.InfoWindow({
				content: contentString
			});	
			var companyImage = new google.maps.MarkerImage('images/marker.png',
				new google.maps.Size(58,63),<!-- Width and height of the marker -->
				new google.maps.Point(0,0),
				new google.maps.Point(35,20)
			);
			var companyPos = new google.maps.LatLng(43.270441,6.640888);	
			var companyMarker = new google.maps.Marker({
				position: companyPos,
				map: map,
				icon: companyImage,               
				title:"Our Office",
				zIndex: 3});	
			google.maps.event.addListener(companyMarker, 'click', function() {
				infowindow.open(map,companyMarker);
			});	
		}
		
		return false
	
	}//End ContactMap
	
	
/*--------------------------------------------------
Function Load Via Ajax
---------------------------------------------------*/	
		
	function LoadViaAjax() {		
		
		FirstLoad();
		ScrollEffects();
		Showcase();
		ShowcaseWebgl();
		QuickMenu();
		LazyLoad();				
		Portfolio();
		FitThumbScreen();	
		Shortcodes();
		Sliders();
		JustifiedGrid();
		Lightbox();
		ContactForm();
		PlayVideo();
		ContactMap();
	
	}//End Load Via Ajax
	
	
					
	
		