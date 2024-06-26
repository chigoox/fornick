import { Image } from '@nextui-org/react'
import React from 'react'

function About1() {
    return (
        <div className='h-full flex md:flex-row flex-col w-full pt-[7.8rem] bg-black'>
            <div className='h-1/2 md:h-full relative  w-full m:w-1/2 bg-black'>
                <div className="absolute bottom-5 p-2">
                    <Image className='h-full  z-50 text-white w-full object-cover ' alt='vending' src='https://images.unsplash.com/photo-1618506557292-ec1862b3c506?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />

                </div>
            </div>
            <div className='h-full overflow-y-scroll  w-full text-black flex flex-col gap-2 md:w-1/2 p-2 px-4 bg-white items-center'>
                <h1 className='text-4xl text-center font-bold text-black'>Family-Owned Delights, Always Fresh from NJ!</h1>
                <h1 className='text-xl text-center font-bold bg-pink-500 rounded w-40 text-white'>Machines</h1>
                <p className={''}>
                    proudly offers various snack and soda machines to businesses throughout the area. Join our long list of satisfied clients and give your employees something on which to snack
                </p>
                <h1 className='text-xl text-center font-bold bg-pink-500 rounded w-40 text-white'>Foods</h1>
                <p className={''}>
                    From candy bars to chewy treats, select your favorite types of food from our vast selection, and we’ll be sure to keep your vending machine stocked to the max.
                </p>
                <h1 className='text-xl text-center font-bold bg-pink-500 rounded w-40 text-white'>Beverages</h1>
                <p className={'4 mb-10'}>
                    From Coke® to bottled water, Angie's Sweets can stock your drink machine with nearly any beverage you desire. Check our extensive beverage list to see the many options available.
                </p>
            </div>
        </div>
    )
}

export default About1