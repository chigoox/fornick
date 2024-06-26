import { Image } from '@nextui-org/react'
import React from 'react'

function Home() {
    return (
        <div className='h-full flex md:flex-row flex-col w-full mt-64 bg-black'>
            <div className='h-full w-full center-col md:w-1/2 p-2 bg-white items-center'>
                <h1 className='text-8xl text-center font-bold text-black'>Angie's Sweets</h1>
                <h1 className='text-xl text-center font-bold bg-pink-500 rounded-lg text-white'>Indulge Your Cravings, Anytime, Anywhere!</h1>
                <h1 className='text-3xl font-bold text-center text-black'>With Our Top Of The Line Vending Machines</h1>
            </div>
            <div className='h-full w-full m:w-1/2 bg-white'>
                <Image className='h-full w-full  object-cover rounded-t-3xl md:rounded-none' alt='vending' src={'https://images.unsplash.com/photo-1575224526797-5730d09d781d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} />

            </div>
        </div>
    )
}

export default Home