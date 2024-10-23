$(document).ready(function(){
            
    var seconds = "00";
    var tens = "00";
    var $appendTens = $("#tens");//document.getElementById("tens")
    var $appendSeconds = $("#seconds");//document.getElementById("seconds")
    var $buttonStart =$('#button-start');//document.getElementById('button-start');
    var $buttonStop = $('#button-stop');//document.getElementById('button-stop');
    var $buttonReset = $('#button-reset');//document.getElementById('button-reset');
    var interval;

    $("#timer").addClass('timer-background'); 
    $(".timer-background").css({
        backgroundColor: "grey",
        textAlign: "center",
        width: "175px",
        height: "auto",
        margin: "auto",
        "font-size": "35px",
        borderRadius: "35%",
    });
    setInterval(function(){
        $(".timer-background").animate({
            opacity: 1.0
        }, 1000);
        $(".timer-background").animate({
            opacity: 0.8
        }, 1000);
    })
    $("button").css({
        marginTop: "15px",
    });
    $("button").addClass('timer-buttons');
    $(".timer-buttons").css({
        borderRadius: "25%",
        "font-size": "20px",
        boxShadow: "0 6px 0",
        backgroundColor: "lightblue",
        fontFamily: "Chalkduster",
        width: "100px",
        fontVariant: "small-caps",
        height: "40px"
    });
    $(".timer-buttons").hover(
        function(){
            $(".timer-buttons").css({
                color: "green",
                height: "50px",
            });
        },
        function(){
            $(".timer-buttons").css({
                color: "black",
                height: "40px",
            });
        });
    $("#seconds").css({
        fontFamily: "Chalkduster",
        color: "white"
    });
    $("#tens").css({
        fontFamily: "Chalkduster",
        color: "DarkBlue"
    });
    $('div').css({
        "background-image": "url('image copy.png')",
        height: "auto",
        width: "auto",
        padding: "10px",
        textAlign: "center",
    });
    $('h1').css({
        color: "Purple",
        fontFamily: "Chalkduster",
        fontSize: "55px",
        padding: "0 auto",
        margin: "0 auto",
    });
    $buttonStart.click(function (){
        clearInterval(interval);
        interval = setInterval(startTimer, 10);
        $('.timer-background').css("background-color", "rgb(51,165, 50)"); 
    });
    $buttonStop.click(function(){
        clearInterval(interval);
        if(seconds == "00" && tens =="00"){
            $('.timer-background').css(backgroundColor, "grey");
            $('.timer-background').css(opacity, "1");
        }
        else{
            $('.timer-background').css("background-color", "red"); 
            $('.timer-background').css(opacity, "1");
        }
    });
    $buttonReset.click(function(){ 
        clearInterval(interval);
        tens = "00";
        seconds = "00";
        $appendTens.html(tens);
        $appendSeconds.html(seconds);
        $('.timer-background').css("background-color", "grey"); 
        $('.timer-background').css(opacity, "1");
    });
    function startTimer() {
        tens++;
        if (tens < 9) {
            $appendTens.html("0" + tens);
        }
        if (tens > 9) {
            $appendTens.html(tens);
        }
        if (tens > 99) {
            console.log("seconds");
            seconds++;
            $appendSeconds.html("0" + seconds);
            tens = 0;
            $("#appendTens").html("0" + 0);
        }
        if (seconds > 9) {
        $appendSeconds.html(seconds);
        }
    }
});