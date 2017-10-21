$(document).ready(function() {

    var myVar;


    function random() {
        var messageToUse = "";
        var botMessage = ["What is on your mind today?",
            "Tell me about something you did that was interesting yesterday.",
            "If I were to give you an extra hour a day, what would you do with it?",
            "If I was in your shoes and asked for advice, what would be the first thing you\’d tell me?",
            "What is the experience you are looking to create?",
            "Where do you see yourself in five years time?",
            "How are you sleeping these days?",
            "How much exercise are you getting?",
            "Do you have a clear sense of where you want to take things in life?",
            "Do you feel excited by stuff in your life?",
            "What am I not asking you that you really want me to ask?"
        ];
        messageToUse = botMessage[Math.floor(Math.random() * botMessage.length)];
        var old = $(".text_laptop").html();
        var msg = $(".text_laptop").html(old + "<span class = 'box_laptop'>" + messageToUse + "</span>");
        msg;
    }


    $('button').css({ "cursor": "pointer" });

    $(":button").click(function() {

        function clicked() {
            var newMessage = $("#usertext").val();
            $("#usertext").val("");
            var old = $('.text_user').html();
            $(".text_user").html(old + "<span class='box_user'>" + newMessage + "</span>");

        }
        clicked();

        setTimeout(random, 3000);
    });

});