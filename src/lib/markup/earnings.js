import { formatDollars } from '../utils'

const earningsDisplay = (earnings) => {
  const bclass = (earnings >= 0) ? 'success' : 'danger'
  return (
<<<<<<< HEAD
    `<div class='beads_container'>
=======
    `<div class='center_container'>
>>>>>>> honeycomb/main
    <h1 class='text-${bclass}'>${formatDollars(earnings)}</h1>
    </div>`
  )
}

export {
  earningsDisplay
}
