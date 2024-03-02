$(document).ready(function () {
  $(".product").hover(
    function () {
      $(this).find(".active-buttons").fadeIn(400);
    },
    function () {
      $(this).find(".active-buttons").fadeOut();
    }
  );
});
