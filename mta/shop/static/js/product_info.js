

 
 

document.addEventListener("DOMContentLoaded", function () { 
    $(".book_button_info").on('click', function(event) {
        console.log("HDFdh") ;
        let bookInfo = $(`#${event.target_id}`);
        $(bookInfo).css("display", "block"); 
    });
})