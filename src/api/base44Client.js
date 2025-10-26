import { createClient } from '@base44/sdk';
// import { getAccessToken } from '@base44/sdk/utils/auth-utils';

// Create a client with authentication required
export const base44 = createClient({
  appId: "68f8ba38bef1cce58f7b12c3", 
  requiresAuth: true // Ensure authentication is required for all operations
});
