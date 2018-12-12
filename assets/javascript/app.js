// Pull 10 search items down from GIPHY search
// add a function to stop giphys on click. (day 3 #15 in RUTSOM)
// Create an array and loop over it so that buttons generate, and produce giphys
// Your app should take the topics in this array and create buttons in your HTML.
//Try using a loop that appends a button for each string in the array.

//  Global variables
var topics = ["Jurassic Park", "Space", "Christmas", "Pugs", "Climbing"];
var userInput = $("giphySearch").val()
var queryURL = "https://api.giphy.com/v1/gifs/search?q=jurrasic+park" + "&api_key=BgVoQX2k20CRJluSOkLWaY846Qub3ZzW&limit=10";


//    FUNCTIONS
// ==================================================
// Grabs topics array and makes them into buttons. 
function displayButtons() {
    $("#buttonsForGifs").empty();
    for (j = 0; j < topics.length; j++) {
        var button = $("<button>");
        button.addClass("gifbutton");
        button.attr("data-name", topics[j]);
        button.text(topics[j]);
        $("#buttonsForGifs").append(button);
    }
};
// displays gifs onto page
function displayGifs() {
$("#gifUpload").empty();
var gif = $(this).attr("data-name");
var queryURL = "https://api.giphy.com/v1/gifs/search?q="+ gif + "&api_key=BgVoQX2k20CRJluSOkLWaY846Qub3ZzW&limit=10"


    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log("success! got data", response)
        var results = response.data //give access to first level of results from search.
        for (var i = 0; i < results.length; i++) {
            var gifDiv = $("<div>");
            var rating = results[i].rating;
            var p = $("<span>").text("rating: " + rating);
            var gifURL = results[i].images.original.url
            var gifImage = $("<img src=" + gifURL + ">" );
            gifImage.addClass("gifImage");
            $(gifImage).attr("data-still" , gifURL)
            $(gifImage).attr("data-animate", results[i].images.original.url)
            gifDiv.prepend(p);
            gifDiv.append(gifImage);
            $("#gifUpload").append(gifDiv);
        }
    });

}

function animateAndStop () {
    var state = $(this).attr("data-state")
    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    } 
    else{
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }
};


$(document).ready(function () {
    // Calling Functions and Methonds
    // ======================================================
    displayButtons();
    displayGifs();


    // click Listener for buttons/ adds new gif buttons to array
    $("#submitBtn").on("click", function () {
        var newGif = $("#giphySearch").val().trim();
        topics.push(newGif);
        displayButtons()
    });

$(document).on("click", ".gifbutton", displayGifs);
$(document).on("click", ".gifImage", animateAndStop);
})

