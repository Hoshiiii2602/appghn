import React from 'react'
import ContentContent from './content-content/ContentContent'
import FooterContent from './footer-content/FooterContent'
import SlideFooterContent from './footer-content/SlideFooterContent'
import HeaderContentSlide from './header-content/HeaderContentSlide'
import MapLocation from './map-location/MapLocation'

export default function Content() {
  return (
    <div className='mb-20'>
        <HeaderContentSlide />
        <ContentContent />
        <MapLocation />
        <FooterContent />
        <SlideFooterContent />
    </div>
  )
}
