// API Base URL Configuration
// When VITE_API_URL is not set, default to relative path (empty string) 
// so all requests seamlessly use the same domain with Vercel rewrites,
// or use the explicit environment variable if configured.
const API_URL = import.meta.env.VITE_API_URL || '';

export default API_URL;

