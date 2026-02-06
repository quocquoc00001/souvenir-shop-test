// ============================================
// CONFIG - Public variables only
// ============================================
const CONFIG = {
  // Supabase public config (anon key is safe for client)
  SUPABASE_URL: 'https://pacdedekrilpryicissg.supabase.co',
  SUPABASE_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBhY2RlZGVrcmlscHJ5aWNpc3NnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk3MzE2MDksImV4cCI6MjA4NTMwNzYwOX0.CNE274tkcgJCHBXq8SlvN59aaecK2qP2CRuKaDY-S1g',
  
  // API endpoint (Vercel serverless)
  API_BASE_URL: window.location.origin.includes('localhost') 
    ? 'http://localhost:3000' 
    : window.location.origin
};