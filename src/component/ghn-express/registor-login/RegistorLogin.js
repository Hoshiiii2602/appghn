import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'



export default function RegistorLogin() {
    const Location = useSelector((state => state.city.initValue.all))

    //RENDER CITY
    useEffect(() => {
        const citis = document.getElementById('citi2')
        const district = document.getElementById('district2')
        const ward = document.getElementById('ward2')


        function renderCiti(data) {
            for (let x of data) {
                citis.options[citis.options.length] = new Option(x.Name, x.Id)
            }
            citis.onchange = function () {
                district.length = 1;
                ward.length = 1;
                if (this.value !== '') {
                    let result = data.filter(n => n.Id === this.value)
                    for (let y of result[0].Districts) {
                        district.options[district.options.length] = new Option(y.Name, y.Id)
                    }

                }
            }

            district.onchange = function () {
                ward.length = 1;
                const result = data.filter(n => n.Id === citis.value)
                if (this.value !== '') {
                    const resultDis = result[0].Districts.filter(n => n.Id === this.value)[0].Wards
                    for (let z of resultDis) {
                        ward.options[ward.options.length] = new Option(z.Name, z.Id)

                    }
                }

            }
        }
        renderCiti(Location)
    }, [Location])


    const { register, handleSubmit, formState: { errors } } = useForm()


    return (
        <div className='mt-36 laptop:grid grid-cols-2 gap-8 text-center pb-32'>
            <div className='col-span-1'>


                <form
                    onSubmit={handleSubmit(data => console.log(data))}
                    className=
                    'fullName w-full border-2 h-full rounded-[5rem] shadow-xl bg-white inset-y-0 left-[48%] text-center pb-14'>

                    <div
                        className=
                        'bg-[#e45f20] h-[74px] text-center text-white rounded-t-[5rem] font-bold'>
                        <p
                            className=' text-5xl pt-8'>
                            ĐĂNG KÝ NGAY
                        </p>
                    </div>


                    <input
                        {...register('fullName', { required: true })}
                        className=
                        'w-[90%] focus:outline-none mt-10 relative border-[#e9e9e9] border-[1px] rounded-lg p-2 py-3'
                        placeholder='Họ và tên'>
                    </input>

                    {
                        errors.fullName &&
                        <p className='italic text-red-600 absolute mobile:left-[10%] tablet:left-[17%] laptop:left-[6%]'>
                            Required value
                        </p>
                    }


                    <div className='flex justify-around mt-4 relative'>
                        <div className='flex w-[90%] mt-8 m-auto justify-between'>
                            <input
                                {...register('email', { required: true })}
                                type="email"
                                className=
                                'email w-[48%] focus:outline-none checkEmail border-[#e9e9e9] border-[1px] rounded-lg p-2 py-3'
                                placeholder='Email'
                            >
                            </input>
                            {
                                errors.email &&
                                <p className='italic mt-14 text-red-600 mobile:left-[10%] absolute tablet:left-[5%]'>
                                    Required value
                                </p>
                            }

                            <input
                                {...register('phone', {
                                    required: true, pattern: {
                                        value: /(84|0[3|5|7|8|9])+([0-9]{8})\b/g
                                    }
                                })}
                                className=
                                'phone w-[48%] focus:outline-none border-[#e9e9e9] border-[1px] rounded-lg p-2 py-3'
                                placeholder='Số điện thoại'
                            ></input>
                            {
                                errors.phone &&
                                <p className='italic mt-14 text-red-600 absolute left-[52%]'>
                                    Required value
                                </p>
                            }
                        </div>
                    </div>

                    <div className='mt-8 flex justify-around mx-2 relative'>
                        <select
                            {...register('city', { required: true })}
                            className='w-[25%] block py-3 text-[#7b7b7b] focus:outline-none rounded-lg border-[#e9e9e9] border-2'
                            aria-label=".form-select-lg"
                            id='citi2'>
                            <option value=''>
                                Chọn tỉnh thành
                            </option>
                        </select>
                        {
                            errors.city &&
                            <p className='italic mt-14 text-red-600 absolute left-[5%]'>
                                Required value
                            </p>
                        }

                        <select
                            {...register('district', { required: true })}
                            className='w-[25%] block py-3 text-[#7d7b7b] focus:outline-none  rounded-lg border-[#e9e9e9] border-2'
                            aria-label=".form-select-lg"
                            id='district2'>
                            <option value=''>
                                Chọn quận huyện
                            </option>
                        </select>
                        {
                            errors.district &&
                            <p className='italic mobile:hidden tablet:block mt-14 text-red-600 absolute left-[38%]'>
                                Required value
                            </p>
                        }

                        <select
                            {...register('ward', { required: true })}
                            className='w-[25%] block py-3 text-[#7b7b7b] focus:outline-none rounded-lg border-[#e9e9e9] border-2'
                            aria-label=".form-select-lg"
                            id='ward2'>
                            <option value=''>
                                Chọn phường xã
                            </option>
                        </select>
                        {
                            errors.ward &&
                            <p className='italic mobile:hidden tablet:block mt-14 text-red-600 absolute left-[72%]'>
                                Required value
                            </p>
                        }
                    </div>

                    <div className='mt-8'>
                        <div>
                            <input
                                {...register('adress', { required: true })}
                                name='adress'
                                className='adress w-[90%] focus:outline-none border-[#e9e9e9] border-[1px] rounded-lg p-2 py-3'
                                placeholder='Địa chỉ(số nhà,tên tòa nhà,tên đường,tên khu vực'>
                            </input>
                        </div>
                        {
                            errors.adress &&
                            <p className='italic text-red-600 absolute mobile:left-[10%] tablet:left-[17%] laptop:left-[6%]'>
                                Required value
                            </p>
                        }
                    </div>
                    <div className='mt-8'>
                        <select
                            {...register('older', { required: true })}
                            name='older'
                            className="oder form-select text-[#868585] py-3 rounded-lg w-[90%] border-2 border-[#e9e9e9] focus:outline-none"
                            aria-label="Default select example">
                            <option value=''>Số đơn trung bình mỗi ngày</option>
                            <option value="Dưới 30 đơn/ngày">Dưới 30 đơn/ngày</option>
                            <option value="Từ 30-150 đơn/ngày">Từ 30-150 đơn/ngày</option>
                            <option value="Trên 150 đơn/ngày">Trên 150 đơn/ngày</option>
                        </select>
                        {
                            errors.older &&
                            <p className='italic text-red-600 absolute mobile:left-[10%] tablet:left-[17%] laptop:left-[6%]'>
                                Required value
                            </p>
                        }

                    </div>

                    <div className='mt-4'>
                        <button
                            type='submit'
                            className=
                            'border-[1px] hover:border-[1px] hover:border-primary border-primary mt-8 p-3 py-3 z-[1] rounded-xl location tablet:w-[50%] text-white font-semibold hover:text-primary'>
                            ĐĂNNG KÝ NHẬN TƯ VẤN
                        </button>
                    </div>

                </form>
            </div>
            <div className='col-span-1 mobile:mt-10 laptop:mt-0'>
                <div className=
                    'fullName w-full border-2 h-full rounded-[5rem] shadow-xl bg-white inset-y-0 left-[48%] text-center pb-14'>
                    <div className=
                        'bg-[#00467f] laptop:h-[74px] text-center text-white rounded-t-[5rem] font-bold'>
                        <p
                            className='text-5xl mobile:pb-4 laptop:pb-0 pt-8'>
                            BẠN CÓ TÀI KHOẢN GHN ?
                        </p>
                    </div>
                    <div className='mt-28'>
                        <img
                            className='w-[370px] h-[238px] m-auto'
                            src="//theme.hstatic.net/200000472237/1000829412/14/bg-support-chuyenphat.jpg?v=502">
                        </img>
                    </div>
                    <div className='mt-4'>
                        <a href='https://sso.ghn.vn/v2/ssoLogin?app=import&returnUrl=https://khachhang.ghn.vn/sso-login?token='>
                            <button
                                className=
                                'border-[1px] hover:border-[1px] !bg-[#00467f] hover:border-[#00467f] border-[#00467f] mt-8 p-3 py-3 z-[1] rounded-xl location tablet:w-[50%] text-white font-semibold hover:text-[#00467f]'>
                                ĐĂNG KÝ NHẬN TƯ VẤN
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
