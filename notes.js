

//28.12.24

// // ==========================================================
// // // control flow
// // loops
// // functions and async (es6
// //   spreadd and destructuring
// //   ternary
// //   callbacks,promise,async/await
// // dom

// //=============================================================================================================================//
//=========================================================================================
// let a = 47;
//  if ((a % 3 === 0) && (a  %5 === 0)) {
//     console.log("hihello");
// }
// else if (a % 3 === 0) {
//     console.log("hi");
// }
// else if (a % 5 === 0) {
//     console.log("hi");
// }

// else {
//     console.log("bye");
// }
//=========================================================================================
// switch(choice){
//     case 1:
//         statements;
//         break;
//      case 2:
//         statements;
//         break;
//     case 3:
//         statements;
//         break;
//     default:
//         statements;
//         break;
// }

//==============================================================================
// //string can be used
// let choice="hello";
// switch(choice){
//     case "hi":
//         console.log("hi");
       
//      case "hello":
//         console.log("hello");
//         break;
//     case "h":
//         console.log("hihello");
//         break;
//     default:
//         console.log("welcome"); break;
// }
//===============================================
//  an array cannot directly be used as the `choice` value in a `switch` statement in JavaScript. The `switch` statement performs strict equality comparison (`===`) between the `choice` value and the `case` values, and strict equality between objects (including arrays) only evaluates to `true` if they are the same reference.

// Here’s an example to demonstrate this:

// ```javascript
// let choice = [1, 2, 3];

// switch (choice) {
//     case [1, 2, 3]: // This will not work as expected because the arrays are different references.
//         console.log("Matched!");
//         break;
//     default:
//         console.log("Default case"); // This will execute.
// }
// ```

// ### Why It Doesn't Work
// In the example above:
// - The `choice` variable holds an array reference.
// - The `case [1, 2, 3]` creates a new array reference, which is different from the `choice` reference.
// - Since `choice` and `[1, 2, 3]` do not refer to the same object in memory, the comparison fails.

// ### Alternatives
// If you want to use arrays in such a context, consider converting the array to a string or some other comparable value:

// ```javascript
// let choice = [1, 2, 3].toString();

// switch (choice) {
//     case "1,2,3":
//         console.log("Matched!");
//         break;
//     default:
//         console.log("Default case");
// }
// ```
//--------------------------------------------------------------------------------------------
//error
// if(false)
//     console.log("hi");
//     console.log("hello" );
// else
//   console.log("bye")

//-------------------------------------------------------------------------

// if(false)
// {
//     console.log("hi");
//     console.log("hello" );}
// else
//   console.log("bye")

// console.log("byebye")


//-------------------------------------------------------------------------
// entry check loop-->for,while
// end check loop-->do while
//----------------------------------------------------------------------
// for loop
// for(intialization;Condition;increment/decrement)
// {
//     statements;
// }

//-------------------------------------------------------------------------

// for (let i = 0; i < 10; i++) {
//     console.log(i);
//   }
  
//-------------------------------------------------------------------------
// for(;;)
// {
//     console.log("")
// }
// this tajes the value true and runs infinte  Times  
// ---------------------------------------------------------
// let a=1;
// for(console.log('a');a<=3;console.log('b')){
//     console.log('c')
//     a++;
// }  
// ---------------------------------------------------------
// let a=1;
// for(a=1;a<100;a++)
// console.log("hi")
// console.log(a)
// ---------------------------------------------------------
// let a=1;
// for(a=1;a<100;a++);
// console.log("hi");
// console.log(a);
//==========================================================

// for(let a=1;a<100;a++);
// console.log("hi")
// console.log(a);
//-----------------------------------------------------

// let a=1;
// for(a=1;a<100;a++);  
// console.log("hi");
// console.log(a);
//-----------------------------------------------------------
// while()
// {
//     console.log("hi")
// }

// for()
//     {
//         console.log("hi")
//     }
//error
//---------------------------------------------------------
// do{
//     console.log("hi")
// }
// while(false);
//infinity
//-----------------------------
// let a=100
// do{
//     console.log("hi")
//     a++;
// }
// while(a<=10);
//-------------------------------------
//functions==>
    //parameterized
    //non parameterized
    //  -------------------------------------
    //non paramaterized + without   return
    // function apple()
    // {
    //     console.log("apple")

    // }
    // apple()
    // // -------------------------------------
       //non paramaterized + with return
    //    function orange()
    //    {
    //            return "orange";
    //    }
    //    //let a=orange();console.log(a);
    //    console.log(orange());
//------------------------------------------------
// parameterized+ without return
// function apple(a,b)
// {
//     console.log(a+b)
// }
// apple(10,20);
//------------------------------------------------
// parameterized+ with return
// function apple(a,b)
// {
    
//     return a+b;
// }
// console.log(apple(10,20));
//------------------------------------------------
// |\/|/\|\/|
// |\/|/\|\/|
// |\/|/\|\/|
// |\/|/\|\/|
//-------------------------------------
//arrow functiion(single line function)
// let apple=()=>console.log("apple")
 
// apple();
//-------------------
// let orange=()=>"apple";
 
// console.log(orange());
//--------------------------------
// //arrow functiion(multi line function)
// let appl=()=>
// {
//     console.log("apple");
//     console.log("apple");
//     console.log("apple");
// }
// appl();
//-----------------------
// let banana =()=>
//     {
//         console.log("apple");
//         return 3+3;
//     } 
// banana();
//----------------------------
// let banana =()=>
//     {
//         console.log("apple");
//         return 3+3;
//     } 
// console.log(banana());
//--------------------------------------------------
// let add=(a,b)=>
// {
// return a+b;
// }
// console.log(add(1,2));
//-----------------------------------------------------------
// //spread  operator(...)
// let a=[1,2,3,4,5];
// let b=[6,7,8,9,10];
// let c=[...a,...b];
// console.log(c);

//-----------------------
//spread  operator(...)
// let d = [1,2,3,4,5]
// let e = [...d]
// e[2]=10;
// console.log(e)
//-----------------------
// //spread  operator(...)
// let d = [1,2,3,4,5]
// let e = d
// e[2]=10;
// console.log(e)
//---------------------------------------------
// let a=10;
// function x()
// {
//     a=20;
//     console.log(a);
// }
// x();
// console.log(a);
//20 20  because let is delacred globally and noot in scope hence it is changing to 20
//----------------------
// var a=10;
// function x()
// {
//     a=20;
//     console.log(a);
// }
// x();
// console.log(a);
//20 20
//------------------------------------
// let a=10;
// let b=a;
// a=20;
// console.log(a);
// console.log(b);
//20 10
// a      b
//10      10
//20      10
//-------------------------------------------
//spread  operator(...)(spread the values)
// let a=[1,2,3,4,5];
// let b=[6,7,8,9,10];
// let c=[...a,...b];
// console.log(c);
// function sp(values)
// {
//     console.log(values)
// }sp(...c)

//rest operator(combine the values)
// let a=[1,2,3,4,5];
// let b=[6,7,8,9,10];
// let c=[...a,...b];

// function sp(b,c,d,...values)
// {
//     // console.log(values)
//     //console.log(b,c,d)
// }sp(1,2,3,4,5,6,7,55)
//-----------
// let a=[1,2,3,4,5];
// let b=[6,7,8,9,10];
// let c=[...a,...b];

// // function sp(...values)
// // {
// //      console.log(values)
// //     //console.log(b,c,d)
// // }sp(1,2,3,4,5,6,7,55)

// function sp(...values,x,y,)
// {
//      console.log(values)
//     //console.log(b,c,d)
// }sp(1,2,3,4,5,6,7,55)
//------------------------------------------------------------
//spread object
    // let s1={
    //     name:"avi",
    //     age:20,
    //     isStudent : true
    // }
    // let b = {...s1};
    // console.log(s1);
    // console.log(b);
//--------------------------------------------------------------------------
// //destructuring operator
// let a=[1,2,3,4,5];
// // let b =a[0];
// // let c=a[1];
// // let d=a[2];
// // let e=a[4];
// let [b,c,d,e,f]=a;
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(f);
//------------------------------------------
//rest operator
// let a=[1,2,3,4,5,6];
// let [b,c,...d]=a;
// console.log(b);
// console.log(c); 
// console.log(d);
//------------------------------------------
// // destructuring object
// let s1={
//         name:"avi",
//         age:20,
//         isStudent : true
//     }
// // let {name,...y}=s1;
// // console.log(name);
// // console.log(y);
//  let {name,age,isStudent}=s1;
// console.log(name);
// console.log(age);
// console.log(isStudent);
//------------------------------------
//callback
//function as a parameter in  anoother function
                // function dora()
                // {
                //     console.log("buji")
                // }
                // function tom()
                // {
                //     console.log("jerry")
                // }
                // dora()
                // tom()



                // function dora() {
                //     setTimeout=(()=>{
                //     console.log("buji")},2000);
                // }
                // function tom() {
                //     console.log("jerry")
                // }
                // dora()
                // tom()

//-------------------------------------------


// function dora(callback) {
//     setTimeout(() => {
//         console.log("buji");
//         callback(); // Call the callback function
//     }, 2000);
// }
// function tom() {
//     console.log("jerry");
// }

// dora(tom);

//------------------------------------------------------

//call back hell
//calling a function inside a function many times
// function attandace(callback) {
//     setTimeout(() => {
//         console.log("attandance");
//         callback(); // Call the callback after the delay
//     }, 2000);
// }

// function lunch(callback) {
//     setTimeout(() => {
//         console.log("lunch");
//         callback(); // Call the callback after the delay
//     }, 2000);
// }

// function goingtohome(callback) {
//     setTimeout(() => {
//         console.log("going to home");
//         callback(); // Call the callback after the delay
//     }, 2000);
// }

// attandace(() => { lunch(() => { goingtohome(() => {})   });});
// console.log("end");

//-------------------------------------------------------------------
//to avoid cll back promise is  done

// function attandace() {
//    return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("attandance");
    
//     }, 2000);
    
//    })
  
// }

// function lunch() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("lunch");
           
//         }, 2000);
//     })
   
// }

// function goingtohome() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//            resolve ("going to home");
             
//          }, 2000); 
//     })
   
// }

// attandace()
// .then((result) => {
//     console.log(result);
//     return lunch();
// })
// .then((result) => {
//     console.log(result);
//     return goingtohome();
// })
// .then((result) => {
//     console.log(result);
//     console.log("end");
// })
// .catch((error) => {
//     console.error(error);
// });
//----------------------------------------------

// function attandace() {
//     return new Promise((resolve, reject) => {
//      setTimeout(() => {
//         let a=true;
//         if(a)         
//             resolve("attandance true");
//             else
//  reject("attandance false");
     
//      }, 2000);
     
//     })
   
//  }
 
//  function lunch() {
//      return new Promise((resolve, reject) => {
//          setTimeout(() => {
//             let b=true;
//             if(b)         
//                 resolve("l true");
//             else
//              reject("l false");
            
//          }, 2000);
//      })
    
//  }
 
//  function goingtohome() {
//      return new Promise((resolve, reject) => {
//          setTimeout(() => {
//             let c=true;
//             if(c)         
//                 resolve("home true");
//             else
//              reject("home false");
              
//           }, 2000); 
//      })
    
//  }
 
//  attandace().then((result) => {
//      console.log(result);
//      return lunch();
//  }).then((result) => {
//      console.log(result);
//      return goingtohome();
//  }) .then((result) => {
//      console.log(result);
//      console.log("end");
//  }) .catch((error) => {
//      console.error(error);
//  });
 //-----------------------------------------------------------------------
 
// function attandace() {
//     return new Promise((resolve, reject) => {
//      setTimeout(() => {
//         let a=true;
//         if(a)         
//             resolve("attandance true");
//             else
//  reject("attandance false");
   
//      }, 2000);
     
//     })
//    } 
//  function lunch() {
//      return new Promise((resolve, reject) => {
//          setTimeout(() => {
//             let b=false;
//             if(b)         
//                 resolve("l true");
//             else
//              reject("l false");
            
//          }, 2000);
//      })
//      }
//   function goingtohome() {
//      return new Promise((resolve, reject) => {
//          setTimeout(() => {
//             let c=true;
//             if(c)         
//                 resolve("home true");
//             else
//              reject("home false");
              
//           }, 2000); 
//      })
    
//  }
 
//  attandace().then((result) => {
//      console.log(result);
//      return lunch();
//  }).then((result) => {
//      console.log(result);
//      return goingtohome();
//  }) .then((result) => {
//      console.log(result);
//      console.log("end");
//  }) .catch((error) => {
//      console.error(error);
//  });
 //-----------------------------------'`'`'`'`'`'`'`'`'`''`'`'`'`''`'`'`'`'`'`'`''`'`'`'`''`'``'`'`''``'`'`'`''``''`'`'`'`'`'`'`'``'`"
// function apple()
// {
//     console.log("apple");
//     return new Promise((resolve,reject)=>{
//         //resolve("good")
//        reject("bad") 
//     })
// }
// apple().then((result)=>{console.log(result)})
//     .catch((result)=>{console.error(result)})
//----------------------------------------------------------------------------------------------
//aysnc 
// async function a()
// {
//     await db=connectionstring
// }
// fun b()
// {

// }
// func c()
// {

// }

//----------------------------------------------------
// function attandace() {
//     return new Promise((resolve, reject) => {
//      setTimeout(() => {
//         let a=true;
//         if(a)         
//             resolve("attandance true");
//             else
//  reject("attandance false");
     
//      }, 2000);
     
//     })
   
//  }
 
//  function lunch() {
//      return new Promise((resolve, reject) => {
//          setTimeout(() => {
//             let b=true;
//             if(b)         
//                 resolve("l true");
//             else
//              reject("l false");
            
//          }, 2000);
//      })
    
//  }
 
//  function goingtohome() {
//      return new Promise((resolve, reject) => {
//          setTimeout(() => {
//             let c=true;
//             if(c)         
//                 resolve("home true");
//             else
//              reject("home false");
              
//           }, 2000); 
//      })
    
//  }
// async function final(){
//     try {
//         let attandances = await attandace();
//         console.log(attandances);
//         let lun=await lunch();
//         console.log(lun);
//         let home=await goingtohome();
//         console.log(home);
//     } catch (error) {
//         console.error(error);
//     };
// }

// final();

// ----------------------------------------------------------------------------------------
// function processing(callback, filename)
// {
//     console.log(`file ${filename} is  processing`);
//     callback();
// }
// function downloading(callback, filename)
// {
//     console.log(`file ${filename} is  downloading`);
//     callback();
// }
// const filename="abc";
// processing(()=>{
//     downloading(()=>{
//         console.log("download complete");
//     },filename);
    
// },filename);
//--------------------------------------------------------------------------------



