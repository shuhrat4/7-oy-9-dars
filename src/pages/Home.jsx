import React from 'react'
import CustomTable from '../components/CustomTable'
import axios from 'axios'
import { EditFilled, MoreOutlined } from '@ant-design/icons'
import { useQuery } from '@tanstack/react-query'

function Home() {
  const HTTP = import.meta.env.VITE_API

  function getAllStudents() {
    return axios.get(`${HTTP}/students`).then(res => (
      res.data.map((item, index) => {
        item.key = index + 1
        item.action = (
          <div className='flex items-center space-x-5'>
            <MoreOutlined className='cursor-pointer' />
            <EditFilled className='cursor-pointer' />
          </div>
        )
        return item
      })
    ))
  }
 
  const { data: studentsData = [] } = useQuery({
    queryKey: ["students"],  // 'qureKey' o'rniga 'queryKey' bo'lishi kerak
    queryFn: getAllStudents
  })

  console.log(studentsData);

  return (
    <div className='p-5'>
      <CustomTable data={studentsData} />
    </div>
  )
}

export default Home
