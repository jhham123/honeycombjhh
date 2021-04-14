
// export default animation;
import up from '../img/up.png'
import down from '../img/down.png'
import left from '../img/left.png'
import right from '../img/right.png'

var animation_sequence = [up, left, down, right];

var animation = {
    type: 'animation',
    stimuli: animation_sequence,
    sequence_reps: 5,
    frame_time: 1000

};

export default animation;
