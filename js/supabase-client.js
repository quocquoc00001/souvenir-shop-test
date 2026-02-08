// ============================================
// SUPABASE CLIENT - Shared instance
// ============================================
const { createClient } = window.supabase;
const supabaseClient = createClient(
  CONFIG.SUPABASE_URL,
  CONFIG.SUPABASE_KEY
);

// ============================================
// API FUNCTIONS
// ============================================

/**
 * Gọi Groq API qua Vercel Proxy (bảo mật key)
 */
async function callGroqAPI(imageData, systemPrompt) {
  try {
    const response = await fetch(`${CONFIG.API_BASE_URL}/api/groq-chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ imageData, systemPrompt })
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'API call failed');
    }

    return await response.json();
  } catch (error) {
    console.error('Groq API Error:', error);
    throw error;
  }
}

/**
 * Lấy API key từ Supabase (chỉ dùng cho local development)
 */
async function getGroqApiKey() {
  // Nếu đang trên Vercel, không cần lấy key (server đã có)
  if (window.location.hostname.includes('vercel.app')) {
    return null;
  }

  const { data, error } = await supabaseClient
    .from('settings')
    .select('value')
    .eq('key', 'groq_api_key')
    .single();

  if (error || !data?.value) {
    throw new Error('API key chưa được cấu hình');
  }

  return data.value;
}

/**
 * Lưu API key (chỉ admin)
 */
async function saveGroqApiKey(apiKey) {
  const { error } = await supabaseClient
    .from('settings')
    .upsert({
      key: 'groq_api_key',
      value: apiKey,
      updated_at: new Date().toISOString()
    }, {
      onConflict: 'key'
    });

  if (error) throw error;
  return true;
}

/**
 * Kiểm tra trạng thái API key
 */
async function checkApiKeyStatus() {
  if (window.location.hostname.includes('vercel.app')) {
    return { configured: true, message: 'Server Configured' };
  }

  const { data } = await supabaseClient
    .from('settings')
    .select('value')
    .eq('key', 'groq_api_key')
    .single();

  return {
    configured: !!(data?.value && data.value.startsWith('gsk_')),
    message: data?.value ? 'Configured' : 'Not configured'
  };
}

// Export cho các module khác
window.SupabaseAPI = {
  client: supabaseClient,
  callGroqAPI,
  getGroqApiKey,
  saveGroqApiKey,
  checkApiKeyStatus
};