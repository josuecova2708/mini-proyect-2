import React from 'react'
import CityList from './CityList'
import GuestSelection from './GuestSelection'
import { useEffect, useState } from 'react'

export default function Modal({ setOpen, openCities, openAge, setGuests, setCitySelected, numberOfGuests, citySelected, setOpenCities,setOpenAge }) {
  const [localGuests, setLocalGuests] = useState(numberOfGuests);
  const [localCity, setLocalCity] = useState(citySelected);
  const handleSearch = () => {
    setGuests(localGuests);
    setCitySelected(localCity);
    setOpen(); 
  };

  return (
    <div className='modal block fixed left-0 top-0 w-full h-full bg-black bg-opacity-55'>
      <div className='modal_content bg-white border-2 border-black rounded-md w-full h-4/5 flex flex-col'>
        <div className='flex justify-between px-3'>
          <h2 className='mt-3 ps-3'>Edit your search</h2>
          <span className="close text-red-600 float-right text-xl cursor-pointer" onClick={setOpen}>&times;</span>
        </div>
        <div className='flex items-start flex-col shadow-md rounded-lg h-28 justify-center mt-5 w-11/12 mx-auto border-2 md:flex-row md:h-16 '>
          <button onClick= {()=>{
                setOpenCities(true) 
                 setOpenAge(false)

              }} className='w-full h-1/2 text-start text-sm border-b-2 ps-5 md:w-5/12 
              md:h-full md:border-b-0 md:border-r-2 ' >
            <span className='font-bold'>Location</span> <br />
            <span className='text-gray-600'>{localCity}</span>
          </button>
          <button  onClick= {()=>{
                setOpenCities(false) 
                 setOpenAge(true)
              }} className='w-full h-1/2 text-start text-sm ps-5
               md:w-5/12 md:border-none  md:h-full'>
            <span className='font-bold'>Guests</span> <br />
            <span className=' text-gray-700'>{localGuests}</span>
          </button>
            <button onClick={handleSearch}
          className='bg-orange-600 w-28 h-9 items-center rounded-md text-white mx-auto mt-auto mb-4 flex gap-2 justify-center hover:bg-orange-500 hidden md:block md:h-full md:w-2/12 '>
            Buscar
          </button>

        </div>

        {openCities ? (
          <CityList setCitySelected={setLocalCity} />
        ) : openAge && (
          <GuestSelection numberOfGuests={localGuests} setGuests={setLocalGuests} />
        )}

        <button onClick={handleSearch}
         className='bg-orange-600 w-28 h-9 items-center rounded-md text-white mx-auto mt-auto mb-4 flex gap-2 justify-center hover:bg-orange-500
         md:hidden '>
          Buscar
        </button>
      </div>
    </div>
  );
}
