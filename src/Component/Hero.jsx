import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { div } from "motion/react-client";
import { motion } from "motion/react";
const sliders = [
  {
    title1: 'JBL',
    title2: 'HEADPHONE',
    image: 'headphoneHome2.png',
    bg: '#b82259',
    iamgeCSS: 'w-60 absolute left-160 top-[-250px]'
  },
  {
    title1: 'XBOX',
    title2: 'CONSOLE',
    image: 'consoleHome.png',
    bg: '#007094',
    iamgeCSS: 'w-80 absolute left-140 top-[-250px]'
  },
  {
    title1: 'APPLE',
    title2: 'SMARTWATCH',
    image: 'wacthHome4.png',
    bg: '#07ba51',
    iamgeCSS: 'w-60 absolute left-160 top-[-230px]'
  },
  {
    title1: 'SONOS',
    title2: 'SPEAKERS',
    image: 'speakersHome1.png',
    bg: '#007094',
    iamgeCSS: 'w-60 absolute left-160 top-[-210px]'
  },
  {
    title1: 'APPLE',
    title2: 'EARPOAD',
    image: 'earpoadHome1.png',
    bg: '#ffee00',
    iamgeCSS: 'w-60 absolute left-150 top-[-250px]'
  },
  {
    title1: 'SONY',
    title2: 'CAMERA',
    image: 'cameraHome3.png',
    bg: '#ffee00',
    iamgeCSS: 'w-60 absolute left-150 top-[-160px]'
  }
]
function Hero({ night }) {
  return (
      <div className="px-10">
        <Swiper
      modules={[Navigation, Pagination, Autoplay]} navigation pagination={{ clickable: true }} loop={true} speed={500}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }} className={`bg-gradient-to-r h-100 mx-8 rounded-xl py-8 ${night ? "from-gray-900 to-gray-800 transition duraion-700" : "from-gray-300/80 to-gray-100 transition duraion-700"}`}
      >
      {
        sliders.map(slider => (
        <SwiperSlide>
          <section className={`min-w-full h-90 p-3 mt-10 px-10 snap-center`}>
            <motion.p
              initial={{
                  opacity:0,
                  scale: 0
                }}
                animate={{
                  opacity: 1,
                  scale:1
                }}
                transition={{
                  duration: 1
                }}
            className="font-bold text-xl">Original</motion.p>
            <motion.h2
              initial={{
                  opacity:0,
                  scale: 0
                }}
                animate={{
                  opacity: 1,
                  scale:1
                }}
                transition={{
                  duration: 1
                }}
            className="font-bold text-5xl">{slider.title1}</motion.h2>
            <motion.h1 
              initial={{
                  // y:100,
                  opacity:0,
                  x:200
                }}
                animate={{
                  // y:0,
                  opacity: 1,
                  x:0
                }}
                transition={{
                  duration: 1.5
                }}
            className={`text-9xl font-bold ${night ? "text-gray-800" : "text-gray-100"} transition select-none`}>{slider.title2}</motion.h1>
            <div className="relative">
              <motion.img
                initial={{
                  opacity:0,
                  scale: 0
                }}
                animate={{
                  opacity: 1,
                  scale:1
                }}
                transition={{
                  duration: 1
                }}
              src={`./${slider.image}`} className={slider.iamgeCSS}/>
            </div>
            <button className="bg-[#f70505] text-sm rounded-2xl px-7 py-1 text-white">Shop By Category</button>
          </section>
        </SwiperSlide>
        ))
      }
    </Swiper>
      </div>
  );
}
export default Hero;