
import { requireAuth } from '@clerk/express';
// Verifies incoming Clerk JWT and populates req.auth
export default requireAuth