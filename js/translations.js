// ============================================
// TRANSLATIONS - Multi-language support
// ============================================

const translations = {
    // Vietnamese (Default)
    vi: {
        // Header
        'header.search.placeholder': 'Nhập mã đơn (4 số)',
        'header.search.button': 'Tra cứu',
        'header.backHome': 'Trang chủ',

        // Hero Section
        'hero.title': 'Góc Quà Nhỏ Niềm Vui Đong Đầy',

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
        'product.1.name': 'Bưu Thiếp',
        'product.1.material': 'Lá cọ, Tre, Màu acrylic',
        'product.1.method': 'Vẽ tay thủ công từng chiếc',
        'product.1.meaning': 'Biểu tượng văn hóa Việt Nam, che chở mưa nắng.',

        'product.2.name': 'Thẻ Đánh Dấu Trang',
        'product.2.material': 'Lụa tơ tằm, Gấm',
        'product.2.method': 'May đo tỉ mỉ',
        'product.2.meaning': 'Tôn vinh nét đẹp dịu dàng của phụ nữ Việt.',

        'product.3.name': 'Sổ Tay',
        'product.3.material': 'Đất sét trắng',
        'product.3.method': 'Nung 1200 độ C',
        'product.3.meaning': 'Tinh hoa từ lòng đất.',

        'product.4.name': 'Combo Bưu Thiếp',
        'product.4.material': 'Giấy Dó',
        'product.4.method': 'In khắc gỗ',
        'product.4.meaning': 'Lưu giữ hồn dân tộc.',

        'product.5.name': 'Combo Thẻ Đánh Dấu Trang',
        'product.5.material': 'Tre tự nhiên',
        'product.5.method': 'Thủ công',
        'product.5.meaning': 'Ký ức tuổi thơ.',

        'product.6.name': 'Combo Sổ Tay',
        'product.6.material': 'Giấy, tre',
        'product.6.method': 'Viết thư pháp',
        'product.6.meaning': 'Gió mát lành.',

        'product.7.name': 'Set Quà Bốn Mùa',
        'product.7.material': 'Lụa, tre, giấy',
        'product.7.method': 'Thủ công truyền thống',
        'product.7.meaning': 'Ánh sáng hy vọng, sum vầy.',
        // Vietnam Seasons Info
        'seasons.title': 'Hương Sắc Việt Nam',
        'seasons.tab.spring': 'Mùa Xuân 🌸',
        'seasons.tab.summer': 'Mùa Hạ ☀️',
        'seasons.tab.autumn': 'Mùa Thu 🍂',
        'seasons.tab.winter': 'Mùa Đông ❄️',
        'seasons.region.north': 'Miền Bắc',
        'seasons.region.central': 'Miền Trung',
        'seasons.region.south': 'Miền Nam',

        // Xuân
        'seasons.spring.title': 'Mùa Xuân',
        'seasons.spring.north.title': 'Xuân Miền Bắc',
        'seasons.spring.north.desc': 'Đào phai rực rỡ, mưa phùn bay nhẹ trên phố cổ Hà Nội. Tết đến mang theo tiếng pháo, mùi hương trầm và hoa đào nở muộn trên những con phố cổ kính.',
        'seasons.spring.central.title': 'Xuân Miền Trung',
        'seasons.spring.central.desc': 'Cố đô Huế thơ mộng trong sắc mai vàng rực rỡ. Lễ hội xuân tưng bừng, áo dài thướt tha trên cầu Tràng Tiền, hương nhang bay trong gió xuân dịu nhẹ.',
        'seasons.spring.south.title': 'Xuân Miền Nam',
        'seasons.spring.south.desc': 'Nắng ấm quanh năm, Tết miền Nam tràn ngập màu sắc của hoa mai vàng và chợ hoa Nguyễn Huệ. Không khí Sài Gòn nhộn nhịp, rộn ràng tiếng cười sum họp.',

        // Hạ
        'seasons.summer.title': 'Mùa Hạ',
        'seasons.summer.north.title': 'Hạ Miền Bắc',
        'seasons.summer.north.desc': 'Phượng vĩ đỏ rực sân trường Hà Nội, tiếng ve kêu inh ỏi báo hè về. Hồ Tây gợn sóng, sen hồng nở muộn phảng phất mùi thơm trong buổi sớm mát lành.',
        'seasons.summer.central.title': 'Hạ Miền Trung',
        'seasons.summer.central.desc': 'Biển Đà Nẵng xanh trong, cát trắng nắng vàng rực rỡ. Lăng Cô huyền ảo, bãi biển Mỹ Khê thu hút du khách bốn phương trong những ngày hè oi ả.',
        'seasons.summer.south.title': 'Hạ Miền Nam',
        'seasons.summer.south.desc': 'Mưa chiều đổ xuống Sài Gòn rồi tạnh ngay, đường phố như được gội sạch. Mù U nở vàng ven sông Đồng Nai, vùng sông nước Cửu Long tràn đầy sức sống mùa lũ.',

        // Thu
        'seasons.autumn.title': 'Mùa Thu',
        'seasons.autumn.north.title': 'Thu Miền Bắc',
        'seasons.autumn.north.desc': 'Hà Nội vào thu se lạnh, hương hoa sữa len lỏi từng ngõ nhỏ. Cơm nắm cốm làng Vòng thơm dẻo, lá cây Phan Đình Phùng vàng rực trải thảm êm đềm.',
        'seasons.autumn.central.title': 'Thu Miền Trung',
        'seasons.autumn.central.desc': 'Hội An bình yên trong nắng thu vàng mật, đèn lồng lung linh soi bóng sông Hoài. Ruộng lúa Quảng Nam vàng ươm gợi lên vẻ đẹp thanh bình, trữ tình.',
        'seasons.autumn.south.title': 'Thu Miền Nam',
        'seasons.autumn.south.desc': 'Miền Nam không có mùa thu lá đỏ nhưng trời trong xanh hơn, gió mát hơn. Bưởi Năm Roi, xoài cát Hòa Lộc chín vàng ươm, mùa trái ngọt của vùng đồng bằng châu thổ.',

        // Đông
        'seasons.winter.title': 'Mùa Đông',
        'seasons.winter.north.title': 'Đông Miền Bắc',
        'seasons.winter.north.desc': 'Gió mùa đông bắc thổi lạnh buốt qua Hà Nội, sương giăng mờ ảo núi Sapa. Bếp lửa hồng sưởi ấm cả gia đình, phở nóng bốc khói nghi ngút trong buổi sáng đông.',
        'seasons.winter.central.title': 'Đông Miền Trung',
        'seasons.winter.central.desc': 'Mưa dầm dai dẳng trên xứ Huế, phố Hội An lặng yên trong màn mưa bao phủ. Bếp than hong bánh tráng, tô bún bò Huế nóng hổi xua tan giá rét ngày đông.',
        'seasons.winter.south.title': 'Đông Miền Nam',
        'seasons.winter.south.desc': 'Mùa khô miền Nam nắng ấm dịu dàng, không khí trong lành và mát mẻ. Hoa dã quỳ vàng rực Tây Nguyên, ruộng muối Cà Ná trắng xóa dưới bầu trời xanh thẳm.',

        // Highlight labels
        'seasons.highlight.food': 'Ẩm thực',
        'seasons.highlight.landmark': 'Danh thắng',
        'seasons.highlight.activity': 'Trải nghiệm',

        // Spring highlights
        'seasons.spring.north.food': 'Phở Hà Nội nóng hổi, bánh cuốn Thanh Trì, xôi lá cẩm ngày Tết',
        'seasons.spring.north.landmark': 'Hồ Hoàn Kiếm, Văn Miếu Quốc Tử Giám, phố cổ 36 phố phường',
        'seasons.spring.north.activity': 'Lễ hội hoa đào Nhật Tân, đi chợ hoa Tết, khám phá làng Đường Lâm',
        'seasons.spring.central.food': 'Bún bò Huế đậm đà, bánh bèo xứ Huế, bánh khoái Đông Ba',
        'seasons.spring.central.landmark': 'Đại Nội Huế, sông Hương thơ mộng, cầu Tràng Tiền lung linh',
        'seasons.spring.central.activity': 'Thả đèn hoa đăng sông Hương, mặc áo dài chụp ảnh, Festival Huế',
        'seasons.spring.south.food': 'Bánh tét miền Nam, mứt gừng cay nồng, chè trôi nước ngày Tết',
        'seasons.spring.south.landmark': 'Chợ hoa Nguyễn Huệ, Chùa Bà Thiên Hậu, đường hoa Tết Sài Gòn',
        'seasons.spring.south.activity': 'Du xuân miền Tây sông nước, lễ hội chùa Tết, tham quan vườn mai',

        // Summer highlights
        'seasons.summer.north.food': 'Bún thang Hà Nội, chả cá Lã Vọng, cốm xanh làng Vòng đầu mùa',
        'seasons.summer.north.landmark': 'Hồ Tây sen nở, Hồ Gươm buổi sáng, Ba Vì mát lành mùa hè',
        'seasons.summer.north.activity': 'Đạp xe ven Hồ Tây, hái sen sáng sớm, leo núi Tam Đảo tránh nóng',
        'seasons.summer.central.food': 'Mỳ Quảng thơm nồng, cao lầu Hội An, bánh mì Đà Nẵng giòn rụm',
        'seasons.summer.central.landmark': 'Bãi biển Mỹ Khê, Sơn Trà bán đảo xanh, Lăng Cô vịnh đẹp nhất',
        'seasons.summer.central.activity': 'Lặn ngắm san hô Cù Lao Chàm, leo Bà Nà Hills, tắm biển Mỹ Khê',
        'seasons.summer.south.food': 'Bún mắm Cần Thơ, hủ tiếu Nam Vang, lẩu mắm miền Tây đặc sắc',
        'seasons.summer.south.landmark': 'Đảo Phú Quốc, Cần Thơ chợ nổi, vườn quốc gia Tràm Chim',
        'seasons.summer.south.activity': 'Du thuyền sông Cửu Long, tắm biển Phú Quốc, khám phá rừng ngập mặn',

        // Autumn highlights
        'seasons.autumn.north.food': 'Cốm làng Vòng thơm dẻo, bún riêu cua, bánh cốm hương thu',
        'seasons.autumn.north.landmark': 'Phố hoa sữa Nguyễn Du, hồ Hoàn Kiếm lá vàng, lúa chín Mù Cang Chải',
        'seasons.autumn.north.activity': 'Chụp ảnh lá vàng Hà Nội, săn mây Sapa, trekking Mù Cang Chải mùa vàng',
        'seasons.autumn.central.food': 'Cao lầu Hội An, bánh bèo Huế mùa thu, cơm hến sông Hương',
        'seasons.autumn.central.landmark': 'Phố cổ Hội An đèn lồng, làng gốm Thanh Hà, ruộng lúa Quảng Nam',
        'seasons.autumn.central.activity': 'Thả đèn lồng sông Hoài, chụp ảnh phố cổ mùa thu, đạp xe làng quê',
        'seasons.autumn.south.food': 'Bưởi Năm Roi, xoài cát Hòa Lộc, sầu riêng Cái Mơn ngọt lịm',
        'seasons.autumn.south.landmark': 'Vườn trái cây Cái Bè, chùa Vĩnh Tràng, cù lao sông nước Bến Tre',
        'seasons.autumn.south.activity': 'Tham quan vườn trái cây, chèo xuồng kênh rạch, mua sắm trái cây miền Tây',

        // Winter highlights
        'seasons.winter.north.food': 'Phở nóng bốc khói, lẩu nấm rừng Sapa, bánh trôi tàu đêm đông',
        'seasons.winter.north.landmark': 'Sapa tuyết phủ, Hà Giang hoa tam giác mạch, Mộc Châu hoa cải trắng',
        'seasons.winter.north.activity': 'Săn mây Sapa, trekking Hà Giang, check-in hoa tam giác mạch Đồng Văn',
        'seasons.winter.central.food': 'Bún bò Huế cay nồng, bánh canh cá lóc, cháo lòng Huế sưởi ấm',
        'seasons.winter.central.landmark': 'Đại Nội Huế trong sương, sông Hương buổi sáng, làng cổ Phước Tích',
        'seasons.winter.central.activity': 'Du lịch làng cổ Huế mùa vắng, thưởng trà, tham quan Đại Nội yên bình',
        'seasons.winter.south.food': 'Bánh phồng Sóc Trăng, hủ tiếu mùa khô, canh chua cá điêu hồng',
        'seasons.winter.south.landmark': 'Vườn quốc gia U Minh Hạ, Mũi Cà Mau, Phú Quốc mùa khô tuyệt đẹp',
        'seasons.winter.south.activity': 'Khám phá rừng đước Cà Mau, câu cá biển Phú Quốc, du lịch biển mùa khô',

        // Footer

        'footer.copyright': '© 2026 Góc Quà Nhỏ.',
        'footer.admin': '',

        // Product Modal
        'modal.material': 'Số lượng:',
        'modal.method': 'Mô tả sản phẩm:',
        'modal.meaning': 'Ý nghĩa:',
        'modal.contact': 'Liên hệ đặt hàng ngay:',
        'modal.season.spring': 'Xuân',
        'modal.season.summer': 'Hạ',
        'modal.season.autumn': 'Thu',
        'modal.season.winter': 'Đông',
        'modal.season.spring_summer': 'Xuân-Hạ',
        'modal.season.autumn_winter': 'Thu-Đông',
        'modal.season.all': 'Tất cả',

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
        'admin.placeholder': 'Nhập mật khẩu...',
        'admin.login': 'Đăng Nhập',
        'admin.close': 'Đóng',
        'admin.wrongPassword': 'Sai mật khẩu!',

        // Admin Dashboard
        'admin.dashboard.title': 'Quản Lý Đơn Hàng',
        'admin.form.title': 'Tạo / Sửa Đơn',
        'admin.form.orderId': 'Mã Đơn Hàng (4 số)',
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
        'thankyou.eyebrow': 'một món quà nhỏ · a little gift',
        'thankyou.subtitle': 'với yêu thương &amp; trân trọng',
        'thankyou.scrollHint': 'cuộn xuống',
        'thankyou.cardTag': '✦ &nbsp; lời nhắn &nbsp; ✦',
        'thankyou.products': 'Sản phẩm bạn đã chọn',
        'thankyou.secretMessage': 'Lời Nhắn Bí Mật',
        'thankyou.noProducts': 'Không có sản phẩm',
        'thankyou.footer': 'Làm bằng <span class="ty-footer-heart">♥</span> dành cho bạn — người xứng đáng nhận những điều tốt đẹp nhất',

        // Alerts
        'alert.orderNotFound': 'Không tìm thấy đơn hàng!',
        'alert.orderCodeLength': 'Mã đơn phải có 4 số!',
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
        'spring.poem.line1': 'Hoa đào trước ngõ',
        'spring.poem.line2': 'Cười vui sáng hồng',
        'spring.poem.line3': 'Hoa mai trong vườn',
        'spring.poem.line4': 'Rung rinh cánh trắng',
        'spring.weather.title': 'Thời tiết & Khí hậu',
        'spring.weather.desc': 'Mùa xuân thường mát mẻ, dễ chịu, có nắng dịu và gió thổi dịu dàng. Không khí trong lành hơn, đôi khi có mưa xuân lất phất tạo cảm giác dịu dàng, dễ chịu cho mọi người.',
        'spring.weather.desc2': '<strong>Cảnh quan:</strong> Cây cối đâm chồi nảy lộc, hoa nở rực rỡ khắp nơi. Màu xanh tươi mới xuất hiện nhiều hơn, làm cảnh vật trở nên sinh động và đầy sức sống.',
        'spring.culture.title': 'Trang phục & Lễ hội',
        'spring.culture.outfit': '<strong>Trang phục:</strong> Mùa xuân, miền Bắc chuộng áo dài, áo khoác mỏng, khăn choàng nhẹ vì trời còn se lạnh. Miền Trung thường mặc áo dài truyền thống, màu sắc nhã nhặn, phù hợp không khí lễ hội đầu năm. Miền Nam thời tiết ấm áp nên trang phục thoáng mát, áo dài mỏng, váy nhẹ, màu sắc tươi sáng.',
        'spring.culture.desc': 'Mùa xuân gắn liền với nhiều lễ hội truyền thống, đặc biệt là Tết. Mọi người đi du xuân, chúc Tết, tham gia các hoạt động văn hóa và gặp gỡ người thân, bạn bè.',
        'spring.food.title': 'Ẩm thực Xuân',
        'spring.food.desc': 'Mùa xuân thường gắn với những món ăn thanh đạm, mang ý nghĩa khởi đầu mới và may mắn. Ở Việt Nam, có bánh chưng, bánh tét tượng trưng cho sự sum vầy, thịt kho trứng thể hiện sự đủ đầy, cùng các loại mứt ngọt mang ý nghĩa chúc năm mới thuận lợi. Ngoài ra, những món ăn có màu sắc tươi sáng như dưa hành, củ kiệu hay trái cây ngày Tết cũng tạo cảm giác tươi mới, hài hòa.',

        // Summer Page
        'summer.title': 'MÙA HẠ VIỆT NAM',
        'summer.subtitle': 'Mùa của nắng gắt, biển xanh và tiếng ve sâu',
        'summer.backHome': 'Quay lại trang chủ',
        'summer.poem.title': 'Thơ Hạ',
        'summer.poem.line1': 'Mùa hạ của tôi, mùa hạ đã đi chưa',
        'summer.poem.line2': 'Ôi tuổi trẻ bao khát khao còn, hết?',
        'summer.poem.line3': 'Mà mặt đất màu xanh là vẫn biển',
        'summer.poem.line4': 'Quả ngọt ngào thắm thiết vẫn màu hoa.',
        'summer.weather.title': 'Thời tiết & Khí hậu',
        'summer.weather.desc': 'Mùa hè thường nóng bức, oi ả. Miền Bắc nắng chói chang nhưng đôi khi đi kèm những cơn mưa nhanh vào buổi chiều. Miền Trung khô nóng và hanh khô. Miền Nam nắng nhiều hơn và mưa đều đặn buổi chiều.',
        'summer.landscape.title': 'Cảnh quan',
        'summer.landscape.desc': 'Biển xanh cát vàng và bầu trời trong xanh. Hoa phượng nở đỏ rực trên phố. Ruộng lúa xanh mướt và núi rừng hùng vĩ dưới ánh nắng rực rỡ.',
        'summer.festival.title': 'Trang phục & Lễ hội',
        'summer.festival.outfit': '<strong>Trang phục:</strong> Ưu tiên trang phục thoải mái, thấm hút tốt và thoáng mát. Áo thun, quần short, váy… chất liệu cotton, lanh sẽ phù hợp với thời tiết nóng bức. Mang theo mũ hoặc dù để che nắng.',
        'summer.festival.desc': 'Đi tắm biển (Đà Nẵng, Nha Trang…), vui chơi tại công viên nước để dịu đi cái nóng. Cắm trại, picnic với bạn bè, gia đình giữa thiên nhiên xanh mát. Tham quan khu du lịch sinh thái và hòa mình vào những lễ hội sôi động.',

        // Autumn Page
        'autumn.title': 'MÙA THU VIỆT NAM',
        'autumn.subtitle': 'Mùa của nỗi nhớ, lá vàng và tình yêu',
        'autumn.backHome': 'Quay lại trang chủ',
        'autumn.poem.title': 'Thơ Thu',
        'autumn.poem.line1': '"Rặng liễu đêu hiu đứng chịu tang,',
        'autumn.poem.line2': 'Tóc buồn buông xuống lệ ngàn hàng:',
        'autumn.poem.line3': 'Đây mùa thu tới - mùa thu tới',
        'autumn.poem.line4': 'Với áo mơ phai dệt lá vàng."',
        'autumn.weather.title': 'Thời tiết & Khí hậu',
        'autumn.weather.desc': 'Thu đến thường mang theo những làn gió se lạnh mang đến cảm giác sảng khoái cùng với ánh nắng hanh vàng trải dài trên các con phố.',
        'autumn.specialty.title': 'Cảnh quan',
        'autumn.specialty.desc': 'Hình ảnh những hàng cây cơm nguội vàng, cây lộc vừng hay cây lá đỏ trải thảm trên vỉa hè (đặc biệt là ở Phan Đình Phùng - Hà Nội) bên cạnh hồ nước phẳng lặng như gương. Đặc trưng mùa thu là hương hoa sữa len lỏi khắp ngỏ và những đóa hoa thạch thảo nở rộ vào cuối thu.',
        'autumn.festival.title': 'Trang phục & Lễ hội',
        'autumn.festival.outfit': '<strong>Trang phục:</strong> Với phong cách nhẹ nhàng, thanh lịch cùng với các tông màu be, pastel đầy thơ mộng phối với áo khoác nhẹ và khăn voan mỏng.',
        'autumn.festival.food': '<strong>Ẩm thực:</strong> Thiên về những món ăn mang tính nhâm nhi và hương vị thanh tao như ốm làng Vòng dẻo thơm, hồng chín ngọt lịm, sấu chín ngọt thanh và giòn rụm.',
        'autumn.festival.desc': 'Tết Trung Thu là lễ hội lớn nhất trong mùa, với lồng đèn, múa lân, bánh trung thu. Đi dạo hồ Gươm, ngắm hoàng hôn hồ Tây hay chụp ảnh cùng xe hoa dạo.',

        // Winter Page
        'winter.title': 'MÙA ĐÔNG VIỆT NAM',
        'winter.subtitle': 'Mùa của gió lạnh, bếp lửa và kỷ niệm ấm áp',
        'winter.backHome': 'Quay lại trang chủ',
        'winter.poem.title': 'Thơ Đông',
        'winter.poem.line1': 'Nỗi niềm xám xịt hao hanh',
        'winter.poem.line2': 'Áng mây xoả tóc dỗ dành cô đơn',
        'winter.poem.line3': 'Quay đi giấu giọt lệ hờn',
        'winter.poem.line4': 'Rơi vào thăm thẳm nỗi buồn mùa đông',
        'winter.weather.title': 'Thời tiết & Khí hậu',
        'winter.weather.desc': 'Mùa đông Việt Nam mang cái lạnh nhẹ đến vừa, đặc trưng rõ nhất ở miền Bắc. Nhiệt độ thường dao động khoảng 10-20°C. Không khí khô hanh, sáng sớm có sương, đôi khi kèm mưa phùn và gió mùa đông bắc.',
        'winter.warmth.title': 'Cảnh quan',
        'winter.warmth.desc': 'Phố phường trầm lắng hơn, bầu trời xám dịu. Sương giăng trên những hàng cây, núi rừng miền cao ẩn hiện trong mây. Cảnh vật yên tĩnh, mang vẻ đẹp mang mác buồn nhưng cũng rất thơ mộng.',
        'winter.food.title': 'Ẩm thực',
        'winter.food.desc': 'Phở nóng, bún bò, lẩu nghi ngút khói. Ngô nướng, khoai nướng ven đường sưởi ấm những chiều đông lạnh. Món ăn mùa đông đậm đà và đầy hơi ấm.',
        'winter.festival.title': 'Trang phục & Lễ hội',
        'winter.festival.outfit': '<strong>Trang phục:</strong> Áo khoác dày, áo len, khăn quàng cổ trở nên quen thuộc. Trang phục mùa đông thiên về gam màu trầm, đơn giản nhưng ấm áp và tinh tế.',
        'winter.festival.desc': 'Giáng sinh và Tết Dương lịch mang không khí rộn ràng cuối năm. Người người tụ họp, dạo phố, uống cà phê nóng, quây quần bên gia đình để khép lại một năm cũ.',

        // Emotion sections
        'spring.emotion.title': 'Cảm xúc',
        'spring.emotion.desc': 'Mùa xuân thường mang lại cảm giác vui tươi, nhẹ nhàng và đầy hy vọng. Không khí ấm áp cùng sự thay đổi của thiên nhiên khiến con người dễ cảm thấy thoải mái, muốn bắt đầu những kế hoạch mới và dành nhiều thời gian hơn cho gia đình, bạn bè. Đây cũng là khoảng thời gian để nhìn lại năm cũ và mong chờ những điều tốt đẹp phía trước.',
        'spring.emotion.item1': 'Vui tươi, hy vọng',
        'spring.emotion.item2': 'Khởi đầu mới',
        'spring.emotion.item3': 'Sum vầy gia đình',
        'summer.emotion.title': 'Cảm xúc',
        'summer.emotion.desc': 'Mùa hè tuy nóng nực nhưng là khoảng thời gian vui nhất. Sắc đỏ của màu hoa phượng nở rực rỡ gợi biết bao kỷ niệm. Nghe tiếng sóng vỗ rì rào mang lại cảm giác thoải mái, thư giãn đầu óc để rồi tận hưởng giây phút nghỉ ngơi sau những lúc căng thẳng.',
        'summer.emotion.item1': 'Nhiệt huyết, sôi nổi',
        'summer.emotion.item2': 'Tự do, phóng khoáng',
        'summer.emotion.item3': 'Thư giãn tuyệt đối',
        'autumn.emotion.title': 'Cảm xúc',
        'autumn.emotion.desc': 'Không gian yên tĩnh gợi lên những cảm giác hoài niệm, khiến cho con người cảm nhận được sự sâu lắng cũng như mong muốn được ở cạnh những người thân yêu, cùng nhau trải qua những khoảnh khắc đẹp của mùa thu lãng mạn.',
        'autumn.emotion.item1': 'Lãng mạn, sâu lắng',
        'autumn.emotion.item2': 'Hoài niệm, triết lý',
        'autumn.emotion.item3': 'Bình yên, an nhiên',
        'winter.emotion.title': 'Cảm xúc',
        'winter.emotion.desc': 'Mọi thứ lắng xuống rất tự nhiên, như thể thời gian cũng trôi chậm lại. Giữa cái lạnh của mùa đông, chúng ta nhâm nhi một tách cacao ấm nóng hay là ăn khoai nướng cùng những người thân yêu, vừa nhâm nhi vừa cảm nhận dòng chảy thời gian, nhìn về một năm đã qua. Trải qua xuân, hạ, thu và đến đông, chúng ta có những sự khác đi qua mỗi khoảnh khắc của thời gian. Và nhận ra, vậy là một năm nữa lại khép lại, một trang sách mới sắp được hé mở, điều gì sẽ đón chờ ta trong năm mới?',
        'winter.emotion.item1': 'Se lạnh nhưng ấm áp',
        'winter.emotion.item2': 'Gắn kết gia đình',
        'winter.emotion.item3': 'Háo hức chờ Tết',

        // Canvas sections
        'spring.canvas.title': 'Vẽ Mùa Xuân Của Bạn',
        'spring.canvas.subtitle': 'Hãy vẽ và để AI nhận xét bức tranh của bạn',
        'summer.canvas.title': 'Vẽ Mùa Hạ Của Bạn',
        'summer.canvas.subtitle': 'Hãy vẽ và để AI nhận xét bức tranh của bạn',
        'autumn.canvas.title': 'Vẽ Mùa Thu Của Bạn',
        'winter.canvas.title': 'Vẽ Mùa Đông Của Bạn',

        // Poem authors
        'spring.poem.author': '( Nguyễn Hồng Kiên, Tết đang vào nhà)',
        'summer.poem.author': 'Mùa hạ - Xuân Quỳnh',
        'autumn.poem.author': 'Đây Mùa Thu Tới - Xuân Diệu',
        'winter.poem.author': 'MÙA ĐÔNG - LÂM THỊ HỒNG TÚ',

        // Canvas controls
        'canvas.color': 'Màu:',
        'canvas.size': 'Kích thước:',
        'canvas.analyze': 'Phân Tích',
        'canvas.clear': 'Xóa',
        'canvas.chatHeader': 'AI cute nhất hệ mặt trời',
        'canvas.spring.aiDraw': 'AI Vẽ Mùa Xuân',
        'canvas.spring.drawFlowers': 'Vẽ Hoa Đào',
        'canvas.spring.drawRice': 'Vẽ Đồng Lúa',
        'canvas.summer.aiDraw': 'AI Vẽ Mùa Hạ',
        'canvas.summer.drawSunset': 'Vẽ Hoàng Hôn',
        'canvas.summer.drawBeach': 'Vẽ Biển',
        'canvas.autumn.aiDraw': 'AI Vẽ Thu',
        'canvas.autumn.drawLeaves': 'Vẽ Lá Rơi',
        'canvas.autumn.drawStreet': 'Vẽ Phố Cổ',
        'canvas.winter.aiDraw': 'AI Vẽ Đông',
        'canvas.winter.drawSnow': 'Vẽ Tuyết',
        'canvas.winter.drawFire': 'Vẽ Bếp Lửa',

        // ---- Tiểu AI ----
        'canvas.aiName': '🤖 Tiểu AI',
        'canvas.chatHeader': 'Tiểu AI',
        'canvas.loading': 'Đang phân tích bức vẽ...',
        // System prompts theo mùa (tiếng Việt)
        'canvas.systemPrompt.spring': 'Bạn là Tiểu AI - trợ lý nghệ thuật dễ thương. Hãy nhận xét bức tranh mùa xuân này bằng tiếng Việt, ấm áp và chân thành. Trả lời ngắn gọn 2-3 câu.',
        'canvas.systemPrompt.summer': 'Bạn là Tiểu AI - trợ lý nghệ thuật dễ thương. Hãy nhận xét bức tranh mùa hè này bằng tiếng Việt, nhiệt huyết và vui tươi. Trả lời ngắn gọn 2-3 câu.',
        'canvas.systemPrompt.autumn': 'Bạn là Tiểu AI - trợ lý nghệ thuật dễ thương. Hãy nhận xét bức tranh mùa thu này bằng tiếng Việt, sâu lắng và lãng mạn. Trả lời ngắn gọn 2-3 câu.',
        'canvas.systemPrompt.winter': 'Bạn là Tiểu AI - trợ lý nghệ thuật dễ thương. Hãy nhận xét bức tranh mùa đông này bằng tiếng Việt, ấm áp và chân thành. Trả lời ngắn gọn 2-3 câu.',
        // Tin nhắn vẽ AI
        'canvas.spring.drew.flowers': 'Tôi đã vẽ những bông hoa đào rực rỡ cho bạn! 🌸',
        'canvas.spring.drew.rice': 'Đồng lúa xanh mướt đã sẵn sàng! 🌾',
        'canvas.summer.drew.sunset': 'Hoàng hôn trên biển thật đẹp! 🌅',
        'canvas.summer.drew.beach': 'Bãi biển mùa hè đã sẵn sàng! 🏖️',
        'canvas.autumn.drew.leaves': 'Lá vàng rơi xào xạc... 🍂',
        'canvas.autumn.drew.street': 'Phố cổ Hà Nội hiện lên thật hoài niệm! 🏮',
        'canvas.winter.drew.snow': 'Tuyết rơi trắng xóa! ❄️',
        'canvas.winter.drew.fire': 'Bếp lửa hồng ấm áp! 🔥',
        // Lỗi API fallback
        'canvas.error.spring': 'Bức tranh mùa xuân của bạn thật tuyệt! Tôi cảm nhận được sức sống và hy vọng! 🌸',
        'canvas.error.summer': 'Bức tranh mùa hè đầy năng lượng! Tôi cảm nhận được nhiệt huyết của mùa hè! ☀️🏖️',
        'canvas.error.autumn': 'Bức tranh mang vẻ buồn man mác đặc trưng của mùa thu. Thật đẹp! 🍁',
        'canvas.error.winter': 'Bức tranh mang cảm giác ấm áp giữa mùa đông lạnh giá. Thật tuyệt! ❄️❤️',
    },

    // English
    en: {
        // Header
        'header.search.placeholder': 'Enter order code (4 digits)',
        'header.search.button': 'Search',
        'header.backHome': 'Home',

        // Hero Section
        'hero.title': 'Little Gift Corner – Full of Joy',

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
        'product.1.name': 'Postcard',
        'product.1.material': 'Palm leaves, Bamboo, Acrylic paint',
        'product.1.method': 'Hand-painted individually',
        'product.1.meaning': 'Symbol of Vietnamese culture, protection from sun and rain.',

        'product.2.name': 'Bookmark',
        'product.2.material': 'Silk, Brocade',
        'product.2.method': 'Meticulously tailored',
        'product.2.meaning': 'Honors the gentle beauty of Vietnamese women.',

        'product.3.name': 'Notebook',
        'product.3.material': 'White clay',
        'product.3.method': 'Fired at 1200°C',
        'product.3.meaning': 'Essence from the earth.',

        'product.4.name': 'Postcard Combo',
        'product.4.material': 'Do paper',
        'product.4.method': 'Woodblock printing',
        'product.4.meaning': 'Preserving the soul of the nation.',

        'product.5.name': 'Bookmark Combo',
        'product.5.material': 'Natural bamboo',
        'product.5.method': 'Handcrafted',
        'product.5.meaning': 'Childhood memories.',

        'product.6.name': 'Notebook Combo',
        'product.6.material': 'Paper, bamboo',
        'product.6.method': 'Calligraphy writing',
        'product.6.meaning': 'Cool breeze.',

        'product.7.name': 'Seasonal Gift Set',
        'product.7.material': 'Silk, bamboo, paper',
        'product.7.method': 'Traditional handcraft',
        'product.7.meaning': 'Light of hope and togetherness.',
        // Vietnam Seasons Info
        'seasons.title': 'Vietnamese Seasons',
        'seasons.tab.spring': 'Spring 🌸',
        'seasons.tab.summer': 'Summer ☀️',
        'seasons.tab.autumn': 'Autumn 🍂',
        'seasons.tab.winter': 'Winter ❄️',
        'seasons.region.north': 'North',
        'seasons.region.central': 'Central',
        'seasons.region.south': 'South',

        'seasons.spring.title': 'Spring',
        'seasons.spring.north.title': 'Northern Spring',
        'seasons.spring.north.desc': 'Peach blossoms glow softly in drizzling Hanoi streets. Tet arrives with incense, firecrackers, and the quiet joy of homecoming to the ancient capital.',
        'seasons.spring.central.title': 'Central Spring',
        'seasons.spring.central.desc': 'Hue blooms with golden apricot blossoms. Ao dai drift gracefully across Truong Tien Bridge as spring festivals fill the citadel with color and warmth.',
        'seasons.spring.south.title': 'Southern Spring',
        'seasons.spring.south.desc': 'Warm sunshine year-round, Tet in the South bursts with yellow mai blossoms and the lively Nguyen Hue Flower Street. Saigon hums with reunion laughter.',

        'seasons.summer.title': 'Summer',
        'seasons.summer.north.title': 'Northern Summer',
        'seasons.summer.north.desc': 'Flamboyant trees blaze red across Hanoi schoolyards; cicadas announce the long summer. West Lake shimmers with pink lotus at dawn.',
        'seasons.summer.central.title': 'Central Summer',
        'seasons.summer.central.desc': 'Da Nang\'s clear waters and golden sands call sun-seekers from everywhere. Lang Co lagoon glimmers in the hazy heat, while My Khe Beach buzzes with summer joy.',
        'seasons.summer.south.title': 'Southern Summer',
        'seasons.summer.south.desc': 'Afternoon rains wash Saigon\'s streets clean and refresh the air. Along the Mekong Delta, lush flood-season landscapes pulse with golden wildflowers and life.',

        'seasons.autumn.title': 'Autumn',
        'seasons.autumn.north.title': 'Northern Autumn',
        'seasons.autumn.north.desc': 'Hanoi\'s autumn is cool and fragrant — milk flowers drift through narrow lanes, golden leaves line Phan Dinh Phung, and fresh sticky rice fills the morning air.',
        'seasons.autumn.central.title': 'Central Autumn',
        'seasons.autumn.central.desc': 'Hoi An glows in amber autumn light, lanterns reflecting on the Hoai River. Golden rice paddies across Quang Nam paint a serene, poetic landscape.',
        'seasons.autumn.south.title': 'Southern Autumn',
        'seasons.autumn.south.desc': 'No red leaves, but crisp blue skies and cool breezes. Orchard season brings Pomelo and Hoa Loc mangoes — the sweet bounty of the Mekong Delta.',

        'seasons.winter.title': 'Winter',
        'seasons.winter.north.title': 'Northern Winter',
        'seasons.winter.north.desc': 'Northeast winds bite through Hanoi; misty clouds veil Sapa\'s peaks. A warm family fire, steaming pho, and the quiet grace of a northern winter morning.',
        'seasons.winter.central.title': 'Central Winter',
        'seasons.winter.central.desc': 'Prolonged rains drape Hue in a melancholy veil; Hoi An streets grow quiet. Spicy Hue beef noodles and charcoal-grilled rice paper warm the rainy-day soul.',
        'seasons.winter.south.title': 'Southern Winter',
        'seasons.winter.south.desc': 'The dry season brings gentle warmth and clear skies. Wild sunflowers paint the Central Highlands gold; white salt flats at Ca Na shimmer under endless blue.',

        // Highlight labels
        'seasons.highlight.food': 'Cuisine',
        'seasons.highlight.landmark': 'Landmarks',
        'seasons.highlight.activity': 'Experiences',

        // Spring highlights
        'seasons.spring.north.food': 'Steaming Hanoi pho, Thanh Tri spring rolls, and Tet sticky rice with purple yam',
        'seasons.spring.north.landmark': 'Hoan Kiem Lake, Temple of Literature, the Old Quarter\'s 36 streets',
        'seasons.spring.north.activity': 'Nhat Tan peach blossom festival, Tet flower markets, exploring Duong Lam village',
        'seasons.spring.central.food': 'Rich Hue beef noodle soup, Hue steamed rice cakes, Dong Ba crispy pancakes',
        'seasons.spring.central.landmark': 'Hue Imperial City, the poetic Perfume River, Trang Tien Bridge at night',
        'seasons.spring.central.activity': 'Floating lanterns on the Perfume River, ao dai photography, Hue Festival',
        'seasons.spring.south.food': 'Southern square cake, spicy ginger candy, sweet rice balls for Tet',
        'seasons.spring.south.landmark': 'Nguyen Hue Flower Street, Ba Thien Hau Temple, Saigon Tet boulevard',
        'seasons.spring.south.activity': 'Mekong Delta springtime cruise, Tet temple visits, apricot garden tours',

        // Summer highlights
        'seasons.summer.north.food': 'Hanoi bun thang, La Vong grilled fish, early-season green rice flakes',
        'seasons.summer.north.landmark': 'West Lake lotus blooms, Hoan Kiem Lake at dawn, cool Ba Vi mountains',
        'seasons.summer.north.activity': 'Cycling along West Lake, morning lotus picking, Tam Dao mountain retreat',
        'seasons.summer.central.food': 'Fragrant Quang noodles, Hoi An cao lau, crispy Da Nang banh mi',
        'seasons.summer.central.landmark': 'My Khe Beach, Son Tra Peninsula, gorgeous Lang Co lagoon',
        'seasons.summer.central.activity': 'Snorkeling at Cu Lao Cham, Ba Na Hills cable car, My Khe beach day',
        'seasons.summer.south.food': 'Can Tho bun mam, Nam Vang noodle soup, southern fermented fish hotpot',
        'seasons.summer.south.landmark': 'Phu Quoc Island, Cai Rang floating market, Tram Chim National Park',
        'seasons.summer.south.activity': 'Mekong river cruise, Phu Quoc beach day, mangrove forest exploration',

        // Autumn highlights
        'seasons.autumn.north.food': 'Fresh Vong village green rice, crab noodle soup, autumn sweet rice cakes',
        'seasons.autumn.north.landmark': 'Milk-flower-scented Nguyen Du street, golden Hoan Kiem Lake, Mu Cang Chai rice terraces',
        'seasons.autumn.north.activity': 'Photographing golden Hanoi leaves, Sapa cloud hunting, trekking golden Mu Cang Chai',
        'seasons.autumn.central.food': 'Hoi An cao lau, autumn Hue steamed cakes, Perfume River mussel rice',
        'seasons.autumn.central.landmark': 'Hoi An Ancient Town lanterns, Thanh Ha pottery village, Quang Nam rice paddies',
        'seasons.autumn.central.activity': 'Releasing lanterns on Hoai River, old town autumn photography, countryside cycling',
        'seasons.autumn.south.food': 'Nam Roi pomelo, Hoa Loc mango, sweet Cai Mon durian in season',
        'seasons.autumn.south.landmark': 'Cai Be fruit orchards, Vinh Trang Pagoda, Ben Tre coconut island',
        'seasons.autumn.south.activity': 'Orchard hopping, sampan rides through canals, western delta fruit markets',

        // Winter highlights
        'seasons.winter.north.food': 'Steaming hot pho, Sapa wild mushroom hotpot, sweet dumpling soup on cold nights',
        'seasons.winter.north.landmark': 'Snow-dusted Sapa, Ha Giang buckwheat fields, Moc Chau white mustard flowers',
        'seasons.winter.north.activity': 'Cloud hunting in Sapa, Ha Giang trekking, buckwheat flower check-in at Dong Van',
        'seasons.winter.central.food': 'Spicy Hue beef noodles, snakehead fish noodle soup, warming Hue congee',
        'seasons.winter.central.landmark': 'Misty Hue Imperial City, Perfume River at dawn, Phuoc Tich ancient village',
        'seasons.winter.central.activity': 'Quiet-season Hue village tour, tea tasting, peaceful Imperial City visit',
        'seasons.winter.south.food': 'Soc Trang puffed rice cakes, dry-season noodle soup, sour fish soup',
        'seasons.winter.south.landmark': 'U Minh Ha National Park, Ca Mau Cape, stunning dry-season Phu Quoc',
        'seasons.winter.south.activity': 'Ca Mau mangrove exploration, Phu Quoc sea fishing, dry-season beach holiday',

        // Footer

        'footer.copyright': '© 2026 Little Gift Corner.',
        'footer.admin': '',

        // Product Modal
        'modal.material': 'Quantity:',
        'modal.method': 'Description:',
        'modal.meaning': 'Meaning:',
        'modal.contact': 'Contact to order now:',
        'modal.season.spring': 'Spring',
        'modal.season.summer': 'Summer',
        'modal.season.autumn': 'Autumn',
        'modal.season.winter': 'Winter',
        'modal.season.spring_summer': 'Spring-Summer',
        'modal.season.autumn_winter': 'Autumn-Winter',
        'modal.season.all': 'All',

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
        'admin.form.orderId': 'Order ID (4 digits)',
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
        'thankyou.eyebrow': 'a little gift · một món quà nhỏ',
        'thankyou.subtitle': 'with love & appreciation',
        'thankyou.scrollHint': 'scroll down',
        'thankyou.cardTag': '✦ &nbsp; a little note &nbsp; ✦',
        'thankyou.products': 'Your selected products',
        'thankyou.secretMessage': 'Secret Message',
        'thankyou.noProducts': 'No products',
        'thankyou.footer': 'Made with <span class="ty-footer-heart">♥</span> for you — because you deserve the best',

        // Alerts
        'alert.orderNotFound': 'Order not found!',
        'alert.orderCodeLength': 'Order code must be 4 digits!',
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
        'spring.poem.line1': 'Peach blossoms by the gate',
        'spring.poem.line2': 'Smile in rosy light.',
        'spring.poem.line3': 'Apricot flowers in the garden',
        'spring.poem.line4': 'Gently tremble, pure and white.',
        'spring.weather.title': 'Weather & Climate',
        'spring.weather.desc': 'Spring is usually cool and pleasant, with gentle sunshine and soft breezes. The air feels fresher, and sometimes light spring drizzle falls, creating a tender and soothing atmosphere for everyone.',
        'spring.weather.desc2': '<strong>Scenery:</strong> Trees begin to sprout new buds, and flowers bloom vibrantly everywhere. Fresh green colors appear more abundantly, making the landscape lively and full of vitality.',
        'spring.culture.title': 'Attire & Festivals',
        'spring.culture.outfit': '<strong>Attire:</strong> In spring, people in Northern Vietnam often wear áo dài, light jackets, and soft scarves because the weather is still slightly chilly. In Central Vietnam, traditional áo dài in elegant, subtle colors are commonly worn, reflecting the festive spirit of the early year. In Southern Vietnam, where the weather is warmer, people prefer breathable outfits such as light ao dai, airy dresses, and bright-colored clothing.',
        'spring.culture.desc': 'Spring is closely associated with many traditional festivals, especially Tet. People go on spring outings, extend New Year\'s greetings, take part in cultural activities and gather with family and friends.',
        'spring.food.title': 'Spring Cuisine',
        'spring.food.desc': 'Spring cuisine often features light dishes symbolizing new beginnings and good fortune. In Vietnam, banh chung and banh tet represent reunion and togetherness; braised pork with eggs symbolizes fullness and prosperity; and various candied fruits convey wishes for a smooth and successful new year. In addition, colorful foods such as pickled onions, pickled scallions and fresh fruits add a refreshing and harmonious touch to the festive table.',

        // Summer Page
        'summer.title': 'VIETNAMESE SUMMER',
        'summer.subtitle': 'Season of scorching sun, blue sea and cicada songs',
        'summer.backHome': 'Back to home',
        'summer.poem.title': 'Summer Poem',
        'summer.poem.line1': 'My summer - tell me, has it slipped away?',
        'summer.poem.line2': 'O youth, with all its burning dreams - does it remain, or has it drained?',
        'summer.poem.line3': 'Yet still the earth is green, the sea forever blue,',
        'summer.poem.line4': 'Sweet fruit still ripens deep, and blossoms bloom in hue.',
        'summer.weather.title': 'Weather & Climate',
        'summer.weather.desc': 'Summer is often hot and humid. In the North, the sun can be intense, sometimes followed by sudden afternoon showers. The Central region is typically dry and scorching, with hot winds. In the South, there is plenty of sunshine along with regular afternoon rain.',
        'summer.landscape.title': 'Landscape',
        'summer.landscape.desc': 'Blue seas, golden sand, and clear skies create a vibrant summer picture. Flamboyant flowers bloom in bright red along the streets. Lush green rice fields and majestic mountains stand proudly under the radiant sunlight.',
        'summer.festival.title': 'Attire & Festivals',
        'summer.festival.outfit': '<strong>Attire:</strong> Lightweight, breathable, and moisture-absorbing clothing is recommended. T-shirts, shorts, and dresses made of cotton or linen are ideal for the hot weather. Bringing a hat or an umbrella is also advisable to protect yourself from the sun.',
        'summer.festival.desc': 'Tet Doan Ngo (Mid-Year Festival), the Da Nang International Fireworks Festival, and the Nha Trang Sea Festival are notable summer events. People often go to the beach (such as Da Nang or Nha Trang) or visit water parks to cool off. Camping and picnicking with friends and family in the refreshing outdoors are also popular. Many enjoy visiting eco-tourism sites and immersing themselves in lively festivals.',

        // Autumn Page
        'autumn.title': 'VIETNAMESE AUTUMN',
        'autumn.subtitle': 'Season of nostalgia, golden leaves and love',
        'autumn.backHome': 'Back to home',
        'autumn.poem.title': 'Autumn Poem',
        'autumn.poem.line1': '"The willow grove stands in mournful grief,',
        'autumn.poem.line2': 'Its sorrowful hair hangs down in thousand-tear streams:',
        'autumn.poem.line3': 'Here comes autumn — autumn has come,',
        'autumn.poem.line4': 'Wearing a dream-faded coat woven of yellow leaves."',
        'autumn.weather.title': 'Weather & Climate',
        'autumn.weather.desc': 'Autumn often arrives with cool, gentle breezes that bring a refreshing feeling, along with soft golden sunlight stretching across the streets.',
        'autumn.specialty.title': 'Landscape',
        'autumn.specialty.desc': 'Images of yellowing Com Nguoi trees, loc vung, or red-leaf trees carpeting the sidewalks (especially on Phan Đinh Phung Street in Hanoi), beside mirror-calm lakes. The scent of milk flowers drifting through the alleys and clusters of asters blooming in late autumn are also typical signs of the season.',
        'autumn.festival.title': 'Attire & Festivals',
        'autumn.festival.outfit': '<strong>Attire:</strong> A gentle, elegant style featuring dreamy beige and pastel tones, paired with light coats and thin chiffon scarves.',
        'autumn.festival.food': '<strong>Cuisine:</strong> The season favors light, snack-like delicacies with refined flavors such as fragrant young green rice from Vòng Village, sweet ripe persimmons, and ripe sấu fruit with a mildly sweet, crisp taste.',
        'autumn.festival.desc': 'The Mid-Autumn Festival is the biggest celebration of the season, with lanterns, lion dances, and mooncakes. Popular activities include strolling around Hoàn Kiếm Lake, watching the sunset at West Lake, or taking photos with flower bicycles passing by.',

        // Winter Page
        'winter.title': 'VIETNAMESE WINTER',
        'winter.subtitle': 'Season of cold wind, warm fires and cozy memories',
        'winter.backHome': 'Back to home',
        'winter.poem.title': 'Winter Poem',
        'winter.poem.line1': 'Gray longing, parched and thin',
        'winter.poem.line2': 'Clouds trail their hair to soothe the loneliness within',
        'winter.poem.line3': 'Turning away to hide the bitter tears',
        'winter.poem.line4': 'Falling deep into the winter\'s hollow fears.',
        'winter.weather.title': 'Weather & Climate',
        'winter.weather.desc': 'Winter in Vietnam brings a mild to moderate chill, most felt in the North. Temperatures typically hover between 10–20°C. The air is dry and crisp, often greeted by morning mist, occasional drizzles, and the biting Northeast monsoons.',
        'winter.warmth.title': 'Landscape',
        'winter.warmth.desc': 'The streets turn quiet under a soft, leaden sky. Mist clings to rows of trees, while the northern highlands vanish and reappear through rolling clouds. It is a landscape of stillness—possessing a melancholic beauty that is deeply poetic.',
        'winter.food.title': 'Cuisine',
        'winter.food.desc': 'Steaming bowls of Phở, spicy Bún Bò, and bubbling hotpots take center stage. On the sidewalks, the scent of roasted corn and sweet potatoes warms the chilly afternoons. Winter cuisine is rich, bold, and full of heart.',
        'winter.festival.title': 'Attire & Festivals',
        'winter.festival.outfit': '<strong>Attire:</strong> Heavy coats, knit sweaters, and scarves become the season\'s staples. Winter attire leans toward muted tones and minimalist designs—simple, yet warm and refined.',
        'winter.festival.desc': 'Christmas and New Year\'s Eve bring a bustling energy to the year\'s end. People gather to stroll through the streets, sip hot coffee, and huddle with family to bid the old year farewell.',

        // Emotion sections
        'spring.emotion.title': 'Emotions',
        'spring.emotion.desc': 'Spring often brings feelings of joy, gentleness, and hope. The warm atmosphere and the renewal of nature make people feel relaxed and inspired to begin new plans, while spending more meaningful time with family and friends. It is also a time to reflect on the past year and look forward to the good things ahead.',
        'spring.emotion.item1': 'Joyful, hopeful',
        'spring.emotion.item2': 'Fresh beginnings',
        'spring.emotion.item3': 'Family reunion',
        'summer.emotion.title': 'Emotions',
        'summer.emotion.desc': 'Although summer can be hot, it is often the most joyful time of the year. The bright red flamboyant flowers bring back many memories. Listening to the gentle sound of waves creates a sense of relaxation, allowing you to fully enjoy moments of rest after stressful days.',
        'summer.emotion.item1': 'Passionate, energetic',
        'summer.emotion.item2': 'Free, adventurous',
        'summer.emotion.item3': 'Absolutely relaxing',
        'autumn.emotion.title': 'Emotions',
        'autumn.emotion.desc': 'The quiet atmosphere evokes nostalgia, allowing people to feel a deeper calm and a wish to stay close to loved ones, sharing the beautiful, romantic moments of autumn together.',
        'autumn.emotion.item1': 'Romantic, profound',
        'autumn.emotion.item2': 'Nostalgic, philosophical',
        'autumn.emotion.item3': 'Peaceful, serene',
        'winter.emotion.title': 'Emotions',
        'winter.emotion.desc': 'Everything settles down naturally, as if time itself has slowed its pace. Amidst the winter chill, we find comfort in a cup of hot cocoa or share roasted potatoes with loved ones. In those moments, we feel the flow of time and look back on the year that was. Having journeyed through spring, summer, and autumn to reach this winter, we realize how much we have evolved with every passing second. We recognize that yet another year is closing; a new chapter is about to unfold. One can\'t help but wonder: What awaits us in the year to come?',
        'winter.emotion.item1': 'Cold yet warm',
        'winter.emotion.item2': 'Family bonding',
        'winter.emotion.item3': 'Excited for Tet',

        // Canvas sections
        'spring.canvas.title': 'Draw Your Spring',
        'spring.canvas.subtitle': 'Draw and let AI comment on your artwork',
        'summer.canvas.title': 'Draw Your Summer',
        'summer.canvas.subtitle': 'Draw and let AI comment on your artwork',
        'autumn.canvas.title': 'Draw Your Autumn',
        'winter.canvas.title': 'Draw Your Winter',

        // Poem authors
        'spring.poem.author': '("Tet Is Coming Home" by Nguyen Hong Kien)',
        'summer.poem.author': '("Summer" by Xuan Quynh)',
        'autumn.poem.author': '("This Is the Coming of Autumn" by Xuan Dieu)',
        'winter.poem.author': '("Winter" by Lam Thi Hong Tu)',

        // Canvas controls
        'canvas.color': 'Color:',
        'canvas.size': 'Size:',
        'canvas.analyze': 'Analyze',
        'canvas.clear': 'Clear',
        'canvas.chatHeader': 'The cutest AI in the solar system',
        'canvas.spring.aiDraw': 'AI Draw Spring',
        'canvas.spring.drawFlowers': 'Draw Peach Blossoms',
        'canvas.spring.drawRice': 'Draw Rice Field',
        'canvas.summer.aiDraw': 'AI Draw Summer',
        'canvas.summer.drawSunset': 'Draw Sunset',
        'canvas.summer.drawBeach': 'Draw Beach',
        'canvas.autumn.aiDraw': 'AI Draw Autumn',
        'canvas.autumn.drawLeaves': 'Draw Falling Leaves',
        'canvas.autumn.drawStreet': 'Draw Old Street',
        'canvas.winter.aiDraw': 'AI Draw Winter',
        'canvas.winter.drawSnow': 'Draw Snow',
        'canvas.winter.drawFire': 'Draw Fireplace',

        // ---- Tiểu AI ----
        'canvas.aiName': '🤖 Tiểu AI',
        'canvas.chatHeader': 'Tiểu AI',
        'canvas.loading': 'Analyzing your drawing...',
        'canvas.systemPrompt.spring': 'You are Tiểu AI - a friendly and cute art assistant. Please comment on this spring drawing in English, warmly and sincerely. Reply in 2-3 short sentences.',
        'canvas.systemPrompt.summer': 'You are Tiểu AI - a friendly and cute art assistant. Please comment on this summer drawing in English, with energy and joy. Reply in 2-3 short sentences.',
        'canvas.systemPrompt.autumn': 'You are Tiểu AI - a friendly and cute art assistant. Please comment on this autumn drawing in English, with depth and romance. Reply in 2-3 short sentences.',
        'canvas.systemPrompt.winter': 'You are Tiểu AI - a friendly and cute art assistant. Please comment on this winter drawing in English, warmly and sincerely. Reply in 2-3 short sentences.',
        'canvas.spring.drew.flowers': 'I drew some gorgeous peach blossoms for you! 🌸',
        'canvas.spring.drew.rice': 'A lush green rice field is ready! 🌾',
        'canvas.summer.drew.sunset': 'A beautiful ocean sunset! 🌅',
        'canvas.summer.drew.beach': 'The summer beach is ready! 🏖️',
        'canvas.autumn.drew.leaves': 'Golden leaves falling gently... 🍂',
        'canvas.autumn.drew.street': 'The nostalgic old Hanoi street appears! 🏮',
        'canvas.winter.drew.snow': 'Snow falling softly! ❄️',
        'canvas.winter.drew.fire': 'A warm glowing fireplace! 🔥',
        'canvas.error.spring': 'Your spring painting is amazing! I can feel the vitality and hope! 🌸',
        'canvas.error.summer': 'Your summer painting is full of energy! I feel the passion of summer! ☀️🏖️',
        'canvas.error.autumn': 'Your painting carries the melancholic beauty of autumn. Beautiful! 🍁',
        'canvas.error.winter': 'Your painting brings warmth in the cold winter. Wonderful! ❄️❤️',
    },


    // Japanese
    ja: {
        // Header
        'header.search.placeholder': '注文コードを入力（4桁）',
        'header.search.button': '検索',
        'header.backHome': 'ホーム',

        // Hero Section
        'hero.title': '小さなギフトコーナー 喜びいっぱい',

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
        'product.1.name': 'ポストカード',
        'product.1.material': 'ヤシの葉、竹、アクリル絵の具',
        'product.1.method': '一つ一つ手描き',
        'product.1.meaning': 'ベトナム文化の象徴、日差しと雨から守る。',

        'product.2.name': 'ブックマーク',
        'product.2.material': 'シルク、錦',
        'product.2.method': '丁寧に仕立てられた',
        'product.2.meaning': 'ベトナム女性の優しい美しさを称える。',

        'product.3.name': 'ノート',
        'product.3.material': '白土',
        'product.3.method': '1200度で焼成',
        'product.3.meaning': '大地からの精髄。',

        'product.4.name': 'ポストカードセット',
        'product.4.material': 'ゾー紙',
        'product.4.method': '木版画',
        'product.4.meaning': '民族の魂を保存する。',

        'product.5.name': 'ブックマークセット',
        'product.5.material': '天然竹',
        'product.5.method': '手作り',
        'product.5.meaning': '子供時代の思い出。',

        'product.6.name': 'ノートセット',
        'product.6.material': '紙、竹',
        'product.6.method': '書道',
        'product.6.meaning': '涼しい風。',

        'product.7.name': '四季のギフトセット',
        'product.7.material': '絹、竹、紙',
        'product.7.method': '伝統手工芸',
        'product.7.meaning': '希望と団らんの光。',
        // Vietnam Seasons Info
        'seasons.title': 'ベトナムの四季',
        'seasons.tab.spring': '春 🌸',
        'seasons.tab.summer': '夏 ☀️',
        'seasons.tab.autumn': '秋 🍂',
        'seasons.tab.winter': '冬 ❄️',
        'seasons.region.north': '北部',
        'seasons.region.central': '中部',
        'seasons.region.south': '南部',

        'seasons.spring.title': '春',
        'seasons.spring.north.title': '北部の春',
        'seasons.spring.north.desc': '桃の花が輝き、ハノイの古い通りに霧雨が降る。テトの到来とともに線香の香りと爆竹の音が響き、古都に帰省の喜びが満ちる。',
        'seasons.spring.central.title': '中部の春',
        'seasons.spring.central.desc': '古都フエは金色の梅の花で彩られる。トランティエン橋ではアオザイが優雅になびき、春の祭りが城壁の町を活気づける。',
        'seasons.spring.south.title': '南部の春',
        'seasons.spring.south.desc': '年中温暖な南部のテトは黄色い梅の花とニュエンフー花市場の賑わいで溢れる。サイゴンは再会の笑い声と喜びに包まれる。',

        'seasons.summer.title': '夏',
        'seasons.summer.north.title': '北部の夏',
        'seasons.summer.north.desc': '鳳凰木の赤い花がハノイの校庭を染め、蝉の声が長い夏の始まりを告げる。夜明けのタイ湖はピンクの蓮で彩られる。',
        'seasons.summer.central.title': '中部の夏',
        'seasons.summer.central.desc': 'ダナンの透明な海と白い砂浜。ランコー湖が霞む夏の光の中に揺れ、ミーケービーチは世界中の夏の旅行者を魅了する。',
        'seasons.summer.south.title': '南部の夏',
        'seasons.summer.south.desc': '午後の雨がサイゴンの通りを洗い流し、空気をリフレッシュする。メコンデルタは洪水の季節の生命力と金色の野花で溢れる。',

        'seasons.autumn.title': '秋',
        'seasons.autumn.north.title': '北部の秋',
        'seasons.autumn.north.desc': 'ハノイの秋は涼しく芳しい——ミルクフラワーの香りが路地に漂い、パンディンフン通りの黄金の葉が静かに舞い落ちる。',
        'seasons.autumn.central.title': '中部の秋',
        'seasons.autumn.central.desc': 'ホイアンは琥珀色の秋の光に輝き、ランタンがホアイ川に映る。クアンナム省の黄金の田んぼが詩的な風景を描き出す。',
        'seasons.autumn.south.title': '南部の秋',
        'seasons.autumn.south.desc': '紅葉はないが、澄んだ青空と涼しい風。メコンデルタのザボン、ホアロクマンゴーが甘く実り、果物の季節を迎える。',

        'seasons.winter.title': '冬',
        'seasons.winter.north.title': '北部の冬',
        'seasons.winter.north.desc': '北東の季節風がハノイに吹き抜け、サパの山頂に霧が漂う。暖かな家族の炉端、湯気立つフォーが冬の朝を温める。',
        'seasons.winter.central.title': '中部の冬',
        'seasons.winter.central.desc': 'しとしとと降る雨がフエを包み、ホイアンの街は静かで内省的になる。辛口フエビーフヌードルと炭焼きバインチャンが体を温める。',
        'seasons.winter.south.title': '南部の冬',
        'seasons.winter.south.desc': '乾季の南部は穏やかな温かさと澄んだ空が広がる。タイグエンの野の花が黄金色に咲き、カナーの塩田が青い空の下で白く輝く。',

        // Highlight labels
        'seasons.highlight.food': '食文化',
        'seasons.highlight.landmark': '名所',
        'seasons.highlight.activity': '体験',

        // Spring highlights
        'seasons.spring.north.food': '湯気立つハノイのフォー、タインチーの春巻き、テトの紫芋おこわ',
        'seasons.spring.north.landmark': 'ホアンキエム湖、文廟、旧市街36通り',
        'seasons.spring.north.activity': 'ニャッタンの桃の花祭り、テトの花市場巡り、ドゥオンラム村探訪',
        'seasons.spring.central.food': '濃厚なフエ牛肉麺、フエ蒸し餅、ドンバ市場のバインコアイ',
        'seasons.spring.central.landmark': 'フエ王宮、香江の詩的な流れ、チャンティエン橋のライトアップ',
        'seasons.spring.central.activity': '香江での灯籠流し、アオザイ撮影、フエフェスティバル',
        'seasons.spring.south.food': '南部のバインテト、スパイシーな生姜菓子、テトの白玉ぜんざい',
        'seasons.spring.south.landmark': 'グエンフエ花通り、バーティエンハウ寺院、サイゴンのテト大通り',
        'seasons.spring.south.activity': 'メコンデルタ春の遊覧、テトの寺参り、梅園観光',

        // Summer highlights
        'seasons.summer.north.food': 'ハノイのブンタン、ラヴォンの焼き魚、初物のコム',
        'seasons.summer.north.landmark': '西湖の蓮の花、ホアンキエム湖の朝、涼しいバヴィ山',
        'seasons.summer.north.activity': '西湖サイクリング、朝の蓮摘み、タムダオ山の避暑',
        'seasons.summer.central.food': '香り高いミークアン、ホイアンのカオラウ、ダナンのバインミー',
        'seasons.summer.central.landmark': 'ミーケービーチ、ソンチャ半島、美しいランコー入江',
        'seasons.summer.central.activity': 'クーラオチャムのシュノーケリング、バナヒルズ、ミーケービーチ',
        'seasons.summer.south.food': 'カントーのブンマム、フーティウ、南部の魚醤鍋',
        'seasons.summer.south.landmark': 'フーコック島、カイラン水上市場、チャムチム国立公園',
        'seasons.summer.south.activity': 'メコン川クルーズ、フーコックビーチ、マングローブ探検',

        // Autumn highlights
        'seasons.autumn.north.food': 'ヴォン村の新米コム、蟹麺、秋のバインコム',
        'seasons.autumn.north.landmark': 'ミルクフラワー香るグエンズー通り、黄金のホアンキエム湖、ムーカンチャイの棚田',
        'seasons.autumn.north.activity': 'ハノイの黄葉撮影、サパの雲海ハンティング、ムーカンチャイ棚田トレッキング',
        'seasons.autumn.central.food': 'ホイアンのカオラウ、秋のフエ蒸し餅、香江のコムヘン',
        'seasons.autumn.central.landmark': 'ホイアン旧市街のランタン、タインハー陶芸村、クアンナムの田んぼ',
        'seasons.autumn.central.activity': 'ホアイ川での灯籠流し、旧市街の秋フォト、田舎サイクリング',
        'seasons.autumn.south.food': 'ナムロイ文旦、ホアロックマンゴー、カイモンの甘いドリアン',
        'seasons.autumn.south.landmark': 'カイベーの果樹園、ヴィンチャン寺、ベンチェのココナッツ島',
        'seasons.autumn.south.activity': '果樹園巡り、水路のサンパン乗り、西部デルタの果物市場',

        // Winter highlights
        'seasons.winter.north.food': '湯気立つフォー、サパの野生キノコ鍋、冬夜のチェートロイタウ',
        'seasons.winter.north.landmark': '雪化粧のサパ、ハジャンの蕎麦畑、モクチャウの白い菜の花',
        'seasons.winter.north.activity': 'サパの雲海ハンティング、ハジャントレッキング、ドンヴァンの蕎麦畑チェックイン',
        'seasons.winter.central.food': 'ピリ辛フエ牛肉麺、ライギョのバインカン、温かいフエのお粥',
        'seasons.winter.central.landmark': '霧のフエ王宮、朝の香江、フォックティック古村',
        'seasons.winter.central.activity': '閑散期のフエ古村散策、お茶を楽しむ、静寂のフエ王宮参観',
        'seasons.winter.south.food': 'ソクチャンのバインフォン、乾季のフーティウ、酸味魚スープ',
        'seasons.winter.south.landmark': 'ウミンハー国立公園、カマウ岬、乾季の絶景フーコック',
        'seasons.winter.south.activity': 'カマウのマングローブ探検、フーコック海釣り、乾季のビーチリゾート',

        // Footer

        'footer.copyright': '© 2026 小さなギフトコーナー。',
        'footer.admin': '',

        // Product Modal
        'modal.material': '数量：',
        'modal.method': '商品説明：',
        'modal.meaning': '意味：',
        'modal.contact': '今すぐ注文：',
        'modal.season.spring': '春',
        'modal.season.summer': '夏',
        'modal.season.autumn': '秋',
        'modal.season.winter': '冬',
        'modal.season.spring_summer': '春夏',
        'modal.season.autumn_winter': '秋冬',
        'modal.season.all': '全て',

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
        'admin.list.title': '注文リスト（Databaseから）',
        'admin.list.print': 'リストを印刷',
        'admin.list.orderId': '注文ID',
        'admin.list.title2': 'タイトル',
        'admin.list.passwords': '季節のパスワードとQR',
        'admin.list.actions': 'アクション',
        'admin.list.edit': '編集',
        'admin.list.delete': '削除',
        'admin.list.noOrders': 'まだ注文がありません',

        // Thank You Page
        'thankyou.eyebrow': '小さな贈り物 · a little gift',
        'thankyou.subtitle': '愛と感謝をこめて',
        'thankyou.scrollHint': 'スクロールしてね',
        'thankyou.cardTag': '✦ &nbsp; メッセージカード &nbsp; ✦',
        'thankyou.products': '選択された商品',
        'thankyou.secretMessage': '秘密のメッセージ',
        'thankyou.noProducts': '商品がありません',
        'thankyou.footer': 'あなたのために <span class="ty-footer-heart">♥</span> をこめて — あなたは一番素敵なものを受け取るにふさわしいから',

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
        'spring.poem.line1': '門のそばの桃の花は',
        'spring.poem.line2': '淡い紅色にほころび、',
        'spring.poem.line3': '庭の梅の花は',
        'spring.poem.line4': '白く清らかに風にそよいでいる。',
        'spring.weather.title': '天候・気候',
        'spring.weather.desc': '春は比較的涼しく、過ごしやすい季節である。やわらかな日差しと穏やかな風が感じられ、空気はいっそう澄みわたる。ときおり細やかな霧雨が静かに降り、人々にやさしく心安らぐ雰囲気をもたらす。',
        'spring.weather.desc2': '<strong>風景：</strong> 木々は新芽を吹き始め、花々はあちらこちらで色鮮やかに咲き誇る。みずみずしい緑がいっそう増し、景色は生き生きとした活気と生命力に満ちあふれている。',
        'spring.culture.title': '服装と祭り',
        'spring.culture.outfit': '<strong>服装：</strong> 北部ベトナムでは、春はまだやや肌寒さが残るため、人々はアオザイや薄手の上着、やわらかなスカーフなどを身に着けるのが一般的である。中部ベトナムでは、上品で落ち着いた色合いの伝統的なアオザイがよく着用され、新年の祝祭的な雰囲気を優雅に醸し出している。南部ベトナムでは気候がより温暖であるため、軽やかなアオザイや風通しのよいワンピース、明るい色彩の衣服など、通気性に優れた装いが好まれる。',
        'spring.culture.desc': '春は多くの伝統的な祭りと深く結びついており、特にテト（旧正月）はその代表的な行事である。人々は春の行楽を楽しみ、新年の挨拶を交わし、さまざまな伝統文化活動に参加する。また、家族や友人と集い、温かなひとときを共に過ごす。',
        'spring.food.title': '春の料理',
        'spring.food.desc': '春の料理は、新たな始まりや幸運を象徴する、比較的あっさりとした味わいのものが多いのが特徴である。ベトナムでは、バインチュンやバインテットは団らんや家族の結びつきを象徴し、豚肉と卵の煮込み料理は満ち足りた豊かさと繁栄を表している。また、さまざまな砂糖漬けの果物には、円満で順調な一年への願いが込められている。さらに、らっきょうや青ねぎの酢漬け、新鮮な果物など色とりどりの料理が、祝祭の食卓にさわやかさと調和を添えている。',

        // Summer Page
        'summer.title': 'ベトナムの夏',
        'summer.subtitle': '灼熱の太陽、青い海、蝉の声の季節',
        'summer.backHome': 'ホームに戻る',
        'summer.poem.title': '夏の詩',
        'summer.poem.line1': '私の夏は、もう行ってしまったのだろうか。',
        'summer.poem.line2': 'ああ若さよ、その渇きは尽きてしまったのだろうか。',
        'summer.poem.line3': '大地はまだ海のように青く広がり、',
        'summer.poem.line4': '甘い実は花の色を宿したまま。',
        'summer.weather.title': '天気・気候',
        'summer.weather.desc': '夏は一般的に蒸し暑く、厳しい暑さが続きます。北部では強い日差しが照りつけますが、午後にはにわか雨が降ることもあります。中部は乾燥しており、特に暑さが厳しいのが特徴です。南部では日差しが強く、午後には定期的にスコールが降ります。',
        'summer.landscape.title': '風景',
        'summer.landscape.desc': '青い海と白い砂浜、澄み渡る青空が広がり、街路には赤く咲き誇る鳳凰木（ホウオウボク）の花が見られます。青々とした田んぼや、まぶしい日差しの下にそびえる雄大な山々も、夏ならではの風景です。',
        'summer.festival.title': '服装と祭り',
        'summer.festival.outfit': '<strong>服装：</strong> 夏には、通気性が良く汗を吸いやすい服装が好まれます。Tシャツやショートパンツ、ワンピースなど、コットンやリネン素材の衣類は暑い季節に適しています。また、強い日差しを避けるために帽子や日傘を持ち歩くとよいでしょう。',
        'summer.festival.desc': '夏には、ベトナムの伝統行事である端午節をはじめ、ダナン国際花火大会やニャチャン海洋フェスティバルなど、さまざまなイベントが開催されます。ダナンやニャチャンで海水浴を楽しんだり、ウォーターパークで暑さを和らげたりするのも人気です。また、友人や家族と自然の中でキャンプやピクニックを楽しんだり、エコツーリズムのスポットを訪れたりする人も多く見られます。',

        // Autumn Page
        'autumn.title': 'ベトナムの秋',
        'autumn.subtitle': '郷愁、黄金の葉、愛の季節',
        'autumn.backHome': 'ホームに戻る',
        'autumn.poem.title': '秋の詩',
        'autumn.poem.line1': '「しだれ柳はもの悲しく喪に服すように立ち、',
        'autumn.poem.line2': '悲しみの髪は垂れ、涙は幾筋にも流れる。',
        'autumn.poem.line3': 'ほら、秋が来た――秋が来た、',
        'autumn.poem.line4': '夢の色あせた衣に、黄金の葉を織り込んで。」',
        'autumn.weather.title': '天気・気候',
        'autumn.weather.desc': '秋になると、少しひんやりした風が吹き、さわやかな空気に包まれます。やわらかな黄金色の陽ざしが通りに広がり、心地よい季節となります。',
        'autumn.specialty.title': '風景',
        'autumn.specialty.desc': '黄色く色づく街路樹や、赤く染まる葉が歩道を彩り（特にハノイのファンディンフン通りが有名）、鏡のように静かな湖の景色が広がります。秋を代表する香りとして、ホアスアの花の甘い香りが路地に漂い、晩秋にはアスターの花が咲き誇ります。',
        'autumn.festival.title': '服装と祭り',
        'autumn.festival.outfit': '<strong>服装：</strong> やさしく上品なスタイルで、ベージュやパステルなどのロマンチックな色合いに、薄手のコートや軽いスカーフを合わせるのが秋らしい装いです。',
        'autumn.festival.food': '<strong>食べ物：</strong> 軽く楽しめる上品な味わいのものが多く、香り高いヴォン村の若いもち米、甘く熟した柿、甘酸っぱい熟したサウの実などが秋の味覚です。',
        'autumn.festival.desc': '中秋節は秋最大の行事で、提灯、獅子舞、月餅などで賑わいます。ホアンキエム湖を散歩したり、西湖の夕日を眺めたり、花を積んだ自転車と写真を撮るのも人気です。',

        // Winter Page
        'winter.title': 'ベトナムの冬',
        'winter.subtitle': '冷たい風、暖かい火、居心地の良い思い出の季節',
        'winter.backHome': 'ホームに戻る',
        'winter.poem.title': '冬の詩',
        'winter.poem.line1': '「灰色にかすむ物思い',
        'winter.poem.line2': '髪をほどいた雲がそっと孤独をなぐさめる',
        'winter.poem.line3': '振り向きざまにこぼれそうな涙を隠し',
        'winter.poem.line4': 'それは冬の深い悲しみへと落ちていく',
        'winter.weather.title': '天気・気候',
        'winter.weather.desc': 'ベトナムの冬は、穏やかでやや肌寒い気候が特徴で、特に北部でははっきりとした寒さを感じることができます。気温はおよそ10～20度ほどです。空気は乾燥し、早朝には霧が立ちこめ、時には霧雨や北東からの季節風が吹くこともあります。',
        'winter.warmth.title': '風景',
        'winter.warmth.desc': '街並みはどこか落ち着きを増し、空はやわらかな灰色に染まります。木々の並木道には霧が漂い、高原や山々は雲の中にぼんやりと姿を現します。静けさに包まれた景色は、どこか切なさを帯びながらも、とても詩的で美しいものです。',
        'winter.food.title': '食べ物',
        'winter.food.desc': '湯気の立つフォーやブンボー、熱々の鍋料理は冬の定番です。道端で売られる焼きとうもろこしや焼き芋も、冷えた体をやさしく温めてくれます。冬の料理は味わい深く、心まで温めてくれるものばかりです。',
        'winter.festival.title': '服装と祭り',
        'winter.festival.outfit': '<strong>服装：</strong> 厚手のコートやセーター、マフラーが欠かせない季節になります。冬の装いは落ち着いた色合いが中心で、シンプルながらも温もりと上品さを感じさせます。',
        'winter.festival.desc': 'クリスマスや年末年始は、一年の締めくくりとしてにぎやかな雰囲気に包まれます。人々は集まり、街を散策したり、温かいコーヒーを飲んだりしながら、家族とともに一年を静かに振り返ります。',

        // Emotion sections
        'spring.emotion.title': '感情',
        'spring.emotion.desc': '春は、喜びや穏やかさ、そして希望をもたらす季節である。暖かな雰囲気と自然の再生は人々の心を和ませ、新たな計画を始める意欲をかき立てる。また、家族や友人とより意義深い時間を過ごす大切な機会ともなる。さらに春は、過ぎ去った一年を振り返り、これから訪れる良い出来事に思いを馳せる節目の季節でもある。',
        'spring.emotion.item1': '楽しい、希望に満ちた',
        'spring.emotion.item2': '新しい始まり',
        'spring.emotion.item3': '家族の再会',
        'summer.emotion.title': '感情',
        'summer.emotion.desc': '夏は暑い季節ですが、一年の中で最も楽しい時期でもあります。真っ赤に咲く鳳凰木の花は、多くの思い出を呼び起こします。波の音を聞くと心が落ち着き、忙しい毎日の中でほっと一息つきながら、ゆったりとした時間を楽しむことができます。',
        'summer.emotion.item1': '情熱的、エネルギッシュ',
        'summer.emotion.item2': '自由、冒険的',
        'summer.emotion.item3': '完全にリラックス',
        'autumn.emotion.title': '感情',
        'autumn.emotion.desc': '静かな空気は郷愁を呼び起こし、人の心を落ち着かせます。大切な人のそばで、ロマンチックな秋のひとときを一緒に過ごしたいそんな気持ちにさせてくれる季節です。',
        'autumn.emotion.item1': 'ロマンチック、深遠',
        'autumn.emotion.item2': '懐かしい、哲学的',
        'autumn.emotion.item3': '平和、穏やか',
        'winter.emotion.title': '感情',
        'winter.emotion.desc': '冬になると、すべてが自然と静まり、まるで時間の流れさえもゆっくりになるかのように感じられます。冷たい空気の中で、温かいココアを味わったり、大切な人と焼き芋を分け合ったりしながら、過ぎ去った一年に思いを巡らせます。春、夏、秋、そして冬を経て、私たちは少しずつ変化していきます。そして気づくのです――また一年が終わり、新しい一ページがまもなく開かれようとしていることを。新しい年には、どんな出来事が私たちを待っているのでしょうか。',
        'winter.emotion.item1': '寒いが暖かい',
        'winter.emotion.item2': '家族の絆',
        'winter.emotion.item3': 'テトを楽しみに',

        // Canvas sections
        'spring.canvas.title': 'あなたの春を描く',
        'spring.canvas.subtitle': '描いてAIにあなたのアートワークにコメントしてもらいましょう',
        'summer.canvas.title': 'あなたの夏を描く',
        'summer.canvas.subtitle': '描いてAIにあなたのアートワークにコメントしてもらいましょう',
        'autumn.canvas.title': 'あなたの秋を描く',
        'winter.canvas.title': 'あなたの冬を描く',

        // Poem authors
        'spring.poem.author': '（グエン・ホン・キエン「テトがやってくる」）',
        'summer.poem.author': 'スアン・クイン 「夏」',
        'autumn.poem.author': '( スアン・ジエウ「秋が来た」)',
        'winter.poem.author': '(ラム・ティ・ホン・トゥー 「冬」)',

        'canvas.color': '色:',
        'canvas.size': 'サイズ:',
        'canvas.analyze': '分析',
        'canvas.clear': '削除',
        'canvas.chatHeader': 'Tiểu AI',
        'canvas.spring.aiDraw': 'AIで春を描く',
        'canvas.spring.drawFlowers': '桃の花を描く',
        'canvas.spring.drawRice': '田んぼを描く',
        'canvas.summer.aiDraw': 'AIで夏を描く',
        'canvas.summer.drawSunset': '夕日を描く',
        'canvas.summer.drawBeach': '海を描く',
        'canvas.autumn.aiDraw': 'AIで秋を描く',
        'canvas.autumn.drawLeaves': '落ち葉を描く',
        'canvas.autumn.drawStreet': '古い街を描く',
        'canvas.winter.aiDraw': 'AIで冬を描く',
        'canvas.winter.drawSnow': '雪を描く',
        'canvas.winter.drawFire': '暖炉を描く',

        // ---- Tiểu AI ----
        'canvas.aiName': '🤖 Tiểu AI',
        'canvas.loading': '絵を分析中...',
        'canvas.systemPrompt.spring': 'あなたはTiểu AI（チビAI）— 親しみやすくてかわいいアートアシスタントです。この春の絵について、やさしく心を込めてコメントしてください。必ず日本語のみで答えてください。2〜3文で短くお願いします。',
        'canvas.systemPrompt.summer': 'あなたはTiểu AI（チビAI）— 親しみやすくてかわいいアートアシスタントです。この夏の絵について、元気よく明るくコメントしてください。必ず日本語のみで答えてください。2〜3文で短くお願いします。',
        'canvas.systemPrompt.autumn': 'あなたはTiểu AI（チビAI）— 親しみやすくてかわいいアートアシスタントです。この秋の絵について、深く情感を込めてコメントしてください。必ず日本語のみで答えてください。2〜3文で短くお願いします。',
        'canvas.systemPrompt.winter': 'あなたはTiểu AI（チビAI）— 親しみやすくてかわいいアートアシスタントです。この冬の絵について、あたたかくやさしくコメントしてください。必ず日本語のみで答えてください。2〜3文で短くお願いします。',
        'canvas.spring.drew.flowers': '幽い桃の花を描いてみました！ 🌸',
        'canvas.spring.drew.rice': '緑蒇な稲田が完成しました！ 🌾',
        'canvas.summer.drew.sunset': '海の夕日がきれいです！ 🌅',
        'canvas.summer.drew.beach': '夏のビーチができました！ 🏖️',
        'canvas.autumn.drew.leaves': '黄金色の葉が散っていく… 🍂',
        'canvas.autumn.drew.street': 'ノスタルジックなハノイの古い街並み！ 🏮',
        'canvas.winter.drew.snow': '雪がふわりと降ります！ ❄️',
        'canvas.winter.drew.fire': 'あたたかい暖炉の火！ 🔥',
        'canvas.error.spring': 'あなたの春の絵はとても素敵です！生き生きとした希望を感じます！ 🌸',
        'canvas.error.summer': 'あなたの夏の絵はエネルギー満ちです！夏の熱情を感じます！ ☀️🏖️',
        'canvas.error.autumn': '秋の絵はのどかな塵を持っています。とても素敵！ 🍁',
        'canvas.error.winter': '冬の寒さの中にあたたかさを感じる絵です。素敵！ ❄️❤️',
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
    if (!translations[lang] || lang === currentLanguage) return;

    currentLanguage = lang;
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;

    // Cập nhật nút active ngay
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[data-lang="${lang}"]`)?.classList.add('active');

    // Cập nhật tất cả [data-i18n] elements đang có trong DOM ngay lập tức
    _updateI18nElements();

    // Render lại sản phẩm theo ngôn ngữ mới (dùng rAF để không block UI)
    requestAnimationFrame(() => {
        if (typeof initProducts === 'function') initProducts();

        // Re-render trang cảm ơn nếu đang hiển thị
        const tyPage = document.getElementById('thank-you-page');
        if (tyPage && !tyPage.classList.contains('hidden') &&
            typeof currentOrderData !== 'undefined' && currentOrderData &&
            typeof renderThankYouPage === 'function') {
            renderThankYouPage(currentOrderData);
        }
    });
}

// Cập nhật [data-i18n] elements có sẵn trong DOM
function _updateI18nElements() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = t(key);
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            element.placeholder = translation;
        } else {
            element.innerHTML = translation;
        }
    });
}

// Update all page content (gọi khi init - có initProducts())
function updatePageContent() {
    _updateI18nElements();
    document.documentElement.lang = currentLanguage;

    if (typeof initProducts === 'function') initProducts();

    const thankYouPage = document.getElementById('thank-you-page');
    if (thankYouPage && !thankYouPage.classList.contains('hidden') &&
        typeof currentOrderData !== 'undefined' && currentOrderData &&
        typeof renderThankYouPage === 'function') {
        renderThankYouPage(currentOrderData);
    }
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function () {
    updatePageContent();
    // Đánh dấu nút active theo ngôn ngữ đã lưu
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[data-lang="${currentLanguage}"]`)?.classList.add('active');
});
