jQuery(document).ready(function(n){n("section").on("click","button.btn",function(){var e=n(this).parent().index();n("header").fadeIn(),n(".active-section").removeClass("active-section"),n("section").eq(e).addClass("active-section"),n("nav li").eq(e-1).addClass("active-nav")}),n("nav").on("click","li.active-nav",function(){var e=n(this).index();console.log("nav click"+e)}),n(".measurements").on("click","span",function(){n(".m-active").removeClass("m-active"),n(this).toggleClass("m-active")})});