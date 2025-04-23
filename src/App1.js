import React from 'react'
import ComponentA from './components/CompnentA'
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
 <data.Provider value={user}>

 <ComponentA/>
 </data.Provider>


 </>   

  )
}

export default App1
export {data}