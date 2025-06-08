import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import { clerkMiddleware } from '@clerk/express';
import streamsRouter from './routes/streams.js';
import webhookRouter from './routes/clerkWebhook.js'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

app.use(clerkMiddleware());

app.use('/webhooks/clerk', webhookRouter);


// Middleware
app.use(express.json());



// Routes
app.use('/api/streams', streamsRouter);
app.get('/', (req, res) => {
   res.send('🚀 Streamy backend is up and running!');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
