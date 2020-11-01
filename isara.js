// qaの開閉ボタン
$(document).ready(function(){
  $(".panel-heading").on("click", function(){
    $(this).next().slideToggle(200);
    $(this).toggleClass("ac");
    $(this).next("panel-heading").slideToggle();
  });
});
// トップページアイコンの効果
$(function(){
  var pagetop = $('#mmm');
  pagetop.hide();

  $(window).scroll(function(){
    if($(this).scrollTop()>1000){
      pagetop.fadeIn();
    }else{
      pagetop.fadeOut();
    }
  });
  pagetop.click(function(){
    $('body,HTML').animate({
      scrollTop: 0},1000);
      return false;
  });
});
