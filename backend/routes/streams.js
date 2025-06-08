import express from "express"
import requireAuth from "../middlewares/auth.js"
import {
   getStreams,
   getStreamById,
   createStream,
   deleteStream
} from "../controllers/streamController.js"

const router = express.Router();

//Public endpoints
router.get('/', getStreams);
router.get('/:id', getStreamById)

//Protected endpoints
router.post('/', requireAuth(), createStream);
router.delete('/:id', requireAuth(), deleteStream)

export default router