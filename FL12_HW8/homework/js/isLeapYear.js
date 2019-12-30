function isLeapYear(year_rec) {
    let year = new Date(year_rec).getFullYear()
    let conf_leap_year = "" + year + " is a leap year";
    let deny_leap_year = "" + year + " is not a leap year";
    let invalid_date = "Invalid date";
    if (isNaN(year)) {
        return invalid_date;
    }
    if (new Date(year, 1, 29).getDate() === 29) {
        return conf_leap_year;
    } else {
        return deny_leap_year;
    }
}

isLeapYear('2020-01-01 00:00:00');