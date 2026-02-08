// ============================================
// TRANSLATIONS - Multi-language support
// ============================================

const translations = {
    // Vietnamese (Default)
    vi: {
        // Header
        'header.search.placeholder': 'Nhập mã đơn (8 số)',
        'header.search.button': 'Tra cứu',
        'header.backHome': 'Trang chủ',

        // Hero Section
        'hero.title': 'Tiệm Lưu Niệm Bốn Mùa',

        // Seasons
        'season.spring': 'Xuân Thì',
        'season.summer': 'Hạ Nồng',
        'season.autumn': 'Thu Phai',
        'season.winter': 'Đông Lạnh',
        'season.secret': 'Bí mật',

        // Products Section
        'products.title': 'Bộ Sưu Tập Ký Ức',
        'products.viewDetail': 'Xem chi tiết',

        // Product Details
        'product.1.name': 'Nón Lá Vẽ Tay',
        'product.1.material': 'Lá cọ, Tre, Màu acrylic',
        'product.1.method': 'Vẽ tay thủ công từng chiếc',
        'product.1.meaning': 'Biểu tượng văn hóa Việt Nam, che chở mưa nắng.',

        'product.2.name': 'Áo Dài Mini',
        'product.2.material': 'Lụa tơ tằm, Gấm',
        'product.2.method': 'May đo tỉ mỉ',
        'product.2.meaning': 'Tôn vinh nét đẹp dịu dàng của phụ nữ Việt.',

        'product.3.name': 'Gốm Bát Tràng',
        'product.3.material': 'Đất sét trắng',
        'product.3.method': 'Nung 1200 độ C',
        'product.3.meaning': 'Tinh hoa từ lòng đất.',

        'product.4.name': 'Tranh Đông Hồ',
        'product.4.material': 'Giấy Dó',
        'product.4.method': 'In khắc gỗ',
        'product.4.meaning': 'Lưu giữ hồn dân tộc.',

        'product.5.name': 'Chuồn Chuồn Tre',
        'product.5.material': 'Tre tự nhiên',
        'product.5.method': 'Thủ công',
        'product.5.meaning': 'Ký ức tuổi thơ.',

        'product.6.name': 'Quạt Thư Pháp',
        'product.6.material': 'Giấy, tre',
        'product.6.method': 'Viết thư pháp',
        'product.6.meaning': 'Gió mát lành.',
        // Vietnam Seasons Info
        'seasons.title': 'Hương Sắc Việt Nam',
        'seasons.spring.title': 'Mùa Xuân',
        'seasons.spring.desc': 'Đào phai khoe sắc, mưa phùn bay lất phất trên phố cổ Hà Nội. Mùa của sự khởi đầu mới mẻ.',
        'seasons.summer.title': 'Mùa Hạ',
        'seasons.summer.desc': 'Phượng vĩ đỏ rực góc trời, tiếng ve ngân vang gọi hè về. Biển xanh vẫy gọi.',
        'seasons.autumn.title': 'Mùa Thu',
        'seasons.autumn.desc': 'Hương cốm mới, lá vàng rơi xào xạc, mùa thu đẹp như một bản tình ca lãng mạn.',
        'seasons.winter.title': 'Mùa Đông',
        'seasons.winter.desc': 'Gió mùa đông bắc, bếp lửa hồng sưởi ấm những bàn tay lạnh. Sự tĩnh lặng đầy chất thơ.',

        // Footer
        'footer.copyright': '© 2026 Mùa Yêu Thương. All rights reserved.',
        'footer.admin': 'Khu Vực Quản Lý',

        // Product Modal
        'modal.material': 'Chất liệu:',
        'modal.method': 'Cách làm:',
        'modal.meaning': 'Ý nghĩa:',
        'modal.contact': 'Liên hệ đặt hàng ngay:',
        'modal.season.spring': 'Xuân',
        'modal.season.summer': 'Hạ',
        'modal.season.autumn': 'Thu',
        'modal.season.winter': 'Đông',

        // Password Modal
        'password.title': 'Nhập Mật Khẩu Bí Mật',
        'password.hint': 'Nhập mật khẩu để vào trang bí mật',
        'password.placeholder': 'Nhập mật khẩu...',
        'password.unlock': 'Mở Khóa',
        'password.close': 'Đóng',
        'password.error': 'Mật khẩu không chính xác!',
        'password.empty': 'Vui lòng nhập mật khẩu!',

        // Admin Login
        'admin.title': 'Cổng Quản Trị',
        'admin.placeholder': 'Mật khẩu bí mật...',
        'admin.login': 'Mở Cánh Cửa',
        'admin.close': 'Đóng',
        'admin.wrongPassword': 'Sai mật khẩu!',

        // Admin Dashboard
        'admin.dashboard.title': 'Quản Lý Đơn Hàng',
        'admin.form.title': 'Tạo / Sửa Đơn',
        'admin.form.orderId': 'Mã Đơn Hàng (8 số)',
        'admin.form.generateId': 'Tạo Mã',
        'admin.form.orderTitle': 'Tiêu đề lời chúc',
        'admin.form.content': 'Nội dung lời chúc',
        'admin.form.secretMessage': 'Lời nhắn bí mật (chỉ người nhận đơn hàng xem được)',
        'admin.form.spotify': 'Link nhạc Spotify (Embed)',
        'admin.form.addProduct': 'Thêm sản phẩm vào đơn',
        'admin.form.addButton': 'Thêm',
        'admin.form.selectedProducts': 'Sản phẩm đã chọn (Bấm X để xóa):',
        'admin.form.noProducts': 'Chưa có sản phẩm nào',
        'admin.form.connectionStatus': 'Trạng Thái Kết Nối',
        'admin.form.apiConfig': 'Cấu Hình Groq API Key',
        'admin.form.save': 'Lưu',
        'admin.form.test': 'Test',
        'admin.form.seasonPasswords': 'Mật Khẩu Bí Mật Theo Mùa',
        'admin.form.generatePasswords': 'Tạo 4 Mật Khẩu Cho Các Mùa',
        'admin.form.saveOrder': 'Lưu Đơn Hàng',
        'admin.form.clear': 'Làm Mới',
        'admin.list.title': 'Danh Sách Đơn (Từ Supabase)',
        'admin.list.print': 'In Danh Sách',
        'admin.list.orderId': 'Mã Đơn',
        'admin.list.title2': 'Tiêu đề',
        'admin.list.passwords': 'Mật khẩu các mùa & QR',
        'admin.list.actions': 'Thao tác',
        'admin.list.edit': 'Sửa',
        'admin.list.delete': 'Xóa',
        'admin.list.noOrders': 'Chưa có đơn hàng nào',

        // Thank You Page
        'thankyou.products': 'Sản phẩm bạn đã chọn',
        'thankyou.secretMessage': 'Lời Nhắn Bí Mật',
        'thankyou.noProducts': 'Không có sản phẩm',

        // Alerts
        'alert.orderNotFound': 'Không tìm thấy đơn hàng!',
        'alert.orderCodeLength': 'Mã đơn phải có 8 số!',
        'alert.selectProduct': 'Vui lòng chọn sản phẩm!',
        'alert.productExists': 'Sản phẩm này đã có trong đơn!',
        'alert.passwordsGenerated': 'Đã tạo 4 mật khẩu cho các mùa!',
        'alert.orderSaved': 'Đã lưu đơn hàng thành công!',
        'alert.deleteConfirm': 'Bạn có chắc muốn xóa đơn hàng này?',
    },

    // English
    en: {
        // Header
        'header.search.placeholder': 'Enter order code (8 digits)',
        'header.search.button': 'Search',
        'header.backHome': 'Home',

        // Hero Section
        'hero.title': 'Four Seasons Souvenir Shop',

        // Seasons
        'season.spring': 'Spring',
        'season.summer': 'Summer',
        'season.autumn': 'Autumn',
        'season.winter': 'Winter',
        'season.secret': 'Secret',

        // Products Section
        'products.title': 'Memory Collection',
        'products.viewDetail': 'View details',

        // Product Details
        'product.1.name': 'Hand-Painted Conical Hat',
        'product.1.material': 'Palm leaves, Bamboo, Acrylic paint',
        'product.1.method': 'Hand-painted individually',
        'product.1.meaning': 'Symbol of Vietnamese culture, protection from sun and rain.',

        'product.2.name': 'Mini Ao Dai',
        'product.2.material': 'Silk, Brocade',
        'product.2.method': 'Meticulously tailored',
        'product.2.meaning': 'Honors the gentle beauty of Vietnamese women.',

        'product.3.name': 'Bat Trang Ceramics',
        'product.3.material': 'White clay',
        'product.3.method': 'Fired at 1200°C',
        'product.3.meaning': 'Essence from the earth.',

        'product.4.name': 'Dong Ho Painting',
        'product.4.material': 'Do paper',
        'product.4.method': 'Woodblock printing',
        'product.4.meaning': 'Preserving the soul of the nation.',

        'product.5.name': 'Bamboo Dragonfly',
        'product.5.material': 'Natural bamboo',
        'product.5.method': 'Handcrafted',
        'product.5.meaning': 'Childhood memories.',

        'product.6.name': 'Calligraphy Fan',
        'product.6.material': 'Paper, bamboo',
        'product.6.method': 'Calligraphy writing',
        'product.6.meaning': 'Cool breeze.',
        // Vietnam Seasons Info
        'seasons.title': 'Vietnamese Seasons',
        'seasons.spring.title': 'Spring',
        'seasons.spring.desc': 'Peach blossoms bloom, drizzle falls gently on Hanoi\'s old streets. The season of fresh beginnings.',
        'seasons.summer.title': 'Summer',
        'seasons.summer.desc': 'Flamboyant flowers blaze red, cicadas sing summer\'s arrival. The blue sea beckons.',
        'seasons.autumn.title': 'Autumn',
        'seasons.autumn.desc': 'Fresh rice fragrance, golden leaves rustle, autumn is beautiful like a romantic ballad.',
        'seasons.winter.title': 'Winter',
        'seasons.winter.desc': 'Northeast monsoon winds, warm fires comfort cold hands. Poetic tranquility.',

        // Footer
        'footer.copyright': '© 2026 Season of Love. All rights reserved.',
        'footer.admin': 'Admin Area',

        // Product Modal
        'modal.material': 'Material:',
        'modal.method': 'Method:',
        'modal.meaning': 'Meaning:',
        'modal.contact': 'Contact to order now:',
        'modal.season.spring': 'Spring',
        'modal.season.summer': 'Summer',
        'modal.season.autumn': 'Autumn',
        'modal.season.winter': 'Winter',

        // Password Modal
        'password.title': 'Enter Secret Password',
        'password.hint': 'Enter password to access secret page',
        'password.placeholder': 'Enter password...',
        'password.unlock': 'Unlock',
        'password.close': 'Close',
        'password.error': 'Incorrect password!',
        'password.empty': 'Please enter password!',

        // Admin Login
        'admin.title': 'Admin Portal',
        'admin.placeholder': 'Secret password...',
        'admin.login': 'Open Door',
        'admin.close': 'Close',
        'admin.wrongPassword': 'Wrong password!',

        // Admin Dashboard
        'admin.dashboard.title': 'Order Management',
        'admin.form.title': 'Create / Edit Order',
        'admin.form.orderId': 'Order ID (8 digits)',
        'admin.form.generateId': 'Generate',
        'admin.form.orderTitle': 'Greeting title',
        'admin.form.content': 'Greeting content',
        'admin.form.secretMessage': 'Secret message (only recipient can see)',
        'admin.form.spotify': 'Spotify music link (Embed)',
        'admin.form.addProduct': 'Add product to order',
        'admin.form.addButton': 'Add',
        'admin.form.selectedProducts': 'Selected products (Click X to remove):',
        'admin.form.noProducts': 'No products yet',
        'admin.form.connectionStatus': 'Connection Status',
        'admin.form.apiConfig': 'Groq API Key Configuration',
        'admin.form.save': 'Save',
        'admin.form.test': 'Test',
        'admin.form.seasonPasswords': 'Season Secret Passwords',
        'admin.form.generatePasswords': 'Generate 4 Season Passwords',
        'admin.form.saveOrder': 'Save Order',
        'admin.form.clear': 'Clear',
        'admin.list.title': 'Order List (From Supabase)',
        'admin.list.print': 'Print List',
        'admin.list.orderId': 'Order ID',
        'admin.list.title2': 'Title',
        'admin.list.passwords': 'Season passwords & QR',
        'admin.list.actions': 'Actions',
        'admin.list.edit': 'Edit',
        'admin.list.delete': 'Delete',
        'admin.list.noOrders': 'No orders yet',

        // Thank You Page
        'thankyou.products': 'Your selected products',
        'thankyou.secretMessage': 'Secret Message',
        'thankyou.noProducts': 'No products',

        // Alerts
        'alert.orderNotFound': 'Order not found!',
        'alert.orderCodeLength': 'Order code must be 8 digits!',
        'alert.selectProduct': 'Please select a product!',
        'alert.productExists': 'This product is already in the order!',
        'alert.passwordsGenerated': '4 season passwords generated!',
        'alert.orderSaved': 'Order saved successfully!',
        'alert.deleteConfirm': 'Are you sure you want to delete this order?',
    },

    // Japanese
    ja: {
        // Header
        'header.search.placeholder': '注文コードを入力（8桁）',
        'header.search.button': '検索',
        'header.backHome': 'ホーム',

        // Hero Section
        'hero.title': '四季の思い出ショップ',

        // Seasons
        'season.spring': '春',
        'season.summer': '夏',
        'season.autumn': '秋',
        'season.winter': '冬',
        'season.secret': '秘密',

        // Products Section
        'products.title': '思い出コレクション',
        'products.viewDetail': '詳細を見る',

        // Product Details
        'product.1.name': '手描きノンラー（笠帽子）',
        'product.1.material': 'ヤシの葉、竹、アクリル絵の具',
        'product.1.method': '一つ一つ手描き',
        'product.1.meaning': 'ベトナム文化の象徴、日差しと雨から守る。',

        'product.2.name': 'ミニアオザイ',
        'product.2.material': 'シルク、錦',
        'product.2.method': '丁寧に仕立てられた',
        'product.2.meaning': 'ベトナム女性の優しい美しさを称える。',

        'product.3.name': 'バッチャン焼',
        'product.3.material': '白土',
        'product.3.method': '1200度で焼成',
        'product.3.meaning': '大地からの精髄。',

        'product.4.name': 'ドンホー絵画',
        'product.4.material': 'ゾー紙',
        'product.4.method': '木版画',
        'product.4.meaning': '民族の魂を保存する。',

        'product.5.name': '竹トンボ',
        'product.5.material': '天然竹',
        'product.5.method': '手作り',
        'product.5.meaning': '子供時代の思い出。',

        'product.6.name': '書道扇子',
        'product.6.material': '紙、竹',
        'product.6.method': '書道',
        'product.6.meaning': '涼しい風。',
        // Vietnam Seasons Info
        'seasons.title': 'ベトナムの四季',
        'seasons.spring.title': '春',
        'seasons.spring.desc': '桃の花が咲き、ハノイの旧市街に霧雨が降る。新しい始まりの季節。',
        'seasons.summer.title': '夏',
        'seasons.summer.desc': '鳳凰木が真っ赤に燃え、蝉の声が夏の到来を告げる。青い海が手招きする。',
        'seasons.autumn.title': '秋',
        'seasons.autumn.desc': '新米の香り、黄色い葉がさらさらと落ちる、秋はロマンチックなバラードのように美しい。',
        'seasons.winter.title': '冬',
        'seasons.winter.desc': '北東モンスーンの風、暖かい火が冷たい手を温める。詩的な静けさ。',

        // Footer
        'footer.copyright': '© 2026 愛の季節。全著作権所有。',
        'footer.admin': '管理エリア',

        // Product Modal
        'modal.material': '素材：',
        'modal.method': '製法：',
        'modal.meaning': '意味：',
        'modal.contact': '今すぐ注文：',
        'modal.season.spring': '春',
        'modal.season.summer': '夏',
        'modal.season.autumn': '秋',
        'modal.season.winter': '冬',

        // Password Modal
        'password.title': '秘密のパスワードを入力',
        'password.hint': '秘密ページにアクセスするにはパスワードを入力してください',
        'password.placeholder': 'パスワードを入力...',
        'password.unlock': 'ロック解除',
        'password.close': '閉じる',
        'password.error': 'パスワードが正しくありません！',
        'password.empty': 'パスワードを入力してください！',

        // Admin Login
        'admin.title': '管理ポータル',
        'admin.placeholder': '秘密のパスワード...',
        'admin.login': 'ドアを開く',
        'admin.close': '閉じる',
        'admin.wrongPassword': 'パスワードが間違っています！',

        // Admin Dashboard
        'admin.dashboard.title': '注文管理',
        'admin.form.title': '注文の作成/編集',
        'admin.form.orderId': '注文ID（8桁）',
        'admin.form.generateId': '生成',
        'admin.form.orderTitle': '挨拶のタイトル',
        'admin.form.content': '挨拶の内容',
        'admin.form.secretMessage': '秘密のメッセージ（受取人のみ閲覧可能）',
        'admin.form.spotify': 'Spotify音楽リンク（埋め込み）',
        'admin.form.addProduct': '注文に商品を追加',
        'admin.form.addButton': '追加',
        'admin.form.selectedProducts': '選択された商品（Xをクリックして削除）：',
        'admin.form.noProducts': 'まだ商品がありません',
        'admin.form.connectionStatus': '接続状態',
        'admin.form.apiConfig': 'Groq APIキー設定',
        'admin.form.save': '保存',
        'admin.form.test': 'テスト',
        'admin.form.seasonPasswords': '季節の秘密パスワード',
        'admin.form.generatePasswords': '4つの季節パスワードを生成',
        'admin.form.saveOrder': '注文を保存',
        'admin.form.clear': 'クリア',
        'admin.list.title': '注文リスト（Supabaseから）',
        'admin.list.print': 'リストを印刷',
        'admin.list.orderId': '注文ID',
        'admin.list.title2': 'タイトル',
        'admin.list.passwords': '季節のパスワードとQR',
        'admin.list.actions': 'アクション',
        'admin.list.edit': '編集',
        'admin.list.delete': '削除',
        'admin.list.noOrders': 'まだ注文がありません',

        // Thank You Page
        'thankyou.products': '選択された商品',
        'thankyou.secretMessage': '秘密のメッセージ',
        'thankyou.noProducts': '商品がありません',

        // Alerts
        'alert.orderNotFound': '注文が見つかりません！',
        'alert.orderCodeLength': '注文コードは8桁である必要があります！',
        'alert.selectProduct': '商品を選択してください！',
        'alert.productExists': 'この商品はすでに注文に含まれています！',
        'alert.passwordsGenerated': '4つの季節パスワードが生成されました！',
        'alert.orderSaved': '注文が正常に保存されました！',
        'alert.deleteConfirm': 'この注文を削除してもよろしいですか？',
    }
};

// Current language (default: Vietnamese)
let currentLanguage = localStorage.getItem('language') || 'vi';

// Get translation
function t(key) {
    return translations[currentLanguage][key] || translations['vi'][key] || key;
}

// Change language
function changeLanguage(lang) {
    if (!translations[lang]) {
        console.error('Language not supported:', lang);
        return;
    }

    currentLanguage = lang;
    localStorage.setItem('language', lang);
    updatePageContent();

    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-lang="${lang}"]`)?.classList.add('active');
}

// Update all page content
function updatePageContent() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = t(key);

        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            element.placeholder = translation;
        } else {
            element.textContent = translation;
        }
    });

    // Update HTML lang attribute
    document.documentElement.lang = currentLanguage;

    // Refresh product list if exists
    if (typeof initProducts === 'function') {
        initProducts();
    }
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function () {
    updatePageContent();
});
