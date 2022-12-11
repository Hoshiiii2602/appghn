import React from 'react'

export default function InforGhn({ data }) {
    return (
        <div>
            <h3
                className='tablet:text-6xl mobile:px-2 tablet:px-0 mobile:text-4xl font-semibold'>
                {data.title}
            </h3>
            <p
                style={{ whiteSpace: 'pre-line' }}
                className='break-before-auto mt-12 mobile:px-2 tablet:px-0 text-3xl font-light'>
                {data.desc}
            </p>
        </div>
    )
}
