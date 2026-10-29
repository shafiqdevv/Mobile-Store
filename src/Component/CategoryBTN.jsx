
import { motion } from "motion/react";
import { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { NavLink } from "react-router-dom";

const categoryList = [
  "all",
  "earpoad",
  "headphone",
  "console",
  "camera",
  "speaker",
  "",
];

function CategoryBTN({ setCategory, night }) {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const [mobileCategory, setMobileCategory] = useState("all");

  function handleMouseEnter(event) {
    const { offsetLeft, offsetWidth } = event.currentTarget;

    setPosition({
      left: offsetLeft,
      width: offsetWidth,
      opacity: 1,
    });
  }

  function handleMobileCategory(event) {
    const category = event.target.value;
    setMobileCategory(category);
    setCategory(category);
  }

  return (
    <div className="py-2">
      <div
        onMouseLeave={() =>
          setPosition((prev) => ({ ...prev, opacity: 0 }))
        }
        className={`relative mx-auto flex w-fit items-center rounded-full
          border-black p-1
          ${night ? "bg-white" : "bg-gray-900"}`}
      >
        {/* Mobile: Simple category dropdown */}
        <select
          value={mobileCategory}
          onChange={handleMobileCategory}
          aria-label="Select category"
          className={`w-32 rounded-full px-3 py-2 text-xs
            capitalize outline-none md:hidden
            ${
              night
                ? "bg-white text-black"
                : "bg-gray-900 text-white"
            }`}
        >
          {categoryList
            .filter((category) => category !== "")
            .map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
        </select>

        {/* Desktop: Original animated category buttons */}
        <div className="hidden items-center md:flex">
          {categoryList.map((category, index) => (
            <button
              onClick={() => setCategory(category)}
              key={`${category}-${index}`}
              onMouseEnter={handleMouseEnter}
              className="relative z-10 block cursor-pointer
                px-3 py-1.5 text-xs uppercase
                text-white mix-blend-difference
                md:px-5 md:py-1 md:text-base"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Add Product */}
        <NavLink
          to="/addForm"
          aria-label="Add product"
          className={`flex items-center justify-center z-2 cursor-pointer ml-2 absolute right-[4px] top-[5px] h-8 w-10 rounded-full ${night ? 'hover:bg-gray-900' : "hover:bg-white"}`}
        >
          <IoIosAddCircle
            size={30}
            className={`"z-10 ${night ? 'text-gray-900' : "text-white"} ${night ? 'hover:text-white' : "hover:text-gray-900"}`}
          />
        </NavLink>

        {/* Original animated cursor */}
        <Cursor position={position} night={night} />
      </div>
    </div>
  );
}

const Cursor = ({ position, night }) => {
  return (
    <motion.div
      animate={position}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 40,
      }}
      className={`pointer-events-none absolute bottom-1 top-1
        z-0 rounded-full
        ${night ? "bg-gray-900" : "bg-white"}`}
    />
  );
};

export default CategoryBTN;



// import { motion } from "motion/react";
// import { useState } from "react";
// import { IoIosAddCircle } from "react-icons/io";
// import { NavLink } from "react-router-dom";
// const categoryList = ["all","earpoad", "headphone", "console", "camera", "speaker",""];
// function CategoryBTN({setCategory, night}) {
//   const [position, setPosition] = useState({
//     left: 0,
//     width: 0,
//     opacity: 0,
//   });

//   function handleMouseEnter(event) {
//     const { offsetLeft, offsetWidth } = event.currentTarget;

//     setPosition({
//       left: offsetLeft,
//       width: offsetWidth,
//       opacity: 1,
//     });
//   }

//   return (
//     <div className="py-2">
//       <div
//         onMouseLeave={() =>
//           setPosition((prev) => ({ ...prev, opacity: 0 }))
//         }
//         className={`relative mx-auto flex md:flex w-fit rounded-full border- border-black ${night ? 'bg-white' : 'bg-gray-900'} p-1`}
//       >
//         {categoryList.map((category) => (
//           <button
//             onClick={() => setCategory(category)}
//             key={category}
//             onMouseEnter={handleMouseEnter}
//             className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-1 md:text-base"
//           >
//             {category}
//           </button>
//         ))}
//         <NavLink  to={'/addForm'} className={`${'text-white'} ml-2 absolute right-[9px] top-[5px] cursor-pointer flex`}>
//             <IoIosAddCircle size={30} className="z-11 text-white mix-blend-difference"/> 
//         </NavLink>
//         <Cursor position={position} night={night}/>
//       </div>
//     </div>
//   );
// }

// const Cursor = ({ position, night }) => {
//   return (
//     <motion.div
//       animate={position}
//       transition={{ type: "spring", stiffness: 500, damping: 40 }}
//       className={`absolute top-1 bottom-1 z-0 rounded-full ${night ? 'bg-gray-900' : 'bg-white'}`} 
//     />
//   );
// };

// export default CategoryBTN;

// jdut responsive it