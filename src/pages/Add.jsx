import { Button, Input } from 'antd';
import React, { useState } from 'react';

function Add() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState(""); 
  
  const mutttion = useState({
    mutationFn:() => {}
  })

  function handleSubmit(e){

  }


  return (
    <div onSubmit={handleSubmit} className='w-[600px] space-y-5 mx-auto mt-5'>
      <Input value={name} onChange={(e) => setName(e.target.value)} size='large' placeholder='Enter name' allowClear />
      <Input value={surname} onChange={(e) => setSurname(e.target.value)} size='large' placeholder='Enter surname' allowClear />
      <Input value={age} onChange={(e) => setAge(e.target.value)} size='large' placeholder='Enter age' allowClear />
      <Button htmlType='submit' className='w-full' size='large' type='primary'>Submit</Button>
    </div>
  );
}

export default Add;
