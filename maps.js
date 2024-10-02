//maps

const mp=new Map();

mp.set('anil',1)
mp.set('ram',2);
mp.set('shayam',3);
// mp['anil']=1 used for objects not for map we can use it but Map(2) { 'ram' => 2, 'shayam' => 3, anil: 1 }
// console.log(mp);


for(const [key,value] of mp){
   // console.log(key +'->'+ value);
}


// loops for objects in js
 

const obj={
    name :"anil",
    id :"2123",
    age:20,
    branch: "cse"
}
for(const key in obj){
   // console.log(key,'->',obj[key]);
}

// for each loops
const coding=["cpp", "python","js"];
coding.forEach( function (val){
  //  console.log(val);
})
//or using arrow function
coding.forEach( (item)=> {
   // console.log(item);
})

function helper(val,idx,arr){
    console.log(val,idx,arr);
}
coding.forEach(helper);