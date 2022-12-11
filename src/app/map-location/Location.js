import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dataCity, dataDistricts, dataWards, location } from '../selector/dataCitySlice'


const Location = () => {
    const Location = useSelector(location)
    const dispatch = useDispatch()
    useEffect(() => {
        var citis = document.getElementById("city");
        var districts = document.getElementById("district");
        var wards = document.getElementById("ward");
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
                dispatch(dataCity(this.options[this.selectedIndex].text))
            }
            districts.onchange = function () {
                const result = data.filter(n => n.Id === citis.value)
                if (this.value !== '') {
                    const dataCity = result[0].Districts.filter(n => n.Id === this.value)[0].Wards
                    for (const w of dataCity) {
                        wards.options[wards.options.length] = new Option(w.Name, w.Id)
                    }
                }
                dispatch(dataDistricts(this.options[this.selectedIndex].text))
            }
            wards.onchange = function () {
                dispatch(dataWards(this.options[this.selectedIndex].text))
            }
        }
        //call api
       renderCity(Location)
    }, [Location])



    return (
        <div
            className=
            "container laptop:max-w-xl laptop:ml-32 tablet:mb-10 laptop:mb-0 shadow-2xl border-2">
            <select
                name="city"
                className="mt-10 w-full border-2 h-16 focus:outline-none text-2xl font-light mb-3"
                id="city"
                aria-label=".form-select-lg">
                <option value=''>
                    Chọn tỉnh thành
                </option>
            </select>
            <select
                name="district"
                className="mt-10 w-full border-2 h-16 focus:outline-none text-2xl font-light mb-3"
                id="district"
                aria-label=".form-select-lg">
                <option value=''>
                    Chọn quận huyện
                </option>
            </select>
            <select
                name="ward"
                className="mt-10 w-full border-2 h-16 focus:outline-none text-2xl font-light"
                id="ward"
                aria-label=".form-select-lg">
                <option value=''>
                    Chọn phường xã
                </option>
            </select>
        </div>

    )
}


export default Location
