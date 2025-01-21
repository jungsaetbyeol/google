$(document).ready(function () {
  // 햄버거바 클릭
  $("#hamburger-menu").click(function () {
    $(".mobile-nav").animate(
      {
        right: 0,
      },
      300
    );
  });
  // 모바일용 메뉴 클릭시
  $(".mobile-nav .gnb > li > a").click(function () {
    // console.log(this);

    $(this).next(".mobile-nav .depth2").stop().slideToggle();
  });

  //   모바일 메뉴 닫기 버튼
  $("#close-menu").click(function () {
    $(".mobile-nav").animate(
      {
        right: "-300px", //메뉴가 오른쪽 밖으로 나가도록
      },
      300
    );
  });
  // 메뉴에 호버했을때
  $("nav .gnb").hover(
    function () {
      // 마우스를 올렸을때
      $("nav .depth2 , .header-bg").stop().slideDown();
    },
    function () {
      // 마우스를 땟을때
      $("nav .depth2 , .header-bg").stop().slideUp();
    }
  );
  
  
});

