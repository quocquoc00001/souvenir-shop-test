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

        // Spring Page
        'spring.title': 'MÙA XUÂN VIỆT NAM',
        'spring.subtitle': 'Mùa của sự khởi đầu, hy vọng và tươi mới',
        'spring.backHome': 'Quay lại trang chủ',
        'spring.poem.title': 'Thơ Xuân',
        'spring.poem.line1': 'Hoa đào nở rộ khoe sắc thắm',
        'spring.poem.line2': 'Mưa phùn gió bấc se lòng',
        'spring.poem.line3': 'Xuân về mang đến hy vọng',
        'spring.poem.line4': 'Khởi đầu một năm an vui',
        'spring.weather.title': 'Thời tiết & Khí hậu',
        'spring.weather.desc': 'Mùa xuân miền Bắc ấm áp với nhiệt độ 15-22°C. Mưa phùn nhẹ, không khí ẩm ướt. Hoa đào, hoa mai nở rộ báo hiệu Tết đến.',
        'spring.culture.title': 'Văn hóa Tết',
        'spring.culture.desc': 'Tết Nguyên Đán là dịp lễ quan trọng nhất. Người Việt dọn dẹp nhà cửa, thờ cúng tổ tiên, mặc áo dài mới, và chúc Tết nhau.',
        'spring.food.title': 'Ẩm thực Xuân',
        'spring.food.desc': 'Bánh chưng, bánh tét, thịt kho tàu, dưa hành, mứt Tết đầy màu sắc. Mâm cỗ Tết thể hiện sự sum vầy của gia đình.',

        // Summer Page
        'summer.title': 'MÙA HẠ VIỆT NAM',
        'summer.subtitle': 'Mùa của nắng gắt, biển xanh và tiếng ve sầu',
        'summer.backHome': 'Quay lại trang chủ',
        'summer.poem.title': 'Thơ Hạ',
        'summer.poem.line1': 'Phượng vĩ đỏ rực góc trời',
        'summer.poem.line2': 'Tiếng ve ngân vang gọi hè về',
        'summer.poem.line3': 'Biển xanh vẫy gọi du khách',
        'summer.poem.line4': 'Mùa hạ nồng nàn khó phai',
        'summer.weather.title': 'Thời tiết & Biển',
        'summer.weather.desc': 'Nhiệt độ 32-38°C, nắng gắt quanh năm. Biển xanh ngắt, cát trắng mịn. Lý tưởng cho kỳ nghỉ mát.',
        'summer.landscape.title': 'Cảnh quan',
        'summer.landscape.desc': 'Phượng vĩ đỏ rực, bàng xanh mát, tiếng ve râm ran cả ngày.',
        'summer.festival.title': 'Lễ hội',
        'summer.festival.desc': 'Tắm biển, cắm trại, du lịch đảo.',

        // Autumn Page
        'autumn.title': 'MÙA THU VIỆT NAM',
        'autumn.subtitle': 'Mùa của nỗi nhớ, lá vàng và tình yêu',
        'autumn.backHome': 'Quay lại trang chủ',
        'autumn.poem.title': 'Thơ Thu',
        'autumn.poem.line1': 'Hương cốm mới thoang thoảng bay',
        'autumn.poem.line2': 'Lá vàng rơi xào xạc ngoài hiên',
        'autumn.poem.line3': 'Thu sầu là nỗi nhớ ai',
        'autumn.poem.line4': 'Đẹp tựa bản tình ca buồn',
        'autumn.weather.title': 'Thời tiết & Khí hậu',
        'autumn.weather.desc': 'Mùa thu Hà Nội 20-28°C, gió mát, trời trong. Lá vàng rơi đầy phố cổ.',
        'autumn.specialty.title': 'Đặc sản',
        'autumn.specialty.desc': 'Cốm làng Vòng dẻo thơm, chả cốm, bánh cốm.',
        'autumn.festival.title': 'Lễ hội',
        'autumn.festival.desc': 'Phá cỗ trăng rằm, rước đèn ông sao.',

        // Winter Page
        'winter.title': 'MÙA ĐÔNG VIỆT NAM',
        'winter.subtitle': 'Mùa của gió lạnh, bếp lửa và kỷ niệm ấm áp',
        'winter.backHome': 'Quay lại trang chủ',
        'winter.poem.title': 'Thơ Đông',
        'winter.poem.line1': 'Gió mùa đông bắc se lạnh',
        'winter.poem.line2': 'Bếp lửa hồng sưởi ấm tay',
        'winter.poem.line3': 'Đông vĩnh cửu là ký ức',
        'winter.poem.line4': 'Đóng băng thời gian yêu thương',
        'winter.weather.title': 'Thời tiết & Khí hậu',
        'winter.weather.desc': 'Miền Bắc 10-20°C, có khi dưới 10°C. Gió mùa đông bắc se lạnh. Sương muối phủ trắng đồng.',
        'winter.warmth.title': 'Ấm áp',
        'winter.warmth.desc': 'Bếp lửa hồng, nướng khoai, nướng ngô. Quây quần bên gia đình.',
        'winter.festival.title': 'Lễ hội',
        'winter.festival.desc': 'Chuẩn bị đón năm mới, sắm sửa Tết.',
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

        // Spring Page
        'spring.title': 'VIETNAMESE SPRING',
        'spring.subtitle': 'Season of new beginnings, hope and freshness',
        'spring.backHome': 'Back to home',
        'spring.poem.title': 'Spring Poem',
        'spring.poem.line1': 'Peach blossoms bloom in vibrant pink',
        'spring.poem.line2': 'Drizzle and northern winds touch the heart',
        'spring.poem.line3': 'Spring brings hope',
        'spring.poem.line4': 'Beginning a peaceful and joyful year',
        'spring.weather.title': 'Weather & Climate',
        'spring.weather.desc': 'Northern spring is warm with temperatures of 15-22°C. Light drizzle, humid air. Peach and apricot blossoms bloom, heralding Tet.',
        'spring.culture.title': 'Tet Culture',
        'spring.culture.desc': 'Lunar New Year is the most important holiday. Vietnamese clean their homes, worship ancestors, wear new ao dai, and exchange New Year greetings.',
        'spring.food.title': 'Spring Cuisine',
        'spring.food.desc': 'Banh chung, banh tet, braised pork, pickled onions, colorful Tet candies. The Tet feast represents family reunion.',

        // Summer Page
        'summer.title': 'VIETNAMESE SUMMER',
        'summer.subtitle': 'Season of scorching sun, blue sea and cicada songs',
        'summer.backHome': 'Back to home',
        'summer.poem.title': 'Summer Poem',
        'summer.poem.line1': 'Flamboyant flowers blaze red in the sky',
        'summer.poem.line2': 'Cicadas sing, calling summer home',
        'summer.poem.line3': 'The blue sea beckons travelers',
        'summer.poem.line4': 'Passionate summer, hard to fade',
        'summer.weather.title': 'Weather & Sea',
        'summer.weather.desc': 'Temperature 32-38°C, intense sun year-round. Crystal blue sea, fine white sand. Ideal for vacation.',
        'summer.landscape.title': 'Landscape',
        'summer.landscape.desc': 'Blazing red flamboyant trees, cool almond trees, cicadas buzzing all day.',
        'summer.festival.title': 'Festivals',
        'summer.festival.desc': 'Beach swimming, camping, island tourism.',

        // Autumn Page
        'autumn.title': 'VIETNAMESE AUTUMN',
        'autumn.subtitle': 'Season of nostalgia, golden leaves and love',
        'autumn.backHome': 'Back to home',
        'autumn.poem.title': 'Autumn Poem',
        'autumn.poem.line1': 'Fresh rice fragrance drifts through the air',
        'autumn.poem.line2': 'Golden leaves rustle on the porch',
        'autumn.poem.line3': 'Autumn melancholy is longing for someone',
        'autumn.poem.line4': 'Beautiful like a sad love song',
        'autumn.weather.title': 'Weather & Climate',
        'autumn.weather.desc': 'Hanoi autumn 20-28°C, cool breeze, clear sky. Golden leaves cover the old streets.',
        'autumn.specialty.title': 'Specialty',
        'autumn.specialty.desc': 'Fragrant sticky Vong village rice, rice cakes.',
        'autumn.festival.title': 'Festivals',
        'autumn.festival.desc': 'Mid-Autumn feast, star lantern parade.',

        // Winter Page
        'winter.title': 'VIETNAMESE WINTER',
        'winter.subtitle': 'Season of cold wind, warm fires and cozy memories',
        'winter.backHome': 'Back to home',
        'winter.poem.title': 'Winter Poem',
        'winter.poem.line1': 'Northeast monsoon winds blow cold',
        'winter.poem.line2': 'Red fire warms the hands',
        'winter.poem.line3': 'Winter eternal is memory',
        'winter.poem.line4': 'Freezing time of love',
        'winter.weather.title': 'Weather & Climate',
        'winter.weather.desc': 'Northern region 10-20°C, sometimes below 10°C. Cold northeast monsoon. Frost covers the fields white.',
        'winter.warmth.title': 'Warmth',
        'winter.warmth.desc': 'Red fire, roasted sweet potato, roasted corn. Gathering with family.',
        'winter.festival.title': 'Festivals',
        'winter.festival.desc': 'Preparing for New Year, Tet shopping.',
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

        // Spring Page
        'spring.title': 'ベトナムの春',
        'spring.subtitle': '新しい始まり、希望、新鮮さの季節',
        'spring.backHome': 'ホームに戻る',
        'spring.poem.title': '春の詩',
        'spring.poem.line1': '桃の花が鮮やかなピンクに咲く',
        'spring.poem.line2': '霧雨と北風が心に触れる',
        'spring.poem.line3': '春は希望をもたらす',
        'spring.poem.line4': '平和で喜びに満ちた一年の始まり',
        'spring.weather.title': '天気と気候',
        'spring.weather.desc': '北部の春は15-22°Cの暖かさ。軽い霧雨、湿った空気。桃と杏の花が咲き、テトを告げる。',
        'spring.culture.title': 'テト文化',
        'spring.culture.desc': '旧正月は最も重要な祝日。ベトナム人は家を掃除し、先祖を祀り、新しいアオザイを着て、新年の挨拶を交わす。',
        'spring.food.title': '春の料理',
        'spring.food.desc': 'バインチュン、バインテト、豚の角煮、ピクルス玉ねぎ、カラフルなテトキャンディー。テトの宴は家族の再会を表す。',

        // Summer Page
        'summer.title': 'ベトナムの夏',
        'summer.subtitle': '灼熱の太陽、青い海、蝉の声の季節',
        'summer.backHome': 'ホームに戻る',
        'summer.poem.title': '夏の詩',
        'summer.poem.line1': '鳳凰木が空に真っ赤に燃える',
        'summer.poem.line2': '蝉が鳴き、夏を呼ぶ',
        'summer.poem.line3': '青い海が旅人を招く',
        'summer.poem.line4': '情熱的な夏、消えにくい',
        'summer.weather.title': '天気と海',
        'summer.weather.desc': '気温32-38°C、一年中強い日差し。透き通った青い海、細かい白い砂。休暇に最適。',
        'summer.landscape.title': '景観',
        'summer.landscape.desc': '真っ赤な鳳凰木、涼しいアーモンドの木、一日中蝉が鳴く。',
        'summer.festival.title': '祭り',
        'summer.festival.desc': '海水浴、キャンプ、島観光。',

        // Autumn Page
        'autumn.title': 'ベトナムの秋',
        'autumn.subtitle': '郷愁、黄金の葉、愛の季節',
        'autumn.backHome': 'ホームに戻る',
        'autumn.poem.title': '秋の詩',
        'autumn.poem.line1': '新米の香りが空気に漂う',
        'autumn.poem.line2': '黄金の葉がポーチでさらさらと鳴る',
        'autumn.poem.line3': '秋の憂鬱は誰かへの憧れ',
        'autumn.poem.line4': '悲しい恋の歌のように美しい',
        'autumn.weather.title': '天気と気候',
        'autumn.weather.desc': 'ハノイの秋20-28°C、涼しい風、澄んだ空。黄金の葉が旧市街を覆う。',
        'autumn.specialty.title': '特産品',
        'autumn.specialty.desc': '香ばしいヴォン村のもち米、ライスケーキ。',
        'autumn.festival.title': '祭り',
        'autumn.festival.desc': '中秋の宴、星のランタンパレード。',

        // Winter Page
        'winter.title': 'ベトナムの冬',
        'winter.subtitle': '冷たい風、暖かい火、居心地の良い思い出の季節',
        'winter.backHome': 'ホームに戻る',
        'winter.poem.title': '冬の詩',
        'winter.poem.line1': '北東モンスーンの風が冷たく吹く',
        'winter.poem.line2': '赤い火が手を温める',
        'winter.poem.line3': '永遠の冬は記憶',
        'winter.poem.line4': '愛の時間を凍らせる',
        'winter.weather.title': '天気と気候',
        'winter.weather.desc': '北部地域10-20°C、時には10°C以下。冷たい北東モンスーン。霜が野原を白く覆う。',
        'winter.warmth.title': '暖かさ',
        'winter.warmth.desc': '赤い火、焼き芋、焼きとうもろこし。家族と集まる。',
        'winter.festival.title': '祭り',
        'winter.festival.desc': '新年の準備、テトの買い物。',
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
