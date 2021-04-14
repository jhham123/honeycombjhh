/**
 * Consumes a dictionary of 12 numbers (labled with letters) and build a wheel out of them
 * using CSS components defined in App.css
 */

export const makeWheel = (nums) => {

  return `<div class="container">
  	<div class="board">
  		<div class="spinner-table">
  			<div class="dial">
  				<div class="slice"><div class="label">${nums["A"]}</div></div>
  				<div class="slice"><div class="label">${nums["B"]}</div></div>
  				<div class="slice"><div class="label">${nums["C"]}</div></div>
  				<div class="slice"><div class="label">${nums["D"]}</div></div>
  				<div class="slice"><div class="label">${nums["E"]}</div></div>
  				<div class="slice"><div class="label">${nums["F"]}</div></div>
  				<div class="slice"><div class="label">${nums["G"]}</div></div>
  				<div class="slice"><div class="label">${nums["H"]}</div></div>
  				<div class="slice"><div class="label">${nums["I"]}</div></div>
  				<div class="slice"><div class="label">${nums["J"]}</div></div>
  				<div class="slice"><div class="label">${nums["K"]}</div></div>
  				<div class="slice"><div class="label">${nums["L"]}</div></div>
  			</div>
  		</div>
  		<div class="arrow">
  			<span class="pointer"></span>
  		</div>
  	</div>
  </div>
  `
};
