import { createAuthClient } from "better-auth/react";

const getBaseUrl = () => {
  // 1. In the browser, always use the active domain dynamically
  if (typeof window !== "undefined") {
    return window.location.origin;
  }
  
  // 2. Fallback for the Next.js compiler during the build phase
  return "http://localhost:3000";
};

export const authClient = createAuthClient({
  baseURL: getBaseUrl()
});
