// ============================================
// CONFIG - Public variables only
// ============================================
const CONFIG = {
  // Supabase public config (anon key is safe for client)
  SUPABASE_URL: 'https://cmmytmenriqqesjhuekj.supabase.co',
  SUPABASE_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNtbXl0bWVucmlxcWVzamh1ZWtqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA1NDcwMTgsImV4cCI6MjA4NjEyMzAxOH0.vKIJ6_PglM2dPkApX6cS3Lgs0GIclvn2fG8n8mFpkBs',

  // API endpoint (Vercel serverless)
  API_BASE_URL: window.location.origin.includes('localhost')
    ? 'http://localhost:3000'
    : window.location.origin
};