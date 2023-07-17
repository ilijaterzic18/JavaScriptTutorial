function func1() {
    // .fadeToggle vec postoji u jQuery-ju, u zagradi se stavlja koliko vremena hocemo da traje animacija
    $("#img1").fadeToggle(3000);
}

function func2() {
    // syntax:
    // jQuery:
    // $(elemet name)
    // JavaScript:
    // document.getElementTagName(element name)

    // $(element name).action();

    // $("div").css("background-color", "orange");
    // $("#p1").css("font-style", "italic");
    // $(".para").css("font-style", "italic");

    // $("#div1, #div2").css("background-color", "green");
    // $("#div1, li").css("background-color", "purple");
    // $("div > p").fadeToggle();
    // $("p:first").fadeToggle();
    // $("li:even").fadeToggle();
    // $("li:odd").fadeToggle();
}

// EVENTS
// ready je good practice
// ready ce izvrsiti funkciju onda kada se DOM ucita
$("document").ready(function(){
    $("#btn2").dblclick(function() {
        $("#img2").css("width", "500px");
    });

    // $("#img2").mouseenter(function() {
    //     $("#img2").css("width", "500px");
    // });

    // $("#img2").mouseleave(function() {
    //     $("#img2").css("width", "250px");
    // });

    // isto kao prethodne dve samo preko jedne
    $("#img2").hover(func4, func5);
    function func4() {
        $("#img2").css("width", "500px");
    };
    function func5() {
        $("#img2").css("width", "250px");
    };
});

// EFFECTS
$("document").ready(function() {
    $("#btn3").click(function(){
        $("#img3").hide(2000);
    });
    $("#btn4").click(function(){
        $("#img3").show(2000);
    });
    $("#btn5").click(function(){
        $("#img3").toggle(2000); // hide i show zajedno
    });

    $("#btn6").click(function(){
        $("#img3").fadeIn(2000);
    });
    $("#btn7").click(function(){
        $("#img3").fadeOut(2000);
    });
    $("#btn8").click(function(){
        $("#img3").fadeToggle(2000);
    });

    $("#btn9").click(function(){
        $("#img3").slideUp(2000);
    });
    $("#btn10").click(function(){
        $("#img3").slideDown(2000);
    });
    $("#btn11").click(function(){
        $("#img3").slideToggle(2000);
    });

    $("#btn12").click(function(){
        $("#img3").stop(); // zaustavljanje efekata
    });

    // DA BI OVO RADILO MORA DA SE STAVI position: relative; ili position: absolute; u CSS-u
    $("#btn13").click(function() {
        $("#img4").animate({
            left: "150px",
            opacity: "1",
            height: "400px",
            width: "400px"
        }, 2000);
    });
});
