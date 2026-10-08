import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import RPI from "react-phone-input-2";
import { motion } from "motion/react";
const PhoneInput = RPI.default ? RPI.default : RPI;
import 'react-phone-input-2/lib/style.css'
import * as yup from 'yup';

function LoginForm(){
    const [phone, setPhone] = useState('');
    const schema = yup.object().shape({
        name: yup.string().min(3).required(),
        email: yup.string().email().required(),
        password: yup.string().min(8).max(15).required(),
        confirmPassword: yup.string().oneOf([yup.ref('password')]).required()
    })
    const {register, handleSubmit} = useForm({resolver: yupResolver(schema)})
    function onFormSubmit(data){
        console.log('form is submited');
        console.log(data)
    }
    return(
        <div className="min-h-screen flex gap-5 flex-col items-center justify-center bg-gray-100">
        <h1 className="font-poppins font-semibold text-4xl">Login</h1>
        <form onSubmit={handleSubmit(onFormSubmit)} className="flex flex-col items-center gap-3 mb-30">
            <motion.input
                whileFocus={{scale:1.02}}
                transition={{ type: 'spring', stiffness: 800, damping: 5}}
            type="text" placeholder="Name..." {...register('name')} className="border-1 bg-white active:border-2 px-4 shadow-xl py-1 rounded-full"/>
            <motion.input
                whileFocus={{scale:1.02}}
                transition={{ type: 'spring', stiffness: 800, damping: 5}}
            type="text" placeholder="Email..." {...register('email')} className="border-1 bg-white active:border-2 px-4 shadow-xl py-1 rounded-full"/>
            <PhoneInput
              country="af"
              value={phone}
              onChange={(phone) => setPhone(phone)}
              inputStyle={{
                width: "235px",
                height: "36px",
                borderRadius: "9999px",
                border: "1px solid #000",
              }}
              buttonStyle={{
                border: "1px solid #000"
              }}
            />
            <motion.input
                whileFocus={{scale:1.02}}
                transition={{ type: 'spring', stiffness: 800, damping: 5}}
            type="password" placeholder="Password..." {...register('password')} className="border-1 bg-white active:border-2 px-4 shadow-xl py-1 rounded-full"/>
            <motion.input 
                whileFocus={{scale:1.02}}
                transition={{ type: 'spring', stiffness: 800, damping: 5}}
            type="password" placeholder="Confirm Password..." {...register('confirmPassword')} className="border-1 bg-white active:border-2 px-4 shadow-xl py-1 rounded-full"/>
            <button className="border-1 bg-black text-white active:scale-98 duration-300 px-22 shadow-xl py-1 cursor-pointer rounded-full">Sign in</button>
        </form>
        </div>
    )
}
export default LoginForm;