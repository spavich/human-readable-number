module.exports = function toReadable (number) {
  const hundred = 'hundred';
	const naturalNumbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
				nums = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
				decimalNumbers = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
	
	const numbers = [...naturalNumbers, ...nums];
	if(number < 20){
		for(const [i, item] of numbers.entries()){
			if(i === number) return item;
		}
	}

	const roundDecimalNum = Math.floor(number / 10),
				elementArrayRoundDecimalNum = number - (roundDecimalNum * 10),
				aRoundHundredsNum = Math.floor(number / 100),
				bRoundHundredsNum = Math.floor(number % 100 / 10);

	if (number >= 20 && number < 100) {
		if(number % 10 === 0){
			return (decimalNumbers[roundDecimalNum])
		}else{
			return (`${decimalNumbers[roundDecimalNum]} ${naturalNumbers[elementArrayRoundDecimalNum]}`);
		}
	}

	if (number >= 100 && number <= 1000) {
		if(number % 100 > 0 && number % 100 < 20){
			if(number % 100 > 0 && number % 100 < 10){
				return (`${naturalNumbers[aRoundHundredsNum]} ${hundred} ${naturalNumbers[elementArrayRoundDecimalNum]}`);
			}else{
				return (`${naturalNumbers[aRoundHundredsNum]} ${hundred} ${nums[elementArrayRoundDecimalNum]}`);
			}
		}else if(number % 100 === 0){
			return (`${naturalNumbers[aRoundHundredsNum]} ${hundred}`);
		}else if(number % 10 === 0){
			return (`${naturalNumbers[aRoundHundredsNum]} ${hundred} ${decimalNumbers[bRoundHundredsNum]}`);
		}else{
			return (`${naturalNumbers[aRoundHundredsNum]} ${hundred} ${decimalNumbers[bRoundHundredsNum]} ${naturalNumbers[elementArrayRoundDecimalNum]}`);
		}
	}
	return 'Error! A number greater than 1000 or less than 0';
}