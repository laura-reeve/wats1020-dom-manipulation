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

    // TODO: Create a function that listens for clicks on the voting buttons and
    // looks at the `data-vote` attribute on each button to see what was voted for,
    // then determines the updated vote breakdown to adjust the progress bars.
    //      1. Set up an event listener on the buttons with the `vote` class.
         $(".vote").on("click", function(event) {
             // set this up for switch statement
              var self = this;
              var $self = $(self);
              var dataFunction = $self.attr('data-vote');
           
           switch (dataFunction) {
               // if user click on great
             case 'great':
               // increment great and total in voteCounts
             var newGreat = voteCounts.great += 1;
             var newTotal = voteCounts.total += 1;
             console.log(voteCounts);
               // affect bar in HTML
             var currentWidth = $(".great-progress").width();
             var newWidth = currentWidth + (currentWidth * (newGreat / newTotal)) / 100;
             $(".great-progress").width(newWidth);
             break;
               // if user clicks on greatest
             case 'greatest':
               // increment greatest and total in voteCounts
             var newGreatest = voteCounts.greatest += 1;
             var newTotals = voteCounts.total += 1;
             console.log(voteCounts);
               // affect bar in HTML
             var currentWidths = $(".greatest-progress").width();
             var newWidths = currentWidths + (currentWidths * (newGreatest / newTotals)) / 100;
             $(".greatest-progress").width(newWidths);
             break;
               // else do nothing
             default: 
               // do nothing
             break;
           }
         });
    //      2. When a button is clicked, look at the `data-vote` attribute to determine
    //          what the user is voting for ("great" or "greatest").
    //      3. Increment the counter for whichever vote talley is affected.
    //      4. Determine the respective percentages (out of 100) for each progress bar.
    //      5. Modify the `width` attribute on each progress bar to set the updated percentage.

});
