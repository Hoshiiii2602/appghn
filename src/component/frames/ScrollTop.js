import { useState } from "react";
import { FaArrowCircleUp } from 'react-icons/fa'





function ScrollTop() {
    const [visible, setVisible] = useState(false)
    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop
        if (scrolled > 300) {
            setVisible(true)
        } else if (scrolled <= 300) {
            setVisible(false)
        }
    }
    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    window.addEventListener('scroll', toggleVisible)



    return (
        <div className="fixed w-full left-[96%] bottom-[40px] h-[20px] z-[11] cursor-pointer text-primary">
            <FaArrowCircleUp onClick={scrollTop}
                style={{ display: visible ? 'inline' : 'none',width:'30px',height:'30px' }} />
        </div>
    )
}


export default ScrollTop