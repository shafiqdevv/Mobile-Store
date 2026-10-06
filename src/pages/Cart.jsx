import { useState } from "react";
function Cart({setCountBuy}){
    const [cart, setCart] = useState(
        JSON.parse(localStorage.getItem('cart')) || []
    );
    setCountBuy(cart.length);
    function removeProduct(id){
        const updateCart = cart.filter(product => product.id !== id);
        setCart(updateCart);
        localStorage.setItem('cart', JSON.stringify(updateCart))
    }
    return(
        <div className="min-h-screen flex flex-col items-center pt-10">
            <h1 className="text-3xl">{cart.length} Product in your Shoping Cart</h1>
            <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                {
                    cart.map(product => (
                        <div key={product.id} className="p-5 shadow-lg">
                            <img src={product.img} alt="" className="w-full h-30 object-cover rounded-lg"/>
                            <h2 className="font-bold mt-4">{product.name}</h2>
                            <p className="mt-2">${product.price}</p>
                            <button onClick={() => removeProduct(product.id)} className="mt-5 px-5 py-1 bg-red-500 text-white rounded-lg">Remove</button>
                        </div>
                    ))
                }
            </div>
            </div>
        </div>
    )
}
export default Cart;