//! get Methods

//! getElementsByClassName
//! ===>Example 1: 
// const a = document.getElementsByClassName("main1");
// console.log(a);

// o/p :
// HTMLCollection [div.main1]


//! ===>Example 2: 
// const a = document.getElementsByClassName("main1");
// console.log(a);

// o/p :
// HTMLCollection(3) [div.main1, div.main1, div.main1]

// *************************************************************************************************************************

//! getElementById
//! ===>Example 1: 
// const a = document.getElementById("container");
// console.log(a);

// o/p: 
// <div class="main" id="container">ID Example</div>


//! ===>Example2: 
// const a = document.getElementById("container1");
// console.log(a);

// o/p: 
// null

// *************************************************************************************************************************

//! getElementsByTagName
//! ===>Example 1: 
// const a = document.getElementsByTagName("p");
// console.log(a);

// o/p :
// HTMLCollection [p]


//! ===>Example 2:
// const a = document.getElementsByTagName("div");
// console.log(a);

// o/p :
// HTMLCollection(3) [div.main1, div.main2, div.main3]

// *************************************************************************************************************************

// ! querySelector
// ! ===>Example:

// const a = document.querySelector("div")
// console.log(a);

// o/p :
// <div class="main1">Hai</div>


//! querySelectorAll
//! ===>Example:

// const a = document.querySelectorAll("div")
// console.log(a);

// o/p :
// NodeList(3) [div.main1, div.main2, div.main3]

// *************************************************************************************************************************

// ! onclick Method
// ! ===>Example:
// function foo() {
//   const a = document.getElementById("email").value;
//   console.log(a);
// }

// o/p:
// Email Box க்குள் நாம் என்ன content கொடுக்கிறோமோ அதனை console ல்  display ஆகும்.அதனை நாம் காணலாம்.
// மேலும் Submit Button ஐ எத்தனை முறை click செய்கிறோமோ அத்தனை முறை count ஆகிக் கொண்டே இருக்கும்.
// இதுதான் இதனுடைய result ஆகும்.


// ! Session Task : onclick Method
// ! dhoni7@gmail.com => valid user || invalid user
// function foo() {
//   const task = document.getElementById("email").value;
//   if (task == "dhoni7@gmail.com") {
//     console.log("valid user");
//   }
//   else {
//     console.log("invalid user");
//   }
// }

// o/p:
// Email Box க்குள் dhoni7@gmail.com என்று கொடுக்கும் போது console ல் "valid user"  display ஆகும்.
// வேறு எந்த தகவல் கொடுத்தாலும் "invalid user"  display ஆகும்.
// மேலும் Submit Button ஐ எத்தனை முறை click செய்கிறோமோ அத்தனை முறை count ஆகிக் கொண்டே இருக்கும்.
// இதுதான் இதனுடைய result ஆகும்.

// *************************************************************************************************************************

// ! Why do we use DOM?

//  <label for="email">Email</label> <br>
//  <input type="email" id="email"></input> 


// ! Normal Create for DOM
// var label = document.createElement("label")
// label.innerHTML="Email"
// label.setAttribute("for","email")
// var linebreak = document.createElement("br")
// var input = document.createElement("input")
// input.setAttribute("type","email");
// input.setAttribute("id","email");
// document.body.append(label,linebreak,input)


// ! using function we can achieve dynamic
// function createLabel(tagname, content, attrname, attrvalue) {
//   var label = document.createElement(tagname)
//   label.innerHTML = content
//   label.setAttribute(attrname, attrvalue)
//   return label;
// }
// const label1 = createLabel("label", "Email", "for", "email")
// document.body.append(label1);



// ! ===>H.W 
// ! 1.firstname 
// ! 2.lastname 
// ! 3.phonenumber
// ! 4.email 

// *************************************************************************************************************************