function countTriplets(arr, r) {
    if(arr.length === 0) return 0;
    let leftDict = {};
    let rightDict = {};
    let count = 0;

    for(let i of arr){
        rightDict[i] = rightDict[i] ? rightDict[i] + 1 : 1;
    }

    for(let i of arr){
       rightDict[i] -= 1;
       let temp = leftDict[i/r] * rightDict[i*r];
       count = isNaN(temp) ? count : count + temp;
       leftDict[i] = leftDict[i] ? leftDict[i] + 1 : 1;
    }

    return count;
}



function countTriplets(arr, r) {
    if(arr.length === 0) return 0;

    let tempDict = {};
    let tempArr = [];
    let count = 0;

    arr.sort((a,b)=>a - b);

    for(let i of arr){
        tempDict[i] = tempDict[i] ? tempDict[i] + 1 : 1;
    }

    tempArr = new Set(arr);
    tempArr = [...tempArr];
    
    {
        let temp = [];
        for(let i = 0; i < tempArr.length; i++){
            if(tempArr[i + 2]){
                temp.push([tempArr[i],tempArr[i + 1], tempArr[i + 2]]);
            }
        }
        tempArr = temp;
    }
    
    tempArr.forEach((arr,index)=> count += arr.reduce((prev,cu)=> prev * tempDict[cu], 1));
    console.log(count);
    return count;
}

// 100 1
// [1,1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
// 161700