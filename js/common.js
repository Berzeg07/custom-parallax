$(document).ready(function(){

$(window).bind('scroll',function(e){
    parallaxScroll();
});
 
function parallaxScroll(){
    var scrolled = $(window).scrollTop();
    if (scrolled > 1150){
        $('.blue1').css('top',-(scrolled * 0.20)+'px'); 
        $('.blue2').css('top',-(scrolled * 0.40)+'px'); 
        $('.blue3').css('top',-(scrolled * 0.60)+'px'); 
    }
    else{
        $('.blue1').css({
            'top':'100px',
            'left':'20px'
        }); 
        $('.blue2').css({
            'top':'150px',
            'right':'200px'
        }); 
        $('.blue3').css({
            'top':'220px',
            'left':'300px'
        }); 
    }

    if (scrolled > 1500){
        $('.end').css({
            'top':'200px',
            'position':'fixed'
        }); 
    }

    else{
        $('.end').css('top','-200px'); 
    }

}

$(window).scroll(function() {

    if ($(this).scrollTop() > 200) {
        $('.w1').css('top','0px');
    }
    else{
        $('.w1').css('top','-800px'); 
    }

    if ($(this).scrollTop() > 240) {
        $('.w2').css('top','0px');
    }
    else{
        $('.w2').css('top','-700px'); 
    }

    if ($(this).scrollTop() > 280) {
        $('.w3').css('top','0px');
    }
    else{
        $('.w3').css('top','-600px'); 
    }

    if ($(this).scrollTop() > 320) {
        $('.w4').css('top','0px');
    }
    else{
        $('.w4').css('top','-500px'); 
    }

    if ($(this).scrollTop() > 360) {
        $('.w5').css('top','0px');
    }
    else{
        $('.w5').css('top','-400px'); 
    }

    if ($(this).scrollTop() > 400) {
        $('.w6').css('top','0px');
    }
    else{
        $('.w6').css('top','-300px'); 
    }

    if ($(this).scrollTop() > 440) {
        $('.w7').css('top','0px');
    }
    else{
        $('.w7').css('top','-200px'); 
    }

    if ($(this).scrollTop() > 700) {
        $('.black').css('left','2000px');
    }
    else{
        $('.black').css('left','-100px'); 
    }

    if ($(this).scrollTop() > 800) {
        $('.red').css('left','2000px');
    }
    else{
        $('.red').css('left','-100px'); 
    }

    if ($(this).scrollTop() > 900) {
        $('.grey').css('left','2000px');
    }
    else{
        $('.grey').css('left','-100px'); 
    }

});



});//END READY
