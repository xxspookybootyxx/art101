$(document).ready(function () {
    $("#activate").on("click", function () {
        // Fetch a random Chuck Norris joke
        $.ajax({
            url: "https://api.chucknorris.io/jokes/random", // Chuck Norris API URL
            type: "GET",
            dataType: "json", // Expect JSON response
            success: function (data) {
                // Display the joke in the #output div
                $("#output").html(`<p>${data.value}</p>`);
                console.log(data); // For debugging
            },
            error: function (jqXHR, textStatus, errorThrown) {
                $("#output").html(`<p>Error fetching joke: ${textStatus}</p>`);
                console.error("Error:", textStatus, errorThrown);
            },
        });
    });
});
