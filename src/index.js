module.exports = function toReadable (number) {
  let numberLength = number.toString().length;

  if(numberLength == 1) {
  	if(number == 0) {
  		return 'zero';
  	}
  	if(number == 1) {
  		return 'one';
  	}
  	if(number == 2) {
  		return 'two';
  	}
  	if(number == 3) {
  		return 'three';
  	}
  	if(number == 4) {
  		return 'four';
  	}
  	if(number == 5) {
  		return 'five';
  	}
  	if(number == 6) {
  		return 'six';
  	}
  	if(number == 7) {
  		return 'seven';
  	}
  	if(number == 8) {
  		return 'eight';
  	}
  	if(number == 9) {
  		return 'nine';
  	}
  }
}
