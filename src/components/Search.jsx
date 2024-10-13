import React from 'react'

export default function Search({setOpen, setOpenCities, setOpenAge,setGuests,citySelected, numberOfGuests}) {
 
  
    return (
        <nav className='w-full flex flex-wrap  md:items-center md:justify-between'>
          <div className='w-full justify-start flex ps-4 md:w-1/2'>
            <figure className='w-36 h-9'>
              <img src="https://windbnb-page.netlify.app/static/media/logo.beef9462.svg"
                alt=""
                className='w-full h-full' />
            </figure>
          </div>
          <div className='w-full flex mt-5 h-14 justify-end  md:w-1/2'>
            <div className='w-60 h-12 shadow-md rounded-lg overflow-hidden flex items-center md:w-2/4 mx-auto md:mx-2' >
              <button className='w-1/2 h-full bg-slate-50  active:bg-white border-e-2 hover:border-2' 
              onClick= {()=>{
                setOpenCities(true)
                 setOpen(true) 
                 setOpenAge(false)
                 setGuests(0)
              }}
              >
                {citySelected}
              </button>
              <button className='w-1/4 h-full bg-slate-50 border-e-2 active:bg-white hover:border-2'onClick= {()=>{
                setOpenAge(true)
                 setOpen(true) 
                 setOpenCities(false)
              }} >
                {numberOfGuests}
              </button>
              <button  onClick={setOpen} 
               className='w-1/4 h-full bg-slate-50 flex justify-center items-center active:bg-white hover:border-2' >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(235, 87, 87)" className="size-6">
                    <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
                    </svg>
              </button>
            </div>

          </div>

        </nav>
  )
}
