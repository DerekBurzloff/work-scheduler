//moment.js
var currentDate =
  moment().format("dddd") + " " + moment().format("Do MMM YYYY");
var currentHour = moment().format("h:mm:ss a");

var nineAm = $("#9am");
var tenAm = $("#10am");
var elevenAm = $("#11am");
var twelvePm = $("#12pm");
var onePm = $("#13pm");
var twoPm = $("#14pm");
var threePm = $("#15pm");
var fourPm = $("#16pm");
var fivePm = $("#17pm");
var sixPm = $("#18pm");
var sevenPm = $("#19pm");

var hour = moment().hours();
var userInput;
var hourSpan;

//date&hour

var interval = setInterval(function () {
  var momentNow = moment();
  $("#currentDay").html(
    momentNow.format("YYYY MMMM DD") +
      " " +
      momentNow.format("dddd").substring(0, 3).toUpperCase()
  );
  $("#currentDay").html(currentDate);
  background();
}, 1000);

//times

function initPage() {
  var init9 = JSON.parse(localStorage.getItem("09:00 am"));
  nineAm.val(init9);

  var init10 = JSON.parse(localStorage.getItem("10:00 am"));
  tenAm.val(init10);

  var init11 = JSON.parse(localStorage.getItem("11:00 am"));
  elevenAm.val(init11);

  var init12 = JSON.parse(localStorage.getItem("12:00 pm"));
  twelvePm.val(init12);

  var init13 = JSON.parse(localStorage.getItem("13:00 pm"));
  onePm.val(init13);

  var init14 = JSON.parse(localStorage.getItem("14:00 pm"));
  twoPm.val(init14);

  var init15 = JSON.parse(localStorage.getItem("15:00 pm"));
  threePm.val(init15);

  var init16 = JSON.parse(localStorage.getItem("16:00 pm"));
  fourPm.val(init16);

  var init17 = JSON.parse(localStorage.getItem("17:00 pm"));
  fivePm.val(init17);

  var init18 = JSON.parse(localStorage.getItem("18:00 pm"));
  sixPm.val(init18);
}

function background() {
  $(".form-control").each(function () {
    var timeTest = parseInt($(this).attr("id"));
    hour = parseInt(hour);
    console.log(timeTest);

    if (hour > timeTest) {
      $(this).addClass("past");
      $(this).removeClass("present");
      $(this).removeClass("future");
    } else if (hour == timeTest) {
      $(this).addClass("present");
      $(this).removeClass("future");
      $(this).removeClass("past");
    } else if (hour < timeTest) {
      $(this).addClass("future");
      $(this).removeClass("present");
      $(this).removeClass("past");
    }
  });
}
initPage();

$(".saveBtn").on("click", function () {
  console.log("buttoned clicked");
  userInput = $(this).siblings(".form-control").val().trim();
  console.log(userInput);
  hourSpan = $(this).siblings(".input-group-prepend").text().trim();
  console.log(hourSpan);
  localStorage.setItem(hourSpan, JSON.stringify(userInput));
});
