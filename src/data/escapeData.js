const population = 32657400
const full = "▬"
const empty ="▭"
const width = 10;
// generate bar 
function generateBar(value){
    const pop = Math.min(Math.max(value, 0), population);
    const progress = pop / population * 100;
    const progressInt = Math.floor(progress * width / 100);
    const restInt = width - progressInt;

    return `${full.repeat(progressInt)}${empty.repeat(restInt)}`;

}

// get percentage
function vaccinatedPercentage(value, population) {
    return (value / population * 100).toFixed(2) + "%" ;
}

// use regex to make the number to currency type 
function parseCurrency(num){
    return(num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','))
} 


// process the data 
function getFormatedData() {
    var dates = getDates()
    var data = fetchVaccineDetails(dates)
    var fully_percent = "*Fully Vaccinated* " + vaccinatedPercentage(parseInt(data[0].total_dose_2), population) + "\n" + generateBar(parseInt(data[0].total_dose_2)) + "\n\n"
    var booster_percent = "*Booster Dose* " + vaccinatedPercentage(parseInt(data[0].total_booster_dose), population) + "\n" + generateBar(parseInt(data[0].total_booster_dose)) + "\n\n\n" 
    var fully_vaccinated = "*Fully Vaccinated*: " + parseCurrency(Number(data[0].total_dose_2)) + " (+" + parseCurrency(data[0].new_dose_2) + ")\n"
    var first_dose = "*Dose1 Completed*: " + parseCurrency(Number(data[0].total_dose_1)) + " (+" +  data[0].new_dose_1 + ")\n"
    var booster_dose = "*Booster Dose*: " + parseCurrency(Number(data[0].total_booster_dose)) + " (+" +  parseCurrency(data[0].new_booster_dose) + ")\n"
    var kid_first_dose = "*Child Dose1 *: " + parseCurrency(Number(data[0].total_child_dose_1)) + " (+" +  parseCurrency(data[0].new_child_dose_1) + ")\n"
    var kid_fully_vaccinated = "*Child Fully Vaccinated*: " + parseCurrency(Number(data[0].total_child_dose_2)) + " (+" +  parseCurrency(data[0].new_child_dose_2) + ")\n"
    var total_dose_given = "*Total Dose Given*: " + parseCurrency(Number(data[0].total_dose_given)) + "\n"
    var res = fully_percent + booster_percent +  fully_vaccinated + first_dose + booster_dose + kid_first_dose + kid_fully_vaccinated + total_dose_given + "\n\nUpdated in " + getDates()
    return res
}