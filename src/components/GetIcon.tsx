//Importing all the icons for the exercises
import bench from '../assets/icons/bench.svg';
import curl from '../assets/icons/curl.svg';
import ohp from '../assets/icons/ohp.svg';
import lat from '../assets/icons/lat.svg';
import squat from '../assets/icons/squat.svg';
import deadlift from '../assets/icons/deadlift.svg';
import frontRaise from '../assets/icons/front-raise.svg';
import hammer from '../assets/icons/hammer.svg';
import chinUp from '../assets/icons/chin-up.svg';
import calfRaise from '../assets/icons/calf-raise.svg';
import pullUp from '../assets/icons/pull-up.svg';
import pushUp from '../assets/icons/push-up.svg';
import latRaise from '../assets/icons/lat-raise.svg';
import inclineBench from '../assets/icons/incline-bp.svg';
import dips from '../assets/icons/dips.svg';
import cableCrossover from '../assets/icons/cable-crossover.svg';
import bentRow from '../assets/icons/row.svg';
import lowSeatedRow from '../assets/icons/cable-seated-row.svg';
import lunges from '../assets/icons/lunges.svg';
import legPress from '../assets/icons/leg-press.svg';
import ropePushdown from '../assets/icons/rope-extension.svg';
import kickbacks from '../assets/icons/tri-kickback.svg';
import triExtension from '../assets/icons/tri-extension.svg';
import deltFly from '../assets/icons/delt-fly.svg';

  //each exercise gets an icon
  export const getExerciseIcon = (name: string | null) => {
    switch (name) {
      case "Bench Press": return bench;
      case "Incline Press": return inclineBench;
      case "Cable Crossover": return cableCrossover;
      case "Push-up": return pushUp;
      case "Bent-over Row": return bentRow;
      case "Seated Row": return lowSeatedRow;
      case "Pull-up": return pullUp;
      case "Deadlift": return deadlift;
      case "Lat Pulldown": return lat;
      case "Squat": return squat;
      case "Lunges": return lunges;
      case "Leg Press": return legPress;
      case "Calf Raise": return calfRaise;
      case "Rope Pushdown": return ropePushdown;
      case "Tricep Kickback": return kickbacks;
      case "Bicep Curl": return curl;
      case "Hammer Curl": return hammer;
      case "Chin-up": return chinUp;
      case "Tricep Extension": return triExtension;
      case "Dips": return dips;
      case "Overhead Press": return ohp;
      case "Lateral Raise": return latRaise;
      case "Front Raise": return frontRaise;
      case "Rear Delt Fly": return deltFly;
    }
  }