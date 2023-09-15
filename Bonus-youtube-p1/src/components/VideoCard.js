import React from 'react'

export const VideoCard = ({info}) => {
  console.log(info);
  const{snippet,statistics} = info;
  const {channelTitle,title,thumbnails} = snippet;
    return (
      <div className='p-2 table-cell min-h-100'>
    <div className='p-4 m-2 w-72 shadow-lg max-w-full max-h-full table-cell min-h-[100px]'>
    
    <img className='rounded-lg w-full h-full object-center ' alt="thumbnail" src={thumbnails.medium.url}/>
    <ul className='h-[145px]'>
      
        <li className='font-bold mt-auto py-2 max-w-full max-h-full'>{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
    </ul>
    </div>
    </div>
  )
}
