
function loadGrain(levels) {
    if (levels.length < 3) {
        return 0;
    } else if (levels.length >= 3) {
        let numberWhichCanGrains = []
        for (let i = 1; i < levels.length; i++) {
            if (levels[i - 1] === 0) {
                levels[i - 1] = 1000
            }
            if (levels[i + 1] === 0) {
                levels[i + 1] = 1000
            }
            if (levels[i] < levels[i - 1] && levels[i] < levels[i + 1]) {
                numberWhichCanGrains.push(levels[i])
            }
            if (levels[i - 1] === 1000) {
                levels[i - 1] = 0
            } else if (levels[i + 1] === 1000) {
                levels[i + 1] = 0
            }
        }
        let resultArray = []
        for (let i = 0; i < numberWhichCanGrains.length; i++) {
            let indexNumber = levels.indexOf(numberWhichCanGrains[i])
            let number = levels[indexNumber]
            let previouNumber = levels[indexNumber - 1]
            let NextNumber = levels[indexNumber + 1]
            let j = 1
            while (levels[indexNumber + 1 + j] > NextNumber) {
                let NextNumberIndex = numberWhichCanGrains.indexOf(NextNumber)
                if (NextNumberIndex > 0) {
                    numberWhichCanGrains.splice(NextNumberIndex, 1)
                    NextNumber = levels[indexNumber + 1 + j]
                }
                j++
            }
            let heightBargeLevels = [previouNumber, NextNumber]
            let previouNumberIndex = levels.indexOf(previouNumber)
            let NextNumberIndex = levels.indexOf(NextNumber)
            let NewLevels = levels.slice(previouNumberIndex, NextNumberIndex + 1)
            let minNumber = Math.min.apply(null, heightBargeLevels)
            NewLevels.forEach(element => {
                let numberGrain = minNumber - element
                if (numberGrain > 0) {
                    resultArray.push(numberGrain)
                }
            });
            levels.splice(previouNumberIndex, NextNumberIndex)
        }
        let result = resultArray.reduce((sum, current) => sum + current, 0);
        return result
    }
}

console.log(loadGrain([2, 1, 5, 2, 7, 4, 10]));