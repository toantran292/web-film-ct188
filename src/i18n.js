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
      Category: "Category",
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
      All: "Tất cả",
      Hot: "Tin mới nhất",
      dtcl: "Đấu trường chân lý",
      Bakeball: "Bóng rổ",
      Review: "Xem lại",
      Live: "Trực Tiếp",
      football: "Match between Vietnam and Bangladesh",
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
