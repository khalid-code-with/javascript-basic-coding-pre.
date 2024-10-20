// function fine()
// {
//     console.log("i am fine bhai");
// }
// fine();
  
// var person={
//     firstname:"khalid",
//     "last name":"khan",
//     last:"khan",
//     age:23,
//     fullname:function()
//     {
//         console.log("my name is"+this.firstname+" "+this.last);
//         console.log( "i am finme");
//     }
// }
// person.fullname();
// person.age=60; //using this we can modification
// console.log(person.age)
// let {firstname:n,age,vl="hi"}=person; //it is object destructuring this method to access
// console.log(n);
// console.log(person["last name"]); //spacing value only accessible array notation
// ===========================================================================================================================
// // second method of define of object
// let books={}
// books.firstname="my name is khlalid khan",
// books.last="ali bahi"
// books.sayhi=function()   //how type we used in method in javascrip
// {
//     console.log("this is method in javascript");
// }
// books.sayhi();
// console.log(books);
// =====================================================
// third way define of object
// var thisconcept=new Object();
// thisconcept.first="khan bhai"
// console.log(thisconcept.first);
// =====================================================================
// function constructer in sortly create fnction and object
// function persong(first,last,age)
// {
//     this.firstnam=first;
//     this.last=last;
//       this.age=age;
//       this.sayhi=function()
//       {
//         console.log(this.firstnam+" bhaijan"+this.last);
//       }
//       this.change=function(chanhge)
//       {
//         this.age=chanhge;
//       }
// };
// persong.prototype.nationalty="india"; 
// // this.sayhi();
// var student1=new persong("khlaid","khan",18);
// student1.change(222);
// console.log(student1);
// var student2=new persong("varun","set",20);
// console.log(student2);
// // ================================================
// call back function in javascrip pass the argument to another function this technique allow to call another fucntion
//            function hii()
//            {
//             console.log("hii");
//            }
//  function call()
//  {
//     console.log("hello");
//  };
// function add(a,b,callback)
// {
//     console.log(a+b);
//     callback();
  
// } 
// add(5,5,call);
// add(2,5,hii);
// add(2,10,()=>{
//     console.log("this is anonymous function");
// });
// // ====================================================================
// // what is map functction in javasctip
// var book=[2,3,4,5,6];
// var book1=[];
// for(let i=0;i<book.length;i++)
// {                                //without map function this is work 
//     book1[i]=book[i]*2;
// }
// console.log(book1);
// // =====================================================================
// // after map function this work eaisy to solve
// let arr=book.map(function( value)
// {
//     return value*3;            
// });
// console.log(arr);

// var arr1=[1,2];
// var map=arr1.map(function(g)
// {
//     return g*9;
// })
// console.log(map);

// var input=document.getElementById("input_field");
// input.addEventListener("focus",function()
// {
    
// })


// var btn=document.getElementById("btn");
// btn.addEventListener("click",function()
// {
//     var input=document.getElementById("input_field");
//        let d=input.value;
//        console.log(d);
// });
// var b=confirm("are you sure");
// document.write(b,"i am fine");
//    if(b==true)
//    {
//     document.write(" ok thanks ");
//    }
//    else if(b==false)
//    {
//     document.write("oh never mind");
//    }
//    var date=new Date();
//    document.write(date);
//    setFullYear.date("2034");
//    call back function 


//   function fun1()
//   {
//     document.write("thousant");
//   }
//   function fun2()
//   {
//     document.write("thousands");
//   }
// function callback(a,b,call)
// {
//     document.write(a+b);
//     call();
// }
// document.write("<br>")
// callback(10,30,fun1);
// document.write("<br>")
// callback(1,30,fun2);
// document.write("<br>")
// callback(1,4,function()
// {
//     document.write("five thousands")
// });
// document.write("<br>")
// callback(1,4,()=>
// {
//     document.write("five six thousands")
// });
// document.write("<br>")
// callback(1,8,()=> document.write("five thousands"));


// filter function in javascript
let arr = [1, 2, 3, 4, 5, 6];
let arr1 = arr.filter(function(val) {
    console.log(val); // This will log each element of the array as it is checked
    return val %2===0;   
});
console.log(arr1); // This will log the filtered array


let books=[10,19,30,21,50,60];
let boks=books.filter(function(valu)
{
    return valu%2!==0;
})
console.log(boks);
 let y=document.cookie="item=milk; ,expires=sat,20Mar 2022 12:00 UTC";  //expires of cookie
//   how to read of user cookies
var x=document.cookie;
console.log(x);
// how to chande of cookes
document.cookie="khaid=khan,eggs;expires=sat,20Mar 2022 12:00 UTC ";
console.log(y);

// var bookd=[10,20,30,40];
// // bookd.push(90);
// // bookd.pop();
// // bookd.shift();
// // bookd.unshift(70);
// //  var c=bookd.indexOf(70);
// //  console.log(c);
// //  console.log(Array.isArray(bookd));
// //  bookd.includes(20);
// // console.log(bookd);
   
// console.log(bookd.includes());
var book=[2,3,4,5,6];
// var book1=[];
// for(let i=0;i<book.length;i++)
// {                                //without map function this is work 
//     book1[i]=book[i]*3;
// }
// console.log(book1);
var book=[2,3,4,5,6];
// var d=book.map(function(vl)
// {
//     return vl*3;
// });
// console.log(d);

d=book.filter(function(e)
{
   return e%2==0;
})
console.log(d);

// what is object destructuring in detail
// var ob={
//     first:"khalid",
//     last:"khan",
//     surnam:"khan",
//     nextobject:{
//     first:"khanbhai",
//     }
// };
// let{ first:lt,last,surname="default",nextobject:{first}}=ob;
// console.log(lt);
// var bokss=["khalid","ciitm",200,50000,];
// // let[name,collage,price,salry]=objec;
// let[narendar,collage,price,salry,addrss="default"]=bokss;
// console.log(addrss);


var ob={
    first:"naredar",
    last:"yogi",
    age:20,
    first:"khalid",
    publication:{
       channel:"techgun"
    }
}
let{first,last,age,first:samename,publication:{channel}}=ob;
console.log(channel);
