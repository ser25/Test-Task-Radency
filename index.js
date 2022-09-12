
function loadGrain(levels) {
    if (levels.length < 3) {
        return 0;
    } else if (levels.length >= 3) {
        let arrray2 = []
        let copylevels = [...levels]
        while (copylevels.length > 2) {
            let i = 1
            let j = 1
            let isTrue = true
            let array3 = []
            while (isTrue) {
                if (copylevels[i - 1] > copylevels[j]) {
                    array3.push(copylevels[j])
                    j++
                } else {
                    if (!(typeof (copylevels[j]) == "undefined")) {
                        array3.push(copylevels[j])
                    }
                    isTrue = false
                    array3.unshift(copylevels[i - 1])
                    copylevels.splice((i - 1), j)
                }
            }
            arrray2.push(array3)

        }
        let grainArray = []
        for (let i = 0; i < arrray2.length; i++) {
            let arrayInGrain = arrray2[i]
            if (arrayInGrain.length < 3) {

            } else if (arrayInGrain[arrayInGrain.length - 1] === 0) {
                arrayInGrain.pop()
                grainArray.push(arrayInGrain)

            } else {
                grainArray.push(arrayInGrain)
            }
        }
        for (let i = 0; i < grainArray.length; i++) {
            let arrayInGrain = grainArray[i]
            let maxNumber = Math.max.apply(null, arrayInGrain)
            let IndexmaxNumber = arrayInGrain.indexOf(maxNumber)
            let copyArrayInGrain = [...arrayInGrain]
            copyArrayInGrain.splice(IndexmaxNumber, 1)
            let secondMaxNumber = Math.max.apply(null, copyArrayInGrain)
            let secondIndexmaxNumber = arrayInGrain.indexOf(secondMaxNumber)
            if (secondIndexmaxNumber === 0 || secondIndexmaxNumber === arrayInGrain.length - 1) {

            }
            else {
                let isTrue = true
                let j = 1
                let copyArrayInGrain = [...arrayInGrain]
                let grains = []
                while (isTrue) {
                    if (arrayInGrain[j] < secondMaxNumber) {
                        grains.push(arrayInGrain[j])
                        j++
                    }
                    else {
                        if (!(typeof (arrayInGrain[j]) == "undefined")) {
                            grains.push(arrayInGrain[j])
                        }
                        grains.unshift(arrayInGrain[0])
                        copyArrayInGrain.splice(0, j)
                        isTrue = false
                    }

                }
                grainArray.splice(i, 1)
                grainArray.push(grains)
                grainArray.push(copyArrayInGrain)
                i = -1
            }
        }
        console.log(grainArray);
        let resultArray = []
        for (let i = 0; i < grainArray.length; i++) {
            let arrayInGrain = grainArray[i]
            if (arrayInGrain.length > 2) {
                if (arrayInGrain[arrayInGrain.length - 1] === 0) {
                    arrayInGrain.pop()
                }
                let firstNumberAndEndNumber = []
                let firstNumber = arrayInGrain[0]
                let endNumber = arrayInGrain[arrayInGrain.length - 1]
                firstNumberAndEndNumber.push(firstNumber)
                firstNumberAndEndNumber.push(endNumber)
                let minNumber = Math.min.apply(null, firstNumberAndEndNumber)
                arrayInGrain.forEach(element => {
                    let numberGrain = minNumber - element
                    if (numberGrain > 0) {
                        resultArray.push(numberGrain)
                    }
                });
            }
        }
        let result = resultArray.reduce((sum, current) => sum + current, 0);
        return result
    }

}
console.log(loadGrain([49, 36, 21, 20, 44,  2, 25, 23,  1, 25, 11, 48, 24, 29, 44,  0]))  
