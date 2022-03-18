import {lang} from "../config/main";
import $ from "jquery";
import Timer from "easytimer.js";

var timer = new Timer();

timer.addEventListener('secondTenthsUpdated', function (e) {
    $('#basicUsage').html(timer.getTimeValues().toString(['minutes', 'seconds', 'secondTenths']));
});

let key_array = ['q','p','z','m']

const waiting3 = () => {
  return {
    type: "html_button_response",
    stimulus: '<div id="basicUsage" style="color:white; font-size: 48px">0:00</div>',
		prompt: '<div class="happiness-text-slider">Press on the Q, P, Z, and M keys on your keyboard and hold for 1 minute to continue.</div>',
		choices: [lang.prompt.continue.button],
		button_html: '<button class="jspsych-btn" id="btn">%choice%</button>',
		on_load: () => {
			document.getElementById("btn").style.visibility = "hidden"
			window.addEventListener('keydown', function (event) {
				if (event.key === key_array[0] || event.key === key_array[1] || event.key === key_array[2] || event.key === key_array[3]) {
					const key1 = event.key;
					console.log("\n\nKey1", key1);
					window.addEventListener('keydown', function (event) {
						debugger
						key_array.splice(key_array.indexOf(key1),1);
						const key2 = event.key;
						console.log("\n\nKey2", key2);
						if (event.key === key_array[0] || event.key === key_array[1] || event.key === key_array[2]) {
							window.addEventListener('keydown', function (event) {
							key_array.splice(key_array.indexOf(key2),1);
								if (event.key === key_array[0] || event.key === key_array[1]) {
									key_array.splice(key_array.indexOf(event.key),1);
									window.addEventListener('keydown', function (event) {
										if (event.key === key_array[0]) {
											timer.start({precision: 'secondTenths', target: {seconds:10}})
											timer.addEventListener('targetAchieved', function (e) {
    										setTimeout(() => document.getElementById("btn").style.visibility = "visible", 100);
												setTimeout(() => document.getElementById("basicUsage").style.visibility = "hidden", 100)
											});
										}
									})
								}
							})
						}
					})
				}
			})
  	}
	};
};


export default waiting3;
