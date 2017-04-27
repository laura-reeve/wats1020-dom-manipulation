//////////////////////////////////////////////////
// WATS1020 Dom Manipulation
// Custom script goes here.
//////////////////////////////////////////////////

$( document ).ready(function() {
    var userInfo = {
        firstName: 'Jane',
        lastName: 'Doe'
    };
    var voteCounts = {
        great: 0,
        greatest: 0,
        total: 0
    };

    // when a user clicks on the login button, hide the login elements and show 
    // firstName, lastName and logout
      $(".form-group + a").click(function(){
        $(".form-group").hide();
        $(".form-group + a").hide();
        $("div.user-info > span").text(userInfo.firstName + " " + userInfo.lastName);
        $("div.user-info").show();
      });
    // reverse settings for when user clicks Logout button
      $(".user-info > a").click(function(){
        $("div.user-info").hide();
        $(".form-group").show();
        $(".form-group + a").show();
      });

    // create function to listen for clicks on every "view details" button    
      $(".view-details").on("click", function(event) {
    // log event details
        console.log(event);
    // create variable to target event button
        var targetElement = event.target;
    // create variable to target grand-parent of "view-details" container div
        var container = targetElement.parentElement.parentElement;
    // within that container div, find all the elements that have the class "details"
        $(container).find(".details").each(function(index, el) {
    // toggle visibility of all elements within "details"
    // if element is visible, fade out and change button text to View Details
          if($(el).is(":visible")) {
          $(el).fadeOut();
          targetElement.innerText = "View Details";
          } 
    // if element is not visible, fade in and change button text to Hide Details
            else {
          $(el).fadeIn();
          targetElement.innerText = "Hide Details";
          }
        });
      });

    // set up an event listener on the buttons with the `vote` class.
      $(".vote").on("click", function(event) {
        // if user clicks on great
          if ($(this).attr("data-vote") === "great") {
    // increment great and total in voteCounts
            voteCounts.great += 1;
            voteCounts.total += 1;
          } else {
    // if user clicks on greatest
    // increment greatest and total in voteCounts
            if ($(this).attr("data-vote") === "greatest") {
            voteCounts.greatest += 1;
            voteCounts.total += 1;
            }
          }
        console.log(voteCounts);
        // affect bar in HTML
        var greatGraph = voteCounts.great / voteCounts.total * 100 + "%";
        var greatestGraph = voteCounts.greatest / voteCounts.total * 100 + "%";
        $(".great-progress").css("width", greatGraph);
        $(".greatest-progress").css("width", greatestGraph);
    });
});
