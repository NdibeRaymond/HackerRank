function sherlockAndAnagrams(s) {
 let stringLength = 1;
 let tempDict = {};

 while(stringLength < s.length){
   for(let i = 0; i < s.length; i++){
     if(i + stringLength <= s.length){
       let substr = s.substring(i, i + stringLength);
       if(substr.length > 1){
        substr = substr.split("").sort().join("");
       }
      tempDict[substr] = tempDict[substr] ? tempDict[substr] + 1 : 1; 
   }
  }
  stringLength += 1;
 }

 function countAnagrams(value){
   value -= 1;
   if(value < 1) return value;
   return value + countAnagrams(value);
 }

 return Object.values(tempDict).reduce((a,b)=>a + countAnagrams(b),0);

}