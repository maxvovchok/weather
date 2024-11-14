import { createI18n } from "vue-i18n";

const messages = {
  en: {
    home: "Home",
    homeTitle: "Enter the city and find out the weather",
    aboutTitle: "You did not choose, not one city",
    placeholderInput: "Enter the city",
    day: "Day",
    date: "Date",
    feelsLike: "Feels like",
    tempMin: "Min. temperature",
    tempMax: "Max. temperature",
    pressure: "Pressure",
    humidity: "Humidity",
    cloudiness: "Cloudiness",
    description: "Description",
    wind: "Wind",
    hpa: "hPa",
    ms: "m/s",

    day: "Day",
    monday: "Monday",
    tuesday: "Tuesday",
    wednesday: "Wednesday",
    thursday: "Thursday",
    friday: "Friday",
    saturday: "Saturday",
    sunday: "Sunday",

    weatherDescriptions: {
      "clear sky": "clear sky",
      "few clouds": "few clouds",
      "scattered clouds": "scattered clouds",
      "overcast clouds": "gloomy clouds",
      "light rain": "light rain",
      "broken clouds": "broken clouds",
      "shower rain": "shower rain",
      rain: "rain",
      thunderstorm: "thunderstorm",
      snow: "snow",
      mist: "mist",
    },

    week: "Week",
    selected: "Selected",

    addWarningCity: "The city has already been added to the selected cities",
    addCity: "The city has been successfully added to the favorites",
    close: "Close",
    ok: "OK",

    addBlock: "Add Block",
    removeBlock: "Delete Block",
    remove: "Delete",
    cancel: "Cancel",

    maxBlock: "Maximum 5 blocks",
    addInfo: "To add another block, first delete the previous blocks",

    warning: "After you press Delete, the block with this city will be deleted",

    temperature: "Temperature",
  },

  uk: {
    home: "Головна",
    homeTitle: "Введіть місто і дізнайтеся погоду",
    aboutTitle: "Ви не обрали, не одне місто",
    placeholderInput: "Введіть місто",
    day: "День",
    date: "Дата",
    feelsLike: "Відчувається як",
    tempMin: "Мін. температура",
    tempMax: "Макс. температура",
    pressure: "Тиск",
    humidity: "Вологість",
    cloudiness: "Хмарність",
    description: "Опис",
    wind: "Вітер",
    hpa: "гПа",
    ms: "м/с",

    day: "День",
    monday: "Понеділок",
    tuesday: "Вівторок",
    wednesday: "Середа",
    thursday: "Четвер",
    friday: "П’ятниця",
    saturday: "Субота",
    sunday: "Неділя",

    weatherDescriptions: {
      "clear sky": "ясне небо",
      "few clouds": "мало хмар",
      "scattered clouds": "розсіяні хмари",
      "overcast clouds": "похмурі хмари",
      "light rain": "дрібний дощ",
      "broken clouds": "зламані хмари",
      "shower rain": "зливовий дощ",
      rain: "дощ",
      thunderstorm: "гроза",
      snow: "сніг",
      mist: "туман",
    },

    week: "Тиждень",
    selected: "Обране",

    addWarningCity: "Місто вже додане до обраних міст",
    addCity: "Місто успішно додано до обраних",
    close: "Закрити",
    ok: "Добре",

    addBlock: "Додати блок",
    removeBlock: "Видалити Блок",
    remove: "Видалити",
    cancel: "Відмінити",

    maxBlock: "Максимум 5 блоків",
    addInfo: " Щоб додавти ще один блок спочатку видаліть попередні блоки",

    warning:
      " Після того як ви натиснете Видалити, блок з цим містом буде видалено",
  },

  temperature: "Температура",
};

const i18n = createI18n({
  locale: localStorage.getItem("languages") || "en",
  fallbackLocale: "en",
  messages,
});

export default i18n;
