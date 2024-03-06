document.addEventListener("DOMContentLoaded", function () {
    let advWindow = $(".advertisement");
    let closeButton = $(".modal-action-button");
    let timer = $(".timer");

    setTimeout(function() {
        advWindow.css("display", "block")
        startTimer();
    }, 1);

    $(closeButton).on('click', function() {
        console.log("GHSDSDGDG")
        advWindow.css("display", "none");
    });
    function startTimer() {
        let remainTime = 5; 
    
        let intervalId = setInterval(function() {
            timer.html("Ви зможете закрити це повідомлення через " + remainTime + " секунд.");

            if (remainTime <= 0) {
                clearInterval(intervalId);
                timer.css("display", "none");
                closeButton.css("display", "block");
            }
    
            remainTime--;
        }, 1000); 
    } 
  });
  
  
  