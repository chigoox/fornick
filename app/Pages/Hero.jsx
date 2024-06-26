import { Image } from '@nextui-org/react'
import React from 'react'

function Hero() {
    return (
        <div className='h-full w-full mt-60'>
            <Image className='h-screen w-full md:w-screen object-cover' alt='hero' src='https://images.unsplash.com/photo-1578783316916-0d619b9fe174?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
        </div>

    )
}

export default Hero