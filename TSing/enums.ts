enum Daily {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
  Sunday = "Sunday",
}

function isWorkingDay(day: Daily) {
  switch (day) {
    case Daily.Monday:
      console.log("working");
    case Daily.Tuesday:
      console.log("working");
    case Daily.Wednesday:
      console.log("working");
    case Daily.Thursday:
      console.log("working");
    case Daily.Friday:
      console.log("working");
    case Daily.Saturday:
      console.log("day off");
    case Daily.Sunday:
      console.log("day off");
    default:
      console.log("working");
  }
}

isWorkingDay("sdhfsjdfs");

//alternativeUsage
type Daily2 = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";

function isWorkingDay2(day: Daily2) {
    switch (day) {
        case "Saturday": console.log("day off");
        case "Friday": console.log("day off");
        default: console.log("working");
    }
}