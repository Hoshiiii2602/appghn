import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaTimes } from 'react-icons/fa'
import { useSelector } from 'react-redux'

function RegistorForm(props) {

    const { register, handleSubmit, formState: { errors } } = useForm()


    const location = useSelector(state => state.city.initValue.all)
    useEffect(() => {
        var citis = document.getElementById("city3");
        var districts = document.getElementById("district3");
        var wards = document.getElementById("ward3");
        //render địa chỉ
        function renderCity(data) {
            for (const x of data) {
                citis.options[citis.options.length] = new Option(x.Name, x.Id);
            }
            citis.onchange = function () {
                if (this.value !== '') {
                    const result = data.filter(n => n.Id === this.value)
                    for (let k of result[0].Districts) {
                        districts.options[districts.options.length] = new Option(k.Name, k.Id)
                    }
                }
            }
            districts.onchange = function () {
                const result = data.filter(n => n.Id === citis.value)
                if (this.value !== '') {
                    const dataCity = result[0].Districts.filter(n => n.Id === this.value)[0].Wards
                    for (const w of dataCity) {
                        wards.options[wards.options.length] = new Option(w.Name, w.Id)
                    }
                }

            }
        }
        renderCity(location)
    }, [])

    const handleTimes = () => {
        props.data.classList.add('hidden')
    }

    const fileType = "rar, zip, doc, docx, pdf, <1MB"

    return (
        <div className='w-[600px] p-3 border-[1px] mt-[30%] z-[4] rounded-xl m-auto bg-white shadow-md'>
            <span className='ml-[30%] flex'>
                <h3 className='text-4xl font-bold'>THÔNG TIN CÁ NHÂN</h3>
                <button
                    onClick={() => handleTimes()}>
                    <FaTimes style={{ marginLeft: '155px', color: '#00467f' }} />
                </button>
            </span>
            <div className='text-white mt- m-auto border-t-[1px] text-left py-6 mt-6'>
                <p
                    className='bg-[#00467f] pl-6 rounded-lg py-3 text-2xl font-semibold'>
                    [GHN - HCM] HRBP TECH SPECIALIST
                </p>
            </div>


            <form onSubmit={handleSubmit(data => console.log(data))}>
                <div className='grid grid-cols-2 mx-2'>
                    <div className='col-span-1 text-left'>


                        <label className='block mb-4'>
                            <span className='flex text-2xl'>
                                Họ & Tên
                                <p className='text-red-700 ml-2'>
                                    *
                                </p>
                            </span>
                        </label>


                        <input
                            {...register('fullName', { required: true })}
                            name='fullName'
                            className='focus:outline-none border-2 py-2 w-[90%] rounded-lg'>
                        </input>
                        {errors.fullName &&
                            <p className='absolute text-red-500 italic'>
                                Required value
                            </p>
                        }

                        <label className='block mb-4 mt-6'>
                            <span className='flex text-2xl'>
                                Email
                            </span>
                        </label>


                        <input
                            {...register('email', { required: true })}
                            name='email'
                            className='focus:outline-none border-2 py-2 w-[90%] rounded-lg'>
                        </input>
                        {errors.email &&
                            <p className='absolute text-red-500 italic'>
                                Required value
                            </p>
                        }

                    </div>
                    <div className='col-span-1 text-left ml-12'>


                        <label className='block mb-4'>
                            <span
                                className='flex text-2xl'>
                                Điện thoại
                                <p className='text-red-700 ml-2'>
                                    *
                                </p>
                            </span>
                        </label>


                        <input
                            {...register('phone', { required: true })}
                            name='phone'
                            className='focus:outline-none border-2 py-2 w-full rounded-lg'>
                        </input>
                        {errors.phone &&
                            <p className='absolute text-red-500 italic'>
                                Required value
                            </p>
                        }

                        <label className='block mb-4 mt-6'>
                            <span className='flex text-2xl'>
                                Giới tính
                            </span>
                        </label>


                        <select
                            {...register('sex', { required: true })}
                            name='sex'
                            className='focus:outline-none border-2 py-2 w-full rounded-lg'>
                            <option value=''>Không chọn</option>
                            <option value='Nam'>Nam</option>
                            <option value='Nữ'>Nữ</option>
                        </select>
                        {errors.sex &&
                            <p className='absolute text-red-500 italic'>
                                Required value
                            </p>
                        }


                    </div>


                    <span className='text-red-500 font-bold text-left mt-12'>Địa chỉ nơi bạn đang ở</span>


                </div>


                <div className='text-left mt-6'>
                    <label className='flex items-center'>


                        <span className='flex text-2xl'>
                            Tỉnh thành
                            <p className='text-red-700 ml-2'>
                                *
                            </p>
                        </span>


                        <select
                            {...register('city', { required: true })}
                            name='city'
                            className=
                            "mt-6 w-[75%] rounded-xl ml-16 border-2 h-16 focus:outline-none text-2xl font-light mb-3"
                            id="city3"
                            aria-label=".form-select-lg">
                            <option value=''>
                                Chọn tỉnh thành
                            </option>
                        </select>
                        {errors.city &&
                            <p className='absolute ml-[10%] mt-28 text-red-500 italic'>
                                Required value
                            </p>
                        }


                    </label>


                    <label className='flex items-center'>


                        <span
                            className='flex text-2xl w-[25%]'>
                            Quận huyện
                            <p className='text-red-700 ml-2'>
                                *
                            </p>
                        </span>


                        <select
                            {...register('district', { required: true })}
                            name="district"
                            className=
                            "mt-6 w-[87%] mr-6 rounded-xl border-2 h-16 focus:outline-none text-2xl font-light mb-3"
                            id="district3"
                            aria-label=".form-select-lg">
                            <option value=''>
                                Chọn quận huyện
                            </option>
                        </select>
                        {errors.district &&
                            <p className='absolute ml-[10%] mt-28 text-red-500 italic'>
                                Required value
                            </p>
                        }


                    </label>


                    <label className='flex items-center'>


                        <span className='flex text-2xl'>
                            Phường xã
                            <p className='text-red-700 ml-2'>
                                *
                            </p>
                        </span>


                        <select
                            {...register('ward', { required: true })}
                            name="ward"
                            className=
                            "mt-6 w-[75%] rounded-xl ml-16 border-2 h-16 focus:outline-none text-2xl font-light"
                            id="ward3"
                            aria-label=".form-select-lg">
                            <option value=''>
                                Chọn phường xã
                            </option>
                        </select>
                        {errors.ward &&
                            <p className='absolute ml-[10%] mt-28 text-red-500 italic'>
                                Required value
                            </p>
                        }


                    </label>
                </div>


                <div className='text-left'>


                    <label className='block mb-6 mt-8'>
                        <span className='flex text-2xl'>
                            Địa chỉ
                        </span>
                    </label>


                    <input
                        {...register('adress', { required: true })}
                        name='adress'
                        className='focus:outline-none border-2 py-2 w-[97%] rounded-lg'>
                    </input>
                    {errors.adress &&
                        <p className='absolute text-red-500 italic'>
                            Required value
                        </p>
                    }

                </div>


                <div className='text-left'>


                    <label className='block mb-6 mt-8'>


                        <span className='flex text-2xl'>
                            Bạn thấy tuyển dụng ở đâu ?
                            <p className='text-red-700 ml-2'>
                                *
                            </p>
                        </span>


                    </label>


                    <select
                        {...register('whereInfor', { required: true })}
                        name='whereInfor'
                        className='focus:outline-none border-2 py-2 w-[97%] rounded-lg'>


                        <option value=''>
                            Không chọn
                        </option>
                        <option value='Website GHN.VN'>
                            Website GHN.VN
                        </option>
                        <option value='Facebook'>
                            Facebook
                        </option>
                        <option value='Xem Thông tin trên đơn hàng GHN'>
                            Xem Thông tin trên đơn hàng GHN
                        </option>
                        <option value='Tin nhắn SMS của GHN'>
                            Tin nhắn SMS của GHN
                        </option>
                        <option value='Bạn bè, người thân giới thiệu'>
                            Bạn bè, người thân giới thiệu
                        </option>
                        <option value='Các băng rôn, bảng hiệu GHN'>
                            Các băng rôn, bảng hiệu GHN
                        </option>
                        <option value='Các trang tuyển dụng (Vieclam24h, TopCV,...)'>
                            Các trang tuyển dụng (Vieclam24h, TopCV,...)
                        </option>
                        <option value='Các trang rao vặt/báo (Muaban,Chotot,...)'>
                            Các trang rao vặt/báo (Muaban,Chotot,...)
                        </option>
                        <option value='Các nguồn thông tin khác'>
                            Các nguồn thông tin khác
                        </option>


                    </select>
                    {errors.whereInfor &&
                        <p className='absolute text-red-500 italic'>
                            Required value
                        </p>
                    }
                </div>


                <div className='text-left'>
                    <label className='block mb-6 mt-8'>
                        <span
                            className='flex text-2xl'>
                            Hồ sơ (CV) đính kèm(<p className='text-red-600 font-light ml-2'>
                                {fileType}
                            </p>)
                        </span>
                    </label>
                </div>


                <div>
                    <input
                        {...register('file')}
                        name='file'
                        type='file'></input>
                </div>


                <div className='text-right mr-6 mb-8'>
                    <button
                        type='submit'
                        className='py-3 text-2xl font-semibold px-3 rounded-xl bg-primary'>
                        ỨNG TUYỂN
                    </button>
                </div>
            </form>
        </div>
    )
}



export default RegistorForm