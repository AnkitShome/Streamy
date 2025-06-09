import React from 'react'
import { Link } from "react-router-dom"
import createClerkApi from '../../api/clerkApi'

const StreamList = ({ streams, onDelete }) => {

   const handleDelete = async (id) => {
      if (!window.confirm('Delete this stream?')) return;
      try {
         await api.delete(`/api/streams/${id}`)
         onDelete(id)
      } catch (error) {
         console.log(error)
         alert('Failed to delete')
      }
   }

   if (!streams.length) {
      return <p className='text-gray-500'>No streams yet. Create one above!</p>
   }

   return (
      <div className='space-y-4'>
         {
            streams.map((s) => (
               <div key={s._id} className='flex justify-between items-center p-4 border rounded'>
                  <Link to={`/streams/${s._id}`} className='font-medium'>
                     {s.title}
                  </Link>
                  <button onClick={() => handleDelete(s._id)}
                     className='px-3 py-1 bg-red-600 text-white rounded'
                  >
                     Delete
                  </button>
               </div>
            ))
         }
      </div>
   )
}

export default StreamList
