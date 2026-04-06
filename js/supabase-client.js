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
 * Gọi Groq API trực tiếp từ client (dùng key lưu trong Supabase)
 */
async function callGroqAPI(imageData, systemPrompt) {
  try {
    // Lấy API key từ Supabase settings
    const apiKey = await getGroqApiKey();
    if (!apiKey) {
      throw new Error('Chưa cấu hình API key. Vui lòng vào Admin để thêm Groq API key.');
    }

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'meta-llama/llama-4-scout-17b-16e-instruct',
        messages: [
          {
            role: 'system',
            content: systemPrompt || 'Bạn là AI thân thiện, nhận xét tranh bằng tiếng Việt.'
          },
          {
            role: 'user',
            content: [
              { type: 'text', text: 'Nhận xét bức tranh này:' },
              { type: 'image_url', image_url: { url: imageData } }
            ]
          }
        ],
        temperature: 0.8,
        max_completion_tokens: 500
      })
    });

    const data = await response.json();

    if (!response.ok) {
      const errMsg = data.error?.message || 'Groq API error';
      throw new Error(errMsg);
    }

    return { content: data.choices[0].message.content };

  } catch (error) {
    console.error('Groq API Error:', error);
    throw error;
  }
}

/**
 * Lấy API key từ Supabase settings table
 */
async function getGroqApiKey() {
  const { data, error } = await supabaseClient
    .from('settings')
    .select('value')
    .eq('key', 'groq_api_key')
    .single();

  if (error || !data?.value) {
    return null;
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