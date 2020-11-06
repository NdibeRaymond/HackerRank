function freqQuery(queries){
    let valueDict = {};
    let ocDict = {};
    let result = [];

    function ocCalc(value, oc, sign){
        if(ocDict[oc]){
            ocDict[oc][value] = true;
         }
         else {
            ocDict[oc] = {[value]: true};
         }

         if((oc + sign) > 0){
             delete ocDict[oc + sign][value];
         }   
    }

    for(let arr of queries){
       if(arr[0] === 1){
         valueDict[arr[1]] = valueDict[arr[1]] ? valueDict[arr[1]] + 1 : 1;
        
        ocCalc(arr[1], valueDict[arr[1]], -1);

       }
       else if(arr[0] === 2){
        valueDict[arr[1]] = valueDict[arr[1]] ? valueDict[arr[1]] - 1 : valueDict[arr[1]];

       

        ocCalc(arr[1], valueDict[arr[1]], 1);
       }
       else {
        let temp = ocDict[arr[1]];
        if(temp){
            temp = Object.values(temp);
            if(temp.length > 0){
                result.push(1);
            }
            else {
                result.push(0);
            }
        }
        else {
            result.push(0);
        }
       }
    }

    return result;
}