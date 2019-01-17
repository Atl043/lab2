function initializePage() {

    $("#testjs").click(function(e) {

        $('.jumbotron h1').text("Javascript is connected");
    });

    $("a.thumbnail").click(projectClick);
}

function projectClick( event ) {
    // prevent the page from reloading
    event.preventDefault();

    // In an event handler, $(this) refers to    
    // the object that triggered the event   
    $(this).css("background-color", "#7fff00");
}
