import React from 'react';
import ComponentB from './ComponentB'
import {data} from '../App1';
// import ComponentA from './ComponentA'

const CompnentA = () => {
  return (
<>
<h1>Component A</h1>
<ComponentB/>
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
</data.Consumer>

</>
  )
}

export default CompnentA
