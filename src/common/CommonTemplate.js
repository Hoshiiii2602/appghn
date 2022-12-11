import React from 'react'
import Footer from '../component/footer/Footer'
import Header from '../component/headerComponent/Header'
import RoutesPage from './route-page/RoutesPage'


export default function CommonTemplate() {
    return (
        <div className='container'>
            <Header />
            <RoutesPage />
            <Footer />
        </div>
    )
}
