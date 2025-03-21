
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

// import { Component } from "react";
// class App extends Component {
//   constructor(props){
//     super(props)
//   }
//   render(){
//     return(
//     <div>
//       <h1>hello world</h1>
//     </div>
//     )
//   }
// }
// export default App