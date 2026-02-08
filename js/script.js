// ============================================
// MAIN SCRIPT - Index Page & Admin Dashboard
// ============================================

// supabaseClient is already initialized in supabase-client.js

/* ============================================
   === DỮ LIỆU SẢN PHẨM ===
   ============================================ */
const products = [
    {
        id: 1,
        name: "Nón Lá Vẽ Tay",
        material: "Lá cọ, Tre, Màu acrylic",
        method: "Vẽ tay thủ công từng chiếc",
        meaning: "Biểu tượng văn hóa Việt Nam, che chở mưa nắng.",
        versions: {
            xuan: [{ type: 'img', url: 'https://images.unsplash.com/photo-1582450871972-ab5ca641643d?w=600' }],
            ha: [{ type: 'img', url: 'https://images.unsplash.com/photo-1559592413-7cec4d0ea49b?w=600' }],
            thu: [{ type: 'img', url: 'https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?w=600' }],
            dong: [{ type: 'img', url: 'https://images.unsplash.com/photo-1516714819001-8ee7a13b71d7?w=600' }]
        }
    },
    {
        id: 2, name: "Áo Dài Mini",
        material: "Lụa tơ tằm, Gấm", method: "May đo tỉ mỉ", meaning: "Tôn vinh nét đẹp dịu dàng của phụ nữ Việt.",
        versions: {
            xuan: [{ type: 'img', url: 'https://images.unsplash.com/photo-1623943632420-a6163351d3b3?w=600' }],
            ha: [{ type: 'img', url: 'https://images.unsplash.com/photo-1623943632420-a6163351d3b3?w=600' }],
            thu: [{ type: 'img', url: 'https://images.unsplash.com/photo-1509088648260-be4816be5108?w=600' }],
            dong: [{ type: 'img', url: 'https://images.unsplash.com/photo-1485594050903-8e8ee5326c90?w=600' }]
        }
    },
    {
        id: 3, name: "Gốm Bát Tràng", material: "Đất sét trắng", method: "Nung 1200 độ C", meaning: "Tinh hoa từ lòng đất.",
        versions: {
            xuan: [{ type: 'img', url: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=600' }],
            ha: [{ type: 'img', url: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=600' }],
            thu: [{ type: 'img', url: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=600' }],
            dong: [{ type: 'img', url: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=600' }]
        }
    },
    { id: 4, name: "Tranh Đông Hồ", material: "Giấy Dó", method: "In khắc gỗ", meaning: "Lưu giữ hồn dân tộc.", versions: { xuan: [{ type: 'img', url: 'https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=600' }], ha: [], thu: [], dong: [] } },
    { id: 5, name: "Chuồn Chuồn Tre", material: "Tre tự nhiên", method: "Thủ công", meaning: "Ký ức tuổi thơ.", versions: { xuan: [{ type: 'img', url: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=600' }], ha: [], thu: [], dong: [] } },
    { id: 6, name: "Quạt Thư Pháp", material: "Giấy, tre", method: "Viết thư pháp", meaning: "Gió mát lành.", versions: { xuan: [{ type: 'img', url: 'https://images.unsplash.com/photo-1580127645995-d43fe95d84ab?w=600' }], ha: [], thu: [], dong: [] } },
];

/* ============================================
   === BIẾN TOÀN CỤC ===
   ============================================ */
let editingOrderId = null;
let currentSelectedProductIds = [];
let currentProduct = null;
let currentSlideIndex = 0;
let currentMediaList = [];
let currentSeasonPasswords = {
    spring: '',
    summer: '',
    autumn: '',
    winter: ''
};

/* ============================================
   === KHỞI TẠO ===
   ============================================ */
document.addEventListener('DOMContentLoaded', function () {
    console.log('🚀 Đang khởi tạo...');
    initProducts();
    initAdminProductSelect();
    renderSakura();
    initConstellation();
});

/* ============================================
   === HIỂN THỊ SẢN PHẨM TRANG CHỦ ===
   ============================================ */
function initProducts() {
    const list = document.getElementById('product-list');
    if (!list) return;
    list.innerHTML = products.map(p => {
        let thumbUrl = "https://via.placeholder.com/300?text=San+Pham";
        if (p.versions && p.versions.xuan && p.versions.xuan.length > 0) thumbUrl = p.versions.xuan[0].url;
        const productName = t(`product.${p.id}.name`);
        const viewDetail = t('products.viewDetail');
        return `
        <div class="product-item" onclick="openProductModal(${p.id})">
            <img src="${thumbUrl}" alt="${productName}">
            <h3>${productName}</h3>
            <p style="font-size: 0.9rem; color: #777;">${viewDetail}</p>
        </div>
    `}).join('');
}

/* ============================================
   === LOGIC SLIDER MODAL ===
   ============================================ */
function openProductModal(id) {
    currentProduct = products.find(p => p.id === id);
    if (!currentProduct) return;
    document.getElementById('product-modal').classList.remove('hidden');
    document.getElementById('modal-title').innerText = t(`product.${currentProduct.id}.name`);
    document.getElementById('modal-material').innerText = t(`product.${currentProduct.id}.material`);
    document.getElementById('modal-method').innerText = t(`product.${currentProduct.id}.method`);
    document.getElementById('modal-meaning').innerText = t(`product.${currentProduct.id}.meaning`);
    changeProductVersion('xuan');
}

function closeModal() {
    document.getElementById('product-modal').classList.add('hidden');
    document.getElementById('slider-track').innerHTML = '';
}

function changeProductVersion(season) {
    if (!currentProduct) return;
    document.querySelectorAll('.season-btn').forEach(btn => btn.classList.remove('active'));

    let mediaData = currentProduct.versions[season];
    if (!mediaData || mediaData.length === 0) {
        mediaData = [{ type: 'img', url: 'https://via.placeholder.com/600x400?text=Chua+co+hinh+anh' }];
    }
    currentMediaList = mediaData;
    currentSlideIndex = 0;
    renderSlider();
}

function renderSlider() {
    const track = document.getElementById('slider-track');
    if (!track) return;
    track.innerHTML = '';
    currentMediaList.forEach(item => {
        const slideItem = document.createElement('div');
        slideItem.classList.add('slide-item');
        if (item.type === 'video') {
            slideItem.innerHTML = `<video src="${item.url}" controls style="width:100%; height:100%; object-fit:cover"></video>`;
        } else {
            slideItem.innerHTML = `<img src="${item.url}" alt="Product">`;
        }
        track.appendChild(slideItem);
    });
    updateSliderPosition();
}

function moveSlide(direction) {
    const totalSlides = currentMediaList.length;
    if (totalSlides <= 1) return;
    currentSlideIndex += direction;
    if (currentSlideIndex < 0) currentSlideIndex = totalSlides - 1;
    else if (currentSlideIndex >= totalSlides) currentSlideIndex = 0;
    updateSliderPosition();
}

function updateSliderPosition() {
    const track = document.getElementById('slider-track');
    if (track) {
        track.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
    }
}

/* ============================================
   === PASSWORD MODAL FOR SECRET PAGES ===
   ============================================ */
function showPasswordModal(season) {
    const modal = document.getElementById('password-modal');
    const hint = document.getElementById('password-hint');
    const targetInput = document.getElementById('target-season');

    if (!modal) return;

    const seasonNames = {
        spring: 'Xuân',
        summer: 'Hạ',
        autumn: 'Thu',
        winter: 'Đông'
    };

    hint.innerHTML = `Nhập mật khẩu để vào trang bí mật <strong>${seasonNames[season]}</strong>`;
    targetInput.value = season;

    modal.classList.remove('hidden');
}

function closePasswordModal() {
    const modal = document.getElementById('password-modal');
    if (modal) modal.classList.add('hidden');
    document.getElementById('secret-password-input').value = '';
}

async function verifyPassword() {
    const input = document.getElementById('secret-password-input').value.trim();
    const targetSeason = document.getElementById('target-season').value;

    if (!input) {
        alert('Vui lòng nhập mật khẩu!');
        return;
    }

    try {
        const { data, error } = await supabaseClient
            .from('season_passwords')
            .select('password, order_id')
            .eq('season', targetSeason)
            .eq('password', input)
            .single();

        if (error || !data) {
            alert('Mật khẩu không chính xác!');
            return;
        }

        sessionStorage.setItem('verifiedSecretPassword', input);
        sessionStorage.setItem('verifiedSeason', targetSeason);
        sessionStorage.setItem('verifiedOrderId', data.order_id);
        window.location.href = `${targetSeason}.html`;

    } catch (err) {
        console.error('Lỗi xác thực:', err);
        alert('Lỗi kết nối, vui lòng thử lại!');
    }
}

/* ============================================
   === ADMIN FUNCTIONS ===
   ============================================ */

function initAdminProductSelect() {
    const select = document.getElementById('adm-product-select');
    if (!select) return;

    select.innerHTML = '<option value="" disabled selected>-- Chọn sản phẩm --</option>';

    products.forEach(p => {
        const option = document.createElement('option');
        option.value = p.id;
        option.textContent = `${p.id}. ${p.name}`;
        select.appendChild(option);
    });
}

function addProductToSelection() {
    const select = document.getElementById('adm-product-select');
    if (!select) return;

    const val = select.value;
    if (!val) {
        alert('Vui lòng chọn sản phẩm!');
        return;
    }

    const numVal = parseInt(val);

    if (!currentSelectedProductIds.includes(numVal)) {
        currentSelectedProductIds.push(numVal);
        renderSelectedProductsList();
    } else {
        alert('Sản phẩm này đã có trong đơn!');
    }

    select.value = "";
}

function removeProductSelection(pid) {
    const numPid = parseInt(pid);
    currentSelectedProductIds = currentSelectedProductIds.filter(id => id !== numPid);
    renderSelectedProductsList();
}

function renderSelectedProductsList() {
    const container = document.getElementById('selected-products-list');
    if (!container) return;

    if (currentSelectedProductIds.length === 0) {
        container.innerHTML = '<span class="empty-msg" style="color:#999;font-style:italic;">Chưa có sản phẩm nào</span>';
        return;
    }

    container.innerHTML = currentSelectedProductIds.map(pid => {
        const p = products.find(prod => prod.id === pid);
        return `
            <div class="prod-tag">
                ${p ? p.name : 'ID:' + pid} 
                <i class="fas fa-times-circle" onclick="removeProductSelection(${pid})" style="cursor:pointer;color:#d63031;margin-left:5px;"></i>
            </div>
        `;
    }).join('');
}

function generateSeasonPasswords() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const seasons = ['spring', 'summer', 'autumn', 'winter'];
    const seasonNames = ['Xuân', 'Hạ', 'Thu', 'Đông'];

    seasons.forEach((season, idx) => {
        let password = '';
        for (let i = 0; i < 8; i++) {
            password += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        currentSeasonPasswords[season] = password;

        const input = document.getElementById(`pass-${season}`);
        if (input) input.value = password;

        const qrContainer = document.getElementById(`qr-${season}`);
        if (qrContainer) {
            const baseUrl = window.location.origin + window.location.pathname.replace('index.html', '');
            const seasonUrl = `${baseUrl}${season}.html`;
            qrContainer.innerHTML = `<img src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=${encodeURIComponent(seasonUrl)}" alt="QR ${seasonNames[idx]}" style="width:100%;height:100%;">`;
        }
    });

    alert('✅ Đã tạo 4 mật khẩu cho các mùa!');
}

/* ============================================
   === SAVE ORDER TO SUPABASE ===
   ============================================ */
async function saveOrder() {
    const id = document.getElementById('adm-order-id').value;
    const title = document.getElementById('adm-title').value;
    const content = document.getElementById('adm-content').value;
    const secretMessage = document.getElementById('adm-secret-message').value;
    const spotify = document.getElementById('adm-spotify').value;

    if (!currentSeasonPasswords.spring || !currentSeasonPasswords.summer ||
        !currentSeasonPasswords.autumn || !currentSeasonPasswords.winter) {
        alert('Vui lòng tạo mật khẩu cho cả 4 mùa!');
        return;
    }

    if (id.length !== 8) {
        alert("Vui lòng tạo hoặc nhập mã đơn 8 số");
        return;
    }
    if (currentSelectedProductIds.length === 0) {
        alert("Hãy chọn ít nhất 1 sản phẩm!");
        return;
    }
    if (!title) {
        alert("Vui lòng nhập tiêu đề!");
        return;
    }

    try {
        const orderData = {
            id: id,
            title: title,
            content: content,
            secret_message: secretMessage,
            spotify: spotify,
            product_ids: currentSelectedProductIds,
            is_edited: !!editingOrderId
        };

        const { error: orderError } = await supabaseClient
            .from('orders')
            .upsert([orderData]);

        if (orderError) throw orderError;

        if (editingOrderId) {
            await supabaseClient
                .from('season_passwords')
                .delete()
                .eq('order_id', editingOrderId);
        }

        const passwordInserts = [
            { order_id: id, season: 'spring', password: currentSeasonPasswords.spring },
            { order_id: id, season: 'summer', password: currentSeasonPasswords.summer },
            { order_id: id, season: 'autumn', password: currentSeasonPasswords.autumn },
            { order_id: id, season: 'winter', password: currentSeasonPasswords.winter }
        ];

        const { error: passError } = await supabaseClient
            .from('season_passwords')
            .insert(passwordInserts);

        if (passError) throw passError;

        alert(`✅ Đã lưu đơn hàng thành công!`);

        clearForm();
        renderOrderTable();

    } catch (err) {
        console.error('Lỗi lưu đơn:', err);
        alert('Lỗi khi lưu đơn hàng: ' + err.message);
    }
}

async function editOrder(id) {
    try {
        const { data: order, error } = await supabaseClient
            .from('orders')
            .select('*')
            .eq('id', id)
            .single();

        if (error || !order) {
            alert('Không tìm thấy đơn hàng!');
            return;
        }

        const { data: passwords } = await supabaseClient
            .from('season_passwords')
            .select('*')
            .eq('order_id', id);

        document.getElementById('adm-order-id').value = order.id;
        document.getElementById('adm-title').value = order.title;
        document.getElementById('adm-content').value = order.content || '';
        document.getElementById('adm-secret-message').value = order.secret_message || '';
        document.getElementById('adm-spotify').value = order.spotify || '';
        currentSelectedProductIds = order.product_ids || [];
        renderSelectedProductsList();

        if (passwords) {
            passwords.forEach(p => {
                currentSeasonPasswords[p.season] = p.password;
                const input = document.getElementById(`pass-${p.season}`);
                if (input) input.value = p.password;

                const qrContainer = document.getElementById(`qr-${p.season}`);
                if (qrContainer) {
                    const baseUrl = window.location.origin + window.location.pathname.replace('index.html', '');
                    const seasonUrl = `${baseUrl}${p.season}.html`;
                    qrContainer.innerHTML = `<img src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=${encodeURIComponent(seasonUrl)}" style="width:100%;height:100%;">`;
                }
            });
        }

        editingOrderId = id;

    } catch (err) {
        console.error('Lỗi load đơn:', err);
        alert('Lỗi khi tải đơn hàng!');
    }
}

function clearForm() {
    document.getElementById('adm-order-id').value = '';
    document.getElementById('adm-title').value = '';
    document.getElementById('adm-content').value = '';
    document.getElementById('adm-secret-message').value = '';
    document.getElementById('adm-spotify').value = '';
    currentSelectedProductIds = [];
    renderSelectedProductsList();
    editingOrderId = null;

    currentSeasonPasswords = { spring: '', summer: '', autumn: '', winter: '' };
    ['spring', 'summer', 'autumn', 'winter'].forEach(season => {
        const passInput = document.getElementById(`pass-${season}`);
        const qrDiv = document.getElementById(`qr-${season}`);
        if (passInput) passInput.value = '';
        if (qrDiv) qrDiv.innerHTML = '';
    });
}

function showAdminLogin() {
    const modal = document.getElementById('admin-login');
    if (modal) modal.classList.remove('hidden');
}

function closeLogin() {
    const modal = document.getElementById('admin-login');
    if (modal) modal.classList.add('hidden');
}

function loginAdmin() {
    if (document.getElementById('admin-pass').value === 'admin123') {
        closeLogin();
        showSection('admin-dashboard');
        const header = document.getElementById('header-bar');
        if (header) header.style.display = 'none';

        setTimeout(() => {
            initAdminProductSelect();
            renderOrderTable();
            checkAllConnections();
        }, 100);
    } else {
        alert("Sai mật khẩu!");
    }
}

function generateRandomOrderId() {
    document.getElementById('adm-order-id').value = Math.floor(10000000 + Math.random() * 90000000).toString();
}

async function renderOrderTable() {
    const tbody = document.querySelector('#order-table tbody');
    if (!tbody) return;

    try {
        const { data: orders, error } = await supabaseClient
            .from('orders')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) throw error;

        if (!orders || orders.length === 0) {
            tbody.innerHTML = '<tr><td colspan="4" style="text-align:center;">Chưa có đơn hàng nào</td></tr>';
            return;
        }

        const { data: passwords } = await supabaseClient
            .from('season_passwords')
            .select('*');

        const passMap = {};
        if (passwords) {
            passwords.forEach(p => {
                if (!passMap[p.order_id]) passMap[p.order_id] = {};
                passMap[p.order_id][p.season] = p.password;
            });
        }

        tbody.innerHTML = orders.map(o => {
            const passes = passMap[o.id] || {};
            const baseUrl = window.location.origin + window.location.pathname.replace('index.html', '');

            const seasons = [
                { key: 'spring', name: 'Xuân', color: '#10b981' },
                { key: 'summer', name: 'Hạ', color: '#f59e0b' },
                { key: 'autumn', name: 'Thu', color: '#d35400' },
                { key: 'winter', name: 'Đông', color: '#0984e3' }
            ];

            const passCells = seasons.map(s => {
                const pass = passes[s.key] || 'N/A';
                const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=${encodeURIComponent(baseUrl + s.key + '.html')}`;
                return `
                    <div style="display:inline-block;margin:5px;padding:8px;background:#f8f9fa;border-radius:8px;border:2px solid ${s.color};text-align:center;">
                        <div style="font-weight:bold;color:${s.color};font-size:0.85em;">${s.name}</div>
                        <div style="font-family:monospace;font-size:0.9em;margin:3px 0;">${pass}</div>
                        <img src="${qrUrl}" style="width:60px;height:60px;" alt="QR ${s.name}">
                    </div>
                `;
            }).join('');

            return `
                <tr>
                    <td><strong>${o.id}</strong></td>
                    <td>${o.title}</td>
                    <td>${passCells}</td>
                    <td>
                        <button onclick="editOrder('${o.id}')" style="background:#0984e3; color:white; border:none; padding:5px 10px; border-radius:5px; cursor:pointer; margin-right:5px;">Sửa</button>
                        <button onclick="deleteOrder('${o.id}')" style="background:#e74c3c; color:white; border:none; padding:5px 10px; border-radius:5px; cursor:pointer;">Xóa</button>
                    </td>
                </tr>
            `;
        }).join('');

    } catch (err) {
        console.error('Lỗi load danh sách:', err);
        tbody.innerHTML = '<tr><td colspan="4" style="text-align:center;color:red;">Lỗi kết nối Supabase</td></tr>';
    }
}

async function deleteOrder(id) {
    if (!confirm('Bạn có chắc muốn xóa đơn hàng này?')) return;

    try {
        const { error } = await supabaseClient
            .from('orders')
            .delete()
            .eq('id', id);

        if (error) throw error;

        renderOrderTable();
    } catch (err) {
        alert('Lỗi khi xóa: ' + err.message);
    }
}

/* ============================================
   === CONNECTION STATUS & API MANAGEMENT ===
   ============================================ */

async function checkAllConnections() {
    // Check Supabase
    try {
        const { data, error } = await supabaseClient
            .from('settings')
            .select('count')
            .limit(1);

        const supabaseStatus = document.getElementById('supabase-status');
        if (!error) {
            supabaseStatus.innerHTML = '<i class="fas fa-check"></i> Connected';
            supabaseStatus.className = 'badge success';
        } else {
            supabaseStatus.innerHTML = '<i class="fas fa-times"></i> Error';
            supabaseStatus.className = 'badge error';
        }
    } catch (e) {
        document.getElementById('supabase-status').innerHTML = '<i class="fas fa-times"></i> Error';
    }

    // Check Groq API
    await updateApiStatusDisplay();
}

async function updateApiStatusDisplay() {
    const status = await window.SupabaseAPI.checkApiKeyStatus();
    const display = document.getElementById('api-status-display');
    const groqStatus = document.getElementById('groq-status');

    if (status.configured) {
        display.innerHTML = `<i class="fas fa-check-circle"></i> ${status.message}`;
        display.style.color = '#00b894';
        groqStatus.innerHTML = '<i class="fas fa-check"></i> Ready';
        groqStatus.className = 'badge success';
    } else {
        display.innerHTML = `<i class="fas fa-times-circle"></i> ${status.message}`;
        display.style.color = '#e74c3c';
        groqStatus.innerHTML = '<i class="fas fa-times"></i> Not Configured';
        groqStatus.className = 'badge error';
    }
}

async function saveApiKey() {
    const apiKey = document.getElementById('groq-api-key').value.trim();

    if (!apiKey) {
        alert('Vui lòng nhập API key!');
        return;
    }

    if (!apiKey.startsWith('gsk_')) {
        alert('API key Groq phải bắt đầu bằng "gsk_"');
        return;
    }

    try {
        await window.SupabaseAPI.saveGroqApiKey(apiKey);
        alert('✅ Đã lưu API key thành công!');
        document.getElementById('groq-api-key').value = '';
        await updateApiStatusDisplay();
    } catch (err) {
        alert('❌ Lỗi: ' + err.message);
    }
}

async function testApiConnection() {
    const btn = document.querySelector('.btn-test-api');
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Testing...';

    try {
        const response = await fetch(`${CONFIG.API_BASE_URL}/api/groq-chat`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                imageData: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==',
                systemPrompt: 'Test connection'
            })
        });

        if (response.ok) {
            alert('✅ Kết nối API thành công!');
        } else {
            const error = await response.json();
            throw new Error(error.message);
        }
    } catch (err) {
        alert('❌ Lỗi kết nối: ' + err.message);
    } finally {
        btn.innerHTML = '<i class="fas fa-vial"></i> Test';
    }
}

/* ============================================
   === NAVIGATION & UTILS ===
   ============================================ */
function showSection(sectionId) {
    document.querySelectorAll('main, section, .modal').forEach(el => el.classList.add('hidden'));
    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.remove('hidden');
        section.style.display = 'block';
    }

    const btnHome = document.getElementById('back-home-btn');
    if (btnHome) {
        if (sectionId === 'home-page') btnHome.classList.add('hidden');
        else btnHome.classList.remove('hidden');
    }

    if (sectionId === 'admin-dashboard') {
        setTimeout(() => {
            initAdminProductSelect();
            renderOrderTable();
            checkAllConnections();
        }, 100);
    }
}

function goHome() {
    window.location.href = 'index.html';
}

/* ============================================
   === CHECK ORDER ===
   ============================================ */
async function checkOrder() {
    const code = document.getElementById('order-search-input').value;
    if (code.length !== 8) { alert("Mã đơn phải có 8 số!"); return; }

    try {
        const { data: order, error } = await supabaseClient
            .from('orders')
            .select('*')
            .eq('id', code)
            .single();

        if (error || !order) {
            alert("Không tìm thấy đơn hàng!");
            return;
        }

        showSection('thank-you-page');
        document.getElementById('ty-title').innerText = order.title;
        document.getElementById('ty-content').innerText = order.content;

        const secretBox = document.getElementById('secret-message-box');
        const secretContent = document.getElementById('secret-message-content');

        if (order.secret_message && order.secret_message.trim() !== '') {
            secretBox.style.display = 'block';
            secretContent.innerText = order.secret_message;
        } else {
            secretBox.style.display = 'none';
        }

        const prodDiv = document.getElementById('ty-products');
        if (order.product_ids && order.product_ids.length > 0) {
            prodDiv.innerHTML = order.product_ids.map(pid => {
                const p = products.find(prod => prod.id == pid);
                return p ? `<div class="ty-product-item"><img src="${p.versions.xuan[0]?.url || 'https://via.placeholder.com/150'}" style="width:100%; border-radius:10px"><p>${p.name}</p></div>` : '';
            }).join('');
        } else {
            prodDiv.innerHTML = '<p>Không có sản phẩm</p>';
        }

        if (order.spotify) {
            document.getElementById('ty-spotify').innerHTML = `<iframe style="border-radius:12px" src="${order.spotify}" width="100%" height="152" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`;
        }

    } catch (err) {
        alert("Lỗi tra cứu: " + err.message);
    }
}

/* ============================================
   === EFFECTS ===
   ============================================ */
function renderSakura() {
    const container = document.getElementById('sakura-container');
    if (!container) return;

    setInterval(() => {
        const el = document.createElement('div');
        el.style.position = 'absolute';
        el.style.width = Math.random() * 10 + 5 + 'px';
        el.style.height = el.style.width;
        el.style.background = '#FFD1DC';
        el.style.borderRadius = '50% 0 50% 50%';
        el.style.left = Math.random() * 100 + 'vw';
        el.style.top = '-10px';
        el.style.opacity = Math.random();
        el.style.animation = `fall ${Math.random() * 5 + 5}s linear infinite`;
        container.appendChild(el);
        setTimeout(() => el.remove(), 10000);
    }, 300);

    const style = document.createElement('style');
    style.innerHTML = `@keyframes fall { to { transform: translateY(100vh) rotate(360deg); } }`;
    document.head.appendChild(style);
}

function initConstellation() {
    const canvas = document.getElementById('constellation');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];
    for (let i = 0; i < 40; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5
        });
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
        particles.forEach((p, index) => {
            p.x += p.vx;
            p.y += p.vy;
            if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
            if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
            ctx.beginPath();
            ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
            ctx.fill();

            for (let j = index + 1; j < particles.length; j++) {
                const p2 = particles[j];
                const dx = p.x - p2.x;
                const dy = p.y - p2.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 100) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(255,255,255,${0.2 * (1 - dist / 100)})`;
                    ctx.lineWidth = 1;
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.stroke();
                }
            }
        });
        requestAnimationFrame(animate);
    }
    animate();

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}