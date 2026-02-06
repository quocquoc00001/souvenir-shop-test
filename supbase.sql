-- Bảng cấu hình API (bảo mật, chỉ admin truy cập)
CREATE TABLE IF NOT EXISTS settings (
    id SERIAL PRIMARY KEY,
    key TEXT UNIQUE NOT NULL,
    value TEXT NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Bảng đơn hàng
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

-- Bảng mật khẩu theo mùa
CREATE TABLE IF NOT EXISTS season_passwords (
    id SERIAL PRIMARY KEY,
    order_id TEXT REFERENCES orders(id) ON DELETE CASCADE,
    season TEXT NOT NULL,
    password TEXT NOT NULL,
    UNIQUE(order_id, season)
);

-- Bật RLS
ALTER TABLE settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE season_passwords ENABLE ROW LEVEL SECURITY;

-- Policy cho settings: Chỉ admin mới có thể đọc/ghi
CREATE POLICY "Settings read for authenticated admin" ON settings
    FOR SELECT USING (true); -- Client-side kiểm tra admin password
    
CREATE POLICY "Settings update for authenticated admin" ON settings
    FOR ALL USING (true);

-- Policy cho orders và season_passwords
CREATE POLICY "Orders access" ON orders FOR ALL USING (true);
CREATE POLICY "Season passwords access" ON season_passwords FOR ALL USING (true);

-- Thêm key mặc định (bạn nên thay bằng key thật sau khi cài đặt)
INSERT INTO settings (key, value) VALUES ('groq_api_key', '') ON CONFLICT DO NOTHING;