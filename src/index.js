module.exports = function getZerosCount(number, base) {
	let obj = {};
	let keyOfObj;
	let multiplier;
	let sumOfDivision = 0;
	for(let i = 2; i <= base; i++) {
		while(base % i === 0) {
			if(obj.hasOwnProperty(i)) {
				obj[i]++;

			} else {
				obj[i] = 1;
			}
			base = base / i;
		}
	}

let arrOfDivision = [];

	for(let key in obj) {
		keyOfObj = key;
		multiplier = key;
		sumOfDivision = 0;
		// keyOfObj = 2;
		// multiplier = 2;
		while(keyOfObj <= number) {
			// console.log(keyOfObj);
			sumOfDivision += Math.floor(number / keyOfObj);
			keyOfObj *=multiplier;
		}

		arrOfDivision.push(Math.floor(sumOfDivision / obj[key]));

	}

	return Math.min.apply(null, arrOfDivision);


	// console.log(obj);
}

// getZerosCount(46899647, 232);