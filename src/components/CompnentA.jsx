import React from 'react';
import ComponentB from './ComponentB'
import { useContext } from 'react';
import {data,theme} from '../App1';
// import ComponentA from './ComponentA'


const CompnentA = () => {
const  dataContext =useContext(data)
const themeContext = useContext(theme)

  return (
<>
<h1>Component A</h1>
<h1>{dataContext.name}</h1>
<h1>{dataContext.age}</h1>
<h1>{theme}</h1>
{/* <ComponentB/>
<data.Consumer>
    {
        (user)=>(
            <>
            <h2>{user.name}</h2>
            <h2>{user.age}</h2>
            <h2>{user.class}</h2>
            </>
        )
    }
</data.Consumer> */}

</>
  )
}

export default CompnentA
