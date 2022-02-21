const getFormatCase = (data, dates) => {
    if(!dates){
        dates = getDates()
    }
    if(!isNaN(parseInt(data[0].confirmed_caase))){
        return "Confirm cases: " + parseCurrency(Number(data[0].confirmed_caase)) + "\n" 
                + "Import cases: " + parseCurrency(Number(data[0].case_import)) + "\n" 
                + "Local cases: " + parseCurrency(Number(data[0].case_local)) + "\n\n" 
                + "Data as " + data[0].date
    } else {
        return "*Malaysia government didn't provide the complete data.*"
    } 
}

const getFormatSchoolVaccination = (data) => {
    if (data[0].school_name) {
        return generateMarkdownLink(data[0].school_name, data[0].lat + "," + data[0].lng)
                + " (" + data[0].school_code + ")" + "\n\n" 
                + "*Sumary*\n"
                + "*Staff (including support staff):*\n"
                + "*Fully Vaccinated:* " + toPercent(data[0].teacher_dose_2) + "\n" 
                + "*At Least 1 Dose:* " + toPercent(data[0].teacher_dose1) + "\n\n" 
                + "*Students (born 2009 or earlier)*:\n" 
                + "*Fully Vaccinated:* " + toPercent(data[0].all_dose_2) + "\n" 
                + "*At Least one 1 Dose:* " + toPercent(data[0].all_dose_1) + "\n"
    } else {
        return "No results found.\nIf your school is not listed, please ask your school's administration to fill in [this template](https://covidnow.moh.gov.my/template_bpswasta.xlsx) and email it to covidnow@moh.gov.my (CC razali.daiman@moe.gov.my) using the subject 'COVIDNOW Inclusion'."
    }
}

function getFormatVaccination (data, dates) {
    if (!dates) {
        dates = getDates()
    }
    if(!isNaN(parseInt(data[0].total_dose_2))){
       const res = "*Adults(18+)*" + "\n\n" + "*Fully Vaccinated*" + vaccinatedPercentage(Number(data[0].total_dose_2), population) + "(" + vaccinatedPercentage(Number(data[0].new_dose_2), population) + "People)" + "\n" 
                 + generateBar(data[0].total_dose_2) + "\n\n" 
                 + "*Booster Dose*" + vaccinatedPercentage(Number(data[0].total_booster_dose), population) + "(" + vaccinatedPercentage(Number(data[0].new_booster_dose), population) + "People)" + "\n" 
                 + generateBar(data[0].total_booster_dose) + "\n\n" 
                 + `As ${data[0].date} rate will take more ${countNeededDay(parseInt(data[0].new_booster_dose), Number(data[0].total_booster_dose))} days to reach 80% coverage about Booster Dose.` + "\n\n" 
                 + "*Fully Vaccinated*: " + parseCurrency(Number(data[0].total_dose_2)) + " (+" + parseCurrency(data[0].new_dose_2) + ")\n"
                 + "*1st Dose*: " + parseCurrency(Number(data[0].total_dose_1)) + " (+" +parseCurrency(data[0].new_dose_1) + ")\n"
                 + "*Booster Dose*: " + parseCurrency(Number(data[0].total_booster_dose)) + " (+" + parseCurrency(data[0].new_booster_dose) + ")\n\n"
                 + "*Adolescents (12-17)*" + "\n\n"
                 + "*Fully Vaccinated*: " + parseCurrency(Number(data[0].total_adol_dose_2)) + " (+" + parseCurrency(data[0].new_adol_dose_2) + ")\n"
                 + "*1st Dose*: " + parseCurrency(Number(data[0].total_adol_dose_1)) + " (+" + parseCurrency(data[0].new_adol_dose_1) + ")\n\n"
                 +  "*Children (5-11)*" + "\n\n"
                 + "*Fully Vaccinated*: " + parseCurrency(Number(data[0].total_child_dose_2)) + " (+" + parseCurrency(data[0].new_child_dose_2) + ")\n"
                 + "*1st Dose*: " + parseCurrency(Number(data[0].total_child_dose_1)) + " (+" + parseCurrency(data[0].new_child_dose_1) + "\n\n" 
                 + "*Total*: " + parseCurrency(Number(data[0].total_dose_given)) + "(" + parseCurrency(Number(data[0].new_total_dose_given)) + ")"
        return res;
    } else {
        return "*Malaysia government didn't provide the complete data.*";
    }
}
