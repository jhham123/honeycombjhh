import {lang} from "../config/main";
import $ from "jquery";
import Timer from "easytimer.js";

var timer = new Timer();

timer.addEventListener('secondTenthsUpdated', function (e) {
    $('#basicUsage').html(timer.getTimeValues().toString(['minutes', 'seconds', 'secondTenths']));
});

const waiting = () => {
  return {
    type: "html_button_response",
    stimulus: '<div id="basicUsage" style="color:white; font-size: 48px">0:00</div>',
		prompt: '<div class="happiness-text-slider">Press on the Q, P, Z, and M keys on your keyboard in that order and hold for 1 minute to continue.</div>',
		choices: [lang.prompt.continue.button],
		button_html: '<button class="jspsych-btn" id="btn">%choice%</button>',
		on_load: () => {
			document.getElementById("btn").style.visibility = "hidden"
			let key_array = ['q','p','z','m']
			window.addEventListener('keydown', function (event) {
				if (event.key === 'q') {
					window.addEventListener('keydown', function (event) {
						if (event.key === 'p') {
							window.addEventListener('keydown', function (event) {
								if (event.key === 'z') {
									window.addEventListener('keydown', function (event) {
										if (event.key === 'm') {
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
			window.addEventListener('keyup', function (event) {
				if (event.key === 'q') {
					timer.stop()
					window.removeEventListener('keydown', function (event) {
						if (event.key === 'm') {
							timer.start({precision: 'secondTenths'})
						}
					})
				}
			})
			window.addEventListener('keyup', function (event) {
				if (event.key === 'p') {
					timer.stop()
					window.removeEventListener('keydown', function (event) {
						if (event.key === 'm') {
							timer.start({precision: 'secondTenths'})
						}
					})
				}
			})
			window.addEventListener('keyup', function (event) {
				if (event.key === 'z') {
					timer.stop()
					window.removeEventListener('keydown', function (event) {
						if (event.key === 'm') {
							timer.start({precision: 'secondTenths'})
						}
					})
				}
			})
			window.addEventListener('keyup', function (event) {
				if (event.key === 'm') {
					timer.stop()
				}
			})
  	}
	};
};


export default waiting;
