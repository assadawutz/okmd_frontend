import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Associate() {
    return (
        <div className='relative bg-[#1B1D20] w-full '>
            <div className='aborelative flex justify-center items-center  gap-[71px] p-4'>
                <Link href="https://www.opm.go.th/opmportal/index.asp">
                    <Image src="/logo_ny.png" alt="สำนักนายกรัฐมนตรี" width={112} height={50} className='h-auto' />
                </Link>
                <Link href="#">
                    <Image src="/logo_okmd.png" alt="OKMD Logo" width={100} height={50} className='h-auto'/>
                </Link>
                <Link href="https://www.tkpark.or.th/tha/home">
                    <Image src="/logo_TKPark.png" alt="TK Park Logo" width={130} height={50} className='h-auto' />
                </Link>
                <Link href="https://archives.museumsiam.org/">
                    <Image src="/logo_mu.png" alt="Museum Siam Logo" width={71} height={50} className='h-auto' />
                </Link>
            </div>
        </div>
    )
}

