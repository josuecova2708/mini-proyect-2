import React from 'react'

export default function Card({ superHost, title, rating, maxGuests, type, beds, photo }) {
  return (
    <div className='w-11/12 h-80 flex flex-wrap justify-center mx-auto mt-6 md:w-96 md:h-96 md:mx-0 max-w-[25rem]'>
      <figure className='w-full h-4/5 bg-cyan-100 rounded-2xl overflow-hidden'>
        <img src={photo}
          alt=""
          className='w-full h-full' />
      </figure>
      <div className='characteristics-rating  flex  w-full justify-between items-center'>
      {superHost && (
          <span className="super  px-3 py-2 mr-3 border border-gray-800 text-gray-800 rounded-xl text-xs font-extrabold w-28 md:w-32">SUPER HOST</span>
        )}
        <h4 className='text-gray-500 font-medium text-sm pe-10'>{type}. {beds} beds</h4>
        <div className='flex '>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(235, 87, 87)" className="size-6">
            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
          </svg>
          <p>{rating}</p>
        </div>
      </div>
      <div className='w-full '>
        <h2>
          {title}
        </h2>

      </div>

    </div>
  )
}
