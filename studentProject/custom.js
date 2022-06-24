var mathAverage = 0;
var bioAverage = 0;
var psyAverage = 0;
var tempMath = 0;
var tempBio = 0;
var tempPsy = 0;

const studentsAverage = [];
var studentAndAverage = [];
var mathNotes = [];
var bioNotes = [];
var psyNotes = [];
var secondLargestMathNote = 0;
var secondLargestBioNote = 0;
var secondLargestPsyNote = 0;
var maxAverage = 0;

const students = [
    {
        id: "Ali",
        Average: null,
        math: { exam: 100, viva: 100 },
        bio: { exam: 100, viva: 100 },
        psy: { exam: 100, viva: 100 }
    },
    {
        id: "Burak",
        Average: null,
        math: { exam: 0, viva: 0 },
        bio: { exam: 0, viva: 0 },
        psy: { exam: 18, viva: 0 }
    },
    {
        id: "Ceren",
        Average: null,
        math: { exam: 51, viva: 80 },
        bio: { exam: 20, viva: 51 },
        psy: { exam: 100, viva: 97 }
    },
    {
        id: "Deniz",
        Average: null,
        math: { exam: 12, viva: 90 },
        bio: { exam: 43, viva: 80 },
        psy: { exam: 30, viva: 23 }
    },
    {
        id: "Ekin",
        Average: null,
        math: { exam: 90, viva: 20 },
        bio: { exam: 31, viva: 50 },
        psy: { exam: 70, viva: 99 }
    },
    {
        id: "Deli",
        Average: null,
        math: { exam: 90, viva: 20 },
        bio: { exam: 31, viva: 50 },
        psy: { exam: 70, viva: 99 }
    },
];


function secondLargestNote() {
    for (let i = 0; i < students.length; i++) {

        tempMath = ((students[i].math.exam + students[i].math.viva) / 2) / students.length;
        mathAverage += tempMath;

        tempBio = ((students[i].bio.exam + students[i].bio.viva) / 2) / students.length;
        bioAverage += tempBio;

        tempPsy = ((students[i].psy.exam + students[i].psy.viva) / 2) / students.length;
        psyAverage += tempPsy;
    }

    courseArray = [psyAverage, bioAverage, mathAverage];

    function largestCourse() {

        maxAverage = courseArray[0];

        for (let i = 0; i < courseArray.length; i++) {
            if (courseArray[i] > maxAverage) {
                maxAverage = courseArray[i];
            }
        }
    }

    largestCourse();

    if (maxAverage == mathAverage) {
        //math is bigger
        for (let i = 0; i < students.length; i++) {
            mathNotes[i] = (students[i].math.exam + students[i].math.viva) / 2;
        }

        secondLargestMathNote = mathNotes[mathNotes.indexOf(secondLargest(mathNotes))];
        students[mathNotes.indexOf(secondLargestMathNote)].math.exam = 100;
    }

    else if (maxAverage == bioAverage) {
        //bio is bigger
        for (let i = 0; i < students.length; i++) {
            bioNotes[i] = (students[i].bio.exam + students[i].bio.viva) / 2;
        }

        secondLargestBioNote = bioNotes[bioNotes.indexOf(secondLargest(bioNotes))];
        students[bioNotes.indexOf(secondLargestBioNote)].bio.exam = 100;
    }

    else if (maxAverage == psyAverage) {
        //psy is bigger
        for (let i = 0; i < students.length; i++) {
            psyNotes[i] = (students[i].psy.exam + students[i].psy.viva) / 2;
        }
        secondLargestPsyNote = psyNotes[psyNotes.indexOf(secondLargest(psyNotes))];
        students[psyNotes.indexOf(secondLargestPsyNote)].psy.exam = 100;

    }
}

function secondLargest(arr) {
    var max1st = arr[0];
    var max2nd = 0;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max1st) {
            max2nd = max1st;
            max1st = arr[i];
        }

        else if (arr[i] > max2nd && arr[i] !== max1st) {
            max2nd = arr[i];
        }
    }
    return max2nd;
}

function seriedStudentAverages() {

    for (let i = 0; i < students.length; i++) {
        studentsAverage[i] = (((students[i].math.exam + students[i].math.viva) / 2) +
            ((students[i].bio.exam + students[i].bio.viva) / 2) +
            ((students[i].psy.exam + students[i].psy.viva) / 2)) / 3;

        students[i].Average = studentsAverage[i];

        studentAndAverage.push({
            name: students[i].id,
            average: students[i].Average
        })
    }
    studentAndAverage.sort((a, b) => {
        return a.average - b.average
    }).reverse();
    console.table(studentAndAverage);
};

secondLargestNote();
seriedStudentAverages();
