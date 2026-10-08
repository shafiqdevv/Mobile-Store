import { useState } from "react";
import { motion } from "motion/react";
function AddForm(){
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [imgSrc, setImgSrc] = useState('');
    function handleSubmit(e){
        e.preventDefault();
        if(name.trim() === 0)return;
        if(price.trim() === 0)return;
    }
    return(
        <div className="min-h-screen justify-center flex flex-col items-center gap-5">
            <h1 className="text-2xl font-bold">Add your new product</h1>
            <motion.form
                initial={{opacity: 0, y: 100}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.7}}
            className="flex flex-col items-center gap-5 justify-center border-2 h-100 p-5 rounded-lg">
                <input onChange={(e) => setName(e.target.value)} type="text" className="border-2 px-3 rounded-lg" placeholder="Enter your product name"/>
                <input onChange={(e) => setPrice(e.target.value)} type="text" className="border-2 px-3 rounded-lg" placeholder="Enter your product price"/>
                <input onChange={(e) => setImgSrc(e.target.value)} type="text" className="border-2 px-3 rounded-lg" placeholder="Enter your product src"/>
                <select className="relative border-2 w-55 px-1 py-1 rounded-lg">
                    <option value="earpoad">Earpoad</option>
                    <option value="watch">Watch</option>
                    <option value="headphone">Headphone</option>
                    <option value="camera">Camera</option>
                    <option value="speaker">Speaker</option>
                    <option value="console">Console</option>
                </select>
                <button className="border-1 bg-black text-white active:scale-98 duration-300 px-22 shadow-xl py-1 cursor-pointer rounded-full">Add</button>
            </motion.form>
        </div>
    )
}
export default AddForm;