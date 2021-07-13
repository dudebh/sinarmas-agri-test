const min = 193651;
const max = 649729;

function findDifferentPasswords(minRange, maxRange){

    const libIncreaseNumbers = [100000, 10000, 1000, 100, 10, 1];
    let countCombination = 0;
    for(i = minRange; i <= maxRange; i++){
        const numbers = i.toString().split("");
        let countDouble = 0;
        let numberBefore = null;
        let increaseI = null;
        for (let j = 0; j < numbers.length; j++) {
            const number = Number(numbers[j]);
            if(numberBefore){
                if(numberBefore === number){
                    countDouble++;
                }
                if(numberBefore > number){
                    increaseI = libIncreaseNumbers[j] * (numberBefore - number);
                    break;
                }
                numberBefore = number
            }
            numberBefore = number;
        }
        if(countDouble > 0 && !increaseI){
            countCombination++;
        }else if(increaseI){
            i += (increaseI-1);
            if(i > maxRange){
                break;
            }
        }
    }
    return countCombination
}

console.log(findDifferentPasswords(min, max));
