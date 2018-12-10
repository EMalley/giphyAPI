$(document).ready(function () {
    //  Global variables
    var topics = ["Jurassic Park", "Space", "Christmas", "Pugs", "Climbing"];

    let queryURL = "https://api.giphy.com/v1/gifs/search?q=jurrasic+park" + "&api_key=BgVoQX2k20CRJluSOkLWaY846Qub3ZzW&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        //check to see if we see API call
        console.log("success! got data", response)
    });

    // Pull 10 search items down from GIPHY search
    // add a function to stop giphys on click. (day 3 #15 in RUTSOM)
    // Create an array and loop over it so that buttons generate, and produce giphys
    // Your app should take the topics in this array and create buttons in your HTML.
    //Try using a loop that appends a button for each string in the array.



})

