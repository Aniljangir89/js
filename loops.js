//for loops
for(let i=0; i<10;i++){
  //  console.log("loop iteration :",i);
}



for(let i=0; i<10; i++){
    //console.log(`outer loop: ${i}`);
    for(let j=0; j<10; j++){
       // console.log(`inner loop is : ${j}`);
    }
}


for(let i=1; i<10; i++){
    for(let j=1;j<=10;j++){
       // console.log(i+'*'+j+'='+i*j);
    }
}


let myarr=["anil","devesh","kumar"];

//for(let i=0;i<myarr.length;i++) console.log(myarr[i]);


//break also work as in cpp
//same as continue

let idx=0;
while(idx<=5){
   // console.log("shri ram");
    idx++;
}


let i=0;
do{
   // console.log("anil kumar");
    i++;
}while(i<=10)


// for of loop

const arr=[1,2,3,5,7];
 for(let num  of  arr){
   // console.log(num);
 }
 // let-> original val can be modifyble but remain same in memory;
 // const-> cant modifiable

 const  str="hello sir";
 for( let s of str){
    console.log(`chars are : ${s}`);
 }
