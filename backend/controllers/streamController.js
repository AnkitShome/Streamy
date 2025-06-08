import Stream from "../models/Stream.js";

export const getStreams = async (req, res) => {
   try {
      const streams = await Stream.find();
      res.json(streams);
   } catch (error) {
      res.status(500).json({ msg: error.message })
   }
}

export const createStream = async (req, res) => {
   try {
      const { title, description, streamUrl } = req.body
      const newStream = new Stream({
         title,
         description,
         streamUrl,
         userId: req.auth.userId
      })
      const saved = await newStream.save()
      res.status(201).json(saved)
   } catch (error) {
      res.status(400).json({ msg: error.message })
   }
}

export const getStreamById = async (req, res) => {
   try {
      const streamId = req.params.id
      const stream = await Stream.findById(streamId)
      if (!stream) return res.status(404).json({ msg: "Stream not found" })
      res.json(stream)
   } catch (error) {
      res.status(500).json({ msg: error.message })
   }
}

export const deleteStream = async (req, res) => {
   try {
      const stream = await Stream.findById(req.params.id);
      if (!stream) return res.status(404).json({ message: 'Stream not found' });
      if (stream.userId !== req.auth.userId)
         return res.status(403).json({ message: 'Not authorized' });
      await stream.remove();
      res.json({ message: 'Stream removed' });
   } catch (error) {
      return res.status(500).json({ msg: error.message })
   }
}