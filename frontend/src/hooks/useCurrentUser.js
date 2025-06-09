import { useState, useEffect } from "react";
import createClerkApi from "../api/clerkApi";

export const useCurrentUser = () => {
   const [user, setUser] = useState(null)
   const [loading, setLoading] = useState(true)
   const api = createClerkApi();

   useEffect(() => {
      (async () => {
         try {
            const res = await api.get('/api/users/me');
            setUser(res.data);
         } catch (err) {
            console.error('Fetch current user error:', err);
         } finally {
            setLoading(false);
         }
      })();
   }, []);

   return { user, loading };
};