$(document).ready(function(){
  $(".tab li").click(function(){

    $(this).addClass("active2");
    $(this).siblings().removeClass("active2");


    let result=$(this).attr("data-alt");
    $(".tabcontents div").removeClass("active2");
    $("#" + result).addClass("active2");

  });

});