import React from 'react'
import ComponentA from './components/CompnentA'
import {createContext} from 'react'


// create 
const data = createContext()
const theme = createContext()

const App1 = () => {

const user= {
     name: 'aneesa',
     age:50,
     class:'11th'

}  
const themeMode='dark'  ;
  return (
    // provide 
 <>
 <data.Provider value={user}>
<theme.Provider value={themeMode}>

 <ComponentA/>
 </theme.Provider>
 </data.Provider>


 </>   

  )
}

export default App1
export {data,theme}



