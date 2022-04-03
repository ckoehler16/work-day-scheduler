$(document).ready(function() {
    // dipslay current date in the header
    $("#currentDay").text(moment().format("dddd, MMMM Do"));

    // function to track past, current, and future time
    function hourTracker() {
        // need to get the current number of hours in the scheduler
        var currentHour = moment().hour();

        // create a loop to pass the currentHour through to see if it's past, current, or future
        $(".time-block").each(function () {
            var blockHour = parseInt($(this).attr("id").split("hour")[1]);
            console.log(blockHour, currentHour);

            if (blockHour < currentHour) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }

            else if (blockHour === currentHour) {
                $(this).addClass("present");
                $(this).removeClass("past");
                $(this).removeClass("future");
            }

            else {
                $(this).addClass("future");
                $(this).removeClass("past");
                $(this).removeClass("present");
            }
        })
    }
    hourTracker();
})


