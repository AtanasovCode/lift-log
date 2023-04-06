import bench from '../icons/bench.png';
import deadlift from '../icons/deadlift.png';
import ohp from '../icons/ohp.png';
import curl from '../icons/curl.png';
import squat from '../icons/squat.png';
import lat from '../icons/lat.png';

const LiftData = [
    {
        Exercise: "Barbell Bench Press",
        Month: "Jan",
        Lift: 45
    },
    {
        Exercise: "Barbell Bench Press",
        Month: "Feb",
        Lift: 55
    },
    {
        Exercise: "Barbell Bench Press",
        Month: "Mar",
        Lift: 65
    },
    {
        Exercise: "Barbell Bench Press",
        Month: "Apr",
        Lift: 70
    },
    {
        Exercise: "Barbell Bench Press",
        Month: "May",
        Lift: 80
    },
    {
        Exercise: "Barbell Bench Press",
        Month: "Jun",
        Lift: 85
    },
    {
        Exercise: "Barbell Bench Press",
        Month: "Jul",
        Lift: 95
    },
    {
        Exercise: "Barbell Bench Press",
        Month: "Aug",
        Lift: 100
    },
];

const StrongestLifts = [
    {
        icon: {bench},
        name: "Bench Press",
        times: 125,
    },
    {
        name: "Squat",
        times: 165,
        icon: {squat}
    },
    {
        name: "Overhead Press",
        times: 85,
        icon: {ohp}
    },
    {
        name: "Deadlift",
        times: 185,
        icon: {deadlift}
    },
    {
        name: "Barbell Curl",
        times: 65,
        icon: {curl}
    },
    {
        name: "Lat Pulldown",
        times: 90,
        icon: {lat}
    },
]

export { LiftData, StrongestLifts };