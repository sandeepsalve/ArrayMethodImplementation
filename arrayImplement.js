let myArray=[3,5,6,7,8,9,1];
console.log("Initial Array", myArray);
let popItem=myArray.pop();
console.log("Pop returns last element in Array "+popItem);
console.log("Array after pop "+myArray);
let pushReturn=myArray.push(19);
console.log("Push Return length of array after adding element at the end "+pushReturn);
console.log("Array After Push "+myArray);
let shiftReturn=myArray.shift();
console.log("Shift return first element of array"+shiftReturn);
console.log("Array after shift"+myArray);
let unshiftReturn=myArray.unshift(0);
console.log("Unshift returns array length after adding element at begining ",unshiftReturn);
console.log("Array afetr unshift ", myArray);
let  arraySplice=[1,2,3,4,5,6];
console.log("Array before splice"+arraySplice);
//splice (index,number ofitems to be deleted(optional),item1.,item2.... )
arraySplice.splice(2,2,99,100,102);
console.log("array after splice"+arraySplice);
let arraySlice=[2,3,9,10,11,12];
console.log(arraySlice);
//slice (start,end(optional))
let newarrayafterslice=arraySlice.slice(2,5);
console.log(newarrayafterslice);
let arrayExample=[6,7,8,9,10,11,12];
let newAValue=arrayExample.filter(checkValue);//returns array matching condition
function checkValue(item){

    return item>8;
}
console.log(newAValue);
let founditem=arrayExample.find(checkValue);//return first item where condition is satisfied
console.log(founditem);
let sum=0;
function sumValue(item){
    sum+=item;
    return sum;
}
let checkForEach=arrayExample.forEach(sumValue);//executed for each element returns nothing
console.log(sum);
let mappedArray=arrayExample.map(sumValue);//returns new array mapped to earlier
console.log(mappedArray);
let checkforevery=arrayExample.every(sumValue);
console.log(checkforevery);