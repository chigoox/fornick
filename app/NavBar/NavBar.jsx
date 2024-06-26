import { Button } from '@nextui-org/react'
import { PhoneCall } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
    return (
        <div className='bg-pink-300 h-32 z-[99999] fixed w-full border-b border-pink-800'>
            <div className="bg-black h-12 flex justify-end px-12">
                <div className='center   text-white '>
                    <Button className='hover:text-pink-300 text-white bg-transparent border-x rounded-none'>
                        Contact Us
                    </Button>
                    <Button className='hover:text-pink-300 text-white bg-transparent border-x rounded-none'>
                        <PhoneCall />
                        999-999-9876
                    </Button>
                </div>
            </div>
            <div className=' h-16 border-black'>
                <Link href={'/'} className='h-full w-32  center'>
                    <h1 className="font-bold text-3XL">LOGO</h1>
                </Link>
            </div>

        </div>
    )
}

export default NavBar