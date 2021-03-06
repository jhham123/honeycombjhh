import taskTrial from './taskTrial'
import { generateStartingOpts } from '../lib/taskUtils'

<<<<<<< HEAD
// default code; not used

=======
>>>>>>> honeycomb/main
const taskBlock = (blockSettings) => {
  // initialize block
	const startingOpts = generateStartingOpts(blockSettings)

  const blockDetails = {
	  block_earnings: 0.0,
		optimal_earnings: 0.0,
		continue_block: true
	}

	// timeline = loop through trials
	let timeline = startingOpts.map( (condition) => taskTrial(blockSettings, blockDetails, condition))

	let blockStart = {
		type: 'html_keyboard_response',
		stimulus: '',
		trial_duration: 1,
		on_finish: (data) => data.block_settings = blockSettings
	}

	timeline.unshift(blockStart)

  return {
		type: 'html_keyboard_response',
		timeline: timeline
	}
}

export default taskBlock
