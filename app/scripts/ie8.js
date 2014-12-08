$(document).ready(function () {
  $('.heading-overhang').each(function (elem) {
    var width = $(this).width();
    $(this).width(width + 33);
  });
});