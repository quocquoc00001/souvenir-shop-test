// ============================================
// MAIN SCRIPT - Index Page & Admin Dashboard
// ============================================

// supabaseClient is already initialized in supabase-client.js

/* ============================================
   === DỮ LIỆU SẢN PHẨM ===
   ============================================ */
const products = [
    // 1. Postcard - 4 mùa
    {
        id: 1,
        versions: {
            xuan: {
                media: [
                    { type: 'img', url: 'Media/Sanpham/Postcard xuân(1).webp' },
                    { type: 'img', url: 'Media/Sanpham/Postcard xuân.webp' }
                ],
                soluong: "1 tấm",
                soluong_en: "1 postcard",
                soluong_ja: "ポストカード1枚",
                mota: "Hình ảnh cô gái và chàng trai trong tà áo dài nhẹ bay dạo bước giữa phố xuân, xung quanh là sắc hồng hoa đào nở rộ và cánh én chao liệng trên bầu trời trong xanh. Khung cảnh gợi nên một mùa xuân dịu dàng, lãng mạn và tràn đầy hy vọng.",
                mota_en: "A young woman and man in flowing áo dài stroll through a spring street filled with pink peach blossoms and swallows gliding across a clear blue sky. The scene captures a gentle, romantic spring full of hope.",
                mota_ja: "春の街を、アオザイをまとった男女がそっと歩いていきます。周りには桃の花が咲き誇り、澄んだ青空にはツバメが舞っています。やさしくロマンチックで、希望に満ちた春の情景です。",
                ynghia: "Dùng để viết lời nhắn, gửi tặng người thân, bạn bè hoặc lưu giữ như một món quà kỷ niệm.",
                ynghia_en: "Perfect for writing heartfelt notes, sending to loved ones, friends, or keeping as a memorable little gift.",
                ynghia_ja: "大切な人や友人へのメッセージを書いたり、小さな記念の贈り物として手元に残したりするのにぴったりです。"
            },
            ha: {
                media: [
                    { type: 'img', url: 'Media/Sanpham/Postcard hạ.webp' },
                    { type: 'img', url: 'Media/Sanpham/Postcard hạ(1).webp' }
                ],
                soluong: "1 tấm",
                soluong_en: "1 postcard",
                soluong_ja: "ポストカード1枚",
                mota: "Hình ảnh sân trường mùa hè, những cậu học trò đang trò chuyện dưới tán phượng đỏ rực, gợi cảm giác hoài niệm và trong trẻo của tuổi học trò. Mặt sau thiết kế kẻ sọc ngang tiện lợi để viết lời nhắn, tâm sự hoặc gửi gắm yêu thương.",
                mota_en: "A summer schoolyard under blazing red flamboyant trees, where students chat and laugh together, evoking pure, nostalgic memories of school days. The back side has neat horizontal lines, perfect for writing messages and secret thoughts.",
                mota_ja: "燃えるような紅いホウオウボクに覆われた夏の校庭で、学生たちが語り合い笑い合う姿が描かれています。無邪気でどこか懐かしい学生時代の記憶を呼び起こしてくれる一枚です。裏面はメッセージを書きやすい横罫デザインになっています。",
                ynghia: "Dùng để viết lời nhắn, gửi tặng người thân, bạn bè hoặc lưu giữ như một món quà kỷ niệm.",
                ynghia_en: "Use it to send warm messages to friends and family, or keep it as a piece of your own summer memories.",
                ynghia_ja: "家族や友人へのあたたかいメッセージカードとして、また自分だけの夏の思い出として大切に残しておける一枚です。"
            },
            thu: {
                media: [
                    { type: 'img', url: 'Media/Sanpham/Postcard thu.webp' },
                    { type: 'img', url: 'Media/Sanpham/Postcard thu(1).webp' }
                ],
                soluong: "1 tấm",
                soluong_en: "1 postcard",
                soluong_ja: "ポストカード1枚",
                mota: "Giữa không gian tràn ngập sắc vàng rực rỡ của những tán cây thay lá và những ngôi nhà tường vàng cửa xanh đặc trưng, nhịp sống diễn ra bình thản và chậm rãi. Trên con phố rải đầy lá rụng, hình ảnh chiếc xe xích lô thong dong, người chở hoa trên xe máy và những gánh hàng rong bên vỉa hè gợi nhắc về một nét bình dị mà rất đỗi thân thương.",
                mota_en: "Golden autumn trees and yellow walls with green windows create a warm, slow-paced street scene. A cyclo rolling lazily, a motorbike loaded with flowers, and street vendors along the sidewalk evoke the simple yet deeply beloved everyday life of Vietnam.",
                mota_ja: "黄金色の葉をまとった街路樹と、黄色い壁に緑の窓枠というベトナムらしい家々が並ぶ、あたたかくゆったりとした秋の街並み。のんびり走るシクロや花を積んだバイク、屋台の行商人たちが、素朴でどこか懐かしいベトナムの日常を思い出させてくれます。",
                ynghia: "Dùng để viết lời nhắn, gửi tặng người thân, bạn bè hoặc lưu giữ như một món quà kỷ niệm.",
                ynghia_en: "A gentle way to keep or share a piece of Vietnamese autumn with those you care about.",
                ynghia_ja: "大切な人と、ベトナムの秋の雰囲気をそっと分かち合うことができる一枚です。"
            },
            dong: {
                media: [
                    { type: 'img', url: 'Media/Sanpham/Postcard đông.webp' },
                    { type: 'img', url: 'Media/Sanpham/Postcard đông(1).webp' }
                ],
                soluong: "1 tấm",
                soluong_en: "1 postcard",
                soluong_ja: "ポストカード1枚",
                mota: "Giữa không gian đại ngàn với những rặng thông già và dòng nước xanh ngắt, một bếp lửa bập bùng cháy rực, tỏa ra ánh sáng vàng cam ấm áp soi rọi những gương mặt rạng rỡ sự hạnh phúc. Hình ảnh một gia đình nhỏ ngồi quây quần trên những chiếc ghế xếp, cùng nhau nướng khoai, ngô và thưởng thức những tách trà nóng hổi, tạo nên một không gian ấm cúng, bình yên giữa mùa đông.",
                mota_en: "Amidst towering pine forests and deep blue water, a crackling campfire glows warmly, lighting up happy faces. A small family gathers on folding chairs, roasting sweet potatoes and corn, sipping hot tea together in a cozy, peaceful winter night.",
                mota_ja: "高くそびえる松林と青く静かな水辺のそばで、ぱちぱちと燃える焚き火の炎がやわらかなオレンジ色の光を放ち、幸せそうな笑顔を照らします。小さな家族が折りたたみ椅子に腰かけ、焼き芋やトウモロコシを分け合い、温かいお茶を味わう――冬の夜の、あたたかく穏やかなひとときが描かれています。",
                ynghia: "Dùng để viết lời nhắn, gửi tặng người thân, bạn bè hoặc lưu giữ như một món quà kỷ niệm.",
                ynghia_en: "A postcard that carries the warmth of family and winter nights to whoever receives it.",
                ynghia_ja: "冬の夜の家族のぬくもりを、そのまま届けてくれるような一枚です。"
            }
        }
    },
    // 2. Bookmark - 2 phân loại
    {
        id: 2,
        versions: {
            xuan_ha: {
                media: [
                    { type: 'img', url: 'Media/Sanpham/Bookmark xuân hạ(1).webp' },
                    { type: 'img', url: 'Media/Sanpham/Bookmark xuân hạ.webp' }
                ],
                soluong: "1 thẻ (2 mặt)",
                soluong_en: "1 bookmark (double-sided)",
                soluong_ja: "しおり1枚（両面）",
                mota: "Xuân được khắc họa với hình ảnh chim én bay giữa sắc hồng hoa đào, tượng trưng cho khởi đầu mới và hy vọng. Hạ là hình cô gái mặc áo dài bên hoa phượng rực đỏ, gợi nhớ tuổi trẻ và những ngày đầy nắng, cả hai mặt đều kèm theo một câu quote ý nghĩa tạo cảm hứng.",
                mota_en: "The spring side shows swallows flying among pink peach blossoms, symbolizing new beginnings and hope. The summer side depicts a girl in áo dài beside blazing red flamboyant flowers, recalling youthful school days. Both sides include inspiring quotes.",
                mota_ja: "春の面には桃の花のあいだを飛ぶツバメが描かれ、新しい始まりと希望を象徴しています。夏の面には真っ赤なホウオウボクのそばに立つアオザイ姿の少女が描かれ、まぶしい学生時代の記憶を呼び起こしてくれます。両面とも心に響くフレーズ入りです。",
                ynghia: "Dùng để đánh dấu trang sách, giúp tiếp tục việc đọc dễ dàng và tạo cảm hứng mỗi khi mở sách.",
                ynghia_en: "A beautiful companion for your reading journey, helping you keep your place and feel inspired every time you open your book.",
                ynghia_ja: "読書中のページをそっと守ってくれる、心が少しあたたかくなるしおりです。本を開くたびに、少しだけ元気やインスピレーションをくれます。"
            },
            thu_dong: {
                media: [
                    { type: 'img', url: 'Media/Sanpham/Bookmark thu đông(1).webp' },
                    { type: 'img', url: 'Media/Sanpham/Bookmark thu đông.webp' }
                ],
                soluong: "1 thẻ (2 mặt)",
                soluong_en: "1 bookmark (double-sided)",
                soluong_ja: "しおり1枚（両面）",
                mota: "Thu là hình ảnh hoa sữa dịu dàng cùng những hạt cốm – món quà từ cánh đồng lúa non bát ngát, tượng trưng cho sự gắn kết giữa con người và thiên nhiên. Đông là hình ảnh cây thông xanh giữa không khí se lạnh, gợi cảm giác ấm áp, sum vầy và hy vọng trong những ngày cuối năm.",
                mota_en: "The autumn side features gentle milk flowers and green young rice (cốm), gifts from vast rice fields symbolizing the bond between people and nature. The winter side shows a green pine tree in cold air, evoking warmth, togetherness and hope at year’s end.",
                mota_ja: "秋の面にはやさしく香るホアスアの花と、青々とした若いお米から作られる「コム」が描かれ、人と自然のつながりを感じさせてくれます。冬の面には澄んだ冷たい空気の中に凛と立つモミの木が描かれ、年末のあたたかな団らんや希望の灯りを思い起こさせます。",
                ynghia: "Dùng để đánh dấu trang sách, giúp tiếp tục việc đọc dễ dàng và tạo cảm hứng mỗi khi mở sách.",
                ynghia_en: "Ideal for those who love the quiet charm of autumn and the cozy feeling of winter nights while reading.",
                ynghia_ja: "秋の静かな魅力と冬の夜のあたたかさが好きな方にぴったりのしおりです。読書時間を少し特別なひとときにしてくれます。"
            }
        }
    },
    // 3. Sổ note - 4 mùa
    {
        id: 3,
        versions: {
            xuan: {
                media: [
                    { type: 'img', url: 'Media/Sanpham/Sổ xuân(1).webp' },
                    { type: 'img', url: 'Media/Sanpham/Sổ xuân.webp' }
                ],
                soluong: "1 cuốn (160 trang)",
                soluong_en: "1 notebook (160 pages)",
                soluong_ja: "ノート1冊（160ページ）",
                mota: "Sổ lò xo A6 gồm 160 trang giấy với kích thước 10,5 x 14,8 cm, láng mịn, viết siêu êm tay, không lem mực, không nhòe. Lò xo chắc chắn, lật mở dễ dàng. Sổ tay bìa lò xo với họa tiết hoa anh đào nhẹ nhàng bên cạnh là hình ảnh bánh chưng gợi không khí mùa xuân tươi mới, tông màu kem thanh lịch, dịu dàng.",
                mota_en: "A6 spiral notebook with 160 smooth pages (10.5 x 14.8 cm), pleasant to write on with minimal ink bleed. The sturdy spiral binding makes flipping pages easy. The cover features soft cherry blossoms and bánh chưng, bringing a fresh, elegant spring feeling in warm cream tones.",
                mota_ja: "A6サイズ（10.5 x 14.8cm）、160ページのスパイラルノートです。なめらかな紙質で書き心地がよく、インクがにじみにくい仕様になっています。しっかりとしたリング綴じでページがめくりやすいのもポイント。表紙には桜の花とバインチュンが描かれ、春らしく上品なクリーム色の世界観が広がります。",
                ynghia: "Dùng để ghi chú bài học, công việc, lên kế hoạch hoặc viết những dòng nhật ký, tiện mang theo và phù hợp làm quà tặng tinh tế.",
                ynghia_en: "Perfect for study notes, work plans, or journaling, and also a thoughtful, elegant gift.",
                ynghia_ja: "勉強ノートや仕事の予定、日々の小さな日記帳として使いやすく、持ち運びにも便利です。さりげないプレゼントとしても喜ばれる1冊です."
            },
            ha: {
                media: [
                    { type: 'img', url: 'Media/Sanpham/Sổ hạ(1).webp' },
                    { type: 'img', url: 'Media/Sanpham/Sổ hạ.webp' }
                ],
                soluong: "1 cuốn (160 trang)",
                soluong_en: "1 notebook (160 pages)",
                soluong_ja: "ノート1冊（160ページ）",
                mota: "Sổ lò xo A6 gồm 160 trang giấy với kích thước 10,5 x 14,8 cm, láng mịn, viết siêu êm tay, không lem mực, không nhòe. Lò xo chắc chắn, lật mở dễ dàng. Sổ tay bìa lò xo nổi bật với hình ảnh cây dừa và sắc xanh tươi mát của bãi biển và bầu trời mùa hè mang lại không khí cảm giác năng động và tràn đầy năng lượng.",
                mota_en: "A6 spiral notebook with 160 smooth pages. The cover stands out with a coconut tree and the fresh blue of summer beaches and sky, bringing an energetic, lively feeling.",
                mota_ja: "160ページのA6スパイラルノート。表紙にはヤシの木と、夏の海や空を思わせる鮮やかなブルーが描かれ、見ているだけで元気と開放感をくれるデザインです。",
                ynghia: "Dùng để ghi chú bài học, công việc, lên kế hoạch hoặc viết những dòng nhật ký, tiện mang theo và phù hợp làm quà tặng tinh tế.",
                ynghia_en: "Great for travel notes, summer plans, or capturing ideas whenever inspiration strikes.",
                ynghia_ja: "夏の思い出を書き留めたり、旅行のメモやひらめきを残したりするのにぴったり。気分を明るくしてくれる1冊です。"
            },
            thu: {
                media: [
                    { type: 'img', url: 'Media/Sanpham/Sổ thu(1).webp' },
                    { type: 'img', url: 'Media/Sanpham/Sổ thu.webp' }
                ],
                soluong: "1 cuốn (160 trang)",
                soluong_en: "1 notebook (160 pages)",
                soluong_ja: "ノート1冊（160ページ）",
                mota: "Sổ lò xo A6 gồm 160 trang giấy với kích thước 10,5 x 14,8 cm, láng mịn, viết siêu êm tay, không lem mực, không nhòe. Lò xo chắc chắn, lật mở dễ dàng. Sổ bìa in hình ấm trà bên đĩa xôi cốm gợi không khí thu man mát, dịu dàng, bình yên mỗi khi mở ra.",
                mota_en: "A6 spiral notebook with 160 smooth pages. The cover shows a teapot and a plate of green rice (cốm), evoking the cool, gentle and peaceful feeling of autumn.",
                mota_ja: "表紙には急須と「コム」（若いお米から作られるお菓子）が描かれ、涼しくて穏やかなベトナムの秋の空気を感じさせてくれます。",
                ynghia: "Dùng để ghi chú bài học, công việc, lên kế hoạch hoặc viết những dòng nhật ký, tiện mang theo và phù hợp làm quà tặng tinh tế.",
                ynghia_en: "Ideal for slow, reflective journaling sessions on cozy afternoons.",
                ynghia_ja: "ゆっくりと気持ちを整えながら書きたい日記やメモにぴったり。穏やかな午後のお供になる1冊です。"
            },
            dong: {
                media: [
                    { type: 'img', url: 'Media/Sanpham/Sổ đông(1).webp' },
                    { type: 'img', url: 'Media/Sanpham/Sổ đông.webp' }
                ],
                soluong: "1 cuốn (160 trang)",
                soluong_en: "1 notebook (160 pages)",
                soluong_ja: "ノート1冊（160ページ）",
                mota: "Sổ lò xo A6 gồm 160 trang giấy với kích thước 10,5 x 14,8 cm, láng mịn, viết siêu êm tay, không lem mực, không nhòe. Lò xo chắc chắn, lật mở dễ dàng. Sổ được tô điểm bởi sắc xanh lạnh của mùa đông trái ngược với hình ảnh nhẹ nhàng và yên tĩnh của cô gái đang ngồi đọc sách và nhâm nhi tách cà phê tạo một cảm giác ấm áp lạ thường.",
                mota_en: "A6 spiral notebook with 160 smooth pages. Cool winter blues on the cover contrast with the gentle image of a girl reading and sipping coffee, creating a surprisingly warm and quiet feeling.",
                mota_ja: "表紙には冬を思わせるクールなブルーの世界と、本を読みながらコーヒーを味わう少女の姿が描かれています。冷たい季節の中の、あたたかく静かな時間を切り取ったようなデザインです。",
                ynghia: "Dùng để ghi chú bài học, công việc, lên kế hoạch hoặc viết những dòng nhật ký, tiện mang theo và phù hợp làm quà tặng tinh tế.",
                ynghia_en: "Perfect for winter reflections, cozy café notes, or as a calming everyday notebook.",
                ynghia_ja: "冬の振り返りを書いたり、カフェタイムのメモ帳にしたり、心を落ち着かせたいときの常用ノートとしてもおすすめです。"
            }
        }
    },
    // 4. Combo bookmark
    // 4. Combo Bưu Thiếp / Postcard Combo / ポストカードセット
    {
        id: 4,
        versions: {
            xuan: {
                media: [
                    { type: 'img', url: 'Media/Sanpham/Postcard 4 mùa(1).webp' },
                    { type: 'img', url: 'Media/Sanpham/Postcard 4 mùa.webp' }
                ],
                soluong: "4 tấm (Xuân · Hạ · Thu · Đông)",
                soluong_en: "4 postcards (Spring · Summer · Autumn · Winter)",
                soluong_ja: "ポストカード4枚（春・夏・秋・冬）",
                mota: "Trọn bộ 4 tấm bưu thiếp theo bốn mùa, mỗi tấm mang một khung cảnh Việt Nam độc đáo.",
                mota_en: "A complete set of 4 seasonal postcards, each capturing a unique Vietnamese scene in spring, summer, autumn and winter.",
                mota_ja: "春・夏・秋・冬、それぞれの季節のベトナムの風景を切り取ったポストカード4枚セットです。",
                ynghia: "Bộ quà hoàn chỉnh theo bốn mùa, phù hợp gửi tặng người thân, bạn bè như một lời chào từ Việt Nam.",
                ynghia_en: "A full four‑season gift, perfect as a warm greeting from Vietnam to family and friends.",
                ynghia_ja: "ベトナムからの小さなごあいさつとして、家族や友人への贈り物にぴったりの四季セットです。"
            },
            ha: {
                media: [
                    { type: 'img', url: 'Media/Sanpham/Postcard 4 mùa(1).webp' },
                    { type: 'img', url: 'Media/Sanpham/Postcard 4 mùa.webp' }
                ],
                soluong: "4 tấm (Xuân · Hạ · Thu · Đông)",
                soluong_en: "4 postcards (Spring · Summer · Autumn · Winter)",
                soluong_ja: "ポストカード4枚（春・夏・秋・冬）",
                mota: "Trọn bộ 4 tấm bưu thiếp theo bốn mùa, mỗi tấm mang một khung cảnh Việt Nam độc đáo.",
                mota_en: "A complete set of 4 seasonal postcards, each capturing a unique Vietnamese scene in spring, summer, autumn and winter.",
                mota_ja: "春・夏・秋・冬、それぞれの季節のベトナムの風景を切り取ったポストカード4枚セットです。",
                ynghia: "Bộ quà hoàn chỉnh theo bốn mùa, phù hợp gửi tặng người thân, bạn bè như một lời chào từ Việt Nam.",
                ynghia_en: "A full four‑season gift, perfect as a warm greeting from Vietnam to family and friends.",
                ynghia_ja: "ベトナムからの小さなごあいさつとして、家族や友人への贈り物にぴったりの四季セットです。"
            },
            thu: {
                media: [
                    { type: 'img', url: 'Media/Sanpham/Postcard 4 mùa(1).webp' },
                    { type: 'img', url: 'Media/Sanpham/Postcard 4 mùa.webp' }
                ],
                soluong: "4 tấm (Xuân · Hạ · Thu · Đông)",
                soluong_en: "4 postcards (Spring · Summer · Autumn · Winter)",
                soluong_ja: "ポストカード4枚（春・夏・秋・冬）",
                mota: "Trọn bộ 4 tấm bưu thiếp theo bốn mùa, mỗi tấm mang một khung cảnh Việt Nam độc đáo.",
                mota_en: "A complete set of 4 seasonal postcards, each capturing a unique Vietnamese scene in spring, summer, autumn and winter.",
                mota_ja: "春・夏・秋・冬、それぞれの季節のベトナムの風景を切り取ったポストカード4枚セットです。",
                ynghia: "Bộ quà hoàn chỉnh theo bốn mùa, phù hợp gửi tặng người thân, bạn bè như một lời chào từ Việt Nam.",
                ynghia_en: "A full four‑season gift, perfect as a warm greeting from Vietnam to family and friends.",
                ynghia_ja: "ベトナムからの小さなごあいさつとして、家族や友人への贈り物にぴったりの四季セットです。"
            },
            dong: {
                media: [
                    { type: 'img', url: 'Media/Sanpham/Postcard 4 mùa(1).webp' },
                    { type: 'img', url: 'Media/Sanpham/Postcard 4 mùa.webp' }
                ],
                soluong: "4 tấm (Xuân · Hạ · Thu · Đông)",
                soluong_en: "4 postcards (Spring · Summer · Autumn · Winter)",
                soluong_ja: "ポストカード4枚（春・夏・秋・冬）",
                mota: "Trọn bộ 4 tấm bưu thiếp theo bốn mùa, mỗi tấm mang một khung cảnh Việt Nam độc đáo.",
                mota_en: "A complete set of 4 seasonal postcards, each capturing a unique Vietnamese scene in spring, summer, autumn and winter.",
                mota_ja: "春・夏・秋・冬、それぞれの季節のベトナムの風景を切り取ったポストカード4枚セットです。",
                ynghia: "Bộ quà hoàn chỉnh theo bốn mùa, phù hợp gửi tặng người thân, bạn bè như một lời chào từ Việt Nam.",
                ynghia_en: "A full four‑season gift, perfect as a warm greeting from Vietnam to family and friends.",
                ynghia_ja: "ベトナムからの小さなごあいさつとして、家族や友人への贈り物にぴったりの四季セットです。"
            }
        }
    },
    // 5. Combo Thẻ Đánh Dấu Trang / Bookmark Combo / ブックマークセット
    {
        id: 5,
        versions: {
            xuan: {
                media: [
                    { type: 'img', url: 'Media/Sanpham/Bookmark 4 mùa(1).webp' },
                    { type: 'img', url: 'Media/Sanpham/Bookmark 4 mùa.webp' }
                ],
                soluong: "2 thẻ (Xuân-Hạ, Thu-Đông)",
                soluong_en: "2 bookmarks (Spring–Summer, Autumn–Winter)",
                soluong_ja: "しおり2枚（春-夏・秋-冬）",
                mota: "Trọn bộ 4 thẻ đánh dấu trang theo bốn mùa, mỗi thẻ mang họa tiết và câu chuyện riêng về vẻ đẹp Việt Nam. Đóng gói tinh tế.",
                mota_en: "A combo of 4 seasonal bookmarks paired into 2 pieces (Spring–Summer and Autumn–Winter), each with its own illustration and story celebrating the beauty of Vietnam. Elegantly packaged.",
                mota_ja: "春夏・秋冬という2本の組み合わせで構成された、四季をテーマにしたしおりセットです。それぞれにベトナムの美しさを描いたイラストと小さな物語が込められており、上品なパッケージでお届けします。",
                ynghia: "Combo lý tưởng để sưu tầm hoặc tặng người yêu sách – lưu giữ bốn mùa ký ức trong từng trang sách.",
                ynghia_en: "An ideal combo for book lovers and collectors, keeping all four seasons of memories between your pages.",
                ynghia_ja: "本好き・コレクターの方にぴったりのセットです。ページのあいだに、四季それぞれの思い出をそっと挟んでおけます。"
            },
            ha: {
                media: [
                    { type: 'img', url: 'Media/Sanpham/Bookmark 4 mùa(1).webp' },
                    { type: 'img', url: 'Media/Sanpham/Bookmark 4 mùa.webp' }
                ],
                soluong: "2 thẻ (Xuân-Hạ, Thu-Đông)",
                soluong_en: "2 bookmarks (Spring–Summer, Autumn–Winter)",
                soluong_ja: "しおり2枚（春-夏・秋-冬）",
                mota: "Trọn bộ 4 thẻ đánh dấu trang theo bốn mùa, mỗi thẻ mang họa tiết và câu chuyện riêng về vẻ đẹp Việt Nam. Đóng gói tinh tế.",
                mota_en: "A combo of 4 seasonal bookmarks paired into 2 pieces (Spring–Summer and Autumn–Winter), each with its own illustration and story celebrating the beauty of Vietnam. Elegantly packaged.",
                mota_ja: "春夏・秋冬という2本の組み合わせで構成された、四季をテーマにしたしおりセットです。それぞれにベトナムの美しさを描いたイラストと小さな物語が込められており、上品なパッケージでお届けします。",
                ynghia: "Combo lý tưởng để sưu tầm hoặc tặng người yêu sách – lưu giữ bốn mùa ký ức trong từng trang sách.",
                ynghia_en: "An ideal combo for book lovers and collectors, keeping all four seasons of memories between your pages.",
                ynghia_ja: "本好き・コレクターの方にぴったりのセットです。ページのあいだに、四季それぞれの思い出をそっと挟んでおけます。"
            },
            thu: {
                media: [
                    { type: 'img', url: 'Media/Sanpham/Bookmark 4 mùa(1).webp' },
                    { type: 'img', url: 'Media/Sanpham/Bookmark 4 mùa.webp' }
                ],
                soluong: "2 thẻ (Xuân-Hạ, Thu-Đông)",
                soluong_en: "2 bookmarks (Spring–Summer, Autumn–Winter)",
                soluong_ja: "しおり2枚（春-夏・秋-冬）",
                mota: "Trọn bộ 4 thẻ đánh dấu trang theo bốn mùa, mỗi thẻ mang họa tiết và câu chuyện riêng về vẻ đẹp Việt Nam. Đóng gói tinh tế.",
                mota_en: "A combo of 4 seasonal bookmarks paired into 2 pieces (Spring–Summer and Autumn–Winter), each with its own illustration and story celebrating the beauty of Vietnam. Elegantly packaged.",
                mota_ja: "春夏・秋冬という2本の組み合わせで構成された、四季をテーマにしたしおりセットです。それぞれにベトナムの美しさを描いたイラストと小さな物語が込められており、上品なパッケージでお届けします。",
                ynghia: "Combo lý tưởng để sưu tầm hoặc tặng người yêu sách – lưu giữ bốn mùa ký ức trong từng trang sách.",
                ynghia_en: "An ideal combo for book lovers and collectors, keeping all four seasons of memories between your pages.",
                ynghia_ja: "本好き・コレクターの方にぴったりのセットです。ページのあいだに、四季それぞれの思い出をそっと挟んでおけます。"
            },
            dong: {
                media: [
                    { type: 'img', url: 'Media/Sanpham/Bookmark 4 mùa(1).webp' },
                    { type: 'img', url: 'Media/Sanpham/Bookmark 4 mùa.webp' }
                ],
                soluong: "2 thẻ (Xuân-Hạ, Thu-Đông)",
                soluong_en: "2 bookmarks (Spring–Summer, Autumn–Winter)",
                soluong_ja: "しおり2枚（春-夏・秋-冬）",
                mota: "Trọn bộ 4 thẻ đánh dấu trang theo bốn mùa, mỗi thẻ mang họa tiết và câu chuyện riêng về vẻ đẹp Việt Nam. Đóng gói tinh tế.",
                mota_en: "A combo of 4 seasonal bookmarks paired into 2 pieces (Spring–Summer and Autumn–Winter), each with its own illustration and story celebrating the beauty of Vietnam. Elegantly packaged.",
                mota_ja: "春夏・秋冬という2本の組み合わせで構成された、四季をテーマにしたしおりセットです。それぞれにベトナムの美しさを描いたイラストと小さな物語が込められており、上品なパッケージでお届けします。",
                ynghia: "Combo lý tưởng để sưu tầm hoặc tặng người yêu sách – lưu giữ bốn mùa ký ức trong từng trang sách.",
                ynghia_en: "An ideal combo for book lovers and collectors, keeping all four seasons of memories between your pages.",
                ynghia_ja: "本好き・コレクターの方にぴったりのセットです。ページのあいだに、四季それぞれの思い出をそっと挟んでおけます。"
            }
        }
    },
    // 6. Combo Sổ Tay / Notebook Combo / ノートセット
    {
        id: 6,
        versions: {
            xuan: {
                media: [
                    { type: 'img', url: 'Media/Sanpham/Sổ 4 mùa(1).webp' },
                    { type: 'img', url: 'Media/Sanpham/Sổ 4 mùa.webp' }
                ],
                soluong: "4 cuốn (Xuân · Hạ · Thu · Đông)",
                soluong_en: "4 notebooks (Spring · Summer · Autumn · Winter)",
                soluong_ja: "ノート4冊（春・夏・秋・冬）",
                mota: "Trọn bộ 4 cuốn sổ lò xo A6 theo bốn mùa, mỗi cuốn 160 trang giấy mịn cao cấp với thiết kế bìa độc đáo. Đóng gói hộp cứng sang trọng.",
                mota_en: "A full set of four A6 spiral notebooks (160 pages each), one for each season, with high‑quality smooth paper and unique cover art. Packed in a premium rigid box.",
                mota_ja: "各季節をテーマにしたA6サイズ・160ページのスパイラルノート4冊セットです。なめらかな上質紙と、それぞれ異なる表紙デザインが楽しめます。しっかりとしたギフトボックス入り。",
                ynghia: "Combo hoàn hảo để ghi lại khoảnh khắc theo mùa hoặc làm quà tặng ý nghĩa cho người thân yêu thích viết lách.",
                ynghia_en: "The perfect combo to record memories through the four seasons, or as a meaningful gift for anyone who loves writing.",
                ynghia_ja: "四季それぞれの思い出を書き留めるのにぴったりのセットで、書くことが好きな方への特別な贈り物にも最適です。"
            },
            ha: {
                media: [
                    { type: 'img', url: 'Media/Sanpham/Sổ 4 mùa(1).webp' },
                    { type: 'img', url: 'Media/Sanpham/Sổ 4 mùa.webp' }
                ],
                soluong: "4 cuốn (Xuân · Hạ · Thu · Đông)",
                soluong_en: "4 notebooks (Spring · Summer · Autumn · Winter)",
                soluong_ja: "ノート4冊（春・夏・秋・冬）",
                mota: "Trọn bộ 4 cuốn sổ lò xo A6 theo bốn mùa, mỗi cuốn 160 trang giấy mịn cao cấp với thiết kế bìa độc đáo. Đóng gói hộp cứng sang trọng.",
                mota_en: "A full set of four A6 spiral notebooks (160 pages each), one for each season, with high‑quality smooth paper and unique cover art. Packed in a premium rigid box.",
                mota_ja: "各季節をテーマにしたA6サイズ・160ページのスパイラルノート4冊セットです。なめらかな上質紙と、それぞれ異なる表紙デザインが楽しめます。しっかりとしたギフトボックス入り。",
                ynghia: "Combo hoàn hảo để ghi lại khoảnh khắc theo mùa hoặc làm quà tặng ý nghĩa cho người thân yêu thích viết lách.",
                ynghia_en: "The perfect combo to record memories through the four seasons, or as a meaningful gift for anyone who loves writing.",
                ynghia_ja: "四季それぞれの思い出を書き留めるのにぴったりのセットで、書くことが好きな方への特別な贈り物にも最適です。"
            },
            thu: {
                media: [
                    { type: 'img', url: 'Media/Sanpham/Sổ 4 mùa(1).webp' },
                    { type: 'img', url: 'Media/Sanpham/Sổ 4 mùa.webp' }
                ],
                soluong: "4 cuốn (Xuân · Hạ · Thu · Đông)",
                soluong_en: "4 notebooks (Spring · Summer · Autumn · Winter)",
                soluong_ja: "ノート4冊（春・夏・秋・冬）",
                mota: "Trọn bộ 4 cuốn sổ lò xo A6 theo bốn mùa, mỗi cuốn 160 trang giấy mịn cao cấp với thiết kế bìa độc đáo. Đóng gói hộp cứng sang trọng.",
                mota_en: "A full set of four A6 spiral notebooks (160 pages each), one for each season, with high‑quality smooth paper and unique cover art. Packed in a premium rigid box.",
                mota_ja: "各季節をテーマにしたA6サイズ・160ページのスパイラルノート4冊セットです。なめらかな上質紙と、それぞれ異なる表紙デザインが楽しめます。しっかりとしたギフトボックス入り。",
                ynghia: "Combo hoàn hảo để ghi lại khoảnh khắc theo mùa hoặc làm quà tặng ý nghĩa cho người thân yêu thích viết lách.",
                ynghia_en: "The perfect combo to record memories through the four seasons, or as a meaningful gift for anyone who loves writing.",
                ynghia_ja: "四季それぞれの思い出を書き留めるのにぴったりのセットで、書くことが好きな方への特別な贈り物にも最適です。"
            },
            dong: {
                media: [
                    { type: 'img', url: 'Media/Sanpham/Sổ 4 mùa(1).webp' },
                    { type: 'img', url: 'Media/Sanpham/Sổ 4 mùa.webp' }
                ],
                soluong: "4 cuốn (Xuân · Hạ · Thu · Đông)",
                soluong_en: "4 notebooks (Spring · Summer · Autumn · Winter)",
                soluong_ja: "ノート4冊（春・夏・秋・冬）",
                mota: "Trọn bộ 4 cuốn sổ lò xo A6 theo bốn mùa, mỗi cuốn 160 trang giấy mịn cao cấp với thiết kế bìa độc đáo. Đóng gói hộp cứng sang trọng.",
                mota_en: "A full set of four A6 spiral notebooks (160 pages each), one for each season, with high‑quality smooth paper and unique cover art. Packed in a premium rigid box.",
                mota_ja: "各季節をテーマにしたA6サイズ・160ページのスパイラルノート4冊セットです。なめらかな上質紙と、それぞれ異なる表紙デザインが楽しめます。しっかりとしたギフトボックス入り。",
                ynghia: "Combo hoàn hảo để ghi lại khoảnh khắc theo mùa hoặc làm quà tặng ý nghĩa cho người thân yêu thích viết lách.",
                ynghia_en: "The perfect combo to record memories through the four seasons, or as a meaningful gift for anyone who loves writing.",
                ynghia_ja: "四季それぞれの思い出を書き留めるのにぴったりのセットで、書くことが好きな方への特別な贈り物にも最適です。"
            }
        }
    },
    // 7. Set Quà Bốn Mùa / Seasonal Gift Set / 四季のギフトセット
    {
        id: 7,
        versions: {
            xuan: {
                media: [
                    { type: 'img', url: 'Media/Sanpham/Combo bookmark, postcard, sổ xuân(1).webp' },
                    { type: 'img', url: 'Media/Sanpham/Combo bookmark, postcard, sổ xuân.webp' }
                ],
                soluong: "1 hộp quà Xuân (1 postcard + 1 bookmark + 1 sổ + kẹo + 2 bút)",
                soluong_en: "1 Spring gift box (1 postcard + 1 bookmark + 1 notebook + candy + 2 pens)",
                soluong_ja: "春ギフトボックス1セット（ポストカード1枚＋しおり1本＋ノート1冊＋キャンディ＋ペン2本）",
                mota: "Hộp quà Mùa Xuân gồm 1 postcard + 1 bookmark + 1 sổ tay – sắc hồng hoa đào, không khí Tết ấm áp. Đóng hộp cứng cao cấp, kèm thiệp viết tay.",
                mota_en: "The Spring gift box includes 1 postcard, 1 bookmark and 1 notebook in soft pink peach blossom tones, bringing the warm atmosphere of Tet. Packed in a premium hard box, with a handwritten message card.",
                mota_ja: "春のギフトボックスには、桃の花をイメージしたやさしいピンク色のポストカード1枚・しおり1本・ノート1冊が入っています。テト（旧正月）のあたたかな空気を感じられるデザインで、上質なボックスに手書きメッセージカードを添えてお届けします。",
                ynghia: "Món quà trọn vẹn – tặng người thân trong dịp Tết, sinh nhật hay để nói 'Tôi nhớ bạn'.",
                ynghia_en: "A complete little gift to send for Tet, birthdays, or simply to say “I miss you”.",
                ynghia_ja: "テトや誕生日などの特別な日にはもちろん、「会いたいね」という気持ちをそっと伝えたいときにもぴったりの、心のこもったギフトです。"
            },
            ha: {
                media: [
                    { type: 'img', url: 'Media/Sanpham/Combo bookmark, postcard, sổ hạ(1).webp' },
                    { type: 'img', url: 'Media/Sanpham/Combo bookmark, postcard, sổ hạ.webp' }
                ],
                soluong: "1 hộp quà Hạ (1 postcard + 1 bookmark + 1 sổ + kẹo + 2 bút)",
                soluong_en: "1 Summer gift box (1 postcard + 1 bookmark + 1 notebook + candy + 2 pens)",
                soluong_ja: "夏ギフトボックス1セット（ポストカード1枚＋しおり1本＋ノート1冊＋キャンディ＋ペン2本）",
                mota: "Hộp quà Mùa Hạ gồm 1 postcard + 1 bookmark + 1 sổ tay – sắc xanh biển, hoa phượng đỏ và nắng hè rực rỡ. Đóng hộp cứng cao cấp, kèm thiệp viết tay.",
                mota_en: "The Summer gift box includes 1 postcard, 1 bookmark and 1 notebook in fresh sea blue, red flamboyant flowers and bright summer sunlight. Packed in a premium box with a handwritten card.",
                mota_ja: "夏のギフトボックスには、海のように鮮やかなブルーと真っ赤なホウオウボク、まぶしい夏の日差しをイメージしたポストカード・しおり・ノートが入っています。手書きメッセージカード付きのギフトボックス入り。",
                ynghia: "Món quà trọn vẹn – tặng người thân trong dịp sinh nhật hay để nói 'Tôi nhớ bạn'.",
                ynghia_en: "A vibrant, summery gift for birthdays or to send someone a burst of energy and affection.",
                ynghia_ja: "誕生日プレゼントや、「元気にしてる？」という気持ちを届けたいときにぴったりの、明るく夏らしいギフトです。"
            },
            thu: {
                media: [
                    { type: 'img', url: 'Media/Sanpham/Combo bookmark, postcard, sổ thu(1).webp' },
                    { type: 'img', url: 'Media/Sanpham/Combo bookmark, postcard, sổ thu.webp' }
                ],
                soluong: "1 hộp quà Thu (1 postcard + 1 bookmark + 1 sổ + kẹo + 2 bút)",
                soluong_en: "1 Autumn gift box (1 postcard + 1 bookmark + 1 notebook + candy + 2 pens)",
                soluong_ja: "秋ギフトボックス1セット（ポストカード1枚＋しおり1本＋ノート1冊＋キャンディ＋ペン2本）",
                mota: "Hộp quà Mùa Thu gồm 1 postcard + 1 bookmark + 1 sổ tay – lá vàng rơi, hoa sữa và cốm làng Vòng dịu dàng. Đóng hộp cứng cao cấp, kèm thiệp viết tay.",
                mota_en: "The Autumn gift box includes 1 postcard, 1 bookmark and 1 notebook with motifs of falling yellow leaves, milk flowers and gentle Vong village green rice. Packed in a premium box with a handwritten card.",
                mota_ja: "秋のギフトボックスには、舞い落ちる黄色い葉やホアスアの花、やさしい味わいの「コム」（若い米のお菓子）をイメージしたデザインのポストカード・しおり・ノートが入っています。手書きメッセージカード付きの上質ボックス入り。",
                ynghia: "Món quà trọn vẹn – tặng người thân dịp Tết Trung Thu hay để nói 'Tôi nhớ bạn'.",
                ynghia_en: "A thoughtful gift for Mid‑Autumn Festival or whenever you want to gently say “I’m thinking of you”.",
                ynghia_ja: "中秋節の贈り物としてはもちろん、「いつも想っているよ」という気持ちを静かに伝えたいときにもぴったりのギフトです。"
            },
            dong: {
                media: [
                    { type: 'img', url: 'Media/Sanpham/Combo bookmark, postcard, sổ đông(1).webp' },
                    { type: 'img', url: 'Media/Sanpham/Combo bookmark, postcard, sổ đông.webp' }
                ],
                soluong: "1 hộp quà Đông (1 postcard + 1 bookmark + 1 sổ + kẹo + 2 bút)",
                soluong_en: "1 Winter gift box (1 postcard + 1 bookmark + 1 notebook + candy + 2 pens)",
                soluong_ja: "冬ギフトボックス1セット（ポストカード1枚＋しおり1本＋ノート1冊＋キャンディ＋ペン2本）",
                mota: "Hộp quà Mùa Đông gồm 1 postcard + 1 bookmark + 1 sổ tay – ấm áp bên bếp lửa giữa đêm đông lạnh giá. Đóng hộp cứng cao cấp, kèm thiệp viết tay.",
                mota_en: "The Winter gift box includes 1 postcard, 1 bookmark and 1 notebook themed around a warm fire on a cold winter night. Packed in a premium hard box with a handwritten message card.",
                mota_ja: "冬のギフトボックスには、冷たい夜にともる焚き火のあたたかさをテーマにしたポストカード・しおり・ノートが入っています。手書きメッセージカード付きのしっかりとしたギフトボックス入り。",
                ynghia: "Món quà trọn vẹn – tặng người thân dịp Giáng sinh, năm mới hay để nói 'Tôi nhớ bạn'.",
                ynghia_en: "A heart‑warming present for Christmas, New Year, or simply to send warmth across the distance.",
                ynghia_ja: "クリスマスや新年の贈り物として、また遠く離れた大切な人にぬくもりを届けたいときにぴったりのギフトです。"
            }
        }
    }
];

// ============================================
// BIẾN TOÀN CỤC CHO ADMIN
// ============================================
let currentProduct = null;
let currentMediaList = [];
let currentSlideIndex = 0;
let currentSelectedProducts = []; // [{id, version}]
let currentSeasonPasswords = { spring: '', summer: '', autumn: '', winter: '' };
let editingOrderId = null;
let currentOrderData = null;

document.addEventListener('DOMContentLoaded', function () {
    console.log('🚀 Đang khởi tạo...');
    initProducts();
    initAdminProductSelect();
    renderSakura();
    initConstellation();
    initVietnamSeasons();

    // Giữ trang hiện tại khi reload
    const savedSection = sessionStorage.getItem('currentSection');
    if (savedSection) {
        if (savedSection === 'thank-you-page') {
            const savedOrder = sessionStorage.getItem('currentOrderCode');
            if (savedOrder) {
                document.getElementById('order-search-input').value = savedOrder;
                setTimeout(() => checkOrder(), 500);
            } else {
                showSection('home-page');
            }
        } else if (savedSection === 'admin-dashboard') {
            if (sessionStorage.getItem('isAdminLoggedIn') === 'true') {
                showSection('admin-dashboard');
                const header = document.getElementById('header-bar');
                if (header) header.style.display = 'none';
            } else {
                showSection('home-page');
            }
        } else {
            showSection(savedSection);
        }
    }

    // Hỗ trợ phím Enter trên các ô input
    document.querySelectorAll('input').forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                if (this.id === 'order-search-input') checkOrder();
                else if (this.id === 'secret-password-input') verifyPassword();
                else if (this.id === 'admin-pass') loginAdmin();
            }
        });
    });
});

/* ============================================
   === HƯƠNG SẮC VIỆT NAM - SEASONS INTERACTIVITY ===
   ============================================ */
function initVietnamSeasons() {
    // ── Season tabs (Real-Time Collaborative Animation) ──
    const seasonTabs = document.querySelectorAll('.vsn-stab');
    const seasonPanels = document.querySelectorAll('.vsn-panel');

    seasonTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetSeason = tab.dataset.season;

            // Ripple wave effect trên nút
            tab.style.position = 'relative';
            tab.style.overflow = 'hidden';
            tab.classList.add('ripple-wave');
            setTimeout(() => tab.classList.remove('ripple-wave'), 520);

            // Cập nhật active tab
            seasonTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Chuyển panel với morph animation
            seasonPanels.forEach(panel => {
                if (panel.dataset.season === targetSeason) {
                    panel.classList.add('active');
                } else {
                    panel.classList.remove('active');
                }
            });

            // Đổi màu nền section theo mùa
            const sectionEl = document.getElementById('vietnam-seasons');
            const seasonColors = {
                spring: 'rgba(255,184,200,0.15)',
                summer: 'rgba(255,210,100,0.15)',
                autumn: 'rgba(244,162,97,0.18)',
                winter: 'rgba(168,216,234,0.2)'
            };
            if (sectionEl) sectionEl.style.background = seasonColors[targetSeason] || 'rgba(255,255,255,0.4)';
        });
    });

    // ── Region tabs (Real-Time Rendering shimmer) ──
    const regionTabs = document.querySelectorAll('.vsn-rtab');
    regionTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetRegion = tab.dataset.region;
            const parentPanel = tab.closest('.vsn-panel');
            if (!parentPanel) return;

            // Cập nhật active region tab
            parentPanel.querySelectorAll('.vsn-rtab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Shimmer-reveal region card
            parentPanel.querySelectorAll('.vsn-region-card').forEach(card => {
                if (card.dataset.region === targetRegion) {
                    card.classList.add('active');
                } else {
                    card.classList.remove('active');
                }
            });
        });
    });
}

/* ============================================
   === HIỂN THỊ SẢN PHẨM TRANG CHỦ ===
   ============================================ */
function getProductCard(p) {
    let thumbUrl = "https://via.placeholder.com/300?text=San+Pham";
    const firstVersionKey = Object.keys(p.versions)[0];
    const firstVersion = p.versions[firstVersionKey];
    if (firstVersion && firstVersion.media && firstVersion.media.length > 0) thumbUrl = firstVersion.media[0].url;
    const productName = t(`product.${p.id}.name`);
    const viewDetail = t('products.viewDetail');
    return `<div class="product-item" onclick="openProductModal(${p.id})">
        <img src="${thumbUrl}" alt="${productName}">
        <h3>${productName}</h3>
        <p style="font-size: 0.9rem; color: #777;">${viewDetail}</p>
    </div>`;
}

function initProducts() {
    const list = document.getElementById('product-list');
    if (!list) return;
    // Row 1: products 1, 2, 3
    const row1 = products.slice(0, 3).map(p => getProductCard(p)).join('');
    // Row 2: products 4, 5, 6
    const row2 = products.slice(3, 6).map(p => getProductCard(p)).join('');
    // Row 3: product 7 centered
    const row3 = '<div class="product-item full-row" onclick="openProductModal(' + products[6].id + ')">' + (() => {
        const p = products[6];
        const firstKey = Object.keys(p.versions)[0];
        const firstVersion = p.versions[firstKey];
        const thumbUrl = (firstVersion && firstVersion.media && firstVersion.media.length > 0) ? firstVersion.media[0].url : "https://via.placeholder.com/300?text=San+Pham";
        const productName = t(`product.${p.id}.name`);
        const viewDetail = t('products.viewDetail');
        return `<img src="${thumbUrl}" alt="${productName}"><h3>${productName}</h3><p style="font-size: 0.9rem; color: #777;">${viewDetail}</p>`;
    })() + '</div>';
    list.innerHTML = `
        <div class="product-row">${row1}</div>
        <div class="product-row">${row2}</div>
        <div class="product-row-single">${row3}</div>
    `;
}

/* ============================================
   === LOGIC SLIDER MODAL ===
   ============================================ */
function openProductModal(id) {
    currentProduct = products.find(p => p.id === id);
    if (!currentProduct) return;
    document.getElementById('product-modal').classList.remove('hidden');
    document.getElementById('modal-title').innerText = t(`product.${currentProduct.id}.name`);

    // Dynamic season buttons based on product versions
    const container = document.getElementById('season-selectors');
    if (container) {
        // Với các combo 4,5,6: chỉ hiển thị 1 nút "Bốn Mùa"
        if ([4, 5, 6].includes(currentProduct.id)) {
            container.innerHTML = `<button class="season-btn combo-all-btn active" onclick="changeProductVersion('combo_all')"><span data-i18n="version.combo_all">${t('version.combo_all')}</span></button>`;
        } else {
            const versionKeys = Object.keys(currentProduct.versions);
            const labelMap = {
                xuan: 'modal.season.spring',
                ha: 'modal.season.summer',
                thu: 'modal.season.autumn',
                dong: 'modal.season.winter',
                xuan_ha: 'modal.season.spring_summer',
                thu_dong: 'modal.season.autumn_winter',
                tat_ca: 'modal.season.all'
            };
            container.innerHTML = versionKeys.map(key => {
                const i18nKey = labelMap[key] || key;
                const label = t(i18nKey);
                return `<button class="season-btn" onclick="changeProductVersion('${key}')"><span data-i18n="${i18nKey}">${label}</span></button>`;
            }).join('');
        }
    }

    // Mặc định chọn:
    // - combo: 'combo_all'
    // - sản phẩm thường: phiên bản đầu tiên
    const defaultKey = [4, 5, 6].includes(currentProduct.id)
        ? 'combo_all'
        : Object.keys(currentProduct.versions)[0];
    changeProductVersion(defaultKey);
}

function closeModal() {
    document.getElementById('product-modal').classList.add('hidden');
    document.getElementById('slider-track').innerHTML = '';
}

function changeProductVersion(season) {
    if (!currentProduct) return;
    document.querySelectorAll('.season-btn').forEach(btn => btn.classList.remove('active'));

    // Với các combo 4,5,6: luôn dùng chung một phiên bản (lấy theo mùa đầu tiên)
    let versionData;
    if ([4, 5, 6].includes(currentProduct.id) && season === 'combo_all') {
        const firstKey = Object.keys(currentProduct.versions)[0];
        versionData = currentProduct.versions[firstKey];
    } else {
        versionData = currentProduct.versions[season];
    }
    let mediaData = versionData?.media || [];
    if (!mediaData || mediaData.length === 0) {
        mediaData = [{ type: 'img', url: 'https://via.placeholder.com/600x400?text=Chua+co+hinh+anh' }];
    }
    // Update per-season descriptions (đa ngôn ngữ)
    if (versionData) {
        const lang = (typeof currentLanguage !== 'undefined') ? currentLanguage : 'vi';
        const pick = (base, en, ja) => {
            if (lang === 'en' && en) return en;
            if (lang === 'ja' && ja) return ja;
            return base || '';
        };

        const qty = pick(
            versionData.soluong,
            versionData.soluong_en,
            versionData.soluong_ja
        );
        const desc = pick(
            versionData.mota,
            versionData.mota_en,
            versionData.mota_ja
        );
        const meaning = pick(
            versionData.ynghia,
            versionData.ynghia_en,
            versionData.ynghia_ja
        );

        document.getElementById('modal-material').innerText = qty;
        document.getElementById('modal-method').innerText = desc;
        document.getElementById('modal-meaning').innerText = meaning;
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

    hint.innerHTML = ``;
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

// Bảng tên phiên bản (dùng chung)
const VERSION_NAMES = {
    xuan: 'Xuân 🌸', ha: 'Hạ ☀️', thu: 'Thu 🍂', dong: 'Đông ❄️',
    xuan_ha: 'Xuân - Hạ 🌸☀️', thu_dong: 'Thu - Đông 🍂❄️',
    combo_all: 'Bốn Mùa 🎁', tat_ca: 'Tất Cả ✨'
};

function initAdminProductSelect() {
    const select = document.getElementById('adm-product-select');
    if (!select) return;

    select.innerHTML = '<option value="" disabled selected>-- Chọn sản phẩm --</option>';

    products.forEach(p => {
        const option = document.createElement('option');
        option.value = p.id;
        option.textContent = `${p.id}. ${t('product.' + p.id + '.name')}`;
        select.appendChild(option);
    });

    // Reset version select
    const vSelect = document.getElementById('adm-version-select');
    if (vSelect) { vSelect.style.display = 'none'; vSelect.innerHTML = ''; }
}

function updateVersionSelect() {
    const pSelect = document.getElementById('adm-product-select');
    const vSelect = document.getElementById('adm-version-select');
    if (!pSelect || !vSelect) return;

    const val = pSelect.value;
    if (!val) { vSelect.style.display = 'none'; return; }

    const product = products.find(p => p.id === parseInt(val));
    if (!product) return;

    const versionKeys = Object.keys(product.versions);

    // Combo (id 4,5,6): chỉ 1 version, ẩn dropdown
    if ([4, 5, 6].includes(product.id)) {
        vSelect.style.display = 'none';
        return;
    }

    vSelect.innerHTML = '<option value="" disabled selected>-- Chọn phân loại --</option>';
    versionKeys.forEach(key => {
        const option = document.createElement('option');
        option.value = key;
        option.textContent = VERSION_NAMES[key] || key;
        vSelect.appendChild(option);
    });
    vSelect.style.display = '';
}

function addProductToSelection() {
    const pSelect = document.getElementById('adm-product-select');
    const vSelect = document.getElementById('adm-version-select');
    if (!pSelect) return;

    const val = pSelect.value;
    if (!val) { alert('Vui lòng chọn sản phẩm!'); return; }

    const numVal = parseInt(val);
    const product = products.find(p => p.id === numVal);

    // Xác định version
    let versionKey;
    if ([4, 5, 6].includes(numVal)) {
        // Combo: tự động dùng key đầu tiên
        versionKey = Object.keys(product.versions)[0];
    } else {
        versionKey = vSelect ? vSelect.value : '';
        if (!versionKey) { alert('Vui lòng chọn phân loại sản phẩm!'); return; }
    }

    // Kiểm tra trùng (cùng id + version)
    const exists = currentSelectedProducts.some(item => item.id === numVal && item.version === versionKey);
    if (!exists) {
        currentSelectedProducts.push({ id: numVal, version: versionKey });
        renderSelectedProductsList();
    } else {
        alert('Phân loại sản phẩm này đã có trong đơn!');
    }

    pSelect.value = '';
    if (vSelect) { vSelect.style.display = 'none'; vSelect.innerHTML = ''; vSelect.value = ''; }
}

function removeProductSelection(idx) {
    currentSelectedProducts.splice(idx, 1);
    renderSelectedProductsList();
}

function renderSelectedProductsList() {
    const container = document.getElementById('selected-products-list');
    if (!container) return;

    if (currentSelectedProducts.length === 0) {
        container.innerHTML = '<span class="empty-msg" style="color:#999;font-style:italic;">Chưa có sản phẩm nào</span>';
        return;
    }

    container.innerHTML = currentSelectedProducts.map((item, idx) => {
        const p = products.find(prod => prod.id === item.id);
        const pName = p ? t('product.' + p.id + '.name') : 'ID:' + item.id;
        const vName = VERSION_NAMES[item.version] || item.version || '';
        return `
            <div class="prod-tag">
                ${pName}${vName ? ' · ' + vName : ''}
                <i class="fas fa-times-circle" onclick="removeProductSelection(${idx})" style="cursor:pointer;color:#d63031;margin-left:5px;"></i>
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

    if (id.length !== 4) {
        alert("Vui lòng tạo hoặc nhập mã đơn 4 số");
        return;
    }
    if (currentSelectedProducts.length === 0) {
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
            product_ids: currentSelectedProducts,
            is_edited: !!editingOrderId
        };

        // Supabase v2 yêu cầu onConflict khi upsert có primary key
        const { error: orderError } = await supabaseClient
            .from('orders')
            .upsert([orderData], { onConflict: 'id' });

        if (orderError) throw orderError;

        // Xóa passwords cũ trước (dù tạo mới hay sửa)
        await supabaseClient
            .from('season_passwords')
            .delete()
            .eq('order_id', id);

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
        // Tương thích ngược: nếu cũ là mảng số nguyên thì convert
        const rawIds = order.product_ids || [];
        currentSelectedProducts = rawIds.map(item => {
            if (typeof item === 'object' && item !== null) return item;
            return { id: parseInt(item), version: 'combo_all' };
        });
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
    currentSelectedProducts = [];
    renderSelectedProductsList();

    const vSelect = document.getElementById('adm-version-select');
    if (vSelect) { vSelect.style.display = 'none'; vSelect.innerHTML = ''; }
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
        sessionStorage.setItem('isAdminLoggedIn', 'true');
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
    document.getElementById('adm-order-id').value = Math.floor(1000 + Math.random() * 9000).toString();
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
                        <button onclick="printOrderRow(this)" style="background:#6c5ce7; color:white; border:none; padding:5px 10px; border-radius:5px; cursor:pointer; margin-right:5px;">In đơn</button>
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

function printOrderRow(btn) {
    const row = btn?.closest('tr');
    if (!row) return;

    // Clone row và bỏ cột thao tác trước khi in
    const printRow = row.cloneNode(true);
    const actionCell = printRow.querySelector('td:last-child');
    if (actionCell) actionCell.remove();

    const printWindow = window.open('', '_blank', 'width=1000,height=700');
    if (!printWindow) {
        alert('Trình duyệt đã chặn cửa sổ in. Vui lòng cho phép popup và thử lại.');
        return;
    }

    printWindow.document.write(`
        <!DOCTYPE html>
        <html lang="vi">
        <head>
            <meta charset="UTF-8">
            <title>In đơn hàng</title>
            <style>
                body { font-family: Arial, sans-serif; padding: 20px; color: #333; }
                h2 { margin: 0 0 14px; font-size: 22px; }
                table { width: 100%; border-collapse: collapse; }
                th, td { border: 1px solid #ddd; padding: 10px; vertical-align: top; text-align: left; }
                th { background: #f8d7df; }
                img { width: 70px; height: 70px; display: inline-block; margin-top: 4px; }
                @media print {
                    body { margin: 0; padding: 12px; }
                }
            </style>
        </head>
        <body>
            <h2>Thông tin đơn hàng</h2>
            <table>
                <thead>
                    <tr>
                        <th>Mã Đơn</th>
                        <th>Tiêu đề</th>
                        <th>Mật khẩu các mùa & QR</th>
                    </tr>
                </thead>
                <tbody>
                    ${printRow.outerHTML}
                </tbody>
            </table>
            <script>
                window.onload = function () {
                    window.focus();
                    window.print();
                };
            </script>
        </body>
        </html>
    `);
    printWindow.document.close();
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
            supabaseStatus.innerHTML = 'Connected <i class="fas fa-check"></i>';
            supabaseStatus.className = 'badge success';
        } else {
            supabaseStatus.innerHTML = 'Error <i class="fas fa-times"></i>';
            supabaseStatus.className = 'badge error';
        }
    } catch (e) {
        document.getElementById('supabase-status').innerHTML = 'Error <i class="fas fa-times"></i>';
    }

    // Check Groq API
    await updateApiStatusDisplay();
}

async function updateApiStatusDisplay() {
    const status = await window.SupabaseAPI.checkApiKeyStatus();
    const display = document.getElementById('api-status-display');
    const groqStatus = document.getElementById('groq-status');

    if (status.configured) {
        display.innerHTML = `${status.message} <i class="fas fa-check-circle"></i>`;
        display.style.color = '#00b894';
        groqStatus.innerHTML = 'Ready <i class="fas fa-check"></i>';
        groqStatus.className = 'badge success';
    } else {
        display.innerHTML = `${status.message} <i class="fas fa-times-circle"></i>`;
        display.style.color = '#e74c3c';
        groqStatus.innerHTML = 'Not Configured <i class="fas fa-times"></i>';
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
    if (btn) btn.innerHTML = 'Testing... <i class="fas fa-spinner fa-spin"></i>';

    try {
        // Test bằng cách gọi trực tiếp Groq API qua callGroqAPI
        const result = await window.SupabaseAPI.callGroqAPI(
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==',
            'Test connection. Reply with: OK'
        );
        alert('✅ Kết nối API thành công!\nPhản hồi: ' + (result.content || 'OK'));
    } catch (err) {
        alert('❌ Lỗi kết nối: ' + err.message);
    } finally {
        if (btn) btn.innerHTML = 'Test <i class="fas fa-vial"></i>';
    }
}

/* ============================================
   === NAVIGATION & UTILS ===
   ============================================ */
function showSection(sectionId) {
    sessionStorage.setItem('currentSection', sectionId);
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
    tyEffectsInitialized = false;
    sessionStorage.removeItem('currentSection');
    sessionStorage.removeItem('currentOrderCode');
    window.location.href = 'index.html';
}

/* ============================================
   === SPOTIFY EMBED URL HELPER ===
   ============================================ */
/**
 * Convert any Spotify URL to an embed URL.
 * Handles:
 *   https://open.spotify.com/track/xxx       → https://open.spotify.com/embed/track/xxx
 *   https://open.spotify.com/embed/track/xxx → unchanged (already embed)
 *   https://spotify.link/xxx                 → returned as-is (short links not embeddable)
 */
function toSpotifyEmbedUrl(url) {
    try {
        const u = new URL(url);
        // Already an embed URL
        if (u.pathname.startsWith('/embed/')) return url;
        // Regular open.spotify.com URL - insert /embed
        if (u.hostname === 'open.spotify.com') {
            return `https://open.spotify.com/embed${u.pathname}${u.search}`;
        }
    } catch (e) {
        // Invalid URL - return as-is
    }
    return url;
}

/* ============================================
   === CHECK ORDER ===
   ============================================ */
async function checkOrder() {
    const code = document.getElementById('order-search-input').value;
    if (code.length !== 4) { alert(t('alert.orderCodeLength')); return; }

    sessionStorage.setItem('currentOrderCode', code);

    try {
        const { data: order, error } = await supabaseClient
            .from('orders')
            .select('*')
            .eq('id', code)
            .single();

        if (error || !order) {
            alert(t('alert.orderNotFound'));
            return;
        }

        currentOrderData = order;
        showSection('thank-you-page');
        renderThankYouPage(order);

    } catch (err) {
        alert("Lỗi tra cứu: " + err.message);
    }
}

// Render toàn bộ nội dung trang cảm ơn (có thể gọi lại khi đổi ngôn ngữ)
function renderThankYouPage(order) {
    if (!order) return;

    // Tiêu đề (từ DB)
    const titleEl = document.getElementById('ty-title');
    if (titleEl) titleEl.innerText = order.title || 'Gửi đến bạn';

    // Nội dung lời nhắn
    const contentEl = document.getElementById('ty-content');
    if (contentEl) contentEl.innerText = order.content || '';

    // Lời nhắn bí mật
    const secretBox = document.getElementById('secret-message-box');
    const secretContent = document.getElementById('secret-message-content');
    if (secretBox && order.secret_message && order.secret_message.trim() !== '') {
        secretBox.style.display = 'block';
        if (secretContent) secretContent.innerText = order.secret_message;
        initTySecretBtn();
    } else if (secretBox) {
        secretBox.style.display = 'none';
    }

    // Danh sách sản phẩm
    const prodDiv = document.getElementById('ty-products');
    if (prodDiv) {
        if (order.product_ids && order.product_ids.length > 0) {
            const versionNames = {
                xuan: t('version.xuan'), ha: t('version.ha'), thu: t('version.thu'), dong: t('version.dong'),
                xuan_ha: t('version.xuan_ha'), thu_dong: t('version.thu_dong'),
                combo_all: t('version.combo_all'), tat_ca: t('version.tat_ca')
            };
            prodDiv.innerHTML = order.product_ids.map(item => {
                // Tương thích ngược: hỗ trợ cả số nguyên lẫn object
                const pid = (typeof item === 'object' && item !== null) ? item.id : item;
                const versionKey = (typeof item === 'object' && item !== null) ? item.version : null;
                const p = products.find(prod => prod.id == pid);
                if (!p) return '';
                // Dùng ảnh đúng phiên bản nếu có
                const versionData = (versionKey && p.versions[versionKey])
                    ? p.versions[versionKey]
                    : p.versions[Object.keys(p.versions)[0]];
                const firstMedia = versionData?.media[0]?.url || 'https://via.placeholder.com/150';
                const vName = versionKey ? (versionNames[versionKey] || versionKey) : '';
                return `<div class="ty-product-item">
                    <img src="${firstMedia}" alt="${t(`product.${p.id}.name`)}">
                    <p>${t(`product.${p.id}.name`)}</p>
                    ${vName ? `<span class="ty-product-version">${vName}</span>` : ''}
                </div>`;
            }).join('');
        } else {
            prodDiv.innerHTML = `<p style="font-family:'Cormorant Garamond',serif;color:#c2677a;font-style:italic;">${t('thankyou.noProducts')}</p>`;
        }
    }

    // Spotify embed
    const spotifyDiv = document.getElementById('ty-spotify');
    if (spotifyDiv) {
        if (order.spotify) {
            const embedUrl = toSpotifyEmbedUrl(order.spotify);
            if (!spotifyDiv.dataset.loadedUrl || spotifyDiv.dataset.loadedUrl !== embedUrl) {
                spotifyDiv.innerHTML = `<iframe style="border-radius:16px" src="${embedUrl}" width="100%" height="152" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`;
                spotifyDiv.dataset.loadedUrl = embedUrl;
            }
        } else {
            spotifyDiv.innerHTML = '';
            spotifyDiv.dataset.loadedUrl = '';
        }
    }

    // Initialize thank-you page visual effects
    initTyPageEffects();
}

function initTySecretBtn() {
    const btn = document.getElementById('ty-secret-btn');
    const reveal = document.getElementById('ty-secret-reveal');
    if (!btn || !reveal) return;
    const iconEl = btn.querySelector('.btn-icon');
    const textEl = btn.querySelector('[data-i18n]');

    function setSecretBtnLabel(isOpen) {
        if (iconEl) iconEl.textContent = isOpen ? '🌷' : '🌸';
        if (textEl) {
            const key = isOpen ? 'thankyou.secretHide' : 'thankyou.secretMessage';
            textEl.setAttribute('data-i18n', key);
            textEl.textContent = t(key);
        }
    }

    let open = reveal.classList.contains('open');
    setSecretBtnLabel(open);

    btn.onclick = () => {
        open = !open;
        reveal.classList.toggle('open', open);
        setSecretBtnLabel(open);
    };
}

let tyEffectsInitialized = false;
function initTyPageEffects() {
    if (tyEffectsInitialized) return;
    tyEffectsInitialized = true;

    // Animated gradient BG
    const bgCanvas = document.getElementById('ty-bg-canvas');
    if (bgCanvas) {
        const bgCtx = bgCanvas.getContext('2d');
        let W = bgCanvas.width = window.innerWidth;
        let H = bgCanvas.height = window.innerHeight;
        window.addEventListener('resize', () => { W = bgCanvas.width = window.innerWidth; H = bgCanvas.height = window.innerHeight; });
        const blobs = Array.from({ length: 6 }, (_, i) => ({
            x: Math.random() * 1200, y: Math.random() * 900,
            r: 200 + Math.random() * 300, vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35,
            h: [340, 355, 10, 25, 330, 350][i], s: [0.6, 0.5, 0.55, 0.6, 0.5, 0.55][i], l: [0.88, 0.9, 0.92, 0.88, 0.9, 0.92][i],
        }));
        function drawBg(t) {
            bgCtx.clearRect(0, 0, W, H);
            bgCtx.fillStyle = '#fde8ef'; bgCtx.fillRect(0, 0, W, H);
            blobs.forEach(b => {
                b.x += b.vx; b.y += b.vy;
                if (b.x < -b.r) b.x = W + b.r; if (b.x > W + b.r) b.x = -b.r;
                if (b.y < -b.r) b.y = H + b.r; if (b.y > H + b.r) b.y = -b.r;
                const hue = b.h + Math.sin(t * 0.0003 + b.x * 0.001) * 12;
                const grad = bgCtx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
                grad.addColorStop(0, `hsla(${hue},${b.s * 100}%,${b.l * 100}%,0.55)`);
                grad.addColorStop(1, `hsla(${hue},${b.s * 100}%,${b.l * 100}%,0)`);
                bgCtx.fillStyle = grad; bgCtx.beginPath(); bgCtx.arc(b.x, b.y, b.r, 0, Math.PI * 2); bgCtx.fill();
            });
            requestAnimationFrame(drawBg);
        }
        requestAnimationFrame(drawBg);
    }

    // Particles
    const pCanvas = document.getElementById('ty-particles-canvas');
    if (pCanvas) {
        const pCtx = pCanvas.getContext('2d');
        pCanvas.width = window.innerWidth; pCanvas.height = window.innerHeight;
        window.addEventListener('resize', () => { pCanvas.width = window.innerWidth; pCanvas.height = window.innerHeight; });
        const particles = Array.from({ length: 55 }, () => ({
            x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight,
            r: 0.8 + Math.random() * 2.8, vx: (Math.random() - 0.5) * 0.3, vy: -0.15 - Math.random() * 0.4,
            op: 0.1 + Math.random() * 0.55, pulse: Math.random() * Math.PI * 2,
        }));
        function drawP() {
            pCtx.clearRect(0, 0, pCanvas.width, pCanvas.height);
            const t = Date.now() * 0.001;
            particles.forEach(p => {
                p.x += p.vx + Math.sin(t * 0.5 + p.pulse) * 0.18; p.y += p.vy; p.pulse += 0.008;
                if (p.y < -10) { p.y = pCanvas.height + 10; p.x = Math.random() * pCanvas.width; }
                if (p.x < -10) p.x = pCanvas.width + 10; if (p.x > pCanvas.width + 10) p.x = -10;
                const op = p.op * (0.6 + 0.4 * Math.sin(t + p.pulse));
                const size = p.r * (0.85 + 0.15 * Math.sin(t * 0.7 + p.pulse));
                const grd = pCtx.createRadialGradient(p.x, p.y, 0, p.x, p.y, size * 3);
                grd.addColorStop(0, `rgba(244,167,185,${op})`);
                grd.addColorStop(0.5, `rgba(232,160,180,${op * 0.5})`);
                grd.addColorStop(1, `rgba(244,167,185,0)`);
                pCtx.fillStyle = grd; pCtx.beginPath(); pCtx.arc(p.x, p.y, size * 3, 0, Math.PI * 2); pCtx.fill();
            });
            requestAnimationFrame(drawP);
        }
        drawP();
    }

    // Parallax on hero
    window.addEventListener('scroll', () => {
        const heroInner = document.querySelector('.ty-hero-inner');
        if (heroInner) {
            const sy = window.scrollY;
            const op = Math.max(0, 1 - sy / (window.innerHeight * 0.7));
            heroInner.style.opacity = op;
            heroInner.style.transform = `translateY(${sy * 0.3}px)`;
        }
    }, { passive: true });
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