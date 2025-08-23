$(".drpBtn").on("click",function() {
    $(".menu").slideToggle();
    $(".menu").css("opacity", "0.5");
});

$(".menu").mouseover(function() {
    $(this).css("opacity", "1");
    $(this).css("height", "50px");
    $(this).css("width", "12em");
});

$(".menu").mouseout(function() {
    $(this).css("opacity", "0.5");
    $(this).css("height", "40px");
    $(this).css("width", "10em");
    
});

$(".menu").click(function(){
    var _this = $(this)

    setTimeout(function() {
    $(_this).css("opacity", "0.5");
    $(_this).css("height", "40px");
    $(_this).css("width", "10em");}, 5)
})

