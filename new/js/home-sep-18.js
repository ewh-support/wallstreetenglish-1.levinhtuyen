
$(document).ready(function(){
    $('.hero-sideshow').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows : false
    });

    $('.wse-usp-slide').slick({
        dots: true,
        slidesPerRow: 2,
        rows: 2,
        speed: 300,
        arrows : false,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesPerRow: 2,
                    rows: 1,
                    arrows : false,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesPerRow: 1,
                    rows: 1,
                    arrows : false,
                }
            }
        ]
    });

    $('.free-asset-slide').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows : false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    /*infinite: true,*/
                    dots: true,
                    arrows : false,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows : false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    centerMode: false,
                    arrows : false,
                    /*infinite: true*/
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                    infinite: true,
                    arrows : false,
                }
            }
        ]
    });

   var margin_top_mobile = 0;
   if($(window).width() < 490){
       margin_top_mobile = 35;
   }

    $("#scroll-to-contact-form-sep-18, #stick-bar").click(function(){
        contact_form = $("#contact-form").position().top - 65 - margin_top_mobile;
        $('html, body').animate({scrollTop:contact_form}, 'slow');
        return false;
    });

    // animation number
    var paused = false;
    $(document).scroll(function() {
        var w_sreen = $(window).width();
        if (w_sreen <= 770) {
            var position_animate = '1300';
        } else {
            var position_animate = '1950';
        }

        if ($(window).scrollTop() > position_animate && $(window).scrollTop() > $("#body").offset().top) {
            if (!paused) {
                var i = '0';
                $('.count').each(function(index) {
                    $(this).prop('Counter', 0).animate({
                        Counter: $(this).attr('data-counter-to')
                    }, {
                        duration: 1500,
                        easing: 'swing',
                        step: function(now) {
                            $(this).text(commaSeparateNumber(Math.ceil(this.Counter)));
                        },
                        complete: function() {
                            i++;
                            /*if (i == 4) {
                                $('.data-students').text('3.000.000');
                            }*/
                        }
                    });
                    function commaSeparateNumber(val) {
                        flag = true;
                        while (/(\d+)(\d{3})/.test(val.toString())) {
                            val = val.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
                        }
                        ;return val;
                    }
                }, {
                    offset: '100%'
                });
                paused = true;
            }
        } else {
            if (paused) {
                paused = false;
            }
        }
    });

    $('input[type=radio][name=location]').change(function() {
        if (this.value == 'tphcm') {
            $("select[name='cityform']").val(1);
        }
        else if (this.value == 'binhduong') {
            $("select[name='cityform']").val(3);
        }
        else if (this.value == 'khac') {
            $("select[name='cityform']").val(2);
        }
    });

    $prev_usp_tab = $(".wse-usp .panel-heading a.arrow-up");

    $(".wse-usp .panel-heading a").on('click', function () {

        if(!$(this).hasClass("arrow-up")){
            $prev_usp_tab.removeClass("arrow-up");
            $(this).addClass("arrow-up");
        }else{
            $prev_usp_tab.removeClass("arrow-up");
        }

        $prev_usp_tab = $(".wse-usp .panel-heading a.arrow-up");

    });

});

/*var requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;var transforms=["transform","msTransform","webkitTransform","mozTransform","oTransform"];var transformProperty=getSupportedPropertyName(transforms);var snowflakes=[];var browserWidth;var browserHeight;var numberOfSnowflakes=50;var resetPosition=false;function setup(){window.addEventListener("DOMContentLoaded",generateSnowflakes,false);}
setup();function getSupportedPropertyName(properties){for(var i=0;i<properties.length;i++){if(typeof document.body.style[properties[i]]!="undefined"){return properties[i];}}
    return null;}
function Snowflake(element,speed,xPos,yPos){this.element=element;this.speed=speed;this.xPos=xPos;this.yPos=yPos;this.counter=0;this.sign=Math.random()<0.5?1:-1;this.element.style.opacity=.1+Math.random();this.element.style.fontSize=12+Math.random()*50+"px";}
Snowflake.prototype.update=function(){this.counter+=this.speed/5000;this.xPos+=this.sign*this.speed*Math.cos(this.counter)/40;this.yPos+=Math.sin(this.counter)/40+this.speed/30;setTranslate3DTransform(this.element,Math.round(this.xPos),Math.round(this.yPos));if(this.yPos>browserHeight){this.yPos=-50;}}
function setTranslate3DTransform(element,xPosition,yPosition){var val="translate3d("+xPosition+"px, "+yPosition+"px"+", 0)";element.style[transformProperty]=val;}
function generateSnowflakes(){var originalSnowflake=document.querySelector(".snowflake");var snowflakeContainer=originalSnowflake.parentNode;browserWidth=document.documentElement.clientWidth;browserHeight=document.documentElement.clientHeight;for(var i=0;i<numberOfSnowflakes;i++){var snowflakeClone=originalSnowflake.cloneNode(true);snowflakeContainer.appendChild(snowflakeClone);var initialXPos=getPosition(50,browserWidth);var initialYPos=getPosition(50,browserHeight);var speed=5+Math.random()*40;var snowflakeObject=new Snowflake(snowflakeClone,speed,initialXPos,initialYPos);snowflakes.push(snowflakeObject);}
    snowflakeContainer.removeChild(originalSnowflake);moveSnowflakes();}
function moveSnowflakes(){for(var i=0;i<snowflakes.length;i++){var snowflake=snowflakes[i];snowflake.update();}
    if(resetPosition){browserWidth=document.documentElement.clientWidth;browserHeight=document.documentElement.clientHeight;for(var i=0;i<snowflakes.length;i++){var snowflake=snowflakes[i];snowflake.xPos=getPosition(50,browserWidth);snowflake.yPos=getPosition(50,browserHeight);}
        resetPosition=false;}
    requestAnimationFrame(moveSnowflakes);}
function getPosition(offset,size){return Math.round(-1*offset+Math.random()*(size+2*offset));}
function setResetFlag(e){resetPosition=true;}*/



