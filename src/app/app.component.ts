import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  listProducts = [
    {
      id: 1,
      name: 'Bàn phím cơ AKKO 3098S One Piece',
      price: 2590000,
      image: '../assets/AKKO_3098S_One_Piece.webp',
      description: 'Bàn phím cơ AKKO 3098S One Piece là chiếc bàn phím cơ sở hữu thiết kế bắt mắt và độc đáo trong phân khúc bàn phím 2-3 triệu. Thiết kế bàn phím nổi bật với kí tự được làm mới theo phong cách hoạt hình One Piece, trải nghiệm đánh máy mượt mà và hệ thống đèn LED sống động đã tạo nên một gaming gear đáng mua cho game thủ.',
      status: true
    },
    {
      id: 2,
      name: 'Bàn phím cơ AKKO MonsGeek MG108 Black&Pink',
      price: 1390000,
      image: '../assets/AKKO_MonsGeek_MG108_Black_Pink.webp',
      description: 'AKKO MonsGeek MG108 Black&Pink là dòng bàn phím cơ với thiết kế Fullsize 108 phím bấm tiện lợi, tông màu nổi bật làm không gian làm việc giải trí trở nên sinh động và tăng thêm phấn khởi khi chơi game. Hứa hẹn AKKO MonsGeek MG108 sẽ là dòng bàn phím máy tính mang đến cho bạn những trải nghiệm tuyệt vời với giá thành hấp dẫn phù hợp với mọi đối tượng.',
      status: false
    },
    {
      id: 3,
      name: 'Bàn phím cơ AKKO MonsGeek MG108 Doll of Princess',
      price: 1390000,
      image: '../assets/AKKO_MonsGeek_MG108_Doll_of_Princess.webp',
      description: 'AKKO MonsGeek MG108 Doll of Princess là dòng bàn phím cơ với thiết kế Fullsize tiện lợi, tông màu nổi bật giúp không gian làm việc giải trí trở nên sinh động và thêm phần ấn tượng. Hứa hẹn AKKO MonsGeek MG108 Doll of Princess sẽ là dòng bàn phím máy tính giá thành hấp dẫn, phù hợp với người dùng mới và dễ tiếp cận.',
      status: true
    },
    {
      id: 4,
      name: 'Bàn phím cơ AKKO 3108 RF Matcha Red Bean',
      price: 1490000,
      image: '../assets/AKKO_3108_RF_Red_Bean.webp',
      description: 'AKKO 3108 RF Matcha Red Bean V3 là dòng bàn phím máy tính với nhiều tính năng nổi bật, tone màu ấn tượng độc đáo. Thuộc Series 3108 đến từ AKKO, nên được thừa hưởng thiết kế Fullsize cùng cụm phím số numpad tiện lợi. ',
      status: true
    },
    {
      id: 5,
      name: 'Bàn phím cơ AKKO 3087 RF Matcha Red Bean',
      price: 1390000,
      image: '../assets/AKKO_3087_RF_Red_Bean.webp',
      description: 'AKKO 3087 RF Matcha Red Bean dòng bàn phím máy tính sở hữu tông màu nổi bật, thiết kế Tenkeyless nhỏ gọn tinh tế với 87 phím bấm. Không dừng lại ở đó, cùng nhiều cải tiến mới mẻ AKKO 3087 RF sẽ mang đến cho bạn cảm giác gõ phím rất đáng trải nghiệm, hãy đến ngay các showroom của GEARVN để test bàn phím ngay nhé!',
      status: true
    },
    {
      id: 6,
      name: 'Bàn phím cơ AKKO 3108 RF Ocean Star',
      price: 1490000,
      image: '../assets/AKKO_3108_RF_Ocean_Star.webp',
      description: 'AKKO 3108 RF Ocean Star V3 dòng bàn phím máy tính với nhiều tính năng nổi bật, tone màu ấn tượng độc đáo tạo nên sự tươi mới cho mọi không gian làm việc và giải trí. Thuộc Series 3108 đến từ AKKO, được thừa hưởng thiết kế Fullsize cùng cụm phím số numpad tiện lợi. ',
      status: true
    },
    {
      id: 7,
      name: 'Bàn phím cơ AKKO 3087 RF Ocean Star',
      price: 1390000,
      image: '../assets/AKKO_3087_RF_Ocean_Star.webp',
      description: 'AKKO 3087 RF dòng bàn phím máy tính mới nhất đến từ AKKO, sở hữu tone màu mát mẻ Ocean Star, thiết kế nhỏ gọn với 87 phím bấm. Đặc biệt, dòng bàn phím mới nhất thuộc thuộc series 3087 còn được tích hợp nhiều tính năng hiện đại giúp bạn có thể kết nối và sử dụng ở bất kỳ đâu.',
      status: false
    },
    {
      id: 8,
      name: 'Bàn phím cơ AKKO MOD007 PC Blue on White',
      price: 2490000,
      image: '../assets/AKKO_MOD007_PC_Blue_on_White.webp',
      description: 'Thương hiệu bàn phím cơ nổi tiếng Akko đã ghi điểm trong mắt người dùng của mình với rất nhiều sản phẩm chất lượng ở mọi phân khúc, từ giá rẻ đến cao cấp. Đến nay, Akko đã nâng cấp toàn diện cho dàn sản phẩm với những series chất lượng trong đó AKKO MOD007 PC Blue on White xứng đáng là cái tên xuất hiện trong lineup cao cấp này. Tìm hiểu ngay chiếc bàn phím Akko xịn sò này cùng GEARVN nhé !',
      status: true
    },
    {
      id: 9,
      name: 'Bàn phím cơ AKKO 5108S Honkai Impact 3rd Stygian Nymph',
      price: 2690000,
      image: '../assets/AKKO_5108S_Honkai_Impact_3rd_Stygian_Nymph.webp',
      description: 'Thương hiệu bàn phím cơ Akko đã vô cùng nổi tiếng với tính năng cùng thiết kế đặc biệt của sản phẩm. Nhắc đến thiết kế, ta không thể không nhắc đến những chiếc bàn phím nổi bật với các chi tiết dựa theo các tựa game và phim nổi tiếng. Và hôm nay, GEARVN sẽ giới thiệu cho bạn chiếc bàn phím cơ AKKO 5108S Honkai Impact 3rd Stygian Nymph. Cùng chúng mình tìm hiểu chi tiết hơn về sản phẩm này nhé !',
      status: false
    },
    {
      id: 10,
      name: 'Bàn phím cơ AKKO 5108S Honkai Impact 3rd Yae Sakura',
      price: 2890000,
      image: '../assets/AKKO_5108S_Honkai_Impact_3rd_Yae_Sakura.webp',
      description: 'Thương hiệu bàn phím cơ Akko đã vô cùng nổi tiếng với tính năng cùng thiết kế đặc biệt của sản phẩm. Nhắc đến thiết kế, ta không thể không nhắc đến những chiếc bàn phím nổi bật với các chi tiết dựa theo các tựa game và phim nổi tiếng. Và hôm nay, GEARVN sẽ giới thiệu cho bạn chiếc bàn phím cơ AKKO 5108S Honkai Impact 3rd Yae Sakura. Cùng chúng mình tìm hiểu chi tiết hơn về sản phẩm này nhé !',
      status: true
    },
    {
      id: 11,
      name: 'Bàn phím cơ AKKO 5075B Plus Blue on White',
      price: 2290000,
      image: '../assets/AKKO_5075B_Plus_Blue_on_White.webp',
      description: 'AKKO 5075B Plus Blue on White phá vỡ đi mọi quy tắc về một chiếc bàn phím Gaming. Sở hữu thiết kế vô cùng mềm mại, nhẹ nhàng với tông màu trắng với các chi tiết phối xanh độc đáo, ấn tượng. Layout vô cùng nhỏ gọn cùng nhiều tính năng nổi bật, bạn có thể sử dụng AKKO 5075B Plus ở bất kỳ đâu khi cần.',
      status: true
    },
    {
      id: 12,
      name: 'Bàn phím cơ AKKO 3068B Plus Blue on White',
      price: 1990000,
      image: '../assets/AKKO_3068B_Plus_Blue_on_White.webp',
      description: 'AKKO 3068B Plus Blue on White dòng bàn phím máy tính với nhiều cải tiến về hiệu năng lẫn cả thiết kế. Nổi bật với layout 65%, kết nối linh hoạt với đa thiết bị, tổ hợp phím tiện lợi đáp ứng tốt mọi nhu cầu sử dụng…',
      status: false
    },
    {
      id: 13,
      name: 'Bàn phím cơ AKKO 3108 RF White on Black',
      price: 1590000,
      image: '../assets/AKKO_3108_RF_White_on_Black.webp',
      description: 'AKKO 3108 RF White on Black dòng bàn phím máy tính sở hữu thiết kế tối giản tạo nên sự khác biệt cho mọi góc máy làm việc và giải trí. Bất kể bạn là ai, dùng bàn phím cho công việc gì? AKKO 3108 RF White on Black sẽ làm cho bạn cảm thấy hài lòng và có những trải nghiệm riêng biệt.',
      status: false
    },
    {
      id: 14,
      name: 'Bàn phím cơ AKKO 3108 RF Black on White',
      price: 1590000,
      image: '../assets/AKKO_3108_RF_Black_on_White.webp',
      description: 'AKKO 3108 RF Black on White dòng bàn phím máy tính sở hữu thiết kế tối giản tạo nên sự khác biệt cho mọi góc máy làm việc và giải trí. Bất kể bạn là ai, dùng bàn phím cho công việc gì? AKKO 3108 RF Black on White sẽ làm cho bạn cảm thấy hài lòng và có những trải nghiệm riêng biệt.',
      status: true
    },
    {
      id: 15,
      name: 'Bàn phím cơ AKKO 3098B Multi-modes World Tour Tokyo R2 (TTC Switch)',
      price: 2699000,
      image: '../assets/AKKO_3098B_World_Tour_Tokyo_R2.webp',
      description: 'Bàn phím cơ AKKO 5108 World Tour Tokyo R2 SP được thiết kế hình ảnh biểu tượng của Tokyo là núi Phú Sĩ và hoa anh đào. Series World Tour không chỉ là công cụ đánh máy mà còn có thể đóng vai trò là phương tiện giao tiếp và tương tác văn hóa, điều này tạo nét độc đáo trên sản phẩm này.',
      status: true
    },
  ]
}
