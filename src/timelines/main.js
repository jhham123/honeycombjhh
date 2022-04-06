import preamble from "./preamble";
import ev1 from "../trials/ev1";
import ev2 from "../trials/ev2";
import ev3 from "../trials/ev3";
import ev4 from "../trials/ev4";
import browserCheck from "../trials/browserCheck";
import review1 from "../trials/review1";
import review2 from "../trials/review2";
import mvguide from "../trials/mvguide";
import wheel1a from "../trials/wheel1a";
import wheel1b from "../trials/wheel1b";
import wheel1c from "../trials/wheel1c";
import wheel2a from "../trials/wheel2a";
import wheel2b from "../trials/wheel2b";
import wheel2c from "../trials/wheel2c";
import wheel3a from "../trials/wheel3a";
import wheel3c from "../trials/wheel3c";
import wheel4a from "../trials/wheel4a";
import wheel4c from "../trials/wheel4c";
import wheel5a from "../trials/wheel5a";
import wheel5c from "../trials/wheel5c";
import wheel6a from "../trials/wheel6a";
import wheel6c from "../trials/wheel6c";
import wheel7a from "../trials/wheel7a";
import wheel7c from "../trials/wheel7c";
import wheel8a from "../trials/wheel8a";
import wheel8c from "../trials/wheel8c";
import wheel9a from "../trials/wheel9a";
import wheel9c from "../trials/wheel9c";
import wheel10a from "../trials/wheel10a";
import wheel10c from "../trials/wheel10c";
import wheel11a from "../trials/wheel11a";
import wheel11c from "../trials/wheel11c";
import wheel12a from "../trials/wheel12a";
import wheel12c from "../trials/wheel12c";
import wheelp from "../trials/wheelp";
import waiting from "../trials/waiting";
import waiting2 from "../trials/waiting2";
import happinessSlider from "../trials/happinessSlider";
import worrySlider from "../trials/worrySlider";
import anxietySlider from "../trials/anxietySlider";

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
const result = getRandomInt(1,25)
var envelope1 = 0
var envelope2 = 1
var wheels1 = 2
var wheelm1 = 3
var wheelt1 = 4
var wheels2 = 5
var wheelm2 = 6
var wheelt2 = 7
var reviewer1 = 8

console.log(result)
if (result === 1){
	envelope1 = ev1()
	envelope2 = ev3()
	wheels1 = wheel1b("$5")
	wheels2 = wheel2b("-$7")
	wheelm1 = wheel1a()
	wheelm2 = wheel2a()
	wheelt1 = wheel1c(1)
	wheelt2 = wheel2c(8)
	reviewer1 = review1("-$3")
} else if (result === 2){
	envelope1 = ev1()
	envelope2 = ev3()
	wheels1 = wheel1b("$5")
	wheels2 = wheel2b("-$7")
	wheelm1 = wheel3a()
	wheelm2 = wheel4a()
	wheelt1 = wheel3c(1)
	wheelt2 = wheel4c(8)
	reviewer1 = review1("-$3")
} else if (result === 3){
	envelope1 = ev1()
	envelope2 = ev3()
	wheels1 = wheel1b("$5")
	wheels2 = wheel2b("-$7")
	wheelm1 = wheel5a()
	wheelm2 = wheel6a()
	wheelt1 = wheel5c(1)
	wheelt2 = wheel6c(8)
	reviewer1 = review1("-$3")
} else if (result === 4){
	envelope1 = ev1()
	envelope2 = ev3()
	wheels1 = wheel1b("$5")
	wheels2 = wheel2b("-$7")
	wheelm1 = wheel7a()
	wheelm2 = wheel8a()
	wheelt1 = wheel7c(1)
	wheelt2 = wheel8c(8)
	reviewer1 = review1("-$3")
} else if (result === 5){
	envelope1 = ev1()
	envelope2 = ev3()
	wheels1 = wheel1b("$5")
	wheels2 = wheel2b("-$7")
	wheelm1 = wheel9a()
	wheelm2 = wheel10a()
	wheelt1 = wheel9c(1)
	wheelt2 = wheel10c(8)
	reviewer1 = review1("-$3")
} else if (result === 6){
	envelope1 = ev1()
	envelope2 = ev3()
	wheels1 = wheel1b("$5")
	wheels2 = wheel2b("-$7")
	wheelm1 = wheel11a()
	wheelm2 = wheel12a()
	wheelt1 = wheel11c(1)
	wheelt2 = wheel12c(8)
	reviewer1 = review1("-$3")
} else if (result === 7){
	envelope1 = ev2()
	envelope2 = ev4()
	wheels1 = wheel2b("$4")
	wheels2 = wheel1b("-$6")
	wheelm1 = wheel2a()
	wheelm2 = wheel1a()
	wheelt1 = wheel2c(7)
	wheelt2 = wheel1c(2)
	reviewer1 = review1("-$1")
} else if (result === 8){
	envelope1 = ev2()
	envelope2 = ev4()
	wheels1 = wheel2b("$4")
	wheels2 = wheel1b("-$6")
	wheelm1 = wheel4a()
	wheelm2 = wheel3a()
	wheelt1 = wheel4c(7)
	wheelt2 = wheel3c(2)
	reviewer1 = review1("-$1")
} else if (result === 9){
	envelope1 = ev2()
	envelope2 = ev4()
	wheels1 = wheel2b("$4")
	wheels2 = wheel1b("-$6")
	wheelm1 = wheel6a()
	wheelm2 = wheel5a()
	wheelt1 = wheel6c(7)
	wheelt2 = wheel5c(2)
	reviewer1 = review1("-$1")
} else if (result === 10){
	envelope1 = ev2()
	envelope2 = ev4()
	wheels1 = wheel2b("$4")
	wheels2 = wheel1b("-$6")
	wheelm1 = wheel8a()
	wheelm2 = wheel7a()
	wheelt1 = wheel8c(7)
	wheelt2 = wheel7c(2)
	reviewer1 = review1("-$1")
} else if (result === 11){
	envelope1 = ev2()
	envelope2 = ev4()
	wheels1 = wheel2b("$4")
	wheels2 = wheel1b("-$6")
	wheelm1 = wheel10a()
	wheelm2 = wheel9a()
	wheelt1 = wheel10c(7)
	wheelt2 = wheel9c(2)
	reviewer1 = review1("-$1")
} else if (result === 12){
	envelope1 = ev2()
	envelope2 = ev4()
	wheels1 = wheel2b("$4")
	wheels2 = wheel1b("-$6")
	wheelm1 = wheel12a()
	wheelm2 = wheel11a()
	wheelt1 = wheel12c(7)
	wheelt2 = wheel11c(2)
	reviewer1 = review1("-$1")
} else if (result === 13){
	envelope1 = ev4()
	envelope2 = ev2()
	wheels1 = wheel1b("-$5")
	wheels2 = wheel2b("$3")
	wheelm1 = wheel1a()
	wheelm2 = wheel2a()
	wheelt1 = wheel1c(2)
	wheelt2 = wheel2c(7)
	reviewer1 = review1("-$1")
} else if (result === 14){
	envelope1 = ev4()
	envelope2 = ev2()
	wheels1 = wheel1b("-$5")
	wheels2 = wheel2b("$3")
	wheelm1 = wheel3a()
	wheelm2 = wheel4a()
	wheelt1 = wheel3c(2)
	wheelt2 = wheel4c(7)
	reviewer1 = review1("-$1")
} else if (result === 15){
	envelope1 = ev4()
	envelope2 = ev2()
	wheels1 = wheel1b("-$5")
	wheels2 = wheel2b("$3")
	wheelm1 = wheel5a()
	wheelm2 = wheel6a()
	wheelt1 = wheel5c(2)
	wheelt2 = wheel6c(7)
	reviewer1 = review1("-$1")
} else if (result === 16){
	envelope1 = ev4()
	envelope2 = ev2()
	wheels1 = wheel1b("-$5")
	wheels2 = wheel2b("$3")
	wheelm1 = wheel7a()
	wheelm2 = wheel8a()
	wheelt1 = wheel7c(2)
	wheelt2 = wheel8c(7)
	reviewer1 = review1("-$1")
} else if (result === 17){
	envelope1 = ev4()
	envelope2 = ev2()
	wheels1 = wheel1b("-$5")
	wheels2 = wheel2b("$3")
	wheelm1 = wheel9a()
	wheelm2 = wheel10a()
	wheelt1 = wheel9c(2)
	wheelt2 = wheel10c(7)
	reviewer1 = review1("-$1")
} else if (result === 18){
	envelope1 = ev4()
	envelope2 = ev2()
	wheels1 = wheel1b("-$5")
	wheels2 = wheel2b("$3")
	wheelm1 = wheel11a()
	wheelm2 = wheel12a()
	wheelt1 = wheel11c(2)
	wheelt2 = wheel12c(7)
	reviewer1 = review1("-$1")
} else if (result === 19){
	envelope1 = ev3()
	envelope2 = ev1()
	wheels1 = wheel2b("-$4")
	wheels2 = wheel1b("$6")
	wheelm1 = wheel2a()
	wheelm2 = wheel1a()
	wheelt1 = wheel2c(8)
	wheelt2 = wheel1c(1)
	reviewer1 = review1("$1")
} else if (result === 20){
	envelope1 = ev3()
	envelope2 = ev1()
	wheels1 = wheel2b("-$4")
	wheels2 = wheel1b("$6")
	wheelm1 = wheel4a()
	wheelm2 = wheel3a()
	wheelt1 = wheel4c(8)
	wheelt2 = wheel3c(1)
	reviewer1 = review1("$1")
} else if (result === 21){
	envelope1 = ev3()
	envelope2 = ev1()
	wheels1 = wheel2b("-$4")
	wheels2 = wheel1b("$6")
	wheelm1 = wheel6a()
	wheelm2 = wheel5a()
	wheelt1 = wheel6c(8)
	wheelt2 = wheel5c(1)
	reviewer1 = review1("$1")
} else if (result === 22){
	envelope1 = ev3()
	envelope2 = ev1()
	wheels1 = wheel2b("-$4")
	wheels2 = wheel1b("$6")
	wheelm1 = wheel8a()
	wheelm2 = wheel7a()
	wheelt1 = wheel8c(8)
	wheelt2 = wheel7c(1)
	reviewer1 = review1("$1")
} else if (result === 23){
	envelope1 = ev3()
	envelope2 = ev1()
	wheels1 = wheel2b("-$4")
	wheels2 = wheel1b("$6")
	wheelm1 = wheel10a()
	wheelm2 = wheel9a()
	wheelt1 = wheel10c(8)
	wheelt2 = wheel9c(1)
	reviewer1 = review1("$1")
} else if (result === 24){
	envelope1 = ev3()
	envelope2 = ev1()
	wheels1 = wheel2b("-$4")
	wheels2 = wheel1b("$6")
	wheelm1 = wheel12a()
	wheelm2 = wheel11a()
	wheelt1 = wheel12c(8)
	wheelt2 = wheel11c(1)
	reviewer1 = review1("$1")
}

const primaryTimeline = [
	browserCheck(),
	preamble,
	wheelp(),
	wheelp(),
	wheelp(),
	waiting2(),
	happinessSlider,
	envelope1,
	waiting2(),
  happinessSlider,
  wheels1,
	anxietySlider,
	mvguide(),
	browserCheck(),
	wheelm1,
	browserCheck(),
	waiting(),
	worrySlider,
	anxietySlider,
	wheelt1,
  reviewer1,
	happinessSlider,
  envelope2,
	waiting2(),
  happinessSlider,
  wheels2,
	anxietySlider,
	mvguide(),
	browserCheck(),
	wheelm2,
	browserCheck(),
	waiting(),
	worrySlider,
	anxietySlider,
	wheelt2,
  review2(),
	happinessSlider,
];


// a timeline highlighting several trial types

// a simplified timeline showing just the wheel trial
//const primaryTimeline = [preamble, wheel()];

// preliminary code showing webgazer functionality.
// Webgazer is a eye tracking software from Brown

// jsPsych.init({
//   timeline: primaryTimeline,
//   extensions: [
//     {type: 'webgazer'}
//   ]
// })

export const tl = primaryTimeline;
