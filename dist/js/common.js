!function(e){e.fn.menumaker=function(t){var n=e(this),i=e.extend({title:"Menu",format:"dropdown",sticky:!1},t);return this.each(function(){return n.prepend('<div id="menu-button">'+i.title+"</div>"),e(this).find("#menu-button").on("click",function(){e(this).toggleClass("menu-opened");var t=e(this).next("ul");t.hasClass("open")?t.hide().removeClass("open"):(t.show().addClass("open"),"dropdown"===i.format&&t.find("ul").show())}),n.find("li ul").parent().addClass("parent"),multiTg=function(){n.find(".parent").prepend('<span class="submenu-button"></span>'),n.find(".submenu-button").on("click",function(){e(this).toggleClass("submenu-opened"),e(this).siblings("ul").hasClass("open")?e(this).siblings("ul").removeClass("open").hide():e(this).siblings("ul").addClass("open").show()})},"multitoggle"===i.format?multiTg():n.addClass("dropdown"),i.sticky===!0&&n.css("position","fixed"),resizeFix=function(){var t=document.documentElement.clientWidth;e(t)>768&&n.find("ul").show(),e(t)<=768&&n.find("ul").hide().removeClass("open")},resizeFix(),e(document.documentElement.clientWidth).on("resize",resizeFix)})}}(jQuery),function(e){e(document).ready(function(){e(document).ready(function(){e("#hmenu").menumaker({title:"Menu",format:"multitoggle"}),e("#hmenu").prepend("<div id='menu-line'></div>");var t,n,i,s,a=!1,o=0,u=e("#hmenu #menu-line");e("#hmenu > ul > li").each(function(){e(this).hasClass("active")&&(t=e(this),a=!0)}),a===!1&&(t=e("#hmenu > ul > li").first()),s=n=t.width(),i=o=t.position().left,u.css("width",n),u.css("left",o),e("#hmenu > ul > li").hover(function(){t=e(this),n=t.width(),o=t.position().left,u.css("width",n),u.css("left",o)},function(){u.css("left",i),u.css("width",s)})})})}(jQuery),$(function(){$(".tab__control-link").on("click",function(e){e.preventDefault();var t=$(this).closest(".tab__controls-item"),n=$(".tab__item"),i=t.data("class");n.filter(".tab__item_"+i).add(t).addClass("active").siblings().removeClass("active")})}),$(function(){$(".tab__control-link").on("click",function(e){e.preventDefault();var t=$(this).closest(".tab__controls-item"),n=$(".tab__item"),i=t.data("class");n.filter(".tab__item_"+i).add(t).addClass("active").siblings().removeClass("active")})}),$(document).ready(function(){$("#top__slider-01").bxSlider({mode:"fade",buildPager:function(e){switch(e){case 0:return"сайт-визитка";case 1:return"одностраничный сайт";case 2:return"корпоративный сайт";case 3:return"сайт-каталог";case 4:return"интернет-магазин"}}})}),$(document).ready(function(){$("#top__slider-02").bxSlider({mode:"fade",auto:!0,buildPager:function(e){switch(e){case 0:return"SEO";case 1:return"одностраничный сайт";case 2:return"корпоративный сайт";case 3:return"сайт-каталог";case 4:return"интернет-магазин"}}})}),$(function(){$(".rocket-planet").on("mouseover",function(e){e.preventDefault();var t=$(this).closest(".rocket-planet"),n=$(".rocket__item"),i=t.data("class");n.filter(".rocket__item_"+i).add(t).addClass("active").siblings().removeClass("active")})}),$(document).ready(function(){$("#aboutus__slider").bxSlider({mode:"fade",pager:!1,auto:!0})}),$(".pagination__item").click(function(e){e.preventDefault(),$(".pagination__item").removeClass("active"),$(this).addClass("active")});