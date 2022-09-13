 async function fetchData() {
     console.log("Before fetch call");
     const response = await fetch("http://localhost:5000/get-allCustomers", {
         method: "GET"
     });

     console.log(response);
     console.log("After fetch");
 }

 fetchData();


 //  const obj = {
 //      prop1: "Test1212",
 //      fnct1: function() {
 //          console.log(this.prop1);
 //          //  console.log(this);
 //          const objIn = {
 //              fnct: () => {
 //                      console.log(this); //this is still obj, not objIn
 //                  }
 //                  //  fnct: function(){
 //                  //     console.log(this); //this is objIn
 //                  // }
 //          }
 //          objIn.fnct();

 //      },
 //      fnct2: () => {
 //          console.log(this.prop1);
 //          //  console.log(this);
 //      }
 //  }

 //  const obj2 = {
 //      prop2: "TestSomething",
 //      fnct: () => {
 //          console.log(this);
 //      }
 //  }

 //  obj.fnct1();
 //  obj.fnct2();

 //  const fetchData = () => {
 //      console.log("Before fetch call");
 //      const fetchResult = fetch("http://localhost:5000/get-allCustomers", {
 //          method: "GET"
 //      }).then(function(response) {
 //          response.json().then(function(obj) {
 //              console.log(obj);
 //          })
 //      })
 //      console.log("After fetch");
 //      console.log(fetchResult);
 //  }
 //  fetchData();


 // function eventA(callback) {
 //     const a = 12;
 //     console.log('The value is ' + a);
 //     callback(a);
 // }

 // function eventB(a) {
 //     const b = a + 12;
 //     console.log("The value is " + b);
 // }

 // function eventC(a) {
 //     const c = a + 22;
 //     console.log("The value is " + c);
 // }

 // eventA(eventC);
 // eventA(function(a) {
 //     const d = a + 72;
 //     console.log("The value is " + d);
 // });
 // eventB();



 // function divide() {
 //     const val1 = Number(document.getElementById("val1").value);
 //     const val2 = Number(document.getElementById("val2").value);
 //     try {
 //         callNotExitFunction();
 //     } catch (err) {
 //         console.error(err);
 //         return; //current function to be stoped
 //     } finally {
 //         console.log("Called from finally");
 //     }

 //     try {
 //         const result = calculate(val1, val2);
 //     } catch (err) {
 //         console.log("Outer catch ir triggered");
 //     }
 //     document.getElementById("result").value = result;
 // }

 // function calculate(val1, val2) {

 //     let result;
 //     try {
 //         if (val2 === 0) {
 //             throw Error("Division by 0");
 //         }

 //         result = val1 / val2;

 //     } catch (error) {
 //         console.log(error.stack);
 //     }
 //     return result;
 // }