$(function() {
    // 変数にクラスを入れる
    var btn = $('.pagetop');
    
    //スクロールしてページトップから100に達したらボタンを表示
    $(window).on('load scroll', function(){
      if($(window).scrollTop() > 100) {
        btn.addClass('active');
      }else{
        btn.removeClass('active');
      }
    });
  
    //スクロールしてトップへ戻る
    btn.on('click',function () {
      $('body,html').animate({
        scrollTop: 0
      });
    });
});