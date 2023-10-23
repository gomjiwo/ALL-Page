$(document).ready(function(){
  $(".mbtn li").click(function(){

    $(this).addClass("active");
    $(this).siblings().removeClass("active");

    let result = $(this).attr("data-alt");
    $(".tabCont div").removeClass("active");
    $("#"+result).addClass("active").hide().fadeIn();

  });

});