import React from 'react'


function card({username, info="Hello From Our Member"}) {
    
  return (
       <div className="flex flex-col items-center gap-6 p-7 md:flex-row rounded-2xl">
  <div>
    <img className="size-48 shadow-xl rounded-md" alt="" src="https://images.pexels.com/photos/37194055/pexels-photo-37194055.jpeg" />
  </div>
  <div className="flex items-center">
    <span className="text-2xl font-medium">{username}</span>
    <span className="font-medium text-sky-500">{info}</span>
    <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
      <span>No. 4</span>
      <span>·</span>
      <span>2025</span>
    </span>
  </div>
</div>
  )
}

export default card
