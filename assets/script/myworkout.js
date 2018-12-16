displayNavInfo()

const Workouts = ['Crossfit', 'Freeweights', 'Power Lifting']

let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let selectYear = document.getElementById("year");
let selectMonth = document.getElementById("month");
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let monthAndYear = document.getElementById("monthAndYear");
showCalendar(currentMonth, currentYear);



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

function showCalendar(month, year) {

    let firstDay = (new Date(year, month)).getDay();
    let daysInMonth = 32 - new Date(year, month, 32).getDate();

    let tbl = document.getElementById("calendar-body"); // body of the calendar

    // clearing all previous cells
    tbl.innerHTML = "";

    // filing data about month and in the page via DOM.
    monthAndYear.innerHTML = months[month] + " " + year;
    selectYear.value = year;
    selectMonth.value = month;

    // creating all cells
    let date = 1;
    for (let i = 0; i < 6; i++) {
        // creates a table row
        let row = document.createElement("tr");

        //creating individual cells, filing them up with data.
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                let cell = document.createElement("td");
                let cellText = document.createTextNode("");
                cell.appendChild(cellText);
                row.appendChild(cell);
            }
            else if (date > daysInMonth) {
                break;
            }

            else {
                let cell = document.createElement("td");
                // creating a modal for each cell
                cell.setAttribute('id', (date + '-' + currentMonth + '-' + currentYear));
                cell.setAttribute('data-target', 'modal fade modal-dialog');
                cell.setAttribute('data-toggle', "modal")
                cell.onclick = function () { largerTD(); }

                let cellText = document.createTextNode(date);
                let modalLG = document.createElement('div');

                setAttributes(modalLG,
                    {
                        'class': 'modal fade modal-dialog bg-white',
                        'id': date + '-' + currentMonth + '-' + currentYear + '-modal',
                        'data-target': (date + '-' + currentMonth + '-' + currentYear),
                        'tabindex': "-1",
                        'role': "dialog",
                        'aria-labelledby': "myLargeModalLabel",
                        'aria-hidden': "true"
                    });
                let modalDialog = document.createElement('div');
                modalDialog.setAttribute('class', "modal-dialog modal-lg");

                let modalContent = document.createElement('div');
                modalContent.setAttribute('class', "modal-content");

                // Modal content Dropdown creation
                let labelSelectWorkOut = document.createElement('label');
                labelSelectWorkOut.setAttribute('id', (date + '-' + currentMonth + '-' + currentYear + '-label'));
                console.log(labelSelectWorkOut)
                $('#' + date + '-' + currentMonth + '-' + currentYear + '-label').text('Select WorkOut');

                // Modal Select Creation

                let selectWorkOut = document.createElement('select')
                labelSelectWorkOut.setAttribute('id', (date + '-' + currentMonth + '-' + currentYear + '-select'));
                $('#' + date + '-' + currentMonth + '-' + currentYear + '-select').text('Select WorkOut');

                // Modal Option Creation
                for (let k = 0; k < Workouts.length; k++) {
                    let workoutOption = document.createElement('option')
                    workoutOption.setAttribute("id", (date + '-' + currentMonth + '-' + currentYear + Workouts[k]));
                    workoutOption.text = Workouts[k]
                    selectWorkOut.append(workoutOption);
                    modalContent.appendChild(selectWorkOut);
                }

                // for (let h = 0; h < Workouts.length; h++){
                //    let workoutOption = document.createElement('option').text = Workouts[i]
                //    console.log(Workouts[i])
                //    selectWorkOut.append(workoutOption)
                // };


                // creating closing button for modal
                // let closeModalBtn = document.createElement('button')
                // closeModalBtn.setAttribute('id', 'closeModalBtn')
                // closeModalBtn.setAttribute('class', 'Btn')
                // closeModalBtn.innerHTML = "Close"

                // modalContent.appendChild(closeModalBtn);
                modalDialog.appendChild(modalContent);
                modalLG.appendChild(modalDialog);
                cell.appendChild(modalLG);

                if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                    cell.classList.add("bg-primary");
                } // color today's date
                cell.appendChild(cellText);
                row.appendChild(cell);
                date++;



                // function to make modal appear
                function largerTD() {
                    $('.modal').modal('show')
                }
            }


        }

        tbl.appendChild(row); // appending each row into calendar body.
    }

}

// let table = document.getElementById('calendar');
// let cellID = document.getElementById(date + '-' + currentMonth + '-' + currentYear);
// for (let l = 0; l < cellID.length; l++) {
//     if (cellID[l] !== "") {
//         cellID[l].onclick = function () { largerTD(); };

//     }

// }

//function for setting multiple attributes to a singel element
function setAttributes(el, attrs) {
    for (var key in attrs) {
        el.setAttribute(key, attrs[key]);
    }
}

// closing modal button function

function smallerTD() {
    $('#' +date + '-' + currentMonth + '-' + currentYear + '-modal').modal('hide')
}
// document.getElementById('closeModalBtn').addEventListener('click', function(){
//     $('.modal').modal('hide')
// })
