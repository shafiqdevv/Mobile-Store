import { useState } from "react";
import { BiLeftArrowAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
function addForm(){
    const navigate = useNavigate();
    const [product, setProduct] = useState({
        name: '',
        price: '',
        category: '',
        image: ''
    });
    function handleChange(e){
        const {name, value} = e.target;
        setProduct((prev) => ({
            ...prev, [name]: value
        }))
    }
    function handleSubmit(e){
        e.preventDefault();
        const savedProducts = JSON.parse(localStorage.getItem('products')) || [];
        const newProduct = {
            id:Date.now(),
            name: product.name,
            price: product.price,
            category: product.category,
            image: product.image
        };
        const updateProducts = [...savedProducts, newProduct];
        localStorage.setItem('products', JSON.stringify(updateProducts));
        setProduct({
            name: '',
            price: '',
            category: '',
            image: ''
        });
        navigate('/')
    }
    return(
        <div className="min-h-screen flex flex-col items-center justify-center gap-5">
            <BiLeftArrowAlt onClick={() => navigate(-1)} size={30} strokeWidth={1.2} className="cursor-pointer border rounded-full active:scale-97"/>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 items-center p-5 rounded-lg shadow-[0_0_10px_0.1px] bg-white">
                <h1 className="font-bold text-2xl">Add Form</h1>
                <div className="flex flex-col gap-5 items-center">
                    <input type="text" name="name" placeholder="Enter product name" value={product.name} onChange={handleChange} required        className="bg-white border-2 rounded-lg px-2 py-1"/>
                    <input type="number" name="price" placeholder="Enter product price" value={product.price} onChange={handleChange} required   className="bg-white border-2 rounded-lg px-2 py-1"/>
                    <input type="text" name="image" placeholder="Enter product image src" value={product.image} onChange={handleChange} required className="bg-white border-2 rounded-lg px-2 py-1"/>
                    <select name="category" value={product.category} onChange={handleChange} required className="border-2 rounded-lg w-55 py-1">
                        <option value="earpoad">Earpoad</option>
                        <option value="watch">Watch</option>
                        <option value="headphone">Headphone</option>
                        <option value="camera">Camera</option>
                        <option value="speaker">Speaker</option>
                        <option value="console">Console</option>
                    </select>
                    <button className="border-1 bg-black text-white active:scale-98 duration-300 px-22 shadow-xl py-1 cursor-pointer rounded-full">Add</button>
                </div>
            </form>
        </div>
    )
}
export default addForm;