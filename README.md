# Work Day Scheduler

## Description
* Create a simple calendar application that allows a user to save events for each hour of the work day (9am - 5pm). The applicatiob will run in the user's browser and feature dynamically updated HTML and CSS powered by jQuery.
* The basic work schedule app will loop through the hours of 9am to 5pm for the current date.
* The app will allow the user to enter text for each hour block and then save it to the schedule.
* The app will display the hour blocks gray if that time has already passed, red for the current hour, and green for all future hours.

## User Story
- AS AN employee with a busy schedule
- I WANT to add important events to a daily planner
- SO THAT I can manage my time effectively

## Acceptance Criteria
- GIVEN I am using a daily planner to create a schedule
- WHEN I open the planner
- THEN the current day is displayed at the top of the calendar
- WHEN I scroll down
- THEN I am presented with time blocks for standard business hours
- WHEN I view the time blocks for that day
- THEN each time block is color-coded to indicate whether it is in the past, present, or future
- WHEN I click into a time block
- THEN I can enter an event
- WHEN I click the save button for that time block
- THEN the text for that event is saved in local storage
- WHEN I refresh the page
- THEN the saved events persist

## Built With
* HTML
* CSS
* Bootstrap https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css
* JavaScript
* jQuerty https://code.jquery.com/jquery-3.4.1.min.js
* moment js https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js

