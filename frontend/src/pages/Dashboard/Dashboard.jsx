import React from 'react'
import { useState, useEffect } from 'react'
import { useUser } from '@clerk/clerk-react'
import { useNavigate, Link } from 'react-router-dom'
import StreamForm from '../../components/Dashboard/StreamForm'
import StreamList from '../../components/Dashboard/StreamList'
import createClerkApi from '../../api/clerkApi'


const Dashboard = () => {
   const { user } = useUser();
   const [streams, setStreams] = useState([])

   const api = createClerkApi();
   useEffect(() => {
      (async () => {
         try {
            const res = await api.get("/api/streams/mine")
            setStreams(res.data)
         } catch (error) {
            console.log(error)
         }
      })();
   }, [])

   const addStream = (newStream) => {
      setStreams((prev) => [newStream, ...prev])
   }

   const removeStream = (id) => {
      setStreams((prev) => prev.filter((item) => item.id !== id))
   }

   if (user.publicMetadata.role !== 'streamer') {
      return (
         <div className='p-8 text-center'>
            <h2 className='text-2xl mb-4'>Your're not a streamer yet.</h2>
            <button onClick={() => window.location.assign('/')}
               className='px-2 py-2 bg-purple-600 text-white rounded'
            >Go Home</button>
         </div>
      )
   }

   return (
      <div className='max-w-4xl mx-auto p-6'>
         <h1 className='text-3xl font-bold mb-6'>Your Streams</h1>
         <StreamForm onCreate={addStream} />
         <StreamList streams={streams} onDelete={removeStream} />
      </div>
   )
}

export default Dashboard