import React from 'react'

const Watches = () => {
    const watchData =[
        {id:1,name:"watch1",price:1000,description:"luxury watch",image:"/watch1.jpg"},
        {id:2,name:"watch2",price:1000,description:"luxury watch",image:"/watch2.jpg"},
        {id:3,name:"watch3",price:1000,description:"luxury watch",image:"/watch3.jpg"},
        {id:4,name:"watch4",price:1000,description:"luxury watch",image:"/watch4.jpg"},
        {id:5,name:"watch5",price:1000,description:"luxury watch",image:"/watch5.jpg"},
        {id:6,name:"watch6",price:1000,description:"luxury watch",image:"/watch7.jpg"},
    ]
  return (
    <div>
      <div className='watches grid grid-cols-1 md:grid-cols-3 gap-10 px-10 my-10'>
      {watchData.map((watch)=>(
        <div key={watch.id} className='watch-card bg-white pt-5 rounded-md shadow-md text-center'>
            <img src={watch.image} alt={watch.name} className='image w-[350px] h-[370px] rounded-[10px]  transition-transform duration-300 transform hover:scale-110'/> 
            <h3 className='watch-name mt-4 text-2xl font-bold'>{watch.name}</h3>
            <p className='desc text-gray-500'>{watch.description}</p>
            <div className='price text-blue-500 text-xl font-semibold mt-2'>$ {watch.price} </div>         
              <button className='watch-button mt-4 px-4 py-2 bg-blue-500 text-white rounded-md'>BUY NOW</button>     </div>
      )
    )}
      </div>
    </div>
  )
}

export default Watches
