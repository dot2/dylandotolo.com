$(function(){$(".element").typed({strings:["Developer","Designer","Wizard"],typeSpeed:60,backDelay:2e3,loop:!1})}),jQuery(document).ready(function(){$(".display a").click(function(){$("body").css("overflow-y","hidden"),$(this.hash).addClass("show")}),$(".close .fa").click(function(){$(".work").removeClass("show"),$("body").css("overflow-y","scroll")}),$(".top .fa").click(function(){return $(".work").animate({scrollTop:0},"slow"),!1})});