import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Contact from '../../component/contact-ghn/Contact'
import Content from '../../component/content/Content'
import Notification from '../../component/frames/Notification'
import GhnEpress from '../../component/ghn-express/GhnEpress'
import ViewDetail from '../../component/ghn-express/register/price/price-view-detail/ViewDetail'
import GhnFullfilment from '../../component/ghn-fullfilment/GhnFullfilment'
import Technolgy from '../../component/technolgy-ghn/Technolgy'
import InformationGhn from '../../component/ve-ghn/InformationGhn'
import BlockOffiiceWork from '../../component/work-with-ghn/block-work/BlockOffiiceWork'
import HcmWork from '../../component/work-with-ghn/block-work/HcmWork'
import Recruit from '../../component/work-with-ghn/Recruit'
import CastGhn from '../../component/xu-ghn/CastGhn'

export default function RoutesPage() {
    return (
        <Routes>
            <Route path='/price/view-detail' element={<ViewDetail />} />
            <Route path='/pages/block/office' element={<BlockOffiiceWork />} />
            <Route path='/pages/block/detail-hcm-ghn' element={<HcmWork />} />
            <Route path='/pages/ve-ghn' element={<InformationGhn />} />
            <Route path='/pages/work-ghn' element={<Recruit />} />
            <Route path='/pages/contact-ghn' element={<Contact />} />
            <Route path='/pages/xu-ghn' element={<CastGhn />} />
            <Route path='/pages/table-price' element={<ViewDetail />} />
            <Route path='/pages/technolgy-ghn' element={<Technolgy />} />
            <Route path='/pages/notification' element={<Notification />} />
            <Route path='ghn-fullfilment' element={<GhnFullfilment />} />
            <Route path='ghn-express' element={<GhnEpress />} />
            <Route path='/' element={<Content />} />
        </Routes>
    )
}
