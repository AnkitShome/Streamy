import { useState } from "react";
import api from "../../api/clerkApi";
import axios from "axios";

const StreamForm = ({ onCreate }) => {
   const [formData, setFormData] = useState({
      title: '',
      description: '',
      streamUrl: ''
   });
   const [thumbnailFile, setThumbnailFile] = useState(null);

   const [loading, setLoading] = useState(false)
   const [error, setError] = useState('')

   const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value })
   }

   const handleFileChange = (e) => {
      setFile(e.target.files[0] || null)
   }

   const handleSubmit = async (e) => {
      e.preventDefault()
      setLoading(true)
      setError('')

      try {
         const data = new FormData();
         data.append('title', formData.title)
         data.append('description', formData.description)
         data.append('streamUrl', formData.streamUrl)
         if (thumbnailFile) data.append('thumbnail', thumbnailFile)

         const response = await api.post('/api/streams', data, {
            headers: { 'Content-Type': 'multipart/form-data' }
         })
         onCreate(response.data)
         setFormData({ title: '', description: '', streamUrl: '' })
         setThumbnailFile(null)
      }
      catch (error) {
         console.log(error)
         setError('Failed to create stream')
      }
      finally {
         setLoading(false)
      }
   }

   return (
      <form onSubmit={handleSubmit} className="mb-8 space-y-4">
         <input name="title" placeholder="title" value={formData.title}
            type="text" onChange={handleChange} required
            className="w-full p-2 border rounded" />

         <input name="streamUrl" placeholder="Stream URL"
            value={formData.streamUrl} onChange={handleChange} type="text"
            className="w-full p-2 border rounded" />

         <textarea name="description" placeholder="Description"
            value={formData.description} onChange={handleChange}
            className="w-full p-2 border rounded" />

         <input type="file" name="thumbnail" accept="image/"
            value={formData.thumbnail} onChange={handleFileChange} className="w-full p-2 border rounded"
         />

         <button type="submit" disabled={loading} className="px-4 py-2 bg-green-600 text-white round disabled:opacity-50">
            {loading ? 'Creating...' : 'Create Stream'}
         </button>
         {error && <p className="text-red-500">{error}</p>}
      </form>
   )
}

export default StreamForm;