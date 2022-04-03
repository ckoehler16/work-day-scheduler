$(document).ready(function() {
    // dipslay current date in the header
    $("#currentDay").text(moment().format("dddd, MMMM Do"));

    // assign the save button a click listener
    $(".saveBtn").on("click", function() {
        // get the values in the textarea as well as the time
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // save to local storage
        localStorage.setItem(time, text);
    })

    // function to track past, current, and future time
    function hourBlockTracker() {
        // need to get the current number of hours in the scheduler
        var currentTime = moment().hour();

        // create a loop to pass the current time through to see if it's past, current, or future
        $(".time-block").each(function () {
            var blockHour = parseInt($(this).attr("id").split("hour")[1]);
            console.log(blockHour, currentTime);

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
    $("#h-9 .descrpition").val(localStorage.getItem("h-9"));
    $("#h-10 .descrpition").val(localStorage.getItem("h-10"));
    $("#h-11 .descrpition").val(localStorage.getItem("h-11"));
    $("#h-12 .descrpition").val(localStorage.getItem("h-12"));
    $("#h-13 .descrpition").val(localStorage.getItem("h-13"));
    $("#h-14 .descrpition").val(localStorage.getItem("h-14"));
    $("#h-15 .descrpition").val(localStorage.getItem("h-15"));
    $("#h-16 .descrpition").val(localStorage.getItem("h-16"));
    $("#h-17 .descrpition").val(localStorage.getItem("h-17"));

    hourBlockTracker();
})


