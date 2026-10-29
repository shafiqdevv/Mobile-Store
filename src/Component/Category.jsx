import { motion } from "motion/react";
const categorys = [
  {
    card: "py-7 px-4 md:py-10 md:pl-7 duration-300 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-2xl relative flex items-end",
    h1: "Earpoad",
    id: 1,
    imageCSS: 'w-22 top-1 left-11 md:w-33 md:left-13 md:top-2 lg:left-18 lg:top-3 lg:w-37',
    image: 'earpoadHome2.png',
    navlink: 'earpoad'
  },
  {
    card: "py-7 px-4 md:py-10 md:pl-7 bg-gradient-to-br from-[#fdc62e] to-[#fdc62e]/90 text-white rounded-2xl relative flex items-end",
    h1: "Watch",
    id: 2,
    imageCSS: 'w-15 top-5 left-14 md:w-22 md:top-8 md:left-18 lg:top-7 lg:left-20 lg:w-27',
    image: 'watchHome7.png',
    navlink: 'watch'
  },
  {
    card: "py-7 px-4 md:col-span-2 md:py-10 md:pl-7 bg-gradient-to-br from-[#f42c37] to-[#f42c37]/90 text-white rounded-2xl relative flex items-end",
    h1: "Heaphone",
    id: 3,
    imageCSS: 'w-18 top-1 left-13 md:left-48 md:w-32 md:top-1',
    image: 'headphoneHome5.png',
    navlink: 'headphone'
  },
  {
    card: "py-7 px-4 md:col-span-2 md:py-10 md:pl-7 bg-gradient-to-br from-gray-400 to-gray-200 text-white rounded-2xl relative flex items-end",
    h1: "Console",
    id: 4,
    imageCSS: 'w-27 top-1 left-10 md:left-50 md:top-2 md:w-50',
    image: 'console2.png',
    navlink: 'console'
  },
  {
    card: "py-7 px-4 md:py-10 md:pl-7 bg-gradient-to-br from-[#2dcc6f] to-[#2dcc6f]/90 text-white rounded-2xl relative flex items-end",
    h1: "Camera",
    id: 5,
    imageCSS: 'w-23 top-2 left-8 md:w-27 md:top-7 md:left-13 lg:left-18 lg:top-4 lg:w-30',
    image: 'cameraHome.png',
    navlink: 'camera'
  },
  {
    card: "py-7 px-4 md:py-10 md:pl-7 bg-gradient-to-br from-[#1376f4]/100 to-[#1376f4]/80 text-white rounded-2xl relative flex items-end",
    h1: "Speaker",
    id: 6,
    imageCSS: 'w-21 top-2 left-9 md:w-27 md:left-14 md:top-5 lg:left-17 lg:top-1 lg:w-30',
    image: 'speakersHome4.png',
    navlink: 'speaker'
  },
];
function Category({setCategory}) {
  return (
    <div id="category" className="p-5 md:px-30 md:py-10">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 grid-flow-row-dense">
          {categorys.map((category) => (
            <motion.div
              initial={{opacity: 0, y: 50}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.7, ease: 'easeOut'}}
            key={category.id} className={`${category.card}`}>
                <div>
                  <p className="mb-[2px] text-gray-200">Enjoy</p>
                  <h2 className="text-2xl font-semibold mb-[2px]">With</h2>
                  <h1 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold opacity-50 mb-2">{category.h1}</h1>
                  <a onClick={() => setCategory(category.navlink)} href="#productsList" className="px-2 text-xs md:text-sm md:px-6 py-1 hover:scale-105 rounded-full shadow-xl text-black cursor-pointer bg-white duration-200 active:scale-105">Browse</a>
                </div>

              <img src={`./${category.image}`} alt="" className={`${category.imageCSS} absolute`}/>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Category;
// #7f8280