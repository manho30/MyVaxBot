const getVaccination = () => {
    return UrlFetchApp.fetch("https://raw.githubusercontent.com/MoH-Malaysia/covid19-public/main/vaccination/vax_malaysia.csv").toString();
}
const getCases = () => {
    return UrlFetchApp.fetch("https://raw.githubusercontent.com/MoH-Malaysia/covid19-public/main/epidemic/cases_malaysia.csv").toString();
}
const getSchoolVaccination = () => {
    return UrlFetchApp.fetch("https://raw.githubusercontent.com/MoH-Malaysia/covid19-public/main/vaccination/vax_school.csv").toString()
}