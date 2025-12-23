import Link from 'next/link'
import React from 'react'

export default function Associate() {
    return (
        <div className='relative bg-[#1B1D20] w-full '>
            <div className='aborelative flex justify-center items-center  gap-[71px] p-4'>
                <Link href="https://www.opm.go.th/opmportal/index.asp"><img src="/logo_ny.png" className='w-[112px] h-auto' /></Link>
                <Link href="#"><img src="/logo_okmd.png" className='w-25 h-auto'/></Link>
                <Link href="https://www.tkpark.or.th/tha/home"> <img src="/logo_TKPark.png" className='w-[130px] h-auto' /></Link>
                <Link href="https://archives.museumsiam.org/"><img src="/logo_mu.png" className='w-[71px] h-auto' /></Link>
            </div>
        </div>
    )
}

