module.exports = function toReadable (number) {
  let numberLength = number.toString().length;
	let strNum = number.toString();

	if(number == 0) {
		return 'zero';
	} else if(numberLength == 1) {
		return firstTen(number);
	} else if(numberLength == 2 && strNum[0] == 1) {
		if(number == 10) {
			return 'ten';
		}
		if(number == 11) {
			return 'eleven';
		} 
		if(number == 12) {
			return 'twelve';
		} if(number == 13) {
			return 'thirteen';
		} if(number == 15) {
			return 'fifteen';
		} if(number == 18) {
			return 'eighteen';
		} else {
			return firstTen(number % 10) + "teen";
		}
	} else if(numberLength == 2 && strNum[0] == 2) {
		if(number % 10 == 0) {
			return "twenty";
		} 
		return "twenty" + " " + firstTen(number % 10);
	} else if(numberLength == 2 && strNum[0] == 3) {
		if(number % 10 == 0) {
			return "thirty";
		}
		return "thirty" + " " + firstTen(number % 10);
	} else if(numberLength == 2 && strNum[0] == 4) {
		if(number % 10 == 0) {
			return "forty";
		}
		return "forty" + " " + firstTen(number % 10);
	} else if(numberLength == 2 && strNum[0] == 5) {
		if(number % 10 == 0) {
			return "fifty";
		}
		return "fifty" + " " + firstTen(number % 10);
	} else if(numberLength == 2 && strNum[0] == 6) {
		if(number % 10 == 0) {
			return "sixty";
		}
		return "sixty" + " " + firstTen(number % 10);
	} else if(numberLength == 2 && strNum[0] == 7) {
		if(number % 10 == 0) {
			return "seventy";
		}
		return "seventy" + " " + firstTen(number % 10);
	} else if(numberLength == 2 && strNum[0] == 8) {
		if(number % 10 == 0) {
			return "eighty";
		}
		return "eighty" + " " + firstTen(number % 10);
	} else if(numberLength == 2 && strNum[0] == 9) {
		if(number % 10 == 0) {
			return "ninety";
		}
		return "ninety" + " " + firstTen(number % 10);
	} 

	else if(numberLength == 3) {
		let century = Math.floor(number / 100);
		let remainder = number % 100;

		if (remainder == 0) {
			return firstTen(century) + " hundred";
		} else {
		return firstTen(century) + " hundred" + " " + nextHundred(remainder);
		}
	}
}

function firstTen (number) {
	if(number == 0) {
  		return '';
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

function nextHundred(number) {
	let numberLength = number.toString().length;
	let strNum = number.toString();

	if(numberLength == 1) {
		return firstTen(number);
	} else if(numberLength == 2 && strNum[0] == 1) {
		if(number == 10) {
			return 'ten';
		}
		if(number == 11) {
			return 'eleven';
		} 
		if(number == 12) {
			return 'twelve';
		} if(number == 13) {
			return 'thirteen';
		} if(number == 15) {
			return 'fifteen';
		} if(number == 18) {
			return 'eighteen';
		} else {
			return firstTen(number % 10) + "teen";
		}
	} else if(numberLength == 2 && strNum[0] == 2) {
		if(number % 10 == 0) {
			return "twenty";
		}
		return "twenty" + " " + firstTen(number % 10);
	} else if(numberLength == 2 && strNum[0] == 3) {
		if(number % 10 == 0) {
			return "thirty";
		}
		return "thirty" + " " + firstTen(number % 10);
	} else if(numberLength == 2 && strNum[0] == 4) {
		if(number % 10 == 0) {
			return "forty";
		}
		return "forty" + " " + firstTen(number % 10);
	} else if(numberLength == 2 && strNum[0] == 5) {
		if(number % 10 == 0) {
			return "fifty";
		}
		return "fifty" + " " + firstTen(number % 10);
	} else if(numberLength == 2 && strNum[0] == 6) {
		if(number % 10 == 0) {
			return "sixty";
		}
		return "sixty" + " " + firstTen(number % 10);
	} else if(numberLength == 2 && strNum[0] == 7) {
		if(number % 10 == 0) {
			return "seventy";
		}
		return "seventy" + " " + firstTen(number % 10);
	} else if(numberLength == 2 && strNum[0] == 8) {
		if(number % 10 == 0) {
			return "eighty";
		}
		return "eighty" + " " + firstTen(number % 10);
	} else if(numberLength == 2 && strNum[0] == 9) {
		if(number % 10 == 0) {
			return "ninety";
		}
		return "ninety" + " " + firstTen(number % 10);
	} 
}
