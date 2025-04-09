
//------- class component -------//

// 1) import krna hoga Component ko jo react se arha he .
// 2) React me component ek built-in class se ati he or App Component usko extend krrha he ....

/* class App extends Component {
     constructor(props){
     super(props)
     }
     render(){ 
     return(
     <h1>hello</h1>
     )
  }
}*/

/*3)Jab hum class-based component use karti hain, 
to render() method React ke liye zaroori hai kyunki yahi method UI return karta hai.

✅ render() ka kaam:

*Component ka UI define karta hai.
*React ko batata hai ke kya show karna hai.
* HTML (JSX) return karta hai jo DOM me mount hota hai.*/


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

////----------------------------code ---------------------------------///
// import logo from './logo.svg';
import './App.css';
import { Component } from "react";

// class App extends Component {
//   constructor(props) {    // props ka use parent se child ko data bhejne ke liye hota hai.
//                           //constructor(props) me props pass karna zaroori hai, taki this.props accessible ho.
//                           // super(props) ka kaam parent class ka constructor call karna hai, 
//                           // taki this.props properly initialize
//     super(props)
//   }
//   render() {
//     return (
//       <div>
//         <h1>hello world</h1>
//       </div>
//     )
//   }
// }
// export default App // one default export class Component



// export class App2 extends Component { // multiple export class based Component 
//   constructor(props) {
//     super(props)
//   }
//   render() {
//     return (
//       <h1>hello Aneesa</h1>
//     )
//   }exte
// }

// export class Paragraph nds Component {
//   constructor(props) {
//     super(props)
//   }
//   render() {
//     return (
//       <p>Hello! Aneesa is a passionate and dedicated developer currently working
//         and establish herself as a successful developer while balancing her team collaborations
//         and independent projects.</p>
//     )
//   }
// }

// export class InputField extends Component {
//   constructor(props) {
//     super(props)
//   }
//   render() {
//     return (

//       <input type="date"></input>
//     )
//   }
// }



// class Nav extends Component {
//   constructor(props) {
//     super(props)
//   }
//   render() {
//     return (
//       <nav>
//         <h1 class="logo">Logo</h1>
//         <div class="nav-links">
//           <ul>
//             <li>home</li>
//             <li>About us</li>
//             <li>Contact</li>
//             <li>Services</li>
//           </ul>
//         </div>
//       </nav>
//     )
//   }
// }




// export default Nav


function App (){
  let fName = 'This is my very first Class';
  const aboutMe = [{
    name:'Aneesa',
    class:'1st year',
    age:17,
  }]
  return(
<div>
  <h1>{fName}</h1>
  <ul>
    {
      aboutMe.map((ele , i )=> <li key={i}>
        {ele.name} class:{ele.class}</li>)
    }
  </ul>
  </div>
)
  
}
export default App;