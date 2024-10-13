import { useEffect, useState } from 'react'
import './App.css'
import Search from './components/search'
import Modal from './components/Modal'
import axios from 'axios'
import ListPlaces from './components/ListPlaces'

function App() {
  const [places, setPlaces] = useState([])
  const [open, setOpen] = useState(false)
  const [openCities, setOpenCities] = useState(false)
  const [openAge, setOpenAge] = useState(false)
  const [numberOfGuests, setGuests] = useState(0);
  const [citySelected, setCitySelected] = useState("Finland");
 const [counter,setCounter] =useState(0)

 
  useEffect(() => {
    axios.get("./stays.json")
      .then(data => setPlaces(data.data))
  }, [])
 
  

  return (
    <>
      <div className=' min-h-screen  max-w-screen-xl mx-auto'>
        <Search
          setOpen={() => setOpen(true)}
          setOpenCities={setOpenCities}
          setOpenAge={setOpenAge}
          setGuests={setGuests}
          citySelected={citySelected}
          numberOfGuests={numberOfGuests}
        />

        <main className='w-full   '>

          <div className='w-full flex justify-between px-3 mt-7 md:ps-4 md:pe-5 md:w-full md:mx-auto '>
            <h2 className='font-bold text-xl'>Quédate en Finlandia</h2>
            <h2 className='text-sm font-semibold'>{counter===0 ?14:counter} Lugares</h2>
          </div>
         
         <ListPlaces 
         places =  {places}
         numberOfGuests ={numberOfGuests}
         citySelected={citySelected}
         setCounter={setCounter}
         />

        </main>
        {open &&
          <Modal setOpen={() => setOpen(false)}
         openCities= {openCities} 
         openAge = {openAge}
        setGuests ={setGuests}
         setCitySelected ={setCitySelected}
         numberOfGuests ={numberOfGuests}
         citySelected={citySelected}
          setOpenCities={setOpenCities}
          setOpenAge={setOpenAge}
          />
        }
      </div>
    </>
  )
}

export default App
