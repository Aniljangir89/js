const arr=[1,3,5,6,2,25,6];
 //const ans=arr.filter((num)=> num>4);//call back
 const ans=arr.filter((num)=>{ //{}->open scope
    return num>4;
 })
 //console.log(ans);



 const myarr=[]
arr.forEach((item)=>{
    if(item>5){
        myarr.push(item);
    }
})
//console.log(myarr);


//loops using map;
const myarr2=[1,2,3,4,5];
const newarr=myarr2.map( (nums)=>{
    return nums+3;
})
//console.log(newarr)


//--------------> chaining
myarr3=[1,2,3,45,5];
const result=myarr3.map((nums)=>(nums*10)).map((nums)=>(nums+1)).filter((nums)=>(nums>30));
console.log(result)