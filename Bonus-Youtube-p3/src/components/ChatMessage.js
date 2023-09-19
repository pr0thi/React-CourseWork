import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex items-center shadow-sm p-2'>
    <img alt="user" 
    className='h-8'
    src="https://static.vecteezy.com/system/resources/previews/007/296/444/non_2x/monochrome-icon-people-icon-design-user-icon-in-flat-style-vector.jpg"/>
    <span className='font-bold px-2'>{name}</span>
    <span >{message}</span>
    </div>
  )
}

export default ChatMessage