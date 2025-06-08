import express from 'express';
import { Webhook } from 'svix';
import User from '../models/User.js';


const router = express.Router();
const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET);


router.post(
   '/',
   express.raw({ type: 'application/json' }),
   async (req, res) => {

      const signature = req.headers['clerk-signature'];
      let evt;
      try {
         evt = wh.verify(req.body, {
            'svix-id': req.header('svix-id'),
            'svix-timestamp': req.header('svix-timestamp'),
            'svix-signature': req.header('svix-signature'),
         });
      } catch (err) {
         console.error('❌ Invalid webhook signature:', err.message);
         return res.status(400).send('Invalid signature');
      }

      const eventType = evt.type;
      const data = evt.data;

      if (eventType === 'user.created') {
         try {
            const newUser = await User.create({
               clerkId: data.id,
               email: data.email_addresses?.[0]?.email_address || '',
               username: data.username || data.first_name || 'User',
               imageUrl: data.image_url,
            });

            console.log('✅ User saved:', newUser.clerkId);

         } catch (err) {
            console.error('❌ Failed to save user:', err.message);
         }
      }

      if (eventType === 'user.updated') {
         try {
            const updates = {};

            if (data.email_addresses?.[0]?.email_address) {
               updates.email = data.email_addresses[0].email_address;
            }
            if (data.username) {
               updates.username = data.username;
            }
            if (data.image_url) {
               updates.imageUrl = data.image_url;
            }

            await User.findOneAndUpdate(
               { clerkId: data.id },
               updates,
               { new: true }
            );
         } catch (err) {
            console.error('❌ Failed to update user:', err.message);
         }
      }

      if (eventType === 'user.deleted') {
         try {
            await User.findOneAndDelete({ clerkId: data.id });
            console.log('🗑️ User deleted:', data.id);
         } catch (err) {
            console.error('❌ Failed to delete user:', err.message);
         }
      }


      console.log('📨 Received Clerk webhook:', evt.type, '–', evt.data.id);

      return res.status(200).send('ok');
   }
)

export default router;