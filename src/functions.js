import JDate from 'jalali-date';

const dateHandler = (date) => {

    const gDate = new Date(date);
    const jdate = new JDate(gDate);

    const days = ["یکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنج‌شنبه", "جمعه", "شنبه"];
    const months = ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"];

    const dayName = days[jdate.getDay()];
    const day = jdate.getDate();

    // کم کردن یک ماه به صورت دستی
    let monthIndex = jdate.getMonth() - 1;
    if (monthIndex < 0) {
        monthIndex = 11; // اگر ماه منفی شد، یعنی اسفند سال قبل
    }
    const month = months[monthIndex];
    const year = jdate.getFullYear();

    return { dayName, day, month, year }


}

function formatTime(unixTimestamp) {
    const date = new Date(unixTimestamp * 1000);
    return date.toLocaleTimeString("fa-IR", {
        hour: "2-digit",
        minute: "2-digit",

    });
}


export { dateHandler, formatTime }