// ============================================
// SUPABASE CLIENT & API MANAGER
// ============================================

// Initialize Supabase client
const supabaseClient = supabase.createClient(
  CONFIG.SUPABASE_URL,
  CONFIG.SUPABASE_KEY
);

// ============================================
// API FUNCTIONS
// ============================================

const SupabaseAPI = {
  // Supabase client instance
  client: supabaseClient,
  
  /**
   * Call Groq API through Vercel proxy (secure)
   */
  async callGroqAPI(imageData, season = 'spring') {
    const response = await fetch(`${CONFIG.API_BASE_URL}/api/groq-chat`, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        imageData, 
        season 
      })
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'API call failed');
    }
    
    return await response.json();
  },

  /**
   * Get API key from Supabase (for local development only)
   */
  async getGroqApiKey() {
    // On Vercel, server handles the key
    if (this.isVercel()) {
      return null;
    }
    
    const { data, error } = await supabaseClient
      .from('settings')
      .select('value')
      .eq('key', 'groq_api_key')
      .single();
    
    if (error || !data?.value) {
      throw new Error('API key chưa được cấu hình trong Settings');
    }
    
    return data.value;
  },

  /**
   * Save API key to Supabase
   */
  async saveGroqApiKey(apiKey) {
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
  },

  /**
   * Check API key status
   */
  async checkApiKeyStatus() {
    // On Vercel production
    if (this.isVercel()) {
      try {
        const response = await fetch(`${CONFIG.API_BASE_URL}/api/groq-chat`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ 
            imageData: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==',
            season: 'spring'
          })
        });
        
        if (response.ok) {
          return { 
            configured: true, 
            source: 'vercel_env',
            message: 'Đã cấu hình (Vercel Environment)' 
          };
        }
        
        const error = await response.json();
        if (error.message?.includes('not configured')) {
          return { 
            configured: false, 
            source: 'vercel_env',
            message: 'Chưa cấu hình trên Vercel' 
          };
        }
        
        throw new Error(error.message);
        
      } catch (err) {
        return { 
          configured: false, 
          source: 'vercel_env',
          message: 'Lỗi kết nối: ' + err.message 
        };
      }
    }
    
    // Local development - check Supabase
    const { data } = await supabaseClient
      .from('settings')
      .select('value')
      .eq('key', 'groq_api_key')
      .single();
    
    const isValid = data?.value && data.value.startsWith('gsk_');
    
    return {
      configured: isValid,
      source: 'supabase',
      message: isValid 
        ? `Đã cấu hình (${data.value.substring(0, 8)}...)` 
        : 'Chưa cấu hình'
    };
  },

  /**
   * Test API connection
   */
  async testApiConnection() {
    const testImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==';
    
    const result = await this.callGroqAPI(testImage, 'spring');
    return result.success;
  },

  /**
   * Check if running on Vercel
   */
  isVercel() {
    return window.location.hostname.includes('vercel.app') ||
           document.cookie.includes('vercel');
  },

  // ============================================
  // ORDER MANAGEMENT
  // ============================================

  async getOrders() {
    const { data, error } = await supabaseClient
      .from('orders')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data || [];
  },

  async getOrderById(id) {
    const { data, error } = await supabaseClient
      .from('orders')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) throw error;
    return data;
  },

  async saveOrder(orderData) {
    const { error } = await supabaseClient
      .from('orders')
      .upsert(orderData, { onConflict: 'id' });
    
    if (error) throw error;
    return true;
  },

  async deleteOrder(id) {
    const { error } = await supabaseClient
      .from('orders')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
    return true;
  },

  // ============================================
  // SEASON PASSWORDS
  // ============================================

  async getSeasonPasswords(orderId) {
    const { data, error } = await supabaseClient
      .from('season_passwords')
      .select('*')
      .eq('order_id', orderId);
    
    if (error) throw error;
    
    // Convert to object
    const passwords = {};
    data?.forEach(p => {
      passwords[p.season] = p.password;
    });
    
    return passwords;
  },

  async saveSeasonPasswords(orderId, passwords) {
    const inserts = Object.entries(passwords).map(([season, password]) => ({
      order_id: orderId,
      season,
      password
    }));

    // Delete old passwords
    await supabaseClient
      .from('season_passwords')
      .delete()
      .eq('order_id', orderId);

    // Insert new passwords
    const { error } = await supabaseClient
      .from('season_passwords')
      .insert(inserts);
    
    if (error) throw error;
    return true;
  },

  async verifySeasonPassword(season, password) {
    const { data, error } = await supabaseClient
      .from('season_passwords')
      .select('order_id')
      .eq('season', season)
      .eq('password', password)
      .single();
    
    if (error || !data) {
      return { valid: false };
    }
    
    return { valid: true, orderId: data.order_id };
  }
};

// Export to global scope
window.SupabaseAPI = SupabaseAPI;