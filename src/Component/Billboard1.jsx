function Billboard1(){
    return(
        <div className="bg-[#f42c37] rounded-3xl mx-15 my-20 h-60 text-white relative flex justify-between">
            <div className="m-10">
                <p className="text-sm">30% OFF</p>
                <h1 className="font-bold text-5xl">FINE <br /> SMILE</h1>
                <p className="font-thin text-gray-100">10 jan to 28 jan</p>
            </div>
            <div className="m-10">
                <p className="font-bold text-lg">Air Solo Bass</p>
                <h2 className="text-4xl font-bold">Winter Sale</h2>
                <p className="w-70 text-sm font-thind">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus amet</p>
                <button className="cursor-pointer bg-white text-[#f42c37] rounded-full px-4 py-1 mt-3 text-sm">Shop</button>
            </div>
            <img src="billboard (1).png" alt="" className="absolute w-50 top-[-15px] left-80"/>
        </div>
    )
}
export default Billboard1;