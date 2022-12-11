import React from 'react'
import DetailSlide from './DetailSlide'
import StoryClient from './StoryClient'

export default function FooterContent() {
    return (
        <div className='mt-32 laptop:m-20 mobile:mb-8'>
            <div className='laptop:text-left mobile:text-center pt-32 pb-16'>
                <h2 className='font-bold text-5xl text-[#00467f]'>
                    ĐỐI TÁC CỦA
                    <span className='text-primary'> GHN</span>
                </h2>
            </div>
            <div className='laptop:grid mobile:block laptop:grid-cols-3'>
                <StoryClient />
                <DetailSlide />
            </div>
        </div>
    )
}
