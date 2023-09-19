import React from 'react'
import Button from './Button'

// const list = ["All", "Live", "Soccer"]
//loop through and build using props 

const ButtonList = () => {
  return (
    <div className='flex'>
        <Button name="All"/>
        <Button name="Gaming"/>
        <Button name="Songs"/>
        <Button name="Live"/>
        <Button name="Soccer"/>
        <Button name="News"/>
        <Button name="Cricket"/>
    </div>
  )
}

export default ButtonList