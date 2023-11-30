import React from 'react'
import Info from './Info'
import Item1 from './Item1'
import "./Styles/Template.css"
import Item2 from './Item2'
import Item3 from './Item3'
import Item4 from './Item4'
function Template() {
  return (
    <div className='Template'>
        <Info />
        <Item1 />
        <Item2 />
        <Item3 />
        <Item4 />
    </div>
  )
}

export default Template