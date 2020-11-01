function checkMagazine(magazine, note) {
   let tempDict = {};
   let result;

   for(let i of magazine){
       tempDict[i] = tempDict[i] ? tempDict[i] + 1 : 1;
   }

   for(let i of note){
       if(!tempDict[i]){
           result = "No";
       }

       tempDict[i] = tempDict[i] - 1;
   }

   if(!result) result = "Yes";

   console.log(result);

}