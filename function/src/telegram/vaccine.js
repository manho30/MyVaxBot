function getVaccination(dates) {
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

function getCases(dates) {
    var req = UrlFetchApp.fetch("https://raw.githubusercontent.com/MoH-Malaysia/covid19-public/main/epidemic/cases_malaysia.csv").toString();
    const res = req.split(/\n/);
    return res
        .filter((res) => {
            const data = res.split(",");
            return dates.includes(data[0]);
        })
        .map((res) => {
            const data = res.split(",");
            return {
                date: data[0],
                confirmed_caase: parseInt(data[1]),
                case_import: parseInt(data[2]),
                case_local: parseInt(data[1]) - parseInt(data[2])
            };
        });
}

function getSchoolVaccination(code) {
    var req = UrlFetchApp.fetch("https://raw.githubusercontent.com/MoH-Malaysia/covid19-public/main/vaccination/vax_school.csv").toString()
    const res = req.split(/\n/);
    return res
        .filter((res) => {
            const data = res.split(",");
            return code.toUpperCase().replace(" ", "").includes(data[0]);
        })
        .map((res) => {
            const data = res.split(",");
            return {
                school_name: data[1],
                school_code: data[0].toString(),
                lat: data[5], 
                lng: data[6], 
                teacher_dose1: data[7],
                teacher_dose_2: data[8],
                all_dose_1: data[9],
                all_dose_2: data[10],
                student_12_dose_1: data[11],
                student_12_dose_2: data[18],
                student_13_dose_1: data[12],
                student_13_dose_2: data[19],
                student_14_dose_1: data[13],
                student_14_dose_2: data[20],
                student_15_dose_1: data[14],
                student_15_dose_2: data[21],
                student_16_dose_1: data[15],
                student_16_dose_2: data[22],
                student_17_dose_1: data[16],
                student_17_dose_2: data[23],
                student_18_dose_1: data[17],
                student_18_dose_2: data[24]
            };
        });
}