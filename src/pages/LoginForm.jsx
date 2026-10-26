// import { yupResolver } from "@hookform/resolvers/yup";
// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import RPI from "react-phone-input-2";
// import { motion } from "motion/react";
// const PhoneInput = RPI.default ? RPI.default : RPI;
// import 'react-phone-input-2/lib/style.css'
// import * as yup from 'yup';
// import GoBack from "../Component/GoBack";

// function LoginForm(){
//     const [phone, setPhone] = useState('');
//     const schema = yup.object().shape({
//         name: yup.string().min(3).required(),
//         email: yup.string().email().required(),
//         password: yup.string().min(8).max(15).required(),
//         confirmPassword: yup.string().oneOf([yup.ref('password')]).required()
//     })
//     const {register, handleSubmit} = useForm({resolver: yupResolver(schema)})
//     function onFormSubmit(data){
//         console.log('form is submited');
//         console.log(data)
//     }
//     return(
//         <div className="min-h-screen flex gap-5 flex-col items-center justify-center bg-gray-100">
//         <div className="flex flex-col gap-1 items-center">
//             <GoBack/>
//             <h1 className="font-poppins font-semibold text-4xl">Login</h1>
//         </div>
//         <form onSubmit={handleSubmit(onFormSubmit)} className="flex flex-col items-center gap-3 mb-30">
//             <motion.input
//                 whileFocus={{scale:1.02}}
//                 transition={{ type: 'spring', stiffness: 800, damping: 5}}
//             type="text" placeholder="Name..." {...register('name')} className="border-1 bg-white active:border-2 px-4 shadow-xl py-1 rounded-full"/>
//             <motion.input
//                 whileFocus={{scale:1.02}}
//                 transition={{ type: 'spring', stiffness: 800, damping: 5}}
//             type="text" placeholder="Email..." {...register('email')} className="border-1 bg-white active:border-2 px-4 shadow-xl py-1 rounded-full"/>
//             <PhoneInput
//               country="af"
//               value={phone}
//               onChange={(phone) => setPhone(phone)}
//               inputStyle={{
//                 width: "235px",
//                 height: "36px",
//                 borderRadius: "9999px",
//                 border: "1px solid #000",
//               }}
//               buttonStyle={{
//                 border: "1px solid #000"
//               }}
//             />
//             <motion.input
//                 whileFocus={{scale:1.02}}
//                 transition={{ type: 'spring', stiffness: 800, damping: 5}}
//             type="password" placeholder="Password..." {...register('password')} className="border-1 bg-white active:border-2 px-4 shadow-xl py-1 rounded-full"/>
//             <motion.input 
//                 whileFocus={{scale:1.02}}
//                 transition={{ type: 'spring', stiffness: 800, damping: 5}}
//             type="password" placeholder="Confirm Password..." {...register('confirmPassword')} className="border-1 bg-white active:border-2 px-4 shadow-xl py-1 rounded-full"/>
//             <button className="border-1 bg-black text-white active:scale-98 duration-300 px-22 shadow-xl py-1 cursor-pointer rounded-full">Sign in</button>
//         </form>
//         </div>
//     )
// }
// export default LoginForm;


import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import RPI from "react-phone-input-2";
import { motion } from "motion/react";
import "react-phone-input-2/lib/style.css";
import * as yup from "yup";
import GoBack from "../Component/GoBack";

const PhoneInput = RPI.default ? RPI.default : RPI;

function LoginForm() {
  const [phone, setPhone] = useState("");

  const schema = yup.object().shape({
    name: yup.string().min(3).required(),
    email: yup.string().email().required(),
    password: yup.string().min(8).max(15).required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")])
      .required(),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  function onFormSubmit(data) {
    console.log("Form is submitted");
    console.log({ ...data, phone });
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[url('/bg.jpg')] bg-cover bg-center px-4 py-10">

      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Glass Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full max-w-md rounded-3xl border border-white/40 bg-white/10 px-7 py-8 text-white shadow-2xl backdrop-blur-xl sm:px-10"
      >
        {/* Heading */}
        <div className="mb-8 flex flex-col items-center gap-3">
          <GoBack />

          <h1 className="font-poppins text-4xl font-semibold">
            Login
          </h1>

          <p className="text-center text-sm text-white/80">
            Welcome back! Please enter your details.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onFormSubmit)}
          className="flex flex-col gap-5"
        >
          <motion.input
            whileFocus={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            type="text"
            placeholder="Name..."
            {...register("name")}
            className="w-full rounded-full border border-white/50 bg-white/10 px-5 py-3 text-white outline-none placeholder:text-white/70 focus:border-white focus:bg-white/15"
          />

          <motion.input
            whileFocus={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            type="email"
            placeholder="Email..."
            {...register("email")}
            className="w-full rounded-full border border-white/50 bg-white/10 px-5 py-3 text-white outline-none placeholder:text-white/70 focus:border-white focus:bg-white/15"
          />

          <div className="w-full overflow-hidden rounded-full">
            <PhoneInput
              country="af"
              value={phone}
              onChange={(value) => setPhone(value)}
              inputStyle={{
                width: "100%",
                height: "44px",
                borderRadius: "9999px",
                border: "1px solid rgba(255,255,255,0.5)",
                background: "rgba(255,255,255,0.1)",
                color: "#fff",
              }}
              buttonStyle={{
                border: "1px solid rgba(255,255,255,0.5)",
                background: "rgba(255,255,255,0.1)",
                borderRadius: "9999px 0 0 9999px",
              }}
              dropdownStyle={{
                color: "#111",
              }}
              inputProps={{
                name: "phone",
                autoComplete: "tel",
              }}
            />
          </div>

          <motion.input
            whileFocus={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            type="password"
            placeholder="Password..."
            {...register("password")}
            className="w-full rounded-full border border-white/50 bg-white/10 px-5 py-3 text-white outline-none placeholder:text-white/70 focus:border-white focus:bg-white/15"
          />

          <motion.input
            whileFocus={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            type="password"
            placeholder="Confirm Password..."
            {...register("confirmPassword")}
            className="w-full rounded-full border border-white/50 bg-white/10 px-5 py-3 text-white outline-none placeholder:text-white/70 focus:border-white focus:bg-white/15"
          />

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="mt-2 w-full rounded-full bg-gradient-to-r from-lime-400 to-emerald-500 py-3 font-semibold text-white shadow-lg transition-shadow hover:shadow-emerald-500/30"
          >
            Sign in
          </motion.button>
        </form>

        <p className="mt-7 text-center text-sm text-white/80">
          Already have an account?{" "}
          <a
            href="/login"
            className="font-semibold text-white underline underline-offset-4"
          >
            Login
          </a>
        </p>
      </motion.div>
    </div>
  );
}

export default LoginForm;
