import React from 'react';
import ComponentB from './ComponentB'
import {data} from '../App1';
// import ComponentA from './ComponentA'

const CompnentA = () => {
  return (
<>
<h1>Component A</h1>
<ComponentB/>
<data.consumer>
    {
        ()=>(
            <>
            <h6>{data}</h6>
            </>
        )
    }
</data.consumer>

</>
  )
}

export default CompnentA
