import React from 'react'
import CustomTable from '../components/CustomTable'
import axios from 'axios'
import { DeleteOutlined, EditFilled, MoreOutlined } from '@ant-design/icons'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useAxios } from '../hooks/useAxios'

function Home() {
  const HTTP = import.meta.env.VITE_API
  const queryClient = useQueryClient();
  const axiosInstance = useAxios();

  const mutation = useMutation({
    mutationFn: async (id) => {
      await axiosInstance.delete(`/students/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['students'] });
    },
    onError: (error) => {
      console.error("Error deleting student:", error);
    }
  });

  function handleDelete(id) {
    mutation.mutate(id);
  }

  async function getAllStudents() {
    const response = await axios.get(`${HTTP}/students`);
    return response.data.map((item, index) => {
      item.key = index + 1;
      item.action = (
        <div className='flex items-center space-x-5'>
          <MoreOutlined className='cursor-pointer' />
          <EditFilled className='cursor-pointer' />
          <DeleteOutlined onClick={() => handleDelete(item.id)} className='scale-[1.5]' />
        </div>
      );
      return item;
    });
  }

  const { data: studentsData = [] } = useQuery({
    queryKey: ["students"],
    queryFn: getAllStudents,
  });

  return (
    <div className='p-5'>
      <CustomTable data={studentsData} />
    </div>
  );
}

export default Home;
