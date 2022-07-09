//Added date and time to header
$(document).ready(function () {
  $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

  $(".saveBtn").on("click", function () {
    console.log(this);
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, text);
  });
});
//saved input into local storage ^

//pulling input from local storage from each time slot
var nine = (document.querySelector("nine.description").value =
  localStorage.getItem("nine"));
var ten = (document.querySelector("ten.description").value =
  localStorage.getItem("ten"));
var eleven = (document.querySelector("eleven.description").value =
  localStorage.getItem("eleven"));
var twelve = (document.querySelector("twelve.description").value =
  localStorage.getItem("twelve"));
var one = (document.querySelector("one.description").value =
  localStorage.getItem("one"));
var two = (document.querySelector("two.description").value =
  localStorage.getItem("two"));
var three = (document.querySelector("three.description").value =
  localStorage.getItem("three"));
var four = (document.querySelector("four.description").value =
  localStorage.getItem("four"));
var five = (document.querySelector("five.description").value =
  localStorage.getItem("five"));

//Function to change status of schedule based on time of day
function timeTracker() {
  var currentHour = moment().hour();

  $(".time-block").each(function () {
    var hourBlock = parseInt($(this).attr("id").split("hour")[1]);
    console.log(hourBlock, currentHour);

    if (hourBlock < currentHour) {
      $(this).addClass("past");
      $(this).removeClass("future");
      $(this).removeClass("present");
    } else if (hourBlock === currentHour) {
      $(this).removeClass("past");
      $(this).addClass("present");
      $(this).removeClass("future");
    } else {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
    }
  });
  //calling function into action
  timeTracker();
}
