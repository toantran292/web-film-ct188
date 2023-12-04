import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      Home: "Home",
      Anime: "Anime",
      Sport: "Sport",
      Series: "Series",
      About: "About",
      Category: "Categories",
      Broadcast: "Broadcasting",
      Finish: "Finshing",
      New: "New",
      //Anime
      Action: "Action",
      Adventure: "Adventure",
      Fiction: "Fiction",
      Emotional: "Emotional",
      School: "School",
      ShangriLaFrontier: "Shangri La Frontier",
      Haikyuu: "Haikyuu (season 1)",
      DrStone: "Dr.Stone (season 3B)",
      Jujutsu: "Jujutsu Kaisen",
      MyHero: "My Hero Academia",
      //Sport
      All: "ALL",
      Hot: "Hot",
      dtcl: "TFT",
      Bakeball: "Bakeball",
      Review: "Review",
      Live: "Live",
      football: "Match between Vietnam and Bangladesh",
      //Series
      ctnh: "Apple tree blooms",
      Introduce: "Introduce",
      Services: "Services",
      Contact: "Contact",
      Help: "Help",
      Watch: "Watch",
      MostPopular: "Most Popular",
      Categories: "Categories",
      Partners: "Partners",
      ChargesAndCalculated: "Charges and how they are calculated",
      TypesOfServices: "Types of services",
      ServicePack: "Service Pack",
      ContentRental: "Content Rental",
      ChargesServiceCharges: "Charges, service charges",
      SFee: "5$ per month",
      CFee: "7$ per 48 hours",
      CaculateFee: "Calculate charges, service fees",
      CaculateSFee: "Calculated for a full month",
      CaculateCFee: "Calculated for a full 48 hours",
      Company: "Company",
      Legal: "Legal",
      Support: "Support",
      Install: "Install App",
      Blog: "Blog",
      Careers: "Careers",
      HelpCenter: "Help Center",
      SafetyCenter: "Safety Center",
      CommunityGuidelines: "Community Guidelines",
      CookiesPolicy: "Cookies Policy",
      PrivacyPolicy: "Privacy Policy",
      TermsOfService: "Terms of Service",
      LawEnforcement: "Law Enforcement",
      MovieDetail:
        "Short and concise descriptions of the film will be here, where you will outline the key ideas to kickstart your excellent movie",
      Comment: "Comment",
      selectEpisode: "Select episode",
      Episode: "Eps",
      RelatedContent: "Related Content",
      // MODEL
      LOGIN: "Login",
      CANCEL: "Cancel",
      DONT_HAVE_ACCOUNT: "Don't have an account",
      PASSWORD: "Password",
      REQUIRED: "Requried",
      INVALID_EMAIL: "Invalid email",
      INVALID_PASSWORD: "Invalid password",
      REGISTER: "Register",
      REPASSWORD: "Repassword",
      REGISTER_SUCCESS: "Register success",
      LOGIN_SUCCESS: "Login success",
      LOG_OUT_SUCCESS: "Log out success",
      LOG_OUT: "Log out",
      Submit: "Submit",
      CommentContent: "Write your comment...",
    },
  },
  vi: {
    translation: {
      Home: "Trang chủ",
      Anime: "Anime",
      Sport: "Thể thao",
      Series: "Phim bộ",
      About: "Về chúng tôi",
      Category: "Thể loại",
      Action: "Hành động",
      Adventure: "Phiêu lưu",
      Fiction: "Viễn tưởng",
      Emotional: "Tình cảm",
      School: "Học đường",
      Broadcast: "Đang phát sóng",
      Finish: "Hoàn thành",
      New: "Mới",

      //Anime
      ShangriLaFrontier: "Thợ Săn Game Rác Thách Thức Game Cấp Thánh",
      Haikyuu: "Vua Bóng Chuyền (Phần 1)",
      DrStone: "Hồi Sinh Thế Giới (Phần 3B)",
      Jujutsu: "Chú thuật Hồi Chiến",
      MyHero: "Học Viện anh hùng",
      //Sport
      All: "Tất cả",
      Hot: "Tin mới nhất",
      dtcl: "Đấu trường chân lý",
      Bakeball: "Bóng rổ",
      Review: "Xem lại",
      Live: "Trực Tiếp",
      football: "Trận đấu giữa Việt Nam và Bangladesh",
      //Series
      ctnh: "Cây táo nở hoa",
      Introduce: "Giới thiệu",
      Services: "Các loại dịch vụ",
      Contact: "Liên hệ",
      Help: "Trợ giúp",
      Watch: "Xem phim",
      MostPopular: "Phổ biến",
      Categories: "Danh mục",
      Partners: "Các đối tác",
      ChargesAndCalculated: "Cước phí và cách tính cước phí",
      TypesOfServices: "Các loại hình dịch vụ",
      ServicePack: "Gói Dịch Vụ",
      ContentRental: "Thuê Nội Dung",
      ChargesServiceCharges: "Cước, phí dịch vụ",
      SFee: "100 000 VND/tháng",
      CFee: "150 000 VND/2 ngày",
      CaculateFee: "Cách tính cước, phí dịch vụ",
      CaculateSFee: "Được tính trọn tháng kể từ thời điểm đăng ký Gói",
      CaculateCFee: "Được tính trọn 48 giờ kể thời điểm đăng ký thuê nội dung",
      Company: "Công ty",
      Support: "Hỗ trợ",
      Legal: "Chính sách",
      Install: "Cài đặt tại",
      Blog: "Trang tin",
      Careers: "Nghề nghiệp",
      HelpCenter: "Trung tâm trợ giúp",
      SafetyCenter: "Trung tâm an toàn",
      CommunityGuidelines: "Nguyên tắc cộng đồng",
      CookiesPolicy: "Chính sách Cookies",
      PrivacyPolicy: "Chính sách bảo mật",
      TermsOfService: "Điều khoản dịch vụ",
      LawEnforcement: "Pháp luật",
      MovieDetail:
        "Các mô tả ngắn ngọn về bộ phim sẽ ở đây, bạn sẽ nêu lên các ý chính để mở đầu cho bộ phim tuyệt vời của mình",
      Comment: "Bình luận",
      selectEpisode: "Chọn tập",
      Episode: "Tập",
      RelatedContent: "Nội dung liên quan",
      // MODEL
      LOGIN: "Đăng nhập",
      CANCEL: "Hủy",
      DONT_HAVE_ACCOUNT: "Không có tài khoản",
      PASSWORD: "Mật khẩu",
      REQUIRED: "Không để trống",
      INVALID_EMAIL: "Email không hợp lệ",
      INVALID_PASSWORD: "Mật khẩu không hợp lệ",
      REGISTER: "Đăng ký",
      REPASSWORD: "Nhập lại mật khẩu",
      REGISTER_SUCCESS: "Đăng ký thành công",
      LOGIN_SUCCESS: "Đăng nhập thành công",
      LOG_OUT_SUCCESS: "Đăng xuất thành công",
      LOG_OUT: "Đăng xuất",
      Submit: "Bình luận",
      CommentContent: "Nhập bình luận...",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "vi",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
