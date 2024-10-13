import React, { useState } from 'react'

export default function GuestSelection({ numberOfGuests, setGuests }) {
    const [counterAdult, setCounterAdult] = useState(0)
    const [counterChild, setCounterChild] = useState(0)
    const [x, setX] = useState(0)


    function res() {
        setX(prevX => {
            const newX = prevX - 1;
            setGuests(newX);
            return newX;
        });
    }

    function sum() {
        setX(prevX => {
            const newX = prevX + 1;
            setGuests(newX);
            return newX;
        });
    }



    return (
        <div className='container_guests w-5/6 h-52 self-center mt-5 md:self-end  md:ps-6 md:w-7/12 '>

            <div className='flex flex-col gap-1 '>
                <h2 className='font-bold text-sm'>Adulto</h2>
                <h3 className='text-gray-400 text-sm'>Mayor de 13</h3>
                <label className='w-20 flex gap-1 items-center'>
                    <button className='w-7 border-2 rounded-lg' onClick={() => {
                        setCounterAdult(counterAdult - 1)
                        res()
                    }}
                    >-</button>
                    <span className=''>{counterAdult}</span>
                    <button className='w-7 border-2 rounded-lg' onClick={() => {
                        setCounterAdult(counterAdult + 1)
                        sum()

                    }}>+</button>
                </label>
            </div>

            <div className='flex flex-col gap-1 mt-5'>
                <h2 className='font-bold text-sm'>Niño</h2>
                <h3 className='text-gray-400 text-sm'>2-12 años</h3>
                <label className='w-20 flex gap-1 items-center'>
                    <button className='w-7 border-2 rounded-lg' onClick={() => {
                        setCounterChild(counterChild - 1)
                        res()
                    }} >-</button>
                    <span className=''>{counterChild}</span>
                    <button className='w-7 border-2 rounded-lg' onClick={() => {
                        setCounterChild(counterChild + 1)
                        sum()
                    }}>+</button>
                </label>
            </div>

        </div>


    )
}
