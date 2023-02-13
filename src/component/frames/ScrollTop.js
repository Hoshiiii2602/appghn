import { useState } from "react";
import { FaChevronCircleUp } from "react-icons/fa";

function ScrollTop() {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  window.addEventListener("scroll", toggleVisible);

  return (
    <div className="fixed w-full left-[96%] bottom-[40px] h-[20px] z-[11] cursor-pointer text-primary">
      <FaChevronCircleUp
        onClick={scrollTop}
        style={{ display: visible ? "inline" : "none", fontSize: "30px" }}
      />
    </div>
  );
}

export default ScrollTop;
