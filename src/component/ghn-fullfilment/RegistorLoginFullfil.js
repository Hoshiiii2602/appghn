import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'

export default function RegistorLogin() {

  const Location = useSelector((state => state.city.initValue.all))

  //RENDER CITY
  useEffect(() => {
    const citis = document.getElementById('citi')
    function renderCiti(data) {
      for (let x of data) {
        citis.options[citis.options.length] = new Option(x.Name, x.Id)
      }
    }
    renderCiti(Location)
  }, [Location])


  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  return (
    <div className='mt-36 laptop:grid grid-cols-2 gap-8 text-center pb-32'>


      <div className='col-span-1'>


        <div
          className=
          'fullName w-full border-2 h-full rounded-[5rem] shadow-xl bg-white inset-y-0 left-[48%] text-center pb-14'>

          <div className='bg-[#e45f20] h-[74px] text-center text-white rounded-t-[5rem] font-bold'>
            <p className=' text-5xl pt-8'>
              ĐĂNG KÝ NGAY
            </p>
          </div>

          <form onSubmit={handleSubmit(data => console.log(data))}>

            <div className='mt-10 relative'>


              <input
                {...register('fullName', { required: true })}
                name='fullName'
                type='text'
                className='w-[90%] focus:outline-none border-[#e9e9e9] border-[1px] rounded-lg p-2 py-3'
                placeholder='Họ và tên'>
              </input>

            </div>

            {
              errors.fullName &&
              <p className='italic text-red-600 absolute mobile:left-[10%] tablet:left-[17%] left-[6%]'>
                Required value
              </p>
            }


            <div className=' mt-4 relative'>
              <div
                className='flex w-[90%] mt-8 m-auto'>


                <input
                  {...register('email', { required: true })}
                  name='email'
                  type='email'
                  className=
                  'email w-full focus:outline-none checkEmail border-[#e9e9e9] border-[1px] rounded-lg p-2 py-3'
                  placeholder='Email'>
                </input>

                {
                  errors.email &&
                  <p className='italic text-red-600 absolute mt-14'>
                    Required value
                  </p>
                }
              </div>

              <div className='flex w-[90%] mt-8 m-auto'>


                <input
                  {...register('phone', { required: true })}
                  name='phone'
                  type='text'
                  className=
                  'phone w-full focus:outline-none border-[#e9e9e9] border-[1px] rounded-lg p-2 py-3'
                  placeholder='Số điện thoại'>
                </input>

                {
                  errors.phone &&
                  <p className='italic text-red-600 absolute mt-14'>
                    Required value
                  </p>
                }
              </div>
            </div>

            <div className='mt-8 w-[90%] m-auto'>


              <select
                {...register('city', { required: true })}
                className='w-full py-3 text-[#7b7b7b] focus:outline-none rounded-lg border-[#e9e9e9] border-2'
                aria-label=".form-select-lg"
                name='city'
                id='citi'>
                <option value=''>
                  Chọn tỉnh thành
                </option>
              </select>

            </div>

            {
              errors.city &&
              <p className='italic text-red-600 mobile:left-[10%] tablet:left-[17%] absolute left-[6%]'>
                Required value
              </p>
            }


            <div
              className='mt-8 m-auto w-[90%] tablet:ml-12'>


              <textarea
                {...register('body')}
                className='w-full border-[1px] py-10 focus:outline-none rounded-lg'
                id="form-body"
                name="body"
                placeholder="Nội dung cần tư vấn">
              </textarea>


              <p
                className='break-before-auto text-left font-light'>
                (*)Ví dụ: Công ty tôi đang kinh doanh quần áo trên các sàn và tự bán qua facebook. Tôi muốn mở rộng kinh doanh nên cần một bên có thể cung cấp các dịch vụ sau: kho chứa hàng, hệ thống quản lý hàng tồn, nhân viên xuất/nhập hàng. Tôi có khoảng 100 SKU (mỗi SKU khoảng 100 sản phẩm tồn kho), xuất nhập hàng liên tục. Mỗi tháng khoảng 10,000 đơn. Tôi cần tư vấn giá dịch vụ.
              </p>

            </div>

            <div className='mt-4'>


              <button
                type='submit'
                className=
                'border-[1px] hover:border-[1px] hover:border-primary border-primary mt-8 p-3 py-3 z-[1] rounded-xl location tablet:w-[50%] text-white font-semibold hover:text-primary'>
                ĐĂNG KÝ NHẬN TƯ VẤN
              </button>

            </div>

          </form>
        </div>
      </div>
      <div className='col-span-1'>


        <div
          className=
          'fullName w-full border-2 mobile:mt-6 laptop:mt-0 h-full rounded-[5rem] shadow-xl bg-white inset-y-0 left-[48%] text-center pb-14'>

          <div
            className='bg-[#00467f] tablet:h-[74px] text-center mobile:pb-6 tablet:pb-0 text-white rounded-t-[5rem] font-bold'>


            <p className=' text-5xl pt-8'>
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

            <a
              href='https://sso.ghn.vn/v2/ssoLogin?app=import&returnUrl=https://khachhang.ghn.vn/sso-login?token='>


              <button
                className=
                'border-[1px] hover:border-[1px] !bg-[#00467f] hover:border-[#00467f] border-[#00467f] mt-8 p-3 py-3 z-[1] rounded-xl location laptop:w-[50%] text-white font-semibold hover:text-[#00467f]'>
                ĐĂNG KÝ NHẬN TƯ VẤN
              </button>


            </a>

          </div>
        </div>
      </div>
    </div >
  )
}

