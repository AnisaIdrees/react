import React from 'react'
import CompnentA from './components/CompnentA'
import {createContext} from 'react'


// create 
const data = createContext()

const App1 = () => {

const user= {
     name: 'aneesa',
     age:50,
     class:'11th'

}    
  return (
    // provide 
 <>
 <data.provider value={user}>

 <CompnentA/>
 </data.provider>


 </>   

  )
}

export default App1
export {data}