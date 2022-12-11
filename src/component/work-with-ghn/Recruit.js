import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import './css/recruit.css'
import InformationRecruit from './InformationRecruit';
import QuickWorkContact from './QuickWorkContact';
import SearchWork from './SearchWork';

export default function Recruit() {
    const Location = useSelector(state => state.city.initValue.all)

    useEffect(() => {
        const city = document.getElementById('city')

        function renderCity(data) {
            for (let x of data) {
                city.options[city.options.length] = new Option(x.Name, x.Id)
            }
        }
        renderCity(Location)
    }, [Location])
    return (
        <div className='laptop:mt-40 mobile:mt-56 bg-[#fff] mb-20'>
           <SearchWork />
            <div className='mt-32 laptop:flex flex-auto relative'>
                <InformationRecruit />
                <QuickWorkContact />
            </div>
        </div>
    )
}
