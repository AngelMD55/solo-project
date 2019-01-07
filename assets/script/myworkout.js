displayNavInfo()

const Workouts = ['--', 'Crossfit', 'Freeweights'];
// const Crossfit = [ 'Squats', 'Press', 'Lift', 'Olympic Lifting', 'Gymnastics', 'Other'];
// const Squats = ['Air Squat', 'Front Squat','Overhead Squat','Back Squat', 'Back Squat'];



const CrossfitArr = {
    'Squats': ['Air Squat', 'Front Squat', 'Overhead Squat', 'Back Squat', 'Back Squat'],
    'Press': ['Push Press', 'Push Jerk', 'Shoulder Press'],
    'Lift': ['Deadlift', 'Sumo DeadLift', 'Medicine-Ball Clean'],
    'Olympic Lifting': ['Clean', 'Power Clean', 'Hang-Clean', 'Snatch', 'Power Snatch', 'Dumbbell Snatch', 'Cluster'],
    'Gymnastics': ['Push-Up', 'Sit-up', 'Pull-Up', 'Ring Row', 'Chest To Bar', 'Lsit', 'Lsit Pull Up', 'Box Jump', 'Ring Dip', 'Burpee', 'Toes To Bar', 'Hand Stand Push Up', 'Kipping', 'Rope Climb', 'Legless Rope Climb'],
    'Other': ['Row', 'Truster', 'Jump Ropes', 'Double Unders', 'Wall Balls', 'Muscle-Up']
}

// console.log(CrossfitArr)

// 'Freeweights': [{
//     'Chest': ['Flat Barbell Bench Press', 'Incline Barbell Bench Press', 'Decline Barbell Bench Press', 'Flat Dumbbell Bench Press', 'Incline Dumbell Bench Press', 'Decline Dumbbell Bench Press', 'Flat Chest Press Machine', 'Incline Chest Press Machine', 'Decline Chest Press Machine', 'Dips', 'Push Up', 'Flat Dumbell Flyers', 'Incline Dumbbell Flyers', 'Decline Dumbbell Flyers', 'Peck Deck Machine', 'Cable Crosovers/ Cable Flyers'],
//     'Back': ['Pull-Up', 'Chin-Up', 'Lat Pull-Down', 'Bent Over Barbell Rows', 'Bent Over Dumbbell Rows', 'T-Bar Rows', 'Seated Cable Rows', 'Chest Supported Barbell Rows', 'Chest Supported Dumbbell Rows', 'Chest Supported Machine Rows', 'Inverted Rows', 'Barbell, Dumbbell Shrugs', 'Machine Shrugs'],
//     'Shoulder': ['Seated Overhead Barbell Press', 'Seated Overhead Dumbbell Press', 'Standing Overhead Barbell Press', 'Standing Overhead Dumbbell Press', 'Overhead Machine Press', 'Arnold Press', 'Barbell Upright Rows', 'Dumbbell Upright Rows', 'Machine Upright Rows', 'Dumbbell Lateral Raises', 'Cable Lateral Raises', 'Machine Lateral Raises', 'Dumbbell Front Raises', 'Cable Front Raises', 'Machine Front Raises'],
//     'Quadriceps': ['Barbell Squats', 'Dumbbell Squats', 'Barbell Front-Squats', 'Dumbell Front-Squats', 'Barbell Split-Squats', 'Dumbbell Split-Squats', 'Barbell Lunges', 'Dumbbell Lunges', 'Barbell Step-Up', 'Dumbbell Step-Up', 'Leg Press', 'Single Leg Press', 'Machine Squat', 'Leg Extensions'],
//     'Hamstring' : ['Barbell Romanian Deadlifts', 'Dumbbell Romanian Deadlifts', 'Barbell Straight Leg Deadlifts', 'Dumbbell Straight Leg Deadlifts', 'Barbell Sumo Deadlifts', 'Dumbbell Sumo Deadlifts', 'Glute-Ham Raises', 'Hyperextensions', 'Cable Pull-Throughs', 'Good-Mornings', 'Leg Curls'],
//     'Biceps' : ['Standing Barbell Curls', 'Standing Dumbbell Curls', 'Barbell Preacher Curls', 'Dumbbell Preacher Curls', 'Seated Dumbbell Curls', 'Incline Dumbbell Curls', 'Hammer Curls', 'Concentration Curls', 'Cable Curls', 'Biceps Curl Machine'],
//     'Triceps' : ['Dips', 'Flat Close Grip Bench Press', 'Decline Close Grip Bench Press', 'Close Grip Push-Ups', 'Laying Barbell Triceps Extensions', 'Laying Dumbbell Triceps Extensions', 'Skull Crushers', 'Overhead Barbell Triceps Extensions', 'Overhead Dumbbell Triceps Extensions', 'Cable Press-Downs', 'Bench Dips']
// }]


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
                cell.setAttribute('data-toggle', "modal");
                cell.setAttribute('data-modal', (date + '-' + currentMonth + '-' + currentYear + '-modal'));

                // calling onclick function
                cell.onclick = largerTD;

                let cellText = document.createTextNode(date);

                //Large Modal
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

                let modalHeader = document.createElement('div');
                modalHeader.setAttribute('class', ('bg-secondary p-1'));
                modalHeader.setAttribute('id', 'modalHeader');
                let modalHeaderH5 = document.createElement('h5');
                $(modalHeaderH5).text('Create your Work Out');

                modalLG.prepend(modalHeader);
                modalHeader.append(modalHeaderH5);

                let modalDialog = document.createElement('div');
                modalDialog.setAttribute('class', "modal-dialog modal-lg");

                let modalContent = document.createElement('div');
                modalContent.setAttribute('class', "modal-content");

                // Modal content Dropdown creation
                let labelSelectWorkOut = document.createElement('label');
                labelSelectWorkOut.setAttribute('id', (date + '-' + currentMonth + '-' + currentYear + '-label'));
                $('#' + date + '-' + currentMonth + '-' + currentYear + '-label').text('Select WorkOut');

                // Modal Select Creation

                let workOutStyle = document.createElement('h6');
                workOutStyle.setAttribute('class', 'mt-3 mb-0')
                $(workOutStyle).text('Select Work Out Style:')


                let selectWorkOut = document.createElement('select');
                selectWorkOut.setAttribute('id', 'modalSelectUp')
                modalLG.append(workOutStyle)
                // selectWorkOut.text('placeholder', 'Choose Work Out')
                labelSelectWorkOut.setAttribute('id', (date + '-' + currentMonth + '-' + currentYear + '-select'));
                $('#' + date + '-' + currentMonth + '-' + currentYear + '-select').text('Select WorkOut');

                // Modal Option Creation
                for (let k = 0; k < Workouts.length; k++) {
                    let workoutOption = document.createElement('option')
                    workoutOption.setAttribute("id", (date + '-' + currentMonth + '-' + currentYear + Workouts[k]));

                    workoutOption.text = Workouts[k];
                    selectWorkOut.append(workoutOption);
                    modalContent.appendChild(selectWorkOut);

                    if (workoutOption === 'Crossfit') {
                        alert('ok')
                        for (let h = 0; h < CrossfitArr.length; h++) {
                            let crossfitOption = document.createElement('option')
                            crossfitOption.text = CrossfitArr[h];
                            workoutOption.append(crossfitOption);
                        }
                    }
                }


                // for (let h = 0; h < Workouts.length; h++){
                //    let workoutOption = document.createElement('option').text = Workouts[i]
                //    console.log(Workouts[i])
                //    selectWorkOut.append(workoutOption)
                // };


                // creating closing button for modal
                let closeModalBtn = document.createElement('button')
                closeModalBtn.setAttribute('id', 'closeModalBtn')
                closeModalBtn.setAttribute('class', 'Btn')
                closeModalBtn.setAttribute('data-dismiss', "modal")
                closeModalBtn.innerHTML = "Close"

                modalContent.appendChild(closeModalBtn);
                modalDialog.appendChild(modalContent);
                modalLG.appendChild(modalDialog);
                document.getElementsByTagName('body')[0].appendChild(modalLG);

                if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                    cell.classList.add("bg-primary");
                } // color today's date
                cell.appendChild(cellText);
                row.appendChild(cell);
                date++;



                // function to make modal appear
                function largerTD(e) {
                    let clickedDate = e.path[0];
                    let modalId = clickedDate.getAttribute('data-modal');
                    // console.log(e);
                    $(`#${modalId}`).modal('show');
                    closeModalBtn.onclick = smallerTD
                }

                // function to hide modal
                function smallerTD(e) {
                    // alert('clicked')
                    let clickedDate = e.path[0];
                    let modalId = clickedDate.getAttribute('data-modal');
                    $(`#${modalId}`).modal('toggle');
                }

            }

        }

        tbl.appendChild(row); // appending each row into calendar body.
    }

}

//function for setting multiple attributes to a single element
function setAttributes(el, attrs) {
    for (var key in attrs) {
        el.setAttribute(key, attrs[key]);
    }
}

