const getFormatCase = (data, dates) => {
    if(!dates){
        dates = getDates()
    }
    if(!isNaN(parseInt(data[0].confirmed_caase))){
        const res = "*Confirm cases*: " + parseInt(data[0].confirmed_caase) + "\n" 
                + "*Import cases*: " + parseInt(data[0].case_import) + "\n" 
                + "*Local cases*: " + parseInt(data[0].case_local) + "\n\n" 
                + "Data as " + data[0].date
        return res
    } else {
        return "*Not Found*"
    } 
}

const getFormatSchoolVaccination = (data) => {
    if (data[0].school_name) {
        const res = generateMarkdownLink(data[0].school_name, data[0].lat + "," + data[0].lng)
                + " (" + data[0].school_code + ")" + "\n\n" 
                + "*Sumary*\n"
                + "*Staff (including support staff):*\n"
                + "*Fully Vaccinated:* " + toPercent(data[0].teacher_dose_2) + "\n" 
                + "*At Least 1 Dose:* " + toPercent(data[0].teacher_dose1) + "\n\n" 
                + "*Students (born 2009 or earlier)*:\n" 
                + "*Fully Vaccinated:* " + toPercent(data[0].all_dose_2) + "\n" 
                + "*At Least one 1 Dose:* " + toPercent(data[0].all_dose_1) + "\n"
        return res;
    } else {
        return "No results found.\nIf your school is not listed, please ask your school's administration to fill in [this template](https://covidnow.moh.gov.my/template_bpswasta.xlsx)and email it to covidnow@moh.gov.my (CC razali.daiman@moe.gov.my) using the subject 'COVIDNOW Inclusion'."
    }
}

const getFormatVaccination = (data, dates) => {
    if (!dates) {
        dates = getDates()
    }
    if(!isNaN(parseInt(data[0].total_dose_2))){
        const results = (data) => {
            const date = countNeededDay(parseInt(data[0].new_booster_dose), parseInt(data[0].total_booster_dose))
            const fully_percent = "*Fully Vaccinated* *" + vaccinatedPercentage(parseInt(data[0].total_dose_2), population) + " (+" +  vaccinatedPercentage(parseInt(data[0].new_dose_2), population) + " People*)\n" + generateBar(parseInt(data[0].total_dose_2)) + "\n\n"
            const booster_percent = "*Booster Dose* *" + vaccinatedPercentage(parseInt(data[0].total_booster_dose), population) + " (+" + vaccinatedPercentage(parseInt(data[0].new_booster_dose), population) + " People*)\n" + generateBar(parseInt(data[0].total_booster_dose)) + "\n\n"
            const needed_day = `At today rate, it would take approximately more ${date} days to reach 80% coverage about booster dose.\n\n\n`
            const fully_vaccinated = "*Fully Vaccinated*: " + parseCurrency(Number(data[0].total_dose_2)) + " (+" + parseCurrency(data[0].new_dose_2) + ")\n"
            const first_dose = "*Dose1 Completed*: " + parseCurrency(Number(data[0].total_dose_1)) + " (+" + data[0].new_dose_1 + ")\n"
            const booster_dose = "*Booster Dose*: " + parseCurrency(Number(data[0].total_booster_dose)) + " (+" + parseCurrency(data[0].new_booster_dose) + ")\n"
            const kid_first_dose = "*Child Dose1 *: " + parseCurrency(Number(data[0].total_child_dose_1)) + " (+" + parseCurrency(data[0].new_child_dose_1) + ")\n"
            const kid_fully_vaccinated = "*Child Fully Vaccinated*: " + parseCurrency(Number(data[0].total_child_dose_2)) + " (+" + parseCurrency(data[0].new_child_dose_2) + ")\n"
            const total_dose_given = "*Total Dose Given*: " + parseCurrency(Number(data[0].total_dose_given)) + "\n"
            const res = fully_percent + booster_percent + needed_day + fully_vaccinated + first_dose + booster_dose + kid_first_dose + kid_fully_vaccinated + total_dose_given + "\n\nData as " + data[0].date
            return res
        }
        return results(data)
    } else {
        return "*Not found*";
    }
}
