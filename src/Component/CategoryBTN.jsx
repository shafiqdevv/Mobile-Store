import { motion } from "motion/react";
import { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { NavLink } from "react-router-dom";
const categoryList = ["all","earpoad", "headphone", "console", "camera", "speaker",""];
function CategoryBTN({setCategory, night}) {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  function handleMouseEnter(event) {
    const { offsetLeft, offsetWidth } = event.currentTarget;

    setPosition({
      left: offsetLeft,
      width: offsetWidth,
      opacity: 1,
    });
  }

  return (
    <div className="py-2">
      <div
        onMouseLeave={() =>
          setPosition((prev) => ({ ...prev, opacity: 0 }))
        }
        className={`relative mx-auto flex md:flex w-fit rounded-full border- border-black ${night ? 'bg-white' : 'bg-gray-900'} p-1`}
      >
        {categoryList.map((category) => (
          <button
            onClick={() => setCategory(category)}
            key={category}
            onMouseEnter={handleMouseEnter}
            className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-1 md:text-base"
          >
            {category}
          </button>
        ))}
        <NavLink  to={'/addForm'} className={`${'text-white'} ml-2 absolute right-[9px] top-[5px] cursor-pointer flex`}>
            <IoIosAddCircle size={30} className="z-11 text-white mix-blend-difference"/> 
        </NavLink>
        <Cursor position={position} night={night}/>
      </div>
    </div>
  );
}

const Cursor = ({ position, night }) => {
  return (
    <motion.div
      animate={position}
      transition={{ type: "spring", stiffness: 500, damping: 40 }}
      className={`absolute top-1 bottom-1 z-0 rounded-full ${night ? 'bg-gray-900' : 'bg-white'}`} 
    />
  );
};

export default CategoryBTN;