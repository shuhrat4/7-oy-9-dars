import React from 'react'
import CustomTable from '../components/CustomTable'
import axios from 'axios'
import { DeleteOutlined, EditFilled, MoreOutlined } from '@ant-design/icons'
import { useQuery, useQueryClient } from '@tanstack/react-query'

function Home() {
  const HTTP = import.meta.env.VITE_API
  const queryClient = useQueryClient()

  function deleteStudent(id) {
    return axios.delete(`${HTTP}/students/${id}`);
  }

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
              onClick={() => handleDelete(item.id)} 
            />
          </div>
        )
        return item
      })
    ))
  }

  function handleDelete(id) {
    deleteStudent(id)
      .then(() => {
           queryClient.invalidateQueries(["students"]); 
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
    <div >
      <CustomTable data={studentsData} />
    </div>
  )
}

export default Home;
