import React, { useState } from 'react'

export default function StoryClient() {
    const [display, setDisplay] = useState({
        picture: '',
        video: 'hidden',
        src: ''
    })
    return (
        <div className='laptop:col-span-2 laptop:w-full'>
            <div className='relative laptop:h-[565px]'>
                <div
                    className={display.picture}
                    onClick={() =>
                        setDisplay({
                            picture: 'hidden', video: '',
                            src: 'https://www.youtube.com/embed/_Sjf4z7Ui0I?rel=0&autoplay=1'
                        })}
                >
                    <picture id='picture' className=' relative'>
                        <source
                            srcSet="//theme.hstatic.net/200000472237/1000829412/14/bg-video-mb.jpg?v=491"
                            media="(max-width: 767px)" />
                        <source
                            srcSet="//theme.hstatic.net/200000472237/1000829412/14/bg-video.jpg?v=491"
                            type='mp4/video' />
                        <img
                            className="lazyload h-[565px] object-cover bg-center"
                            src="//theme.hstatic.net/200000472237/1000829412/14/bg-video.jpg?v=491" />
                    </picture>
                    <span id='icon'
                        className=" top-[44%] left-[44%] right-0 bottom-0 absolute">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className='h-[50px] w-[50px] rounded-full fill-white bg-[#0000004d]'
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            version="1.1"
                            id="Capa_1"
                            x="0px"
                            y="0px"
                            viewBox="0 0 30.051 30.051"
                            style={{ enableBackground: 'new 0 0 30.051 30.051' }}
                            xmlSpace="preserve">
                            <g>
                                <path
                                    d=
                                    "M19.982,14.438l-6.24-4.536c-0.229-0.166-0.533-0.191-0.784-0.062c-0.253,0.128-0.411,0.388-0.411,0.669v9.069   c0,0.284,0.158,0.543,0.411,0.671c0.107,0.054,0.224,0.081,0.342,0.081c0.154,0,0.31-0.049,0.442-0.146l6.24-4.532   c0.197-0.145,0.312-0.369,0.312-0.607C20.295,14.803,20.177,14.58,19.982,14.438z" />
                            </g>
                            <g>
                                <path
                                    d=
                                    "M19.982,14.438l-6.24-4.536c-0.229-0.166-0.533-0.191-0.784-0.062c-0.253,0.128-0.411,0.388-0.411,0.669v9.069   c0,0.284,0.158,0.543,0.411,0.671c0.107,0.054,0.224,0.081,0.342,0.081c0.154,0,0.31-0.049,0.442-0.146l6.24-4.532   c0.197-0.145,0.312-0.369,0.312-0.607C20.295,14.803,20.177,14.58,19.982,14.438z" />
                            </g>
                        </svg>
                    </span>
                </div>
                <div className={display.video}>
                    <iframe
                        id="if-video"
                        className="top-0 right-0 w-full"
                        src={display.src}
                        frameBorder={0}
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen style={{ height: 565 }} />
                </div>
            </div>

        </div>
    )
}
