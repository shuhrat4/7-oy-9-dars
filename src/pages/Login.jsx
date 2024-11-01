import { Button } from 'antd'
import React from 'react'

function Login() {
  return (
    <form className='w-[500px] space-y-5 mx-auto mt-5 bg-slate-400 p-5 flex flex-col rounded-mg'>
        <label className='w-[100%]'>
           <input className='p-3 rounded-md w-full outline-none' type="text" placeholder='Enter your Email' />
        </label>
        <label className='w-[100%]'>
           <input className='p-3 rounded-md w-full outline-none' type="text" placeholder='Enter your Email' />
        </label>
        <label className='w-[100%]'>
           <input className='p-3 rounded-md w-full outline-none' type="text" placeholder='Enter your Email' />
        </label>
        <Button size='large' type='primary'>Login</Button>
    </form>
  )
}

export default Login