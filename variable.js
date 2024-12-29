//function cat(){
 // if (true){
   // var a=5;
    //console.log(a);
  //}
  //console.log(a);
//}
//cat();

// function a1(){
//   console.log("a1");
// }
// function p1(){
//   console.log("p1");
// }
// a1();
// p1();

// //let student = {
//   //name: ["abbi", "pran"], // Use an array to hold multiple names
//   age: 20,
//   isStudent: true,
//   address: {
//     state: "tamilnadu",
//     city: "Tirupur",
//   }
// };
// console.log(student.name[0]);


// let student=new Object();
// student.name="abbi";
// student.age=20;
// console.log(student)
// student.hello =function(){
//   console.log("hello")
// }
// student.hello()

// operators
// ---------
// arithmetic
// multiplication
// comparision
// logical
// -->shortcircuit operator-->logical AND , OR

// let a=(56<3) && (9>5);
// console.log(a)
// -->shortcircuit operator

// let a=(40>1)||(7>8);
// console.log(a)

//  let a=5;
// let b=a++ + --a;
//  let c=++b + b++;
//  a++;
//  console.log(a);
//  console.log(b);
//  console.log(c);

// let a=true;
// !!!!!!a;
// console.log(a);

// let a = 20;
// if(a%3 ===0 && a%5===0)
// {
//   console.log("abbi");
// }
// else if(a%3===0)
// {
//   console.log("ab");
// }
// else if(a%5===0)
// {
//   console.log("bi")
// }


// let choice="success";
// switch(choice){
//   case "hii":
//     console.log("hii abbi");
//     break;
//   case "hello":
//     console.log("hello abbi");
//     break;
//   case "success":
//     console.log("you can win ");
//     break;
// }

// let choices = ["abbi", "shyam", "hello"];

// choices.forEach(choice => {
//   switch (choice) {
//     case "abbi":
//       console.log("hii abbi");
//       break;
//     case "shyam":
//       console.log("hello shyam");
//       break;
//     case "hello":
//       console.log("you can win");
//       break;
//     default:
//       console.log("Unknown choice:", choice);
//   }
// });

//error part
// if(false)
//   console.log("hi");
//   console.log("abbi");
// else
//   console.log("hello")

// if(true){
//   console.log("abbi");
//   console.log("hello");
// }
// else
//   console.log("hii");
// console.log("hyy abbi");

//for initialization;condition;increment/decrement;
// statement;
// let a=1;
// for(console.log("a");a<=3;console.log("b")){
//   console.log("c");
//   a++;
// }

// let a=1
// for(a=1;a<100;a++);
// console.log("hii");
// console.log(a);

// for(var a=1;a<100;a++);
// console.log("hii")
// console.log(a);

// let a=10;
// do{
//   console.log(a);
//   a++;
// }while(a<=5);


// function
// --------
//non parametrized + without return
// function apple()
// {
//   console.log("apple");
// }
// apple();

//parametrized 
// function apple(a,b){
//   console.log(a+b);
// }
// apple(1,2);

//arrow function
// let a=()=>{
//   console.log("huy");
// }
// a()


//only return abbi////
// let a=()=>{
//   console.log("abbi");
//   return 2+4;
// }
// a()

//return both abbi and 6//
// let a=()=>{
//   console.log("abbi");
//   return 2+4;
// }
// console.log(a());

//parametrized arrow function
// let a=(c,b)=>
// {
//   console.log(c*b);
// }
// a(2,2)

// let a=20;
// function p(){
//   let a=10;
//   console.log(a);
// }
// a();------>error
// console.log(a);------>only this one (correct)


//spread operator
// let a=[1,2,3]
// let p=[3,4,5]
// console.log(...a,...p);

//rest operator
// function a1(...values){
//   console.log (values);
// }
// a1(1,2,3,4)

//destructuring
// let a=[1,2,3,4,5]
// let[b,c,x,...y]=a
// console.log(y)

// function dog(callback){
//   setTimeout(()=>{
//     console.log("jack")
//     callback();
//   },2000);
// }
// function cat (){
//   console.log("rose")
// }
// dog(cat)


// function attendance(callback){
//   setTimeout(()=>{
//     console.log("attendance -present")
//     callback();
//   },1000);
// }
// function lunch(callback){
//   setTimeout(()=>{
//     console.log("Lunch -done")
//     callback();
//   },1000);
// }
// function gohome(callback){
//   setTimeout(()=>{
//     console.log("entered home")
//     callback();
//   },1000);
// }
// attendance(()=>{
//   lunch(()=>
//   {
//     gohome(()=>
//     {
//       console.log("tasks completed")
//     });
//   });
// });


function markAttendance() {
  return new Promise((resolve, reject) => {
    console.log("Marking attendance...");
    setTimeout(() => {
      console.log("Attendance marked!");
      resolve();
    }, 2000); // Simulates a 2-second delay
  });
}

function haveLunch() {
  return new Promise((resolve, reject) => {
    console.log("Having lunch...");
    setTimeout(() => {
      console.log("Lunch is done!");
      resolve();
    }, 3000); // Simulates a 3-second delay
  });
}

function goHome() {
  return new Promise((resolve, reject) => {
    console.log("Getting ready to go home...");
    setTimeout(() => {
      console.log("Reached home!");
      resolve();
    }, 1000); // Simulates a 1-second delay
  });
}

// Execute tasks in sequence using promises
markAttendance()
  .then(() => haveLunch())
  .then(() => goHome())
  .then(() => {
    console.log("All tasks are complete!");
  })
  .catch((error) => {
    console.log("An error occurred:", error);
  });
