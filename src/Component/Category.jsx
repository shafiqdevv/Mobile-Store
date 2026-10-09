import { motion } from "motion/react";
const categorys = [
  {
    card: "py-10 pl-7 duration-300 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-2xl relative h-[250px] flex items-end",
    h1: "Earpoad",
    id: 1,
    imageCSS: 'left-18 top-3 w-37',
    image: 'earpoadHome2.png',
    navlink: 'earpoad'
  },
  {
    card: "py-10 pl-7 bg-gradient-to-br from-[#fdc62e] to-[#fdc62e]/90 text-white rounded-2xl relative h-[250px] flex items-end",
    h1: "Watch",
    id: 2,
    imageCSS: 'top-7 left-20 w-27',
    image: 'watchHome7.png',
    navlink: 'watch'
  },
  {
    card: "col-span-2 py-10 pl-7 bg-gradient-to-br from-[#f42c37] to-[#f42c37]/90 text-white rounded-2xl relative h-[250px] flex items-end",
    h1: "Heaphone",
    id: 3,
    imageCSS: 'left-48 w-37 top-3',
    image: 'headphoneHome5.png',
    navlink: 'headphone'
  },
  {
    card: "col-span-2 py-10 pl-7 bg-gradient-to-br from-gray-400 to-gray-200 text-white rounded-2xl relative h-[250px] flex items-end",
    h1: "Console",
    id: 4,
    imageCSS: 'left-50 top-8 w-50',
    image: 'console2.png',
    navlink: 'console'
  },
  {
    card: "py-10 pl-7 bg-gradient-to-br from-[#2dcc6f] to-[#2dcc6f]/90 text-white rounded-2xl relative h-[250px] flex items-end",
    h1: "Camera",
    id: 5,
    imageCSS: 'left-18 top-4 w-30',
    image: 'cameraHome.png',
    navlink: 'camera'
  },
  {
    card: "py-10 pl-7 bg-gradient-to-br from-[#1376f4]/100 to-[#1376f4]/80 text-white rounded-2xl relative h-[250px] flex items-end",
    h1: "Speaker",
    id: 6,
    imageCSS: 'left-17 top-1 w-30',
    image: 'speakersHome4.png',
    navlink: 'speaker'
  },
];
function Category({setCategory}) {
  return (
    <div id="category" className="px-30 py-10">
      <div className="container">
        <div className="grid grid-cols-1 ms:grid-cols-2 md:grid-cols-4 lg:grid-cils-3 gap-4">
          {categorys.map((category) => (
            <motion.div
              initial={{opacity: 0, y: 50}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.7, ease: 'easeOut'}}
            key={category.id} className={`${category.card}`}>
              <div>
                <div>
                  <p className="mb-[2px] text-gray-200">Enjoy</p>
                  <h2 className="text-2xl font-semibold mb-[2px]">With</h2>
                  <h1 className="text-4xl xl:text-5xl font-bold opacity-50 mb-2">{category.h1}</h1>
                  <a onClick={() => setCategory(category.navlink)} href="#productsList" className="px-6 py-1 hover:scale-105 rounded-full shadow-xl text-black cursor-pointer bg-white duration-200 active:scale-100">Browse</a>
                </div>
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