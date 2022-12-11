import React from 'react'
import './frames.css'

export default function TechnolgyVideo({data}) {
    return (
        <div>
            <a href="https://www.youtube.com/watch?v=VR-IDtqDuhg">
                <div className="text-center relative">
                    <img className="m-auto" alt='image video' src={data}></img>
                    <div className='btn-video p-6 absolute top-[38%] mobile:left-[40%] laptop:left-[41%] tablet:left-[45%]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-play-fill" viewBox="0 0 16 16">
                            <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                        </svg>
                    </div>
                </div>
            </a>
        </div>
    )
}
