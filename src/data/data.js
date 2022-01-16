function fetchVaccineDetails(dates) {
    var baseUrl = "https://raw.githubusercontent.com/MoH-Malaysia/covid19-public/main/vaccination";
    var req = UrlFetchApp.fetch(baseUrl + "/vax_malaysia.csv").toString();
    const res = req.split(/\n/);
    return res
        .filter((res) => {
            const data = res.split(",");
            return dates.includes(data[0]);
        })
        .map((res) => {
            const data = res.split(",");
            // return the data like json formatted.
            return {
                date: data[0],
                new_dose_1: parseInt(data[1]),
                new_dose_2: parseInt(data[2]),
                new_child_dose_1: parseInt(data[4]),
                new_child_dose_2: parseInt(data[5]),
                new_booster_dose: parseInt(data[6]),
                total_dose_1: parseInt(data[7]),
                total_dose_2: parseInt(data[8]),
                total_dose_given: parseInt(data[9]),
                total_child_dose_1: parseInt(data[10]),
                total_child_dose_2: parseInt(data[11]),
                total_booster_dose: parseInt(data[12]),
            };
        });
}
function getDates() {
    var dates = []
    var today = new Date();
    var todayMonth = today.getMonth() + 1
    if (parseInt(todayMonth) < 10) {
        todayMonth = "0" + todayMonth;
    }
    // - 1 due to Malaysia government only post the yesterday data in the same day.
    var todayDate = today.getDate() - 1
    if (parseInt(todayDate) < 10) {
        todayDate = "0" + todayDate;
    }
    var date = today.getFullYear() + "-" + todayMonth + "-" + todayDate;
    return date
}
// use for debug
function testGetResult() {
    var data = fetchVaccineDetails(getDates())
    Logger.log(data)
}