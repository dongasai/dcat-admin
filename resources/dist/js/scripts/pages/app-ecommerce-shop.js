$(document).ready(function(){"use strict";var t="ltr";"rtl"==$("html").data("textdirection")&&(t="rtl");var e=$(".sidebar-shop"),s=$(".shop-content-overlay"),i=$(".shop-sidebar-toggler"),o=$(".price-options"),n=$(".grid-view-btn"),a=$(".list-view-btn"),r=$("#ecommerce-products"),l=$(".cart"),c=$(".wishlist");i.on("click",function(){e.toggleClass("show"),s.toggleClass("show")}),$(".shop-content-overlay, .sidebar-close-icon").on("click",function(){e.removeClass("show"),s.removeClass("show")});var d=document.getElementById("price-slider");d&&noUiSlider.create(d,{start:[51,5e3],direction:t,connect:!0,tooltips:[!0,!0],format:wNumb({decimals:0}),range:{min:51,max:5e3}}),o.length>0&&o.select2({minimumResultsForSearch:-1,dropdownAutoWidth:!0,width:"auto"}),n.on("click",function(){r.removeClass("list-view").addClass("grid-view"),a.removeClass("active"),n.addClass("active")}),a.on("click",function(){r.removeClass("grid-view").addClass("list-view"),n.removeClass("active"),a.addClass("active")}),l.on("click",function(){var t=$(this),e=t.find(".add-to-cart"),s=t.find(".view-in-cart");if(e.is(":visible"))e.addClass("d-none"),s.addClass("d-inline-block");else{var i=s.attr("href");window.location.href=i}}),$(".view-in-cart").on("click",function(t){t.preventDefault()}),c.on("click",function(){var t=$(this);t.find("i").toggleClass("fa-heart-o fa-heart"),t.toggleClass("added")});var v=$(".checkout-tab-steps"),h=v.show();v.length>0&&($(v).steps({headerTag:"h6",bodyTag:"fieldset",transitionEffect:"fade",titleTemplate:'<span class="step">#index#</span> #title#',enablePagination:!1,onStepChanging:function(t,e,s){return e>s||(e<s&&(h.find(".body:eq("+s+") label.error").remove(),h.find(".body:eq("+s+") .error").removeClass("error")),1===e&&Number($(".form-control.required").val().length)<1&&toastr.warning("Error","Please Enter Valid Details",{positionClass:"toast-bottom-right"}),h.validate().settings.ignore=":disabled,:hidden",h.valid())}}),$(".place-order, .delivery-address").on("click",function(){$(".checkout-tab-steps").steps("next",{})}),$(".btn-cvv").on("click",function(){3==$(".input-cvv").val().length?toastr.success("Success","Payment received Successfully",{positionClass:"toast-bottom-right"}):toastr.warning("Error","Please Enter Valid Details",{positionClass:"toast-bottom-right"})}));var m=$(".quantity-counter");m.length>0&&m.TouchSpin({min:1,max:10}).on("touchspin.on.startdownspin",function(){var t=$(this);$(".bootstrap-touchspin-up").removeClass("disabled-max-min"),1==t.val()&&$(this).siblings().find(".bootstrap-touchspin-down").addClass("disabled-max-min")}).on("touchspin.on.startupspin",function(){var t=$(this);$(".bootstrap-touchspin-down").removeClass("disabled-max-min"),10==t.val()&&$(this).siblings().find(".bootstrap-touchspin-up").addClass("disabled-max-min")}),$(".remove-wishlist , .move-cart").on("click",function(){$(this).closest(".ecommerce-card").remove()})}),$(window).on("resize",function(){$(window).outerWidth()>=991&&($(".sidebar-shop").removeClass("show"),$(".shop-content-overlay").removeClass("show"))});
