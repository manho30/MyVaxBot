const getVaccination = () => {
    const baseUrl = "https://raw.githubusercontent.com/MoH-Malaysia/covid19-public/main/vaccination";
    const req = UrlFetchApp.fetch(baseUrl + "/vax_malaysia.csv").toString();
    return req;
}

const getCases = () => {
    return UrlFetchApp.fetch("https://raw.githubusercontent.com/MoH-Malaysia/covid19-public/main/epidemic/cases_malaysia.csv").toString();
}


const getSchoolVaccination = () => {
    return UrlFetchApp.fetch("https://raw.githubusercontent.com/MoH-Malaysia/covid19-public/main/vaccination/vax_school.csv").toString()
}
