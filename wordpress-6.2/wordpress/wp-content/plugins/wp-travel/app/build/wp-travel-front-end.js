(()=>{jQuery((function(e){function t(){var t=0;e(".wp-travel-feature-slide-content").css({height:"auto"}),window.innerWidth>992&&(e(".wp-travel-feature-slide-content").each((function(){e(this).height()>t&&(t=e(this).height())})),t>0&&(e(".trip-headline-wrapper .left-plot").height(t),e(".trip-headline-wrapper .right-plot").height(t)))}function a(t){for(var a=0;a<t;a++)e(".rate_label:eq( "+a+" )").addClass("fas").removeClass("far");for(j=4;j>=a;j--)e(".rate_label:eq( "+j+" )").addClass("far")}if(e(".wp-travel-error").length>0&&e("html, body").animate({scrollTop:e(".wp-travel-error").offset().top-200},1e3),t(),e(".wp-travel-gallery").magnificPopup({delegate:"a",type:"image",gallery:{enabled:!0}}),e(".wp-travel-send-enquiries").magnificPopup({type:"inline",preloader:!1,focus:"#wp-travel-enquiry-name",midClick:!0,callbacks:{open:function(){e("#wp-travel-enquiries").trigger("reset").parsley().reset()}}}),e(".wti-send-enquiries").magnificPopup({type:"inline",preloader:!1,focus:"#wp-travel-enquiry-name",midClick:!0,callbacks:{open:function(){e("#wp-travel-enquiries").trigger("reset").parsley().reset()}}}),e("#wp-travel-tab-wrapper").easyResponsiveTabs({}),e(".rate_label").hover((function(){var t=e(this).attr("data-id");e(".rate_label").removeClass("fas"),a(t)}),(function(){var t=e("#wp_travel_rate_val").val();e(".rate_label").removeClass("fas").addClass("far"),t>0&&a(t)})),e(".rate_label").click((function(t){t.preventDefault(),e("#wp_travel_rate_val").val(e(this).attr("data-id"))})),e(document).on("click",".wp-travel-count-info",(function(t){t.preventDefault(),e(".wp-travel-review").trigger("click")})),e(document).on("click",".top-view-gallery",(function(t){t.preventDefault(),e(".wp-travel-tab-gallery-contnet").trigger("click")})),e(document).on("click",".wp-travel-count-info, .top-view-gallery",(function(t){t.preventDefault();var a=e(window).width(),i=e(".wp-travel-tab-wrapper").offset().top;a<767&&(i=e(".resp-accordion.resp-tab-active").offset().top),e("html, body").animate({scrollTop:i},1200)})),e(window).on("resize",(function(e){t()})),e(".open-all-link").click((function(t){t.preventDefault(),e(".panel-title a").removeClass("collapsed").attr({"aria-expanded":"true"}),e(".panel-collapse").addClass("in"),e(".close-all-link").show(),e(".panel-collapse").css("height","auto")})),e(".close-all-link").click((function(t){t.preventDefault(),e(".panel-title a").addClass("collapsed").attr({"aria-expanded":"false"}),e(".panel-collapse").removeClass("in"),e(".open-all-link").show()})),jQuery(".wp-travel-booking-row").hide(),jQuery(".show-booking-row").click((function(t){t.preventDefault();var a=e(this).closest("li.availabily-content");jQuery(this).parent(".action").siblings(".wp-travel-booking-row").toggle("fast",(function(){a.toggleClass("opened")})).addClass("animate"),jQuery(this).text((function(e,t){return t===wp_travel.strings.bookings.select?wp_travel.strings.bookings.close:wp_travel.strings.bookings.select}))})),jQuery(".wp-travel-booking-row-fd").hide(),jQuery(".show-booking-row-fd").click((function(e){e.preventDefault(),jQuery(this).parent(".action").parent(".trip_list_by_fixed_departure_dates_booking").siblings(".wp-travel-booking-row-fd").toggle("fast").addClass("animate"),jQuery(this).text((function(e,t){return t===wp_travel.strings.bookings.select?wp_travel.strings.bookings.close:wp_travel.strings.bookings.select}))})),jQuery(".wp-travel-pricing-dates").each((function(){var e=jQuery(this).data("available-dates");e?jQuery(this).wpt_datepicker({language:wp_travel.locale,autoClose:!0,minDate:new Date,onRenderCell:function(t,a){if("day"==a)return e=e.map((function(e){return new Date(e).toLocaleDateString("en-US")})),isDisabled=!e.includes(t.toLocaleDateString("en-US")),{disabled:isDisabled}}}):jQuery(this).wpt_datepicker({language:wp_travel.locale,minDate:new Date,autoClose:!0})})),"undefined"!=typeof moment&&(e(".wp-travel-pricing-days-night").wpt_datepicker({language:wp_travel.locale,minDate:new Date,autoClose:!0,onSelect:function(t,a,i){if(a){var s=i.$el,r=e(s).closest("form").attr("id"),l="arrival_date"===e(s).attr("name")?e("#"+r+" input[name=departure_date]"):e("#"+r+" input[name=arrival_date]"),n=parseInt(s.data("totaldays"));if(n<1)return void l.val(t);var o=moment(a);"arrival_date"===e(s).attr("name")?someFormattedDate=o.add(n,"days").format("YYYY-MM-DD"):someFormattedDate=o.subtract(n,"days").format("YYYY-MM-DD"),l.wpt_datepicker().data("datepicker").date=new Date(someFormattedDate),l.val(someFormattedDate)}}}),e("input[name=departure_date]").each((function(){var t=e(this).wpt_datepicker().data("datepicker");if(void 0!==t){var a=t.$el.data("totaldays");a>0&&(someFormattedDate=moment().add(a,"days").format("YYYY-MM-DD"),t.update("minDate",new Date(someFormattedDate)))}}))),"function"==typeof parsley&&e("input").parsley(),e(".login-page .message a").click((function(t){t.preventDefault(),e(".login-page form.login-form,.login-page form.register-form").animate({height:"toggle",opacity:"toggle"},"slow")})),e(".dashboard-tab").easyResponsiveTabs({type:"vertical",width:"auto",fit:!0,tabidentify:"ver_1",activetab_bg:"#fff",inactive_bg:"#F5F5F5",active_border_color:"#c1c1c1",active_content_border_color:"#5AB1D0"}),window.location.hash){var i=window.location.hash.substring(1);if(e("ul.resp-tabs-list > li#"+i).hasClass("wp-travel-ert")&&(lis=e("ul.resp-tabs-list > li"),lis.removeClass("resp-tab-active"),e("ul.resp-tabs-list > li#"+i).addClass("resp-tab-active"),tab_cont=e(".tab-list-content"),tab_cont.removeClass("resp-tab-content-active").hide(),e("#"+i+".tab-list-content, #wp-travel-tab-content-"+i+".tab-list-content").addClass("resp-tab-content-active").show()),e(".wp-travel-tab-wrapper").length){var s=e(window).width(),r=e(".wp-travel-tab-wrapper").offset().top;s<767&&(r=e(".resp-accordion.resp-tab-active").offset().top),e("html, body").animate({scrollTop:r},1200)}}e(".dashtab-nav").click((function(t){t.preventDefault();var a=e(this).data("tabtitle");e("#"+a).click(),e(this).hasClass("change-password")&&(e("#wp-travel-dsh-change-pass-switch").is(":checked")||e("#wp-travel-dsh-change-pass-switch").trigger("click"))})),e("#wp-travel-dsh-change-pass-switch").change((function(t){e("#wp-travel-dsh-change-pass").slideToggle()})),e(".wp_travel_tour_extras_toggler").click((function(){e(this).parents(".wp_travel_tour_extras_option_single_content").children(".wp_travel_tour_extras_option_bottom").slideToggle()})),e(".wp-travel-magnific-popup").magnificPopup({type:"inline"}),e(".wp-travel-payment-receipt").magnificPopup({type:"image"}),e(document).on("click",".paxpicker .icon-users",(function(t){e(this).closest(".paxpicker").hasClass("is-active")?e(this).closest(".paxpicker").removeClass("is-active"):e(this).closest(".paxpicker").addClass("is-active")})),e(".add-to-cart-btn").on("click",(function(){var t=e(this).closest("form").find(".pricing-categories");parseInt(t[0].dataset.selectedPax)<parseInt(t[0].dataset.min)?(alert(wp_travel.strings.alert.atleast_min_pax_alert),e(this).attr("disabled","disabled").css({opacity:".5"})):e(this).removeAttr("disabled").removeAttr("style")})),e(document).on("click",".pax-picker-plus, .pax-picker-minus",(function(t){t.preventDefault();var a,i,s,r=e(this).closest(".pricing-categories"),l=r.attr("id"),n=e("#"+r.data("parent-form-id")),o=parseInt(document.getElementById(l).dataset.availablePax),c=parseInt(document.getElementById(l).dataset.selectedPax),p=(parseInt(document.getElementById(l).dataset.max),parseInt(document.getElementById(l).dataset.min));i=e(a=this).siblings(".paxpicker-input"),s=i.val()?parseInt(i.val()):0,e("#"+l).find(".available-seats").find("span").text((function(){var t=parseInt(jQuery(i).attr("step"));return e(a).hasClass("pax-picker-plus")&&o>0?(o-=t,c+=t,s+=t,document.getElementById(l).dataset.availablePax=o,document.getElementById(l).dataset.selectedPax=c,i.removeAttr("disabled").val(s).trigger("change"),o):e(a).hasClass("pax-picker-minus")&&s>0?(o+=t,c-=t,s-=t,document.getElementById(l).dataset.availablePax=o,document.getElementById(l).dataset.selectedPax=c,i.removeAttr("disabled").val(s).trigger("change"),o):void 0})),c<p&&n.find("input[type=submit]").attr("disabled","disabled").css({opacity:".5"})||n.find("input[type=submit]").removeAttr("disabled").removeAttr("style");var d="",v="";e("#"+l+" .paxpicker-input").each((function(){if(e(this).val()>0){var t=e(this).data("type"),a=e(this).data("custom");"custom"===t&&""!=a&&(t=a);var i=e(this).data("category-id");d+=", "+t+" x "+e(this).val(),v+='<input type="hidden" name="pax['+i+']" value="'+e(this).val()+'" >'}})),d||(d=e("#"+l).siblings(".summary").find(".participants-summary-container").data("default")),d=d.replace(/^,|,$/g,""),e("#"+l).siblings(".summary").find(".participants-summary-container").val(d),e("#"+l+" .pricing-input").html(v)})),e(".scroll-spy-button").each((function(){e(this).on("click",(function(){var t=e(this).data("scroll");return e(".scroll-spy-button").removeClass("active"),e("html, body").animate({scrollTop:e(t).offset().top-70},{duration:500}),e(this).addClass("active"),!1}))})),e(".wti__selector-item.active").find(".wti__selector-content-wrapper").slideDown(),e(".wti__selector-heading").on("click",(function(){e(this).parents(".wti__selector-item").toggleClass("active"),e(this).siblings(".wti__selector-content-wrapper").stop().slideToggle()})),e(window).on("scroll",(function(){var t=e(window).scrollTop(),a=e(".scroll-spy-button");e(".wti__tab-content-wrapper").each((function(){var i=e(this).attr("id"),s=e(this).offset().top-100,r=e(this).height();t>=s&&t<s+r&&(a.removeClass("active"),e("#scrollspy-buttons").find('[data-scroll="#'+i+'"]').addClass("active"))}))})),e(document).ready((function(e){e(".wti__advance-gallery-item-list").magnificPopup({delegate:".gallery-item  ",type:"image",gallery:{enabled:!0}})})),e(document).ready((function(){e(".accordion-panel-heading").click((function(){e(this).next().slideToggle(500),e(this).toggleClass("active"),e(this).parent().toggleClass("accordion-active")}))})),jQuery("#wp-travel-tab-wrapper .resp-tabs-list").wrap('<div id="slider-tab" />');var l={dots:!1,infinite:!1,speed:300,slidesToShow:6,centerMode:!1,arrows:!0,variableWidth:!0,rows:0,cssEase:"linear",slidesToScroll:1};jQuery("body").hasClass("rtl")&&(l.rtl=!0),jQuery("#wp-travel-tab-wrapper .resp-tabs-list").slick(l)}));var e=document.getElementById("wp-travel-view-mode-lists");if(e&&e.length>0)for(var t=e.getElementsByClassName("wp-travel-view-mode"),a=0;a<t.length;a++)t[a].addEventListener("click",(function(){var e=document.getElementsByClassName("active-mode");e[0].className=e[0].className.replace(" active-mode",""),this.className+=" active-mode"}))})();