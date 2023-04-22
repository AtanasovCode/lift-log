import bench from '../icons/bench.png';
import deadlift from '../icons/deadlift.png';
import ohp from '../icons/ohp.png';
import curl from '../icons/curl.png';
import squat from '../icons/squat.png';
import lat from '../icons/lat.png';


const months = [
    {
        month: "January",
        value: 1
    },
    {
        month: "February",
        value: 2
    },
    {
        month: "March",
        value: 3
    },
    {
        month: "April",
        value: 4
    },
    {
        month: "May",
        value: 5
    },
    {
        month: "June",
        value: 6
    },
    {
        month: "July",
        value: 7
    },
    {
        month: "August",
        value: 8
    },
    {
        month: "September",
        value: 9
    },
    {
        month: "October",
        value: 10
    },
    {
        month: "November",
        value: 11
    },
    {
        month: "December",
        value: 12
    },
];

const LiftDataBench = [
    {
        Exercise: "Bench Press",
        Month: "Jan",
        Lift: 30
    },
    {
        Exercise: "Bench Press",
        Month: "Feb",
        Lift: 40
    },
    {
        Exercise: "Bench Press",
        Month: "Mar",
        Lift: 45
    },
    {
        Exercise: "Bench Press",
        Month: "Apr",
        Lift: 55
    },
    {
        Exercise: "Bench Press",
        Month: "May",
        Lift: 50
    },
    {
        Exercise: "Bench Press",
        Month: "Jun",
        Lift: 60
    },
    {
        Exercise: "Bench Press",
        Month: "Jul",
        Lift: 70
    },
    {
        Exercise: "Bench Press",
        Month: "Aug",
        Lift: 75
    },
    {
        Exercise: "Bench Press",
        Month: "Sep",
        Lift: 75
    },
    {
        Exercise: "Bench Press",
        Month: "Oct",
        Lift: 80
    },
    {
        Exercise: "Bench Press",
        Month: "Nov",
        Lift: 90
    },
    {
        Exercise: "Bench Press",
        Month: "Dec",
        Lift: 100
    },
];

const LiftDataSquat = [
    {
        Exercise: "Squat",
        Month: "Jan",
        Lift: 30
    },
    {
        Exercise: "Squat",
        Month: "Feb",
        Lift: 40
    },
    {
        Exercise: "Squat",
        Month: "March",
        Lift: 55
    },
    {
        Exercise: "Squat",
        Month: "Apr",
        Lift: 70
    },
    {
        Exercise: "Squat",
        Month: "May",
        Lift: 85
    },
    {
        Exercise: "Squat",
        Month: "Jun",
        Lift: 90
    },
    {
        Exercise: "Squat",
        Month: "July",
        Lift: 100
    },
    {
        Exercise: "Squat",
        Month: "Aug",
        Lift: 110
    },
    {
        Exercise: "Squat",
        Month: "Sep",
        Lift: 120
    },
    {
        Exercise: "Squat",
        Month: "Oct",
        Lift: 135
    },
    {
        Exercise: "Squat",
        Month: "Nov",
        Lift: 130
    },
    {
        Exercise: "Squat",
        Month: "Dec",
        Lift: 140
    },
];

const LiftDataDeadlift = [
    {
        Exercise: "Deadlift",
        Month: "Jan",
        Lift: 60
    },
    {
        Exercise: "Deadlift",
        Month: "Feb",
        Lift: 75
    },
    {
        Exercise: "Deadlift",
        Month: "Mar",
        Lift: 80
    },
    {
        Exercise: "Deadlift",
        Month: "Apr",
        Lift: 95
    },
    {
        Exercise: "Deadlift",
        Month: "May",
        Lift: 115
    },
    {
        Exercise: "Deadlift",
        Month: "Jun",
        Lift: 135
    },
    {
        Exercise: "Deadlift",
        Month: "Jul",
        Lift: 155
    },
    {
        Exercise: "Deadlift",
        Month: "Aug",
        Lift: 175
    },
    {
        Exercise: "Deadlift",
        Month: "Sep",
        Lift: 195
    },
    {
        Exercise: "Deadlift",
        Month: "Oct",
        Lift: 205
    },
    {
        Exercise: "Deadlift",
        Month: "Nov",
        Lift: 225
    },
    {
        Exercise: "Deadlift",
        Month: "Dec",
        Lift: 235
    },
];

const StrongestLifts = [
    {
        icon: { bench },
        name: "Bench Press",
        times: 125,
    },
    {
        name: "Squat",
        times: 165,
        icon: { squat }
    },
    {
        name: "Overhead Press",
        times: 85,
        icon: { ohp }
    },
    {
        name: "Deadlift",
        times: 185,
        icon: { deadlift }
    },
    {
        name: "Curl",
        times: 65,
        icon: { curl }
    },
    {
        name: "Lat Pulldown",
        times: 90,
        icon: { lat }
    },
];


const exercises = [
    { name: 'Bench Press', category: 'Chest' },
    { name: 'Incline Bench Press', category: 'Chest' },
    { name: 'Cable Crossover', category: 'Chest' },
    { name: 'Push-up', category: 'Chest' },
    { name: 'Bent-over Row', category: 'Back' },
    { name: 'Low Seated Row', category: 'Back' },
    { name: 'Pull-up', category: 'Back' },
    { name: 'Deadlift', category: 'Back' },
    { name: 'Lat Pulldown', category: 'Back' },
    { name: 'Squat', category: 'Legs' },
    { name: 'Lunges', category: 'Legs' },
    { name: 'Leg Press', category: 'Legs' },
    { name: 'Calf Raise', category: 'Legs' },
    { name: 'Bicep Curl', category: 'Biceps' },
    { name: 'Hammer Curl', category: 'Biceps' },
    { name: 'Chin-up', category: 'Biceps' },
    { name: 'Tricep Kickback', category: 'Triceps' },
    { name: 'Skull Crusher', category: 'Triceps' },
    { name: 'Dips', category: 'Triceps' },
    { name: 'Rope Pushdown', category: 'Triceps' },
    { name: 'Shoulder Press', category: 'Shoulders' },
    { name: 'Lateral Raise', category: 'Shoulders' },
    { name: 'Front Raise', category: 'Shoulders' },
    { name: 'Rear Delt Fly', category: 'Shoulders' },
  ];

export {
    months,
    LiftDataBench,
    LiftDataSquat,
    LiftDataDeadlift,
    StrongestLifts,
    exercises,
};