import React, { useEffect, useState } from 'react'
import QuickWorkContact from '../QuickWorkContact'
import SearchWork from '../SearchWork'
import { FaRegStickyNote } from "react-icons/fa";
import InformationRecruit from '../InformationRecruit';
import RegistorForm from '../../frames/RegistorForm';
import './modal.css'

export default function HcmWork() {
    const [elementModal, setElementModal] = useState()
    useEffect(() => {
        let modal = document.getElementById('modal')
        setElementModal(modal)
    }, [])
    const handleModal = () => {
        elementModal.classList.remove('hidden')
    }
    const hiddenModal = () => {
        elementModal.classList.add('hidden')
    }
    return (
        <div>
            <SearchWork />
            <div className='mt-20 flex relative'>
                <div className="w-full text-center hidden" id='modal'>


                    <div className='flex'>
                        <RegistorForm data={elementModal} />
                        <div onClick={hiddenModal} className='overflow'></div>
                    </div>


                </div>


                <div className='w-[80%] ml-10 text-2xl text-center font-light'>


                    <h3 className='text-5xl font-bold'>
                        [GHN - HCM] HRBP TECH SPECIALIST
                    </h3>


                    <span className='flex items-center mt-10'>

                        <p className='mr-2'>
                            Ngày đăng: 14/11/2022-
                        </p>

                        <FaRegStickyNote />

                        <a href='/back' className='ml-2 hover:text-primary hover:no-underline'>
                            Khối văn phòng
                        </a>

                    </span>


                    <div className='mt-32 font-bold'>

                        <h3 className='text-3xl text-left'>JOB DESCRIPTION:</h3>

                        <ul className='mt-12 list-disc list-outside ml-14 text-left break-before-auto'>
                            <p className='-ml-14'>
                                1. Talent Acquisition (60%)
                            </p>
                            <li className='mt-4'>
                                Manage end-to-end recruitment process, responsible for search and selection assigned by team leader.
                            </li>
                            <li className='mt-4'>
                                Serve as a business partner with hiring managers to clarify specific hiring needs, develop effective sourcing and recruitment strategies that result in hiring team satisfaction.
                            </li>
                            <li className='mt-4'>
                                Conduct promotion and advertisement activities to ensure that all recruitment requests are handled on time.
                            </li>
                            <li className='mt-4'>
                                Take care of HR operation activities: e.g. issuance of offer letters, on-boarding of new employees, exiting process.
                            </li>
                            <li className='mt-4'>
                                Manage candidates’ database.
                            </li>
                        </ul>


                        <ul className='mt-12 list-disc list-outside ml-14 text-left break-before-auto'>

                            <p className='-ml-14'>2. Talent Development & Employee Relation (40%)</p>

                            <li className='mt-4'>
                                Organize the engagement activities (Tech events; Happy Hours; Birthday,…)
                            </li>
                            <li className='mt-4'>
                                Receive information/inquiries from Staff and assist in handling.
                            </li>
                            <li className='mt-4'>
                                Coordinate with L&D Department to implement training and development programs for Tech team.
                            </li>
                            <li className='mt-4'>
                                Coordinate with L&D, Total Reward Department to implement, setting the KPI/performance assessment for Tech team.
                            </li>
                            <li className='mt-4'>
                                Support HRBP Manager to manage headcount/budget for Tech team.
                            </li>
                            <h3 className='text-3xl my-6'>REQUIREMENT:</h3>
                            <li className='mt-4'>
                                At least 06 months of experience in IT recruiting/HRBP
                            </li>
                            <li className='mt-4'>
                                Strong recruiting skills (creating job description, sourcing and selecting candidates, hunting talents, convincing passive candidates, ...)
                            </li>
                            <li className='mt-4'>
                                General knowledge of the IT industry
                            </li>
                            <li className='mt-4'>
                                Can-do
                                attitude and team spirit</li>
                            <li className='mt-4'>
                                Familiarity with HR System, ATS.
                            </li>
                            <li className='mt-4'>
                                Willing to take more responsibilities;
                            </li>
                            <li className='mt-4'>
                                Willing to take more responsibilities;
                            </li>
                            <li className='mt-4'>
                                Sense of responsibility, result-orientation
                            </li>

                            <h3 className='text-3xl my-6'>
                                BENEFIT:
                            </h3>

                            <li className='mt-10'>
                                13th month salary;
                            </li>
                            <li className='mt-10'>
                                Social insurance and other types of insurance;
                            </li>
                            <li className='mt-10'>
                                Periodic health examination;
                            </li>
                            <li className='mt-10'>
                                Young, dynamic and challenging working environment in e-Logistics industry;
                            </li>
                            <li className='mt-4'>
                                Opportunities for training and learning;
                            </li>
                            <li className='mt-4'>
                                Year-end Party; team-building and travel
                            </li>

                            <h3 className='text-3xl'>SEND CV TO</h3>

                            <li className='mt-4'>
                                Mail : trinhvth@ghn.vn
                            </li>
                            <li className='mt-4'>
                                Hotline : 0352 602 159
                            </li>
                        </ul>


                    </div>


                    <button
                        onClick={() => handleModal()}
                        className='border-[1px] mb-32 hover:border-[1px] hover:border-primary border-primary mt-8 p-3 py-3 z-[1] rounded-xl location w-[30%] text-white font-semibold hover:text-primary'
                    >ĐĂNG KÝ NHẬN ỨNG TUYỂN
                    </button>


                    <InformationRecruit />


                </div>


                <QuickWorkContact />
            </div>


        </div>
    )
}
