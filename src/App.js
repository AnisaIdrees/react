
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

import { Component } from "react";
class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <h1>hello world</h1>
      </div>
    )
  }
}
export default App // one default export class Component



export class App2 extends Component { // multiple export class based Component 
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <h1>hello Aneesa</h1>
    )
  }
}

export class Paragraph extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <p>Hello! Aneesa is a passionate and dedicated developer currently working
        on a Blogging Platform using HTML, CSS, JavaScript (ES6), and Firebase.
        She has already set up authentication and is now focusing on storing and
        displaying blog posts in Firestore, including categories, titles, descriptions,
        and content. Aneesa has a strong command of HTML, CSS, JavaScript, and Firebase
        (Firestore + Auth) and is continuously improving her skills. She prefers step-
        by-step guidance when learning new technologies and aims to master Firestore in
        an easy and efficient way. With a keen interest in remote jobs and startup development,
        Aneesa actively tracks in-demand technologies and platforms like HiringMine, Toptal,
        LinkedIn, Glassdoor, and Upwork. Her ultimate goal is to achieve a five-digit salary
        and establish herself as a successful developer while balancing her team collaborations
        and independent projects. 🚀</p>
    )
  }
}

export class InputField extends Component {
  constructor (props){
    super(props)
  }
  render(){
    return(

      <input type="date"></input>
    )
  }
}