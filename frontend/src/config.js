// API Base URL Configuration
// In production on Vercel, requests point directly to the Render backend to avoid 
// serverless payload/timeout limitations on large media files.
const API_URL = import.meta.env.VITE_API_URL || 'https://placement-mentor-ai.onrender.com';

export default API_URL;

