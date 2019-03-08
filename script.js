$(document).ready(function(){

    var modal = $(".modal");
    var btnOpen = $(".btn-open");
    var overlay = $(".overlay");
    var btnCloseTop = $(".btn-close-top");
    var btnCloseFooter = $(".btn-close-footer");

    btnOpen.on(('click'),function () {
        overlay.addClass("visible");
        modal.animate({
            opacity: '1',
            top : '50%',
        }, 'slow');
    });

    btnCloseTop.click(function () {
        overlay.removeClass("visible");
        modal.animate({
            opacity: '0',
            top : '0',
        }, 'slow');
    });

    btnCloseFooter.click(function () {
        overlay.removeClass("visible");
        modal.animate({
            opacity: '0',
            top : '0',
        }, 'slow');
    });

    $(document).click(function (event) {
        if (!$(event.target).closest(".modal,.btn-open").length) {
            $("body").find(".modal").animate({
                opacity: '0',
                top : '0',
            }, 'slow');
            $("body").find(".overlay").removeClass("visible");
        }
    });
  });