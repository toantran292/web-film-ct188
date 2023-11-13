import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
            "Home": "Home",
            "Anime": "Anime",
            "Sport": "Sport",
            "Series": "Series",
            "About": "About",
        }
    },
    vi: {
        translation: {
            "Home": "Trang chủ",
            "Anime": "Anime",
            "Sport": "Thể thao",
            "Series": "Phim bộ",
            "About": "Về chúng tôi",
        }
    }
}

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "vi",

        interpolation: {
            escapeValue: false
        }
    });

export default i18n;