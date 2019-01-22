var today = new Date();
var currentMonth = today.getMonth();
var currentYear = today.getFullYear();
var selectYear = document.getElementById("year");
var selectMonth = document.getElementById("month");

var months = ["January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December"];

var monthAndYear = document.getElementById("monthAndYear");
showCalendar(currentMonth, currentYear);

function showCalendar(month, year) {
    var firstDay = (new Date(year, month)).getDay();
    var daysInMonth = 32 - new Date(year, month, 32).getDate();

    var tabl = document.getElementById("calendar-body");

    tabl.innerHTML = "";

    monthAndYear.innerHTML = months[month] + " " + year;
    selectYear.value = year;
    selectMonth.value = month;
    var date = 1;
    
    for (let i = 0; i < 6; i++) {
        var row = document.createElement("tr");
        for (var j = 1; j < 8; j++) {
            if (i === 0 && j < firstDay) {
                var cell = document.createElement("td");
                var cellText = document.createTextNode("");
                cell.appendChild(cellText);
                row.appendChild(cell);           
            }
            else if (date > daysInMonth) {
                break;     
            }
            else {
                var cell = document.createElement("td");
                var cellText = document.createTextNode(date);
                if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                    cell.classList.add("active-day");
                }
                cell.appendChild(cellText);
                row.appendChild(cell);
                date++;   
            }
        }
        tabl.appendChild(row);
    }
}
function next() {
    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    showCalendar(currentMonth, currentYear);
}
function previous() {
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    showCalendar(currentMonth, currentYear);
}
function jump() {
    currentYear = parseInt(selectYear.value);
    currentMonth = parseInt(selectMonth.value);
    showCalendar(currentMonth, currentYear);
}