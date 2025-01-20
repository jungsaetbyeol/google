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
  //   모바일 메뉴 닫기 버튼
  $("#close-menu").click(function () {
    $(".mobile-nav").animate(
      {
        right: "-300px", //메뉴가 오른쪽 밖으로 나가도록
      },
      300
    );
  });
});
