$(document).ready(function () {
    // dipslay current date in the header
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
    // assign the save button a click listener
    $(".saveBtn").on("click", function () {
        // get the values in the textarea as well as the time
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // save time and text to local storage
        localStorage.setItem(time, text);
    })

    // function to track past, current, and future time
    function hourBlockTracker() {
        // need to get the current number of hours in the scheduler
        var currentTime = moment().hour();

        // create a loop to pass the current time through to see if it's past, current, or future
        $(".time-block").each(function () {
            var blockHour = parseInt($(this).attr("id").split("hour")[1]);

            // check the current hour with the hour of the time block and add the correct class for background color
            if (blockHour < currentTime) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }

            else if (blockHour === currentTime) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }

            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }

    // load saved data from localStorage for each hour block
    $("#hour9 .descrpition").val(localStorage.getItem("hour9"));
    $("#hour10 .descrpition").val(localStorage.getItem("hour10"));
    $("#hour11 .descrpition").val(localStorage.getItem("hour11"));
    $("#hour12 .descrpition").val(localStorage.getItem("hour12"));
    $("#hour13 .descrpition").val(localStorage.getItem("hour13"));
    $("#hour14 .descrpition").val(localStorage.getItem("hour14"));
    $("#hour15 .descrpition").val(localStorage.getItem("hour15"));
    $("#hour16 .descrpition").val(localStorage.getItem("hour16"));
    $("#hour17 .descrpition").val(localStorage.getItem("hour17"));

    hourBlockTracker();
})


