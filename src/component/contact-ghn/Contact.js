import React from 'react'
import { useForm } from 'react-hook-form'

export default function Contact() {
    const srcIframe = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5432133941067!2d106.66192551526032!3d10.769644162262596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528ca8aab0255%3A0x4b47df7371d378c9!2zQ8SDbiBI4buZIFJpdmVyYSBQYXJrIFPDoGkgR8Oybg!5e0!3m2!1sen!2s!4v1571889194569!5m2!1sen!2s"
    const { register, handleSubmit, formState: { errors } } = useForm()
    return (
        <div className='laptop:mt-40 mobile:mt-56 container tablet:mx-6'>

            <div className='relative flex '>


                <picture>
                    <source
                        srcSet="//theme.hstatic.net/200000472237/1000829412/14/header_pagecontact.jpg?v=509">
                    </source>
                    <img
                        src="//theme.hstatic.net/200000472237/1000829412/14/header_pagecontact.jpg?v=509"
                        alt="Liên hệ">

                    </img>
                </picture>


                <div className='w-full h-full overlay absolute'>
                    <p
                        className='mt-[11%] ml-[37%] tracking-wide text-white  font-bold text-5xl'>
                        LIÊN HỆ TƯ VẤN - HỢP TÁC
                    </p>
                </div>

            </div>


            <div className='tablet:grid grid-cols-2 mt-20'>


                <div className='col-span-1'>


                    <p className='text-4xl font-bold mb-10'>
                        Thông tin liên hệ
                    </p>


                    <div className='border-b-4 max-w-[5%] border-black'></div>


                    <div className='mt-16'>
                        <p className='font-light text-2xl mb-4'>
                            Địa chỉ chúng tôi
                        </p>
                        <p className='font-semibold text-2xl'>
                            Tầng 3, tòa nhà Rivera Park, số 7/28 Thành Thái, Phường 14, Quận 10, TP HCM
                        </p>
                    </div>


                    <div className='mt-16'>
                        <p className='font-light text-2xl mb-4'>
                            Email chúng tôi
                        </p>
                        <p className='font-semibold text-2xl'>
                            Chăm sóc khách hàng: cskh@ghn.vn<br></br>
                            Hỗ trợ kinh doanh: hotrokinhdoanh@ghn.vn</p>
                    </div>


                    <div className='mt-16'>
                        <p className='font-light text-2xl mb-4'>Điện thoại</p>
                        <p className='font-semibold text-2xl'>1900 636677</p>
                    </div>


                    <div className='mt-16'>
                        <p className='font-light text-2xl mb-4'>Thời gian làm việc</p>
                        <p className='font-semibold text-2xl'>
                            Thứ 2 đến Chủ Nhật từ 8h30 đến 21h00 (Trừ các ngày lễ)
                        </p>
                    </div>


                </div>


                <form
                    onSubmit={handleSubmit(data => console.log(data))}
                    className='col-span-1 relative'>


                    <p className='text-4xl font-bold mb-10'>Hỗ trợ tư vấn</p>


                    <div className='border-b-4 max-w-[5%] border-black'></div>


                    <div className='w-[90%]'>
                        <input
                            {...register('fullName', { required: true })}
                            name='fullName'
                            className='w-full p-4 border-2 mt-16 focus:outline-none rounded-lg text-2xl'
                            placeholder='Tên của bạn'>
                        </input>
                        {
                            errors.fullName &&
                            <p className='italic text-red-500 absolute'>
                                Required value
                            </p>
                        }
                        <div className='flex space-x-10'>
                            <input
                                {...register('email', { required: true })}
                                name='email'
                                className='w-full p-4 border-2 mt-8 focus:outline-none rounded-lg text-2xl'
                                placeholder='Email của bạn'>
                            </input>
                            {
                                errors.email &&
                                <p className='italic text-red-500 absolute mobile:left-[-8%] tablet:left-[-8%] laptop:left-[-4%] mt-[62px]'>
                                    Required value
                                </p>
                            }
                            <input
                                {...register('phone', { required: true })}
                                name='phone'
                                className='w-full p-4 border-2 mt-8 focus:outline-none rounded-lg text-2xl'
                                placeholder='Số điện thoại của bạn'>
                            </input>
                            {
                                errors.phone &&
                                <p className='italic text-red-500 absolute mt-[60px] left-[43%]'>
                                    Required value
                                </p>
                            }
                        </div>
                        <textarea
                            {...register('body')}
                            name='body'
                            className='w-full h-60 p-4 border-2 mt-8 focus:outline-none rounded-lg text-2xl'
                            placeholder='Nội dung cần tư vấn'>
                        </textarea>
                    </div>
                    <button
                        type='submit'
                        className=
                        'border-[1px] hover:border-[1px] hover:border-primary border-primary mt-12 p-3 py-3 z-[1] rounded-xl location laptop:w-[30%] text-white font-semibold hover:text-primary'>
                        GỬI CHO CHÚNG TÔI
                    </button>
                </form>


            </div>


            <div className='mt-20 mb-16'>
                <iframe
                    src={srcIframe}
                    width='100%'
                    height={450}
                    frameBorder={0}
                    allowFullScreen />
            </div>
        </div>
    )
}
