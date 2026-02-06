// ============================================
// CONFIG - Public variables only
// ============================================
const CONFIG = {
  // Supabase public config (anon key is safe for client)
  SUPABASE_URL: 'https://vhoefegdnrccwmmrelfw.supabase.co',
  SUPABASE_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZob2VmZWdkbnJjY3dtbXJlbGZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAzODY2MTksImV4cCI6MjA4NTk2MjYxOX0.1imKWjk_FgtY5kMXII4XEeWllKGRdQSMvkB5dRWFEN4',

  // API endpoint (Vercel serverless)
  API_BASE_URL: window.location.origin.includes('localhost')
    ? 'http://localhost:3000'
    : window.location.origin
};