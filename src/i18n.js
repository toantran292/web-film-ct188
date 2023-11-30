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
      Introduce: "Introduce",
      Services: "Services",
      Contact: "Contact",
      Help: "Help",
      Watch: "Watch",
    },
  },
  vi: {
    translation: {
      Home: "Trang chủ",
      Anime: "Anime",
      Sport: "Thể thao",
      Series: "Phim bộ",
      About: "Về chúng tôi",
      Introduce: "Giới thiệu",
      Services: "Các loại dịch vụ",
      Contact: "Liên hệ",
      Help: "Trợ giúp",
      Watch: "Xem phim",
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
