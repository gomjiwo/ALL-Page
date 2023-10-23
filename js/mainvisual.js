$(document).ready(function(){

  let $img=$(".changeimg ul li");
  let $btn=$(".btn ul li");
  let oldidx=0;
  let idx=0;
  let img_n=$img.length;

  function changeImg(idx){

    if(oldidx != idx){
      $btn.eq(oldidx).removeClass("active");
      $btn.eq(idx).addClass("active");
      $img.eq(oldidx).stop().fadeOut("500");
      $img.eq(idx).stop().fadeIn("500");
    }
    oldidx=idx;
  };

  function changeAuto(){

    idx++;
    if(idx > img_n-1){
      idx=0;
    }
    changeImg(idx);
  }

  timer=setInterval(changeAuto,4000);

  $btn.click(function(){

    clearInterval(timer);
    idx=$(this).index();
    changeImg(idx);
    timer=setInterval(changeAuto,4000);
  });





});