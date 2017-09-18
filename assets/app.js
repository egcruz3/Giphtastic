var APIKey = "https://github.com/Giphy/GiphyAPI#public-beta-key";

var topics = ["happy", "wtf", "omg", "dancing", "sleep", "over it", "really", "wow", "hiding", "sips tea"];

function renderButtons() {
        // Deleting the topic buttons prior to adding new movie buttons
        // (to avoid repeat buttons)
        $("#buttonsView").empty();

        // Looping through the array of reaction topics
        for (var i = 0; i < topics.length; i++) {

          // Then generating buttons for each topic in the array.
          var a = $("<button>");
          // Adding a class
          a.addClass("topic");
          // Adding a data-attribute with a value of the topic at index i
          a.attr("data-name", topics[i]);
          // Providing the button's text with a value of the topic at index i
          a.text(topics[i]);
          // Adding the button to the HTML
          $("#topics-view").append(a);
        }
      }