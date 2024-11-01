import React from 'react'
import CustomTable from '../components/CustomTable'
import axios from 'axios'
import { DeleteOutlined, EditFilled, MoreOutlined } from '@ant-design/icons'
import { useQuery, useQueryClient } from '@tanstack/react-query'

function Home() {
  const HTTP = import.meta.env.VITE_API
  const queryClient = useQueryClient()

  // O'chirish funktsiyasi
  function deleteStudent(id) {
    return axios.delete(`${HTTP}/students/${id}`);
  }

  // O'quvchilarni olish funktsiyasi
  function getAllStudents() {
    return axios.get(`${HTTP}/students`).then(res => (
      res.data.map((item, index) => {
        item.key = index + 1
        item.action = (
          <div className='flex items-center space-x-5'>
            <MoreOutlined className='cursor-pointer' />
            <EditFilled className='cursor-pointer' />
            <DeleteOutlined 
              className='cursor-pointer' 
              onClick={() => handleDelete(item.id)} // O'chirishni chaqirish
            />
          </div>
        )
        return item
      })
    ))
  }

  // O'chirishni bajarish funktsiyasi
  function handleDelete(id) {
    deleteStudent(id)
      .then(() => {
        // O'chirish muvaffaqiyatli bo'lganda bajarilishi kerak bo'lgan ishlar
        queryClient.invalidateQueries(["students"]); // O'zgarishni yangilash
      })
      .catch(err => {
        console.error("O'chirishda xato:", err);
      });
  }

  const { data: studentsData = [] } = useQuery({
    queryKey: ["students"],  
    queryFn: getAllStudents
  })

  console.log(studentsData);

  return (
    <div className='p-5'>
      <CustomTable data={studentsData} />
    </div>
  )
}

export default Home;
