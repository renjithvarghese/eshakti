import 'bootstrap/js/src/collapse';
import $ from 'jquery';
import 'parsleyjs';
import './components/cardvalidate';

$(document).ready(function(){
    $('.suggest-content__cancel').on('click', function(e){
        e.preventDefault();
        $(this).parents('.cart-panel__suggest').find('textarea').val('');
        $(this).parents('.cart-panel__suggest').find('.collapse').collapse('hide');
    });

    $('.checkout-panel__promo input[type="text"]').on('focus input', function(){
        if($(this).val() == "") {
            $('.checkout-panel__couponwrap').addClass('show-box');
            $('.checkout-panel__scroll').addClass('no-scroll');
            if($(this).parents('.checkout-panel__promo').find('.overlay').length <= 0) {
                $(this).parents('.checkout-panel__promo').append("<div class='overlay'></div>");
            }
        }
        else {
            $('.checkout-panel__couponwrap').removeClass('show-box');
            $('.checkout-panel__scroll').removeClass('no-scroll');
            $('.checkout-panel__promo .overlay').remove();
        }
    });

    $(document).on('click', '.checkout-panel__promo .overlay', function(){
        $('.checkout-panel__couponwrap').removeClass('show-box');
        $('.checkout-panel__scroll').removeClass('no-scroll');
        $('.checkout-panel__promo .overlay').remove();
    });

    $(window).on('scroll', function() {
        if(($(this).scrollTop() + $('header').outerHeight() + 15) > $('.checkout-content').offset().top) {
            $('.checkout-panel').addClass('sticky');
        }
        else {
            $('.checkout-panel').removeClass('sticky');
        }

        var topVal = parseInt($('.checkout-panel').css('top').replace('px', ''));

        if(($(this).scrollTop() + topVal + $('.checkout-panel').outerHeight()) > ($('.cart-content__wrap').offset().top + $('.cart-content__wrap').outerHeight()) && ($(this).scrollTop() + $(this).outerHeight()) > ($('.cart-content__wrap').offset().top + $('.cart-content__wrap').outerHeight())) {
            $('.checkout-panel').addClass('stick-bottom');
        }

        else {
            $('.checkout-panel').removeClass('stick-bottom');
        }

        if($(this).scrollTop() + $(this).outerHeight() > $('.checkout-panel').offset().top + $('.checkout-panel').outerHeight()) {
            $('.checkout-panel .cart-panel__total').addClass('not-fixed');
        }
        else {
            $('.checkout-panel .cart-panel__total').removeClass('not-fixed');
        }
    });

    $('.checkout-panel__couponwrap input').change(function(){
        var coupVal = $(this).val();
        if ($(this).is(':checked')) {
            var coupPrice = $(this).attr('data-price');
            var coupType = $(this).attr('data-type');
            if(coupType == 'Gift Coupon') {
                $('.checkout-panel__coupontags span[data-type="Gift Coupon"]').remove();
            }
            $('.checkout-panel__coupontags').append('<span data-val="'+coupVal+'" data-type="'+coupType+'"> '+ coupVal + ' - ' + coupPrice + ' ('+ coupType +') ' + '<i>&times;</i></span>');
        }
        else {
            $('.checkout-panel__coupontags span[data-val=' + coupVal +']').remove();
        }
    });

    $(document).on('click', '.checkout-panel__coupontags span i', function(){
        $(this).parents('span').remove();
        var spanVal = $(this).parents('span').attr('data-val');
        $("input[value=" + spanVal +"]").prop("checked",false);
    });
    // $(".address-checkbox").on("click",function(){
    //     if($(this).is(":not(:checked)")){
    //         $(this).parent(".label-container").siblings(".change-address-form").css("display","block")
    //     }
    //     else{
    //         $(this).parent(".label-container").siblings(".change-address-form").css("display","none")

    //     }
    // })
    // $(".select-btn").change(function(){
    //     $(this).siblings(".select-input").val($(this).val())
    // })
    // $('.form-address .address-btn').on('click', function () {
    //     $('.form-address').parsley().validate();  
    // });

    $(".payment-form .payment-subbtn").on('click', function () {
        $(this).parents('form').parsley().validate();  
    });

    $(".payment-form__number").on("keydown", function(e) {
        var cursor = this.selectionStart;
        if (this.selectionEnd != cursor) return;
        if (e.which == 46) {
            if (this.value[cursor] == "-") this.selectionStart++;
        } else if (e.which == 8) {
            if (cursor && this.value[cursor - 1] == "-") this.selectionEnd--;
        }
    }).on("input", function() {
        var value = this.value;
        var cursor = this.selectionStart;
        var matches = value.substring(0, cursor).match(/[^0-9]/g);
        if (matches) cursor -= matches.length;
        value = value.replace(/[^0-9]/g, "").substring(0, 16);
        var formatted = "";
        for (var i=0, n=value.length; i<n; i++) {
            if (i && i % 4 == 0) {
                if (formatted.length <= cursor) cursor=cursor+3;
                formatted += " - ";
            }
            formatted += value[i];
        }
        if (formatted == this.value) return;
        this.value = formatted;
        this.selectionEnd = cursor;
    });

    $(".payment-form__expiry").on("keydown", function(e) {
        var cursor = this.selectionStart;
        if (this.selectionEnd != cursor) return;
        if (e.which == 46) {
            if (this.value[cursor] == "/") this.selectionStart++;
        } else if (e.which == 8) {
            if (cursor && this.value[cursor - 1] == "/") this.selectionEnd--;
        }
    }).on("input", function() {
        var value = this.value;
        var cursor = this.selectionStart;
        var matches = value.substring(0, cursor).match(/[^0-9]/g);
        if (matches) cursor -= matches.length;
        value = value.replace(/[^0-9]/g, "").substring(0, 4);
        var formatted = "";
        for (var i=0, n=value.length; i<n; i++) {
            if (i && i % 2 == 0) {
                if (formatted.length <= cursor) cursor++;
                formatted += "/";
            }
            formatted += value[i];
        }
        if (formatted == this.value) return;
        this.value = formatted;
        this.selectionEnd = cursor;
    });

    function showmoreDisplay() {
        $('.cart-content__details .cart-style-custom, .cart-content__details .custom-size').each(function(){
            var el = $(this),
                autoHeight = el.css('height', 'auto').height();
            el.removeAttr('style');
            if(autoHeight <= 36) {
                el.parent().addClass('no-showmore');
            }
            else {
                el.parent().removeClass('no-showmore');
            }
        });
    }
    showmoreDisplay();
    $(window).on('load resize', function() {
        showmoreDisplay();
    });

    $(document).on('click', '.cart-content__details .cart-size a:not(.active)', function(e) {
        e.preventDefault();
        var el = $(this).parents('.cart-size').find('.custom-size'),
            curHeight = el.height(),
            autoHeight = el.css('height', 'auto').height();
        el.height(curHeight).animate({height: autoHeight}, 300);
        $(this).addClass('active').text('Show less');
    });
    
    $(document).on('click', '.cart-content__details .cart-size a.active', function(e) {
        e.preventDefault();
        var el = $(this).parents('.cart-size').find('.custom-size');
        el.animate({height: "36px"}, 300);
        $(this).removeClass('active').text('Show more');
    });

    $(document).on('click', '.cart-content__details .cart-style a:not(.active)', function(e) {
        e.preventDefault();
        var el = $(this).parents('.cart-style').find('.cart-style-custom'),
            curHeight = el.height(),
            autoHeight = el.css('height', 'auto').height();
        el.height(curHeight).animate({height: autoHeight}, 300);
        $(this).addClass('active').text('Show less');
    });
    
    $(document).on('click', '.cart-content__details .cart-style a.active', function(e) {
        e.preventDefault();
        var el = $(this).parents('.cart-style').find('.cart-style-custom');
        el.animate({height: "36px"}, 300);
        $(this).removeClass('active').text('Show more');
    });

    $(document).on('click', '.checkout-panel__promo > h4', function(e) {
        e.preventDefault();
        $('body').addClass('overflow-noscroll');
        $(this).parents('.checkout-panel__promo').find('form').addClass('show-couponbox');
    });

    $(document).on('click', '.checkout-panel__promo .web-tooltip', function(e) {
        e.stopPropagation();
    });

    $(document).on('click', '.checkout-panel__promo .backto-main', function(e) {
        e.preventDefault();
        $('body').removeClass('overflow-noscroll');
        $('.checkout-panel__promo form').removeClass('show-couponbox');
    });

    $('.checkout-panel__promo input[type="submit"]').on('click', function(e) {
        e.preventDefault();
        var errorStatus = $(this).parents('form').find('.text-group input').parsley().validate();
        if(errorStatus == true) {
            $(this).parents('form').submit();
        }
    });
});

import OverlayScrollbar from './components/overlay-scrollbar';
const addressScrollbar = new OverlayScrollbar()