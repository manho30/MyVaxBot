const getVaccination = async () => {
    return await UrlFetchApp.fetch("https://raw.githubusercontent.com/MoH-Malaysia/covid19-public/main/vaccination/vax_malaysia.csv").toString();
}

const getCases = async () => {
    return await UrlFetchApp.fetch("https://raw.githubusercontent.com/MoH-Malaysia/covid19-public/main/epidemic/cases_malaysia.csv").toString();
}


const getSchoolVaccination = async () => {
    return await UrlFetchApp.fetch("https://raw.githubusercontent.com/MoH-Malaysia/covid19-public/main/vaccination/vax_school.csv").toString()
}
