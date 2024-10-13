import React, { useEffect, useState } from 'react'
import Card from './Card'
export default function ListPlaces({ places, numberOfGuests, citySelected, setCounter }) {

  useEffect(() => {
    let count = 0; 

    places.forEach((place) => {
      if (
        place.city.trim().toLowerCase() === citySelected.trim().toLowerCase() &&
        place.maxGuests >= numberOfGuests
      ) {
        count++; 
      }
    });

    setCounter(count); 
  }, [places, numberOfGuests, citySelected]); 


  return (
    <div className='card_container flex-col
           md:flex md:flex-row md:gap-12 md:flex-wrap md:justify-center mt-4 '>

      {places.map((place, index) =>

        (place.city.trim().toLowerCase() === citySelected.trim().toLowerCase() &&
          place.maxGuests >= numberOfGuests || citySelected==="Finland"
        ) &&
        <>
          <Card
            key={index}
            city={place.city}
            superHost={place.superHost}
            title={place.title}
            rating={place.rating}
            maxGuests={place.maxGuests}
            type={place.type}
            beds={place.beds}
            photo={place.photo}
          />
        </>
      )}
    </div>)
}
