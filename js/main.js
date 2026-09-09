$(function () {
  /*=================================================
  ハンバーガーメニュー
  ===================================================*/
  // ハンバーガーメニューのクリックイベント
  $(".toggle_btn").on("click", function () {
    // headerにopenクラスがあるか判定する
    if ($("header").hasClass("open")) {
      // headerにopenクラスが存在する場合、openクラスを削除する
      $("header").removeClass("open");
    } else {
      // headerにopenクラスが存在しない場合、openクラスを加える
      $("header").addClass("open");
    }
  });

  // //下記も同様の意味となります。
  //   $(".toggle_btn").on("click", function () {
  //     $("header").toggleClass("open");
  //   });




  // メニューが表示されている時に画面をクリックした場合
  $('.mask').on('click', function () {
    // openクラスを削除して、メニューを閉じる
    $('header').removeClass('open');
  });


  $(".nav-list a").on("click", function () {
    $("header").removeClass("open");
  });

});

/*=================================================
スムーススクロール
===================================================*/


/*=================================================
PICK UP スライダー
===================================================*/
// カルーセル用 jQueryプラグイン「slick」の設定
// マニュアル：https://kenwheeler.github.io/slick/
$(".slick-area").slick({
  arrows: false,
  centerMode: true,
  centerPadding: "100px",
  slidesToShow: 3,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        centerPadding: "50px",
        slidesToShow: 1,
      },
    },
  ],
});

/*=================================================
スクロール時の画像フェード表示
===================================================*/
// スクロール時のイベント
$(window).scroll(function () {
  // fadeinクラスに対して順に処理を行う
  $(".fadein").each(function () {
    // スクロールした距離
    let scroll = $(window).scrollTop();
    // fadeinクラスの要素までの距離
    let target = $(this).offset().top;
    // 画面の高さ
    let windowHeight = $(window).height();
    // fadeinクラスの要素が画面下にきてから200px通過した
    // したタイミングで要素を表示
    if (scroll > target - windowHeight + 200) {
      $(this).css("opacity", "1");
      $(this).css("transform", "translateY(0)");
    }
  });
});


