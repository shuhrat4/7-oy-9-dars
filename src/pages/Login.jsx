import { Button } from 'antd';
import { useFormik } from 'formik';
import React from 'react';
import { LoginSchema } from '../validation/loginSchema';
import { useNavigate } from 'react-router-dom';

function Login() {
   const navigate = useNavigate()
   const { values, errors, handleBlur, handleChange, handleSubmit, touched } = useFormik({
      initialValues: {
         username: "222",
         userEmail: "login@gmail.com",
         password: "22222222"
      },
      validationSchema: LoginSchema,
      onSubmit: () => {
      navigate("/Home")
      }
   });

   return (
      <form onSubmit={handleSubmit} className='w-[500px] space-y-5 mx-auto mt-5 bg-slate-400 p-5 flex flex-col rounded-md'>
         <label className='w-[100%]'>
            <input
               value={values.username}
               onChange={handleChange}
               onBlur={handleBlur}
               id='username'
               name='username'
               className={`${errors.username && touched.username ? "border-red-500 placeholder:text-red-500" : ""} p-3 border-[1px] rounded-md w-full outline-none`}
               type="text"
               placeholder='Enter your name'
            />
            {touched.username && errors.username ? <span className='text-red-500'>{errors.username}</span> : ""}
         </label>
         <label className='w-[100%]'>
            <input
               value={values.userEmail}
               onChange={handleChange}
               onBlur={handleBlur}
               id='userEmail'
               name='userEmail'
               className={`${errors.userEmail && touched.userEmail ? "border-red-500 placeholder:text-red-500" : ""} p-3 border-[1px] rounded-md w-full outline-none`}
               type="email"
               placeholder='Enter your Email'
            />
            {touched.userEmail && errors.userEmail ? <span className='text-red-500'>{errors.userEmail}</span> : ""}
         </label>
         <label className='w-[100%]'>
            <input
               value={values.password}
               onChange={handleChange}
               onBlur={handleBlur}
               id='password'
               name='password'
               className={`${errors.password && touched.password ? "border-red-500 placeholder:text-red-500" : ""} p-3 border-[1px] rounded-md w-full outline-none`}
               type="password"
               placeholder='Enter your password'
            />
            {touched.password && errors.password ? <span className='text-red-500'>{errors.password}</span> : ""}
         </label>
         <Button size='large' type='primary' htmlType='submit'>Login</Button>
      </form>
   );
}
export default Login;
