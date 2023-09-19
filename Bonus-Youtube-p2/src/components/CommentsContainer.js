import React from 'react'

//array of objects 
const commentsData = [
    {
     name: "Akshay Saini",
     text: "lorem ipsum dolor sit amet, consectetur adip",
     replies: [ {
        name: "Akshay Saini",
        text: "lorem ipsum dolor sit amet, consectetur adip",
        replies: [
            {
                name: "Akshay Saini",
                text: "lorem ipsum dolor sit amet, consectetur adip",
                replies: [
                    {
                        name: "Akshay Saini",
                        text: "lorem ipsum dolor sit amet, consectetur adip",
                        replies: [
                   
                        ]
                   
                       },
                ]
           
               },
   
        ]
   
       },

     ]

    },
    {
        name: "Akshay Saini",
        text: "lorem ipsum dolor sit amet, consectetur adip",
        replies: [
            {
                name: "Akshay Saini",
                text: "lorem ipsum dolor sit amet, consectetur adip",
                replies: [
           
                ]
           
               },
               {
                name: "Akshay Saini",
                text: "lorem ipsum dolor sit amet, consectetur adip",
                replies: [
           
                ]
           
               },
        ]
   
       },
       {
        name: "Akshay Saini",
        text: "lorem ipsum dolor sit amet, consectetur adip",
        replies: [
   
        ]
   
       },
       {
        name: "Akshay Saini",
        text: "lorem ipsum dolor sit amet, consectetur adip",
        replies: [
   
        ]
   
       },



]


const Comment = ({data}) =>{
    const {name, text, replies} = data;
    return( <div className='flex shadow-sm bg-gray-100 p-2 rounded-md my-2'>
    <img
     className='w-12 h-12'
     alt = "user"
     src='https://static.vecteezy.com/system/resources/previews/007/296/444/non_2x/monochrome-icon-people-icon-design-user-icon-in-flat-style-vector.jpg'
    />
    <div className='px-3'>
        <p className='font-bold'>{name}</p>
        <p>{text}</p>
        </div>
     </div>
     
)}

//passing in a list and iterate through it
const CommentsList = ({comments}) =>{
    return comments.map((comment, index)=> 
    <div>
    <Comment key = {index} data = {comment} />
        <div className='pl-5 border border-l-black ml-5'>
            <CommentsList key = {index} comments={comment.replies}/>
        </div>
    </div>
    )
        
        

}

const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
    
    <h1 className='text-2xl font-bold'>Comments: </h1>
    <CommentsList comments = {commentsData}/>
    </div>
  )
}

export default CommentsContainer