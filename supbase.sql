-- ============================================
-- 1. BẢNG SETTINGS (Lưu cấu hình API)
-- ============================================
CREATE TABLE IF NOT EXISTS settings (
    id SERIAL PRIMARY KEY,
    key TEXT UNIQUE NOT NULL,
    value TEXT NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- RLS Policy
ALTER TABLE settings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Settings public read" ON settings
    FOR SELECT USING (true);
    
CREATE POLICY "Settings admin write" ON settings
    FOR ALL USING (true);

-- ============================================
-- 2. BẢNG ORDERS (Đơn hàng)
-- ============================================
CREATE TABLE IF NOT EXISTS orders (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    content TEXT,
    secret_message TEXT,
    spotify TEXT,
    product_ids INTEGER[] DEFAULT '{}',
    is_edited BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Orders full access" ON orders FOR ALL USING (true);

-- ============================================
-- 3. BẢNG SEASON_PASSWORDS (Mật khẩu theo mùa)
-- ============================================
CREATE TABLE IF NOT EXISTS season_passwords (
    id SERIAL PRIMARY KEY,
    order_id TEXT REFERENCES orders(id) ON DELETE CASCADE,
    season TEXT NOT NULL CHECK (season IN ('spring', 'summer', 'autumn', 'winter')),
    password TEXT NOT NULL,
    UNIQUE(order_id, season)
);

ALTER TABLE season_passwords ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Season passwords full access" ON season_passwords FOR ALL USING (true);

-- ============================================
-- 4. INSERT DEFAULT DATA
-- ============================================
INSERT INTO settings (key, value) 
VALUES 
    ('groq_api_key', ''),
    ('site_title', 'Tiệm Lưu Niệm Bốn Mùa')
ON CONFLICT (key) DO NOTHING;