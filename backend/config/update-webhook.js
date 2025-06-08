// File: scripts/update-webhook.js
// Usage: node scripts/update-webhook.js <NEW_TUNNEL_URL>

import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

const { CLERK_SECRET_KEY, CLERK_WEBHOOK_ID } = process.env;
const newTunnelUrl = process.argv[2];

if (!CLERK_SECRET_KEY || !CLERK_WEBHOOK_ID) {
   console.error('⚠️  Missing CLERK_SECRET_KEY or CLERK_WEBHOOK_ID in .env');
   process.exit(1);
}

if (!newTunnelUrl) {
   console.error('Usage: node update-webhook.js <NEW_TUNNEL_URL>');
   process.exit(1);
}

const targetUrl = `${newTunnelUrl}/webhooks/clerk`;

(async () => {
   try {
      const res = await fetch(
         `https://api.clerk.com/v1/webhook_subscriptions/${CLERK_WEBHOOK_ID}`,
         {
            method: 'PATCH',
            headers: {
               'Authorization': `Bearer ${CLERK_SECRET_KEY}`,
               'Content-Type': 'application/json'
            },
            body: JSON.stringify({ url: targetUrl })
         }
      );
      if (!res.ok) throw new Error(await res.text());
      console.log('✅ Clerk webhook updated to', targetUrl);
   } catch (err) {
      console.error('❌ Failed to update webhook:', err);
      process.exit(1);
   }
})();
