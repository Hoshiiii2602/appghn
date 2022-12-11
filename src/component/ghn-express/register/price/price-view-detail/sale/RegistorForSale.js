import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import './RegistorForSale.css'

export default function RegistorForSale() {

    const Location = useSelector((state => state.city.initValue.all))

    //RENDER CITY
    useEffect(() => {
        const citis = document.getElementById('citi5')
        function renderCiti(data) {
            for (let x of data) {
                citis.options[citis.options.length] = new Option(x.Name, x.Id)
            }
        }
        renderCiti(Location)
    }, [Location])


    const { register, handleSubmit, formState: { errors } } = useForm()


    return (
        <div
            className=
            'fullName w-full border-2 h-full rounded-[5rem] shadow-xl bg-white inset-y-0 left-[48%] text-center pb-14'>
            <div
                className='bg-[#e45f20] h-[74px] text-center text-white relative rounded-t-[5rem] font-semibold'>
                <p
                    className=' text-5xl pt-8'>
                    GHN Gọi cho tôi
                </p>
            </div>

            <form onSubmit={handleSubmit(data => console.log(data))}>
                <div className='mt-10 relative'>
                    <input
                        {...register('fullName', { required: true })}
                        name='fullName'
                        className='w-[90%] focus:outline-none border-[#e9e9e9] border-[1px] rounded-lg p-2 py-3'
                        placeholder='Họ và tên'>
                    </input>
                    {
                        errors.fullName &&
                        <p className='italic text-red-600 absolute left-[5%]'>
                            Required value
                        </p>
                    }
                </div>


                <div className='flex justify-around mt-4 relative'>
                    <div className='w-1/2 mt-8'>
                        <input
                            {...register('phone', { required: true })}
                            name='phone'
                            className=
                            'phone w-[80%] focus:outline-none border-[#e9e9e9] border-[1px] rounded-lg p-2 py-3'
                            placeholder='Số điện thoại'>
                        </input>
                    </div>
                    {
                        errors.phone &&
                        <p className='italic mt-24 text-red-600 absolute left-[6%]'>
                            Required value
                        </p>
                    }

                    <div className='mt-8 w-1/2 flex relative mx-2'>
                        <select
                            {...register('city', { required: true })}
                            name='city'
                            className=
                            'py-3 w-[80%] text-[#7b7b7b] focus:outline-none rounded-lg border-[#e9e9e9] border-2'
                            aria-label=".form-select-lg" id='citi5'>
                            <option value=''>Chọn tỉnh thành</option>
                        </select>
                        {
                            errors.city &&
                            <p className='italic mt-16 text-red-600 absolute left-[2%]'>
                                Required value
                            </p>
                        }
                    </div>
                </div>


                <div className='text-left laptop:ml-12 mobile:mx-2 laptop:mx-0 relative mt-14'>

                    <p className='font-semibold'>
                        Số lượng đơn dự kiến/tháng
                    </p>

                    <label
                        className=
                        "form-check flex relative justify-between checkmar border-2 items-center rounded-lg pr-3">
                        <p className="form-check-label text-[#999] font-normal pl-6 py-3">
                            Dưới 400 đơn/tháng
                        </p>
                        <input

                            {...register('total')}
                            name='total'
                            className="form-check-input toggle_input w-[20px] h-[20px]"
                            value='dưới 400 đơn/tháng'
                            defaultChecked
                            type="radio" />
                        <span className='toggle_label'></span>
                    </label>


                    <label className=
                        "form-check flex justify-between relative checkmar items-center border-2 rounded-lg mt-4 pr-3">
                        <p
                            className="form-check-label text-[#999] font-normal pl-6 py-3">
                            Từ 400 đơn/tháng trở lên
                        </p>
                        <input

                            {...register('total')}
                            name='total'
                            className="form-check-input toggle_input w-[20px] h-[20px]"
                            type="radio"
                            value='từ 400 đơn/tháng trở lên' />
                        <span className='toggle_label'></span>
                    </label>

                </div>

                <button
                    type='submit'
                    className=
                    'border-[1px] hover:border-[1px] hover:border-primary border-primary mt-8 p-3 py-3 z-[1] rounded-xl location laptop:w-[50%] text-white font-semibold hover:text-primary'>
                    ĐĂNG KÝ NHẬN TƯ VẤN
                </button>
            </form>

        </div>
    )
}