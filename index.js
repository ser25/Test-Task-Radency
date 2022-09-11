//
// function loadGrain(levels) {
//     if (levels.length < 3) {
//         return 0;
//     } else if (levels.length >= 3) {
//         let numberWhichCanGrains = []
//         let indexWhichCanGrains = []
//         let arrayArray =[]
//         for (let i = 1; i < levels.length; i++) {
//             if (levels[i - 1] === 0) {
//                 console.log('0sws');
//                 levels[i - 1] = 1000
//             }
//             if (levels[i + 1] === 0) {
//                 console.log('0sws');
//                 levels[i + 1] = 1000
//             }
//             if (levels[i] < levels[i - 1] && levels[i] < levels[i + 1]) {
//                 arrayArray.push( levels[i - 1])
//                 arrayArray.push(levels[i])
//                 let j = 1
//                 let isNextNumberMore = true
//                 let nextNumber = levels[i + 1]
//                 while (isNextNumberMore) {
//                     arrayArray.push(nextNumber)
//                     if (levels[i + 1 + j] > nextNumber) {
//                         nextNumber = levels[i + 1 + j]

//                     }else{
//                         isNextNumberMore = false
//                     }
//                     j++
//                 }

//                 numberWhichCanGrains.push(levels[i]) 
//             }
//             if (levels[i - 1] === 1000) {
//                 levels[i - 1] = 0
//             } else if (levels[i + 1] === 1000) {
//                 levels[i + 1] = 0
//             }
//         } 
//         let resultArray = []
//         for (let i = 0; i < numberWhichCanGrains.length; i++) {
//             let indexNumber = levels.indexOf(numberWhichCanGrains[i])
//             let number = levels[indexNumber]
//             let previouNumber = levels[indexNumber - 1]
//             let NextNumber = levels[indexNumber + 1]
//             let j = 1
//             while (levels[indexNumber + 1 + j] > NextNumber) {
//                 let NextNumberIndex = numberWhichCanGrains.indexOf(NextNumber)
//                 if (NextNumberIndex > 0) {
//                     numberWhichCanGrains.splice(NextNumberIndex, 1)
//                     NextNumber = levels[indexNumber + 1 + j]
//                 }
//                 j++
//             }
//             let heightBargeLevels = [previouNumber, NextNumber] 
//             let previouNumberIndex = levels.indexOf(previouNumber)
//             let NextNumberIndex = levels.indexOf(NextNumber)
//             let NewLevels = levels.slice(previouNumberIndex, NextNumberIndex + 1) 
//             let minNumber = Math.min.apply(null, heightBargeLevels)
//             NewLevels.forEach(element => {
//                 let numberGrain = minNumber - element
//                 if (numberGrain > 0) {
//                     resultArray.push(numberGrain)
//                 }
//             });
//             levels.splice(previouNumberIndex, NextNumberIndex)
//         }
//     }
// }
// [ 49, 36, 21, 20, 44, 2, 25, 23, 1, 25, 11, 48, 24, 29, 44, 0 ]
// 
// console.log(loadGrain([ 4, 0, 1, 3, 3, 3, 0, 1, 1, 5]));

// function loadGrain(levels) {
//     if (levels.length < 3) {
//         return 0;
//     } else if (levels.length >= 3) {
//         let levelsArrays = []
//         let copylevels = [...levels]
//         let maxNamber = Math.max.apply(null, levels)
//         let maxNextNumber
//         if( levels[0] === maxNamber){
//             copylevels.shift()
//             maxNextNumber = Math.max.apply(null, copylevels)
//         }else if( levels[levels.length - 1] === maxNamber){
//             copylevels.pop()
//             maxNextNumber  = Math.max.apply(null, copylevels)
//         }
//         isNumber = true
//         let i = 1
//         while(isNumber){
//             if(maxNamber > levels[i] && levels[i] < maxNextNumber){
//                 console.log(`Числ ${levels[i]}`);
//                 i++
//             }else{
//                 isNumber = false
//             }
//         }
//     }
// }
// console.log(loadGrain([2, 1, 5, 2, 7, 4, 10]));

// function loadGrain(levels) {
//     if (levels.length < 3) {
//         return 0;
//     } else if (levels.length >= 3) {
//         let numberWhichCanGrains = []
//         let arrray2 = []
//         for (let i = 1; i < levels.length; i++) {
//             if (levels[i - 1] === 0) {
//                 levels[i - 1] = 1000
//             }
//             if (levels[i + 1] === 0) {
//                 levels[i + 1] = 1000
//             }
//             if (levels[i] < levels[i - 1] && levels[i] < levels[i + 1]) {
//                 numberWhichCanGrains.push(levels[i])
//                 console.log(levels[i]);
//             }
//             let j = 1
//             let isTrue = true
//             let array3 = []
//             while (isTrue) {
//                 if (levels[i - 1] > levels[j]) {
//                     console.log(`Перше число бильше ${levels[j]}`);
//                     array3.push(levels[j])
//                     j++
//                 } else {
//                     isTrue = false
//                     array3.push(levels[j])
//                     array3.unshift(levels[i - 1])
//                     levels.splice((i - 1), j)
//                 }
//             }
//             if (levels[i - 1] === 1000) {
//                 levels[i - 1] = 0
//             } else if (levels[i + 1] === 1000) {
//                 levels[i + 1] = 0
//             }
//         }
//         let resultArray = []
//         for (let i = 0; i < numberWhichCanGrains.length; i++) {
//             let indexNumber = levels.indexOf(numberWhichCanGrains[i])
//             let number = levels[indexNumber]
//             let previouNumber = levels[indexNumber - 1]
//             let NextNumber = levels[indexNumber + 1]
//             let j = 1
//             while (levels[indexNumber + 1 + j] > NextNumber) {
//                 let NextNumberIndex = numberWhichCanGrains.indexOf(NextNumber)
//                 if (NextNumberIndex > 0) {
//                     numberWhichCanGrains.splice(NextNumberIndex, 1)
//                     NextNumber = levels[indexNumber + 1 + j]
//                 }
//                 j++
//             }
//             let heightBargeLevels = [previouNumber, NextNumber]
//             let previouNumberIndex = levels.indexOf(previouNumber)
//             let NextNumberIndex = levels.indexOf(NextNumber)
//             let NewLevels = levels.slice(previouNumberIndex, NextNumberIndex + 1)
//             let minNumber = Math.min.apply(null, heightBargeLevels)
//             NewLevels.forEach(element => {
//                 let numberGrain = minNumber - element
//                 if (numberGrain > 0) {
//                     resultArray.push(numberGrain)
//                 }
//             });
//             levels.splice(previouNumberIndex, NextNumberIndex)
//         }
//         let result = resultArray.reduce((sum, current) => sum + current, 0);
//         return result
//     }
// }



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
            console.log(arrray2);
        }
        let grainArray = []
        for (let i = 0; i < arrray2.length; i++) {
            let arrayInGrain = arrray2[i]
            if(arrayInGrain.length < 3 ){

            }else if(arrayInGrain.length === levels.length){

            }else{
                grainArray.push(arrayInGrain)
            }   
        }
    }

}
console.log(loadGrain([49, 36, 21, 20, 44,  2, 25, 23,  1, 25, 11, 48, 24, 29, 44,  0])) //Return той самий array 

/*[49, 36, 21, 20, 44,  2, 25, 23,  1, 25, 11, 48, 24, 29, 44,  0]*/
    // [2, 1, 5, 2, 7, 4, 10]  // а тут все правильно
    // [2, 0, 1, 5, 2, 7]
    //[49, 36, 21, 20, 44,  2, 25, 23,  1, 25, 11, 50, 24, 29, 44,  0]